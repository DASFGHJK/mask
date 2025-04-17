import requests
from lxml import etree
import re
cookies = {
    'Hm_lvt_f73ac53cbcf4010dac5296a3d8ecf7cb': '1744805590',
    'HMACCOUNT': '87130C7627252F2B',
    'smidV2': '2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00',
    'JJSESS': '%7B%22referer%22%3A%22/book2/1811029%22%7D',
    'Hm_lpvt_f73ac53cbcf4010dac5296a3d8ecf7cb': '1744819347',
    'JJEVER': '%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WC39ZUyXRgdGbgPouikXfKMuX3otHU9VzdQ/lEfd59VQrexxctpiTgFm+CtSynVReFmpiLC/lIQD1eXxGxDeGc3q8PB2SRQXZtL/WmrP2Tav+DYF2YqyHqzGfoHqpqLrLO7dVu22KtO4OuktY0c6Dw/bCeCS3dY9p8Ozw+p1E5euaKk0cJkZrpR5lqupJ9eAItlEThT/DdgYke1HsJOdFJL5+UxCZWCoERZ5amqgFI63nmgIz6x4Ew54VQ4DhsCHQKyITJFQuK/c%3D1487577677129%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://wap.jjwxc.net/assort?fw0=0&fbsj2013=2013&novelbefavoritedcount0=0&yc0=0&xx0=0&mainview0=0&sd0=0&lx0=0&collectiontypes=ors&notlikecollectiontypes=ors&bq=&removebq=&searchkeywords=',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'Hm_lvt_f73ac53cbcf4010dac5296a3d8ecf7cb=1744805590; HMACCOUNT=87130C7627252F2B; smidV2=2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00; JJSESS=%7B%22referer%22%3A%22/book2/1811029%22%7D; Hm_lpvt_f73ac53cbcf4010dac5296a3d8ecf7cb=1744819347; JJEVER=%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WC39ZUyXRgdGbgPouikXfKMuX3otHU9VzdQ/lEfd59VQrexxctpiTgFm+CtSynVReFmpiLC/lIQD1eXxGxDeGc3q8PB2SRQXZtL/WmrP2Tav+DYF2YqyHqzGfoHqpqLrLO7dVu22KtO4OuktY0c6Dw/bCeCS3dY9p8Ozw+p1E5euaKk0cJkZrpR5lqupJ9eAItlEThT/DdgYke1HsJOdFJL5+UxCZWCoERZ5amqgFI63nmgIz6x4Ew54VQ4DhsCHQKyITJFQuK/c%3D1487577677129%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}


response = requests.get('https://wap.jjwxc.net/book2/1722952', cookies=cookies, headers=headers)
response.encoding='gbk'
# print(response.text)
res=etree.HTML(response.text)
category_names = re.findall(r"/assort/([^']+)", response.text)
biaoqian_=[]
data=re.findall('onclick="showMore(.*)<br />',response.text)
if data!=[]:

    data=data[0].replace('<br />','').replace("('",'')
else:
    data = res.xpath("//li[@id='novelintro']/text()")

    data = ''.join(data).replace('\n', '').replace('\r', '').replace('简介：','')

print(data)
category_names='，'.join(category_names)

