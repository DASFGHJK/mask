import requests

import requests

session=requests.session()
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Origin": "https://fanyi.youdao.com",
    "Pragma": "no-cache",
    "Referer": "https://fanyi.youdao.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "OUTFOX_SEARCH_USER_ID": "-817640272@18.163.215.106",
    "OUTFOX_SEARCH_USER_ID_NCOO": "669449589.9350094",
    "_uetsid": "bde9d4200e1d11f0a9bea73fb591a15a",
    "_uetvid": "bde9d0b00e1d11f091c0cbbb9c8bde54"
}
url = "https://luna-ai.youdao.com/translate_llm/v3/uuid/generate"
params = {
    "product": "webfanyi",
    "appVersion": "1",
    "client": "web",
    "mid": "1",
    "vendor": "web",
    "screen": "1",
    "model": "1",
    "imei": "1",
    "network": "wifi",
    "keyfrom": "fanyi.web",
    "keyid": "ai-translate-llm",
    "mysticTime": "1743418161670",
    "yduuid": "f0f51a7234957c3c0a90bcfe2abc978c",
    "abtest": "0",
    "token": "8789a2bbd142416e8262f6ea1a532a91",
    "sign": "89479f02eab0ceacb70e5a22bf20df08",
    "pointParam": "abtest,appVersion,client,imei,keyfrom,keyid,mid,model,mysticTime,network,product,screen,token,vendor,yduuid,key"
}
response = session.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryDla8tBJMyAHVCLa5",
    "Origin": "https://fanyi.youdao.com",
    "Pragma": "no-cache",
    "Referer": "https://fanyi.youdao.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "OUTFOX_SEARCH_USER_ID": "-817640272@18.163.215.106",
    "OUTFOX_SEARCH_USER_ID_NCOO": "669449589.9350094",
    "_uetsid": "bde9d4200e1d11f0a9bea73fb591a15a",
    "_uetvid": "bde9d0b00e1d11f091c0cbbb9c8bde54"
}
url = "https://luna-ai.youdao.com/translate_llm/v3/chat"
data = {
    "------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name": "\"product\"\\r\n\\r\nwebfanyi\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"appVersion\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"client\"\\r\n\\r\nweb\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"mid\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"vendor\"\\r\n\\r\nweb\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"screen\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"model\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"imei\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"network\"\\r\n\\r\nwifi\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"keyfrom\"\\r\n\\r\nfanyi.web\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"keyid\"\\r\n\\r\nai-translate-llm\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"mysticTime\"\\r\n\\r\n1743418161675\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"yduuid\"\\r\n\\r\nf0f51a7234957c3c0a90bcfe2abc978c\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"functionEnglishName\"\\r\n\\r\nLLM_translate\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"input\"\\r\n\\r\ndog\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"useTerm\"\\r\n\\r\n0\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"free\"\\r\n\\r\nfalse\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"singleBox\"\\r\n\\r\nfalse\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"fromLang\"\\r\n\\r\nen\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"toLang\"\\r\n\\r\nzh-CHS\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"roundNo\"\\r\n\\r\n1\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"showSuggest\"\\r\n\\r\n0\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"token\"\\r\n\\r\n8789a2bbd142416e8262f6ea1a532a91\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"sign\"\\r\n\\r\n73399a1cf669371e476aeaae59eb4978\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5\\r\nContent-Disposition: form-data; name=\"pointParam\"\\r\n\\r\nappVersion,client,free,fromLang,functionEnglishName,imei,input,keyfrom,keyid,mid,model,mysticTime,network,product,roundNo,screen,showSuggest,singleBox,toLang,token,useTerm,vendor,yduuid,key\\r\n------WebKitFormBoundaryDla8tBJMyAHVCLa5--\\r\n"
}
response = session.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)