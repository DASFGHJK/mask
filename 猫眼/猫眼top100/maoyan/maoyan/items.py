import scrapy


class MaoyanItem(scrapy.Item):
    # 基础字段
    title = scrapy.Field()  # 标题
    actors = scrapy.Field()  # 主演
    release_date = scrapy.Field()  # 上映时间
    list_score = scrapy.Field()  # 列表页评分

    # 详情页字段
    detail_score = scrapy.Field()  # 详情页评分
    director = scrapy.Field()  # 导演
    synopsis = scrapy.Field()  # 简介
    detail_url = scrapy.Field()  # 详情页URL
