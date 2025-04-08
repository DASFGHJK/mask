import pandas as pd
import matplotlib
matplotlib.use('TkAgg')  # 更换后端为 TkAgg
import matplotlib.pyplot as plt

# 设置中文字体和负号显示
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 读取数据
df = pd.read_excel('北极星招聘数据.xlsx')

# 统计工作经验和学历要求
experience_counts = df['资历'].value_counts()
education_counts = df['学历'].value_counts()

# 创建子图
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 6))

# 绘制工作经验分布饼图
experience_counts.plot(kind='pie', autopct='%1.1f%%', ax=ax1)
ax1.set_title('工作经验要求分布')

# 绘制学历要求分布饼图
education_counts.plot(kind='pie', autopct='%1.1f%%', ax=ax2)
ax2.set_title('学历要求分布')

# 保存图表为图片文件
plt.savefig('经验与学历要求分布.png', dpi=300, bbox_inches='tight')

# 显示图表
plt.show()