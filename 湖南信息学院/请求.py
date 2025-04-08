import requests


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://jwgl.hnuit.edu.cn",
    "Pragma": "no-cache",
    "Referer": "https://jwgl.hnuit.edu.cn/jsxsd/xsxkkc/comeInGgxxkxk",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "JSESSIONID": "7C90A50FDEAE3F80269D0F9388293577",
    "SERVERID": "j123",
    "name": "value"
}
url = "https://jwgl.hnuit.edu.cn/jsxsd/xsxkkc/xsxkGgxxkxk"
params = {
    "kcxx": "",
    "skls": "",
    "skxq": "",
    "skjc": "",
    "sfym": "true",
    "sfct": "false",
    "szjylb": "13",
    "sfxx": "true"
}
data = {
    "sEcho": "1",
    "iColumns": "13",
    "sColumns": "",
    "iDisplayStart": "0",
    "iDisplayLength": "15",
    "mDataProp_0": "kch",
    "mDataProp_1": "kcmc",
    "mDataProp_2": "xf",
    "mDataProp_3": "skls",
    "mDataProp_4": "sksj",
    "mDataProp_5": "skdd",
    "mDataProp_6": "xqmc",
    "mDataProp_7": "xxrs",
    "mDataProp_8": "xkrs",
    "mDataProp_9": "syrs",
    "mDataProp_10": "ctsm",
    "mDataProp_11": "szkcflmc",
    "mDataProp_12": "czOper"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)