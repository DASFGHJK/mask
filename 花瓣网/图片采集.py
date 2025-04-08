import random
import pymysql
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
import requests

chrome_driver = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'
options = webdriver.ChromeOptions()
# options.add_argument('--headless')  # 不打开浏览器
options.add_argument('disable-infobars')  # 关闭警告信息
options.add_argument('--disable-blink-features')  # 屏蔽webdriver的特征
options.add_experimental_option('excludeSwitches', ['enable-automation'])
# 屏蔽webdriver的特征
options.add_argument('disable-blink-features=AutomationControlled')
# 屏蔽webdriver的特征

s = Service(executable_path=chrome_driver)

driver = webdriver.Chrome(options=options, service=s)

# 获取用户输入的关键词
keyword = input("请输入您所要抓取的关键词图片:(例春天)")

# 初始化数据库连接
try:
    conn = pymysql.connect(
        host='localhost',
        user='root',
        password='1234567890',
        database='image_table',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
    cursor = conn.cursor()

    # 创建数据表（如果不存在）
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS images (
            id INT AUTO_INCREMENT PRIMARY KEY,
            keyword VARCHAR(255) NOT NULL,
            image_url VARCHAR(512) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """)
    conn.commit()
except Exception as e:
    print(f"数据库连接失败: {e}")
    exit()

# 初始化webdriver
# driver = webdriver.Chrome(service=Service(webdriver_path))

# 构建搜索URL
url = f'https://huaban.com/search?q={keyword}'
driver.get(url)

# 等待页面加载完成
wait = WebDriverWait(driver, 20)
wait.until(EC.presence_of_element_located(
    (By.XPATH, '//*[@id="rc-tabs-0-panel-pin"]/div/div[2]/div/div/div[1]/div/div/div/div/a/img')))

# 创建文件夹来存储图片
# output_folder = f'images_{keyword}'
# if not os.path.exists(output_folder):
#     os.makedirs(output_folder)

# 滚动页面加载更多内容
actions = ActionChains(driver)
actions.scroll_by_amount(0, 2000).perform()
time.sleep(random.randint(1, 2))

# 抓取图片的URL
img_elements = driver.find_elements(By.XPATH,
                                    '//*[@id="rc-tabs-0-panel-pin"]/div/div[2]/div/div/div[1]/div/div/div/div/a/img')
img_urls = [img.get_attribute('src') for img in img_elements]

# 下载并保存图片，同时存储到数据库
for i, img_url in enumerate(img_urls):
    try:
        # 下载图片
        # response = requests.get(img_url, stream=True)
        # response.raise_for_status()

        # 保存到本地
        # file_path = os.path.join(output_folder, f'image_{i + 1}.jpg')
        # with open(file_path, 'wb') as file:
        #     for chunk in response.iter_content(chunk_size=8192):
        #         file.write(chunk)

        # 存储到数据库
        cursor.execute(
            "INSERT INTO images (keyword, image_url) VALUES (%s, %s)",
            (keyword, img_url)
        )
        conn.commit()

        print(f"图片 {i + 1} 已保存并存储到数据库。")

    except Exception as e:
        print(f"操作失败: {e}")
        conn.rollback()
        continue

# 关闭连接
cursor.close()
conn.close()
driver.quit()
