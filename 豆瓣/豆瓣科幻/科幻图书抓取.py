import os
import time
import requests
from lxml import etree
import pandas as pd

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
    '_pk_ref.100001.3ac3': '%5B%22%22%2C%22%22%2C1744725106%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXbax-6sf3PfDEfhW-RqoO3yhaJsm1yWS3laUqK6Hy12rXIEoHX-qelV2l_ONRmT5%26wd%3D%26eqid%3Dee8bbd9b0152ecca0000000667f51f10%22%5D',
    '_pk_ses.100001.3ac3': '1',
    'ap_v': '0,6.0',
    '__utma': '30149280.41827125.1742651446.1744630564.1744725107.23',
    '__utmc': '30149280',
    '__utmt_douban': '1',
    '__utma': '81379588.584985988.1742828259.1744630564.1744725107.8',
    '__utmc': '81379588',
    '__utmt': '1',
    '__utmb': '30149280.9.10.1744725107',
    '__utmb': '81379588.9.10.1744725107',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://book.douban.com/tag/%E7%A7%91%E5%B9%BB?start=0&type=T',
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

data_list = []


def fetch_books(start):
    params = {
        'start': str(start),
        'type': 'T',
    }

    response = requests.get('https://book.douban.com/tag/%E7%A7%91%E5%B9%BB', params=params, cookies=cookies, headers=headers)
    respHTMLXpath = etree.HTML(response.text)
    lis = respHTMLXpath.xpath('//ul[@class="subject-list"]/li')
    for liItem in lis:
        try:
            book_name = liItem.xpath('./div[@class="info"]/h2/a/text()')[0].strip()
        except Exception as e:
            book_name = '暂无'
        try:
            author = liItem.xpath('./div[@class="info"]/div[@class="pub"]/text()')[0].split('/')[0].strip()
        except Exception as e:
            author = '暂无'
        try:
            publish_name = liItem.xpath('./div[@class="info"]/div[@class="pub"]/text()')[0].split('/')[-3].strip()
        except Exception as e:
            publish_name = '暂无'

        try:
            publish_date = liItem.xpath('./div[@class="info"]/div[@class="pub"]/text()')[0].split('/')[-2].strip()
        except Exception as e:
            publish_date = '暂无'

        try:
            price = liItem.xpath('./div[@class="info"]/div[@class="pub"]/text()')[0].split('/')[-1].strip()
        except Exception as e:
            price = '暂无'

        try:
            average_rating = liItem.xpath('./div[@class="info"]/div[@class="star clearfix"]/span[2]/text()')[0]
        except Exception as e:
            average_rating = '暂无'

        try:
            detail = liItem.xpath('./div[@class="info"]/p/text()')[0]
        except Exception as e:
            detail = '暂无'

        try:
            image_name = liItem.xpath('./div[@class="pic"]/a/img/@src')[0].split("/")[-1]
        except Exception as e:
            image_name = '暂无'


        print(book_name)

        data_list.append({
            'book_name': book_name,
            'author': author,
            'publish_name': publish_name,
            'publish_date': publish_date,
            'price': price,
            'average_rating': average_rating,
            'detail': detail,
            'image_name': image_name
        })

def save_to_txt(data):
    with open('科幻图书.txt', 'w', encoding='utf-8') as f:
        for item in data:
            f.write(f"书名: {item['book_name']}\n")
            f.write(f"作者: {item['author']}\n")
            f.write(f"出版社: {item['publish_name']}\n")
            f.write(f"出版日期: {item['publish_date']}\n")
            f.write(f"价格: {item['price']}\n")
            f.write(f"评分: {item['average_rating']}\n")
            f.write(f"详情: {item['detail']}\n")
            f.write(f"图片名称: {item['image_name']}\n")
            f.write("-" * 40 + "\n")
    print(f"所有数据已保存为 '科幻图书.txt' 文件")

def main():
    start = 0
    pageNum = 21
    for page in range(1, pageNum):
        print(f"第{page}页抓取完毕--------------------->")
        time.sleep(2)
        fetch_books(start)
        start += 20

    save_to_txt(data_list)
    data_list.clear()  # 清空 data_list 以避免重复插入数据

if __name__ == "__main__":
    main()
