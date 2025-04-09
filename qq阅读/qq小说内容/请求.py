import requests

# cookies = {
#     'pgv_pvid': '5074300786',
#     'RK': 'hJ8gkas//+',
#     'ptcz': 'fa1f60270c10ecaf07f41a6f3100d3f376cf9da0fc51d410693ee2bf47dc110c',
#     'ETCI': 'f61a058298e041228328fda73b2c49a8',
#     'msecToken': '2d25bc4067f296677a4e219bb61c3cf0',
#     'fuid': '025c87e5777a4e98acdd55605c408e3f',
#     'ym_localSetting': '%7B%22theme%22%3A0%2C%22fontSize%22%3A20%7D',
#     'Hm_lvt_658712f1172d00d32a03903e18c9880d': '1744168867',
#     'HMACCOUNT': '87130C7627252F2B',
#     'Hm_lvt_ff87bb29065f69d9454384350597f584': '1744168891',
#     'Hm_lpvt_658712f1172d00d32a03903e18c9880d': '1744168975',
#     'source': 'pc_jump',
#     'Hm_lpvt_ff87bb29065f69d9454384350597f584': '1744169164',
# }

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://yunqi.qq.com/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'pgv_pvid=5074300786; RK=hJ8gkas//+; ptcz=fa1f60270c10ecaf07f41a6f3100d3f376cf9da0fc51d410693ee2bf47dc110c; ETCI=f61a058298e041228328fda73b2c49a8; msecToken=2d25bc4067f296677a4e219bb61c3cf0; fuid=025c87e5777a4e98acdd55605c408e3f; ym_localSetting=%7B%22theme%22%3A0%2C%22fontSize%22%3A20%7D; Hm_lvt_658712f1172d00d32a03903e18c9880d=1744168867; HMACCOUNT=87130C7627252F2B; Hm_lvt_ff87bb29065f69d9454384350597f584=1744168891; Hm_lpvt_658712f1172d00d32a03903e18c9880d=1744168975; source=pc_jump; Hm_lpvt_ff87bb29065f69d9454384350597f584=1744169164',
}

params = {
    'source': 'pc_jump',
}

response = requests.get('https://m.yunqi.qq.com/read/54244051/2', params=params, headers=headers)
print(response.text)