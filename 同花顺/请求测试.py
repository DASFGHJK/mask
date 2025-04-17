import requests
from lxml import etree
cookies = {
    'log': '',
    'Hm_lvt_722143063e4892925903024537075d0d': '1744597832',
    'Hm_lpvt_722143063e4892925903024537075d0d': '1744597832',
    'HMACCOUNT': '87130C7627252F2B',
    'Hm_lvt_929f8b362150b1f77b477230541dbbc2': '1744597832',
    'Hm_lpvt_929f8b362150b1f77b477230541dbbc2': '1744597832',
    'Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1': '1744597832',
    'Hm_lvt_60bad21af9c824a4a0530d5dbf4357ca': '1744597871',
    'Hm_lvt_f79b64788a4e377c608617fba4c736e2': '1744597871',
    'Hm_lpvt_60bad21af9c824a4a0530d5dbf4357ca': '1744597885',
    'Hm_lpvt_f79b64788a4e377c608617fba4c736e2': '1744597885',
    'Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1': '1744597885',

    #需要逆向的参数
    # 'v': 'A1KJ6kAdYRHWhJ3tP6n3NBu6pRMxY1T_iGRLGBytfE7w0vyNBPOmDVj3mjXv',
}

headers = {
    'Accept': 'text/html, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://data.10jqka.com.cn/market/zdfph/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'hexin-v': 'A1KJ6kAdYRHWhJ3tP6n3NBu6pRMxY1T_iGRLGBytfE7w0vyNBPOmDVj3mjXv',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'log=; Hm_lvt_722143063e4892925903024537075d0d=1744597832; Hm_lpvt_722143063e4892925903024537075d0d=1744597832; HMACCOUNT=87130C7627252F2B; Hm_lvt_929f8b362150b1f77b477230541dbbc2=1744597832; Hm_lpvt_929f8b362150b1f77b477230541dbbc2=1744597832; Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1=1744597832; Hm_lvt_60bad21af9c824a4a0530d5dbf4357ca=1744597871; Hm_lvt_f79b64788a4e377c608617fba4c736e2=1744597871; Hm_lpvt_60bad21af9c824a4a0530d5dbf4357ca=1744597885; Hm_lpvt_f79b64788a4e377c608617fba4c736e2=1744597885; Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1=1744597885; v=A1KJ6kAdYRHWhJ3tP6n3NBu6pRMxY1T_iGRLGBytfE7w0vyNBPOmDVj3mjXv',
}

response = requests.get('https://data.10jqka.com.cn/market/zdfph/field/zdf/order/desc/ajax/1/free/1/page/2/free/1/', headers=headers)
res=etree.HTML(response.text)
title=res.xpath("//a[@class='J_showCanvas']/text()")