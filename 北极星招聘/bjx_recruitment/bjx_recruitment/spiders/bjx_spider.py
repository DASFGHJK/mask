import scrapy
from scrapy_selenium import SeleniumRequest
from bs4 import BeautifulSoup
import pandas as pd

class BjxSpiderSpider(scrapy.Spider):
    name = 'bjx_spider'
    allowed_domains = ['hr.bjx.com.cn']
    start_urls = [
        'https://hr.bjx.com.cn/search/result/?kw=python&kp=&sg=&rank=1&experience=&ln=49b7bf24-008d-44d7-8366-cea691d58ab3&index=1'
    ]

    def start_requests(self):
        for page in range(1, 4):  # 从第1页到第3页
            url = f'https://hr.bjx.com.cn/search/result/?kw=python&kp=&sg=&rank=1&experience=&ln=49b7bf24-008d-44d7-8366-cea691d58ab3&index={page}'
            yield SeleniumRequest(
                url=url,
                wait_time=20,
                screenshot=True,
                callback=self.parse
            )

    def parse(self, response):
        # 提取数据
        workername = response.xpath('//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[1]/a/b/text()').getall()
        xinzi = response.xpath('//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/strong/text()').getall()
        city = response.xpath('//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[1]/text()').getall()
        zili = response.xpath('//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[2]/text()').getall()
        xueli = response.xpath('//*[@id="render_slot2"]/div/div/div[2]/div[1]/p[2]/em[3]/text()').getall()
        daiyu = response.xpath('//*[@id="render_slot2"]/div/div/div[3]/div[2]').getall()

        # 解析每个 <div> 标签中的 <span> 标签内容
        daiyu_cleaned = []
        for div in daiyu:
            soup = BeautifulSoup(div, 'lxml')
            spans = soup.find_all('span')
            daiyu_cleaned.append(', '.join(span.text for span in spans))

        # 将抓取的数据存储到列表中
        for i in range(len(workername)):
            yield {
                '姓名': workername[i],
                '薪资': xinzi[i] if i < len(xinzi) else '',
                '城市': city[i] if i < len(city) else '',
                '资历': zili[i] if i < len(zili) else '',
                '学历': xueli[i] if i < len(xueli) else '',
                '其他信息': daiyu_cleaned[i] if i < len(daiyu_cleaned) else ''
            }

        # 处理下一页
        try:
            next_page = response.xpath('//*[@id="render_slot2"]/div[2]/div[3]/a[7]')
            if next_page and next_page.xpath('text()').get() != '下一页':
                next_page = response.xpath('//*[@id="render_slot2"]/div[2]/div[3]/a[8]')
            if next_page:
                yield SeleniumRequest(
                    url=next_page.xpath('@href').get(),
                    wait_time=20,
                    screenshot=True,
                    callback=self.parse
                )
        except Exception as e:
            self.logger.error(f"无法找到下一页按钮或已到达最后一页: {e}")
