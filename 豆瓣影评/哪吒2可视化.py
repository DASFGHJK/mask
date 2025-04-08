import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import jieba  # 中文分词库
import numpy as np
import os
import matplotlib
matplotlib.use('tkagg')

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
plt.rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS']  # 支持中文的字体
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
if os.path.exists(r'C:\Windows\Fonts\msyh.ttc'):  # Windows系统常用字体（微软雅黑）
    font_path = r'C:\Windows\Fonts\msyh.ttc'
elif os.path.exists(r'C:\Windows\Fonts\simsun.ttc'):  # 另一种常见字体（宋体）
    font_path = r'C:\Windows\Fonts\simsun.ttc'
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
plt.rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False

plt.show()
