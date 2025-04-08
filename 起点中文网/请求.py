import requests

cookies = {
    'w_tsfp': 'ltvuV0MF2utBvS0Q7avtlUKpETghdTw4h0wpEaR0f5thQLErU5mB0IJ7t8zwMXbd4sxnvd7DsZoyJTLYCJI3dwNGE52TJ4xEiAnDwdcn3YdHA0ViQM2OXgJKcb4k7zBHdHhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TrdsAr7KA8hB7xH1kWbh3oZWCoksBPoIOlcYBmldpj5SqA=',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.qidian.com/book/1039877474/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # 'Cookie': 'w_tsfp=ltvuV0MF2utBvS0Q7avtlUKpETghdTw4h0wpEaR0f5thQLErU5mB0IJ7t8zwMXbd4sxnvd7DsZoyJTLYCJI3dwNGE52TJ4xEiAnDwdcn3YdHA0ViQM2OXgJKcb4k7zBHdHhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TrdsAr7KA8hB7xH1kWbh3oZWCoksBPoIOlcYBmldpj5SqA=',
}

response = requests.get('https://www.qidian.com/chapter/1039877474/789197831/', cookies=cookies, headers=headers)
print(response.text)