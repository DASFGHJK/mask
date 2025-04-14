import matplotlib
import matplotlib.pyplot as plt
import pandas as pd


matplotlib.use('tkagg')


try:
    matplotlib.rcParams['font.sans-serif'] = ["Songti SC"]  # 替换为其他可用的中文字体
except KeyError:
    matplotlib.rcParams['font.ans-serif'] = ["SimHei"]


df = pd.read_excel('豆瓣高分电影.xlsx')


df_exploded = df.assign(diqu=df['diqu'].str.split()).explode('diqu')

# 统计每个地区的电影数量
region_counts = df_exploded['diqu'].value_counts()

# 绘制柱状图
plt.figure(figsize=(12, 6))
region_counts.plot(kind='bar')
plt.title('各个地区电影数量')
plt.xlabel('地区')
plt.ylabel('电影数量')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()


df_exploded_kind = df.assign(kind=df['kind'].str.split()).explode('kind')


kind_counts = df_exploded_kind['kind'].value_counts()

# 绘制饼图
plt.figure(figsize=(10, 8))
kind_counts.plot(kind='pie', autopct='%1.1f%%', startangle=140)
plt.title('各个电影种类数量')
plt.ylabel('')
plt.tight_layout()
plt.show()

df['pubtime']=df['pubtime'].astype(str)
# 处理pubtime列，提取年份
df['pubtime'] = df['pubtime'].str.extract(r'(\d{4})', expand=False)

# 统计每个年份的电影数量
pubtime_counts = df['pubtime'].value_counts().sort_index()



# 绘制折线图
plt.figure(figsize=(12, 6))
pubtime_counts.plot(kind='line', marker='o')
plt.title('各个年份上映的电影数量')
plt.xlabel('年份')
plt.ylabel('电影数量')
plt.xticks(rotation=45)
plt.grid(True)
plt.tight_layout()
plt.show()