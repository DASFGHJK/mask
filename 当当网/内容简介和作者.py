import time

import requests
from bs4 import BeautifulSoup
import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

driver = webdriver.Chrome(service=Service('/Users/liujuncheng/PycharmProjects/pythonProject3/chromedriver'))

url = 'http://bang.dangdang.com/books/bestsellers/01.41.00.00.00.00-year-2024-0-1-1'

# 请求头
headers = {
    "Cookie": "dest_area=country_id%3D9000%26province_id%3D111%26city_id%20%3D0%26district_id%3D0%26town_id%3D0; __permanent_id=20250222105148803728973704885189676; dangdang.com=email=MTUxMzY2MzUyNTU2NzAzOEBkZG1vYmlscGhvbmVfX3VzZXIuY29t&nickname=&display_id=3293140134621&customerid=VFcTN3e27BlBGf7HnEW5Ng==&viptype=ztScdHW7Y50=&show_name=151****5255; LOGIN_TIME=1740220515649; ddscreen=2; __visit_id=20250223170522838370306801990930670; __out_refer=1740301523%7C!%7Ccn.bing.com%7C!%7C; secret_key=8d0d179b2885fda8dad4c9604f9154d4; __rpm=...1740301904714%7C...1740302479981; __trace_id=20250223172246281281780678864617814",
    "Referer": "https://product.dangdang.com/29671906.html",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
}

# 爬取列表
urls = [
    ("http://bang.dangdang.com/books/bestsellers/01.03.00.00.00.00-year-2024-0-1-{}", "小说"),
("http://bang.dangdang.com/books/bestsellers/01.05.00.00.00.00-year-2024-0-1-{}", "文学"),
    ("http://bang.dangdang.com/books/bestsellers/01.45.00.00.00.00-year-2024-0-1-{}", "外语"),
    ("http://bang.dangdang.com/books/bestsellers/01.21.00.00.00.00-year-2024-0-1-{}", "成功/励志"),
    ("http://bang.dangdang.com/books/bestsellers/01.36.00.00.00.00-year-2024-0-1-{}", "历史"),
    ("http://bang.dangdang.com/books/bestsellers/01.41.00.00.00.00-year-2024-0-1-{}", "童书"),
    ("http://bang.dangdang.com/books/bestsellers/01.28.00.00.00.00-year-2024-0-1-{}", "哲学/宗教"),
    ("http://bang.dangdang.com/books/bestsellers/01.38.00.00.00.00-year-2024-0-1-{}", "传记"),
    ("http://bang.dangdang.com/books/bestsellers/01.26.00.00.00.00-year-2024-0-1-{}", "法律"),
    ("http://bang.dangdang.com/books/bestsellers/01.27.00.00.00.00-year-2024-0-1-{}", "政治/军事"),
    ("http://bang.dangdang.com/books/bestsellers/01.56.00.00.00.00-year-2024-0-1-{}", "医学"),
    ("http://bang.dangdang.com/books/bestsellers/01.15.00.00.00.00-year-2024-0-1-{}", "亲子/家教"),
    ("http://bang.dangdang.com/books/bestsellers/01.31.00.00.00.00-year-2024-0-1-{}", "心理学"),
    ("http://bang.dangdang.com/books/bestsellers/01.07.00.00.00.00-year-2024-0-1-{}", "艺术"),
    ("http://bang.dangdang.com/books/bestsellers/01.54.00.00.00.00-year-2024-0-1-{}", "计算机/网络"),
    ("http://bang.dangdang.com/books/bestsellers/01.55.00.00.00.00-year-2024-0-1-{}", "建筑"),
    ("http://bang.dangdang.com/books/bestsellers/01.62.00.00.00.00-year-2024-0-1-{}", "自然科学"),
    ("http://bang.dangdang.com/books/bestsellers/01.14.00.00.00.00-year-2024-0-1-{}", "家庭/家居"),
    ("http://bang.dangdang.com/books/bestsellers/01.66.00.00.00.00-year-2024-0-1-{}", "农业/林业"),
    ("http://bang.dangdang.com/books/bestsellers/01.32.00.00.00.00-year-2024-0-1-{}", "古籍"),
    ("http://bang.dangdang.com/books/bestsellers/01.09.00.00.00.00-year-2024-0-1-{}", "动漫/幽默"),
    ("http://bang.dangdang.com/books/bestsellers/01.01.00.00.00.00-year-2024-0-1-{}", "青春文学"),
    ("http://bang.dangdang.com/books/bestsellers/01.22.00.00.00.00-year-2024-0-1-{}", "管理"),
    ("http://bang.dangdang.com/books/bestsellers/01.52.00.00.00.00-year-2024-0-1-{}", "科普读物"),
    ("http://bang.dangdang.com/books/bestsellers/01.63.00.00.00.00-year-2024-0-1-{}", "工业技术"),
    ("http://bang.dangdang.com/books/bestsellers/01.04.00.00.00.00-year-2024-0-1-{}", "休闲/爱好"),
    ("http://bang.dangdang.com/books/bestsellers/01.24.00.00.00.00-year-2024-0-1-{}", "投资理财"),
    ("http://bang.dangdang.com/books/bestsellers/01.25.00.00.00.00-year-2024-0-1-{}", "经济"),
    ("http://bang.dangdang.com/books/bestsellers/01.12.00.00.00.00-year-2024-0-1-{}", "旅游/地图"),
    ("http://bang.dangdang.com/books/bestsellers/01.18.00.00.00.00-year-2024-0-1-{}", "保健/养生"),

]

for url, category in urls:
    top = random.randint(20, 26)
    for page in range(1, top):
        new_url = url.format(page)
        print(f"正在爬取: {new_url}")
        time.sleep(1)
        res = requests.get(new_url, headers=headers)
        soup = BeautifulSoup(res.text, "html.parser")
        lists = soup.select('.bang_list li')

        for list in lists:
            try:
                home_url = list.select_one('.pic a')['href']
                img_url = list.select_one('.pic img')['src']
                name = list.select_one('.name a').text
                comment = list.select_one('.star a').text
                recommend = list.select_one('.tuijian').text
                author = list.select('.publisher_info')[0].select('a')[0]['title']
                publication_time = list.select('.publisher_info')[1].select_one('span').text
                publishing_house = list.select('.publisher_info')[1].select_one('a').text
                price = list.select_one('.price_n').text
                ori_price = list.select_one('.price_r').text
                discount = list.select_one('.price_s').text

                # 访问书籍详情页
                child_res = requests.get(home_url, headers=headers)
                child_soup = BeautifulSoup(child_res.text, "html.parser")
                descr = child_soup.select_one('.head_title_name').text.strip()

                # 提取“开本”、“纸张”、“包装”、“是否套装”、“ISBN”和“所属分类”
                details = child_soup.select('.pro_content ul.key li')
                format_info = {}  # 存储开本、纸张、包装、是否套装、ISBN信息
                category_path = ""  # 存储所属分类

                for detail in details:
                    text = detail.text.strip()
                    if "开 本：" in text:
                        format_info["开本"] = text.replace("开 本：", "")
                    elif "纸 张：" in text:
                        format_info["纸张"] = text.replace("纸 张：", "")
                    elif "包 装：" in text:
                        format_info["包装"] = text.replace("包 装：", "")
                    elif "是否套装：" in text:
                        format_info["是否套装"] = text.replace("是否套装：", "")
                    elif "国际标准书号ISBN：" in text:
                        format_info["ISBN"] = text.replace("国际标准书号ISBN：", "")
                    elif "所属分类：" in text:
                        category_path = " > ".join([a.text for a in detail.select('a')])

                # 提取“内容简介”
                content_section = child_soup.select_one('#content')
                content_description = ""
                if content_section:
                    descrip = content_section.select_one('.descrip')
                    if descrip:
                        content_description = descrip.text.strip()

                # 提取“作者简介”
                author_intro_section = child_soup.select_one('#authorIntroduction')
                author_intro = ""
                if author_intro_section:
                    descrip = author_intro_section.select_one('.descrip')
                    if descrip:
                        author_intro = descrip.text.strip()

                # 将提取的信息添加到 line 中
                line = (category + '#' + home_url + '#' + img_url + '#' + name + '#'
                        + comment + '#' + recommend + '#' + author + '#' + publication_time + '#' + publishing_house
                        + '#' + price + '#' + ori_price + '#' + discount + '#' + descr + '#'
                        + format_info.get("开本", "无") + '#' + format_info.get("纸张", "无") + '#'
                        + format_info.get("包装", "无") + '#' + format_info.get("是否套装", "无") + '#'
                        + format_info.get("ISBN", "无") + '#' + category_path + '#' + content_description + '#' + author_intro)
                # print(line)
                # 写入文件
                open('book4.txt', 'a+', encoding='utf-8').write(line + '\n')

            except Exception as e:
                print(f"有一条数据被解析失败，丢失: {e}")
                pass