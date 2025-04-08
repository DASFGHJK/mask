import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "access-control-request-headers": "content-type,device,subsite,version",
    "access-control-request-method": "POST",
    "cache-control": "no-cache",
    "origin": "https://www.iguopin.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.iguopin.com/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
url = "https://gp-api.iguopin.com/api/jobs/v1/recom-job"
response = requests.options(url, headers=headers)

print(response.text)
print(response)