import requests

cookies = {
    'ct_tgc': 'cddcac04-31c4-43bf-80ae-add8c2cef170',
    'ct_m_track': 'source_baidubrand-medium_cpt-content_se1268966',
    'ct_m_postId_expries': '1744127999000',
    'ct_m_sid1': '1744128404996-dFOeujObaz',
    'ct_m_sid2': '1744128404996-dFOeujObaz',
    'ct_m_dvc_id': '808097ad892cc48a422f44d46a654ab1',
    'vid': 'bEY9h38CxMfN1zqwAvt7yzoQD4cMj0mm6EILGnxI0c1ZGoXZh4fwFVzvzDfeznzB',
    'Hm_lvt_4b4ce93f1c92033213556e55cb65769f': '1744128406',
    'HMACCOUNT': '87130C7627252F2B',
    'Hm_lpvt_4b4ce93f1c92033213556e55cb65769f': '1744128409',
    'ct_m_pvid': '4',
    'ct_m_cat2_id': '10001.0.3',
    'JSESSIONID': '1utrmq2icn0mm14398uzg7ujd9',
    'ct_m_cat2_time': '1744128549027',
    'ct_m_label_id': '12',
    'ct_m_postId': '25',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://www.ctyun.cn',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.ctyun.cn/h5/auth/login',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'x-ctyun-accesstoken': 'null',
    'x-riskdevicesign': '808097ad892cc48a422f44d46a654ab1',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'ct_tgc=cddcac04-31c4-43bf-80ae-add8c2cef170; ct_m_track=source_baidubrand-medium_cpt-content_se1268966; ct_m_postId_expries=1744127999000; ct_m_sid1=1744128404996-dFOeujObaz; ct_m_sid2=1744128404996-dFOeujObaz; ct_m_dvc_id=808097ad892cc48a422f44d46a654ab1; vid=bEY9h38CxMfN1zqwAvt7yzoQD4cMj0mm6EILGnxI0c1ZGoXZh4fwFVzvzDfeznzB; Hm_lvt_4b4ce93f1c92033213556e55cb65769f=1744128406; HMACCOUNT=87130C7627252F2B; Hm_lpvt_4b4ce93f1c92033213556e55cb65769f=1744128409; ct_m_pvid=4; ct_m_cat2_id=10001.0.3; JSESSIONID=1utrmq2icn0mm14398uzg7ujd9; ct_m_cat2_time=1744128549027; ct_m_label_id=12; ct_m_postId=25',
}

data = {
    'id': '2320141446@qq.com',
    'loginFree': 'false',
    'loginType': 'password',
    'newMode': 'true',
    'other': '2320141446%40qq.com',
    'password': 'Fud/yLcYOBI=',   #主要逆向参数
}

response = requests.post('https://www.ctyun.cn/gw/auth/Login', cookies=cookies, headers=headers, data=data)
print(response.text)