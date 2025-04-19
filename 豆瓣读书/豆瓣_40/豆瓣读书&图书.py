import json
import time

import requests
from bs4 import BeautifulSoup

cookies = {
    'll': '"108288"',
    'bid': 'OHMRB1USNDk',
    '_vwo_uuid_v2': 'DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70',
    '_ga': 'GA1.1.584985988.1742828259',
    'push_noty_num': '0',
    'push_doumail_num': '0',
    '__utmv': '30149280.27281',
    '_pk_id.100001.3ac3': 'b3012ea45818ea4c.1742912438.',
    '__yadk_uid': 'ctmU3566DYQKBzTgDrgsBNYDXvmJbi2z',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '_ga_RXNMP372GL': 'GS1.1.1744091772.10.1.1744092559.29.0.0',
    '__utmz': '81379588.1744117529.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    '__utmz': '30149280.1744524406.20.13.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    'ck': 'jUu3',
    '_pk_ref.100001.3ac3': '%5B%22%22%2C%22%22%2C1744887471%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXbax-6sf3PfDEfhW-RqoO3yhaJsm1yWS3laUqK6Hy12rXIEoHX-qelV2l_ONRmT5%26wd%3D%26eqid%3Dee8bbd9b0152ecca0000000667f51f10%22%5D',
    '_pk_ses.100001.3ac3': '1',
    'ap_v': '0,6.0',
    '__utma': '30149280.41827125.1742651446.1744727500.1744887471.25',
    '__utmc': '30149280',
    '__utmt_douban': '1',
    '__utmb': '30149280.1.10.1744887471',
    '__utma': '81379588.584985988.1742828259.1744727500.1744887471.10',
    '__utmc': '81379588',
    '__utmt': '1',
    '__utmb': '81379588.1.10.1744887471',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://book.douban.com/top250',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}

params = {'start': '0'}

response = requests.get(
    'https://book.douban.com/top250',
    params=params,
    cookies=cookies,
    headers=headers
)

soup = BeautifulSoup(response.text, 'html.parser')
books = soup.find_all('tr', class_='item')

titles_list = []
authors_list = []
scores_list = []
urls_list = []


def get_comments(url, max_comments=20):
    """获取图书评论（支持分页）"""
    comments = []
    start = 0
    limit = 20  # 豆瓣每页默认显示20条

    while len(comments) < max_comments:
        params = {
            'start': start,
            'limit': limit,
            'sort': 'score',
            'comments_only': 1,
            'ck': 'jUu3'
        }

        try:
            response = requests.get(
                url,
                params=params,
                cookies=cookies,
                headers=headers,
                timeout=10
            )
            data = response.json()

            # 解析评论HTML片段
            comment_html = data.get('html', '')
            soup = BeautifulSoup(comment_html, 'html.parser')

            items = soup.select('li.comment-item')
            if not items:
                break

            for item in items:
                comment = {
                    'user': item.select_one('.comment-info a').get_text(strip=True),
                    'rating': item.select_one('.rating').get('title') if item.select_one('.rating') else '无评分',
                    'time': item.select_one('.comment-time').get_text(strip=True),
                    'content': item.select_one('.short').get_text(strip=True)
                }
                comments.append(comment)

                if len(comments) >= max_comments:
                    break

            start += len(items)
            time.sleep(1)  # 添加请求间隔

        except Exception as e:
            print(f'获取评论失败: {str(e)}')
            break

    return comments[:max_comments]


# 获取图书列表
response = requests.get(
    'https://book.douban.com/top250',
    params=params,
    cookies=cookies,
    headers=headers
)
soup = BeautifulSoup(response.text, 'html.parser')
books = soup.find_all('tr', class_='item')

# 存储完整数据的列表
book_data = []

for book in books:
    try:
        # 基础信息提取
        title_tag = book.find('div', class_='pl2').a
        book_info = {
            'title': title_tag.get_text(strip=True),
            'url': title_tag['href'],
            'author': book.find('p', class_='pl').get_text(strip=True).split('/')[0],
            'score': (book.find('span', class_='rating_nums').get_text(strip=True)
                      if book.find('span', class_='rating_nums') else '无评分'),
            'comments': []
        }

        # 获取评论（示例获取前50条）
        print(f'正在抓取: {book_info["title"]}')
        book_info['comments'] = get_comments(book_info['url'] + '/comments/', max_comments=50)
        print(book_info)
        book_data.append(book_info)
        time.sleep(2)  # 控制请求频率

    except Exception as e:
        print(f'处理图书时出错: {str(e)}')
        continue

# 保存为JSON文件
with open('douban_book_top250.json', 'w', encoding='utf-8') as f:
    json.dump(book_data, f, ensure_ascii=False, indent=2)

print(f'共抓取 {len(book_data)} 本图书数据，已保存至 douban_book_top250.json')