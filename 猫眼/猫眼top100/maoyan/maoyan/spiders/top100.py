import logging

import scrapy
from urllib.parse import urljoin
from ..items import MaoyanItem


class Top100Spider(scrapy.Spider):
    name = 'top100'
    allowed_domains = ['maoyan.com']

    # 自定义配置
    custom_settings = {
        'DOWNLOAD_DELAY': 2,
        'CONCURRENT_REQUESTS': 3,
        'DEFAULT_REQUEST_HEADERS': {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
            'Referer': 'https://www.maoyan.com/board/4'
        }
    }

    def start_requests(self):
        url = 'https://www.maoyan.com/board/4?offset=0'
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
        yield scrapy.Request(
            url,
            cookies=cookies,
            callback=self.parse_list,
            meta={'selenium': True}  # 使用Selenium渲染
        )

    def parse_list(self, response):
        # 处理评分数据
        score_list = response.xpath('//div[contains(@class,"score")]//text()').getall()
        processed_scores = self.process_scores(score_list)

        # 提取电影条目
        for idx, dd in enumerate(response.css('dl.board-wrapper dd')):
            item = MaoyanItem()
            item['title'] = dd.css('p.name a::text').get()
            item['actors'] = dd.css('p.star::text').get().strip()
            item['release_date'] = dd.css('p.releasetime::text').get()
            item['list_score'] = processed_scores[idx]
            detail_path = dd.css('p.name a::attr(href)').get()
            item['detail_url'] = urljoin(response.url, detail_path)
            print(item)
            # 发起详情页请求
            yield scrapy.Request(
                item['detail_url'],
                cookies=response.request.cookies,
                meta={'item': item, 'selenium': True},  # 使用Selenium渲染
                callback=self.parse_detail
            )

        # 分页处理（示例抓取前3页）
        current_offset = int(response.url.split('offset=')[-1])
        if current_offset < 100:  # 根据实际情况调整   进行分页处理
            next_url = f'https://www.maoyan.com/board/4?offset={current_offset + 10}'
            yield response.follow(next_url, callback=self.parse_list)

    def parse_detail(self, response):
        item = response.meta['item']
        # 提取详情数据
        item['director'] = response.xpath('//li[contains(.,"导演")]/div[2]/div/text()').get('').strip()
        item['synopsis'] = response.css('div.film-desc span::text').get('').strip()
        item['detail_score'] = response.css('div.film-score span.score::text').get()
        # self.logger.info('抓取到数据：%s', dict(item))
        yield item

    @staticmethod
    def process_scores(score_list):
        processed = []
        i = 0
        while i < len(score_list):
            if '.' in score_list[i]:
                processed.append(score_list[i] + score_list[i + 1])
                i += 2
            else:
                processed.append(score_list[i])
                i += 1
        return processed
