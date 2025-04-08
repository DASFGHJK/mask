import re
import requests
import pandas as pd

# 请求数据
headers = {
    "Host": "gdss.swfxdataapi.dianyueyun.com",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
url = "http://gdss.swfxdataapi.dianyueyun.com/api/values/get"
params = {
    "id": "2112"
}
response = requests.get(url, headers=headers, params=params)
data_text = response.text.replace('\\', '')
print(data_text)

# pattern = r'"Transaction_ID":"(.*?)","Customer_ID":"(.*?)","Name":"(.*?)","Email":"(.*?)","Phone":"(.*?)","Address":(.*?),"City":"(.*?)","State":"(.*?)","Zipcode":"(.*?)","Country":"(.*?)","Age":"(.*?)","Gender":"(.*?)","Income":"(.*?)","Customer_Segment":"(.*?)","Year":"(.*?)","Month":"(.*?)","Day":"(.*?)","Time":"(.*?)","Total_Purchases":"(.*?)","Amount":"(.*?)","Product_Category":"(.*?)","Product_Brand":"(.*?)","Product_Type":"(.*?)","Feedback":"(.*?)","Shipping_Method":"?(.*?)","Payment_Method":"(.*?)","Order_Status":"(.*?)"}'
# 定义正则表达式模式
pattern = r'"Transaction_ID":([^,]*),"Customer_ID":([^,]*),"Name":"([^"]*)","Email":"([^"]*)","Phone":([^,]*),"Address":"([^"]*)","City":"([^"]*)","State":"([^"]*)","Zipcode":([^,]*),"Country":"([^"]*)","Age":([^,]*),"Gender":"([^"]*)","Income":"([^"]*)","Customer_Segment":"([^"]*)","Year":([^,]*),"Month":([^,]*),"Day":([^,]*),"Time":"([^"]*)","Total_Purchases":([^,]*),"Amount":([^,]*),"Product_Category":"([^"]*)","Product_Brand":"([^"]*)","Product_Type":"([^"]*)","Feedback":"([^"]*)","Shipping_Method":"([^"]*)","Payment_Method":"([^"]*)","Order_Status":"([^"]*)'
# 匹配所有订单信息
matches = re.findall(pattern, data_text)

# 定义列名
columns = [
    "Transaction_ID", "Customer_ID", "Name", "Email", "Phone", "Address",
    "City", "State", "Zipcode", "Country", "Age",
    "Gender", "Income", "Customer_Segment", "Year", "Month",
    "Day", "Time", "Total_Purchases", "Amount", "Product_Category", "Product_Brand",
    "Product_Type", "Feedback", "Shipping_Method", "Payment_Method", "Order_Status"
]

# 将匹配结果转换为 DataFrame
df = pd.DataFrame(matches, columns=columns)


# 保存到 Excel 文件
df.to_excel("index.xlsx", index=False)

print("数据已保存到 index.xlsx 文件中。")