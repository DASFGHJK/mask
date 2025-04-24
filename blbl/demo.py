import requests
import time
import os
import json
from retry import retry
from fake_useragent import UserAgent

@retry( )
def getWeek_json(url,json_path):
    # 随机User-Agent
    random_UA =  UserAgent().random
    # headers信息，添加user-agent和cookies
    headers = {
        "User-Agent": random_UA,
        "referer": "https://www.bilibili.com/",
        "origin": "https://www.bilibili.com/",
        "cookie": "browser_resolution=1440-319; enable_feed_channel=ENABLE; enable_web_push=DISABLE; header_theme_version=CLOSE; home_feed_column=5; bmg_src_def_domain=i1.hdslb.com; b_lsid=D6C59DE8_19657188B9F; CURRENT_FNVAL=2000; sid=6xfom1c9; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU0NzEyODQsImlhdCI6MTc0NTIxMjAyNCwicGx0IjotMX0.iTYXQm-DeBYma5nWPOSnKO8usKusSuGAJ428psXNIQw; bili_ticket_expires=1745471224; bp_t_offset_24509326=1058166902490136576; DedeUserID=24509326; DedeUserID__ckMd5=53ab641ff2f0e8f0; SESSDATA=39550b96%2C1760762893%2C75d83%2A42CjB8V5JoshId-Na2XvYlGrnIStd9GjRj8NJMVkKMyh2xf7QSks1bijH7HPfL2S0KazASVi1YQmVIeVItZnNidmM2QlN3aFMyVDJIZU82eWZmc2g1Vkl0OXhKZGwzcV9TZmg3T2lreW5MLXh3QTlvWXNGeEJZUnp5M1NUUkhycUNoOXpaYWxtVlNnIIEC; bili_jct=6096b464c4c88c9df8f44773a8fbee40; buvid4=93F45CB2-EFC3-0C72-3B90-E955C16D1CE662937-025042112-hbAt18K8GEyCxgU1DP5cpQ%3D%3D; buvid_fp=547e20db14aa9b1f0f51edf5ebf86f0a; bmg_af_switch=1; _uuid=1B3C54EB-54C3-9D64-3168-97DDA6109748F62690infoc; b_nut=1745210862; buvid3=9EB25D7F-07E6-FA6A-29F8-CA59D10FD29162090infoc"
    }
    # 获取响应，转为json格式并保存
    response = requests.get(url=url,headers=headers,timeout=10)
    response_data = response.json()
    with open(json_path, 'w',encoding='utf-8') as f:
        json.dump(response_data, f,ensure_ascii=False)
    # 休眠，确保不会被反爬
    time.sleep(1)



if __name__=='__main__':
    # 官方api
    url='https://api.bilibili.com/x/web-interface/popular/series/one?number={}'
    # 爬虫数据存储路径
    data_folder = './data'
    os.makedirs(data_folder, exist_ok=True)
    # 开始爬虫
    for i in range(217,218):
        URL = url.format(str(i))
        # 每周数据存储路径
        json_fpath = os.path.join(data_folder,'week_{}.json'.format(str(i)))
        getWeek_json(URL,json_fpath)