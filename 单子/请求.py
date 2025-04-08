# -*- coding:utf-8 -*-
import csv  # 导入csv库，将数保存至csv需要的库
import requests  # 导入请求库


def get_data():  # 定义获取网页链接响应的函数
    url = "https://listxbrl.sse.com.cn/profit/showmap.do"  # 请求Json数据的链接
    headers = {
        'Accept': '*/*',
        'Accept-encoding': 'gzip, deflate, br, zstd',
        'Accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Content-length': '54',
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'listxbrl.sse.com.cn',
        'Origin': 'https://listxbrl.sse.com.cn',
        'Referer': 'https://listxbrl.sse.com.cn/companyInfo/toCompanyInfo.do?stock_id=603196.SS&report_year=2024&report_period_id=5000',
        'Sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'Sec-ch-ua-mobile': '?0',
        'Sec-ch-ua-platform': '"Windows"',
        'Sec-fetch-dest': 'empty',
        'Sec-fetch-mode': 'cors',
        'Sec-fetch-site': 'same-origin',
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
        'X-requested-with': 'XMLHttpRequest',
    }  # headers为请求头信息，从网页复制后需要转换为python字典类型

    try:
        # 构造post请求，设置请求的url，headers和提交的字典参数data
        response = requests.post(url=url, headers=headers,
                                 data={
                                     'report_year': '2023',
                                     'stock_id': '603196',
                                     'report_period_id': '5000'})  # 填入参数字典，报表年份、股票代码、报表类型
        response.raise_for_status()  # 如果响应状态码不是200，引发HTTPError异常
        content = response.json()  # 将响应内容解析为json格式
        return content  # 将请求的响应返回
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return None


def save_csv(data, path):  # 定义解析及把保存数据的函数
    if not data:
        print("没有数据可供保存")
        return

    name = ["营业总收入(元)", "营业收入(元)", "金融资产利息收入(元)", "已赚保费(元)", "手续费及佣金收入(元)",
            "营业总成本(元)",
            "营业成本(元)", "金融资产利息支出(元)", "手续费及佣金支出(元)", "退保金(元)", "赔付支出净额(元)",
            "提取保险合同准备金净额(元)",
            "保单红利支出(元)", "分保费用(元)", "营业税金及附加(元)", "销售费用(元)", "管理费用(元)", "财务费用(元)",
            "资产减值损失(元)",
            "公允价值变动收益(元)", "投资收益(元)", "对联营企业和合营企业的投资收益(元)", "汇兑收益(元)",
            "营业利润(元)", "营业外收入(元)",
            "营业外支出(元)", "非流动资产处置净损失(元)", "利润总额(元)", "所得税(元)", "净利润(元)",
            "归属于母公司所有者的净利润(元)"]

    try:
        with open(path, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(name)  # 写入表头
            writer.writerow(data.values())  # 写入数据行
        print(f"数据已成功保存到 {path}")
    except Exception as e:
        print(f"保存数据到CSV文件时出错: {e}")


# 示例调用
if __name__ == "__main__":
    data = get_data()
    if data:
        save_csv(data, "financial_data.csv")
