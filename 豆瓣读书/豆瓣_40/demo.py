import requests

cookies = {
    'll': '"108288"',
    'bid': 'OHMRB1USNDk',
    '_vwo_uuid_v2': 'DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70',
    '_ga': 'GA1.1.584985988.1742828259',
    'push_noty_num': '0',
    'push_doumail_num': '0',
    '__utmv': '30149280.27281',
    '_pk_id.100001.3ac3': 'b3012ea45818ea4c.1742912438.',
    '__yadk_uid': 'ctmU3566DYQKBzTgDrgsBNYDXvmJbi2z',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '_ga_RXNMP372GL': 'GS1.1.1744091772.10.1.1744092559.29.0.0',
    '__utmz': '81379588.1744117529.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    '__utmz': '30149280.1744524406.20.13.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    'ck': 'jUu3',
    '_pk_ref.100001.3ac3': '%5B%22%22%2C%22%22%2C1744887471%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXbax-6sf3PfDEfhW-RqoO3yhaJsm1yWS3laUqK6Hy12rXIEoHX-qelV2l_ONRmT5%26wd%3D%26eqid%3Dee8bbd9b0152ecca0000000667f51f10%22%5D',
    '_pk_ses.100001.3ac3': '1',
    'ap_v': '0,6.0',
    '__utma': '30149280.41827125.1742651446.1744727500.1744887471.25',
    '__utmc': '30149280',
    '__utmt_douban': '1',
    '__utmb': '30149280.1.10.1744887471',
    '__utma': '81379588.584985988.1742828259.1744727500.1744887471.10',
    '__utmc': '81379588',
    '__utmt': '1',
    '__utmb': '81379588.1.10.1744887471',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://book.douban.com/top250',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'll="108288"; bid=OHMRB1USNDk; _vwo_uuid_v2=DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70; _ga=GA1.1.584985988.1742828259; push_noty_num=0; push_doumail_num=0; __utmv=30149280.27281; _pk_id.100001.3ac3=b3012ea45818ea4c.1742912438.; __yadk_uid=ctmU3566DYQKBzTgDrgsBNYDXvmJbi2z; viewed="37212968"; dbcl2="272816827:/u5adYVyrnE"; _ga_RXNMP372GL=GS1.1.1744091772.10.1.1744092559.29.0.0; __utmz=81379588.1744117529.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=30149280.1744524406.20.13.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ck=jUu3; _pk_ref.100001.3ac3=%5B%22%22%2C%22%22%2C1744887471%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXbax-6sf3PfDEfhW-RqoO3yhaJsm1yWS3laUqK6Hy12rXIEoHX-qelV2l_ONRmT5%26wd%3D%26eqid%3Dee8bbd9b0152ecca0000000667f51f10%22%5D; _pk_ses.100001.3ac3=1; ap_v=0,6.0; __utma=30149280.41827125.1742651446.1744727500.1744887471.25; __utmc=30149280; __utmt_douban=1; __utmb=30149280.1.10.1744887471; __utma=81379588.584985988.1742828259.1744727500.1744887471.10; __utmc=81379588; __utmt=1; __utmb=81379588.1.10.1744887471',
}

params = {
    'start': '25',
}

response = requests.get('https://book.douban.com/top250', params=params, cookies=cookies, headers=headers)
print(response.text)