import requests
from lxml import etree
import re
import pandas as pd

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.chem.sdu.edu.cn/szdw/jcrc.htm",
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
    "JSESSIONID": "B4DF0AA872679402598D8EDD343E0199"
}
url = "https://www.chem.sdu.edu.cn/szdw/xssz.htm"
response = requests.get(url, headers=headers, cookies=cookies)
response.encoding='utf-8'
res=etree.HTML(response.text)
name_list=res.xpath('//div[@id="category_main_talent"]/ul/li/a/text()')
url_list=res.xpath('//div[@id="category_main_talent"]/ul/li/a/@href')
names_list=[]
for name in name_list:
    if name.strip()=="":
        continue
    names_list.append(name)

data_list = []
for name, url in zip(names_list, url_list):
    if 'http' in url:
        pass
    else:
        url= url.replace('..','')
        url="https://www.chem.sdu.edu.cn"+url
    res=requests.get(url=url,headers=headers,cookies=cookies)
    res.encoding='utf-8'
    res_tree=etree.HTML(res.text)
    data=res_tree.xpath("//span//text()")   #抓取所有的文本数据
    data_list.append({'Name': name, 'URL': url, 'Data': ' '.join(data).strip()})
    print(name)
# 将数据保存到 Excel 文件
df = pd.DataFrame(data_list)
df.to_excel('化学学院教师数据.xlsx', index=False)
