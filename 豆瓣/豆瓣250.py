# 导入模块
import requests
from lxml import etree
import csv
import time
import logging
import re
import pymysql
from bs4 import BeautifulSoup
# 配置日志系统
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('douban_spider.log'),
        logging.StreamHandler()
    ]
)

# ANSI 转义码用于设置红色
RED = "\033[91m"
RESET = "\033[0m"

# 请求头信息
cookies = {
    'll': '"108288"',
    'bid': 'OHMRB1USNDk',
    '_pk_id.100001.4cf6': '15748ca968c35d77.1742651450.',
    '__yadk_uid': 'cVX2RwQ1fc4sDhPCujKeu4DWs3oO75UA',
    '_vwo_uuid_v2': 'DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70',
    '_ga': 'GA1.1.584985988.1742828259',
    'push_noty_num': '0',
    'push_doumail_num': '0',
    '__utmv': '30149280.27281',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '__utmz': '223695111.1743937024.9.7.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/search',
    '_ga_RXNMP372GL': 'GS1.1.1744091772.10.1.1744092559.29.0.0',
    '__utmz': '30149280.1744117529.16.12.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    'ap_v': '0,6.0',
    '_pk_ref.100001.4cf6': '%5B%22%22%2C%22%22%2C1744352427%2C%22https%3A%2F%2Fwww.douban.com%2Fsearch%3Fsource%3Dsuggest%26q%3D%E8%A7%A6%E4%B8%8D%E5%8F%AF%E5%8F%8A%22%5D',
    '_pk_ses.100001.4cf6': '1',
    'ck': 'jUu3',
    '__utma': '30149280.41827125.1742651446.1744256966.1744352579.19',
    '__utmb': '30149280.0.10.1744352579',
    '__utmc': '30149280',
    '__utma': '223695111.1681363369.1742651450.1744001756.1744352579.12',
    '__utmb': '223695111.0.10.1744352579',
    '__utmc': '223695111',
    'frodotk_db': '"ee765a98c32024d4cb630fca49606e7c"',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://movie.douban.com/top250?start=',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
}

movie_list = []

for page in range(1, 11):
    logging.info(f'{RED}正在抓取第{page}页-------------------{RESET}')
    # 目标url
    url = f'https://movie.douban.com/top250?start={(page - 1) * 25}&filter='

    try:
        # 发送请求，增加异常处理
        res = requests.get(url, headers=headers, cookies=cookies, timeout=10)
        res.raise_for_status()

        # 实例化etree对象
        tree = etree.HTML(res.text)
        divs = tree.xpath('//div[@class="item"]')

        for div in divs:
            dic = {}
            # 基础信息
            title = div.xpath('./div[@class="info"]/div[@class="hd"]/a/span[@class="title"]/text()')
            dic['序号'] = div.xpath('./div[@class="pic"]/em/text()')[0]
            dic['片名'] = ''.join(title).split('\xa0/\xa0')[0]
            dic['详情页链接'] = div.xpath('./div[@class="info"]/div[@class="hd"]/a/@href')[0]

            try:
                # 获取详情页数据
                detail_res = requests.get(dic['详情页链接'], headers=headers, cookies=cookies, timeout=10)
                detail_tree = etree.HTML(detail_res.text)

                # 剧情详情
                plot = detail_tree.xpath("//div[@class='related-info']/div[@id='link-report-intra']/span/text()")
                dic['剧情简介'] = ''.join(plot).strip().replace('\n', '') if plot else '暂无'
                dic['编剧'] = ','.join(detail_tree.xpath("//div[@id='info']/span[2]/span[@class='attrs']/a/text()"))
                dic['语言'] = re.findall('<span class="pl">语言:</span>(.*?)<br/>', detail_res.text)[0]
                dic['片长'] = detail_tree.xpath("//div[@class='subjectwrap clearfix']/div[@class='subject clearfix']/div[@id='info']/span[13]/text()")[0]
                dic['又名'] = re.findall(' <span class="pl">又名:</span>(.*?)<br/>', detail_res.text)[0]
                dic['上映日期'] = re.findall('<span class="pl">上映日期:</span> <span property="v:initialReleaseDate" content=(.*?)</span>', detail_res.text)[0]

            except Exception as e:
                logging.error(f'{RED}详情页请求失败：{str(e)}{RESET}')
                dic['剧情简介'] = '获取失败'
                dic['编剧'] = '获取失败'
                dic['语言'] = '获取失败'
                dic['片长'] = '获取失败'
                dic['又名'] = '获取失败'
                dic['上映日期'] = '获取失败'

            # 演职员信息
            info_text = div.xpath('./div[@class="info"]/div[@class="bd"]/p[1]/text()')[0].strip()
            dic['导演'] = info_text.split('导演: ')[1].split('主演: ')[0] if '导演: ' in info_text else '未知'

            # 处理主演信息
            try:
                dic['主演'] = info_text.split('主演: ')[1]
            except IndexError:
                dic['主演'] = '未知'

            # 其他信息
            info_list = div.xpath('./div[@class="info"]/div[@class="bd"]/p[1]/text()')[1].strip().split('/')
            dic['制作国家/地区'] = info_list[1].strip() if len(info_list) > 1 else '未知'
            dic['类型'] = info_list[2].strip() if len(info_list) > 2 else '未知'

            # 评分信息
            dic['豆瓣评分'] = div.xpath('./div[@class="info"]/div[@class="bd"]/div/span[2]/text()')[0]
            dic['评分人数'] = div.xpath('./div[@class="info"]/div[@class="bd"]/div/span[4]/text()')[0]

            # 记录电影信息
            logging.error(f'actors: {dic["主演"]}{RESET}')
            logging.error(f'detail_score: {dic["豆瓣评分"]}{RESET}')
            logging.error(f'detail_url: {dic["详情页链接"]}{RESET}')
            logging.error(f'director: {dic["导演"]}{RESET}')
            logging.error(f'release_date: {dic["上映日期"]}{RESET}')
            logging.error(f'synopsis: {dic["剧情简介"]}{RESET}')
            logging.error(f'title: {dic["片名"]}{RESET}')

            movie_list.append(dic)
            time.sleep(1)  # 增加请求间隔

        logging.info(f'{RED}第{page}/10页爬取完成{RESET}')
        time.sleep(2)  # 页间延迟

    except requests.exceptions.RequestException as e:
        logging.error(f'{RED}请求异常：{str(e)}{RESET}')
        continue

# 定义CSV文件路径
csv_file_path = 'douban_top250.csv'

# 写入CSV文件
with open(csv_file_path, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=movie_list[0].keys())
    writer.writeheader()
    writer.writerows(movie_list)

logging.info(f'{RED}数据已成功保存到 {csv_file_path}{RESET}')

# 连接MySQL数据库
db = pymysql.connect(
    host='localhost',
    user='root',
    password='1234567890',
    database='test',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)

try:
    with db.cursor() as cursor:
        # 清空表
        clear_table_sql = "TRUNCATE TABLE movies"
        cursor.execute(clear_table_sql)

        # 创建表
        create_table_sql = """
        CREATE TABLE IF NOT EXISTS movies (
            序号 INT PRIMARY KEY,
            片名 VARCHAR(255),
            导演 VARCHAR(255),
            编剧 VARCHAR(255),
            主演 VARCHAR(255),
            类型 VARCHAR(255),
            制作国家地区 VARCHAR(255),
            语言 VARCHAR(255),
            上映日期 VARCHAR(100),
            片长 VARCHAR(100),
            又名 VARCHAR(255),
            豆瓣评分 VARCHAR(10),
            评分人数 VARCHAR(255),
            剧情简介 TEXT
        )
        """
        cursor.execute(create_table_sql)

        # 插入数据
        insert_sql = """
        INSERT INTO movies (
            序号, 片名, 导演, 编剧, 主演, 类型, 制作国家地区, 语言, 上映日期, 片长, 又名, 豆瓣评分, 评分人数, 剧情简介
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
        """
        for movie in movie_list:
            cursor.execute(insert_sql, (
                movie['序号'],
                movie['片名'],
                movie['导演'],
                movie['编剧'],
                movie['主演'],
                movie['类型'],
                movie['制作国家/地区'],
                movie['语言'],
                movie['上映日期'],
                movie['片长'],
                movie['又名'],
                movie['豆瓣评分'],
                movie['评分人数'],
                movie['剧情简介']
            ))

    # 提交事务
    db.commit()
    logging.info(f'{RED}数据已成功插入数据库{RESET}')

finally:
    # 关闭数据库连接
    db.close()


logging.info(f'{RED}爬虫执行完毕，共爬取 {len(movie_list)} 条数据{RESET}')
