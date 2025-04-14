import requests

cookies = {
    'Hm_lvt_9c5f07b6ce20e3782eac91ed47d1421c': '1744465761',
    'HMACCOUNT': '87130C7627252F2B',
    'Hm_lpvt_9c5f07b6ce20e3782eac91ed47d1421c': '1744465777',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://www.binia.cc/index/45419/2.html',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'Hm_lvt_9c5f07b6ce20e3782eac91ed47d1421c=1744465761; HMACCOUNT=87130C7627252F2B; Hm_lpvt_9c5f07b6ce20e3782eac91ed47d1421c=1744465777',
}

response = requests.get('https://www.binia.cc/index/45419/3.html', cookies=cookies, headers=headers)
print(response.text)