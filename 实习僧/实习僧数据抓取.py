import time
t1=time.time()
import requests
import re
from fontTools.ttLib import TTFont
from lxml import etree
url = "https://www.shixiseng.com/interns?page=2&type=intern&keyword=python&area=&months=&days=&degree=&official=&enterprise=&salary=-0&publishTime=&sortType=&city=%E5%85%A8%E5%9B%BD&internExtend="
response = requests.get(url=url)
response.encoding = 'utf-8'
html_data = response.text
f={   #字体映射文件
"&#xf876":"0",
"&#xe393":"1",
"&#xe8e9":"2",
"&#xe7ce":"3",
"&#xe9c3":"4",
"&#xe35f":"5",
"&#xf375":"6",
"&#xe546":"7",
"&#xea88":"8",
"&#xe7bd":"9",
}
for i,j in f.items():
    html_data=html_data.replace(i,j)
print(html_data)
x1='/html/body/div[1]/div[2]/div[1]/div[2]/span[1]/text()' #job_date
x2='/html/body/div[1]/div[2]/div[1]/div[3]/span[1]/text()' #job_money
x3='/html/body/div[1]/div[2]/div[1]/div[3]/span[4]/text()' #job_week
x4='/html/body/div[1]/div[2]/div[1]/div[3]/span[5]/text()' #job_time
x5='/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/text()' #截止日期
selector = etree.HTML(html_data)
print(html_data)
a1=selector.xpath(x1)[0]
print(a1)
a2=selector.xpath(x2)[0]
print(a2)
a3=selector.xpath(x3)[0]
print(a3)
a4=selector.xpath(x4)[0]
print(a4)
a5=selector.xpath(x5)[0]
print(a5)
