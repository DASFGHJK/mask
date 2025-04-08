import requests
import json
import pandas as pd

class JobCrawler:
    def __init__(self):
        self.headers = {
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
        self.base_url = "https://gp-api.iguopin.com/api/jobs/v1/recom-job"
        self.job_id_list = []
        self.jobs_data = []
        self.page = 1

        # 初始化请求参数模板
        self.data_template = {
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

    def get_jobs(self, max_pages=5):
        """获取多页职位信息"""
        while self.page <= max_pages:
            # 构造当前页请求数据
            current_data = json.dumps(
                self._build_request_data(),
                separators=(',', ':')
            )

            response = requests.post(
                self.base_url,
                headers=self.headers,
                data=current_data
            )

            if response.status_code == 200:
                self._parse_response(response.json())
                self.page += 1
            else:
                print(f"请求失败，状态码：{response.status_code}")
                break

    def _build_request_data(self):
        """构造请求数据"""
        data = self.data_template.copy()
        data["search"]["page"] = self.page
        data["search"]["remove_job_id"] = self.job_id_list
        return data

    def _parse_response(self, response_data):
        """解析响应数据"""
        data_list = response_data.get('data', {}).get('list', [])

        for item in data_list:
            job_info = {
                "job_id": item['job_id'],
                "job_name": item['job_name'],
                "company_name": item['company_name'],
                "requirements": {
                    "experience": item['experience_cn'],
                    "education": item['education_cn']
                },
                "company_info": {
                    "nature": item['company_info']['nature_cn'],
                    "scale": item['company_info']['scale_cn']
                },
                "benefits": item['contents']
            }
            self.job_id_list.append(job_info["job_id"])
            self.jobs_data.append(job_info)

    def show_results(self):
        """打印结果"""
        for job in self.jobs_data:
            print(f"【{job['job_name']}】{job['company_name']}")
            print(f"要求：{job['requirements']['experience']} | {job['requirements']['education']}")
            print("-" * 50)

    def save_to_excel(self, filename="jobs.xlsx"):
        """
        将数据保存为Excel文件
        参数：
            filename: 保存文件名，默认jobs.xlsx
        """
        if not self.jobs_data:
            print("没有可保存的数据")
            return

        # 转换数据结构
        formatted_data = []
        for job in self.jobs_data:
            education=job["requirements"]["education"]
            if education=='':
                education='无学历要求'
            formatted_data.append({
                "职位ID": job["job_id"],
                "职位名称": job["job_name"],
                "公司名称": job["company_name"],
                "经验要求": job["requirements"]["experience"],
                "学历要求": education,
                "公司性质": job["company_info"]["nature"],
                "公司规模": job["company_info"]["scale"],
                "职位福利": "\n".join(job["benefits"])
            })

        # 使用pandas创建DataFrame
        df = pd.DataFrame(formatted_data)

        # 设置列顺序
        columns_order = [
            "职位ID", "职位名称", "公司名称",
            "经验要求", "学历要求",
            "公司性质", "公司规模",
            "职位福利"
        ]

        try:
            df.to_excel(
                filename,  #设置存储的内容
                index=False,
                columns=columns_order,    #设置存储的顺序
            )
            print(f"数据已保存至 {filename}")
        except Exception as e:
            print(f"保存失败: {str(e)}")

if __name__ == "__main__":
    crawler = JobCrawler()
    crawler.get_jobs(max_pages=3)  # 获取3页数据
    crawler.show_results()
    crawler.save_to_excel()
    print(f"共获取 {len(crawler.jobs_data)} 个职位")
