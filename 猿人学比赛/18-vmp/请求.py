import requests
import execjs
with open('解密.js','r') as f:
    js_code=f.read()
    ctx=execjs.compile(js_code)
js_res=ctx.call('get_data',1)
t=js_res['t']
v=js_res['v']

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://match.yuanrenxue.cn/match/18",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}
url = "https://match.yuanrenxue.cn/match/18data"
print(v)

params = {
    "page": "1",
    "t": str(t),
    "v": str(v)
}
cookies={
    "sessionid": "x1boy4t9kk2uki1mg60b2nv55eurw00z"
}
response = requests.get(url, headers=headers, params=params,cookies=cookies)

print(response.text)
print(response)