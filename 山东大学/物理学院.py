import requests
from lxml import etree
import re
import pandas as pd

# 定义清理特殊符号的函数
def clean_text(text):
    # 使用正则表达式去除特殊符号
    cleaned_text = re.sub(r'[^\w\s.,!?;:()\[\]{}\'"-]', '', text)
    return cleaned_text

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.phy.sdu.edu.cn/szll/rcgc.htm",
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
    "JSESSIONID": "EF2B466BB9E5FE3E0CC7AEFD011C4C28"
}
url = "https://www.phy.sdu.edu.cn/szll/jzgyl.htm"
response = requests.get(url, headers=headers, cookies=cookies)
response.encoding='utf-8'
tree=etree.HTML(response.text)
names=tree.xpath("//a/text()")
urls=tree.xpath("//a/@href")[1:]

data_list = []
start_output = False

for name, url in zip(names, urls):
    if name == "柏利慧":
        start_output = True
    if start_output:
        print(f"Name: {name}, URL: {url}")
        if 'http' in url:
            try:
                res=requests.get(url=url, headers=headers, cookies=cookies)
                res.encoding='utf-8'
                trees=etree.HTML(res.text)
                data=trees.xpath("//p//text()")
                if not data:
                    data=trees.xpath("//span//text()")
                # 清理文本数据
                cleaned_data = [clean_text(item) for item in data]
                cleaned_data = "\n".join(cleaned_data)
                # print(cleaned_data)
                data_list.append({"Name": name, "URL": url, "Details": cleaned_data})
            except:
                data_list.append({"Name": name, "URL": url, "Details": ""})
                continue
        else:
            url = str(url).replace("..", '')
            url = "https://www.phy.sdu.edu.cn" + url
            data_list.append({"Name": name, "URL": url, "Details": ""})
        if name == "赵  越":
            break

# 将数据保存为 Excel 文件
df = pd.DataFrame(data_list)
df.to_excel("物理学院人员信息.xlsx", index=False)
