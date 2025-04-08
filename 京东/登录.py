import base64
import time
from urllib import request

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import cv2
import numpy as np


def crop_images():
    big = chrome.find_element(By.XPATH, value='//div[@class="JDJRV-bigimg"]/img').get_attribute('src')
    big_base64 = big.split(',')[1] # 背景图片base64编码
    big_bytes = base64.b64decode(big_base64) # 转为bytes编码
    with open('data2/big.jpg', 'wb') as f:
        f.write(big_bytes)

    small = chrome.find_element(By.XPATH, value='//div[@class="JDJRV-smallimg"]/img').get_attribute('src')
    small_base64 = small.split(',')[1]  # 滑块图片base64编码
    small_bytes = base64.b64decode(small_base64)  # 转为bytes编码
    with open('data2/small.jpg', 'wb') as f:
        f.write(small_bytes)


def show(name):
    cv2.imshow("", name)
    cv2.waitKey(0)
    cv2.destroyAllWindows()



# 计算滑动距离(以像素为单位)
def regnonize():
    slicer = cv2.imread('data2/small.jpg', 0) # 0 表示灰色图片，图片大小50*50
    template = cv2.imread('data2/big.jpg', 0) # 0 表示灰色图片，图片大小360*140
    slicer = cv2.resize(slicer, (48,48))
    template = cv2.resize(template, (342,133))
    cv2.imwrite('data2/slicer.jpg', slicer)  # 保存灰度化的图片
    cv2.imwrite('data2/template.jpg', template)

    slicer2 = cv2.imread('data2/slicer.jpg')
    template2 = cv2.imread('data2/template.jpg')

    slicer2 = cv2.cvtColor(slicer2, cv2.COLOR_BGR2RGB) # 转为RGB编码格式
    template2 = cv2.cvtColor(template2, cv2.COLOR_BGR2RGB) # 转为RGB编码格式
    slicer2 = abs(255-slicer2)
    template2 =abs(255-template2)
    cv2.imwrite('data2/slicer2.jpg', slicer2)
    cv2.imwrite('data2/template2.jpg', template2)

    result = cv2.matchTemplate(slicer2, template2, cv2.TM_CCORR_NORMED)
    # 将2张图片进行匹配
    # TM_CCORR_NORMED是相关性，把模板与滑块像素值相乘，数值越大，匹配效果越好

    x, y =  np.unravel_index(result.argmax(), result.shape)
    # 在slicer2图像中查找与template2最匹配的位置，并返回该位置的坐标(x, y)
    print('x=%d, y=%d' %(x,y))
    # x=56, y=17

    # template3 = cv2.rectangle(template2, (y,x), (y+48, x+48), (0,0,255), 2)
    # 第一个参数：背景图片
    # 第二个参数：匹配矩阵框左下角点的坐标
    # 第三个参数：匹配矩阵框右上角点的坐标
    # 第四个参数：(0,0,255)是矩形框的颜色，红色
    # 第五个参数：2 矩形框的边的宽度

    # show(template3)
    print(template2)
    # return y, template2 # y就是滑动距离
    return y
def getPic():


    bigimg = chrome.find_element(By.XPATH,'//div/div[@class="JDJRV-bigimg"]/img').get_attribute("src")#大图
    smallimg = chrome.find_element(By.XPATH,'//div/div[@class="JDJRV-smallimg"]/img').get_attribute("src")#小图
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

    element = chrome.find_element(By.XPATH, '//div/div[@class="JDJRV-smallimg"]/img')
    actions = ActionChains(chrome)

    # 计算总滑动距离（根据原代码的 y-11 调整）
    total_offset = y+10  # 保持原偏移量计算

    # 贝塞尔曲线参数设置（三次贝塞尔曲线）
    control_point1 = total_offset * 0.3  # 第一个控制点
    control_point2 = total_offset * 0.7  # 第二个控制点
    steps = 50  # 轨迹点数

    # 生成贝塞尔轨迹
    points = []
    for t in np.linspace(0, 1, steps):
        # 三次贝塞尔曲线公式
        x = (1 - t) ** 3 * 0 + 3 * (1 - t) ** 2 * t * control_point1 + 3 * (
                    1 - t) * t ** 2 * control_point2 + t ** 3 * total_offset
        points.append(x)

    # 转换为移动增量
    deltas = [points[i + 1] - points[i] for i in range(len(points) - 1)]

    # 执行带随机因素的滑动
    actions.click_and_hold(on_element=element)
    for dx in deltas:
        # 添加随机抖动和间隔
        rand_offset = np.random.uniform(-0.5, 0.5)
        actions.move_by_offset(dx + rand_offset, 0) \
            .pause(np.random.uniform(0.03, 0.1))  # 随机暂停时间

    # 最终精确修正（确保总偏移量准确）
    final_correction = total_offset - sum(deltas)
    if abs(final_correction) > 0.1:
        actions.move_by_offset(final_correction, 0)

    actions.release().perform()
    time.sleep(3)


def login():
    name = '1234'
    pwd = '1234'

    login_url = 'https://passport.jd.com/new/login.aspx'
    chrome.get(login_url)
    chrome.maximize_window()  #不进行最大化页面
    # time.sleep(2)
    # 将鼠标定位到“用户名文本框”
    username = WebDriverWait(chrome, 5).until(EC.presence_of_element_located((By.ID,'loginname')))
    username.send_keys(name)

    # 将鼠标定位到“密码文本框”
    password = WebDriverWait(chrome, 5).until(EC.presence_of_element_located((By.ID, 'nloginpwd')))
    password.send_keys(pwd)

    # 将鼠标定位到“登录按钮”
    login_btn = WebDriverWait(chrome, 5).until(EC.presence_of_element_located((By.ID, 'loginsubmit')))
    login_btn.click()

    # 出现滑块图片
    # 下载图片
    time.sleep(3) # 等图片加载出来
    # crop_images()

    while True:
        try:
            getPic()  # 执行滑动程序
        except:
            print("登陆成功----")
            break
    # slider = chrome.find_element(By.XPATH, '//*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[2]/div[3]')  # 示例选择器
    #
    #
    # # 计算滑动距离
    # action_data= regnonize()
    # # 创建动作链
    # actions = ActionChains(chrome)
    # print(f"需要滑动的距离为{action_data}")
    # actions = ActionChains(chrome)
    # actions.click_and_hold(slider)
    #
    # # 贝塞尔曲线参数设置
    # total_offset = (action_data + 17)  # 总需要移动的距离
    # control_point1 = total_offset * 0.3  # 第一个控制点（曲线起始方向）
    # control_point2 = total_offset * 0.7  # 第二个控制点（曲线结束方向）
    # steps = 60  # 轨迹点数（越多越平滑）
    #
    # # 生成贝塞尔曲线轨迹
    # points = []
    # for t in np.linspace(0, 1, steps):
    #     # 三次贝塞尔曲线公式
    #     x = (1 - t) ** 3 * 0 + 3 * (1 - t) ** 2 * t * control_point1 + 3 * (
    #                 1 - t) * t ** 2 * control_point2 + t ** 3 * total_offset
    #     points.append(x)
    #
    # # 转换为相对移动距离
    # deltas = [points[i + 1] - points[i] for i in range(len(points) - 1)]
    #
    # # 执行带随机因素的滑动
    # for dx in deltas:
    #     # 添加随机抖动
    #     rand_offset = np.random.uniform(-0.5, 0.5)
    #     actions.move_by_offset(dx + rand_offset, 0) \
    #         .pause(np.random.uniform(0.05, 0.15))  # 随机暂停时间
    #
    # # 最终精确修正（确保总偏移量准确）
    # final_correction = total_offset - sum(deltas)
    # if abs(final_correction) > 0.1:
    #     actions.move_by_offset(final_correction, 0)
    #
    # actions.release().perform()


    time.sleep(10)


if __name__ == '__main__':
    chrome_driver = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')  # 不打开浏览器
    options.add_argument('disable-infobars') # 关闭警告信息
    options.add_argument('--disable-blink-features') # 屏蔽webdriver的特征
    options.add_experimental_option('excludeSwitches', ['enable-automation'])
    # 屏蔽webdriver的特征
    options.add_argument('disable-blink-features=AutomationControlled')
    # 屏蔽webdriver的特征

    s = Service(executable_path= chrome_driver)
    chrome = webdriver.Chrome(options= options, service= s)

    login()
