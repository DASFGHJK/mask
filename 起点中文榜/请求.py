import random

import requests
from lxml import etree
import re
import time
import pandas as pd
cookies = {
    'e1': '%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A5%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_P_rank_05%22%2C%22eid%22%3A%22qd_C44%22%7D',
    'newstatisticUUID': '1744096611_1730334174',
    '_csrfToken': 'EnxMwKDJZJQjtLW94kyskNsCcoEWKmJr4ZrFiEoF',
    'fu': '1431135024',
    'supportWebp': 'true',
    'supportwebp': 'true',
    'e2': '%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A9%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A110%22%2C%22l2%22%3A2%7D',
    'x-waf-captcha-referer': '',
    'traffic_utm_referer': '',
    'Hm_lvt_f00f67093ce2f38f215010b699629083': '1744082292,1744096575,1744167387,1744892631',
    'Hm_lpvt_f00f67093ce2f38f215010b699629083': '1744892631',
    'HMACCOUNT': '87130C7627252F2B',
    '_ga': 'GA1.2.764512371.1744892632',
    '_gid': 'GA1.2.572277947.1744892632',
    '_gat_gtag_UA_199934072_2': '1',
    '_ga_FZMMH98S83': 'GS1.1.1744892631.1.0.1744892638.0.0.0',
    '_ga_PFYW0QLV3P': 'GS1.1.1744892631.2.0.1744892638.0.0.0',
    'w_tsfp': 'ltvuV0MF2utBvS0Q7a7hnUmoEjAgcj44h0wpEaR0f5thQLErU5mB1Y5zvM3zOXbe5cxnvd7DsZoyJTLYCJI3dwMUR5rAcYwR2A+SkdVzitoSUhZuQMrbW1FLJLgn6WZPdXhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TuI5l3yfw59VetF0kHDhyoWXXol4ES+JbpVMUmkcceoSqA=',
}
def get_data(url):
    response = requests.get('https://www.qidian.com/book/1026722127/', cookies=cookies, headers=headers)
    res=etree.HTML(response.text)
    zishu_=str(res.xpath("//p[@class='count']/em[1]/text()")[0])+'字'
    data_=res.xpath("//p[@id='book-intro-detail']//text()")
    data_=''.join(data_)
    return {
        'zishu':zishu_,
        'data':data_
    }
def User_Agent():
    """
    定义5个User-Agent字符串，随机选取，以防止被检测到链接对象而终止访问
    """
    user_agent1 = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0'
    user_agent2 = 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19'
    user_agent3 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    user_agent4 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15'
    user_agent5 = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
    lst = [user_agent1, user_agent2, user_agent3, user_agent4, user_agent5]
    return random.choice(lst)

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.qidian.com/rank/collect/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': User_Agent(),
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}
for page in range(1,26):
    response = requests.get(f'https://www.qidian.com/rank/collect/page{page}/', cookies=cookies, headers=headers)


    res = etree.HTML(response.text)

    name_list = res.xpath("//div[@id='book-img-text']/ul/li/div[@class='book-mid-info']/h2/a/text()")  # 书名集合
    url_list = res.xpath("//div[@id='book-img-text']/ul/li/div[@class='book-mid-info']/h2/a/@href")
    author_list = res.xpath("//ul/li/div[@class='book-mid-info']/p[@class='author']/a[1]/text()")  # 作者
    zhonglei_list = res.xpath("//ul/li/div[@class='book-mid-info']/p[@class='author']/a[2]/text()")  # 种类
    zhonglei2_list = res.xpath("//ul/li/div[@class='book-mid-info']/p[@class='author']/a[3]/text()")

    zhonglei_combined_list = []
    for zhonlei1, zhonlei2 in zip(zhonglei_list, zhonglei2_list):
        zhonglei_combined_list.append((zhonlei1, zhonlei2))


    for name,url,author,zhonlei in zip(name_list,url_list,author_list,zhonglei_combined_list):
        url=re.findall('(\d+)', url)[0]
        urls="https://www.qidian.com/book/"+url+'/'
        result=get_data(urls)
        zishu=result['zishu']
        data=result['data']
        print(name,urls,author,zhonlei,zishu,data)
