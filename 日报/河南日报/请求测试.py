import csv
import re
import requests
import time
from lxml import etree
class HenanDailyScraper:
    def __init__(self):
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        }
        self.month_days = {
            1: 31, 2: 29, 3: 31, 4: 30,
            5: 31, 6: 30, 7: 31, 8: 31,
            9: 30, 10: 31, 11: 30, 12: 31
        }
        self.filename = '河南日报2024.csv'
        self.base_url = "https://newpaper.dahe.cn/hnrb/html"

        # 配置请求会话
        self.session = requests.Session()
        self.session.verify = False
        self.session.headers.update(self.headers)

    def run(self):
        with open(self.filename, 'w', encoding='utf-8-sig', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['日期', '文章链接', '标题', '正文'])
            self._process_all_dates(writer)

    def _process_all_dates(self, writer):
        for month in range(1, 13):
            for day in range(1, self.month_days[month] + 1):
                self._process_daily_data(month, day, writer)
                time.sleep(1)  # 请求间隔

    def _process_daily_data(self, month, day, writer):
        date_str = f"2024-{month:02d}-{day:02d}"
        list_url = f"{self.base_url}/2024-{month:02d}/{day:02d}/node_1.htm?v=1"

        try:
            list_response = self._safe_request(list_url)
            if list_response and list_response.status_code == 200:
                self._parse_list_page(list_response.text, month, day, date_str, writer)
        except Exception as e:
            print(f"处理 {date_str} 数据时出错: {str(e)}")

    def _parse_list_page(self, html, month, day, date_str, writer):
        tree = etree.HTML(html)
        titles = tree.xpath("//ul[@class='news-list']/li[@class='news-item']/a/text()")
        relative_urls = tree.xpath("//li[@class='news-item']/a/@href")

        base_url = f"{self.base_url}/2024-{month:02d}/{day:02d}/"

        for title, rel_url in zip(titles, relative_urls):
            article_url = base_url + rel_url
            article_content = self._get_article_content(article_url)
            self._write_row(writer, date_str, article_url, title.strip(), article_content)

    def _get_article_content(self, url):
        try:
            response = self._safe_request(url)
            if response and response.status_code == 200:
                return self._parse_article_content(response.text)
        except Exception as e:
            print(f"获取文章内容失败: {url} - {str(e)}")
        return ""

    def _parse_article_content(self, html):
        tree = etree.HTML(html)
        content_elements = tree.xpath("//div[@id='articleContent']//text()")
        cleaned = [re.sub(r'\u3000', '', item.strip()) for item in content_elements if item.strip()]
        return ' '.join(cleaned)

    def _safe_request(self, url):
        try:
            return self.session.get(url, timeout=10)
        except requests.exceptions.RequestException as e:
            print(f"请求失败: {url} - {str(e)}")
            return None

    def _write_row(self, writer, date, url, title, content):
        writer.writerow([date, url, title, content])
        print(f"已写入: {title}")


if __name__ == "__main__":
    scraper = HenanDailyScraper()
    scraper.run()
