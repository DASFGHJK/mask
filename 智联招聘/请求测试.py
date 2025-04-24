import requests

cookies = {
    'x-zp-client-id': '5a667980-fd48-4dd0-8d07-82174cf00df1',
    'rt': '1dd24b230e0b49a6929246789f1d32fc',
    'sts_deviceid': '196246cda611135-057ceeace69eb5-1b525636-1405320-196246cda6222ed',
    'Hm_lvt_7fa4effa4233f03d11c7e2c710749600': '1744367911,1745414675',
    'HMACCOUNT': '87130C7627252F2B',
    'at': 'ebb52532ebdb4c639b452c56de3e99fe',
    'LastCity%5Fid': '749',
    'LastCity': '%E9%95%BF%E6%B2%99',
    'ZL_REPORT_GLOBAL': '{%22jobs%22:{%22recommandActionidShare%22:%222225864f-1497-41a2-9d3c-ac4b75518ac7-job%22}%2C%22//www%22:{%22seid%22:%22ebb52532ebdb4c639b452c56de3e99fe%22%2C%22actionid%22:%22116a4f6d-87da-46aa-a33f-1d24fb50b12a-cityPage%22}}',
    'selectCity_search': '749',
    'locationInfo_job': '{%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%221228456654%22%2C%22first_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2MjQ2Yzc0ZWQzMDNjLTBiZGI0NDllMmE0N2M3OC0xYjUyNTYzNi0xNDA1MzIwLTE5NjI0NmM3NGVlMzY3YSIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjEyMjg0NTY2NTQifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%221228456654%22%7D%2C%22%24device_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%7D',
    'sensorsdata2015jssdkchannel': '%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D',
    'acw_tc': '2760829017454215491488876e78dad61abe0baeb2c3ffcb8b83602b0ef72e',
    'Hm_lpvt_7fa4effa4233f03d11c7e2c710749600': '1745422552',
    'locationInfo_search': '{%22code%22:%22%22}',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.zhaopin.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.zhaopin.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-zp-business-system': '1',
    'x-zp-page-code': '0',
    'x-zp-platform': '13',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'x-zp-client-id=5a667980-fd48-4dd0-8d07-82174cf00df1; rt=1dd24b230e0b49a6929246789f1d32fc; sts_deviceid=196246cda611135-057ceeace69eb5-1b525636-1405320-196246cda6222ed; Hm_lvt_7fa4effa4233f03d11c7e2c710749600=1744367911,1745414675; HMACCOUNT=87130C7627252F2B; at=ebb52532ebdb4c639b452c56de3e99fe; LastCity%5Fid=749; LastCity=%E9%95%BF%E6%B2%99; ZL_REPORT_GLOBAL={%22jobs%22:{%22recommandActionidShare%22:%222225864f-1497-41a2-9d3c-ac4b75518ac7-job%22}%2C%22//www%22:{%22seid%22:%22ebb52532ebdb4c639b452c56de3e99fe%22%2C%22actionid%22:%22116a4f6d-87da-46aa-a33f-1d24fb50b12a-cityPage%22}}; selectCity_search=749; locationInfo_job={%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221228456654%22%2C%22first_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2MjQ2Yzc0ZWQzMDNjLTBiZGI0NDllMmE0N2M3OC0xYjUyNTYzNi0xNDA1MzIwLTE5NjI0NmM3NGVlMzY3YSIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjEyMjg0NTY2NTQifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%221228456654%22%7D%2C%22%24device_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%7D; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; acw_tc=2760829017454215491488876e78dad61abe0baeb2c3ffcb8b83602b0ef72e; Hm_lpvt_7fa4effa4233f03d11c7e2c710749600=1745422552; locationInfo_search={%22code%22:%22%22}',
}

params = {
    'MmEwMD': '551yfg46v.RnpxrC.RzqE9u1hSRh57dehABY_jjTz6KvCtjfYOILDuLQckonVlgkTfiixqt7kVHOn.HDGoKwF7X1Dx7i1yNWCILzCw6icKL9sMnG2uZtsAcxmbJLN77AlQ96njtILfuk.UPHv376.9Z7LQIB1HpmVY.hgli67s5jJCvAX2p8HFzku.CPgDPNLUmhG1fzvm3WDoCKqs2lk2Nx9ymFfPK.4Gs916KrLKICnZfaH1_j95NYu5dLrbMl_sC81K2Y3WShPEbvH5gIkz4iz32KEK.8Gf91ih5Oo_mP0H2CjaU36BUpRJ71Kv1wr7c83DaI47UPEFFIAzulliZ.dB28XaqzevA42PFszhNSCFgFe9HBq8QdLudROLa8PmSetxNG7zK6PvRgIiU8.aa',
    'c1K5tw0w6_': '4ZPyZtMHu9CGsqSF2nZAiTMHKQ79plep6Fjjs7C0y2ceVYtLl0rwWBElKUOst8EQcN3vkVGBfnndAlm5eu.a7t_51iLQtK9DHsswIfvaev3k2pWb1Q0Ws8TxLm5E0uQ3Ko2WNPMY0wL.UdJm1nqy3J.6MdFMOIT6Y25r44pk9UoJP0PpfNU74YL2CA1H427Shn9fqadAFCO4ecMq1mHDlIQI.a.xzovS8uy5MMK51LIEUWo1TxzDj0s8VEwZoxElYKxoZbk7n5lmd._DtANn5LrHjJjGSP_ewB6jyL11SQNskf96khSqNasVptkFkgFm1EGcySzPCvPGo1PgJMMeXzifPyHVl0UbJjxHtN_HiBRD_KMC5jAmX8oo0OE2SVGR0XIb9XRlCip.ctFX8.a9gRFlPenkRXoIGQq2ZfbHHryZK1JdD6_MZOoHNcAc3GPKpVDfIQXSpTq4Qg8BxpQKvQA',
}

json_data = {
    'S_SOU_WORK_CITY': '749',
    'order': 11,
    'pageSize': 20,
    'pageIndex': 2,
    'cvNumber': '15F309BE88ED879EAE2526E303D84D7F11E0301A541EC6FAC1C4083F8434D0C4F86A60E11286D88D899E0050046C7EB4_A0001',
    'eventScenario': 'pcSearchedSouSearch',
    'anonymous': 0,
}

response = requests.post('https://fe-api.zhaopin.com/c/i/search/positions', params=params, cookies=cookies, headers=headers, json=json_data)
print(response.text)