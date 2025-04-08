import time

import requests
import json

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/2/",
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
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743766656"
}
url = "https://stu.tulingpyton.cn/api/problem-detail/2/data/"
sum_=0
for page in range(1,21):
    print(f"当前在{page}页")
    # time.sleep(1)
    params = {
        "page": str(page)
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    data=response.json()
    date_list=data['current_array']
    for date in date_list:
        # print(date)
        sum_+=date
print(f"总数为{sum_}")