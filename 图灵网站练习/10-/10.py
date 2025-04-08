import json

import requests
import execjs
def get_s(page):
    with open('10.js','r') as f:
        js_code=f.read()
        ctx=execjs.compile(js_code)
    t=ctx.call('get_s',page)
    return t
headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/10/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",

    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743839357"
}
sum_=0
for page in range(1,21):
    t=get_s(str(page))
    url = "https://stu.tulingpyton.cn/api/problem-detail/10/data/"
    params = {
        "page": str(page),
        "t": str(t)   #加密
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    data=json.loads(response.text)
    date_list = data['current_array']
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")