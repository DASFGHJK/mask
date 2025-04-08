import requests
import json


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.yijiupi.com",
    "Pragma": "no-cache",
    "Referer": "https://www.yijiupi.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "UUID": "5e6b7b7f6f79abc8afc47dde8061741f",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "appCode": "ShoppingMallPC",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "token;": "",
    "x-sign": "b6fa1ae2c6520788eb79ccaa681ea700af752689",   #加密参数
    "x-sign-nonce": "b45df8b5_9a1e_4e72_b177_f6a2badd0baa", #加密参数
    "x-sign-timestamp": "1741351941", #初步判断为时间戳
    "x-sign-version": "1.0"
}
url = "https://www.yijiupi.com/v58/Product/List"
data = {
    "currentPage": 2,
    "data": {
        "searchKey": "奥利奥",
        "searchModes": [
            2
        ],
        "sort": 0,
        "currentPage": 2,
        "pageSize": 25,
        "filterSpecialArea": False,
        "searchSource": 1,
        "searchKeyNotCorrect": False,
        "brandId": ""
    },
    "pageSize": 25,
    "cityId": 402,
    "countyRegionId": "320116",
    "userClassId": 1,
    "userDisplayClass": 0,
    "addressId": "",
    "deviceType": 3
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)