import pandas as pd
import requests
import execjs
import json
import pandas
def get_page(cookie, t):
    # 读取并编译JS文件
    with open('数据加密.js', 'r', encoding='utf-8') as f:
        js_code = f.read()

    # 创建JS执行环境
    ctx = execjs.compile(js_code)

    # 调用JS函数（需确保JS文件已正确导出函数）
    result = ctx.call('generateSearchIds',cookie, tk)

    # 返回生成的参数
    return {
        "searchWordId": result['searchWordId'],
        "searchId": result['searchId']
    }


# 使用示例
cookie = "8SDLPQ6HSIPTHAWH0N6WIIZXQC9D5FUC"
tk = "query=%7B..."  # 你的实际查询参数
# ids = get_page(cookie, tk)
# print(ids)
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.nstl.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://www.nstl.gov.cn/resources_search.html?t=DegreePaper&q=5Lit5Zu956eR5a2m6Zmi5aSn5a2m",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "NCK": "8SDLPQ6HSIPTHAWH0N6WIIZXQC9D5FUC",
    "libcode": "CN000000",
    "nstl_token": "3c7debbe-cf1c-9d22-fa4d-550b96ae8957",
    "SESSION": "YTE0ZTM4NjAtMWVhOS00NWIwLTkzZDEtOTdmMTNkNDI2MjM4",
    "nstl_rsp": "https%3A%2F%2Fwww.nstl.gov.cn%2Fresources_search.html%3Ft%3DDegreePaper%26q%3D5Lit5Zu956eR5a2m6Zmi5aSn5a2m",
    "CASTGC": "TGT-2685-51aW17NcLExZQheh6cZMcDGv7pbYKM6KfatENO5pfU2mDZm0Lo-nstl.gov.cn",
    "user_isBind": "null",
    "C": "0"
}
url = "https://www.nstl.gov.cn/api/service/nstl/web/execute"
params = {
    "target": "nstl4.search4",
    "function": "paper/pc/list/pl"
}
all_data=[]
searchWordId=[]
searchId=[]
for page in range(1,7):
    data = {
        "query": "{\"c\":10,\"st\":\"0\",\"f\":[],\"p\":\"\",\"q\":[{\"k\":\"\",\"v\":\"中国科学院大学\",\"e\":1,\"o\":\"AND\",\"a\":0},{\"k\":\"yea\",\"a\":1,\"o\":\"\",\"f\":1,\"v\":\"2022\"},{\"k\":\"laid\",\"a\":1,\"o\":\"\",\"f\":1,\"vs\":[\"中文\"]}],\"op\":\"AND\",\"s\":[\"nstl\",\"haveAbsAuK:desc\",\"yea:desc\",\"score\"],\"t\":[\"DegreePaper\"]}",
        "webDisplayId": "11",
        "sl": "1",
        "searchWordId": searchWordId,
        "searchId": searchId,
        "facetRelation": "[{\"id\":\"4f2e293d9273a86655e786132235a112\",\"sequence\":2,\"field\":\"yea\",\"name\":\"年份\",\"value\":\"2022\"}]",
        "pageSize": "10",
        "pageNumber": str(page)
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

    print(response.text)
    print(response)
    data_list= json.loads(response.text)
    data_list=data_list['data']
    for item in data_list:
        try:
            # 字段映射
            paper_data = {
                'Title': item[17]['v'][0],
                'Time':item[4]['v'][0],  #出版时间
                'Abstract': item[18]['v'],
                'First Author': item[20]['v'][0][2]['v'][0],
                'Language': item[5]['v'][0],
                'Major': item[14]['v'][0],
                'Degree': item[6]['v'][0],
                'Publisher': item[16]['v'][0],
                'Keywords': ', '.join(item[15]['v']),
                'Second Author': item[19]['v'][0][2]['v'][0] if len(item[19]['v'][0][2]['v']) > 0 else 'N/A'
            }
            all_data.append(paper_data)
            # 格式化输出
            print("\n" + "=" * 50)
            print(f"Academic Paper Record [ID: {data_list.index(item) + 1}]")
            print("-" * 50)
            for key, value in paper_data.items():
                print(f"{key + ':':<15}{value}")
            print("=" * 50)

        except (IndexError, KeyError) as e:
            print(f"\n⚠️ Data parsing error at record {data_list.index(item) + 1}: {str(e)}")
            continue
if all_data:
    df=pd.DataFrame(all_data)

    column_mapping = {
        'Title': '标题',
        'Time':'出版时间',
        'Abstract': '摘要',
        'First Author': '第一作者',
        'Language': '语言',
        'Major': '专业',
        'Degree': '学位',
        'Publisher': '出版单位',
        'Keywords': '关键词',
        'Second Author': '第二作者',
        'Page': '页码'
    }
    df.rename(columns=column_mapping, inplace=True)
    # 保存文件
    filename = f"学术论文_{pd.Timestamp.now().strftime('%Y%m%d_%H%M')}.xlsx"
    df.to_excel(filename, index=False, engine='openpyxl')
    print(f"✅ 成功保存 {len(df)} 条数据到 {filename}")