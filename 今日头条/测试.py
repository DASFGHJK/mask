import requests

cookies = {
    'Hm_lvt_bffe2d130d940fce5a0876ee2dc36b92': '1745465016',
    'HMACCOUNT': '87130C7627252F2B',
    'Hm_lpvt_bffe2d130d940fce5a0876ee2dc36b92': '1745465026',
    'sessionid': '6695xba07mmgo865459xx7cofxxbamfx',
    'csrftoken': '8cPnks0CK4n9ZMkjuOmY7IZnjfKGHsro',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://course.sjtu.plus/?page=2&size=20',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'X-CSRFToken': '8cPnks0CK4n9ZMkjuOmY7IZnjfKGHsro',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'Hm_lvt_bffe2d130d940fce5a0876ee2dc36b92=1745465016; HMACCOUNT=87130C7627252F2B; Hm_lpvt_bffe2d130d940fce5a0876ee2dc36b92=1745465026; sessionid=6695xba07mmgo865459xx7cofxxbamfx; csrftoken=8cPnks0CK4n9ZMkjuOmY7IZnjfKGHsro',
}

params = {
    'page': '2',
    'size': '20',
}

response = requests.get('https://course.sjtu.plus/api/review/', params=params, cookies=cookies, headers=headers)
print(response.text)