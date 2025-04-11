import requests

cookies = {
    'deviceid': 'f9d48e73fd93016df77cb298f461940',
    'Qs_lvt_404253': '1744253534',
    'Qs_pv_404253': '3196162704251938300',
    '_uetsid': 'd03f4fe015b611f0bbf7a95d01185ef6',
    '_uetvid': 'd03f4da015b611f08429b9bc89f3dc4f',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # Already added when you pass json=
    # 'Content-Type': 'application/json',
    'Origin': 'https://app.diandian.com',
    'Pragma': 'no-cache',
    'Referer': 'https://app.diandian.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'language': 'zh',
    'platform': '3',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'deviceid=f9d48e73fd93016df77cb298f461940; Qs_lvt_404253=1744253534; Qs_pv_404253=3196162704251938300; _uetsid=d03f4fe015b611f0bbf7a95d01185ef6; _uetvid=d03f4da015b611f08429b9bc89f3dc4f',
}

json_data = {
    'email': '2320131446@qq.com',
    'password': '123456xx',
    #需要逆向的参数
    'k': 'bxZdA3UCCh0AUmwUXwRxAEZTchAvCg1YLRxUQxtQbhxWBHcCRV0KSXgCR1MjHFRDG04oFUFCM1EASlEOM1QPWTkbHgpVCDA=',
}

response = requests.post('https://api.diandian.com/pc/common/v1/user/company/login', cookies=cookies, headers=headers, json=json_data)
print(response.text)