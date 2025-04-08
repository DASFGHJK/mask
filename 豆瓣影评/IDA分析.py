import pandas as pd
import jieba
from collections import Counter
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from PIL import ImageFont

plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用SimHei字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# 读取Excel文件
file_path = '哪吒影评_数据保存.xlsx'
df = pd.read_excel(file_path)

# 提取影评内容列
reviews = df['影评内容'].dropna()  # 删除缺失值

# 文本预处理：分词和去除停用词
words = []
for review in reviews:
    words.extend(jieba.lcut(review))

# 停用词列表（可以根据需要扩展）
stopwords = set(['的', '是', '在', '和', '就', '有', '而', '了', '也', '与', '一个', '什么', '这么', '这样', '那么'])
words = [word for word in words if word not in stopwords]

# 统计词频
word_counts = Counter(words)

# 设置词云参数，使用Mac系统自带的字体
wc = WordCloud(
    font_path='/System/Library/Fonts/PingFang.ttc',  # 使用Mac系统自带的字体
    background_color='white',
    max_words=200,
    width=800,
    height=600
)

# 生成词云
wc.generate_from_frequencies(word_counts)

# 显示词云图
plt.figure(figsize=(10, 8))
plt.imshow(wc, interpolation='bilinear')
plt.axis('off')
plt.title('哪吒影评词云图')
plt.show()
