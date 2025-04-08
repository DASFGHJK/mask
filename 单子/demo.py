import requests
import csv


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://listxbrl.sse.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://listxbrl.sse.com.cn/companyInfo/toCompanyInfo.do?stock_id=600433.SS&report_year=2024&report_period_id=5000",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
url = "https://listxbrl.sse.com.cn/profit/showmap.do"
data = {
    "report_year": "2024",
    "stock_id": "600433",
    "report_period_id": "5000"
}
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)