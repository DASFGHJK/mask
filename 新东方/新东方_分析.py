import requests
import hashlib
import time
from urllib.parse import urlencode
import json
# 要加密的字符串
# print(len('appId=5053&t=1740727808608&cityCode=430300&pageIndex=3&pageSize=12&categoryCode=123&order=0750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2'))
def md5_code(data):
    # 创建一个MD5哈希对象
    hash_object = hashlib.md5()
    # 更新哈希对象的内容
    hash_object.update(data.encode('utf-8'))
    # 计算哈希值并输出为十六进制字符串
    md5_hash = hash_object.hexdigest()
    return md5_hash
def get_time():
    return int(time.time()*1e3)
t=get_time()
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://souke.xdf.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://souke.xdf.cn/search?cityCode=430300&categoryCode=123",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    # "sign": "38fdaa333d87c43160b4001ea3ff7118",        #加密参数
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}
url = "https://dsapi.xdf.cn/product/v2/class/search"
params = {
    "appId": "5053",
    "t": str(t),
    "cityCode": "430300",
    "pageIndex": "2",
    "pageSize": "12",
    "categoryCode": "123",
    "order": "0"
}

data = urlencode(params)
data=data+"750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2"
# print(len(data))
sign=md5_code(data)
headers['sign']=sign

response = requests.get(url, headers=headers, params=params)
#
print(response.text)
print(response)