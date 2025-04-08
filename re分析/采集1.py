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
    "id": "2123"
}
response = requests.get(url, headers=headers, params=params)
data_text = response.text.replace('\\', '')
print(data_text)

pattern = r'"订单号":"(.*?)","订单状态":"(.*?)","买家名称":"(.*?)","下单时间":"(.*?)","付款时间":"(.*?)","产品数量":(.*?),"产品总金额":"(.*?)","物流费用":"(.*?)","预计增值税":"(.*?)","平台是否代征代缴":"(.*?)","订单金额":"(.*?)","店铺优惠":"(.*?)","商品信息":"(.*?)","商品编码":"(.*?)","收货地址":"(.*?)","收件人名称":"(.*?)","收货国家":"(.*?)","州/省":"(.*?)","城市":"(.*?)","地址":"(.*?)","邮编":"(.*?)","买家选择物流":"(.*?)","发货期限":"(.*?)","实际发货单号":"(.*?)","发货时间":"(.*?)","确认收货时间":"(.*?)"}'

# 定义正则表达式模式
# pattern = r'"订单号":"([^,]*)","订单状态":"([^,]*)","买家名称":"([^"]*)","下单时间":"([^"]*)","付款时间":"([^,]*)","产品数量":"([^"]*)","产品总金额":"([^"]*)","物流费用":"([^"]*)","预计增值税":([^,]*),"平台是否代征代缴":"([^"]*)","订单金额":([^,]*),"店铺优惠":"([^"]*)","商品信息":"([^"]*)","商品编码":"([^"]*)","收货地址":([^,]*),"收件人名称":([^,]*),"收货国家":([^,]*),"州/省":"([^"]*)","城市":([^,]*),"地址":([^,]*),"邮编":"([^"]*)","买家选择物流":"([^"]*)","发货期限":"([^"]*)","实际发货单号":"([^"]*)","发货时间":"([^"]*)","确认收货时间":"([^"]*)'
# 匹配所有订单信息
matches = re.findall(pattern, data_text)

# 定义列名
columns = [
    "订单号", "订单状态", "买家名称", "下单时间", "付款时间", "产品数量",
    "产品总金额", "物流费用", "预计增值税", "平台是否代征代缴", "订单金额",
    "店铺优惠", "商品信息", "商品编码", "收货地址", "收件人名称",
    "收货国家", "州/省", "城市", "地址", "邮编", "买家选择物流",
    "发货期限", "实际发货单号", "发货时间", "确认收货时间"
]

# 将匹配结果转换为 DataFrame
df = pd.DataFrame(matches, columns=columns)


# 保存到 Excel 文件
df.to_excel("练习数据11.xlsx", index=False)

print("数据已保存到 练习数据11.xlsx 文件中。")