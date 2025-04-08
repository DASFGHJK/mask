import logging
import scrapy
from ..items import DoubanMovieItem

class DoubanTop250Spider(scrapy.Spider):
    name = 'douban_top250'
    allowed_domains = ['movie.douban.com']

    custom_settings = {
        'CONCURRENT_REQUESTS': 2,  # 降低并发数
        'DOWNLOAD_DELAY': 3,  # 增加下载延迟
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHROTTLE_START_DELAY': 5,
        'COOKIES_ENABLED': True,  # 启用cookies
        'DEFAULT_REQUEST_HEADERS': {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Referer': 'https://movie.douban.com/',
        },
        'RETRY_ENABLED': True,  # 启用重试
        'RETRY_TIMES': 3,  # 重试次数
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 403, 404]
    }

    def start_requests(self):
        # 动态生成请求
        for page in range(0, 250, 25):
            url = f'https://movie.douban.com/top250?start={page}'
            yield scrapy.Request(
                url=url,
                callback=self.parse,
                dont_filter=True
            )

    def parse(self, response):
        for movie in response.xpath('//div[@class="info"]'):
            item = DoubanMovieItem()

            # 基础信息
            item['chinese_title'] = movie.xpath('.//span[@class="title"][1]/text()').get()
            item['english_title'] = movie.xpath('.//span[@class="title"][2]/text()').get('').replace('\xa0/\xa0', '')
            detail_url = movie.xpath('.//div[@class="hd"]/a/@href').get()
            item['detail_url'] = detail_url

            # 请求详情页
            yield response.follow(
                detail_url,
                callback=self.parse_detail,
                meta={'item': item},
                dont_filter=True
            )

    def parse_detail(self, response):
        item = response.meta['item']

        # 剧情详情
        item['plot'] = ''.join(response.xpath(
            "//div[@class='related-info']/div[@id='link-report-intra']//text()"
        ).getall()).strip().replace('\n', '') or 'N/A'

        # 短评
        item['summary'] = response.xpath(
            "//div[@class='indent']//span[@class='short']/text()"
        ).get() or 'N/A'

        # 主页面信息
        info_text = response.xpath('normalize-space(//div[@class="subject clearfix"]//div[@class="info"]/text())').get()

        # 处理导演和演员
        director_actors = info_text.split('\n')[0].strip()
        item['director'] = director_actors.split('导演: ')[-1].split('主演: ')[
            0] if '导演: ' in director_actors else 'Unknown'
        item['actors'] = director_actors.split('主演: ')[-1] if '主演: ' in director_actors else 'Unknown'

        # 其他信息
        info_list = [x.strip() for x in
                     response.xpath('//div[@class="subject clearfix"]//div[@class="info"]/text()').getall()[-1].split(
                         '/')]
        item['year'] = info_list[0]
        item['region'] = info_list[1] if len(info_list) > 1 else 'Unknown'
        item['genre'] = info_list[2] if len(info_list) > 2 else 'Unknown'

        # 评分信息
        item['rating'] = response.xpath('//strong[@class="ll rating_num"]/text()').get()
        item['votes'] = response.xpath('//span[@property="v:votes"]/text()').get()

        yield item
