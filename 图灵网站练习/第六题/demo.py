import requests
import time
import execjs
import json

def get_decode(xx):
    with open("6.js",'r') as f:
        ctx=f.read()
        ctx=execjs.compile(ctx)
    date=ctx.call('xxxxoooo',xx)
    return date
def get_token_and_timestamp(js_path='6.js', encoding='utf-8'):
    """
    从JS文件获取token和时间戳
    参数：
    js_path - JS文件路径（默认'6.js'）
    encoding - 文件编码（默认utf-8）
    返回：
    (token, ttt) 元组
    """
    with open(js_path, 'r', encoding=encoding) as f:
        js_code = f.read()

    ctx = execjs.compile(js_code)
    result = ctx.call('get_s')

    return result['token'], result['ttt']
sum_=0
for page in range(1,21):
    token, timestamp = get_token_and_timestamp()

    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://stu.tulingpyton.cn/problem-detail/6/",
        "s": str(token),
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "tt": str(timestamp),
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
    }
    cookies = {
        "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
        "HMACCOUNT": "B4428F75A6FDEEFB",
        "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
        "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743773277"
    }

    url = "https://stu.tulingpyton.cn/api/problem-detail/6/data/"
    params = {
        "page": str(page)
    }

    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    data=response.json()
    data=data['t']
    data=json.loads(get_decode(data))
    date_list = data['current_array']
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")