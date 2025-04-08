import requests
import base64
from curl_cffi import requests
# requests=requests.session()

def geetest_click(click_xy):
    """
    处理极验点选的坐标还原
    :param click_xy: 点选的坐标字符串，格式为 "x1,y1|x2,y2|..."
    :return: 处理后的坐标字符串，格式为 "x1_y1,x2_y2,..."
    """
    click_point_array = click_xy.split('|')
    click_point_true = []
    for item in click_point_array:
        x, y = item.split(',')
        point = f"{int(int(x) / 344 * 10000)}_{int(int(y) / 344 * 10000)}"
        click_point_true.append(point)
    click_true_str = ','.join(click_point_true)
    return click_true_str


def verify(PWD=None):
    """
    验证极验点选
    :return: 验证结果的 JSON 数据
    """
    with open('output.jpg', 'rb') as f:
        b = base64.b64encode(f.read()).decode()  # 图片二进制流 base64 字符串

    url = "http://api.jfbym.com/api/YmServer/customApi"
    data = {
        # 关于参数，一般来说有3个；不同类型 id 可能有不同的参数个数和参数名，找客服获取
        "token": PWD.gettk(),
        "type": "30103",
        "image": b,
        'extra': 'click'
    }
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.request("POST", url, headers=headers, json=data).json()
    return response['data']['data']


def get_captcha():
    params = {
        "source": "main-fe-header",
        "t": "0.5459457769064671",
        "web_location": "333.1007"
    }
    url = "https://passport.bilibili.com/x/passport-login/captcha"
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "origin": "https://www.bilibili.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.bilibili.com/",
        "sec-ch-ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
    }
    cookies = {
        "buvid3": "5CC9A686-BA33-4811-606A-D617F8660FDD24592infoc",
        "b_nut": "1735642524",
        "_uuid": "98A94852-10B1A-1074F-3E109-55C593966A31024929infoc",
        "enable_web_push": "DISABLE",
        "buvid4": "8C9C297A-3CC0-44FD-5D72-551B0D8A944B25855-024123110-7BxyT+4jvPeHiCU309Qurg==",
        "header_theme_version": "CLOSE",
        "rpdid": "|(J~lu)JJYRl0J'u~JlYRkl)m",
        "enable_feed_channel": "DISABLE",
        "CURRENT_QUALITY": "80",
        "fingerprint": "2b287f5d2561f3f5483c33e5d6092e7b",
        "buvid_fp_plain": "undefined",
        "buvid_fp": "2b287f5d2561f3f5483c33e5d6092e7b",
        "CURRENT_FNVAL": "4048",
        "bsource": "search_baidu",
        "bili_ticket": "eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDExNzExNzQsImlhdCI6MTc0MDkxMTkxNCwicGx0IjotMX0.sMNInErqbK-49t2fxAZUg9qHHBeHGQ_COIde0_1A8No",
        "bili_ticket_expires": "1741171114",
        "bp_t_offset_3493110086634028": "1039698087850803200",
        "sid": "7oenptpi",
        "b_lsid": "1052F2A76_1955C054A2F",
        "home_feed_column": "5",
        "browser_resolution": "1470-187"
    }

    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()
    return response['data']['geetest']['challenge'], response['data']['geetest']['gt']


def get_geetest_type(gt):


    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.bilibili.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Storage-Access": "active",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    url = "https://api.geetest.com/gettype.php"
    params = {
        "gt": gt,
        # "callback": "geetest_1741016898017"
    }
    response = requests.get(url, headers=headers, params=params)

    print(response.text)
    print(response)
def thired_req(gt,challenge):

    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.bilibili.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Storage-Access": "active",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    url = "https://api.geetest.com/get.php"
    params = {
        "is_next": "true",
        "type": "click",
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "https": "false",
        "protocol": "https://",
        "offline": "false",
        "product": "embed",
        "api_server": "api.geetest.com",
        "isPC": "true",
        "autoReset": "true",
        "width": "100%",
        "callback": "geetest_1741016892358"
    }
    response = requests.get(url, headers=headers, params=params)

    print(response.text)
    print(response)
if __name__ == '__main__':
    gt, challege = get_captcha()
    print(gt)
    get_geetest_type(str(gt))
    thired_req(gt,challege)
