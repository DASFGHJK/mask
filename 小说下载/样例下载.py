import os
import re
import time
import requests
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin
from lxml import etree
from requests.adapters import HTTPAdapter
import chardet

# 初始化线程本地存储
thread_local = threading.local()
#进行随机存储headers
USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15'
]

#获取随机ua，用于避免被网页扫描为爬虫 ，使用时间的来进行ua的变换
def get_random_user_agent():
    """获取随机User-Agent"""
    return USER_AGENTS[int(time.time()) % len(USER_AGENTS)]

#为每个线程创建独立的session
def get_session():
    """为每个线程创建独立的Session对象"""
    if not hasattr(thread_local, "session"):
        thread_local.session = requests.Session()
        adapter = HTTPAdapter(pool_connections=100, pool_maxsize=100)
        thread_local.session.mount('http://', adapter)
        thread_local.session.mount('https://', adapter)
    return thread_local.session


def decode_content(response):
    """统一处理响应内容的编码"""
    detected = chardet.detect(response.content)
    encodings = ['utf-8', 'gbk', 'gb2312', 'big5', 'gb18030']  # 增加 gb18030 编码支持更多汉字

    # 如果检测到的编码置信度比较高，则优先使用改编码
    if detected['confidence'] >= 0.7:  # 提高置信度阈值以减少误判
        try:
            #返回改变吗形式返回的数据
            return response.content.decode(detected['encoding'], errors='strict')
        except UnicodeDecodeError:
            pass

    # 尝试使用预定义的编码列表
    for enc in encodings:
        try:
            return response.content.decode(enc, errors='strict')
        except UnicodeDecodeError:
            continue

    # 如果所有尝试都失败，则使用原始检测结果，但允许错误替换
    return response.content.decode(detected['encoding'], errors='replace')

#获取章节内容，支持重试
def get_chaptercontent(chapter_url, index, max_retries=5):
    """获取章节内容"""
    session = get_session()
    retry_count = 0
    while retry_count < max_retries:
        try:
            headers = {
                'User-Agent': get_random_user_agent(),
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Referer': chapter_url
            }

            response = session.get(chapter_url, headers=headers, timeout=30)
            response.raise_for_status()   #检查是否请求成功

            html = decode_content(response)  #解码HTML中的内容
            selector = etree.HTML(html)   #使用lxml库解析HTML

            # 章节内容提取
            title = selector.xpath('//h1[@class="chaptername"]/text()')
            contents = selector.xpath('//div[@id="txt"]//text()')

            if not title or not contents:
                raise ValueError("内容结构不符合预期")

            chaptercontent = "\n  ".join([content.strip() for content in contents if content.strip()])

            # 数据清洗
            chaptercontent = re.sub(r'『如果章节错误.*?举报』', '', chaptercontent, flags=re.S)
            chaptercontent = re.sub(r'[\s　]{0,6}第.{1,10}[部分章节卷页]{1,2}.{0,30}[\s　\n]{0,6}', '', chaptercontent)
            chaptercontent = re.sub(r'[\s　]{0,6}\d{1,5}.{1,30}[\s　\n]{0,6}', '', chaptercontent)
            chaptercontent = re.sub(r'[ 　]{1,}', '', chaptercontent)

            return (index, title[0].strip(), chaptercontent.strip())

        except requests.exceptions.RequestException as e:
            # print(f"请求失败 [{retry_count + 1}/{max_retries}]: {chapter_url}")
            retry_count += 1
            time.sleep(min(5 * (2 ** retry_count), 30))
        except Exception as e:
            print(f"处理错误: {chapter_url} - {str(e)}")
            retry_count = max_retries

    print(f"章节下载失败: {chapter_url}")
    return (index, None, None)


def download_chapters(base_url, max_threads):
    """下载小说所有章节"""
    try:
        # 获取目录页并解析
        response = requests.get(base_url, headers={'User-Agent': get_random_user_agent()}, timeout=30)
        response.raise_for_status()

        html = decode_content(response)
        selector = etree.HTML(html)
        book_name = selector.xpath('//h1/text()')[0].strip()    #获取小说的文章标题
        print(f'\n开始下载小说: 《{book_name}》\n')

        # 提取章节链接
        chapter_links = selector.xpath('//div[@class="book-chapter-list"]/ul[2]/li/a/@href')
        if not chapter_links:
            raise ValueError("未找到有效的章节链接")

        save_dir = os.path.join(os.getcwd(), '我的小说')
        os.makedirs(save_dir, exist_ok=True)
        output_path = os.path.join(save_dir, f'{book_name}.txt')

        with ThreadPoolExecutor(max_workers=max_threads) as executor:
            futures = [executor.submit(get_chaptercontent, urljoin(base_url, href), idx)
                       for idx, href in enumerate(chapter_links, 1)]

            chapters = []
            for future in as_completed(futures):
                index, title, content = future.result()
                if title and content:
                    chapters.append((index, title, content))
                    print(f"完成章节: {title}")

            chapters.sort(key=lambda x: x[0])

            # 写入文件
            with open(output_path, 'w', encoding='utf-8') as f:
                for idx, title, content in chapters:
                    f.write(f"{title}\n\n{content}\n\n")

        print(f'\n《{book_name}》下载完成')
        return True

    except Exception as e:
        print(f"主流程错误: {str(e)}")
        return False


if __name__ == "__main__":
    default_url = 'https://www.dizishu.cc/b/25348/'    #默认下载网址
    input_url = input(f"请输入小说目录页地址（默认 {default_url}）: ") or default_url

    while True:
        threads_input = input("请输入并发线程数（1-100，默认10）: ") or "10"
        if threads_input.isdigit() and 1 <= int(threads_input) <= 100:
            max_threads = int(threads_input)   #进行多线程下载
            break
        print("输入无效，请输入1-100之间的整数")

    start_time = time.time()
    success = download_chapters(input_url, max_threads)   #使用下载函数
    elapsed = time.time() - start_time

    if success:
        print(f"总耗时: {elapsed:.2f}秒")
    else:
        print("下载过程中发生错误")
    input("下载完成，小说保存在“我的小说”文件夹内，回车退出！")