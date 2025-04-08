import hashlib

import requests
from urllib.parse import urlencode
import time
def md5_encrypt(data: str) -> str:
    """MD5加密字符串"""
    return hashlib.md5(data.encode('utf-8')).hexdigest()

timestamp=str(int(time.time()*1e3))
# print(len(timestamp))

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/4/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743767357"
}
url = "https://stu.tulingpyton.cn/api/problem-detail/4/data/"
sum_=0
for page in range(1,21):
    sign= md5_encrypt("tuling" + timestamp + str(page))
    print(f"当前在第{page}页")
    params = {
        "page": str(page),
        "sign": sign,
        "_ts": timestamp
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    data = response.json()
    date_list = data['current_array']
    for date in date_list:
        # print(date)
        sum_ += date
print(f"总数为{sum_}")