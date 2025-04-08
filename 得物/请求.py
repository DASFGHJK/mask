import requests
import json
import execjs
from loguru import logger
def get_sign(data):
    with open('dewu_sign.js','r') as f:
        js_code=f.read()
        ctx=execjs.compile(js_code)
    sign=ctx.call('get_sign',data)
    return sign
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.dewu.com",
    "Pragma": "no-cache",
    "Referer": "https://www.dewu.com/",
    "SK;": "",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "ltk": "HMKVw7bDusOyF8KSw6bCisKVP8KGwq/Cg8KRZcOmwpbCncKhPzvCkX3DksOmUsOPI3nDgwbDmirDgsOAwqxiDsKfNWjCoMKHw5DCjsKJwojDlcOP",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sessionid": "3zr1axmh-gkrw-07qn-pbg3-kkjcuoqubruk5b3n",
    "shumeiId": "20250406021723e4c41a40a5426f9a8cb53c5c3860323b00c0bb1865de4a56",
    "traceparent": "00-f5867c2c67f174ae32d032a357e67876-89d26108c09a7af4-01"
}
cookies = {
    "sajssdk_2015_cross_new_user": "1",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22196072bf6f52015-0bdd181709574d-1b525636-1405320-196072bf6f63446%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2MDcyYmY2ZjUyMDE1LTBiZGQxODE3MDk1NzRkLTFiNTI1NjM2LTE0MDUzMjAtMTk2MDcyYmY2ZjYzNDQ2In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22196072bf6f52015-0bdd181709574d-1b525636-1405320-196072bf6f63446%22%7D"
}
url = "https://app.dewu.com/api/v1/h5/commodity-pick-interfaces/pc/pick-rule-result/feeds/info"

data = {
    "pickRuleId": 644443,
    "pageNum": 1,
    "pageSize": 24,
    "filterUnbid": True,
    "showCspu": True
}
sign=get_sign(data)
data['sign']=sign
logger.info(sign)
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

logger.info(response.text)
