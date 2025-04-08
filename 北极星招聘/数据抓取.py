import random

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time

# 指定webdriver的路径
webdriver_path = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'  # 请将此路径替换为你的chromedriver的实际路径
driver = webdriver.Chrome(service=Service(webdriver_path))

# 初始化数据存储列表
data = []

# 循环抓取3页数据
for page in range(1, 4):  # 从第1页到第3页
    url = f'https://hr.bjx.com.cn/search/result/?kw=python&kp=&sg=&rank=1&experience=&ln=49b7bf24-008d-44d7-8366-cea691d58ab3&index={page}'
    driver.get(url)

    # 等待页面加载完成
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[1]/a/b'))
    )

    # 抓取数据
    workername = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[1]/a/b')
    xinzi = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/strong')  # 进行薪资的抓取
    city = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[1]')
    zili = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[2]')
    xueli = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[3]')
    daiyu = driver.find_elements(By.XPATH, '//*[@id="render_slot2"]/div/div/div[3]/div[2]')
    print(workername)
    # 将抓取的数据存储到列表中
    for i in range(len(workername)):
        data.append({
            '姓名': workername[i].text,
            '薪资': xinzi[i].text if i < len(xinzi) else '',
            '城市': city[i].text if i < len(city) else '',
            '资历': zili[i].text if i < len(zili) else '',
            '学历': xueli[i].text if i < len(xueli) else '',
            '其他信息': daiyu[i].text if i < len(daiyu) else ''
        })

    # 等待下一页按钮加载
    try:
        next_page = driver.find_element(By.XPATH, '//*[@id="render_slot2"]/div[2]/div[3]/a[7]')
        if next_page.text != '下一页':
            next_page = driver.find_element(By.XPATH, '//*[@id="render_slot2"]/div[2]/div[3]/a[8]')
        next_page.click()
        time.sleep(random.uniform(1, 3))  # 随机等待1到3秒
    except Exception as e:
        print(f"无法找到下一页按钮或已到达最后一页: {e}")
        break

# 将数据存储为Excel文件
df = pd.DataFrame(data)
df.to_excel('北极星招聘数据.xlsx', index=False)

# 关闭浏览器
driver.quit()
