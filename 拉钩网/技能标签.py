import requests
from lxml import etree
import re
# 职位名称,公司名称,薪资范围,工作地点,经验要求,学历要求,职位类型,技能标签,福利待遇
cookies = {
    'index_location_city': '%E5%85%A8%E5%9B%BD',
    'user_trace_token': '20250417161503-32b932d5-736d-46ed-a40e-ae8b5a50e7d1',
    'LGUID': '20250417161503-e4180bf8-2813-49e6-ba25-15ca8d673566',
    '_ga': 'GA1.2.513643464.1744877703',
    'gate_login_token': 'v1####c8fd30ce48379ebd5f77dc07c46d1fbff74c3bda809c6c861a12cf1f39e35e6f',
    'LG_HAS_LOGIN': '1',
    'hasDeliver': '0',
    'privacyPolicyPopup': 'false',
    '__lg_stoken__': '63ad647a3de9966634f732679fea357b0f13804c0c000d0a60aa69ec56daff122588a54ebffe738b8b3afe75608c31ce0327bc184cd621b32835585a5da49f8115f22c686db4',
    'Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6': '1744877703,1744973645',
    'Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6': '1744973645',
    'HMACCOUNT': '87130C7627252F2B',
    '_gid': 'GA1.2.1289314302.1744973645',
    'LGSID': '20250418185405-808a7431-2dc5-4ebe-bad7-ed363f9d9f93',
    'PRE_UTM': '',
    'PRE_HOST': '',
    'PRE_SITE': 'https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html',
    'PRE_LAND': 'https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html',
    'LGRID': '20250418185406-cdb599ba-6b5e-47b1-b418-776a84f96cb6',
    '_ga_DDLTLJDLHH': 'GS1.2.1744973646.2.0.1744973646.60.0.0',
    'JSESSIONID': 'ABAABJAABAEACCJDF80AC8990B4E8D8D761291CCD4396F2',
    'WEBTJ-ID': '20250418185459-196488999d6707-076906e242aabc8-1a525636-1405320-196488999d73695',
    'sensorsdata2015session': '%7B%7D',
    '_putrc': 'C4F07E6ACD10F5B3123F89F2B170EADC',
    'login': 'true',
    'unick': '%E7%94%A8%E6%88%B73606',
    'showExpriedIndex': '1',
    'showExpriedCompanyHome': '1',
    'showExpriedMyPublish': '1',
    'X_HTTP_TOKEN': '0bb251cb838f75f3267379447114dba756a7f3784e',
    'X_MIDDLE_TOKEN': '63ac2503fd641c89b1364b6a7d46319e',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_utm_source%22%3A%22PC_SEARCH%22%2C%22%24os%22%3A%22MacOS%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22135.0.0.0%22%7D%2C%22%24device_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.lagou.com/wn/zhaopin?fromSearch=true&kd=%E9%B8%BF%E8%92%99&city=%E5%85%A8%E5%9B%BD',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'index_location_city=%E5%85%A8%E5%9B%BD; user_trace_token=20250417161503-32b932d5-736d-46ed-a40e-ae8b5a50e7d1; LGUID=20250417161503-e4180bf8-2813-49e6-ba25-15ca8d673566; _ga=GA1.2.513643464.1744877703; gate_login_token=v1####c8fd30ce48379ebd5f77dc07c46d1fbff74c3bda809c6c861a12cf1f39e35e6f; LG_HAS_LOGIN=1; hasDeliver=0; privacyPolicyPopup=false; __lg_stoken__=63ad647a3de9966634f732679fea357b0f13804c0c000d0a60aa69ec56daff122588a54ebffe738b8b3afe75608c31ce0327bc184cd621b32835585a5da49f8115f22c686db4; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1744877703,1744973645; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1744973645; HMACCOUNT=87130C7627252F2B; _gid=GA1.2.1289314302.1744973645; LGSID=20250418185405-808a7431-2dc5-4ebe-bad7-ed363f9d9f93; PRE_UTM=; PRE_HOST=; PRE_SITE=https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html; PRE_LAND=https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html; LGRID=20250418185406-cdb599ba-6b5e-47b1-b418-776a84f96cb6; _ga_DDLTLJDLHH=GS1.2.1744973646.2.0.1744973646.60.0.0; JSESSIONID=ABAABJAABAEACCJDF80AC8990B4E8D8D761291CCD4396F2; WEBTJ-ID=20250418185459-196488999d6707-076906e242aabc8-1a525636-1405320-196488999d73695; sensorsdata2015session=%7B%7D; _putrc=C4F07E6ACD10F5B3123F89F2B170EADC; login=true; unick=%E7%94%A8%E6%88%B73606; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; X_HTTP_TOKEN=0bb251cb838f75f3267379447114dba756a7f3784e; X_MIDDLE_TOKEN=63ac2503fd641c89b1364b6a7d46319e; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_utm_source%22%3A%22PC_SEARCH%22%2C%22%24os%22%3A%22MacOS%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22135.0.0.0%22%7D%2C%22%24device_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%7D',
}

params = {
    'fromSearch': 'true',
    'kd': 'java',
    'pn': '1',
}

response = requests.get('https://www.lagou.com/wn/zhaopin', params=params, cookies=cookies, headers=headers)

# print(response.text)
data = re.findall(r'class="ir___QwEG"><span>(.*?)</span></div>', response.text)

# 确保 data 是一个长度为15的数组，不足的部分用“暂无”填充
data = data[:15] + ['暂无'] * (15 - len(data))

for date in data:
    print(date.replace('</span>','').replace('<span>',','))
