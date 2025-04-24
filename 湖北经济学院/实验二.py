import random

import requests
from lxml import etree
import pandas as pd
import time
cookies = {
    'JSESSIONID': '49B908750C91BB6B2F21F8C87C39B2C7',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'JSESSIONID=49B908750C91BB6B2F21F8C87C39B2C7',
}
data=[]
for page in range(1,11):
    response = requests.get(f'https://www.hbue.edu.cn/9263/list{page}.htm', cookies=cookies, headers=headers)

    time.sleep(random.randint(1,2))
    print(f"正在抓取第{page}页------------------->")
    response.encoding='utf-8'
    res=etree.HTML(response.text)
    title_list=res.xpath("//span[@class='news_title']/a/text()")
    time_list=res.xpath("//span[@class='news_meta']/text()")
    url_list=res.xpath("//span[@class='news_title']/a/@href")
    for title,times,urls in zip(title_list,time_list,url_list):
        next_url="https://www.hbue.edu.cn"+urls
        res_s=requests.get(url=next_url,headers=headers,cookies=cookies)
        res_s.encoding='utf-8'
        next_res=etree.HTML(res_s.text)
        from_obj=str(next_res.xpath("//span[@class='arti_ly']/text()")[0]).replace('来源：','')
        send_peple=str(next_res.xpath("//span[@class='arti_publisher']/text()")[0]).replace("发布者：",'')
        arti_views=str(next_res.xpath("//span[@class='arti_views']/span[@class='WP_VisitCount']/text()")[0])
        data_view=next_res.xpath("//div[@class='wp_articlecontent']/p/span/text()")   #内容
        content=' '.join([text.strip() for text in data_view])
        print(title,data_view)
        data.append({
            "标题":title.strip(),
            "时间":times.strip(),
            '内容':content.strip(),
            "浏览次数":arti_views.strip(),
            "发布者":send_peple.strip(),
            "来源":from_obj.strip()
        })
df=pd.DataFrame(data)
df.to_excel("实验二.xlsx",index=False,engine='openpyxl')
print("保存完成")