import requests
import json
cookies = {
    'smidV2': '2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00',
    'JJSESS': '%7B%22referer%22%3A%22/book2/1722952%22%7D',
    'JJEVER': '%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WHJMrwNw1k/E6iLc+CNdCMHCFgbT9LtrQiosT2NWk44qQY27W5zIlfm+6X/wQRlhmpmjqPqFwYOwcN899je/UVRmV2coIzlpwdCW1tldyDzmQI99+chXEiqnPXs0iV1Ir9lCUKKcsmkTaFO8webhNijYmmmXo8LlTkQE5YcNLqNriNYPfoOP/bvRnQROzcEAsFRRuSg/X1FURTkAd7H/eWjK1ejU45yqvxO2yMh2gHdPux7syfAAamJUFmYtGLmzcfUGgIqCuSLQ%3D1487582755342%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://wap.jjwxc.net/',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'smidV2=2025041620131087531dc41638ec4d89f0be1b9636efd9000ac72c4f6cd0c00; JJSESS=%7B%22referer%22%3A%22/book2/1722952%22%7D; JJEVER=%7B%22isKindle%22%3A%22%22%2C%22shumeideviceId%22%3A%22WHJMrwNw1k/E6iLc+CNdCMHCFgbT9LtrQiosT2NWk44qQY27W5zIlfm+6X/wQRlhmpmjqPqFwYOwcN899je/UVRmV2coIzlpwdCW1tldyDzmQI99+chXEiqnPXs0iV1Ir9lCUKKcsmkTaFO8webhNijYmmmXo8LlTkQE5YcNLqNriNYPfoOP/bvRnQROzcEAsFRRuSg/X1FURTkAd7H/eWjK1ejU45yqvxO2yMh2gHdPux7syfAAamJUFmYtGLmzcfUGgIqCuSLQ%3D1487582755342%22%2C%22background%22%3A%22%22%2C%22font_size%22%3A%22%22%7D',
}

params = {
    'callback': 'novelreviewCallback',
    'action': 'getByNovelid',
    'novelid': '2126946',
}

response = requests.get('https://www.jjwxc.net/novelreview.php', params=params, cookies=cookies, headers=headers)
res=(response.text).replace('novelreviewCallback(','').replace(')','')
avgscore=json.loads(res)['data']['scoreData']['avgscore']
print(avgscore)    #评分
ping_lun_list=json.loads(res)['data']['novelReviewList']
