import requests
import execjs

def get_96(arg):
    with open('zst96.js', 'r') as f:

        js_code = execjs.compile(f.read())
    zst_96 = js_code.call('get_zst96')
    print(zst_96)
    # return zst_96

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.zhihu.com/",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-api-version": "3.0.53",
    "x-requested-with": "fetch",
    "x-zse-93": "101_3_3.0",
    "x-zse-96": "2.0_YF6=LUZZMd7iPuiH/apgqhr+Y=VH1ocyheULl0cxLP9iNDSNifCls/2xZ+7jPjfb",
    "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZK0Y0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTF6eq3BL9cUHLBTLLrc3Ytw2f2wxyd9SmXJxG8rxsiBLy6U20U9eqrLoL24eTV0x0IcH8QqeMVggBTUxqfbomUvLOkwFCfTC_Jig_o7H_gu3GnUL_pJHmCgofg9XYEqYLSMeBsDSu3UOm1TgMab9LVvc8xBF8M8tKQcrqJ9C9JR2_kvNCCg_zhCHBAqFfD9NqhvLLQvSKBUYM3CoVxhVqbMSu293MJwoCc4CYLGomBDo1GBOKaBS9nwLpevNGtwt0fwH0xhN_b7F0cbXMrJXKbUO9oBoC6wVMwJSLww2s"
}

url = "https://www.zhihu.com/api/v3/feed/topstory/recommend"
params = {
    "action": "down",
    "ad_interval": "-10",
    "after_id": "23",
    "desktop": "true",
    "end_offset": "23",
    "page_number": "5",
    "session_token": "97eeba1e6b266ac41e642ab2ff09a980"
}

print(headers['x-zst-81'])
get_96(headers['x-zst-81'])

# response = requests.get(url, headers=headers, params=params)
# print(response.text)
# print(response)
