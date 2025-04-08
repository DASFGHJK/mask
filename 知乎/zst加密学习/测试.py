import requests
import execjs

def get_96(arg):
    with open('zst96.js', 'r') as f:
        js_code_str = f.read()
    # 显式指定 Node.js 运行时
    js_code = execjs.compile(js_code_str)
    zst_96 = js_code.call('get_zst96')  # 传递参数
    return zst_96

headers = {
    "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZK0Y0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTF6eq3BL9cUHLBTLLrc3Ytw2f2wxyd9SmXJxG8rxsiBLy6U20U9eqrLoL24eTV0x0IcH8QqeMVggBTUxqfbomUvLOkwFCfTC_Jig_o7H_gu3GnUL_pJHmCgofg9XYEqYLSMeBsDSu3UOm1TgMab9LVvc8xBF8M8tKQcrqJ9C9JR2_kvNCCg_zhCHBAqFfD9NqhvLLQvSKBUYM3CoVxhVqbMSu293MJwoCc4CYLGomBDo1GBOKaBS9nwLpevNGtwt0fwH0xhN_b7F0cbXMrJXKbUO9oBoC6wVMwJSLww2s"
}

# 调用函数并传递参数
print(headers['x-zst-81'])
print(get_96(headers['x-zst-81']))
