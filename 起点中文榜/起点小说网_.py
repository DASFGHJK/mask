import random
import time
import requests
from lxml import etree
import re
import pandas as pd
from requests.exceptions import RequestException
import execjs
import os





# 通用配置
COOKIES = {
    'e1': '%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A5%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_P_rank_05%22%2C%22eid%22%3A%22qd_C44%22%7D',
    'newstatisticUUID': '1744096611_1730334174',
    '_csrfToken': 'EnxMwKDJZJQjtLW94kyskNsCcoEWKmJr4ZrFiEoF',
    'fu': '1431135024',
    'supportWebp': 'true',
    'supportwebp': 'true',
    'e2': '%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A9%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A110%22%2C%22l2%22%3A2%7D',
    'x-waf-captcha-referer': '',
    'traffic_utm_referer': '',
    'Hm_lvt_f00f67093ce2f38f215010b699629083': '1744082292,1744096575,1744167387,1744892631',
    'Hm_lpvt_f00f67093ce2f38f215010b699629083': '1744892631',
    'HMACCOUNT': '87130C7627252F2B',
    '_ga': 'GA1.2.764512371.1744892632',
    '_gid': 'GA1.2.572277947.1744892632',
    '_gat_gtag_UA_199934072_2': '1',
    '_ga_FZMMH98S83': 'GS1.1.1744892631.1.0.1744892638.0.0.0',
    '_ga_PFYW0QLV3P': 'GS1.1.1744892631.2.0.1744892638.0.0.0',
    'w_tsfp': 'ltvuV0MF2utBvS0Q7a7hnUmoEjAgcj44h0wpEaR0f5thQLErU5mB1Y5zvM3zOXbe5cxnvd7DsZoyJTLYCJI3dwMUR5rAcYwR2A+SkdVzitoSUhZuQMrbW1FLJLgn6WZPdXhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TuI5l3yfw59VetF0kHDhyoWXXol4ES+JbpVMUmkcceoSqA=',
}

HEADERS = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
}

# 随机User-Agent生成器
def get_random_ua():
    user_agents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    ]
    return random.choice(user_agents)

# 带重试机制的请求函数
def fetch_url(url, max_retries=3):
    for _ in range(max_retries):
        try:
            response = requests.get(
                url,
                cookies=COOKIES,
                headers={**HEADERS, 'User-Agent': get_random_ua()},
                timeout=10
            )
            response.raise_for_status()
            return response
        except RequestException as e:
            print(f"请求失败: {e}, 剩余重试次数: {max_retries - _ - 1}")
            time.sleep(random.uniform(1, 3))
    return None

# 书籍详情解析函数
def parse_book_detail(html):
    tree = etree.HTML(html)
    time.sleep(random.randint(1,2))
    # 字数提取
    word_count = tree.xpath('//p[@class="count"]/em[1]/text()')
    word_count = f"{word_count[0]}字" if word_count else "未知"

    # 简介处理
    intro = tree.xpath('//p[@id="book-intro-detail"]//text()')
    intro = "".join(intro).strip() if intro else "无简介"

    return {"字数": word_count, "简介": intro}

# 主爬虫函数
def qidian_spider():
    data = []
    temp_file = "起点读书排行榜_临时.xlsx"
    final_file = "起点读书排行榜.xlsx"

    # 如果临时文件存在，读取已有数据
    if os.path.exists(temp_file):
        try:
            df_existing = pd.read_excel(temp_file)
            data = df_existing.to_dict('records')
            print(f"加载已有数据 {len(data)} 条")
        except Exception as e:
            print(f"读取临时文件失败: {e}")

    for page in range(1, 26):
        print(f"正在抓取第 {page} 页...")
        url = f"https://www.qidian.com/rank/collect/page{page}/"
        response = fetch_url(url)
        if response is None:
            print(f"无法获取第 {page} 页数据")
            continue

        tree = etree.HTML(response.text)
        books = tree.xpath('//div[@id="book-img-text"]/ul/li')

        for book in books:
            try:
                # 基础信息提取
                name = book.xpath('.//h2/a/text()')[0].strip()
                book_url = "https:" + book.xpath('.//h2/a/@href')[0]
                author = book.xpath('.//p[@class="author"]/a[1]/text()')[0].strip()

                # 分类信息处理
                categories = book.xpath('.//p[@class="author"]/a[position()>1]/text()')
                category = "·".join(categories[:2]) if len(categories) >= 2 else "未知"

                # 获取详情页信息
                detail_res = fetch_url(book_url)
                detail = parse_book_detail(detail_res.text) if detail_res else {}
                print(name)
                book_data = {
                    "书名": name,
                    "链接": book_url,
                    "作者": author,
                    "分类": category,
                    **detail
                }
                data.append(book_data)

                # 每次抓取到一本书都保存到临时文件
                df = pd.DataFrame(data)
                df.to_excel(temp_file, index=False)
                print(f"数据已保存到 {temp_file}")

            except Exception as e:
                print(f"数据解析异常: {e}")
                continue

        time.sleep(random.uniform(1, 2))  # 礼貌性延迟

    # 程序正常结束时，将临时文件重命名为最终文件
    if os.path.exists(temp_file):
        os.rename(temp_file, final_file)
        print(f"程序正常结束，数据已保存到 {final_file}")
    else:
        print("未找到临时文件，无数据可保存")

if __name__ == "__main__":
    qidian_spider()