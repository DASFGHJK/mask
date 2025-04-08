import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

def login():
    login_url = 'https://www.douban.com/'
    chrome.get(login_url)
    chrome.maximize_window()
    # time.sleep(2)
    chrome.switch_to.frame(chrome.find_elements(By.TAG_NAME, 'iframe')[0])  #切换ifame内置界面
    print(chrome.page_source)
    chrome.implicitly_wait(5)
    chrome.find_element(By.XPATH, '/html/body/div[1]/div[1]/ul[1]/li[2]').click()
    time.sleep(1)
    chrome.find_element(By.ID, 'username').send_keys('15398305821')
    time.sleep(1)
    chrome.find_element(By.ID, 'password').send_keys('whc123456')
    time.sleep(1)
    chrome.find_element(By.LINK_TEXT, '登录豆瓣').click()
    print("登录成功")










if __name__ == '__main__':
    chrome_driver = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')  # 不打开浏览器
    options.add_argument('disable-infobars') # 关闭警告信息
    options.add_argument('--disable-blink-features') # 屏蔽webdriver的特征
    options.add_experimental_option('excludeSwitches', ['enable-automation'])   #进行判断
    # 屏蔽webdriver的特征
    options.add_argument('disable-blink-features=AutomationControlled')
    # 屏蔽webdriver的特征

    s = Service(executable_path= chrome_driver)
    chrome = webdriver.Chrome(options= options, service= s)

    login()
