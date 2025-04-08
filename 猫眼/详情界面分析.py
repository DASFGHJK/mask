import requests


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.maoyan.com/films/1432644",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "mygsig": "{\"m1\":\"0.0.2\",\"m2\":0,\"ms1\":\"5e36686d1b4d3b9ba860620b558a4f59\",\"ts\":1742788415090,\"ts1\":1742788414770}",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "uuid_n_v": "v1",
    "uuid": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "_lxsdk_cuid": "195b208430fc8-0dd38ffffb5121-1b525636-157188-195b208430fc8",
    "_ga": "GA1.1.906369322.1742448752",
    "_lx_utm": "utm_source%3DBaidu%26utm_medium%3Dorganic",
    "_lxsdk": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1742448641,1742627397,1742784466,1742785003",
    "HMACCOUNT": "287F329C91831B5C",
    "_csrf": "c917b394437ad87230f129862e1068bdbd98c27c3efea79247e6cbaf05443aa0",
    "__mta": "49594137.1742448640954.1742785003289.1742785760053.43",
    "_lxsdk_s": "195c60c19f1-67f-9dd-b98%7C%7C76",
    "_ga_WN80P4PSY7": "GS1.1.1742784466.7.1.1742788412.0.0.0",
    "Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1742788414"
}
url = "https://www.maoyan.com/ajax/films/1432644"
params = {
    "timeStamp": "1742788415088",
    "index": "9",
    "signKey": "8af683ff7a18d93a94508929cb3729ca",
    "channelId": "40011",
    "sVersion": "1",
    "webdriver": "false",
    "WuKongReady": "h5"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)