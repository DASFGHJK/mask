import scrapy

class DoubanReadingItem(scrapy.Item):
    title = scrapy.Field()
    abstract=scrapy.Field()
    author = scrapy.Field()
    shortName = scrapy.Field()
    fixedPrice = scrapy.Field()
    wordCount = scrapy.Field()
