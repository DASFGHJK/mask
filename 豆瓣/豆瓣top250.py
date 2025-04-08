# 导入模块
import requests
from lxml import etree
import csv
import time

# 请求头信息
import requests


headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://movie.douban.com/top250",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
cookies = {
    "ll": "\"108288\"",
    "bid": "OHMRB1USNDk",
    "_pk_id.100001.4cf6": "15748ca968c35d77.1742651450.",
    "__yadk_uid": "cVX2RwQ1fc4sDhPCujKeu4DWs3oO75UA",
    "_vwo_uuid_v2": "DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70",
    "_ga": "GA1.1.584985988.1742828259",
    "push_noty_num": "0",
    "push_doumail_num": "0",
    "__utmv": "30149280.27281",
    "_ga_RXNMP372GL": "GS1.1.1742997942.9.0.1742997943.59.0.0",
    "__utmc": "223695111",
    "viewed": "\"37212968\"",
    "dbcl2": "\"272816827:/u5adYVyrnE\"",
    "ck": "jUu3",
    "_pk_ref.100001.4cf6": "%5B%22%22%2C%22%22%2C1743515128%2C%22https%3A%2F%2Faccounts.douban.com%2F%22%5D",
    "_pk_ses.100001.4cf6": "1",
    "__utma": "223695111.1681363369.1742651450.1743504386.1743515129.8",
    "__utmb": "223695111.0.10.1743515129",
    "__utmz": "223695111.1743515129.8.6.utmcsr=accounts.douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/"
}

movie_list = []

for page in range(1, 11):
    print(f'正在抓取第{page}页代-------------------')
    # 目标url
    url = f'https://movie.douban.com/top250?start={(page - 1) * 25}&filter='

    try:
        # 发送请求，增加异常处理
        res = requests.get(url, headers=headers,cookies=cookies, timeout=10)
        res.raise_for_status()

        # 实例化etree对象
        tree = etree.HTML(res.text)
        divs = tree.xpath('//div[@class="info"]')

        for div in divs:
            dic = {}
            # 基础信息
            title = div.xpath('./div[@class="hd"]/a/span[@class="title"]/text()')
            dic['电影中文名'] = ''.join(title).split('\xa0/\xa0')[0]
            dic['电影英文名'] = div.xpath('./div[@class="hd"]/a/span[2]/text()')[0].strip('\xa0/\xa0')

            # 详情页链接
            detail_url = div.xpath('./div[@class="hd"]/a/@href')[0]
            dic['详情页链接'] = detail_url

            try:
                # 获取详情页数据
                detail_res = requests.get(detail_url, headers=headers, timeout=10)
                detail_tree = etree.HTML(detail_res.text)

                # 剧情详情
                plot = detail_tree.xpath("//div[@class='related-info']/div[@id='link-report-intra']/span/text()")
                dic['剧情详情'] = ''.join(plot).strip().replace('\n', '') if plot else '暂无'

                # 电影简介（短评）
                quote = div.xpath("./div/p[@class='quote']/span/text()")
                print(quote)
                dic['简介'] = quote[0].strip() if quote else '暂无'

            except Exception as e:
                print(f"详情页请求失败：{str(e)}")
                dic['剧情详情'] = '获取失败'
                dic['简介'] = '获取失败'

            # 演职员信息
            info_text = div.xpath('./div[@class="bd"]/p[1]/text()')[0].strip()
            dic['导演'] = info_text.split('导演: ')[1].split('主演: ')[0] if '导演: ' in info_text else '未知'

            # 处理主演信息
            try:
                dic['主演'] = info_text.split('主演: ')[1]
            except IndexError:
                dic['主演'] = '未知'

            # 其他信息
            info_list = div.xpath('./div[@class="bd"]/p[1]/text()')[1].strip().split('/')
            dic['上映年份'] = info_list[0].strip()
            dic['地区'] = info_list[1].strip() if len(info_list) > 1 else '未知'
            dic['类型'] = info_list[2].strip() if len(info_list) > 2 else '未知'

            # 评分信息
            dic['评分'] = div.xpath('./div[@class="bd"]/div/span[2]/text()')[0]
            dic['评分人数'] = div.xpath('./div[@class="bd"]/div/span[4]/text()')[0]

            movie_list.append(dic)
            time.sleep(1)  # 增加请求间隔

        print(f'第{page}/10页爬取完成')
        time.sleep(2)  # 页间延迟

    except requests.exceptions.RequestException as e:
        print(f"请求异常：{str(e)}")
        continue

# 数据保存
with open('豆瓣电影Top250.csv', 'w', encoding='utf-8-sig', newline='') as f:
    fieldnames = ['电影中文名', '电影英文名', '详情页链接', '导演', '主演',
                  '上映年份', '地区', '类型', '评分', '评分人数', '简介', '剧情详情']

    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(movie_list)

print('爬虫执行完毕，共爬取', len(movie_list), '条数据')
