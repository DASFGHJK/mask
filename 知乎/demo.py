import requests
import json


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://www.zhihu.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.zhihu.com/",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "x-requested-with": "fetch",
    "x-xsrftoken": "c87b9628-3c53-46fb-aca7-2c0bbfac0ac5",
    "x-zse-93": "101_3_3.0",
    "x-zse-96": "2.0_XHHrq8xwxpCHzTIFhzTtZeZ0bAgfMdB2gyklfWjS1w/eXRONa1DYZTPMB1kKkVq6",
    "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZB0Y0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTFeV0P9cMeCXydbxC1GeCyupVIu2fx9t9o0U1LgY_TUwYBMxfQJ90QR3sfceTV4NCqU3mhuC12hpO0gYfouHOg9F8oBL0kvemyqe8QefBJGFmtBxqYuOLeip9oMpKmGLmPUxOqcSMFwOMKLeC6ucYgGHV-gxY79xL3vH8CU28_u2_69tmVg_zqwYBVDOfHrL9ncVBHgcLQBeYKRCCAg9LZvNKkuY9cuc9kBemXvOKPuYOfGSVoug1cGc1uq28uqC_ZJcG3htLQALB-JO_YwOfb8S_CUL9fXHMCJSC6QSs"
}
url = "https://www.zhihu.com/api/v4/commercial/ecommerce"
data = {
    "urls": [
        "https://xg.zhihu.com/plugin/e13d09961295642f4b0eb17f7eefee7f?BIZ=ECOMMERCE",
        "https://xg.zhihu.com/plugin/e13d09961295642f4b0eb17f7eefee7f?BIZ=ECOMMERCE",
        "https://xg.zhihu.com/plugin/e13d09961295642f4b0eb17f7eefee7f?BIZ=ECOMMERCE"
    ],
    "type": "article",
    "os": "other",
    "url_token": "14669517797"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)