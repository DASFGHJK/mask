import requests
import execjs
from curl_cffi import requests
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "text/plain;charset=UTF-8",
    "origin": "https://www.dhl.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.dhl.com/cn-zh/home/tracking.html?tracking-id=1234&submit=1&inputsource=marketingstage",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
}
url="https://www.dhl.com/cn-zh/home/tracking.html?tracking-id=1234&submit=1&inputsource=marketingstage"
response=requests.get(url=url,headers=headers)
bm_sz=response.cookies.get('bm_sz')
# print(bm_sz)
with open('01-dhl.js',encoding='utf-8') as f:
    js_code=f.read()
sensor_data=execjs.compile(js_code).call("get_data",bm_sz)
url="https://www.dhl.com/oHj2RF/EwiN6r/3/x9Z/mtcVyA2i/VYfatbGVwJcf/PyogJwgC/cVJ-X/nN7bHE"
data='{"sensor_data":'+sensor_data +'}'
# print(data)
response=requests.post(url,headers=headers,data=data)
print(response.text)
print(response.cookies)