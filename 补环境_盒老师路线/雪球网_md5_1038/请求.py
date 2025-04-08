import requests
import execjs
from loguru import logger
def get_sign():
    with open('8705.js','r') as f:
        js_code=f.read()
        ctx=execjs.compile(js_code)
    result=ctx.call('get_md5')
    return result
cookies = {
    'cookiesu': '461742740048986',
    'device_id': '0cc390cea1683b6beba772498d7ca4ea',
    'smidV2': '202503232227302bcd228e8a9920beec53b6ef61f3cfbf004311f17e0284bd0',
    's': 'cn11zlk9aa',
    'xq_is_login': '1',
    'u': '5021931700',
    'xq_a_token': '60e8abe239d255db5c12f67e0d1cab4e54b62548',
    'xqat': '60e8abe239d255db5c12f67e0d1cab4e54b62548',
    'xq_id_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjUwMjE5MzE3MDAsImlzcyI6InVjIiwiZXhwIjoxNzQ2NjMwNjA1LCJjdG0iOjE3NDQwMzg2MDU0MTYsImNpZCI6ImQ5ZDBuNEFadXAifQ.mK7RAiX5x5S867mPVmVqmK6mERS-38tSbN6h0ED_9iBGFeRRlv-Jhh0-boGjp9Z-bfPPeT6o9_MCxpp-tX9YsX1eQxiSggJ4XLGzlC1L2_QC6fGfiMmGWqPrdrmQK_kFFjk9VhbeK-O63RYMb0CdvOtvGW58sAwFAhlo7109NQCLbA5laKCNTrMsVXdSQZMJVSFw881QO1NCZVoZNPJe9Z6ZxaZHQmigEde7didWyk9jxAaGAolb6EfFo-vQQiM1yAzVasH-tDMDOk_LmMS3Kw0SsOicH8J3qzO9_dtwkQoK7QXjfV82u-UyEJdbrWP8pgV0sR5xZcvquu-4qRvYhA',
    'xq_r_token': 'f97a4ff080603a0b10edc7855326107f422780e2',
    'Hm_lvt_1db88642e346389874251b5a1eded6e3': '1743570116,1744038606,1744042156,1744077221',
    'HMACCOUNT': 'B4428F75A6FDEEFB',
    'acw_tc': '0a27a9a017440796574722140e0037b562c72b03b37cca895226c761c9be75',
    '.thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7': 'lIeBBQZcI7AkHZAddWXfT3veEabRa2sC5nwm1ELcLKbUI//7licsnKvuDIeYNZTF1EXciTsUnuaQnRnyvnxqmw%3D%3D',
    'is_overseas': '0',
    'Hm_lpvt_1db88642e346389874251b5a1eded6e3': '1744080763',
    'ssxmod_itna': 'iqUxRD0D2DBD9iCG0WGCDcDKqQwupxYux0QDXDUqAQD2DIqe7=GFQDCOLFxjWh77Dxqer9A00pbkQ0qDs3i4iNDAoq0iDCfmjx4gxx2PPFC8GiPPl3GGoK5t=b0gpck70CuG=tau/+wbVxiTbmxDoxGkDiH3D0FoQW4Dx1PD5xDTDWeDGDD3r4DCsR73D0+ITzgIxIb+b0AIDYa354b3DYy6DAuEhtfIxUhEDWch6lO3ODi8wmC3GAoDF1kdoq0k54i3QrOcaq0O/+7KcnoA+I49or54p0UxizhTP2iPDc2DpCmrcMirY1VDf0K4RP9DN854O5DG3saDhBkD3BNCMkhMiwMrgdzKY+Q2DQ2x9xohOYY7Y301l05DrYeGDICGpB4aA4tAD5OoUL44D',
    'ssxmod_itna2': 'iqUxRD0D2DBD9iCG0WGCDcDKqQwupxYux0QDXDUqAQD2DIqe7=GFQDCOLFxjWh77Dxqer9A00pbkQW4DWpQWhv+KDFrhwdWh4GNO17ipK4fP5nZ4B2qUnaxc2FCCzukRIp=chFRKSSGUHm6rHKDAx96PC3jx7PZH+WEyKYjp4qWyKP6ahhpoOQWoGF+YGn27ph17IkI3sA+vL54MfHKAbkE5=4FoCI8K7KB96S6BUnpc64Mfk4NYuMzA0ZE9PkiGaQChqpGioCkDqk7FiozhgaUB9q0=MdcuNx=exYG0mjy=/CdD',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://xueqiu.com/?md5__1038=QqGxcDnDyiitnD05o4%2BrhieDteG%3DtY%3DzF4D',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'elastic-apm-traceparent': '00-e3fd933e14690844b05849875f2a8de3-f5ffbcf6ba1219dd-00',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'cookiesu=461742740048986; device_id=0cc390cea1683b6beba772498d7ca4ea; smidV2=202503232227302bcd228e8a9920beec53b6ef61f3cfbf004311f17e0284bd0; s=cn11zlk9aa; xq_is_login=1; u=5021931700; xq_a_token=60e8abe239d255db5c12f67e0d1cab4e54b62548; xqat=60e8abe239d255db5c12f67e0d1cab4e54b62548; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjUwMjE5MzE3MDAsImlzcyI6InVjIiwiZXhwIjoxNzQ2NjMwNjA1LCJjdG0iOjE3NDQwMzg2MDU0MTYsImNpZCI6ImQ5ZDBuNEFadXAifQ.mK7RAiX5x5S867mPVmVqmK6mERS-38tSbN6h0ED_9iBGFeRRlv-Jhh0-boGjp9Z-bfPPeT6o9_MCxpp-tX9YsX1eQxiSggJ4XLGzlC1L2_QC6fGfiMmGWqPrdrmQK_kFFjk9VhbeK-O63RYMb0CdvOtvGW58sAwFAhlo7109NQCLbA5laKCNTrMsVXdSQZMJVSFw881QO1NCZVoZNPJe9Z6ZxaZHQmigEde7didWyk9jxAaGAolb6EfFo-vQQiM1yAzVasH-tDMDOk_LmMS3Kw0SsOicH8J3qzO9_dtwkQoK7QXjfV82u-UyEJdbrWP8pgV0sR5xZcvquu-4qRvYhA; xq_r_token=f97a4ff080603a0b10edc7855326107f422780e2; Hm_lvt_1db88642e346389874251b5a1eded6e3=1743570116,1744038606,1744042156,1744077221; HMACCOUNT=B4428F75A6FDEEFB; acw_tc=0a27a9a017440796574722140e0037b562c72b03b37cca895226c761c9be75; .thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7=lIeBBQZcI7AkHZAddWXfT3veEabRa2sC5nwm1ELcLKbUI//7licsnKvuDIeYNZTF1EXciTsUnuaQnRnyvnxqmw%3D%3D; is_overseas=0; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1744080763; ssxmod_itna=iqUxRD0D2DBD9iCG0WGCDcDKqQwupxYux0QDXDUqAQD2DIqe7=GFQDCOLFxjWh77Dxqer9A00pbkQ0qDs3i4iNDAoq0iDCfmjx4gxx2PPFC8GiPPl3GGoK5t=b0gpck70CuG=tau/+wbVxiTbmxDoxGkDiH3D0FoQW4Dx1PD5xDTDWeDGDD3r4DCsR73D0+ITzgIxIb+b0AIDYa354b3DYy6DAuEhtfIxUhEDWch6lO3ODi8wmC3GAoDF1kdoq0k54i3QrOcaq0O/+7KcnoA+I49or54p0UxizhTP2iPDc2DpCmrcMirY1VDf0K4RP9DN854O5DG3saDhBkD3BNCMkhMiwMrgdzKY+Q2DQ2x9xohOYY7Y301l05DrYeGDICGpB4aA4tAD5OoUL44D; ssxmod_itna2=iqUxRD0D2DBD9iCG0WGCDcDKqQwupxYux0QDXDUqAQD2DIqe7=GFQDCOLFxjWh77Dxqer9A00pbkQW4DWpQWhv+KDFrhwdWh4GNO17ipK4fP5nZ4B2qUnaxc2FCCzukRIp=chFRKSSGUHm6rHKDAx96PC3jx7PZH+WEyKYjp4qWyKP6ahhpoOQWoGF+YGn27ph17IkI3sA+vL54MfHKAbkE5=4FoCI8K7KB96S6BUnpc64Mfk4NYuMzA0ZE9PkiGaQChqpGioCkDqk7FiozhgaUB9q0=MdcuNx=exYG0mjy=/CdD',
}
result=get_sign()
_=result['t']
md5__1038=result['md5__1038']
print(md5__1038)
params = {
    'source': 'hot',
    'max_id': '330632664',
    'last_id': '330632664',
    'page': '4',
    '_': str(_),
    'md5__1038': str(md5__1038),
}

response = requests.get('https://xueqiu.com/statuses/hot/listV3.json', params=params, cookies=cookies, headers=headers)
logger.info(md5__1038)
logger.info(response)
logger.info(response.text)