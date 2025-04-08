import re
import time

import ddddocr
import requests
import execjs
import json

from 网易易盾.beisaier import BezierTrajectoryGenerator

def main():
    def get_cb():
        with open('网易易盾_cb+data.js', 'r') as f:
            js_code = f.read()
        ctx = execjs.compile(js_code)
        cb = ctx.call('get_cb')
        return cb
    def ddd_cor(silder_bytes,backgrond_bytes):
        det=ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
        res=det.slide_match(silder_bytes,backgrond_bytes)
        # print(f'滑动距离为:{res['target'][0]}')
        print(res)
        return res

    cb = get_cb()
    # print(cb)
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    url = "https://c.dun.163.com/api/v3/get"
    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "dt": "oJZBXaOLuINAVlVUFROXZbDIIBHPk/AD",
        "irToken": "vECBYH0FwDpEYhEUBBbSJ2T0DhUkrzeb",
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "fp": "aM\\izky3OWdR+3hC1nGsXI7Rd6cGR8MLBfa6qMWzNHWKuvTCWGGc4TMTBzJOf2wHPOmx0/ZTRgBZuXLWSbQjspzl8xfxmiSyWcN/bDUmGBoJjqW9ReABdkMk1DnRS7sOIyjVqT4M2/7U/SBmUMO2NOmXU7ZD7z\\qNwdlYgtS/+zjuw6v:1740740860999",
        "https": "true",
        "type": "2",
        "version": "2.28.0",
        "dpr": "2",
        "dev": "1",
        "cb": str(cb),
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "lang": "zh-CN",
        "sdkVersion": "",
        "loadVersion": "2.5.3",
        "iv": "4",
        "user": "",
        "width": "320",
        "audio": "false",
        "sizeType": "10",
        "smsVersion": "v3",
        "token": "77416a9b35974e30895891b5c8eb9d74",
        "callback": "__JSONP_fffbo2l_2"
    }
    response = requests.get(url, headers=headers, params=params)
    json_match = re.search(r'\({(.*)}\);', response.text)

    json_str = '{' + json_match.group(1) + '}'
    # 将JSON字符串解析为Python字典
    data = json.loads(json_str)

    # 提取背景信息和拼图信息
    bg_images = data['data']['bg']
    front_images = data['data']['front']
    token_=data['data']['token']
    # print('token_值为',token_)
    # print("背景信息:", bg_images[1])
    bg_res=requests.get(bg_images[1],headers=headers).content
    with open('bg.jpg','wb') as f:
        f.write(bg_res)
    # print("拼图信息:", front_images[1])
    front_res=requests.get(front_images[1],headers=headers).content
    with open('full.jpg','wb') as f:
        f.write(front_res)
    res_x=ddd_cor(front_res,bg_res)['target'][0]
    res_x=int(res_x*(320/480))
    # print("移动x轴的距离为:",res_x)
    with open('网易易盾_cb+data.js','r') as f:
        js_code=f.read()
    ctx=execjs.compile(js_code)
    generator = BezierTrajectoryGenerator(distance=res_x)  #进行误差
    gj = generator.generate_trajectory()   #生成贝塞尔曲线
    # print(gj)
    data=ctx.call('get_data',gj,token_,str(res_x)+'px')
    # print(data)


    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    url = "https://c.dun.163.com/api/v3/check"
    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "dt": "oJZBXaOLuINAVlVUFROXZbDIIBHPk/AD",
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "token": str(token_),
        "data": str(data),
        "width": "320",
        "type": "2",
        "version": "2.28.0",
        "cb": str(cb),
        "user": "",
        "extraData": "",
        "bf": "0",
        "runEnv": "10",
        "sdkVersion": "",
        "loadVersion": "2.5.3",
        "iv": "4",
        "callback": "__JSONP_62cw41t_3"
    }
    # time.sleep(2)
    response = requests.get(url, headers=headers, params=params)

    print(response.text)
    # print(response)

if __name__ == '__main__':
    for i in range(10):
        main()