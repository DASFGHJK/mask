import hashlib
import time
import execjs
import requests

session = requests.Session()
headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'referer': 'https://mail.sohu.com/',
    'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
}
def get_initial_cookies():

    params = {
        'callback': 'passport4014_cb1741443691223',
        '_': str(time.time() * 1e3),
    }
    response = session.get('https://v4.passport.sohu.com/i/cookie/common', params=params, headers=headers)
    cookies = response.cookies.get_dict()
    print(cookies)
    return cookies

def get_jv(cookies):
    url = "https://v4.passport.sohu.com/i/jf/code"
    params = {
        "callback": "passport4014_cb1741443691225",
        "type": "0",
        "_": str(time.time() * 1e3)
    }
    response = session.get(url, headers=headers, params=params, cookies=cookies)
    jsFunck = response.text.replace('passport4014_cb1741443691225("', '').replace('")', '')
    print(jsFunck)
    jv = execjs.compile("document = {cookie: ''};" + '\n' + jsFunck + '\n' + "function getjv() {return document.cookie.split(';')[0].split('=')[1]};").call('getjv')
    print(jv)
    cookies["jv"] = jv
    return cookies
def login(user,password,cookies):
    data = {
        'userid': f'{user}@sohu.com',
        'password': hashlib.md5(password.encode()).hexdigest(),
        'appid': '101305',
        'nf': '1',
    }

    response = requests.post('https://v4.passport.sohu.com/i/login/101305', cookies=cookies, headers=headers, data=data).json()
    print(response)
    # pass
# 使用示例
initial_cookies = get_initial_cookies()
final_cookies = get_jv(initial_cookies)
print(final_cookies)
login("123","123456",final_cookies)