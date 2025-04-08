import time
import requests
import wasmtime

headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://match.yuanrenxue.cn/match/15",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "sessionid": "l6qjsxw71rrs9yzvwe2khdq9fgag7aur"
}
url = "https://match.yuanrenxue.cn/api/match/15"

# 加载Wasm模块
wasm_bytes = open('./main.wasm', 'rb').read()
engine = wasmtime.Engine()
store = wasmtime.Store(engine)
module = wasmtime.Module(engine, wasm_bytes)
instance = wasmtime.Instance(store, module, [])

# 获取encode函数
encode_func = instance.exports(store)['encode']

num = 0
for page in range(1, 6):
    t1 = int(time.time() / 2)
    t2 = int(time.time() / 2) - 1

    # 调用encode函数
    result = encode_func(store, t1, t2)

    # 假设encode函数返回的是一个整数，将其转换为字符串
    m = f"{result}|P{t1}|{t2}"
    if page >= 4:
        headers['user-agent'] = 'yuanrenxue.project'
    params = {
        "m": m,
        "page": str(page)
    }
    print(m)

    # 发送请求（可选）
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.json())
