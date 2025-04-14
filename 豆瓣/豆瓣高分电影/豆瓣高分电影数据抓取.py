import random
import time

import requests
import json
import pandas as pd

# 定义请求的cookies和headers
cookies = {
    'll': '"108288"',
    'bid': 'OHMRB1USNDk',
    '_vwo_uuid_v2': 'DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70',
    '_ga': 'GA1.1.584985988.1742828259',
    'push_noty_num': '0',
    'push_doumail_num': '0',
    '__utmv': '30149280.27281',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '_ga_RXNMP372GL': 'GS1.1.1744091772.10.1.1744092559.29.0.0',
    'ck': 'jUu3',
    'ap_v': '0,6.0',
    'frodotk_db': '"963dcb59d6aee0e3c2b9620d840ca2a9"',
    '__utma': '30149280.41827125.1742651446.1744352579.1744524406.20',
    '__utmb': '30149280.0.10.1744524406',
    '__utmc': '30149280',
    '__utmz': '30149280.1744524406.20.13.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://movie.douban.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://movie.douban.com/explore?support_type=movie&is_all=false&category=%E7%83%AD%E9%97%A8&type=%E5%85%A8%E9%83%A8',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
}

def fetch_movies(page):
    movies = []
    for i in range(page):
        time.sleep(random.randint(1,3))  #随机等待机制
        print(f'目前正在抓取{i+1}页------------>')
        params = {
            'start': str(i * 20),
            'limit': '20',
            'category': '豆瓣高分',
            'type': '全部',
            'ck': 'jUu3',
        }
        response = requests.get('https://m.douban.com/rexxar/api/v2/subject/recent_hot/movie', params=params, cookies=cookies, headers=headers)
        response.encoding = 'utf-8'
        res = response.json()
        item_list = res['items']
        for item in item_list:
            title = item.get('title', '暂无标题')
            datas = item.get('card_subtitle', '').split('/')
            rating = item.get('rating', {}).get('value', '暂无评分')
            pubtime = datas[0] if len(datas) > 0 else '暂无显示'
            diqu = datas[1] if len(datas) > 1 else '暂无显示'
            kind = datas[2] if len(datas) > 2 else '暂无显示'
            dao_yan = datas[3] if len(datas) > 3 else '暂无显示'
            zhu_yan = datas[4] if len(datas) > 4 else '暂无显示'
            movies.append({
                'title': title,
                'pubtime': pubtime,
                'diqu': diqu,
                'kind': kind,
                'dao_yan': dao_yan,
                'zhu_yan': zhu_yan,
                'rating': rating
            })
    return movies

def save_to_excel(movies, filename='豆瓣高分电影.xlsx'):
    df = pd.DataFrame(movies)
    df.to_excel(filename, index=False)

if __name__ == '__main__':
    page = 5
    movies = fetch_movies(page)
    save_to_excel(movies)
