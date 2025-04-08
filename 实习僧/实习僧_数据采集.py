import requests

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.shixiseng.com/interns?keyword=python&city=%E5%85%A8%E5%9B%BD&type=intern",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "__jsluid_s": "e9526c3a46e429a35f4ec193ab609b27",
    "utm_source_first": "sem-baidu-B-pc-guanwang-60",
    "utm_source": "sem-360-pc-pinpai-5",
    "utm_campaign": "360sem",
    "Hm_lvt_03465902f492a43ee3eb3543d81eba55": "1742812120,1742878328",
    "HMACCOUNT": "287F329C91831B5C",
    "position": "pc_search_syss",
    "Hm_lpvt_03465902f492a43ee3eb3543d81eba55": "1742878938"
}
f = {  # 字体映射文件
    "&#xf876": "0",
    "&#xe393": "1",
    "&#xe8e9": "2",
    "&#xe7ce": "3",
    "&#xe9c3": "4",
    "&#xe35f": "5",
    "&#xf375": "6",
    "&#xe546": "7",
    "&#xea88": "8",
    "&#xe7bd": "9",
}

url = "https://www.shixiseng.com/app/interns/search/v2"
params = {
    "build_time": "1742878948584",
    "page": "2",
    "type": "intern",
    "keyword": "python",
    "area": "",
    "months": "",
    "days": "",
    "degree": "",
    "official": "",
    "enterprise": "",
    "salary": "-0",
    "publishTime": "",
    "sortType": "",
    "city": "全国",
    "internExtend": ""
}

try:
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    # response.raise_for_status()  # 检查请求是否成功
    # response=response.encoding('utf-8')
    html_data = response.text

    # 替换字体映射
    for i, j in f.items():
        html_data = html_data.replace(i, j)

    # 将Unicode字符串转换为UTF-8编码的字节串，然后解码回字符串
    utf8_data = html_data.encode('utf-8').decode('utf-8')

    print(utf8_data)

except requests.exceptions.RequestException as e:
    print(f"请求错误: {e}")
except Exception as e:
    print(f"发生错误: {e}")
