import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://huaban.com/discovery/illustration",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "user_device_id": "ce0f404e8f4645dc926009fee502d525",
    "user_device_id_timestamp": "1742625887918",
    "fd_id": "982b4b61114e230734a15884c4a9410a",
    "fd_id_timestamp": "1742625893127",
    "Hm_lvt_d4a0e7c3cd16eb58a65472f40e7ee543": "1742625888,1743492784",
    "HMACCOUNT": "B4428F75A6FDEEFB",
    "canary_uuid": "ce088a99c3285eaf8533524bdc7bb134",
    "sid": "s%3AlmfSfXecwfCrz-g2jt9W6uhoAKD-wA_3.X1fIf8oiOx8rSgbbAQDZqA5r3m4z90ONXozW%2F4UJ4Mg",
    "acw_tc": "0b32825217436669859805861e204d0f44db6c4dfcb712b6be8b34020b8f2e",
    "Hm_lpvt_d4a0e7c3cd16eb58a65472f40e7ee543": "1743666986",
    "huaban-page-setting": "{%22columnType%22:%22full%22%2C%22limit%22:5}",
    "feature_page": "%257B%2522all%2522%253A2%252C%2522web_app_icon%2522%253A2%252C%2522design%2522%253A2%252C%2522illustration%2522%253A2%257D"
}
url = "https://huaban.com/v3/pins/recommend/winnow"
params = {
    "page_num": "1",
    "page_size": "40",
    "category": "illustration",
    "fields": "pins:PIN"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)