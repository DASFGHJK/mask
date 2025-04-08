import requests
from bs4 import BeautifulSoup
import json

# 请求头配置
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://quote.eastmoney.com/sh600519.html",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}

# Cookies配置
cookies = {
    "qgqp_b_id": "8c0158678d2b8ffd4c2dbaaf0326b980",
    "JSESSIONID": "39C8954FEC8CDBAC8EAD7DBCDAB0F6E0"
}

# 请求参数
keyword = '600519'
params = {
    "callback": "jQuery351087640725597554_1743863195351",
    "reportName": "RPT_STOCKCALENDAR",
    "columns": "CLOSE_PRICE",  # 只保留需要的字段
    "filter": f"(SECURITY_CODE=\"{keyword}\")(EVENT_TYPE_CODE in (\"023\",\"012\",\"002\",\"019\",\"020\",\"005\",\"016\",\"017\",\"026\",\"011\",\"006\",\"025\",\"010\",\"007\",\"003\",\"024\",\"004\",\"021\",\"009\",\"013\",\"008\",\"001\",\"014\",\"015\",\"022\",\"018\"))",
    "sortTypes": "-1",
    "sortColumns": "NOTICE_DATE",
    "source": "QuoteWeb",
    "client": "WEB",
    "_": "1743863195352"
}

try:
    # 发送请求
    response = requests.get(
        "https://datacenter-web.eastmoney.com/api/data/v1/get",
        headers=headers,
        cookies=cookies,
        params=params
    )
    response.raise_for_status()  # 检查HTTP错误

    # 使用BeautifulSoup处理响应（虽然非必要，但按需求实现）
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取JSON数据
    json_str = soup.text.split('(', 1)[1].rsplit(')', 1)[0]  # 去除JSONP包装
    data = json.loads(json_str)

    # 获取最新股价
    close_price = data['result']['data'][5]['CLOSE_PRICE']
    print(f"{keyword}代码的股价当前为：{close_price}")

except requests.exceptions.RequestException as e:
    print(f"请求失败: {str(e)}")
except (KeyError, IndexError, json.JSONDecodeError) as e:
    print(f"数据解析失败: {str(e)}")
