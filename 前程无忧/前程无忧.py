import random

from DataRecorder import Recorder
from DrissionPage import WebPage

def initialize_page_and_recorder(keyword):
    page = WebPage('d')
    page.get(f'https://we.51job.com/pc/search?jobArea=000000&keyword={keyword}&searchType=1')
    page.listen.start("https://we.51job.com/api/job/search-pc?api_key=51job")
    recorder = Recorder(f"前程{keyword}招聘信息.xlsx", cache_size=100)
    recorder.set.encoding('utf8')
    recorder.set.head(("职业名称", "工作要求", "工作地点", "工作声明", "公司名称", "学历要求", "企业规模", "企业性质", "企业领域", "工资"))
    return page, recorder

def get_max_page_number(page):
    return int(page.ele('x://ul[@class="el-pager"]/li[8]').text)

def process_page_data(page, recorder):

    page.wait(3)
    res = page.listen.wait(timeout=10)

    datas = res.response.body['resultbody']['job']['items']
    for data in datas:
        jobName = data['jobName']  # 职业名称
        jobTags = data['jobTags']  # 工作要求
        jobAreaString = data['jobAreaString']  # 工作地点
        jobDescribe = data['jobDescribe']  # 工作声明
        fullCompanyName = data['fullCompanyName']  # 公司名称
        degreeString = data['degreeString']  # 学历要求
        companySizeString = data['companySizeString']  # 企业规模
        companyTypeString = data['companyTypeString']  # 企业性质
        industryType2Str = data['industryType2Str']  # 企业领域
        provideSalaryString = data['provideSalaryString']  # 工资
        recorder.add_data((jobName, jobTags, jobAreaString, jobDescribe, fullCompanyName,
                           degreeString, companySizeString, companyTypeString, industryType2Str, provideSalaryString))
        recorder.record()  # 完成写入

def click_next_page(page):
    page.ele('x://div/div/button[@class="btn-next"]').click()
    page.wait(3)

def main():
    keyword = '电商客服'
    page, recorder = initialize_page_and_recorder(keyword)
    max_page_number = get_max_page_number(page)
    print(f"最大页数量{max_page_number}")
    page.refresh()
    for i in range(1, max_page_number):  # 防止超出最大页数
        process_page_data(page, recorder)
        print(f'------------第{i}页完成<-----------')
        click_next_page(page)

if __name__ == "__main__":
    main()
