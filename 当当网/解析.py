import time

from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome(service=Service('/Users/liujuncheng/PycharmProjects/start_api/当当网/chromedriver'))

driver.get('https://product.dangdang.com/29714185.html')

driver.find_element(By.XPATH,'//*[@id="authorIntroduction"]/div[2]/p/text()')