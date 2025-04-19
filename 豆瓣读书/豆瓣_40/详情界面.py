import requests
from bs4 import BeautifulSoup

cookies = {
    'll': '"108288"',
    'bid': 'OHMRB1USNDk',
    '_vwo_uuid_v2': 'DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70',
    '_ga': 'GA1.1.584985988.1742828259',
    'push_noty_num': '0',
    'push_doumail_num': '0',
    '__utmv': '30149280.27281',
    '_pk_id.100001.3ac3': 'b3012ea45818ea4c.1742912438.',
    '__yadk_uid': 'ctmU3566DYQKBzTgDrgsBNYDXvmJbi2z',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '_ga_RXNMP372GL': 'GS1.1.1744091772.10.1.1744092559.29.0.0',
    '__utmz': '81379588.1744117529.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    '__utmz': '30149280.1744524406.20.13.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    'ck': 'jUu3',
    'ap_v': '0,6.0',
    '__utmc': '30149280',
    '__utmc': '81379588',
    '_pk_ref.100001.3ac3': '%5B%22%22%2C%22%22%2C1744890254%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXbax-6sf3PfDEfhW-RqoO3yhaJsm1yWS3laUqK6Hy12rXIEoHX-qelV2l_ONRmT5%26wd%3D%26eqid%3Dee8bbd9b0152ecca0000000667f51f10%22%5D',
    '_pk_ses.100001.3ac3': '1',
    '__utma': '30149280.41827125.1742651446.1744887471.1744890254.26',
    '__utma': '81379588.584985988.1742828259.1744887471.1744890254.11',
    'frodotk_db': '"90686d47f0ae9babb13947d7d20bd301"',
    '__utmt_douban': '1',
    '__utmt': '1',
    '__utmb': '30149280.8.10.1744890254',
    '__utmb': '81379588.8.10.1744890254',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://book.douban.com/subject/1007305//comments/?limit=20&status=P&sort=score',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}
def get_ping_lun(url):   #传入url然后进行抓取
    params = {
        'percent_type': '',
        'start': '0',
        'limit': '20',
        'status': 'P',
        'sort': 'score',
        'comments_only': '1',
        'ck': 'jUu3',
    }
    user_list=[]
    content_list=[]
    response = requests.get(url, params=params, cookies=cookies,
                            headers=headers)
    #将uncode的格式转化为中文
    res=(response.text).encode('utf-8').decode('unicode_escape')
    soup = BeautifulSoup(res, 'html.parser')
    # 提取评论列表
    comments = soup.select('li.comment-item')

    for comment in comments:
        # 提取评论者
        commenter = comment.select_one('span.comment-info a').get_text(strip=True)
        # 提取评论内容
        content = comment.select_one('span.short').get_text(strip=True)
        user_list.append(commenter)   #进行填充
        content_list.append(content)
        # print(f"评论者: {commenter}")
        #         # print(f"评论内容: {content}")
    return {
        "user":user_list,
        "commenter": content_list,
    }

if __name__ == '__main__':
    res=get_ping_lun("https://book.douban.com/subject/1007305//comments/")
    print(res)
    print(res['user'])
    print(res['commenter'])