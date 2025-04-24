import requests

url = "https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd"
params = {
    "web_location": "1430650",
    "y_num": "4",
    "fresh_type": "4",
    "feed_version": "V8",
    "fresh_idx_1h": "4",
    "fetch_row": "13",
    "fresh_idx": "4",
    "brush": "4",
    "homepage_ver": "1",
    "ps": "12",
    "last_y_num": "5",
    "screen": "1470-175",
    "seo_info": "",
    "last_showlist": "av_114375885067296,av_114350870235871,av_114239234639544,av_114262974464029,av_114330267813041,av_114370080150821,ad_5614,av_114232171433697,av_114316745378513,av_114369157399690;av_114376874923505,av_114374576439485,av_114238043457869,av_114335166763749,av_114300219884990,av_5637,av_114274768787097,av_114341861000788,av_114284700899067,av_114114613482956,live_8178490,av_114337062589287;av_114322768400497,av_114357413350010,av_114370214368842,av_114251012245083,av_114263695818892,av_5637,av_114357010700201,av_114284969396622,av_114296746935778,av_114370365361123,av_114257471476384,av_114273644713549;av_114305471155907,av_114281026683071,av_114330485918004,av_114307417314888,av_n_114318557447798,av_114268343114183,av_114256011854825,live_31781125,av_114306930706910,av_114258260001902,av_114211082540622,av_114279852344853",
    "last_clicklist": "av_114375885067296,av_114350870235871",
    "uniq_id": "1681625159086",
    "w_rid": "9bc7c9b8d50fd6bc0fdd80f5c56c51c4",
    "wts": "1745303216"
}
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "origin": "https://www.bilibili.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.bilibili.com/",
    "sec-ch-ua": '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
cookies = {
    "buvid3": "5CC9A686-BA33-4811-606A-D617F8660FDD24592infoc",
    "b_nut": "1735642524",
    "_uuid": "98A94852-10B1A-1074F-3E109-55C593966A31024929infoc",
    "enable_web_push": "DISABLE",
    "buvid4": "8C9C297A-3CC0-44FD-5D72-551B0D8A944B25855-024123110-7BxyT+4jvPeHiCU309Qurg==",
    "header_theme_version": "CLOSE",
    "rpdid": "|(J~lu)JJYRl0J'u~JlYRkl)m",
    "CURRENT_QUALITY": "80",
    "buvid_fp_plain": "undefined",
    "DedeUserID": "3493110086634028",
    "DedeUserID__ckMd5": "d7bbe035e07d6012",
    "enable_feed_channel": "ENABLE",
    "fingerprint": "098d9d1678dedf9b183c43b3ef4a94ff",
    "buvid_fp": "098d9d1678dedf9b183c43b3ef4a94ff",
    "bp_t_offset_3493110086634028": "1050380410250330112",
    "CURRENT_FNVAL": "4048",
    "PVID": "1",
    "SESSDATA": "b949c2cd%2C1760794048%2C5467e%2A41CjDcHKBF6iS3F2edo8bcPwDku4S7bvyxTAQmUuAX0E5s8lbqlFcQnTs6e-MS2gKRdtQSVkpESVZqeUFQSEdBOERHRklCcW4ySHdiazd4eFJES0NteDdsazUxYWVGSXYtaHNvRUc0a2Y3a2EyTUJZQmFaQVdsUjZ0LW1vM2N0VmxDOGoyTDdOeDR3IIEC",
    "bili_jct": "546113693bae003af6564036a1283a06",
    "bili_ticket": "eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU1MDU4ODksImlhdCI6MTc0NTI0NjYyOSwicGx0IjotMX0.mx4K9KaTd3Lba7PflrUk0dYRNLjIPR2G6rsDjdF3XIU",
    "bili_ticket_expires": "1745505829",
    "b_lsid": "10483A35D_1965C2A01D8",
    "bsource": "search_baidu",
    "home_feed_column": "5",
    "sid": "4xyzjmdr",
    "browser_resolution": "1470-175"
}

response = requests.get(url, headers=headers, params=params, cookies=cookies)

print(response.status_code)
print(response.json())