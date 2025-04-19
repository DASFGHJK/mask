from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from lxml import etree
import pandas as pd
import time
import re
cookies = {
    'user_trace_token': '20250417161503-32b932d5-736d-46ed-a40e-ae8b5a50e7d1',
    'LGUID': '20250417161503-e4180bf8-2813-49e6-ba25-15ca8d673566',
    '_ga': 'GA1.2.513643464.1744877703',
    'gate_login_token': 'v1####c8fd30ce48379ebd5f77dc07c46d1fbff74c3bda809c6c861a12cf1f39e35e6f',
    'LG_HAS_LOGIN': '1',
    'hasDeliver': '0',
    'privacyPolicyPopup': 'false',
    '__lg_stoken__': '63ad647a3de9966634f732679fea357b0f13804c0c000d0a60aa69ec56daff122588a54ebffe738b8b3afe75608c31ce0327bc184cd621b32835585a5da49f8115f22c686db4',
    'Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6': '1744877703,1744973645',
    '_gid': 'GA1.2.1289314302.1744973645',
    '_ga_DDLTLJDLHH': 'GS1.2.1744973646.2.0.1744973646.60.0.0',
    'showExpriedIndex': '1',
    'showExpriedCompanyHome': '1',
    'showExpriedMyPublish': '1',
    '_putrc': 'C4F07E6ACD10F5B3123F89F2B170EADC',
    'JSESSIONID': 'ABAABJAABAEACCJE12579C6ED6488980B6893FC130D5127',
    'login': 'true',
    'unick': '%E7%94%A8%E6%88%B73606',
    'WEBTJ-ID': '20250419115357-1964c2e7fe91ea8-0350b2b15c96bc8-1a525636-1405320-1964c2e7fea3a43',
    'sensorsdata2015session': '%7B%7D',
    'X_HTTP_TOKEN': '0bb251cb838f75f3202530547114dba756a7f3784e',
    'X_MIDDLE_TOKEN': '63ac2503fd641c89b1364b6a7d46319e',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_utm_source%22%3A%22PC_SEARCH%22%2C%22%24os%22%3A%22MacOS%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22135.0.0.0%22%7D%2C%22%24device_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%7D',
}
# 配置浏览器驱动
driver_path = '/Users/liujuncheng/PycharmProjects/start_api/拉钩网/chromedriver'
service = Service(executable_path=driver_path)

# 浏览器选项配置
options = webdriver.ChromeOptions()
# options.add_argument('--headless')  # 不打开浏览器
options.add_argument('disable-infobars')  # 关闭警告信息
options.add_argument('--disable-blink-features')  # 屏蔽webdriver的特征
options.add_experimental_option('excludeSwitches', ['enable-automation'])
# 屏蔽webdriver的特征
options.add_argument('disable-blink-features=AutomationControlled')

# 初始化浏览器
driver = webdriver.Chrome(service=service, options=options)
driver.get('https://www.lagou.com')  # 关键步骤：建立域名上下文
driver.delete_all_cookies()

# 正确设置Cookie格式
for name, value in cookies.items():
    driver.add_cookie({
        'name': name,
        'value': value,
        'domain': '.lagou.com',  # 必须指定域名
        'path': '/',
        'expires': None
    })

# 重新访问目标页面
wait = WebDriverWait(driver, 10)  # 显式等待对象

# 初始化数据存储列表
name_list = []
didian_list = []
company_name_list = []
much_name_list = []
jinyan_list = []
xueli_list = []
zhiwei_lei_list = []
biaoqian_list = []
fuli_list = []

key = 'java'

try:
    for page in range(1, 6):
        # url = f'https://www.lagou.com/wn/zhaopin?fromSearch=true&kd=java&pn={page}'
        url=f'https://www.lagou.com/wn/zhaopin?pn={page}'
        driver.get(url)

        # 等待职位列表加载完成
        # wait.until(
        #     EC.presence_of_element_located((By.XPATH, '//div[@id="jobList"]/div[contains(@class, "job-list-box")]'))
        # )

        # 随机等待防止被检测
        time.sleep(2 + abs(page % 3 - 1))

        # 获取页面源码
        html = driver.page_source
        res = etree.HTML(html)

        # 解析数据（保持原有解析逻辑）
        # 职位名称和地点处理
        work_name_list = res.xpath("//a[@id='openWinPostion']/text()")
        name_list_page = work_name_list[::2]  # 奇数索引为职位名称
        didian_list_page = work_name_list[1::2]  # 偶数索引为地点

        # 公司名称
        company_name_list_page = res.xpath("//div[@class='company-name__2-SjF']/a/text()")

        # 薪资范围
        much_name_list_page = res.xpath("//span[@class='money__3Lkgq']/text()")

        # 经验学历处理
        jinyan_xueli_list = res.xpath("//div[@class='p-bom__JlNur']/text()")
        jinyan_list_page = [x.split('/')[0].strip() if '/' in x else '暂无' for x in jinyan_xueli_list]
        xueli_list_page = [x.split('/')[1].strip() if '/' in x else '暂无' for x in jinyan_xueli_list]

        # 职位类型处理
        zhiwei_lei_list_page = [
            x.split('｜')[0].split('/')[0].strip()[:10]
            for x in res.xpath("//div[@class='industry__1HBkr']/text()")
        ]
        time.sleep(1)
        # 福利待遇
        fuli_list_page = res.xpath("//div[@class='il__3lk85']/text()")

        # 技能标签处理（使用正则表达式）
        html_text = driver.page_source
        biaoqian_data = re.findall(r'class="ir___QwEG"><span>(.*?)</span></div>', html_text)
        biaoqian_list_page = [tag.replace('<span>', '').replace('</span>', '') for tag in biaoqian_data[:15]]
        biaoqian_list_page += ['暂无'] * (15 - len(biaoqian_list_page))

        # 统一数据长度（优化后的处理方式）
        page_data = {
            'name': name_list_page,
            'didian': didian_list_page,
            'company': company_name_list_page,
            'salary': much_name_list_page,
            'experience': jinyan_list_page,
            'education': xueli_list_page,
            'position_type': zhiwei_lei_list_page,
            'tags': biaoqian_list_page,
            'welfare': fuli_list_page
        }
        # 动态计算最小长度
        min_length = min(len(v) for v in page_data.values())

        # 数据对齐处理
        for key in page_data:
            page_data[key] = page_data[key][:min_length] + ['暂无'] * (min_length - len(page_data[key]))

        # 合并数据
        name_list.extend(page_data['name'])
        didian_list.extend(page_data['didian'])
        company_name_list.extend(page_data['company'])
        much_name_list.extend(page_data['salary'])
        jinyan_list.extend(page_data['experience'])
        xueli_list.extend(page_data['education'])
        zhiwei_lei_list.extend(page_data['position_type'])
        biaoqian_list.extend(page_data['tags'])
        fuli_list.extend(page_data['welfare'])
        print(page_data)
        #翻页函数
        # driver.find_element(By.XPATH,"//ul[@class='lg-pagination']/li[@class='lg-pagination-next']/a[@class='lg-pagination-item-link']").click()

        print(f"第 {page} 页数据抓取完成，共 {min_length} 条有效数据")

except Exception as e:
    print(f"抓取过程中发生错误：{str(e)}")
finally:
    driver.quit()
    print("浏览器已关闭")

# 创建DataFrame
df = pd.DataFrame({
    '职位名称': name_list,
    '公司名称': company_name_list,
    '薪资范围': much_name_list,
    '工作地点': didian_list,
    '经验要求': jinyan_list,
    '学历要求': xueli_list,
    '职位类型': zhiwei_lei_list,
    '技能标签': biaoqian_list,
    '福利待遇': fuli_list
})

# 保存文件
df.to_csv(f'拉勾网_{key}_selenium.csv', index=False, encoding='utf-8-sig')
df.to_excel(f'拉勾网_{key}_selenium.xlsx', index=False)
print("数据保存完成！")
