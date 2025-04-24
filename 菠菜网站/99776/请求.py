import requests

cookies = {
    'lang': 'zh-cn',
    'langx': 'zh-cn',
    'SESSION_ID': 'guest',
    'ICCACHE': 'MM9USIDqX28r2VTTC8DNu2AJbOzyNOyg51Dr2C54iIIyUHVuWTRvTDRUMm1JQU42',
    'page_site': 'first',
    '_ga': 'GA1.1.1550614363.1745321221',
    'NP_1606616': 'Y',
    'XID': 'SIid2m6UfPZLvWgGO7DavQ==',
    '_ga_XVSPVLR6E2': 'GS1.1.1745321220.1.1.1745321345.0.0.0',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://www.97799f.com:9900',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.97799f.com:9900/entrance/page/soya?ni=1',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'lang=zh-cn; langx=zh-cn; SESSION_ID=guest; ICCACHE=MM9USIDqX28r2VTTC8DNu2AJbOzyNOyg51Dr2C54iIIyUHVuWTRvTDRUMm1JQU42; page_site=first; _ga=GA1.1.1550614363.1745321221; NP_1606616=Y; XID=SIid2m6UfPZLvWgGO7DavQ==; _ga_XVSPVLR6E2=GS1.1.1745321220.1.1.1745321345.0.0.0',
}

data = {
    'username': 'enjoy12',
    'password': '12345ljc',
}

response = requests.post('https://www.97799f.com:9900/entrance/login.json?k=Y2NhZWIjMzA0MzhhYzZlMzBiNTE4YjBhYzI1ODZjN2QzMzExNTkqNDkxNTU=', cookies=cookies, headers=headers, data=data)
print(response.text)