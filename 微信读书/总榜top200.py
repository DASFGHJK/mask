# 导入所需的库
import random  # 用于生成随机数
import time  # 用于实现时间延迟
import requests  # 用于发送HTTP请求
import json  # 用于处理JSON数据
import pandas as pd  # 用于数据处理和保存Excel文件


headers = {
    'accept': 'application/json, text/plain, */*',  # 接受的内容类型
    'accept-language': 'zh-CN,zh;q=0.9',  # 接受的语言
    'cache-control': 'no-cache',  # 禁用缓存
    'pragma': 'no-cache',  # 禁用缓存
    'referer': 'https://weread.qq.com/web/category/all',  # 来源URL
    'sec-fetch-dest': 'empty',  # 安全获取目标
    'sec-fetch-mode': 'cors',  # 安全获取模式
    'sec-fetch-site': 'same-origin',  # 安全获取站点
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 用户代理信息
}

cookies = {
    'pgv_pvid': '5074300786',
    'RK': 'hJ8gkas//+',
    'ptcz': 'fa1f60270c10ecaf07f41a6f3100d3f376cf9da0fc51d410693ee2bf47dc110c',
    'ETCI': 'f61a058298e041228328fda73b2c49a8',
    'eas_sid': 'z1E7H494v2D0y3X5K8T22453u7',
    'wr_localvid': '',
    'wr_name': '',
    'wr_avatar': '',
    'wr_gender': '',
    'wr_fp': '3679604322',
    'wr_gid': '280108369',
}

# 初始化存储数据的列表和排名变量
books_data = []  # 用于存储书籍信息
index = 1  # 初始化排名为1

# 循环抓取数据，每次抓取20条，共抓取10次（即200条数据）
for i in range(0, 10):
    params = {
        'maxIndex': str(i * 20),  # 设置起始索引
        'rank': '1',  # 设置排名参数
    }

    # 发送GET请求，抓取书籍列表数据
    response = requests.get('https://weread.qq.com/web/bookListInCategory/all', params=params, cookies=cookies,
                            headers=headers)
    time.sleep(random.randint(1, 2))  # 随机暂停1-2秒，避免请求过于频繁

    # 检查请求是否成功
    if response.status_code == 200:
        res = response.json()  # 将响应内容解析为JSON
        books = res.get('books', [])  # 获取书籍列表

        # 遍历书籍列表，提取书名和作者信息
        for book in books:
            bookInfo = book.get('bookInfo', {})  # 获取书籍详情
            title = bookInfo.get('title', '')  # 获取书名
            author = bookInfo.get('author', '')  # 获取作者

            print(title)  # 打印书名（用于调试）
            books_data.append([index, title, author])  # 将数据添加到列表
            index += 1  # 排名加1

# 将数据转换为DataFrame，并保存为Excel文件
df = pd.DataFrame(books_data, columns=['排名', '书名', '作者'])  # 创建DataFrame
df.to_excel('微信读书排行榜.xlsx', index=False)  # 保存为Excel文件

print("数据已成功保存到微信读书排行榜.xlsx")  # 提示数据保存成功