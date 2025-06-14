
import cv2
import time
import numpy as np
from selenium import webdriver
from urllib import request
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

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

brower = webdriver.Chrome(options=options, service=s)
url = "https://passport.jd.com/new/login.aspx?"
brower.get(url)

def login():
x
    time.sleep(3)
    userlogin = brower.find_element(By.XPATH,'//div/div[@class="login-tab login-tab-r"]/a').click()

    # time.sleep(5)
    username = brower.find_element(By.ID,"loginname").send_keys('13249300059')
    userpswd = brower.find_element(By.ID,"nloginpwd").send_keys('yao123456')

    # time.sleep(5)
    brower.find_element(By.ID,"loginsubmit").click()
    time.sleep(3)
    while True:
        try:
            getPic()#执行滑动程序
        except:
            print("登陆成功----")
            break
    time.sleep(5)


def getPic():
    # 用于找到登录图片的大图

    # 用来找到登录图片的小滑块

    bigimg = brower.find_element(By.XPATH,'//div/div[@class="JDJRV-bigimg"]/img').get_attribute("src")#大图
    smallimg = brower.find_element(By.XPATH,'//div/div[@class="JDJRV-smallimg"]/img').get_attribute("src")#小图
    # print(smallimg + '\n')
    # print(bigimg)
    # 背景大图命名
    backimg = "backimg.png"
    # 滑块命名
    slideimg = "slideimg.png"
    # 下载背景大图保存到本地
    request.urlretrieve(bigimg, backimg)
    # 下载滑块保存到本地
    request.urlretrieve(smallimg, slideimg)
    # 获取图片并灰度化
    block = cv2.imread(slideimg, 0)
    template = cv2.imread(backimg, 0)
    # 二值化后的图片名称
    blockName = "block.jpg"
    templateName = "template.jpg"
    # 将二值化后的图片进行保存
            # 二值化的图片名称，灰度化后的图片
    cv2.imwrite(blockName,  block)
    cv2.imwrite(templateName, template)
    block = cv2.imread(blockName)
    block = cv2.cvtColor(block, cv2.COLOR_RGB2GRAY)
    block = abs(255 - block)
    cv2.imwrite(blockName, block)

    block = cv2.imread(blockName)
    template = cv2.imread(templateName)
    # 获取偏移量
    result = cv2.matchTemplate(block, template, cv2.TM_CCOEFF_NORMED)  # 查找block在template中的位置，返回result是一个矩阵，是每个点的匹配结果
    x, y = np.unravel_index(result.argmax(), result.shape)
    print("x方向的偏移", int(y * 0.4 + 18), 'x:', x, 'y:', y)
    # 获取滑块
    element = brower.find_element(By.XPATH,'//div/div[@class="JDJRV-smallimg"]/img')
    ActionChains(brower).click_and_hold(on_element=element).perform()
    ActionChains(brower).move_to_element_with_offset(to_element=element, xoffset=y-25, yoffset=0).perform()
    ActionChains(brower).release(on_element=element).perform()
    time.sleep(3)


    if __name__ == '__main__':
        login()


