import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import jieba  # 中文分词库
import numpy as np
import os
import matplotlib
matplotlib.use('tkagg')
import random
import time
import requests
from lxml import etree
import pandas as pd

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
    '_ga_RXNMP372GL': 'GS1.1.1742997942.9.0.1742997943.59.0.0',
    'viewed': '"37212968"',
    'dbcl2': '"272816827:/u5adYVyrnE"',
    '__utmz': '30149280.1743937017.13.11.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
    '__utmz': '223695111.1743937024.9.7.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/search',
    'ck': 'jUu3',
    'ap_v': '0,6.0',
    '_pk_ref.100001.4cf6': '%5B%22%22%2C%22%22%2C1743992551%2C%22https%3A%2F%2Fwww.douban.com%2Fsearch%3Fsource%3Dsuggest%26q%3D%E8%A7%A6%E4%B8%8D%E5%8F%AF%E5%8F%8A%22%5D',
    '_pk_ses.100001.4cf6': '1',
    '__utma': '30149280.41827125.1742651446.1743937017.1743992551.14',
    '__utmb': '30149280.0.10.1743992551',
    '__utmc': '30149280',
    '__utma': '223695111.1681363369.1742651450.1743937024.1743992551.10',
    '__utmb': '223695111.0.10.1743992551',
    '__utmc': '223695111',
    'frodotk_db': '"cd9e5413548b5e3668dafc39fda21aa2"',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://movie.douban.com/subject/34780991/reviews?sort=hotest&start=20',
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

data = []

for page in range(0, 15):
    time.sleep(random.randint(1, 3))
    params = {'sort': 'hotest', 'start': str(page * 20)}
    print(f"当前正在第{page + 1}页-------------->")

    response = requests.get(
        'https://movie.douban.com/subject/34780991/reviews',
        params=params,
        cookies=cookies,
        headers=headers
    )
    tree = etree.HTML(response.text)

    # 数据提取
    title_list = tree.xpath("//header[@class='main-hd']/a[@class='name']/text()")
    time_list = tree.xpath("//header[@class='main-hd']/span[@class='main-meta']/text()")
    score_list = tree.xpath("//header/span[contains(@class,'rating')]/@title")  # 优化后的评分XPath
    duan_pin_list = tree.xpath("//div[@class='main-bd']/h2/a/text()")
    chang_pin_list = tree.xpath("//div[contains(@class,'short-content')]/text()")

    # 数据处理
    chang_pin_li = [c.replace('\n', '').strip() for c in chang_pin_list if c.strip()]

    # 统一长度校验
    min_len = min(
        len(title_list),
        len(time_list),
        len(score_list),
        len(duan_pin_list),
        len(chang_pin_li)
    )

    # 数据截断
    titles = title_list[:min_len]
    times = time_list[:min_len]
    scores = score_list[:min_len]
    duan_pins = duan_pin_list[:min_len]
    chang_pins = chang_pin_li[:min_len]

    # 数据收集（关键修正点）
    for t, tm, s, dp, cp in zip(titles, times, scores, duan_pins, chang_pins):
        data.append([t.strip(), tm.strip(), s.strip(), dp.strip()])
        print(f"已采集：{t} | {tm} | {s}")

# 保存数据（列名同步修正）
df = pd.DataFrame(
    data,
    columns=['用户', '时间', '评分', '短评']  # 包含5个字段
)

df.to_excel('哪吒2_影评.xlsx', index=False)
print(f"共保存 {len(df)} 条数据")

# 读取Excel文件
file_path = '哪吒2_影评.xlsx'  # 替换为实际的Excel文件路径
df = pd.read_excel(file_path)

# 第一步：绘制饼图
# 统计评分的分布
score_counts = df['评分'].value_counts().sort_index()

# 绘制饼图
plt.figure(figsize=(8, 8))
plt.pie(
    score_counts.values,
    labels=score_counts.index,
    autopct='%1.1f%%',
    startangle=90,
    colors=plt.cm.Set3.colors,  # 使用Set3颜色映射
    wedgeprops={'edgecolor': 'white', 'linewidth': 1}
)
plt.title('评分分布饼图')
plt.axis('equal')  # 确保饼图为圆形

# 设置全局字体为支持中文的字体
plt.rcParams['font.sans-serif'] = ['PingFang SC', 'SimHei', 'Arial Unicode MS']  # 支持中文的字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

plt.show()

# 第二步：绘制词云图
# 合并所有短评文本
short_comments = ' '.join(df['短评'].dropna())  # 去除NaN值

# 如果是中文，进行分词处理
words = ' '.join(jieba.lcut(short_comments))  # 使用结巴分词

# 加载停用词
stopwords = set()
with open('哈工大停用词表.txt', 'r', encoding='utf-8') as f:
    stopwords.update([line.strip() for line in f])

# 过滤停用词
filtered_words = [word for word in words.split() if word not in stopwords and len(word) > 1]

# 创建词云对象
# 动态获取支持中文的字体路径
if os.path.exists('/System/Library/Fonts/PingFang.ttc'):  # Mac系统常用字体
    font_path = '/System/Library/Fonts/PingFang.ttc'
elif os.path.exists('/Library/Fonts/Songti.ttc'):  # 另一种常见字体
    font_path = '/Library/Fonts/Songti.ttc'
else:
    raise FileNotFoundError("未找到支持中文的字体，请手动指定字体路径")

wordcloud = WordCloud(
    font_path=font_path,  # 设置字体路径，确保支持中文显示
    width=800,
    height=400,
    background_color='white',
    stopwords=stopwords  # 添加停用词过滤
).generate(' '.join(filtered_words))

# 绘制词云图
plt.figure(figsize=(10, 5))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.title('评论词云图')

# 设置全局字体为支持中文的字体
plt.rcParams['font.sans-serif'] = ['PingFang SC', 'SimHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False

plt.show()


df['时间'] = pd.to_datetime(df['时间'])

# 按 15 天为一个节点统计评论量
df.set_index('时间', inplace=True)  # 将 '时间' 列设置为索引
comment_counts_15d = df.resample('15D').size()

# 绘制折线图
plt.figure(figsize=(10, 6))
plt.plot(comment_counts_15d.index, comment_counts_15d.values, marker='o')
plt.title('每15天评论量变化趋势')
plt.xlabel('日期')
plt.ylabel('评论量')
plt.grid(True)

# 旋转 x 轴标签以便更好地显示
plt.xticks(rotation=45)

plt.tight_layout()  # 自动调整子图参数，使之填充整个图像区域
plt.show()