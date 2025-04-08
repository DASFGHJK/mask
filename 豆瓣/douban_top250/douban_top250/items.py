import scrapy

class DoubanMovieItem(scrapy.Item):
    chinese_title = scrapy.Field()
    english_title = scrapy.Field()
    detail_url = scrapy.Field()
    director = scrapy.Field()
    actors = scrapy.Field()
    year = scrapy.Field()
    region = scrapy.Field()
    genre = scrapy.Field()
    rating = scrapy.Field()
    votes = scrapy.Field()
    summary = scrapy.Field()
    plot = scrapy.Field()
