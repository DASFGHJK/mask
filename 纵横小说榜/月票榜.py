import requests
import json
cookies = {
    'ZHID': 'BD0FF122F0C4A4768F4566070E8A74D5',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22195474c400828c-0c96e39691762f-1c525636-1405320-195474c4009e37%22%2C%22%24device_id%22%3A%22195474c400828c-0c96e39691762f-1c525636-1405320-195474c4009e37%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%2C%22%24latest_referrer_host%22%3A%22www.baidu.com%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%7D',
    'Hm_lvt_c202865d524849216eea846069349eb9': '1740657935',
    'acw_tc': 'ac11000117449724935768338e0041f94edcd5540d0612ed714f697257faed',
    'zhffr': 'www.baidu.com',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://www.zongheng.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.zongheng.com/rank?nav=monthly-ticket&rankType=1&month=20254',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'ZHID=BD0FF122F0C4A4768F4566070E8A74D5; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22195474c400828c-0c96e39691762f-1c525636-1405320-195474c4009e37%22%2C%22%24device_id%22%3A%22195474c400828c-0c96e39691762f-1c525636-1405320-195474c4009e37%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%2C%22%24latest_referrer_host%22%3A%22www.baidu.com%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%7D; Hm_lvt_c202865d524849216eea846069349eb9=1740657935; acw_tc=ac11000117449724935768338e0041f94edcd5540d0612ed714f697257faed; zhffr=www.baidu.com',
}

    data = {
        'cateFineId': '0',
        'cateType': '0',
        'pageNum': '2',
        'pageSize': '20',
        'period': '0',
        'rankNo': '20254',
        'rankType': '1',
    }

    response = requests.post('https://www.zongheng.com/api/rank/details', cookies=cookies, headers=headers, data=data)
    res=response.json()
    result_list=res['result']['resultList']
    for data in result_list:
        cateFineName=data['cateFineName']  #类型
        bookName=data['bookName']   #书名
        description=data['description'].replace('\n','').replace('\r','')  #简介
        print(cateFineName,bookName,description)