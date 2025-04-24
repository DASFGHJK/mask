import requests
import execjs

cookies = {
    '_ga': 'GA1.1.1609895448.1693574424',
    'tt_webid': '7415136109469402661',
    'csrftoken': '22eaef85a32cf37181a3b5b6922835ce',
    'gfkadpd': '24,6457',
    'local_city_cache': '%E6%88%90%E9%83%BD',
    's_v_web_id': 'verify_m4o5al9s_amG6FJVT_OlWi_4nf1_BF7i_smtm9zIRnzDx',
    '_ga_QEHZPBE5HH': 'GS1.1.1734180838.6.1.1734180850.0.0.0',
    'tt_scid': 'C7-JynDD16gNlpT7MwlUEFfy-zQo3UYQ43wm5bj8TRLDq5v3aU-tV3ci68gj7GkEb96d',
    'ttwid': '1%7C7kYPHtBxgojVa4038yunhuCuDfAihFXtQ6s3EkqSOx8%7C1734180852%7C6f2db972cdcbaabcd53d0fc2205ec0c08c3127d55503098e68060a267e4ce870',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.toutiao.com/',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

params = {
    'channel_id': '3189398999',
    'min_behot_time': '1734182703',
    'offset': '0',
    'refresh_count': '5',
    'category': 'pc_profile_channel',
    'client_extra_params': '{"short_video_item":"filter"}',
    'aid': '24',
    'app_name': 'toutiao_web',
    'msToken': 'rpdlFKzwYVRw16K0kErTWRxiKk6PaGDvkC6yJOrQEcYn8U9o0aGteLrxZJoX2l9Vo2l5a_KiMmzyZkHAf-r2oeL-p0f414CJy5i0EKChdwlbT8Vrs4GMkmN78Z01kEA=',
    'a_bogus': '',
}
a_b = execjs.compile(open('ab.js',encoding='utf-8').read()).call('get_ab',params['channel_id'],params['min_behot_time'],params['msToken'])
print('生成出来的ab值',a_b)
params['a_bogus'] = a_b
response = requests.get('https://www.toutiao.com/api/pc/list/feed', params=params, cookies=cookies, headers=headers)
print(response.status_code)
print(response.text)