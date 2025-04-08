import requests
import json
import execjs
def get_sign(page):
    with open('8.js','r') as f:
        ctx=f.read()
        ctx=execjs.compile(ctx)
    reult=ctx.call('get_m_s_t',page)
    return reult
sum_=0
for page in range(1,21):
    reult=get_sign(page)
    s=str(reult['s']).replace('s=','')
    m=reult['m']
    t=reult['t']
    # print(len(s))
    # print(len("51b351b351b351b370b0d03051301071b051f07070"))
    print(len('dedededededea0a6a3a2a7a2a19f9fa5a1a8a0a1'))
    print(len(str(m)))
    print(len('MTc0MzgzMjAwNjI5MQ=='))
    print(t)
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "m": str(m),  #加密对象
        "origin": "https://stu.tulingpyton.cn",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://stu.tulingpyton.cn/problem-detail/8/",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "t": str(t),  #加密对象
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
        "HMACCOUNT": "B4428F75A6FDEEFB",
        "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
        "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743831991",
        "s": str(s)  #加密对象
    }
    url = "https://stu.tulingpyton.cn/api/problem-detail/8/data/"
    data = {
        "page": page
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)


    date_list = json.loads(response.text)["current_array"]
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")