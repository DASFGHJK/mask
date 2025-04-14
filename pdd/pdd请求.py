import asyncio
import re
from loguru import logger
import requests
async def get_anti():
    proc = await asyncio.create_subprocess_exec(
        'node', 'env.js',  # 使用 node 执行该 JS 文件
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )
    stdout, stderr = await proc.communicate()

    if stdout:
        print(f"[stdout]\n{stdout.decode()}")
    if stderr:
        print(f"[stderr]\n{stderr.decode()}")

    return stdout.decode()

# 调用示例
async def main():
    result = await get_anti()
    result=re.findall(r"0a.*",result)
    result=result[0].replace('\n','')
    logger.info(result)
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
        'anti_content': result    }

    response = requests.get('https://mobile.yangkeduo.com/proxy/api/api/alexa/cells/hub/v3', params=params, cookies=cookies, headers=headers)
    logger.info(response.text)

if __name__ == "__main__":
    asyncio.run(main())
