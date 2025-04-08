# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class DoubanTop250Pipeline:
    def process_item(self, item, spider):
        # 数据清洗示例
        if not item.get('year'):
            item['year'] = 'Unknown'
        if not item.get('genre'):
            item['genre'] = 'Unknown'
        return item

