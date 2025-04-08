import requests
import json

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
url = "https://gp-api.iguopin.com/api/jobs/v1/recom-job"
data = {
    "search": {
        "page": 1,
        "page_size": 20,
        "keyword": "python"
    },
    "recom": {
        "update_time": True,
        "company_nature": True,
        "hot_job": True
    }
}
yuan=data
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

data_list=json.loads(response.text)['data']['list']
job_id_list=[]
for date in data_list:
    job_name = date['job_name']  # 工作名
    company_name = date['company_name']  # 公司名称
    nature_cn = date['nature_cn']  # 招聘种类
    experience_cn = date['experience_cn']  # 经验要求
    education_cn = date['education_cn']  # 学历要求
    contents = date['contents']  # 福利待遇
    boss_nature_cn = date['company_info']['nature_cn']  # 公司种类
    scale_cn = date['company_info']['scale_cn']  # 公司规模
    job_id=date['job_id']
    job_id_list.append(job_id)   #将这个插入数据
    yuan['search']['remove_job_id']=job_id_list    #加入上一页的请求作为请求头
    print(job_name)
print(yuan)  #进行原有的进行内存存储