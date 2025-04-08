# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html
import scrapy
#设置抓取的item的属性
class JobItem(scrapy.Item):
    job_id = scrapy.Field()
    job_name = scrapy.Field()
    company_name = scrapy.Field()
    experience = scrapy.Field()
    education = scrapy.Field()
    company_nature = scrapy.Field()
    company_scale = scrapy.Field()
    benefits = scrapy.Field()

