from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from lxml import etree
from selenium.webdriver.chrome.service import Service
import time
import pandas as pd
import re
from pypinyin import lazy_pinyin  #获取拼音的库
print(lazy_pinyin('聪明的小兔子'))
driver_path = '/Users/liujuncheng/PycharmProjects/start_api/拉钩网/chromedriver'
service = Service(executable_path=driver_path)

# 浏览器选项配置
options = webdriver.ChromeOptions()
# options.add_argument('--headless')  # 不打开浏览器
options.add_argument('disable-infobars')  # 关闭警告信息
options.add_argument('--disable-blink-features')  # 屏蔽webdriver的特征
options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_argument('disable-blink-features=AutomationControlled')

# 初始化浏览器
driver = webdriver.Chrome(service=service, options=options)

for i in range(1, 3):
    url = 'https://we.51job.com/pc/search?keyword=%E6%95%B0%E6%8D%AE&searchType=2&sortType=0&metro='.format(i)
    driver.get(url)
    print('正在爬取第{}页数据'.format(i))

    time.sleep(5)
    try:
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.XPATH, "//div[@class='joblist-item-top']/span[@class='jname text-cut']/text()"))
        )
    except:
        pass

    dom = etree.HTML(driver.page_source)


    job_name = dom.xpath("//div[@class='joblist-item-top']/span[@class='jname text-cut']/text()")   #工作名称
    company_name = dom.xpath("//div[@class='bl']/a[@class='cname text-cut']/text()")  #公司名称
    address = dom.xpath("//div[@class='br']/div[@class='area']//text()")  #住址
    salary_mid = dom.xpath("//span[@class='sal shrink-0']/text()")   #薪资
    salary = salary_mid
    # release_time = dom.xpath('//div[@class="e"]//span[@class="time"]/text()')
    href = dom.xpath("//div[@class='joblist-item-job sensors_exposure']/@sensorsdata")  #详细链接


    JobDes = []
    CompanyType = []
    NumberStaff = []
    Industry = []

    for sub_url in href:
        true_city=[]
        city=(re.findall('"jobArea":"(.*?)"',sub_url)[0]).split("·")

        if len(city)>1:
            city_1=lazy_pinyin(city[0])
            for c in city_1:
                true_city.append(c)
            city_2=lazy_pinyin(city[1])
            true_city.append('-')
            for c in city_2:
                true_city.append(c[0])
        elif len(city)==1 and len(str(city))>4:
            city_1 = lazy_pinyin(city[0])
            for c in city_1:
                true_city.append(c)
        else:
            true_city='all'

        job_id=""+re.findall('"jobId":"(.*?)",',sub_url)[0]  #获取
        true_city=str(true_city).replace('"','').replace("'","").replace("[",'').replace(']','').replace(',','').replace(' ','')
        s_url="https://jobs.51job.com/"+true_city+"/"+ job_id+'.html'
        print(s_url)
        driver.get(s_url)
        time.sleep(5)
        try:
            WebDriverWait(driver, 30).until(
                EC.presence_of_element_located(
                    (By.XPATH, "//div[@class='tBorderTop_box'][1]/div[@class='bmsg job_msg inbox']/text()"))
            )
        except:
            pass
        dom_sub = etree.HTML(driver.page_source)

        job_des =str(dom_sub.xpath("//div[@class='tBorderTop_box'][1]/div[@class='bmsg job_msg inbox']/text()"))
        company_type = dom_sub.xpath('//div[@class="tCompany_sidebar"]//div[@class="com_tag"]/p[1]/@title')
        number_staff = dom_sub.xpath('//div[@class="tCompany_sidebar"]//div[@class="com_tag"]/p[2]/@title')
        industry = dom_sub.xpath('//div[@class="tCompany_sidebar"]//div[@class="com_tag"]/p[3]/@title')

        JobDes.append(job_des)
        CompanyType.append(company_type)
        NumberStaff.append(number_staff)
        Industry.append(industry)

    data = pd.DataFrame()
    data['公司名'] = company_name
    data['岗位名'] = job_name
    data['工作地点'] = address
    data['工资'] = salary
    # data['发布时间'] = release_time
    data['工作描述'] = JobDes
    data['公司类型'] = CompanyType
    data['公司人数'] = NumberStaff
    data['行业'] = Industry

    try:
        data.to_csv('job_info.csv', mode='a+', header=None, encoding='GBK')
    except:
        print('当前网页数据保存失败，继续爬取下一页数据。')

print(data.shape)
