FONT_DECRYPT_MAP = {
    'ꙮ': '0',
    'ઊ': '1',
    'સ': '2',
    'ત': '3',
    'ধ': '4',
    'ન': '5',
    'પ': '6',
    'ફ': '7',
    'બ': '8',
    'ભ': '9'
};
import json
import requests

cookies = {
    'sessionid': '05qkt0h731xdpelcd3rw0mdfc0c1usv3',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1743594256,1743929152,1743933972',
    'HMACCOUNT': 'B4428F75A6FDEEFB',
    'v': 'QXp6eHBiS1dkMHgxaVVOaG0taWgxb0gwQzlIck5lQktZdGowSXhhOVNQa0stOUxQUGtXdzc3THB4TEJsMTc0MzkzNjgzNzQ4OQ==',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1743936859',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/17/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    'cookie': 'sessionid=05qkt0h731xdpelcd3rw0mdfc0c1usv3; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1743594256,1743929152,1743933972; HMACCOUNT=B4428F75A6FDEEFB; v=QXp6eHBiS1dkMHgxaVVOaG0taWgxb0gwQzlIck5lQktZdGowSXhhOVNQa0stOUxQUGtXdzc3THB4TEJsMTc0MzkzNjgzNzQ4OQ==; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1743936859',
}
sum_ = 0
for page in range(1,21):
    params = {
        'page': str(page),
    }

    response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/17/data/', params=params, cookies=cookies, headers=headers)

    date_list = json.loads(response.text)["current_array"]

    for date in date_list:
        # 字体解密转换
        decrypted = ''.join(FONT_DECRYPT_MAP[c] for c in date)
        num = int(decrypted)
        print(f"加密值: {date} -> 解密值: {decrypted} -> 数字: {num}")
        sum_ += num
print(f"总数为：{sum_}")