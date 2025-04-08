import time
import requests
import uuid
session=requests.session()
# 定义榜单类型数组
rank_types = [
    "hot",  # 热门
    "reserve",  # 预约榜
    "new",  # 新品榜
    "action",  # 动作榜
    "strategy",  # 策略榜
    "idle",  # 放置榜
    "single",  # 单机榜
    "casual",  # 休闲榜
    "sandbox_survival",  # 沙盒生存榜
    "management",  # 模拟经营榜
    "unriddle",  # 解谜榜
    "shooter",  # 射击榜
    "multiplayer",  # 多人对战榜
    "acgn",  # 二次元榜单
    "music",  # 音乐节奏榜
    "scenario",  # 剧情榜
    "swordsman",  # 武侠榜
    "otome",  # 女性向榜
    "independent",  # 独立游戏榜
    "roguelike"  # Roguelike榜
]
platform="ios"
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.taptap.cn/top/download?page=2",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
url = "https://www.taptap.cn/webapiv2/app-top/v2/hits"
page=0   #首先从0开始
while True:
    # 生成一个随机的UUID
    time.sleep(2)
    random_uuid = uuid.uuid4()
    params = {
        "from": str(page*10),  #来自每次迭代10页
        "limit": "10",
        "type_name": "reserve",
        "platform": "ios",#Android  ios
        "X-UA": f"V=1&PN=WebApp&LANG=zh_CN&VN_CODE=102&LOC=CN&PLT=PC&DS={platform}&UID={random_uuid}&OS=Mac+OS&OSV=10.15.7&DT=PC"
    }
    response = session.get(url, headers=headers, params=params).json()
    # page+=1
    print(f"正在抓取第{page}页面")
    page+=1
    try:
        app_list=response['data']['list']
        for app in app_list:
            app=app['app']
            title=app['title'] #作品名
            score=app['stat']['rating']['score']   #作品得分
            tag_list=[]   #作品得分
            tags=app['tags']
            for tag in tags:
                tag_list.append(tag['value'])
            print(title,score,tag_list)
    except:
        print('抓取完成')
        break
