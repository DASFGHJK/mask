import requests
import json
import execjs
def get_s_r_t(page):
    with open('13xx.js') as f:
        js_code= f.read()
    f=execjs.compile(js_code)
    reult=f.call('get',page)
    return reult
sum_=0
for page in range(1,21):
    data=get_s_r_t(page)
    s=data['s']
    r=data['r']
    t=data['t']
    print(len("ebd14f95a5468a464fa9b57a578646c4"))
    print(s,r,t)
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://stu.tulingpyton.cn",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "r": str(r),  #加密对象
        "referer": "https://stu.tulingpyton.cn/problem-detail/13/",
        "s": str(s),   #加密对象
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
        "s": "51b351b351b351b370b0d0305130f0f0307010b010",
        "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743843256"
    }
    url = "https://stu.tulingpyton.cn/api/problem-detail/13/data/"
    data = {
        "page": str(page)
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    data = json.loads(response.text)
    date_list = data['current_array']
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")