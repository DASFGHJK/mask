import requests
import pandas as pd
import time
import random


class ZhaopinScraper:
    def __init__(self):
        self.cookies = {
            'x-zp-client-id': '5a667980-fd48-4dd0-8d07-82174cf00df1',
            'rt': '1dd24b230e0b49a6929246789f1d32fc',
            'sts_deviceid': '196246cda611135-057ceeace69eb5-1b525636-1405320-196246cda6222ed',
            'at': 'ebb52532ebdb4c639b452c56de3e99fe',
            'LastCity%5Fid': '749',
            'LastCity': '%E9%95%BF%E6%B2%99',
            'selectCity_search': '749',
            'locationInfo_search': '{%22code%22:%22749%22%2C%22name%22:%22%E9%95%BF%E6%B2%99%22}',
        }

        self.headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'origin': 'https://xiaoyuan.zhaopin.com',
            'pragma': 'no-cache',
            'referer': 'https://xiaoyuan.zhaopin.com/',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'x-zp-at': 'ebb52532ebdb4c639b452c56de3e99fe',
            'x-zp-business-system': '40',
            'x-zp-platform': '14',
            'x-zp-rt': '1dd24b230e0b49a6929246789f1d32fc',
        }

        self.params = {
            'x-zp-page-request-id': '7c9fcd54e2e84d99bfca57d30faaf790-1745422854215-521029',
            'x-zp-client-id': '5a667980-fd48-4dd0-8d07-82174cf00df1',
        }

        self.data = []
        self.keyword = ""
        self.max_pages = 0

    def set_params(self):
        self.keyword = input("请输入要抓取的关键词: ")
        self.max_pages = int(input("请输入要抓取的页码数量: "))

    def fetch_data(self):
        for page in range(1, self.max_pages + 1):
            print(f"正在抓取第{page}页------------------>")
            time.sleep(random.randint(3, 5))

            json_data = {
                'identity': '1',
                'filterMinSalary': 1,
                'version': '8.2.6',
                'pageIndex': str(page),
                'pageSize': 20,
                'cvNumber': '15F309BE88ED879EAE2526E303D84D7F11E0301A541EC6FAC1C4083F8434D0C4F86A60E11286D88D899E0050046C7EB4_A0001',
                'order': 12,
                'S_SOU_FULL_INDEX': self.keyword,
                'S_SOU_EDUCATION_LOWESTLEVEL': '3',
                'at': self.headers['x-zp-at'],
                'rt': self.headers['x-zp-rt'],
                'channel': 'xiaoyuan',
                'platform': '14',
                'd': self.params['x-zp-client-id'],
            }

            try:
                response = requests.post(
                    'https://cgate.zhaopin.com/positionbusiness/searchrecommend/searchPositions',
                    params=self.params,
                    cookies=self.cookies,
                    headers=self.headers,
                    json=json_data,
                    timeout=10
                )
                response.raise_for_status()
                res = response.json()

                work_list = res.get('data', {}).get('list', [])

                for work in work_list:
                    row = {
                        '招聘类型': work.get('workType', ''),
                        '企业名称': work.get('companyName', ''),
                        '企业性质': work.get('property', ''),
                        '岗位名称': work.get('name', ''),
                        '公告链接': work.get('companyUrl', ''),
                        '学历要求': work.get('education', ''),
                        '工作年限要求': work.get('workingExp', ''),
                        '薪资': work.get('salary60', ''),
                        'base地': work['jobRootOrgInfo'].get('cityName', '') if 'jobRootOrgInfo' in work else '',
                        '行业': work.get('industryName', ''),
                        '截止时间': '',
                        '投递链接': f"https://xiaoyuan.zhaopin.com/job/{work.get('number', '')}",
                        '特殊要求': work.get('jobSummary', '')
                    }
                    self.data.append(row)

                # 每页抓取后中间保存一次
                self.save_to_excel(intermediate=True)

            except Exception as e:
                print(f"抓取失败: {str(e)}，已经超出实际页码")
                # 保存已抓取的数据后退出
                self.save_to_excel(intermediate=True)
                break

    def save_to_excel(self, intermediate=False):
        if not self.data:
            print("没有数据需要保存")
            return

        df = pd.DataFrame(self.data)
        suffix = "_中间保存" if intermediate else ""
        file_name = f"招聘信息_{self.keyword}{suffix}.xlsx"
        df.to_excel(file_name, index=False)
        print(f"{'中间保存' if intermediate else '最终保存'}: 数据已成功保存到 '{file_name}' 文件中")


def main():
    scraper = ZhaopinScraper()
    scraper.set_params()
    scraper.fetch_data()
    scraper.save_to_excel()


if __name__ == "__main__":
    main()