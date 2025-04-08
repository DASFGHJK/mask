import requests

cookies = {
    'FSSBBIl1UgzbN7N80T': 'jW39ezbWPr',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'http://www.chinadrugtrials.org.cn/index.html',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    # 'Cookie': 'FSSBBIl1UgzbN7N80T=jW39ezbWPr',
}

response = requests.get('http://www.chinadrugtrials.org.cn/index.html', cookies=cookies, headers=headers, verify=False)
print(response.text)