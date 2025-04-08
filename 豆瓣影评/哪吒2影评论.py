import requests
from lxml import etree
import pandas as pd
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://movie.douban.com/subject/34780991/reviews?sort=hotest&start=2200",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "ll": "\"108288\"",
    "bid": "OHMRB1USNDk",
    "_pk_id.100001.4cf6": "15748ca968c35d77.1742651450.",
    "__yadk_uid": "cVX2RwQ1fc4sDhPCujKeu4DWs3oO75UA",
    "_vwo_uuid_v2": "DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70",
    "_ga": "GA1.1.584985988.1742828259",
    "push_noty_num": "0",
    "push_doumail_num": "0",
    "__utmv": "30149280.27281",
    "_ga_RXNMP372GL": "GS1.1.1742912895.4.1.1742913626.60.0.0",
    "_pk_ref.100001.4cf6": "%5B%22%22%2C%22%22%2C1742917948%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXG744q3X_mB4cZ8JylhO8JSh4G9dBC0-V6bca9qoMElsJMD876nA9S7-O-ykkBoh%26wd%3D%26eqid%3Da7c78dc1024350c30000000667e2d136%22%5D",
    "_pk_ses.100001.4cf6": "1",
    "__utma": "223695111.1681363369.1742651450.1742913878.1742917948.4",
    "__utmc": "223695111",
    "__utmz": "223695111.1742917948.4.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic",
    "__utmb": "30149280.8.10.1742917948",
    "dbcl2": "\"272816827:sWg6HETmYKw\"",
    "ck": "UM7M",
    "frodotk_db": "\"5390fdfdeda35e7afab2f9f9c8ea1b6e\"",
    "__utmt": "1"
}
url = "https://movie.douban.com/subject/34780991/reviews"

all_data = []  # 新增：用于存储所有数据的列表

try:
    for page in range(0, 2):
        print(f"正在抓取{page+1}页-----------------》")
        # print(str(page*20))
        params = {
            "sort": "hotest",
            "start": str(page * 20),
        }
        response = requests.get(url, headers=headers, cookies=cookies, params=params)
        tree = etree.HTML(response.text)
        data_list = tree.xpath('/html/body/div[3]/div[1]/div/div[1]/div[1]/div/div/div/div[1]/div/text()')
        score_list = tree.xpath('/html/body/div[3]/div[1]/div/div[1]/div[1]/div/div/div/h2/a/text()')
        print(score_list[1])
        for data, score in zip(data_list, score_list):
            all_data.append({
                "影评内容": data.strip(),
                "总体评价": score.strip()
            })



except (KeyboardInterrupt, Exception) as e:  # 捕获所有异常和键盘中断
    print(f"\n程序中断: {str(e)}")
    if all_data:
        # 保存已爬取数据（文件名带时间戳更规范）
        df = pd.DataFrame(all_data)
        output_file = "哪吒影评_数据保存.xlsx"
        df.to_excel(output_file, index=False)
        print(f"已紧急保存 {len(df)} 条数据到 {output_file}")
    exit()  # 终止程序运行

# 正常执行完成的保存
df = pd.DataFrame(all_data)
df.to_excel("哪吒影评.xlsx", index=False)
print(f"完整保存 {len(df)} 条数据到 哪吒影评.xlsx")
