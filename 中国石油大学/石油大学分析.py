import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib
matplotlib.use('tkagg')
plt.rcParams['font.family'] = 'Heiti TC'  # 尝试繁体中文黑体
# plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置中文显示
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题



# 读取Excel文件
file_path = '中国石油数据(1).xlsx'
df = pd.read_excel(file_path)

# 1. 性别：饼图呈现百分比
# gender_counts = df['性别'].value_counts()
# plt.figure(figsize=(6, 6))
# plt.pie(gender_counts, labels=gender_counts.index, autopct='%1.4f%%', startangle=140)
# plt.title('性别分布')
# plt.savefig('性别分布.png', dpi=300, bbox_inches='tight')  # 新增保存语句
# plt.show()
#
# # 2. 年龄: 15年为一个周期，饼图或折线图呈现各年龄段的人数百分比
# df['出生日期'] = pd.to_datetime(df['出生日期'],format='%Y-%m-%d',errors='coerce')  #强制日期格式
# df = df.dropna(subset=['出生日期'])  # 删除无效日期行（可选）
#
# # 使用固定年份2023计算年龄
# current_year = 2023
# df['年龄'] = current_year - df['出生日期'].dt.year
#
#
# df['年龄'] = (pd.Timestamp.now().year - df['出生日期'].dt.year)
# age_bins = [0, 15, 30, 45, 60, 75, 90]
# age_labels = ['0-15', '16-30', '31-45', '46-60', '61-75', '76+']
# df['年龄段'] = pd.cut(df['年龄'], bins=age_bins, labels=age_labels, right=False)
# age_distribution = df['年龄段'].value_counts(normalize=True) * 100
#
# # 使用饼图展示
# plt.figure(figsize=(8, 8))
# plt.pie(age_distribution, labels=age_distribution.index, autopct='%1.1f%%', startangle=140)
# plt.title('年龄分布（饼图）')
# plt.savefig('年龄分布_饼图.png', dpi=300, bbox_inches='tight')  # 新增
# plt.show()
#
# # 使用折线图展示
# age_distribution.plot(kind='line', marker='o')
# plt.title('年龄分布（折线图）')
# plt.xlabel('年龄段')
# plt.ylabel('人数百分比 (%)')
# plt.xticks(rotation=45)
# plt.grid(True)
# plt.savefig('年龄分布_折线图.png', dpi=300, bbox_inches='tight')  # 新增
# plt.show()
#
# # 3. 省：统计各省的人数，柱状图
# df['省']=df[df['省'] != '(空)']['省']
# province_counts = df['省'].value_counts()
# plt.figure(figsize=(10, 6))
# sns.barplot(x=province_counts.index, y=province_counts.values)
# plt.title('各省人数分布')
# plt.xlabel('省份')
# plt.ylabel('人数')
# plt.xticks(rotation=90)
# plt.savefig('省份分布.png', dpi=300, bbox_inches='tight')  # 新增
# plt.show()

# 4. 职称：各职称的人数（比例），用饼图显示# 新增分类映射字典（根据实际数据补充）
# 新增分类映射字典（根据实际数据补充）
category_map = {
    '高级工程师': '工程类',
    '正高级工程师': '工程类',
    '工程师': '工程类',
    '助理工程师': '工程类',
    '技术员': '工程类',
    '教授': '教育类',
    '副教授': '教育类',
    '讲师': '教育类',
    '助教': '教育类'
}

# 创建分类列（未匹配的归为其他）
df['职称分类'] = df['职称'].map(category_map).fillna('其他')

# 准备数据
title_counts = df[df['职称'] != '(空)']['职称'].value_counts()  # 外环数据（过滤空值）
category_counts = df['职称分类'].value_counts()  # 内环数据

# 设置颜色
outer_colors = plt.cm.tab20c(range(len(title_counts)))
inner_colors = ['#FF6B6B', '#4ECDC4', '#C7C7C7']  # 红：教育类，蓝绿：工程类，灰：其他

# 绘制双层饼图
fig, ax = plt.subplots(figsize=(10, 10))

# 外环（具体职称）
wedges_outer, texts_outer, autotexts_outer = ax.pie(
    title_counts,
    labels=title_counts.index,
    autopct='%1.1f%%',
    startangle=140,
    pctdistance=0.85,
    radius=1.3,
    colors=outer_colors,
    wedgeprops=dict(width=0.3, edgecolor='w')
)

# 内环（大类分类）
wedges_inner, texts_inner, autotexts_inner = ax.pie(
    category_counts,
    autopct='%1.1f%%',
    startangle=140,
    radius=1.0,
    colors=inner_colors[:len(category_counts)],
    wedgeprops=dict(width=0.3, edgecolor='w'),
    textprops={'color':'white'}  # 内环文字颜色
)

# 添加图例
# 添加图例（最终正确版本）
plt.legend(handles=wedges_outer,
           labels=title_counts.index.tolist(),  # 关键修改点：Index -> list
           title="具体职称",
           loc="center left",
           bbox_to_anchor=(1, 0.2, 0.5, 0.8))

# 调整标题位置避免重叠
plt.title('职称分布（外环：具体职称 | 内环：大类分布）', y=1.05)  # 提升标题位置

plt.savefig('职称分布.png', dpi=300, bbox_inches='tight')  # 新增在show()之前
# 调整标签位置
plt.setp(autotexts_outer, size=8, weight="bold", color='white')
plt.setp(autotexts_inner, size=12, weight="bold")

plt.show()

