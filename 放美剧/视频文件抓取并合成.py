import requests

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://vip.vipuuvip.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://vip.vipuuvip.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}

response = requests.get('https://p.bvvvvvvv7f.com/video/fankongtejingzudibaji/%E7%AC%AC16%E9%9B%86/0000000.ts', headers=headers)

with open('1.ts','wb') as f:
    f.write(response.content)
    print("写入完毕")
