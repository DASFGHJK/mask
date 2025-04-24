import pandas as pd
import matplotlib
matplotlib.use('Agg')  # 必须放在导入pyplot之前
import matplotlib.pyplot as plt
import networkx as nx
from collections import Counter

# 设置中文字体


# 读取Excel文件
file_path = '合并后_纵横文学总表.xlsx'
df = pd.read_excel(file_path)

# 提取类型信息
types = df['类型'].tolist()

# 统计每种类型出现的频率
type_counts = Counter(types)

# 创建图结构
G = nx.Graph()

# 添加节点
for book_type, count in type_counts.items():
    G.add_node(book_type, size=count * 10)

# 添加边
unique_types = list(type_counts.keys())
for i in range(len(unique_types)):
    for j in range(i + 1, len(unique_types)):
        G.add_edge(unique_types[i], unique_types[j], weight=1)

# 绘制图形
plt.figure(figsize=(12, 12))
pos = nx.spring_layout(G, seed=42)
node_sizes = [G.nodes[node]['size'] for node in G.nodes()]

nx.draw(G, pos,
        with_labels=True,
        node_size=node_sizes,
        node_color='lightblue',
        font_size=10,
        font_weight='bold',
        edge_color='gray')

plt.title('网络文学类型关系图')

# 保存图片代替直接显示
plt.savefig('文学类型关系图.png', dpi=300, bbox_inches='tight')
print("可视化结果已保存为 文学类型关系图.png")

