
import time
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

options = webdriver.ChromeOptions()
# options.add_argument('--headless')
# options.add_argument('--no-sandbox')
# options.add_argument('--disable-dev-shm-usage')
service = Service('/Users/liujuncheng/PycharmProjects/start_api/改代码/chromedriver')

options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
                     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

driver = webdriver.Chrome(options=options,service=service)

# 1. 打开目标评论页面
url = "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Accent-Chair-with-Armrest-Morden-Tufted-Chair-Sofa/35062133/customer-reviews.html"
driver.get(url)
time.sleep(3)  # 等待页面初次加载

# 如果评论需要滚动或点击“下一页”，请在这里加滚动/翻页逻辑
title= driver.find_elements(By.XPATH,'//*[@id="__next"]/div/main/div[5]/div/div[2]/p/span')   #评论
username=driver.find_elements(By.XPATH,'//*[@id="__next"]/div/main/div[5]/div/p[1]/span')   #用户名
time_list=driver.find_elements()

# 2. 获取所有评论容器：div[data-testid^="review-wrapper"]

# reviews = driver.find_elements(By.CSS_SELECTOR, 'div[data-testid^="review-wrapper"]')
# print(f"找到 {len(reviews)} 条评论容器。")
#
# # 3. 创建 CSV 文件
# filename = "reviews.csv"
# with open(filename, "w", newline="", encoding="utf-8") as f:
#     writer = csv.writer(f)
#     writer.writerow(["star", "title", "option", "text", "customer"])
#
#     for idx, review in enumerate(reviews, start=1):
#         # (A) 星级：div[style="margin-right: 8px;"] 或包含匹配 div[style*="margin-right: 8px"]
#         try:
#             star_elem = review.find_element(By.CSS_SELECTOR, 'div[style*="margin-right: 8px"]')
#             star = star_elem.text.strip()
#         except NoSuchElementException:
#             star = "NA"
#
#         # (B) 标题：p.css-znkqyl.e2vtgog82
#         try:
#             title_elem = review.find_element(By.CSS_SELECTOR, 'p.css-znkqyl.e2vtgog82')
#             title = title_elem.text.strip()
#         except NoSuchElementException:
#             title = "NA"
#
#         # (C) 选项：p.css-353ty3.e2vtgog80
#         try:
#             option_elem = review.find_element(By.CSS_SELECTOR, 'p.css-353ty3.e2vtgog80')
#             option = option_elem.text.strip()
#         except NoSuchElementException:
#             option = "NA"
#
#         # (D) 评论正文：p.css-10knfft.e2vtgog76
#         try:
#             text_elem = review.find_element(By.CSS_SELECTOR, 'p.css-10knfft.e2vtgog76')
#             text = text_elem.text.strip()
#         except NoSuchElementException:
#             text = "NA"
#
#         # (E) 客户信息：p.css-mng7eb.e2vtgog65
#         try:
#             customer_elem = review.find_element(By.CSS_SELECTOR, 'p.css-mng7eb.e2vtgog65')
#             customer = customer_elem.text.strip()
#         except NoSuchElementException:
#             customer = "NA"
#
#         # 打印调试
#         print(f"\n--- 第 {idx} 条评论 ---")
#         print("star:", star)
#         print("title:", title)
#         print("option:", option)
#         print("text:", text)
#         print("customer:", customer)
#
#         # 写入 CSV
#         writer.writerow([star, title, option, text, customer])
#
# driver.quit()
# print(f"✅ 完成！结果已保存到 {filename}")
