import requests


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "From-Domain": "51job_web",
    "Pragma": "no-cache",
    "Referer": "https://we.51job.com/pc/search?jobArea=000000&keyword=python&searchType=2&keywordType=",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "account-id;": "",
    "partner": "www_baidu_com",
    "property": "%7B%22partner%22%3A%22www_baidu_com%22%2C%22webId%22%3A2%2C%22fromdomain%22%3A%2251job_web%22%2C%22frompageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2F%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwe.51job.com%2Fpc%2Fsearch%3FjobArea%3D000000%26keyword%3Dpython%26searchType%3D2%26keywordType%3D%22%2C%22identityType%22%3A%22%22%2C%22userType%22%3A%22%22%2C%22isLogin%22%3A%22%E5%90%A6%22%2C%22accountid%22%3A%22%22%2C%22keywordType%22%3A%22%22%7D",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sign": "d2aa6a21d2f06c5b8e91ea95db454634ffa5a4d95889eb9dc72598ca3e3bbb39",
    "user-token;": "",
    "uuid": "addf331892ebfccf1813b1f940169760"
}
cookies = {
    "partner": "www_baidu_com",
    "seo_refer_info_2023": "%7B%22referUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.baidu.com%5C%2Flink%3Furl%3D3s7xZjS8_ptXKIfmTLai5O0tqsxgOIiHmO9qVoBKSN7%26wd%3D%26eqid%3De553a93d008889fa0000000667e13403%22%2C%22referHost%22%3A%22www.baidu.com%22%2C%22landUrl%22%3A%22%5C%2F%22%2C%22landHost%22%3A%22www.51job.com%22%2C%22partner%22%3Anull%7D",
    "privacy": "1742812176",
    "guid": "addf331892ebfccf1813b1f940169760",
    "sajssdk_2015_cross_new_user": "1",
    "Hm_lvt_1370a11171bd6f2d9b1fe98951541941": "1742812178",
    "Hm_lpvt_1370a11171bd6f2d9b1fe98951541941": "1742812178",
    "HMACCOUNT": "287F329C91831B5C",
    "acw_tc": "ac11000117428121844413859e008f34bcfefe38b25162f6bd7e5675b0e929",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22addf331892ebfccf1813b1f940169760%22%2C%22first_id%22%3A%22195c7b36336144d-01d55e52bc15a1c-1b525636-1405320-195c7b363372a3c%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk1YzdiMzYzMzYxNDRkLTAxZDU1ZTUyYmMxNWExYy0xYjUyNTYzNi0xNDA1MzIwLTE5NWM3YjM2MzM3MmEzYyIsIiRpZGVudGl0eV9sb2dpbl9pZCI6ImFkZGYzMzE4OTJlYmZjY2YxODEzYjFmOTQwMTY5NzYwIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22addf331892ebfccf1813b1f940169760%22%7D%2C%22%24device_id%22%3A%22195c7b36336144d-01d55e52bc15a1c-1b525636-1405320-195c7b363372a3c%22%7D",
    "acw_sc__v2": "67e1341b3662d447a374c51fd0b94929c44a033a",
    "nsearch": "jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D",
    "search": "jobarea%7E%60%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FApython%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21",
    "JSESSIONID": "22869EC355ED497B2CCECD2A794C8E7D",
    "ssxmod_itna": "QqROiIwDktD5i=DXtDHD0WNbiQGkDAghMGureS++wAqGNUoDZDiqAPGhDCbRKnrchd5bxx+LWqSDRuPHeGjDKTvzYBxKe4U43xiTD4q07Db4GkDAqiOD7T+qoD4b5GwD0eG+DD4DW+qDUV7T=D7rXgUkNXWq=07TNDmb=uDGQcDitQxivqqCiZl8DqxA3uD7UVWTQDbqDuFa=3cqDL0nnaxB=uDYPHAqHCxBjNNTj3SqixakHoK0ovpYYBt+wxQhDiU7GPDh4YYxMPjz+6xxeqUY4pBi+UOV4DG+wd7vq9HiD===",
    "ssxmod_itna2": "QqROiIwDktD5i=DXtDHD0WNbiQGkDAghMGureS++wDA6954D/3CDFO7DRuKWV8KYkC01i9xkYrYMbR+Q5/jOu1iE4x32fT6xOhQD6GWlhx=NB2r7u9DLqyPOjBg9qmhzQEIuG9e02hQycnbecHtOpnDx9midbuP4xFqBhiCG2xeVxR=5D+5eiiGzcIqeKA46pSbVxKNP8qhKceIZe5rcUWsUZmm58n73OerR3Hj9K9sAZm7dGusdg91GCywzzlvGKIE6ghu5D2DGCh5FcPFGoEhx4FL31OLL5K145KUwy55CeEZw24G9MK=qG7Rstd8yxQakDh2sem7QkienOKfC3Q3SAh5d8ZE7EkwKEFPwdY4HeEeHDd5GFdSogA=M0pdGtYAdGGDheCBBKOeTers0odgkDpLotiz7SKOSaheeVTQlBqzYNxj=Of+uL=tP5QQHi0x3P4jBYVe8sg8lhL5gtXSFYhiGii6gGuRfiq1tqT5jAFcxZOIMOYK47qE8c1ONfF+xetw2hQT1r6+rE5+1+kYaUh4heBYUocKiw1iTRy2isxQyDUh2Oze+ruhZW1B0+iCd5wxLxmhr+Ioyq9CdEo8gniCx2pdEAPD7jNBEZimPCxp44hDFgnmAN1h07jDnjNefq8KUNkl1tezCM1EqzhmzjX/udmPmzAqV0MGXizu5zZPYcL1iLM8eKwLlGu7fIogGYAUq+A8+ixDFqDeu6+UX7x04QjC+XwiDD==="
}
url = "https://we.51job.com/api/job/search-pc"
params = {
    "api_key": "51job",
    "timestamp": "1742812801",
    "keyword": "python",
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
    "pageNum": "4",
    "requestId": "464ff39b3bdace08ba5cc4bd67b7dd7d",
    "keywordType": "",
    "pageSize": "20",
    "source": "1",
    "accountId": "",
    "pageCode": "sou|sou|soulb",
    "scene": "7"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)