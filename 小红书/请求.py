import requests
import json


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.xiaohongshu.com/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-b3-traceid": "4680118d6c57ec1c",
    "x-mns": "awpwGvvuMQ4OyuPna5LN3MFDnj1ug8SfMCWocx+wtOWG7kohCHZ5/+9yLBfxYpNioIBmJCyTzQNHO2WSzb/coYFCtHGnwm6FfDlOvQeJFn0+nJfmL9yDDtoF0TPyDvR4Tyw5Yu9pPHv8CTixuC5uyY3QXya59aOEONCEEbD0uGKLaZxY7teveBT4WXpIzXI/ExgHJF4S7dX4gMa+0w+LBgxjIYB6WkSiYjdgQvoH4u3d6X/koEvkw1m7fo1C/BLeSOfIul40YTf540OW9uv+N8wipRohg0zyB1BRPonidM6TIX/vtDBB3wQMvexOk674w0K2zFtFZxfpBePK392BTdn9hYaQZDT5EGXLvkQQPXODN1uh4OC70vPH6LeNSko4N3DMHMX6aIuZSpzlBwxkivmo9I9e2nN/WMI1lmLKtFGXavlpNnIlDtyGOTe6Qu8Bw10PxgBJYvl15clOvM78yiWITR55NNSdyFom11HBycJeMeoIBJ3duQhzQ4y9",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwicGF5bG9hZCI6IjgyZTIyMTY1NDQyNzZiNDQ0YmI4MjM1NTM3ZjkyZjQzNzkxMGMwYjNiYjdmMDNhNWI0OWE2MWJhM2FhZTRjNDA5NjNlOWI5OGYwM2MxNTQwZjc4OGU0NTViMDQ1MWI2ZTcxNWU2OWVhMGZiMTU1M2M0ODA1Njg2ZmFjZTQ0ZTVhYzEyYmVmYzNlNTQ1NzM4MjhhMDEzNzdmOGEyZmIyMGEyZWJiOTJmZmMxMGZiZjc2ZjEwMDFlNmE1NmQ0MGY5Njk3NTFkODBjODFjZjMxOTlhYjNlZTg5ZWRlNTJlY2Y2NDNiMGMyM2Y3MmRlNmUwMzAxNDAyNzNhNTllNjYzYmNkNzhlNTExMGMzYzIzZWYyYWMzYzNkNmNjZjMyNzgwZTk1YjNiNjczZTE0N2RlMDI1ODA5NWI0MzU0YmEwM2Q4ZmRmNmNlODZmZGNhNDA4MzcxN2NiN2RkNjNmNjljMDBlNzU1MGM3NTQ2NjNkZmU5NmFiYTBiMDllZWUwNmM1MWJlMWEyNTEwMTQ0OTI0NDVlZjUwYmZiODNkMmMxOTFiIn0==",
    # "x-s-common": "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",
    "x-t": "1742718443260",
    "x-xray-traceid": "cae10e8f79c2cf02bfa92d902d7db2f0"
}
cookies = {
    "abRequestId": "6d9532b6-edac-5ade-be2a-b48a6e2ff3ae",
    "webBuild": "4.60.1",
    "xsecappid": "xhs-pc-web",
    "a1": "195c1e3c6fb1a6ul0sv0hjy9nb8eutg6yebmhcn0m30000166702",
    "webId": "0cf10fc6f7f04f199f3dd3923caacc97",
    "gid": "yj2Sydqf28vyyj2SydqSKdSIiDy0K718Mh8xD86VvjIDY6q8d79kKx888yKKW8J88S80yYYJ",
    "web_session": "040069b5dc6d3c13bc9936ffea354bea4ac12c",
    "unread": "{%22ub%22:%2267c58ab9000000002901f9e5%22%2C%22ue%22:%2267dcfe11000000001b03a7b2%22%2C%22uc%22:18}",
    "acw_tc": "0a0bb0cf17427178384892505e6be7ce66bcf525b0615de5179b1e97eb44a3",
    "loadts": "1742717841013",
    "websectiga": "9730ffafd96f2d09dc024760e253af6ab1feb0002827740b95a255ddf6847fc8",
    "sec_poison_id": "d369dddb-7e6c-47d1-ba05-6eb8134694da"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
data = {
    "cursor_score": "",
    "num": 35,
    "refresh_type": 1,
    "note_index": 10,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.movie_and_tv_v3",
    "search_key": "",
    "need_num": 10,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": False
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)