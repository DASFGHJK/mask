import requests
import json
import execjs
from loguru import logger
cookies = {
    'Hm_lvt_a8d6737197d542432f4ff4abc6e06384': '1744624507',
    'HMACCOUNT': '87130C7627252F2B',
    '_ga': 'GA1.1.1830384164.1744624508',
    'UBT_VID': '1744624507902.d2f1AnPciNx7',
    'MKT_CKID': '1744624508407.6s9ro.0o4g',
    'GUID': '09031152110991404871',
    '_RF1': '223.160.114.28',
    '_RSG': 'isqqiDl.ZhCh3zkMkltWp8',
    '_RDG': '28a5a34f26981627891c9c3e4c8f5c1ecc',
    '_RGUID': 'cae3faf3-6cd3-4dac-8ce0-defb96bbd0eb',
    'MKT_Pagesource': 'PC',
    'ibulanguage': 'CN',
    'ibulocale': 'zh_cn',
    'cookiePricesDisplayed': 'CNY',
    'librauuid': '',
    'nfes_isSupportWebP': '1',
    'Hm_lpvt_a8d6737197d542432f4ff4abc6e06384': '1744624532',
    '_ga_5DVRDQD429': 'GS1.1.1744624507.1.1.1744624532.0.0.0',
    '_ga_B77BES1Z8Z': 'GS1.1.1744624507.1.1.1744624532.35.0.0',
    '_ga_9BZF483VNQ': 'GS1.1.1744624507.1.1.1744624532.0.0.0',
    '_bfa': '1.1744624507902.d2f1AnPciNx7.1.1744624532162.1744624532596.1.4.102001',
    'Session': 'smartlinkcode=U130026&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=',
    'Union': 'AllianceID=4897&SID=130026&OUID=&createtime=1744624534&Expires=1745229333592',
    '_jzqco': '%7C%7C%7C%7C1744624509023%7C1.1755418633.1744624508408.1744624532620.1744624533885.1744624532620.1744624533885.0.0.0.4.4',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://hotels.ctrip.com',
    'p': '34330767585',
    # 'phantom-token': '1003-common-fZaeMoitTyFTy6aJXUJqOwfHjGaWpnJSfJL4JU7RP8Wgbv6BWd9w5lWoHyo0JU8WDOElqEkXj8dYLZEnmW9SekPvAgW6nwBUJ5TI7XY4dEBvdMwMOvnYMOEm9y9himMRP8y1fE3QEthwdZYPQElXJPDEX1ygHipFWBzWXsJQTvG7xLYXkWAoxObvcQKM9j9ojg6EnOyFEGaiO1YXEQnYUfyMEHTY96yboKkZicljGUjogWBNyUgIfMwBMj4PwcHeZmE59IBTwMZikoRTEtoYSGyHFKXcifdj9OjNUWkmyAE1mYMgym0WMQefOyS6jLESti5Hy8Nw1ziGDv9kYqajO6w9mIZhxpsy3EcqiUSJo4R1EpUYfOwFbw3aeoHjdsIgEdFiOZJ5NYOEL3YkowthESDwGmiODxPbe3oYG8wmgjh8xbsyzETFi3lJTZWfE9kYcfw35wGTKl0j38wq5rb0e1QY5EApi1gJDFYhHWbcYA8JtE1FY0aypMWcZE7EnaYm0ykFRmME6EolYk3wUowa6K30jdnwB3rbUi5dv46jmEdNigtJaUYzAWpoYo5JSEHkYQly3tWMXENEMhYz1yadRULJzEc6Y95wg3iUnED7jgTeB3i4gYzPxMay1EdgizGJ1MYaEzLYgTwTgiOBEa6jSleOTidsYmlwNQI6aE7hjzEdaih8JbGE7FeBTjTdIpEHZYzlwSDyMbecDw6fj5TwXBjh1J19jh4Eq5wlGwZ3KMEs1iZ0JptWHEGGKcqY4lY9YtXI9FemzyDtRlny4kEzNEsMwDZYhME9pJQ5WqZyasvt6W9fY8TIGsyqQYakv3FRkmYmMY7TYn1whZeU6WUZemhyPMr4SKq6ynYtprfNwosyp9EQ8RS8ycDjAFWL5j9bJXqwM3eX4wZsy7dws1YN1e69E4Bvl5y6sYBhepfjqcjstYcXEbAefcRcOva3ySqwqoJm7YTdiDBiaTESfvtHwm9vAmY6hjXtiQYknW9BxMfiUmjDOvBmYcBwPqiDLvaTYDUwQyBnxhAR0YtMwPmYBfr1hiNLWg6vadWllxDYQXKkPjdvGar9HEMfwUSxghYPSj1LjaUWByNFwFOiqYsTKq4JzcRNGe9MEOsjLFWk5ym8RnfYgYklrNUibdvU1rpAKz3elfEZfWFFxOsYs1EOYB8R06YGpYMPRgbEXQy6lWSceMTv6NJHowDpK4lim3iGYpXiUmxlmI9nR13EdSyoAWcLeTbvHoYzGEptIN3vSsYoYaQJnNv7frTAEQLjZzJhBIcpyMMK5YMcroGRbvnGYNdifpwbpRLpEHPW84jQZES4xlYO8iAbwctI1XJqTIoZIqQEPYQFvGAi6ZETfjLgwabvz4jDNvA0YS0I1YGhxsbJffx7kYTAj5cwASebYDUyG4xU5KXbj5hwnMvhgjt0jtZW0mRgYUlrspwqPYGQR4oJPUWaOvl5EmUjnY7by5dwFzvfcjgHiOois4xc3Wl5j5r0MxXgYlUwA4IDr6y50Yo0E8pEzMWt6jhj9bWU0yF',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://hotels.ctrip.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'Hm_lvt_a8d6737197d542432f4ff4abc6e06384=1744624507; HMACCOUNT=87130C7627252F2B; _ga=GA1.1.1830384164.1744624508; UBT_VID=1744624507902.d2f1AnPciNx7; MKT_CKID=1744624508407.6s9ro.0o4g; GUID=09031152110991404871; _RF1=223.160.114.28; _RSG=isqqiDl.ZhCh3zkMkltWp8; _RDG=28a5a34f26981627891c9c3e4c8f5c1ecc; _RGUID=cae3faf3-6cd3-4dac-8ce0-defb96bbd0eb; MKT_Pagesource=PC; ibulanguage=CN; ibulocale=zh_cn; cookiePricesDisplayed=CNY; librauuid=; nfes_isSupportWebP=1; Hm_lpvt_a8d6737197d542432f4ff4abc6e06384=1744624532; _ga_5DVRDQD429=GS1.1.1744624507.1.1.1744624532.0.0.0; _ga_B77BES1Z8Z=GS1.1.1744624507.1.1.1744624532.35.0.0; _ga_9BZF483VNQ=GS1.1.1744624507.1.1.1744624532.0.0.0; _bfa=1.1744624507902.d2f1AnPciNx7.1.1744624532162.1744624532596.1.4.102001; Session=smartlinkcode=U130026&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=; Union=AllianceID=4897&SID=130026&OUID=&createtime=1744624534&Expires=1745229333592; _jzqco=%7C%7C%7C%7C1744624509023%7C1.1755418633.1744624508408.1744624532620.1744624533885.1744624532620.1744624533885.0.0.0.4.4',
}

json_data = {
    'hotelIdFilter': {
        'hotelAldyShown': [
            '1073814',
            '345046',
            '393445',
            '75329189',
            '56206569',
            '46569689',
            '479628',
            '76972200',
            '65822792',
            '375525',
            '54668943',
            '14171664',
        ],
    },
    'destination': {
        'type': 1,
        'geo': {
            'cityId': 2,
            'countryId': 1,
        },
        'keyword': {
            'word': '',
        },
    },
    'date': {
        'dateType': 1,
        'dateInfo': {
            'checkInDate': '20250414',
            'checkOutDate': '20250415',
        },
    },
    'filters': [
        {
            'filterId': '17|1',
            'type': '17',
            'subType': '2',
            'value': '1',
        },
        {
            'filterId': '29|1',
            'type': '29',
            'value': '1|1',
            'subType': '2',
        },
    ],
    'extraFilter': {
        'childInfoItems': [],
        'sessionId': '52d153e5e5c4487bafb3fc34e78d304c',
    },
    'paging': {
        'pageCode': '102002',
        'pageIndex': 2,
        'pageSize': 10,
    },
    'roomQuantity': 1,
    'recommend': {
        'nearbyHotHotel': {},
    },
    'genk': True,
    'residenceCode': 'CN',
    'head': {
        'platform': 'PC',
        'cid': '09031152110991404871',
        'cver': 'hotels',
        'bu': 'HBU',
        'group': 'ctrip',
        'aid': '4897',
        'sid': '130026',
        'ouid': '',
        'locale': 'zh-CN',
        'timezone': '8',
        'currency': 'CNY',
        'pageId': '102002',
        'vid': '1744624507902.d2f1AnPciNx7',
        'guid': '09031152110991404871',
        'isSSR': False,
    },
    'ServerData': '',
}
data=json.dumps(json_data,separators=(',',':'))
with open('携程_分析.js', 'r') as f:
    js_code=f.read()
ctx=execjs.compile(js_code)
print(data)
res=ctx.call('get_sign',data)
headers['phantom-token']=res
logger.info(res)
response = requests.post('https://m.ctrip.com/restapi/soa2/31454/json/fetchHotelList', cookies=cookies, headers=headers, data=data)
logger.info(response.text)