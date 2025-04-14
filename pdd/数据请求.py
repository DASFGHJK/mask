# https://mobile.yangkeduo.com/   网站url地址
# 需要逆向的参数  anti_content：

#  其中的参数长度为为780长度
# print(len("0asWtqlqRiXgJgu2f0rUhRN2fF62t6uwbEurKCmkvjwjHVA88LhZkbiBdWih7oJerUdWvkZyS9D-AgTK5AGoq4C297zVpGPgsGFesS79LzCk2k-wDggCuXRVTU93fEZYCoUwVdZBS1vi_XJEsjF5_EuAxAb5bfl92fx9sKgjJgtowBfbg6y9fqGZi6tkqqxVvRU5R2JC9rA2tCxg5IcOO_Hf9pA2ifZZRVLhPz6ywwbr0LX3O9HrZlKBmYMAcD8hCQ2tueZSw6ow8O2CQbW_LoV1oOx8V2fzmx4y8OOnvVhK6-aZtx0IR2-uZki9yCtDddaDAh-AkDb9mb6m3ldL4ubwvL5NMW78svQfl3FjatScM2A8BXJrOrDAHLaYROjHXpMIx36ndcYDFWJ37MJ04ixDKaUBLA8TGyPzJByS8siUXfQximY6sjCqf2julnNdAlRcHMfvdLLQzG1Qt1dItauLh8Q7E8DH5cWSbWMIMlGh8mDz5BrSxtl7iv14GZbF1P1ZFbxoZ_CwYE-NrHDIIeUMhJjumq6NjTzFC4Z76wT17O3-_Xvi1xzwa7YEkDZWZMhYFTf6pI1ktwhrAiXCr7uli1nhIlE1Fl1SWbbPVAdemssFWTtpsCpQDrF7xG_3Idk7fro3cUQeGbSe_VkfM0BDwbJ2zOTDBjqv8A0aqJETEp1AhZaLvBVvqSIvugaXngyxXwApOwA_3GFKISgtvnE_lg1p5gHepMQB07XUh8gtlny5btMZK_3bVzDumSR96ZBr8R7lLdaf"))
# 接口名:https://mobile.yangkeduo.com/proxy/api/api/alexa/cells/hub/v3?

import requests
import subprocess
a='env.js'
node_script = f'''node {a}'''
process = subprocess.Popen(node_script, shell=True, stdout=subprocess.PIPE)
output, error = process.communicate()
print(process)
print(error)
# 读取 JavaScript 文件


cookies = {
    'api_uid': 'CkvQmmf7RfyPHACWDiYXAg==',
    '_nano_fp': 'XpmYn0dxX0Ebl0djXC_HIVaXOSKrSy~apVQKPSnx',
    'webp': '1',
    'jrpl': 'moluNh7VKQZebJmBud4mNQAXnJ1MPsxB',
    'njrpl': 'moluNh7VKQZebJmBud4mNQAXnJ1MPsxB',
    'dilx': 'S4hMSWEwa0ntW5hyirt0U',
    'pdd_vds': 'gaLLNybGQnayyNoEOOEEiPPItQIbtaoENGaQPOGGLmaQbLbbOmInyaPOnNmi',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://mobile.yangkeduo.com/?lastTabItemID=0',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'api_uid=CkvQmmf7RfyPHACWDiYXAg==; _nano_fp=XpmYn0dxX0Ebl0djXC_HIVaXOSKrSy~apVQKPSnx; webp=1; jrpl=moluNh7VKQZebJmBud4mNQAXnJ1MPsxB; njrpl=moluNh7VKQZebJmBud4mNQAXnJ1MPsxB; dilx=S4hMSWEwa0ntW5hyirt0U; pdd_vds=gaLLNybGQnayyNoEOOEEiPPItQIbtaoENGaQPOGGLmaQbLbbOmInyaPOnNmi',
}

params = {
    'pdduid': '0',
    'platform': 'H5',
    'page_sn': '10002',
    'page_id': 'index_list.html',
    'engine_version': '3.0',
    'offset': '20',
    'count': '20',
    'list_id': '868wefxy6p',
    'anti_content': '0asAfaj5rihyy99Z8yBloTsEggJ1-fHSWWsGZ0wxtLPsmunkinA1hZO73G0urEp8NwZTljz5EF22ZkqcSOwgRPnEBpOTWT2t2GKcJYLiQyA5PPVCS-NOihjihevvewQeeSSgzvgzhnO-1tFYIdb3WPGZOOIxfsDgAbL6_5NJ8ZD2iRJCYrOQjgnJvfZ8ifvJvwjpujppsyJn9OIZct8wZmWwG_3RJqnX3Kcc1cLMGR-UB6eF42K07sXOqKo3NR9MjzgV7O2UVt9V9PS5Ugxuy4Jt2V3PiB9vHtZMeGz2Ij2QxxLhb0w-P47fgrY6z0Q-YFSOIG1goargl917cfW-WXztoVbVyM0bB6gEQPk8elRAbHwdp2E2hcJh0Vi6Kq4HGSN7qbEJXueXDfElssp0b8iiKGoSj4FIkiNvLylnbWOiXyx3jQYeGKAiDo8MdQ6I0oHutrgHRPSLmQ658WQeJVm8N8dHXPLPIY8_irHHetgZk6p5LQ_P_oDmdHMfdjnrf03iR9ScuAGvJr3_WVcJ9H46W1a5EAznLpaW'
}

# response = requests.get('https://mobile.yangkeduo.com/proxy/api/api/alexa/cells/hub/v3', params=params, cookies=cookies, headers=headers)
# print(response.text)