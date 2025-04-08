from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time
import random

# 指定webdriver的路径
webdriver_path = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'  # 请将此路径替换为你的chromedriver的实际路径


def init_driver(path):
    """初始化webdriver"""
    return webdriver.Chrome(service=Service(path))


def click_live_button(driver):
    """点击直播按钮"""
    time.sleep(1)
    driver.find_element(By.XPATH, '//*[@id="js-header"]/div/div[1]/div[1]/div/ul/li[2]/a').click()


def scroll_page(driver, scroll_amount=2000):
    """滚动页面"""
    actions = ActionChains(driver)
    actions.scroll_by_amount(0, scroll_amount).perform()
    time.sleep(random.randint(1, 2))


def fetch_data(driver):
    """抓取数据"""
    name_list = driver.find_elements(By.XPATH,
                                     '//*[@id="listAll"]/section[2]/div[2]/ul/li/div/div[1]/div/a/div/div[2]/div/div[1]/div')
    fire_list = driver.find_elements(By.XPATH,
                                     '//*[@id="listAll"]/section[2]/div[2]/ul/li/div/div[1]/div/a/div/div[2]/div/div[2]/span')
    title_list = driver.find_elements(By.XPATH,
                                      '//*[@id="listAll"]/section[2]/div[2]/ul/li/div/div[2]/div[1]/a')  # 标题
    tag_list = driver.find_elements(By.XPATH,
                                    '//*[@id="listAll"]/section[2]/div[2]/ul/li/div/div[2]/div[2]/span/a')

    data = []
    for name, fire, title, tag in zip(name_list, fire_list, title_list, tag_list):
        print(name.text, fire.text, title.text, tag.text)
        data.append({
            '名称': name.text,
            '热度': fire.text,
            '标题': title.text,
            '标签': tag.text
        })
    return data


def save_to_excel(data, filename='douyu_data.xlsx'):
    """将数据保存到Excel"""
    df = pd.DataFrame(data)
    df.drop_duplicates(inplace=True)  # 使用pandas进行去重
    df.to_excel(filename, index=False)
    print(f"数据已成功保存到 {filename}。")


def main():
    """主函数"""
    driver = init_driver(webdriver_path)
    try:
        driver.get('https://www.douyu.com/')
        click_live_button(driver)
        wait = WebDriverWait(driver, 20)
        wait.until(EC.presence_of_element_located((By.XPATH, '/html/body/section/main/section[2]/div[2]/ul/li')))

        all_data = []  # 使用列表来存储数据
        num_scrolls = 10  # 设置滚动次数

        for _ in range(num_scrolls):
            scroll_page(driver)
            data = fetch_data(driver)
            all_data.extend(data)  # 将抓取到的数据添加到列表中

        save_to_excel(all_data)
    finally:
        driver.quit()


if __name__ == "__main__":
    main()
