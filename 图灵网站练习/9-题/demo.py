import requests
import json
import execjs
def get_m_s():
    with open('9.js','r') as f:
        js_code=f.read()
        ctx=execjs.compile(js_code)
    result=ctx.call('get_data')
    return result
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://stu.tulingpyton.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/9/",
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
    "s": "51b351b351b351b370b0d0305130f0f0307010b010",  #加密对象
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743837291"
}
url = "https://stu.tulingpyton.cn/api/problem-detail/9/data/"
sum_=0
for page in range(1,21):
    res=get_m_s()
    data = {
        "page": page,
        "m": res['m'],  #加密对象
        "tt": res['t'],   #加密对象
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    date_list = json.loads(response.text)["current_array"]
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")