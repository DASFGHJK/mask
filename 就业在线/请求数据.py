from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import pandas as pd
import time
from lxml import etree
from selenium.webdriver.chrome.service import Service
# 配置浏览器选项（启用无头模式可隐藏界面）
options = webdriver.ChromeOptions()
# options.add_argument('--headless')          # 无头模式
options.add_argument('disable-infobars')
options.add_argument('--disable-blink-features')
options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_argument('disable-blink-features=AutomationControlled')

driver_path = '/Users/liujuncheng/PycharmProjects/start_api/拉钩网/chromedriver'
service = Service(executable_path=driver_path)
driver = webdriver.Chrome(service=service, options=options)
# driver = webdriver.Edge(service=service, options=options)

try:
    # 初始化数据存储
    data = {
        "工作名称": [],
        "工资": [],
        "公司": []
    }
    driver.get('https://www.jobonline.cn/position?page=collegeGraduatesNew&activityId=JACI0002&blockCode=1')
    for i in range(1,3):
        print(f"正在抓取第{i}页----------->")
        # 显式等待页面加载
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".el-tooltip.left_title.item"))
        )

        # 提取当前页数据
        res = etree.HTML(driver.page_source)
        work_names = res.xpath("//span[@class='el-tooltip left_title item']/text()")
        salaries = res.xpath("//span[@class='salary']/text()")
        companies = res.xpath("//p[@class='middle_title single_line']/text()")

        # 同步数据到列表（确保长度一致）
        min_length = min(len(work_names), len(salaries), len(companies))
        for i in range(min_length):
            data["工作名称"].append(work_names[i].strip())
            data["工资"].append(salaries[i].strip())
            data["公司"].append(companies[i].strip())
            print(work_names[i])
        # 判断是否还有下一页
        time.sleep(5)
        next_button = driver.find_element(By.CSS_SELECTOR, ".btn-next")
        if "disabled" in next_button.get_attribute("class"):
            break  # 没有下一页时退出循环
        else:
            next_button.click()
            time.sleep(2)  # 等待页面跳转

finally:
    # 保存数据到Excel
    df = pd.DataFrame(data)
    df.to_excel("就业数据.xlsx", index=False, engine="openpyxl")
    driver.quit()
    print("保存成功")
