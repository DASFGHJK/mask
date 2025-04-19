import re
import time

import requests
from lxml import etree
import pandas as pd

# 书名，作者，类别，字数，简介
cookies = {
    'smidV2': '2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00',
    'testcookie': 'yes',
    'Hm_lvt_bc3b748c21fe5cf393d26c12b2c38d99': '1744892271',
    'HMACCOUNT': '87130C7627252F2B',
    'timeOffset_o': '-72',
    'JJSESS': '%7B%22clicktype%22%3A%22%22%7D',
    'Hm_lpvt_bc3b748c21fe5cf393d26c12b2c38d99': '1744903151',
    'JJEVER': '%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WHJMrwNw1k/E6iLc+CNdCMHCFgbT9LtrQiosT2NWk44qQY27W5zIlfm+6X/wQRlhmpmjqPqFwYOwcN899je/UVRmV2coIzlpwdCW1tldyDzmQI99+chXEiuKv9brz01my9lCUKKcsmkSqmJzoPeggwzYmmmXo8LlTkQE5YcNLqNriNYPfoOP/bvRnQROzcEAsFRRuSg/X1FURTkAd7H/eWrajf8SyAklpmJcrg4m5kar5UWF71VxlPqYetrny5Pm5fUGgIqCuSLQ%3D1487582755342%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}
def clear_data(data_list, keyword):  # 进行数据清理
    date_s = []
    for data in data_list:
        data = data.replace('\n', '').replace(' ', '')
        if data == keyword or data == '\n' or data == '':
            continue
        date_s.append(data)
    return date_s

def get_data(id):
    params = {
        'novelid': str(id),
    }
    time.sleep(1)
    response = requests.get('https://www.jjwxc.net/onebook.php', params=params, cookies=cookies, headers=headers)
    response.encoding = 'gbk'
    res = etree.HTML(response.text)
    jianjie = res.xpath("//div[@class='smallreadbody']/div[@id='novelintro']/text()")
    jianjie = ''.join(jianjie)
    if len(str(jianjie))<=10:
        jianjie=res.xpath("//div[@id='novelintro']/font//text()")
    jianjie = ''.join(jianjie)
    if len(str(jianjie)) <= 10:
        jianjie=res.xpath("//div[@id='novelintro']//p//text()")
    jianjie = ''.join(jianjie)
    return jianjie

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.jjwxc.net/bookbase.php?fw=0&yc=0&xx=0&mainview=0&sd=0&lx=0&bq=-1&sortType=0&isfinish=0&collectiontypes=&searchkeywords=&m_p=41259&page=1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

data_list = []
maxnum=6
for page in range(1, maxnum):
    params = {
        'fw': '0',
        'yc': '0',
        'xx': '0',
        'mainview': '0',
        'sd': '0',
        'lx': '0',
        'bq': '-1',
        'sortType': '0',
        'isfinish': '0',
        'collectiontypes': '',
        'searchkeywords': '',
        'm_p': '41333',
        'page': str(page),
    }
    print(f"目前正在{page}页------------------->")
    response = requests.get('https://www.jjwxc.net/bookbase.php', params=params, cookies=cookies, headers=headers)
    response.encoding = 'gbk'

    res = etree.HTML(response.text)  # 进行解析
    title_list = res.xpath('//tbody/tr/td[1]//text()')
    title_ = clear_data(title_list, '作者')

    author_list = res.xpath('//tbody/tr/td[2]//text()')  # 作者
    authro_ = clear_data(author_list, '作品')
    urls_list = res.xpath('//tbody/tr/td[2]/a/@href')
    leibie_list = res.xpath('//tbody/tr/td[3]/text()')  # 类别
    leibie_ = clear_data(leibie_list, '类型')
    zishu_list = res.xpath('//tbody/tr/td[5]/text()')
    zishu_ = clear_data(zishu_list, '字数')

    for title, authro, urls, leibie, zishu in zip(title_, authro_, urls_list, leibie_, zishu_):
        book_id = re.findall('(\d+)', urls)[0]  # 获得书籍的id
        data = get_data(book_id)
        print(title)
        data_list.append([title, authro, leibie, zishu, data])

# 将数据保存为xlsx文件
df = pd.DataFrame(data_list, columns=['书名', '作者', '类别', '字数', '简介'])
df.to_excel('晋江文学收藏前500.xlsx', index=False)
print('保存成功')
