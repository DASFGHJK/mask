import requests
from lxml import etree

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
}
url = "https://www.diyifanwen.com/dangtuan/sixianghuibao/18903828.html"
response = requests.get(url=url, headers=headers)
response.encoding=response.apparent_encoding
tree=etree.HTML(response.text)
contnt=tree.xpath('//*[@id="fanwen"]/div[3]/div[1]/div[1]/div[3]//text()')
print(contnt)
with open('范文数据.txt','w',encoding='utf-8') as f:
    f.write("".join(contnt))