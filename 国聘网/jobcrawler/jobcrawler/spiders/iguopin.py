# spiders/iguopin.py
import json
import scrapy
from ..items import JobItem
import logging
from scrapy.exceptions import CloseSpider


class IguopinSpider(scrapy.Spider):
    name = "iguopin"
    allowed_domains = ["gp-api.iguopin.com"]
    custom_settings = {
        'LOG_LEVEL': 'DEBUG',
        'RETRY_TIMES': 3,
        'DOWNLOAD_DELAY': 2,
        'RANDOMIZE_DOWNLOAD_DELAY': True
    }

    # 复用原有请求参数模板
    data_template = {
        "search": {
            "page": 1,
            "page_size": 20,
            "keyword": "python",
            "remove_job_id": []
        },
        "recom": {
            "update_time": True,
            "company_nature": True,
            "hot_job": True
        }
    }

    def start_requests(self):
        try:
            # 确保参数类型正确
            self.max_pages = int(getattr(self, 'max_pages', 3))
            self.page = 1
            self.job_ids = []
            yield self.build_request(self.page)
        except Exception as e:
            logging.error(f"启动请求失败: {str(e)}")
            raise CloseSpider(f"启动失败: {str(e)}")

    def build_request(self, page):
        """构建符合要求的POST请求"""
        try:
            # 深拷贝数据模板防止污染
            post_data = self.data_template.copy()
            post_data["search"]["page"] = page
            post_data["search"]["remove_job_id"] = self.job_ids

            # 完整请求头配置
            headers = {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "device": "pc",
                "origin": "https://www.iguopin.com",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "referer": "https://www.iguopin.com/",
                "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "subsite": "iguopin",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
            }

            return scrapy.Request(
                url="https://gp-api.iguopin.com/api/jobs/v1/recom-job",
                method='POST',
                headers=headers,
                body=json.dumps(post_data, separators=(',', ':')),
                callback=self.parse,
                meta={
                    'page': page,
                    'retries': 0  # 重试计数器
                },
                dont_filter=True
            )
        except Exception as e:
            logging.error(f"构建请求失败: {str(e)}")
            raise CloseSpider(f"请求构造异常: {str(e)}")

    def parse(self, response):
        """解析响应并处理分页"""
        # 记录原始响应（调试用）
        self.logger.debug(f"响应状态: {response.status}, 响应体: {response.text[:200]}...")

        # 响应状态验证
        if response.status != 200:
            self.logger.error(f"请求失败，状态码：{response.status}")
            return

        try:
            response_data = json.loads(response.text)
        except json.JSONDecodeError:
            self.logger.error("响应数据不是有效的JSON格式")
            return

        # 数据有效性验证
        if not isinstance(response_data.get('data', {}).get('list'), list):
            self.logger.warning("未获取到有效数据列表")
            return

        items = response_data['data']['list']
        if not items:
            self.logger.info("当前页无数据，终止爬取")
            return

        # 处理数据条目
        for item in items:
            try:
                job_item = JobItem()
                job_item['job_id'] = item['job_id']
                job_item['job_name'] = item['job_name']
                job_item['company_name'] = item['company_name']
                job_item['experience'] = item.get('experience_cn', '经验不限')
                job_item['education'] = item.get('education_cn', '无学历要求') or '无学历要求'
                job_item['company_nature'] = item['company_info']['nature_cn']
                job_item['company_scale'] = item['company_info']['scale_cn']
                job_item['benefits'] = "\n".join(item.get('contents', []))

                self.job_ids.append(job_item['job_id'])
                yield job_item
            except KeyError as e:
                self.logger.warning(f"数据字段缺失: {str(e)}，跳过当前条目")
                continue

        # 处理分页
        current_page = response.meta['page']
        if current_page < self.max_pages:
            next_page = current_page + 1
            self.logger.info(f"准备爬取第 {next_page}/{self.max_pages} 页")
            yield self.build_request(next_page)
        else:
            self.logger.info(f"已完成所有 {self.max_pages} 页的爬取")

    def handle_spider_error(self, failure):
        """自定义错误处理"""
        self.logger.error(f"爬虫异常: {str(failure.value)}")
        return
