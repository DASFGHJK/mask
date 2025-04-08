import requests
from lxml import etree
import pandas as pd

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.math.sdu.edu.cn/",
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
    "JSESSIONID": "9009D979C406189F9F269B6CE480280D"
}

data = []

def fetch_data_from_url(base_url):
    response = requests.get(url=base_url, headers=headers, cookies=cookies)
    response.encoding = 'utf-8'
    tree = etree.HTML(response.text)
    url_list = tree.xpath("//div[2]/div[2]/ul/li/a/@href")
    name_list = tree.xpath("//div[2]/ul/li/a/div[2]/p[1]/text()")

    for name, urls in zip(name_list, url_list):
        print(name, urls)
        try:
            if 'htm' in urls:
                # 确保 URL 是绝对路径
                if not urls.startswith(('http://', 'https://')):
                    urls = "https://www.math.sdu.edu.cn" + urls
                res = requests.get(url=urls, headers=headers, cookies=cookies)
                res.encoding = 'utf-8'
                cont = etree.HTML(res.text)
                data_content = cont.xpath("//div/p/text()")
                if not data_content:
                    data_content=cont.xpath("///p//text()")
                print(data_content)
                data.append([name, urls, ' '.join(data_content).strip()])  # 将内容合并为一个字符串
        except Exception as e:
            print(f"抓取 {name} 的信息时出错: {e}")
            data.append([name, urls, f"抓取失败: {e}"])  # 记录失败信息

date_list = [
    'jcsxyjs',
    'xxaqyjs',
    'kxjsyrjyjs',
    'yysxyjs',
    'xtyycxyjs',
    'kzyxtkxyjs',
    'gllysltjyjs'
]

for date in date_list:
    # 先抓取初始 URL
    initial_url = f"https://www.math.sdu.edu.cn/szdw/szjs1/{date}.htm"
    fetch_data_from_url(initial_url)

    # 抓取后续 URL
    try:
        for j in range(1, 4):
            print(f'正在抓取第{j}页------------>')
            subsequent_url = f"https://www.math.sdu.edu.cn/szdw/szjs1/{date}/{j}.htm"
            print(subsequent_url)
            fetch_data_from_url(subsequent_url)
    except Exception as e:
        print(f'抓取过程中出错: {e}')

# 将数据保存到 Excel 文件
df = pd.DataFrame(data, columns=['姓名', '链接', '详情内容'])
df.to_excel('数学学院教师信息.xlsx', index=False, engine='openpyxl')


