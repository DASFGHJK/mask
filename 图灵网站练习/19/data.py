import requests
import execjs
import json
def decode(r,k):
    with open('19.js','r') as f:
        js_code=f.read()
        ctx=execjs.compile(js_code)
    result=ctx.call('decrypt',r,k)
    return result
cookies = {
    'sessionid': '05qkt0h731xdpelcd3rw0mdfc0c1usv3',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1743933972,1743949536,1744012415,1744022986',
    'HMACCOUNT': 'B4428F75A6FDEEFB',
    'v': 'QTh1LTJsOTdLQkV1NUhTMTdUN09lMnFwWEdTd1lOODZXWGVqbGozS3BPSmdHT1VheFRCdk1tbEVNLUJPMTc0NDAyNzg0NjIzOA==',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744032045',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/19/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'sessionid=05qkt0h731xdpelcd3rw0mdfc0c1usv3; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1743933972,1743949536,1744012415,1744022986; HMACCOUNT=B4428F75A6FDEEFB; v=QTh1LTJsOTdLQkV1NUhTMTdUN09lMnFwWEdTd1lOODZXWGVqbGozS3BPSmdHT1VheFRCdk1tbEVNLUJPMTc0NDAyNzg0NjIzOA==; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744032045',
}
sum_=0
for page in range(1,21):
    params = {
        'page': str(page),
    }

    response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/19/data/', params=params, cookies=cookies, headers=headers)
    data=json.loads(response.text)
    r=data['r']
    k=data['k']
    result=decode(r,k)
    data = json.loads(result)
    date_list = data['current_array']
    for date in date_list:
        print(date)
        sum_ += date
print(f"总数为{sum_}")