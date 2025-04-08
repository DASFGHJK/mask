import csv
from itemadapter import ItemAdapter

class CsvExportPipeline:
    def __init__(self):
        self.file = None
        self.writer = None

    def open_spider(self, spider):
        self.file = open('maoyan_top100.csv', 'w', newline='', encoding='utf-8-sig')
        self.writer = csv.DictWriter(self.file, fieldnames=[
            'title', 'actors', 'release_date', 'list_score',
            'detail_score', 'director', 'synopsis', 'detail_url'
        ])
        self.writer.writeheader()

    def process_item(self, item, spider):
        self.writer.writerow(ItemAdapter(item).asdict())
        return item

    def close_spider(self, spider):
        self.file.close()
