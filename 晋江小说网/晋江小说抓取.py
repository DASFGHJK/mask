import json
import re
import time

import requests
from lxml import etree
import pandas as pd

def get_score(sign):
    params = {
        'callback': 'novelreviewCallback',
        'action': 'getByNovelid',
        'novelid': str(sign),
    }

    response = requests.get('https://www.jjwxc.net/novelreview.php', params=params, cookies=cookies, headers=headers)
    res = (response.text).replace('novelreviewCallback(', '').replace(')', '')
    avgscore = json.loads(res)['data']['scoreData']['avgscore']
    return avgscore

def data_get(url):
    """
    进行详情界面抓取
    :param url:
    :return:
    """
    time.sleep(1)
    response = requests.get(url=url, cookies=cookies, headers=headers)
    response.encoding = 'gbk'
    res = etree.HTML(response.text)
    category_names = re.findall(r"/assort/([^']+)", response.text)  # 标签界面
    category_names = '，'.join(category_names)

    data = re.findall('onclick="showMore(.*)<br />', response.text)
    if data != []:

        data = data[0].replace('<br />', '').replace("('", '')
    else:
        data = res.xpath("//li[@id='novelintro']/text()")

        data = ''.join(data).replace('\n', '').replace('\r', '').replace('简介：', '')
    return {
        'category_names': category_names,
        'data_list': data
    }

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
}

def get_data(Year):
    date_list = []
    for page in range(1, 3):
        params = {
            'fw0': '0',
            f'fbsj{Year}': str(Year),
            'novelbefavoritedcount0': '0',
            'yc0': '0',
            'xx0': '0',
            'mainview0': '0',
            'sd0': '0',
            'lx0': '0',
            'bq': '',
            'removebq': '',
            'sortType': '0',
            'collectiontypes': 'ors',
            'isfinish': '0',
            'searchkeywords': '',
            'page': str(page),
        }
        print(f"正在抓取{Year}年第{page}页数据-------------------------->")
        response = requests.get('https://wap.jjwxc.net/assort', params=params, cookies=cookies, headers=headers)
        response.encoding = 'gbk'
        yuan_url = "https://wap.jjwxc.net/"
        res = etree.HTML(response.text)
        title_list = res.xpath('//table/tr/td/a[1]/text()')[:50]  # 书名
        author_list = res.xpath('//table/tr/td/a[2]/text()')[:50]  # 作者
        urls_list = res.xpath('//table/tr/td/a[1]/@href')[:50]  # 链接信息


        for title, author, urls in zip(title_list, author_list, urls_list):
            time.sleep(1)
            book_id = re.findall('/(\d+)', urls)[0]  # 获得书籍的id
            try:
                avgscore = get_score(book_id)
            except:
                avgscore = '暂无评分'
            urls = yuan_url + urls
            print(title)
            result = data_get(urls)
            category_names = result['category_names']  # 标签
            data_list = result['data_list'].replace('简介：','')  # 简介

            date_list.append({
                '书名': title,
                '作者': author,
                '详情界面链接': urls,
                '评分': avgscore,
                '标签': category_names,
                '简介': data_list,
            })

    df = pd.DataFrame(date_list)
    print(f"{Year}年_前100图书.xlsx,保存成功")
    file_name = f'{Year}年_前100图书.xlsx'
    df.to_excel(file_name, index=False)

def main():
    # years = [2013,2014,2015]  # 可以在这里添加更多的年份
    years=[i for i in range(2024, 2025)]  #从2013到2024年抓取
    for year in years:
        get_data(year)

if __name__ == "__main__":
    main()
