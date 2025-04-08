

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from lxml import etree
chrome_driver = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 不打开浏览器
options.add_argument('disable-infobars')  # 关闭警告信息
options.add_argument('--disable-blink-features')  # 屏蔽webdriver的特征
options.add_experimental_option('excludeSwitches', ['enable-automation'])
# 屏蔽webdriver的特征
options.add_argument('disable-blink-features=AutomationControlled')
# 屏蔽webdriver的特征

s = Service(executable_path=chrome_driver)
driver = webdriver.Chrome(options=options, service=s)

driver.get('https://www.maoyan.com/films/995')
data=driver.page_source

tree=etree.HTML(data)

daoyan=tree.xpath('//*[@id="app"]/div/div[1]/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/ul/li/div[2]/div/text()')
jianjie=tree.xpath('//*[@id="app"]/div/div[1]/div/div[3]/div[1]/div[1]/div[2]/span/text()')
pinfen_=tree.xpath('/html/body/div[3]/div/div[2]/div[3]/div[1]/div/div/span/span/text()')
print(daoyan)
print(jianjie)
print(pinfen_)