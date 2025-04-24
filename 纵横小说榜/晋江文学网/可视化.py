import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import networkx as nx
from collections import Counter

# 可视化设置
plt.rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False

# 数据准备
df = pd.read_excel('合并后_晋江文学总表.xlsx')

# 类型处理与过滤
all_types = [typ for types in df['标签'] for typ in types.split('，')]
type_counts = Counter(all_types)

# 参数设置
min_type_count = 3    # 类型最小出现次数
edge_threshold = 2     # 边权重阈值
min_degree = 3        # 节点最小连接度

# 过滤低频类型
filtered_types = {k:v for k,v in type_counts.items() if v >= min_type_count}

# 创建图结构
G = nx.Graph()
for t, cnt in filtered_types.items():
    G.add_node(t, size=cnt*10, count=cnt)

# 构建边
edges = []
for book_types in df['标签']:
    current = set(book_types.split('，'))
    for t1 in current:
        if t1 in filtered_types:
            for t2 in current:
                if t2 in filtered_types and t1 != t2:
                    edges.append((t1, t2))

# 添加过滤后的边
edge_weights = Counter(edges)
for (u, v), w in edge_weights.items():
    if w >= edge_threshold:
        G.add_edge(u, v, weight=w)

# 核心节点过滤
core_nodes = [n for n, d in G.degree() if d >= min_degree]
G = G.subgraph(core_nodes)

# 可视化布局
plt.figure(figsize=(14, 14))
pos = nx.spring_layout(G,
                      seed=42,
                      k=0.3,
                      iterations=50,
                      weight='weight')

# 动态可视化参数
node_sizes = [G.nodes[n]['size']*1.2 for n in G.nodes()]
edge_weights = [G[u][v]['weight']*0.7 for u,v in G.edges()]

# 绘制元素
nx.draw_networkx_nodes(
    G, pos,
    node_size=node_sizes,
    node_color='#66B2FF',
    edgecolors='#1F77B4',
    linewidths=0.8,
    alpha=0.9
)

nx.draw_networkx_edges(
    G, pos,
    width=edge_weights,
    edge_color='#888888',
    alpha=0.4,
    connectionstyle='arc3,rad=0.1'
)

nx.draw_networkx_labels(
    G, pos,
    font_size=12,
    font_weight='bold',
    font_family='Arial Unicode MS'
)

# 添加图例说明
plt.text(0.95, 0.95,
        f"核心类型关系 (出现≥{min_type_count}次，连接≥{min_degree}种)",
        transform=plt.gca().transAxes,
        ha='right', va='top',
        bbox=dict(facecolor='white', alpha=0.8))

plt.axis('off')
plt.savefig('核心文学类型关系图.png', dpi=350, bbox_inches='tight')
print("可视化结果已保存为 核心文学类型关系图.png")
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.dates import DateFormatter, YearLocator

# 在原有代码基础上添加以下修改

# ==== 新增参数设置 ====
min_timeline_count = 5  # 时间线显示阈值（总出现次数）

# ==== 修改数据预处理部分 ====
# 提取年份（增强容错处理）
df["年份"] = df["来源文件"].str.extract(r'(\d{4})').dropna().astype(int)
df = df[df["年份"].between(2000, 2024)]  # 过滤异常年份
data=df['标签'].tolist()
dx=[]
for dat in data:
    data_list=dat.split('，')
    for d in data_list:
        dx.append(d)
dg=pd.DataFrame(dx)
# ==== 修改统计逻辑 ====
# 按类型和年份统计（增加过滤）
type_year_counts = (
    df.groupby(["标签", "年份"])
    .size()
    .unstack(fill_value=0)
    # 新增过滤步骤
    .loc[lambda df: df.sum(axis=1) >= min_timeline_count]
)


plt.figure(figsize=(15, 8))
ax = plt.gca()

# 颜色映射与网络图一致
color_cycle = plt.cm.tab20.colors

for idx, book_type in enumerate(type_year_counts.index):
    # 优化年份范围计算
    active_years = type_year_counts.loc[book_type][type_year_counts.loc[book_type] > 0].index
    if len(active_years) == 0:
        continue

    start_year = active_years.min()
    end_year = active_years.max()

    ax.broken_barh(
        [(start_year, end_year - start_year + 1)],
        (idx - 0.4, 0.8),
        facecolors=color_cycle[idx % 20],
        edgecolor="black",
        linewidth=0.5
    )

    # 优化标签显示
    total_count = type_year_counts.loc[book_type].sum()
    ax.text(
        end_year + 0.5, idx,
        f'{total_count}',
        va="center",
        ha="left",
        fontsize=10,
        bbox=dict(facecolor='white', alpha=0.8, edgecolor='none')
    )

# ==== 坐标轴优化 ====
ax.set_yticks(range(len(type_year_counts)))
ax.set_yticklabels(type_year_counts.index, fontsize=10)
ax.set_xlim(type_year_counts.columns.min() - 1, type_year_counts.columns.max() + 3)
ax.xaxis.set_major_locator(YearLocator())
ax.set_title(
    f"主流类型时间分布（总出现≥{min_timeline_count}次）",
    fontsize=14,
    pad=15
)

plt.savefig('主流类型时间分布.png', dpi=300, bbox_inches='tight')
print("时间线图已保存为 主流类型时间分布.png")
