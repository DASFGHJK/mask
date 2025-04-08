import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "hexin-v": "QTF6czBCSzdWLXhWS1NQQnR5eEJkdUZVSzNFTDFRQWpnbmdVNHpaZWF2TW92dkt2WHVYUWo5S0o1RmFGMTc0MzkzMzc5MzA2Mw==",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/15/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
    "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256,1743929152",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743933766",
    "v": "QThkM0VTMkNiTjJDa09nZzJJV0t4MVlkVUhDVXpKdHk5YUlmQXBtMzRVNTlST2x1b1p3cl9nVndyM1NxMTc0MzkzMzc5MzA2NA=="
}
url = "https://stu.tulingpyton.cn/api/problem-detail/15/data/"
params = {
    "page": "3"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)