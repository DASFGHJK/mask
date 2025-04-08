import time
import requests
import json
import execjs

def get_sign(data):
    """调用加密JS生成签名"""
    with open('加密.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    return ctx.call('encrypt', data)

# 生成请求参数


# 请求头设置
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://stu.tulingpyton.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://stu.tulingpyton.cn/problem-detail/5/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}

# Cookie信息
cookies = {
    "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743594256",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "sessionid": "05qkt0h731xdpelcd3rw0mdfc0c1usv3",
    "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743768850"
}

# 请求配置
url = "https://stu.tulingpyton.cn/api/problem-detail/5/data/"
timestamp = str(int(time.time() * 1000))  # 13位时间戳
sum_=0
# 构建待加密数据（使用JSON规范格式）
for page in range(1,21):
    request_params = {
        "page": page,
        "_ts": timestamp
    }
    json_data = json.dumps(request_params, separators=(',', ':'))  # 紧凑格式JSON

    # 生成签名
    sign = get_sign(json_data)
    post_data = {
        "xl": sign  # 直接使用签名结果
    }

    # 发送请求
    response = requests.post(
        url,
        headers=headers,
        cookies=cookies,
        data=json.dumps(post_data, separators=(',', ':'))  # 二次JSON序列化
    )

    # 输出结果
    data = response.json()
    date_list = data['current_array']
    for date in date_list:
        # print(date)
        sum_ += date
print(f"总数为{sum_}")
