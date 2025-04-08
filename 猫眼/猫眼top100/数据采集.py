import csv
from urllib.parse import urljoin

import requests
from lxml import etree
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

# ================== 通用配置 ==================
chrome_driver = '/Users/liujuncheng/PycharmProjects/start_api/东方财务网/chromedriver'
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.maoyan.com/board/4?offset=20",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "__mta": "49594137.1742448640954.1742913502828.1743238217639.53",
    "uuid_n_v": "v1",
    "uuid": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "_lxsdk_cuid": "195b208430fc8-0dd38ffffb5121-1b525636-157188-195b208430fc8",
    "_ga": "GA1.1.906369322.1742448752",
    "ci": "70%2C%E9%95%BF%E6%B2%99",
    "_lx_utm": "utm_source%3Dbing%26utm_medium%3Dorganic",
    "_lxsdk": "7588FA50054C11F08AC4FD26E603B60F47052F43FD2547E4A5E0FB9F38E7FB71",
    "_csrf": "7c86c4dce720abfd8787489c8e5b63660d3d41dc98799eb250f0efd415a7519d",
    "Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1742785003,1742913228,1743238211,1743483815",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533": "1743490417",
    "_ga_WN80P4PSY7": "GS1.1.1743483815.10.1.1743490418.0.0.0",
    "_lxsdk_s": "195efbbc493-8e5-68b-d7%7C%7C51"
}
params = {
    "offset": "10"
}


# ================== 初始化 Selenium ==================
def init_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('disable-infobars')
    # options.add_argument('--headless')  # 不打开浏览器
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.add_experimental_option('excludeSwitches', ['enable-automation'])
    service = Service(executable_path=chrome_driver)
    return webdriver.Chrome(options=options, service=service)


# ================== 新增评分处理函数 ==================
def process_scores(tree):
    """处理评分数据"""
    scorce_list = tree.xpath('//*[@id="app"]/div/div/div[1]/dl/dd/div/div/div[2]/p//text()')
    processed_scores = []
    i = 0
    while i < len(scorce_list):
        if '.' in scorce_list[i]:
            combined = scorce_list[i] + scorce_list[i + 1]
            processed_scores.append(combined)
            i += 2
        else:
            processed_scores.append(scorce_list[i])
            i += 1
    return processed_scores


# ================== 详情页抓取函数 ==================
def get_detail_data(driver, url):
    driver.get(url)
    time.sleep(10)  # 等待页面加载
    data = driver.page_source
    tree = etree.HTML(data)

    return {
        '导演': tree.xpath('//li[contains(.,"导演")]/div[2]/div/text()')[0].strip(),
        '简介': tree.xpath('//div[contains(@class,"film-desc")]/span/text()')[0],
        '评分': tree.xpath('//div[contains(@class,"film-score")]//span[@class="score"]/text()')[0]
    }


# ================== 新增评分处理函数 ==================
def process_scores(tree):
    """处理评分数据"""
    scorce_list = tree.xpath('//*[@id="app"]/div/div/div[1]/dl/dd/div/div/div[2]/p//text()')
    processed_scores = []
    i = 0
    while i < len(scorce_list):
        if '.' in scorce_list[i]:
            combined = scorce_list[i] + scorce_list[i + 1]
            processed_scores.append(combined)
            i += 2
        else:
            processed_scores.append(scorce_list[i])
            i += 1
    return processed_scores


# ================== 主采集逻辑 ==================
def main():
    driver = init_driver()

    try:
        # 获取主列表
        base_url = "https://www.maoyan.com/board/4"
        response = requests.get(base_url, headers=headers, cookies=cookies, params=params)
        tree = etree.HTML(response.text)

        # 解析列表数据（新增评分处理）
        movies = []
        processed_scores = process_scores(tree)

        for idx, dd in enumerate(tree.xpath('//dl[@class="board-wrapper"]/dd')):
            try:
                movie_data = {
                    '标题': dd.xpath('.//p[@class="name"]/a/text()')[0],
                    '主演': dd.xpath('.//p[@class="star"]/text()')[0].strip(),
                    '上映时间': dd.xpath('.//p[@class="releasetime"]/text()')[0],
                    '列表页评分': processed_scores[idx],
                    '详情页路径': urljoin(base_url, dd.xpath('.//p[@class="name"]/a/@href')[0])
                }
                print(movie_data)
                movies.append(movie_data)
            except IndexError as e:
                print(f"列表数据解析错误：{str(e)}")
                continue

        # 抓取详情数据
        for movie in movies:
            try:
                detail_data = get_detail_data(driver, movie['详情页路径'])
                movie.update(detail_data)
                print(f"成功抓取: {movie['标题']}")
            except Exception as e:
                print(f"详情页抓取失败: {str(e)}")
                continue
            time.sleep(1)  # 增加请求间隔
        output_file='猫眼.csv'
        # 保存到CSV
        with open(output_file, 'w', newline='', encoding='utf-8-sig') as f:
            fieldnames = ['标题', '主演', '上映时间', '列表页评分', '详情页评分', '导演', '简介']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(movies)

        print(f"\n数据已保存到 {output_file}")

    finally:
        driver.quit()


# ================== 执行主程序 ==================
if __name__ == "__main__":
    result = main()
    # 打印前3条结果示例
    for item in result:
        print("\n完整数据：")
        for k, v in item.items():
            print(f"{k}: {v}")
