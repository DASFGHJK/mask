import requests
import json


headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://stu.tulingpyton.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/14/",
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
    "s": "51b351b351b351b370b0d0305130f0f0307010b010",
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743853967"
}
url = "https://stu.tulingpyton.cn/api/problem-detail/14/data/"
params = {
    "m": "MTU0YjE3NDM4NTM5NzczNTAA"
}
data = {
    "page": 2
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)