import requests
from lxml import etree

# 请求头和cookies
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.maoyan.com/films?yearId=19&showType=3&offset=0",
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
    "uuid_n_v": "v1",
    "uuid": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "_lxsdk_cuid": "195b208430fc8-0dd38ffffb5121-1b525636-157188-195b208430fc8",
    "_ga": "GA1.1.906369322.1742448752",
    "_csrf": "d5c2d5045d4a35b9ff1423125b7a88ef19d61830cc90250b260616706a8cf05c",
    "_lx_utm": "utm_source%3DBaidu%26utm_medium%3Dorganic",
    "_lxsdk": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1742448641,1742627397,1742784466",
    "HMACCOUNT": "287F329C91831B5C",
    "Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1742784607",
    "__mta": "49594137.1742448640954.1742784600738.1742784607535.37",
    "_ga_WN80P4PSY7": "GS1.1.1742784466.7.1.1742784608.0.0.0",
    "_lxsdk_s": "195c60c19f1-67f-9dd-b98%7C%7C41"
}

# 请求URL和参数
url = "https://www.maoyan.com/films"
params = {
    "yearId": "19",  # 代表2024年
    "showType": "3",  # 参数不确定
    "offset": "30"    # 页码，30递增
}
response = requests.get(url, headers=headers, params=params, cookies=cookies).text

# 解析HTML
res = etree.HTML(response)
name_list = res.xpath('//*[@id="app"]//div[@class="channel-detail movie-item-title"]/a/text()')  # 获取电影名字
sorce_list = res.xpath('//*[@id="app"]//div[@class="channel-detail channel-detail-orange"]//text()')  # 获取评分
url_list = res.xpath('//*[@id="app"]//div[@class="channel-detail movie-item-title"]/a/@href')  # 获取链接

cleaned_scores = []
i = 0
while i < len(sorce_list):
    if sorce_list[i] == '暂无评分':
        cleaned_scores.append('暂无评分')
        i += 1
    else:
        # 将连续两个元素拼接为x.x格式
        cleaned_scores.append(sorce_list[i] + sorce_list[i+1])
        i += 2

# 输出电影名字、评分和链接（取消注释并修改最后部分）
for name, url, score in zip(name_list, url_list, cleaned_scores):
    full_url = f"https://www.maoyan.com{url}"
    print(f"电影名称: {name.strip()}, 评分: {score}, 链接: {full_url}")
    res=requests.get(url=full_url,headers=headers,cookies=cookies).text
    full_tree=etree.HTML(res)
    open_time=full_tree.xpath('/html/body/div[3]/div/div[2]/div[1]/ul/li[3]/text()')
    print(open_time)
