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

response = requests.get('https://p.bvvvvvvv7f.com/video/fankongtejingzudibaji/%E7%AC%AC15%E9%9B%86/index.m3u8', headers=headers)
#输出m3u8格式的返回值
res_list=(response.text).split('\n')  #将这个返回为
for res in res_list:
    if '.ts' in res:   #进行解析

        urls='https://p.bvvvvvvv7f.com/video/fankongtejingzudibaji/%E7%AC%AC15%E9%9B%86/'+res  #加入
