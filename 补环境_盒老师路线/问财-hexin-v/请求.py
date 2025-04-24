import requests
import execjs
from loguru import logger
with open('./env.js','r') as f:
    js_code=f.read()
ctx=execjs.compile(js_code)
v=ctx.call('get_data')
logger.info(v)
cookies = {
    'other_uid': 'Ths_iwencai_Xuangu_jmes0n4hvy5pa68ebjf0ui57i6fzelgp',
    'ta_random_userid': 'k1npc0kghr',
    'cid': 'a0abdfa3b88fa211c6fab09d939b110b1745164879',
    'v': v,
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://www.iwencai.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.iwencai.com/unifiedwap/result?w=%E8%AE%A1%E7%AE%97%E6%9C%BA&querytype=stock',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'hexin-v': v,
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'other_uid=Ths_iwencai_Xuangu_jmes0n4hvy5pa68ebjf0ui57i6fzelgp; ta_random_userid=k1npc0kghr; cid=a0abdfa3b88fa211c6fab09d939b110b1745164879; v=A0N-tNOfL6-aDePb1RnqiDnC1AzouNPqEUkaHnUhno4Z9m3y_YhnSiEcq2KG',
}

data = {
    'query': '计算机',
    'urp_sort_way': 'desc',
    'urp_sort_index': '最新涨跌幅',
    'page': '5',
    'perpage': '50',
    'addheaderindexes': '',
    'condition': '[{"dateText":"","ci":true,"indexName":"所属同花顺行业","indexProperties":["包含T10"],"source":"text2sql","type":"index","indexPropertiesMap":{"包含":"T10"},"reportType":"null","score":0,"ciChunk":"计算机","createBy":"preCache","node_type":"index","chunkedResult":"计算机","domain":"abs_股票领域","uiText":"所属同花顺行业包含计算机","valueType":"_所属同花顺行业","sonSize":0}]',
    'codelist': '',
    'indexnamelimit': '',
    'logid': '01ea0d9e38908288f769068be7d44fcc',
    'ret': 'json_all',
    'sessionid': '01ea0d9e38908288f769068be7d44fcc',
    'source': 'Ths_iwencai_Xuangu',
    'date_range[0]': '20250421',
    'iwc_token': '0ac9c49417451661177128639',
    'urp_use_sort': '1',
    'user_id': 'Ths_iwencai_Xuangu_jmes0n4hvy5pa68ebjf0ui57i6fzelgp',
    'uuids[0]': '24087',
    'query_type': 'stock',
    'comp_id': '6836372',
    'business_cat': 'soniu',
    'uuid': '24087',
}

response = requests.post('https://www.iwencai.com/gateway/urp/v7/landing/getDataList', cookies=cookies, headers=headers, data=data)
logger.info(response.text)