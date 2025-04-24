import random

import requests
import json
import re
import pandas as pd
import time
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
    'Hm_lpvt_7fa4effa4233f03d11c7e2c710749600': '1745422552',
    'locationInfo_search': '{%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # Already added when you pass json=
    # 'content-type': 'application/json',
    'origin': 'https://xiaoyuan.zhaopin.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://xiaoyuan.zhaopin.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-zp-at': 'ebb52532ebdb4c639b452c56de3e99fe',
    'x-zp-business-system': '40',
    'x-zp-platform': '14',
    'x-zp-rt': '1dd24b230e0b49a6929246789f1d32fc',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'x-zp-client-id=5a667980-fd48-4dd0-8d07-82174cf00df1; rt=1dd24b230e0b49a6929246789f1d32fc; sts_deviceid=196246cda611135-057ceeace69eb5-1b525636-1405320-196246cda6222ed; Hm_lvt_7fa4effa4233f03d11c7e2c710749600=1744367911,1745414675; HMACCOUNT=87130C7627252F2B; at=ebb52532ebdb4c639b452c56de3e99fe; LastCity%5Fid=749; LastCity=%E9%95%BF%E6%B2%99; ZL_REPORT_GLOBAL={%22jobs%22:{%22recommandActionidShare%22:%222225864f-1497-41a2-9d3c-ac4b75518ac7-job%22}%2C%22//www%22:{%22seid%22:%22ebb52532ebdb4c639b452c56de3e99fe%22%2C%22actionid%22:%22116a4f6d-87da-46aa-a33f-1d24fb50b12a-cityPage%22}}; selectCity_search=749; locationInfo_job={%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221228456654%22%2C%22first_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2MjQ2Yzc0ZWQzMDNjLTBiZGI0NDllMmE0N2M3OC0xYjUyNTYzNi0xNDA1MzIwLTE5NjI0NmM3NGVlMzY3YSIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjEyMjg0NTY2NTQifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%221228456654%22%7D%2C%22%24device_id%22%3A%22196246c74ed303c-0bdb449e2a47c78-1b525636-1405320-196246c74ee367a%22%7D; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; Hm_lpvt_7fa4effa4233f03d11c7e2c710749600=1745422552; locationInfo_search={%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}',
}

params = {
    'x-zp-page-request-id': '7c9fcd54e2e84d99bfca57d30faaf790-1745422854215-521029',
    'x-zp-client-id': '5a667980-fd48-4dd0-8d07-82174cf00df1',
}
data = []
maxnum=11
keyword="工程管理"
for page in range(1,maxnum):
    print(f"正在抓取第{page}页------------------>")
    time.sleep(random.randint(3,5))
    json_data = {
        'identity': '1',
        'filterMinSalary': 1,
        'version': '8.2.6',
        'pageIndex': str(page),
        'pageSize': 20,
        'cvNumber': '15F309BE88ED879EAE2526E303D84D7F11E0301A541EC6FAC1C4083F8434D0C4F86A60E11286D88D899E0050046C7EB4_A0001',
        'order': 12,
        'S_SOU_FULL_INDEX': keyword,
        'S_SOU_EDUCATION_LOWESTLEVEL': '3',
        'at': 'ebb52532ebdb4c639b452c56de3e99fe',  #加上硕士的限制
        'rt': '1dd24b230e0b49a6929246789f1d32fc',
        'channel': 'xiaoyuan',
        'platform': '14',
        'd': '5a667980-fd48-4dd0-8d07-82174cf00df1',
    }

    response = requests.post('https://cgate.zhaopin.com/positionbusiness/searchrecommend/searchPositions', params=params, cookies=cookies, headers=headers, json=json_data)
    res=response.json()
    # print(res)
    work_list=res['data']['list']

    workType=re.findall("'workType': '(.*?)'",str(work_list))     #招聘类型
    workingExp=re.findall("'workingExp': '(.*?)'",str(res))   #工作年限要求


    for i, work in enumerate(work_list):
        row = {
            '招聘类型': workType[i] if i < len(workType) else '',
            '企业名称': work['companyName'],
            '企业性质': work['property'],
            '岗位名称': work['name'],
            '公告链接': work['companyUrl'],
            '学历要求': work['education'],
            '工作年限要求': workingExp[i] if i < len(workingExp) else '',
            '薪资': work['salary60'],
            'base地': work['jobRootOrgInfo']['cityName'],
            '行业': work['industryName'],
            '截止时间': '',  #
            '投递链接': "https://xiaoyuan.zhaopin.com/job/"+work['number'],
            '特殊要求': work['jobSummary']
        }
        print(row)
        data.append(row)

# 创建 DataFrame
df = pd.DataFrame(data)

# 保存到 xlsx 文件
df.to_excel(f'招聘信息{keyword}.xlsx', index=False)

print(f"数据已成功保存到 '招聘信息{keyword}.xlsx' 文件中。")