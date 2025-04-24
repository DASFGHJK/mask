import requests
from lxml import etree
import pandas as pd
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
    print(f"正在抓取第{page}页------------------->")
    response.encoding='utf-8'
    res=etree.HTML(response.text)
    title_list=res.xpath("//span[@class='news_title']/a/text()")
    time_list=res.xpath("//span[@class='news_meta']/text()")
    for title,time in zip(title_list,time_list):
        print(title,time)
        data.append({
            "标题":title.strip(),
            "时间":time.strip()
        })
df=pd.DataFrame(data)
df.to_excel("实验一.xlsx",index=False,engine='openpyxl')
print("保存完成")