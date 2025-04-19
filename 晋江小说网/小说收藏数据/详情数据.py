# //div[@class='smallreadbody']/div[@id='novelintro'] 详细简介

import requests
from lxml import etree
cookies = {
    'smidV2': '2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00',
    'timeOffset_o': '-72',
    'testcookie': 'yes',
    'Hm_lvt_bc3b748c21fe5cf393d26c12b2c38d99': '1744892271,1744956680',
    'HMACCOUNT': '87130C7627252F2B',
    'JJSESS': '%7B%22clicktype%22%3A%22%22%7D',
    'Hm_lpvt_bc3b748c21fe5cf393d26c12b2c38d99': '1744956737',
    'JJEVER': '%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WHJMrwNw1k/E6iLc+CNdCMHCFgbT9LtrQiosT2NWk44qQY27W5zIlfm+6X/wQRlhmpmjqPqFwYOwcN899je/UVRmV2coIzlpwdCW1tldyDzmQI99+chXEilcZOHvsReBR9lCUKKcsmkSqmJzoPeggwzYmmmXo8LlTkQE5YcNLqNriNYPfoOP/bvRnQROzcEAsFRRuSg/X1FURTkAd7H/eWrajf8SyAklpWQhe86Xx7a3di1864TUXaA2VVwB0PnwFfUGgIqCuSLQ%3D1487582755342%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.jjwxc.net/bookbase.php?fw=0&yc=0&xx=0&mainview=0&sd=0&lx=0&bq=-1&sortType=0&isfinish=0&collectiontypes=&searchkeywords=&m_p=41259&page=1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'smidV2=2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00; timeOffset_o=-72; testcookie=yes; Hm_lvt_bc3b748c21fe5cf393d26c12b2c38d99=1744892271,1744956680; HMACCOUNT=87130C7627252F2B; JJSESS=%7B%22clicktype%22%3A%22%22%7D; Hm_lpvt_bc3b748c21fe5cf393d26c12b2c38d99=1744956737; JJEVER=%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WHJMrwNw1k/E6iLc+CNdCMHCFgbT9LtrQiosT2NWk44qQY27W5zIlfm+6X/wQRlhmpmjqPqFwYOwcN899je/UVRmV2coIzlpwdCW1tldyDzmQI99+chXEilcZOHvsReBR9lCUKKcsmkSqmJzoPeggwzYmmmXo8LlTkQE5YcNLqNriNYPfoOP/bvRnQROzcEAsFRRuSg/X1FURTkAd7H/eWrajf8SyAklpWQhe86Xx7a3di1864TUXaA2VVwB0PnwFfUGgIqCuSLQ%3D1487582755342%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}

params = {
    'novelid': '3200611',
}

response = requests.get('https://www.jjwxc.net/onebook.php', params=params, cookies=cookies, headers=headers)
response.encoding='gbk'
res=etree.HTML(response.text)
jianjie=res.xpath("//div[@class='smallreadbody']/div[@id='novelintro']/text()")
jianjie=''.join(jianjie)
print(jianjie)