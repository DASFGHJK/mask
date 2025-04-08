import requests
import execjs
import json
def get_token_s():
    with open('7.js') as f:
        ctx=f.read()
        ctx=execjs.compile(ctx)
        result=ctx.call('get_m_ts')
    print(result)
    return result
def get_decode(xx):
    with open("7.js", 'r') as f:
        ctx=f.read()
        ctx=execjs.compile(ctx)
    date=ctx.call('xxxxoooo',xx)
    return date
sum_=0
for page in range(1,21):
    s=get_token_s()
    m=s['token']
    ts=s['ttt']
    x=s['xl']

    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "m": str(m),
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://stu.tulingpyton.cn/problem-detail/7/",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "ts": str(ts),
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
        "HMACCOUNT": "B4428F75A6FDEEFB",
        "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
        "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743775047"
    }
    url = "https://stu.tulingpyton.cn/api/problem-detail/7/data/"
    params = {
        "page": str(page),
        "x": str(x)
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    # data=response.json()['r']
    print(response.json())
    data=get_decode(response.json()['r'])
    date_list = json.loads(data)["current_array"]
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")
