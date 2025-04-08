import time
import requests
import uuid
import pandas as pd
from openpyxl import Workbook

session = requests.session()

# 定义榜单类型数组
rank_types = [
    ("hot", "热门"),
    ("reserve", "预约榜"),
    ("new", "新品榜"),
    ("action", "动作榜"),
    ("strategy", "策略榜"),
    ("idle", "放置榜"),
    ("single", "单机榜"),
    ("casual", "休闲榜"),
    ("sandbox_survival", "沙盒生存榜"),
    ("management", "模拟经营榜"),
    ("unriddle", "解谜榜"),
    ("shooter", "射击榜"),
    ("multiplayer", "多人对战榜"),
    ("acgn", "二次元榜单"),
    ("music", "音乐节奏榜"),
    ("scenario", "剧情榜"),
    ("swordsman", "武侠榜"),
    ("otome", "女性向榜"),
    ("independent", "独立游戏榜"),
    ("roguelike", "Roguelike榜")
]


def get_user_choice():
    """获取用户选择"""
    # 平台选择
    print("请选择平台：")
    print("1. iOS\n2. Android")
    platform_choice = input("请输入数字选择（默认iOS）: ") or "1"
    platform = "ios" if platform_choice == "1" else "android"

    # 游戏类型选择
    print("\n请选择游戏类型：")
    for idx, (_, chinese) in enumerate(rank_types, 1):
        print(f"{idx}. {chinese}")
    type_choice = input("请输入数字选择（默认预约榜）: ") or "2"
    selected_type = rank_types[int(type_choice) - 1][0]

    return platform, selected_type


def main():
    platform, selected_type = get_user_choice()

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
    page = 0
    all_data = []

    while True:
        time.sleep(3)
        random_uuid = uuid.uuid4()
        if platform=='ios':
            params = {
                "from": str(page * 10),
                "limit": "10",
                "type_name": selected_type,
                "platform": platform,
                "X-UA": f"V=1&PN=WebApp&LANG=zh_CN&VN_CODE=102&LOC=CN&PLT=PC&DS={platform}&UID={random_uuid}&OS=Mac+OS&OSV=10.15.7&DT=PC"
            }
        else:
            #请求体
            params = {
                "from": str(page * 10),
                "limit": "10",
                "type_name": selected_type,
                "X-UA": f"V=1&PN=WebApp&LANG=zh_CN&VN_CODE=102&LOC=CN&PLT=PC&DS={platform}&UID={random_uuid}&OS=Mac+OS&OSV=10.15.7&DT=PC"
            }

        try:
            response = session.get(url, headers=headers, params=params).json()

            print(f"正在抓取第{page + 1}页")

            app_list = response['data']['list']
            if not app_list:
                break

            for app in app_list:
                try:
                    app_info = app['app']
                except:
                    app_info=app['craft']

                try:
                    score = app_info['stat']['rating']['score']
                except:
                    score = str(app_info['stat']['vote_up_count']) + "赞"

                data = {
                    "作品名": app_info['title'],
                    "评分": score,
                    "标签": ", ".join([tag['value'] for tag in app_info['tags']]),
                    "平台": platform.upper(),
                    "榜单类型": next((chinese for eng, chinese in rank_types if eng == selected_type), "")
                }

                all_data.append(data)

            page += 1

        except Exception as e:
            if page<10 :
                pass
            print(app_info)
            print(f'抓取完成，错误信息：{str(e)}')
            break


    # 保存到Excel
    if all_data:
        df = pd.DataFrame(all_data)
        filename = f"TapTap数据_{platform}_{selected_type}.xlsx"
        df.to_excel(filename, index=False, engine='openpyxl')
        print(f"数据已保存到 {filename}")
    else:
        print("未获取到有效数据")


if __name__ == "__main__":
    main()
