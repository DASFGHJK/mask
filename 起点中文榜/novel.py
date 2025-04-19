import random

import pandas as pd
import requests
from lxml import etree
import re
from fontTools.ttLib import TTFont


def User_Agent():
    """
    定义5个代理IP隐藏身份，用5个IP随机选取，以防止被检测到链接对象而终止访问
    """
    user_agent1 = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0'
    user_agent2 = 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19'
    user_agent3 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'

    user_agent5 = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
    lst = [user_agent1, user_agent2, user_agent3, user_agent5]
    return random.choice(lst)  # 返回随机IP

# 存储字典
item = {
    "小说名": [],
    "作者": [],
    "类别": [],
    "细分类别": [],
    "连载状态": [],
    "月票": [],
    "月票榜年月": [],
}
# 将关系映射表的英文改为数字
dict_num = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8",
    "nine": "9"
}
baseurl = "https://www.qidian.com/rank/yuepiao/"  # 起点月票榜基础网址
headers = {
    'User-Agent': User_Agent(),
    'Cookie': 'e1=%7B%22l6%22%3A%22%22%2C%22l1%22%3A5%2C%22pid%22%3A%22qd_P_rank_19%22%2C%22eid%22%3A%22%22%7D; e2=%7B%22l6%22%3A%22%22%2C%22l1%22%3A5%2C%22pid%22%3A%22qd_P_rank_19%22%2C%22eid%22%3A%22qd_C44%22%7D; e1=%7B%22l6%22%3A%22%22%2C%22l1%22%3A5%2C%22pid%22%3A%22qd_P_rank%22%2C%22eid%22%3A%22qd_C45%22%7D; e2=%7B%22l6%22%3A%22%22%2C%22l1%22%3A5%2C%22pid%22%3A%22qd_P_rank%22%2C%22eid%22%3A%22%22%7D; _csrfToken=NWc6tHqJuDZJ326h29dpaGYdbklXJSsRp69YRtIY; newstatisticUUID=1710757764_1621785599; _yep_uuid=eb6a1d0d-2bc2-c5ae-c685-e1ef567c6f50; Hm_lvt_f00f67093ce2f38f215010b699629083=1710757768; fu=1453265103; e1=%7B%22l6%22%3A%22%22%2C%22l1%22%3A3%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A16%22%7D; supportwebp=true; e2=%7B%22l6%22%3A%22%22%2C%22l1%22%3A3%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A16%22%7D; traffic_utm_referer=; _gid=GA1.2.606839773.1710925060; Hm_lpvt_f00f67093ce2f38f215010b699629083=1710925198; _ga=GA1.2.2041713154.1710757768; _ga_FZMMH98S83=GS1.1.1710924862.6.1.1710925246.0.0.0; _ga_PFYW0QLV3P=GS1.1.1710924862.6.1.1710925246.0.0.0; w_tsfp=ltv2UU8E3ewC6mwF46vulUunFD0gcTAtkQBsXqNmeJ94Q7ErU5mE0Y94u8zzOHzb6sxnt9jMsoszd3qAUdcldBMRQsiZeo0ZkB/Gy99yicxUQ0k5VYnWSwQZIbohvjVEf2tdIRfu32p+IIBJnuA22FhZ4HJwy/hzXvFqL5kXjB0ZufzCkpxuDW3HlFWQRzaZciVfKr/c9OtwraxQ9z/c5Vv7LFt0A6hewgfHg31dWzox6wPjMK0ddgmuUtutLvgy23S0hSe2M8T1iEg9sg9qpRxLQISqgiDIWT8BdUsyNAengMhtLv/pNOYnvSxEA/ILEVkWtE9I4rc77EY5HzSvJTfWF/Bo7UREBrFM/Ly5e13Q1OyrZ09HqYR6zApppcFasi1wESumc4VPSheCICZPINxffp7NfX9jE0FTXzNRu0pIeCBYCPY2a/GM9wXlcxYNifJ2OfXnO7JeOCvMWP69BuVkXmPpqcBm5UcLDfL4E4FVKJEBViaMwNY='
}

for y in range(23, 24):  # 想要爬的月票榜年份
    for m in range(1, 13):  # 12个月
        m = str(m).zfill(2)  # 要求格式为monthXX，month1无法访问页面
        for p in range(1, 6):
            url = baseurl + "year20{}-month{}-page{}/".format(y, m, p)
            response = requests.get(url=url, headers=headers).text  # 向页面发出请求并得到回应
            html = etree.HTML(response)  # 解析页面

            nm_list = html.xpath('//div[@class="rank-toolbar-wrap"]')  # 年月数据归属的div
            for nm in nm_list:
                year = nm.xpath('./div/div/div[2]/a/span/text()')
                month = nm.xpath('./div/div/div[3]/a/span/text()')
                # print(dict[0])
                # print(month[0])
            qd_list = html.xpath('//div[@class="book-img-text"]')  # 小说相关数据归属div
            # print(qd_list)
            num_list = re.findall('</style><span class=".*?">(.*?);</span>', response)  # 正则找出每部小说月票数据，但字体加密
            num_url = re.findall(r"format\('eot'\); src: url\('(.*?)'\) format\('woff'\)", response)[0]  # 找出当前页面小说的woff加密文件
            font_res = requests.get(num_url, headers=headers)  # 访问woff文件网址并下载
            with open("num.woff", 'wb') as f:
                f.write(font_res.content)  # 保存为num.woff文件
            num_word = TTFont("num.woff")  # TTFont解析加密文件
            num_word.saveXML('num_word.xml')  # 保存为xml
            cam_dict = num_word.getBestCmap()  # 通过getBestCmap函数找出加密字体与对应数字的关系的映射表
            # print(cam_dict)
            for j in cam_dict:
                for k in dict_num:
                    if cam_dict[j] == k:
                        cam_dict[j] = dict_num[k]  # 将映射表对应的英文数字改为数字
            # print(cam_dict)
            for num in enumerate(num_list):
                # print(num)
                new_num_list = re.findall(r"\d+", num[1])  # 选择元组中的值，通过正则选择数字，筛掉无用字符
                num_list[num[0]] = new_num_list  # 原表替换为无字符表
            for i in num_list:
                # print(i)
                for j in enumerate(i):
                    # print(j[1])
                    for k in cam_dict:
                        if j[1] == str(k):  # 原表的加密字体等于映射表中的加密字体，则原表的加密字体改为对应的数字
                            i[j[0]] = cam_dict[k]
            votes_number = []
            for i in num_list:
                j = ""
                for k in i:  # 将每组数字组合在一起
                    j += k
                votes_number.append(j)
            for nums in votes_number:  # 添加到储存字典中
                item["月票"].append(nums)

            for qd in qd_list:  # 每页数据
                for i in range(0, 20):  # 每页数据的20部小说
                    item["月票榜年月"].append(f"{y}年{m}月")  # 每部小说归属的月票榜年月
                    novel_names = qd.xpath('./ul/li/div[2]/h2/a/text()')[i]  # 小说名
                    print(f"{novel_names}相关信息打印中...")
                    item["小说名"].append(novel_names)
                    novel_authors = qd.xpath('./ul/li/div[2]/p[1]/a[1]/text()')[i]  # 作者
                    item["作者"].append(novel_authors)
                    novel_class = qd.xpath('./ul/li/div[2]/p[1]/a[2]/text()')[i]  # 类别
                    item["类别"].append(novel_class)
                    novel_classes = qd.xpath('./ul/li/div[2]/p[1]/a[3]/text()')[i]  # 细分类别
                    item["细分类别"].append(novel_classes)
                    novel_status = qd.xpath('./ul/li/div[2]/p[1]/span/text()')[i]  # 连载状态
                    item["连载状态"].append(novel_status)

da = pd.DataFrame(item)  # 转换为dataframe格式
da.to_csv("qd_novel.csv", mode='w', encoding="utf-8-sig")  # 保存在csv文件中，utf-8-sig避免中文乱码

