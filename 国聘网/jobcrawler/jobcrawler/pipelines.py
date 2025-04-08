# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


import pandas as pd
from itemadapter import ItemAdapter

class ExcelPipeline:
    def __init__(self):
        self.items = []

    def process_item(self, item, spider):
        self.items.append(ItemAdapter(item).asdict())
        return item

    def close_spider(self, spider):
        if not self.items:
            spider.logger.warning("没有可保存的数据")
            return

        df = pd.DataFrame(self.items)
        columns_order = [
            "job_id", "job_name", "company_name",
            "experience", "education",
            "company_nature", "company_scale",
            "benefits"
        ]
        df = df[columns_order].rename(columns={
            "job_id": "职位ID",
            "job_name": "职位名称",
            "company_name": "公司名称",
            "experience": "经验要求",
            "education": "学历要求",
            "company_nature": "公司性质",
            "company_scale": "公司规模",
            "benefits": "职位福利"
        })

        try:
            df.to_excel("jobs_scrapy.xlsx", index=False)
            spider.logger.info(f"成功保存 {len(df)} 条数据到 jobs_scrapy.xlsx")
        except Exception as e:
            spider.logger.error(f"保存失败: {str(e)}")
