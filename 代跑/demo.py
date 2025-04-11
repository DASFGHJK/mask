
import os
import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin, quote
import time
import random
import logging

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# 配置
desktop = os.path.join(os.path.expanduser('~'), 'Desktop')
save_folder = os.path.join(desktop, 'a')
os.makedirs(save_folder, exist_ok=True)

# 更新的用户代理列表
USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0'
]


def get_random_headers(referer=None):
    """生成随机请求头"""
    headers = {
        'User-Agent': random.choice(USER_AGENTS),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
    if referer:
        headers['Referer'] = referer
    return headers


def sanitize_filename(filename):
    """清理文件名中的非法字符"""
    return re.sub(r'[\\/*?:"<>|]', '', filename)


def download_image(url, filename, referer=None):
    """下载图片文件"""
    try:
        headers = get_random_headers(referer)
        response = requests.get(url, headers=headers, stream=True, timeout=20)
        response.raise_for_status()
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        logging.info(f"成功下载: {filename}")
        return True
    except requests.exceptions.RequestException as e:
        logging.error(f"下载失败，URL: {url}, 错误信息: {str(e)}")
        return False
    except Exception as e:
        logging.error(f"下载出错，URL: {url}, 错误信息: {str(e)}")
        return False


def extract_image_urls(soup):
    """从页面中提取所有图片URL"""
    image_urls = []

    # 尝试多种选择器以适应网站结构变化
    selectors = [
        ('a.imageItem img', 'data-src'),  # 主选择器
        ('div.image-box img', 'data-src'),
        ('div.img img', 'data-src'),
        ('img.preview-img', 'src'),
        ('img[data-src]', 'data-src'),
        ('img', 'src')
    ]

    for selector, attr in selectors:
        images = soup.select(selector)
        for img in images:
            img_url = img.get(attr)
            if img_url and img_url not in image_urls:
                if not img_url.startswith(('http:', 'https:')):
                    img_url = urljoin('https://www.vcg.com', img_url)
                image_urls.append((img_url, img.get('alt', '')))
        if image_urls:
            break

    return image_urls


def crawl_vcg(keyword, target_count=200):
    """爬取VCG网站指定关键词的图片"""
    logging.info(f"\n=== 开始从VCG搜索并下载'{keyword}'的图片 ===")
    base_url = "https://www.vcg.com"
    search_url = f"{base_url}/creative-image/{quote(keyword)}/"

    downloaded = 0
    page = 1
    session = requests.Session()

    while downloaded < target_count:
        try:
            # 随机延迟
            delay = random.uniform(3, 8)
            logging.info(f"\n等待 {delay:.1f} 秒...")
            time.sleep(delay)

            # 构造当前页URL
            current_url = f"{search_url}?page={page}" if page > 1 else search_url
            logging.info(f"正在获取第 {page} 页: {current_url}")

            # 获取搜索页
            response = session.get(
                current_url,
                headers=get_random_headers(base_url),
                timeout=20
            )
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')

            # 提取图片URL
            image_urls = extract_image_urls(soup)
            logging.info(f"本页找到 {len(image_urls)} 张图片")

            if not image_urls:
                logging.warning("⚠️ 未找到图片，尝试备用选择器...")
                # 尝试备用方法
                image_urls = []
                for img in soup.find_all('img'):
                    img_url = img.get('data-src') or img.get('src')
                    if img_url and 'vcg.com' in img_url:
                        image_urls.append((img_url, img.get('alt', '')))
                logging.info(f"通过备用方法找到 {len(image_urls)} 张图片")

            if not image_urls:
                logging.warning("⚠️ 仍然未找到图片，可能网站结构已变化")
                break

            # 下载图片
            for img_url, alt_text in image_urls:
                if downloaded >= target_count:
                    break

                title = sanitize_filename(alt_text or f"{keyword}_{downloaded + 1}")
                filename = os.path.join(save_folder, f'vcg_{downloaded + 1}_{title}.jpg')

                logging.info(f"正在下载 [{downloaded + 1}/{target_count}]: {title}")
                if download_image(img_url, filename, referer=current_url):
                    downloaded += 1
                    # 图片间随机延迟
                    time.sleep(random.uniform(1.5, 4))
                else:
                    logging.warning("⚠️ 下载失败，跳过")

            page += 1

            # 检查是否有下一页按钮
            next_page = soup.find('a', class_='next-page')
            if not next_page and len(image_urls) == 0:
                logging.info("没有更多页面了")
                break

        except requests.exceptions.RequestException as e:
            logging.error(f"⚠️ 网络请求出错: {str(e)}")
            time.sleep(15)
        except Exception as e:
            logging.error(f"⚠️ 发生未知错误: {str(e)}")
            time.sleep(15)

    logging.info("\n=== 爬取完成 ===")
    logging.info(f"总计下载 {downloaded} 张图片")
    logging.info(f"保存位置: {save_folder}")


if __name__ == "__main__":
    # 设置搜索关键词和下载数量
    KEYWORD = "狮子"
    TARGET_COUNT = 200

    # 开始爬取
    crawl_vcg(keyword=KEYWORD, target_count=TARGET_COUNT)
