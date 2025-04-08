import pandas as pd
import jieba  # 导入jieba库
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from collections import Counter  # 用于统计词频
import re
# 设置中文字体，防止中文显示乱码
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用SimHei字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
# 读取 Excel 文件
file_path = 'datas.xlsx'  # 替换为您的文件路径
df = pd.read_excel(file_path)
# 去除评论内容中 [] 括起来的内容
df["评论内容"] = df["评论内容"].apply(lambda x: re.sub(r"\[.*?\]", "", str(x)))
# 合并所有评论内容为一个字符串，去除缺失值
comments = ' '.join(df['评论内容'].dropna())

# 使用jieba进行分词
words = jieba.cut(comments)

# 加载停用词表
stopwords_path = 'stopwords.txt'  # 替换为您的停用词文件路径
with open(stopwords_path, 'r', encoding='utf-8') as f:
    stopwords = set([line.strip() for line in f])

# 过滤停用词
filtered_words = [word for word in words if word not in stopwords and len(word) > 1]  # 去除停用词和单字词

# 统计词频
word_counts = Counter(filtered_words)

# 将词频统计结果转换为DataFrame
word_counts_df = pd.DataFrame(word_counts.items(), columns=['词语', '频次'])

# 按频次降序排序
word_counts_df = word_counts_df.sort_values(by='频次', ascending=False)

# 保存词频统计结果为CSV文件
word_counts_df.to_csv('word_t.csv', index=False, encoding='utf-8-sig')

# 将分词结果合并为一个字符串
word_string = ' '.join(filtered_words)

# 创建词云对象
wordcloud = WordCloud(
    font_path='C:/Windows/Fonts/simhei.ttf',  # 设置中文字体路径
    width=800,  # 图宽
    height=400,  # 图高
    background_color='white',  # 背景色
    collocations=False  # 避免组合词
).generate(word_string)

# 绘制词云图
plt.figure(figsize=(10, 5))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')  # 关闭坐标轴
plt.title('词云图')
plt.savefig('词云图.png')
plt.show()