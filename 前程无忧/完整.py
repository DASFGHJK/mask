import random
import time
import requests
import re
import execjs
import pandas as pd
from urllib3.exceptions import InsecureRequestWarning

# 禁用 SSL 证书验证警告
requests.urllib3.disable_warnings(InsecureRequestWarning)

with open('1.js', encoding='utf-8') as f:
    js_code = f.read()
_cell = execjs.compile(js_code)

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "From-Domain": "51job_web",
    "Pragma": "no-cache",
    "Referer": "https://we.51job.com/pc/search?keyword=%E4%BC%9A%E8%AE%A1&searchType=2&sortType=0&metro=",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "account-id;": "",
    "partner;": "",
    "property": "%7B%22partner%22%3A%22%22%2C%22webId%22%3A2%2C%22fromdomain%22%3A%2251job_web%22%2C%22frompageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2F%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2Fpc%2Fsearch%3Fkeyword%3D%25E4%25BC%259A%25E8%25AE%25A1%26searchType%3D2%26sortType%3D0%26metro%3D%22%2C%22identityType%22%3A%22%22%2C%22userType%22%3A%22%22%2C%22isLogin%22%3A%22%E5%90%A6%22%2C%22accountid%22%3A%22%22%7D",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "user-token;": "",
    "uuid": "f7a111f2e61e9571dd1fb368a1fb93d0"
}

date_list = []

def save_to_excel(key):
    """将数据保存到Excel文件"""
    try:
        if not date_list:
            print("没有数据需要保存")
            return
        df = pd.DataFrame(date_list, columns=["职业名称", "工作要求", "工作地点", "工作声明", "公司名称", "学历要求",
                                              "企业规模", "企业性质", "企业领域", "工资"])
        df.to_excel(f'前程_{key}.xlsx', index=False, engine='openpyxl')
        print(f"数据已成功保存到 前程_{key}.xlsx")
    except Exception as e:
        print(f"保存文件时发生错误: {e}")

def get_data(job, page):
    try:
        print(f"目前正在抓取第{page}页------------------>")
        cookies = {
            "guid": "f7a111f2e61e9571dd1fb368a1fb93d0",
            "nsearch": "jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D",
            "search": "jobarea%7E%60%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FA%BB%E1%BC%C6%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21",
            "acw_tc": "ac11000117226604806963490e0097689b55d5f2907bb0c58b4f2c143e48c7",
            "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22f7a111f2e61e9571dd1fb368a1fb93d0%22%2C%22first_id%22%3A%2219112b76a8e83-05dbb07efb4b5c4-26001951-921600-19112b76a8f13a6%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkxMTJiNzZhOGU4My0wNWRiYjA3ZWZiNGI1YzQtMjYwMDE5NTEtOTIxNjAwLTE5MTEyYjc2YThmMTNhNiIsIiRpZGVudGl0eV9sb2dpbl9pZCI6ImY3YTExMWYyZTYxZTk1NzFkZDFmYjM2OGExZmI5M2QwIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22f7a111f2e61e9571dd1fb368a1fb93d0%22%7D%2C%22%24device_id%22%3A%2219112b76a8e83-05dbb07efb4b5c4-26001951-921600-19112b76a8f13a6%22%7D",
            "JSESSIONID": "8F2AA22A27794E4177D7EF03BCD02100",
            "ssxmod_itna": "QqUxR7i=e=wxl4iqYKYZ7D9Ax0Yx0EwfTq3ol4GNfeYDZDiqAPGhDC48tjqRATr5ieWpAuGdKeESi5F31IYxGCWgjvPDHxY=DUZYoeDx1q0rD74irDDxD3DbfdDSDWKD9D0RSBc6yKGWDmR8DWPDYxDrLaKDRxi7DDHQkx07DQvk1DDz1nO5TxGicY2GYUPwnrECqGYPWjKD9OoDsp0j1jKmn8k5ShYLUKA3px0keq0O9ryz1roDUBKsyPANbA+xbDrN314dqixYTo2r8m6eKii4KQGKT6Deqm0DTx+KjVw9HAs5DDPoF743YD==",
            "ssxmod_itna2": "QqUxR7i=e=wxl4iqYKYZ7D9Ax0Yx0EwfTq3oeA6n=PD/KmSDFgxY5w8o=ikHGFmWkKPqDPIT40xueFl7uIDEimA2sWEfeMjCWKQ1K=0Cuz=LWUzNNQxiXeEjjk8BNdHktuXiT/US1QpqO8QesVi0ikx+hHpG+DpBzm2Asxry1AxFtVmmbWrwbP/uzsReFn7e4uGahNOG=j+hWR0fxOxF4w8GmUYhi1+dQ2+a+KPwjtEm4jKLkWlY+echdCSiCeY5fulYOWiahYQPTPUPnu0AyQbRQ8lK=POcWLN9lTNZW2/=yg5HCZTxhBI+OPghPvQAEBPB1K8WUYct+iI5p0tP2zeK6eI3IqXiIZm5bxAN3Ii3eB6PmnPGWAZD4YSeG0YhBwsQun0A51AkUPoZNEpwx9RsKt/Zwh/=FbvxfRmzECBUsirlEKw4fszapDNoI28A6L+hViP0ja3ea0RK=+5qlRLUhNaRDS4ntyb4HKFHBEhWDG2bi4KGNKiAmijRKyDjGcbhv2hg2CTPkgIe9q5jxc95PDr+bDji5khCH9vqtCD5ibyy6KkxR4oD08DijtYD",
            "tfstk": "f7B-TZMtGr4ohzPhFgNDKbVEPQrDJTIPZaSsKeYoOZQAfNdINQ1hJBLA8UAkFpYdkM_T4H4PK05VSGMlE7JnpLJedP4gIRqP4pJIg6NZW4RXxHeHAYOWe8o_eP4gI-jfMAgLS6jXfAdvYEtWVeM7DKtyVptSd3ZvlHKZO4_BdoIXuhuSdH9BhntkjjUjeenW7vCCazndyzqIKvXvcy812kM64txJlFI5eDiQY3dJ5gTYSpnIWIse99oEpCs5_w-1P4ap8tIfF1__obY56HIG9gwShLXPV1OCCylCWLQp1TOxAYpVqEpvcOZn_EXvrw6JGlD9tK6M1L10gzAHehQCUanKdNscjTRVpP3X8_xwhHBUfXLpOgRcIOK7lVY9xbZYDXleNn0qNlnK0OdAtnLg0ZlETIK2DFqYDXleNn-vSoRZTXRv0"
        }

        url = "https://we.51job.com/api/job/search-pc"
        params = {
            "api_key": "51job",
            "timestamp": "1722660517",
            "keyword": job,
            "searchType": "2",
            "function": "",
            "industry": "",
            "jobArea": "000000",
            "jobArea2": "",
            "landmark": "",
            "metro": "",
            "salary": "",
            "workYear": "",
            "degree": "",
            "companyType": "",
            "companySize": "",
            "jobType": "",
            "issueDate": "",
            "sortType": "0",
            "pageNum": page,
            "requestId": "d107ae451130f2248175f8009071b07e",
            "pageSize": "20",
            "source": "1",
            "accountId": "",
            "pageCode": "sou|sou|soulb"
        }

        response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)
        response.raise_for_status()

        arg1 = re.findall("var arg1='(.*?)';", response.text)
        if not arg1:
            raise ValueError("无法提取加密参数arg1")
        acw_sc__v2 = _cell.call("get_arg1", arg1[0])
        cookies['acw_sc__v2'] = acw_sc__v2

        res2 = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)
        res2.raise_for_status()
        time.sleep(random.randint(1,3))

        data_list = res2.json().get('resultbody', {}).get('job', {}).get('items', [])
        if not data_list:
            raise StopIteration("没有更多数据")

        for data in data_list:
            jobName = data['jobName']
            jobTags = data['jobTags']
            jobAreaString = data['jobAreaString']
            jobDescribe = data['jobDescribe']
            fullCompanyName = data['fullCompanyName']
            degreeString = data['degreeString']
            companySizeString = data['companySizeString']
            companyTypeString = data['companyTypeString']
            industryType2Str = data['industryType2Str']
            provideSalaryString = data['provideSalaryString']
            date_list.append(
                [jobName, jobTags, jobAreaString, jobDescribe, fullCompanyName,
                 degreeString, companySizeString, companyTypeString, industryType2Str,
                 provideSalaryString])

        save_to_excel(job)

    except requests.exceptions.RequestException as e:
        print(f"网络请求失败: {e}")
        raise
    except (IndexError, KeyError) as e:
        print(f"数据解析错误: {e}")
        raise
    except Exception as e:
        print(f"处理第{page}页时发生未知错误: {e}")
        raise

def main():
    job = input("请输入岗位: ")
    page = 1

    try:
        while True:
            try:
                get_data(job, page)
                page += 1
            except StopIteration:
                print("所有数据已抓取完毕")
                break
            except Exception:
                print(f"第{page}页数据抓取失败，尝试下一页...")
                page += 1
                continue
    except KeyboardInterrupt:
        print("\n用户主动中断抓取")
    finally:
        if date_list:
            save_to_excel(job)
        else:
            print("没有数据需要保存")

if __name__ == "__main__":
    main()