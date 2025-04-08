import requests
from requests.exceptions import RequestException
import re
from lxml import etree
import time

# 请求头和cookies
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Proxy-Connection": "keep-alive",
    "Referer": "http://bang.dangdang.com/books/bestsellers/01.00.00.00.00.00-recent7-0-0-1-25",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "$ddscreen": "2",
    "__permanent_id": "20250306121147946191741833204390036",
    "MDD_channelId": "70000",
    "MDD_fromPlatform": "307",
    "dest_area": "country_id%3D9000%26province_id%3D111%26city_id%20%3D0%26district_id%3D0%26town_id%3D0",
    "ddscreen": "2",
    "__visit_id": "20250327101817755421283596549527611",
    "__out_refer": "1743041898%7C\\u0021%7Cwww.bing.com%7C\\u0021%7C",
    "__rpm": "...1743042020389%7C...1743042074964",
    "__trace_id": "20250327102115043957191977722624003"
}

def get_one_page(url):
    """
    获取某一页的源代码；
    url: 当前网页的url;
    return: 当前网页的html文本
    """
    try:
        response = requests.get(url, headers=headers, cookies=cookies, verify=False)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException as e:
        print(f"请求错误：{e}")
        return None

def parse_one_page(html):
    """
    从当前网页中提取“排行榜号（list_num）”，“书名”，“评论数量”，“推荐度”，
    “作者”、“出版社信息”、“原始价格”、“折后价格”，并存入字典中。
    """
    tree = etree.HTML(html)
    index_patten='<div class="list_num .*">(.*)</div>'
    index_list=re.findall(index_patten,html)
    # index_list = tree.xpath('//div[@class="list_num"]/text()')
    name_list = tree.xpath('//ul/li/div[@class="name"]/a/text()')
    num_list = tree.xpath('//div[@class="star"]/a/text()')
    tuijian_list = tree.xpath('//span[@class="tuijian"]/text()')
    author_list = tree.xpath('//div[@class="publisher_info"][1]/a[1]/text()')
    publish_list = tree.xpath('//div[@class="publisher_info"][2]/a/text()')
    zheqian_list = tree.xpath('//div[@class="price"]/p[1]/span[@class="price_r"]/text()')
    zhehou_list = tree.xpath('//div[@class="price"]/p[1]/span[@class="price_n"]/text()')

    max_length = max(len(index_list), len(name_list), len(num_list), len(tuijian_list), len(author_list), len(publish_list), len(zheqian_list), len(zhehou_list))

    for i in range(max_length):
        yield {
            'index': index_list[i].strip() if i < len(index_list) else '',
            'title': name_list[i].strip() if i < len(name_list) else '',
            'reviews': num_list[i].strip() if i < len(num_list) else '',
            'recommends': tuijian_list[i].strip() if i < len(tuijian_list) else '',
            'authors': author_list[i].strip() if i < len(author_list) else '',
            'publisher': publish_list[i].strip() if i < len(publish_list) else '',
            'price_n': zhehou_list[i].strip() if i < len(zhehou_list) else '',
            'price_r': zheqian_list[i].strip() if i < len(zheqian_list) else ''
        }

def write_to_csv(data):
    with open(r'dangdang_books.csv', 'a', encoding='utf-8') as file:
        line = ''
        for value in data.values():
            line += f'"{value}",'
        file.write(line.strip(',') + '\n')

def main():
    file = open(r'dangdang_books.csv', 'w', encoding='utf-8')
    file.write('index,title,reviews,recommends,authors,publisher,price_n,price_r\n')
    file.close()

    for i in range(1, 26):  # 修改为26以抓取全部25页
        print(f"正在抓取第{i}页--------------->")
        url = f'http://bang.dangdang.com/books/bestsellers/01.00.00.00.00.00-recent7-0-0-1-{i}'
        html = get_one_page(url)
        if html:
            time.sleep(1)
            for item in parse_one_page(html):
                write_to_csv(item)


if __name__ == '__main__':
    main()
