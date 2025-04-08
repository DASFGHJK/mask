import requests
import json
import re
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.fliggy.com/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "wk_cookie2": "17171cf2167cd82cbb83b70dbad0a1f5",
    "xlly_s": "1",
    "lid": "tb937616841",
    "wk_unb": "UUphzOrCqKNK%2BfSOtQ%3D%3D",
    "isg": "BO7uMvlnBT4QCHFaqlRT3bx3P0Kw77LpHfJd6Bi35fGs-41VgH9M-U6ys2cXG6oB",
    "cna": "9fdwIIXBPQsBASQKQsInlkUY",
    "mtop_partitioned_detect": "1",
    "_m_h5_tk": "b4c4e0eab796b7c2dc8cede09cc7008f_1743399862434",
    "_m_h5_tk_enc": "2db2ab2ae729329c823c94f1a6fcbf52",
    "dnk": "tb937616841",
    "sgcookie": "E100Pdv8eawXcddP1e5OI3WqhmHGgpLDrUMwHGwl%2FBP%2FbjFzeYp2XXvZQVEY%2BrThS%2FjmfDU4Z8nsDFeKcdrHsWZNK1tp6hcD8iTtpYR5LK26RJ4%3D",
    "t": "3048c245cd0ae9de489bcff8b02a0839",
    "tracknick": "tb937616841",
    "lgc": "",
    "sn": "",
    "_tb_token_": "773e805863be1",
    "cookie2": "2d76af8c4463b8aa4328b92df0ace599",
    "_nk_": "",
    "XSRF-TOKEN": "f1107561-9a80-4cbe-b732-76c95a9293f7",
    "tfstk": "ggfjiyv5SGCz0zmlooUyP9o-uBO_zGNEGVTO-NhqWIdxXcQp4ORN3so_63sM0KRA1Tc1-Nf4oCzDiZAM6krUT1_coCVN_EHNG0LJSaLt6FeywoPTs3ZUTW7YHEANyk5VL-VDcFd9kdK92zTHScdt6CUW2FTnBmI96zaWJFlx6jHAyLL62hd9DGdJ2ExJkfhi5UrHqZav0L6Br8JAk3Gt6sNM3Hgv2UYPNr9vAZCRgsfStKtdk3GTxokcU3LCwlm2j__RMFj8ajO1yFsBMTZ-GG_AKGYdD7ivltQC8L1gvfTleivylTatenQp0IK5sPcMDt7O_d1YvV-Aii5WK1mb4hWFzsp5vul5jd6ApIC_A7Iy4X-BglDsPpc6PHz7PADi1aResYhdACvvrUy4PzMeCKLkPra7PADMHUYyozaSLd1.."
}
url = "https://fcecore.fliggy.com/mget"
params = {
    "rids": "850162",
    "extParams": "{\"tabType\":\"PCGUL\",\"pageType\":1,\"appId\":\"16051\",\"sceneId\":\"307667\",\"pageNo\":2,\"_sid_\":\"60233\"}",
    "callback": "__jp6"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

headtitile=re.findall('"headTitle":"(.*?)"',response.text)
date_url=re.findall('"pcUrl":"(.*?)"',response.text)   #获得详情数据url
for titile,d_url in zip(headtitile,date_url):
    print(titile,d_url)