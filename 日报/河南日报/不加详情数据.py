import csv
import requests
from lxml import etree
from bs4 import BeautifulSoup
import time
import warnings
from urllib3.exceptions import InsecureRequestWarning
warnings.filterwarnings("ignore", category=InsecureRequestWarning)
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
}
def main():
    with open('河南日报2024.csv', 'w', encoding='utf-8-sig', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['日期', '文章链接', '标题'])  # 移除正文列

        month_days = {
            1: 31, 2: 29, 3: 31, 4: 30,
            5: 31, 6: 30, 7: 31, 8: 31,
            9: 30, 10: 31, 11: 30, 12: 31
        }

        for month in range(1, 13):
            for day in range(1, month_days[month] + 1):
                time.sleep(1)
                date_str = f"2024-{month:02d}-{day:02d}"
                list_url = f"https://newpaper.dahe.cn/hnrb/html/2024-{month:02d}/{day:02d}/node_1.htm"
                print(date_str)
                try:
                    # 使用BS4获取列表页
                    list_response = requests.get(list_url, headers=headers, verify=False, timeout=10)
                    list_soup = BeautifulSoup(list_response.text, 'lxml')

                    # 混合使用XPath定位元素
                    news_list = list_soup.select_one('ul.news-list')  # BS4选择器
                    if news_list:
                        # 将BS4对象转换为lxml元素以使用XPath
                        lxml_element = etree.HTML(str(news_list))
                        items = lxml_element.xpath("//li[@class='news-item']")

                        for item in items:
                            title = item.xpath(".//a/text()")[0].strip()
                            relative_url = item.xpath(".//a/@href")[0]
                            full_url = f"https://newpaper.dahe.cn/hnrb/html/2024-{month:02d}/{day}/{relative_url}"
                            print(title)
                            writer.writerow([
                                date_str,
                                full_url,
                                title
                            ])

                except Exception as e:
                    print(f"Error processing {date_str}: {str(e)}")
                    continue
if __name__ == '__main__':
    main()