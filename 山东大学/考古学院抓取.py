import re

import requests
from lxml import etree
import pandas as pd

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.archaeology.sdu.edu.cn/szdw/yxsz.htm",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "JSESSIONID": "1284185A380A65B3FA95468B1B52E670"
}
data = []
data_list=[
    'yxsz',  #
    'sbds',
    'jzjs',
    'rtjs'
]
for i in data_list:
    url = f"https://www.archaeology.sdu.edu.cn/szdw/{i}.htm"
    print(url)
    response = requests.get(url, headers=headers, cookies=cookies)
    response.encoding='utf-8'

    tree=etree.HTML(response.text)
    name_list=tree.xpath('//*[@id="tutor_right"]/a/text()')
    url_list=tree.xpath('//*[@id="tutor_right"]/a/@href')

    for name, url in zip(name_list, url_list):
        url = str(url).replace('..', '')
        if '.htm' in url:
            content_url = "https://www.archaeology.sdu.edu.cn" + url  # 链接地址
            res = requests.get(url=content_url, headers=headers, cookies=cookies)
            res.encoding = 'utf-8'
            trees = etree.HTML(res.text)
            content = trees.xpath('//div/div/p/span/text()')
            print(content)
            data.append([name, content_url, ' '.join(content)])  # 将内容合并为一个字符串

# 将数据存储为Excel文件
df = pd.DataFrame(data, columns=['姓名', '链接', '详情内容'])
df.to_excel('考古学院教师信息.xlsx', index=False, engine='openpyxl')
