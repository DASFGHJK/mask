import requests
import urllib3
from  urllib3.exceptions import InsecureRequestWarning

# 禁用 SSL 证书验证警告
urllib3.disable_warnings(InsecureRequestWarning)
cookies = {
    'partner': 'www_baidu_com',
    'seo_refer_info_2023': '%7B%22referUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.baidu.com%5C%2Flink%3Furl%3DEhIs4Gvx4Di6JK97-fuD-DRDEcBSRJHVglgEYExxsHK%26wd%3D%26eqid%3D9a0187d4007bcd8c0000000667fe0d03%22%2C%22referHost%22%3A%22www.baidu.com%22%2C%22landUrl%22%3A%22%5C%2F%22%2C%22landHost%22%3A%22www.51job.com%22%2C%22partner%22%3Anull%7D',
    'privacy': '1744703370',
    'guid': '8745f4de81230c0b36a1eb523f07d879',
    'sajssdk_2015_cross_new_user': '1',
    'Hm_lvt_1370a11171bd6f2d9b1fe98951541941': '1744114754,1744683436,1744702727,1744703370',
    'Hm_lpvt_1370a11171bd6f2d9b1fe98951541941': '1744703370',
    'HMACCOUNT': '87130C7627252F2B',
    'acw_tc': 'ac11000117447033752768073e008f0df1a5efed46e7b2e9dc0e302b1610e5',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%228745f4de81230c0b36a1eb523f07d879%22%2C%22first_id%22%3A%22196386cb3942add-008ac7e2389ba3-1a525636-1405320-196386cb39531a8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2Mzg2Y2IzOTQyYWRkLTAwOGFjN2UyMzg5YmEzLTFhNTI1NjM2LTE0MDUzMjAtMTk2Mzg2Y2IzOTUzMWE4IiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiODc0NWY0ZGU4MTIzMGMwYjM2YTFlYjUyM2YwN2Q4NzkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%228745f4de81230c0b36a1eb523f07d879%22%7D%2C%22%24device_id%22%3A%22196386cb3942add-008ac7e2389ba3-1a525636-1405320-196386cb39531a8%22%7D',
    'acw_sc__v2': '67fe0f90180a86ec64051b31b9f0e85f184427a1',
    'nsearch': 'jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D',
    'search': 'jobarea%7E%60%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FApython%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21',
    'ssxmod_itna': '7qmxciitF4yD2Dl+DCxDqpes=D=ZKdGOekibme59DBM2Y4iNDnD8x7YDv+fMD02Red5j70Ddqw9DR4LPqC2maq5U703AKD=xYQDwxYoDUxGtDpxG6Y/+DYACDt4DTD34DYDiE=DB9w9QDj7yku1vFIrKHAO5DbOI7DiIODY5pDAuGZZv18o+GDWp7DQyzIgPDExGOv8Km9xGaW3SEDlI7Dm4d0rd6DC9IwgPPg2vsI1ke+nmRrmPk5ZGYNBT41QRD1QhxNAi5qY=Q+BwxPBq5qj+exEtDioZKrnhDD==',
    'ssxmod_itna2': '7qmxciitF4yD2Dl+DCxDqpes=D=ZKdGOekibme5D8kZghDGN2e4Gatbjspx8rn+=e9YPL5xDB7Lwtr1QbAuRkPMElPrrKsGwBuGxdR65y+ySO0MQkmPp=KFR=sfwCO6Nmbt12S=e8hP2n2=NAWrQreaN1DtWEa8=EPOb=Dtd7W4hOrqVpWqY6Pklgu7yOmphafkvbor3UafX1m=xOGGeD3ke0PXtjK6+YTim6mPN1W8V00tP04Dw=Db1QDC9IGpthmkbT=DLxG743Rd=DyTq7Gx4D===',
    'JSESSIONID': 'ABE416C86C6F10AEA70C977F8D760D79',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'From-Domain': '51job_web',
    'Pragma': 'no-cache',
    'Referer': 'https://we.51job.com/pc/search?jobArea=000000&keyword=python&searchType=2&keywordType=',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'account-id': '',
    'partner': 'www_baidu_com',
    'property': '%7B%22partner%22%3A%22www_baidu_com%22%2C%22webId%22%3A2%2C%22fromdomain%22%3A%2251job_web%22%2C%22frompageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2F%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2Fpc%2Fsearch%3FjobArea%3D000000%26keyword%3Dpython%26searchType%3D2%26keywordType%3D%22%2C%22identityType%22%3A%22%22%2C%22userType%22%3A%22%22%2C%22isLogin%22%3A%22%E5%90%A6%22%2C%22accountid%22%3A%22%22%2C%22keywordType%22%3A%22%22%7D',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sign': '3bce2766028159ffcee10ca5692ef6a28c105cfd473522f7c41fa49a9243b9dc',
    'user-token': '',
    'uuid': '8745f4de81230c0b36a1eb523f07d879',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'partner=www_baidu_com; seo_refer_info_2023=%7B%22referUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.baidu.com%5C%2Flink%3Furl%3DEhIs4Gvx4Di6JK97-fuD-DRDEcBSRJHVglgEYExxsHK%26wd%3D%26eqid%3D9a0187d4007bcd8c0000000667fe0d03%22%2C%22referHost%22%3A%22www.baidu.com%22%2C%22landUrl%22%3A%22%5C%2F%22%2C%22landHost%22%3A%22www.51job.com%22%2C%22partner%22%3Anull%7D; privacy=1744703370; guid=8745f4de81230c0b36a1eb523f07d879; sajssdk_2015_cross_new_user=1; Hm_lvt_1370a11171bd6f2d9b1fe98951541941=1744114754,1744683436,1744702727,1744703370; Hm_lpvt_1370a11171bd6f2d9b1fe98951541941=1744703370; HMACCOUNT=87130C7627252F2B; acw_tc=ac11000117447033752768073e008f0df1a5efed46e7b2e9dc0e302b1610e5; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228745f4de81230c0b36a1eb523f07d879%22%2C%22first_id%22%3A%22196386cb3942add-008ac7e2389ba3-1a525636-1405320-196386cb39531a8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2Mzg2Y2IzOTQyYWRkLTAwOGFjN2UyMzg5YmEzLTFhNTI1NjM2LTE0MDUzMjAtMTk2Mzg2Y2IzOTUzMWE4IiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiODc0NWY0ZGU4MTIzMGMwYjM2YTFlYjUyM2YwN2Q4NzkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%228745f4de81230c0b36a1eb523f07d879%22%7D%2C%22%24device_id%22%3A%22196386cb3942add-008ac7e2389ba3-1a525636-1405320-196386cb39531a8%22%7D; acw_sc__v2=67fe0f90180a86ec64051b31b9f0e85f184427a1; nsearch=jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D; search=jobarea%7E%60%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FApython%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21; ssxmod_itna=7qmxciitF4yD2Dl+DCxDqpes=D=ZKdGOekibme59DBM2Y4iNDnD8x7YDv+fMD02Red5j70Ddqw9DR4LPqC2maq5U703AKD=xYQDwxYoDUxGtDpxG6Y/+DYACDt4DTD34DYDiE=DB9w9QDj7yku1vFIrKHAO5DbOI7DiIODY5pDAuGZZv18o+GDWp7DQyzIgPDExGOv8Km9xGaW3SEDlI7Dm4d0rd6DC9IwgPPg2vsI1ke+nmRrmPk5ZGYNBT41QRD1QhxNAi5qY=Q+BwxPBq5qj+exEtDioZKrnhDD==; ssxmod_itna2=7qmxciitF4yD2Dl+DCxDqpes=D=ZKdGOekibme5D8kZghDGN2e4Gatbjspx8rn+=e9YPL5xDB7Lwtr1QbAuRkPMElPrrKsGwBuGxdR65y+ySO0MQkmPp=KFR=sfwCO6Nmbt12S=e8hP2n2=NAWrQreaN1DtWEa8=EPOb=Dtd7W4hOrqVpWqY6Pklgu7yOmphafkvbor3UafX1m=xOGGeD3ke0PXtjK6+YTim6mPN1W8V00tP04Dw=Db1QDC9IGpthmkbT=DLxG743Rd=DyTq7Gx4D===; JSESSIONID=ABE416C86C6F10AEA70C977F8D760D79',
}

params = {
    'api_key': '51job',
    'timestamp': '1744703603',
    'keyword': 'python',
    'searchType': '2',
    'function': '',
    'industry': '',
    'jobArea': '000000',
    'jobArea2': '',
    'landmark': '',
    'metro': '',
    'salary': '',
    'workYear': '',
    'degree': '',
    'companyType': '',
    'companySize': '',
    'jobType': '',
    'issueDate': '',
    'sortType': '0',
    'pageNum': '2',
    'requestId': 'afb2c5120b82a08a7619644c077515df',
    'keywordType': '',
    'pageSize': '20',
    'source': '1',
    'accountId': '',
    'pageCode': 'sou|sou|soulb',
    'scene': '7',
}

response = requests.get('https://we.51job.com/api/job/search-pc', params=params, cookies=cookies, headers=headers,verify=False)
response.encoding='utf-8'
print(response.text)