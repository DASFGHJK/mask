import pandas as pd
from pyecharts.charts import Bar, Pie, Line, WordCloud, Map
from pyecharts import options as opts
from pyecharts.globals import ThemeType
from wordcloud import WordCloud
import matplotlib.pyplot as plt

def read_excel_data(file_path):
    """读取Excel文件并返回DataFrame"""
    return pd.read_csv(file_path)


def process_salary(salary_str):
    """处理薪资字符串，返回平均月薪（精确到小数点后两位）"""
    if not salary_str or pd.isna(salary_str):
        print(f"Warning: 无效的薪资字符串: {salary_str}")
        return None

    try:
        # 拆分薪资范围和乘数
        if '·' in salary_str:
            salary_range_part, multiplier_part = salary_str.split('·', 1)
            multiplier = int(multiplier_part.replace('薪', '').strip())
        else:
            salary_range_part = salary_str
            multiplier = 12  # 默认12薪

        # 统一处理单位转换的函数（优化版）
        def convert_part(part):
            part = part.strip()
            if '万' in part:
                return float(part.replace('万', '')) * 10000
            elif '千' in part:
                return float(part.replace('千', '')) * 1000
            else:  # 处理没有单位的情况
                # 根据数值范围智能判断（假设月薪一般不会超过10万元）
                value = float(part)
                return value * 10000 if value >= 1 else value * 1000

        # 处理薪资范围部分
        if '-' in salary_range_part:
            low_str, high_str = salary_range_part.split('-', 1)
            low = convert_part(low_str)
            high = convert_part(high_str)

            # 计算月平均薪资（保留两位小数）
            avg_monthly = (low + high) / 2 * multiplier / 12
        else:  # 处理单一数值的情况
            value = convert_part(salary_range_part)
            avg_monthly = value * multiplier / 12

        return round(avg_monthly, 2)

    except (ValueError, AttributeError) as e:
        print(f"Error: 无法解析薪资字符串 '{salary_str}': {e}")
        return None


def create_bar_chart(data, x_col, y_col, title, x_name, y_name, filename):
    """创建柱状图"""
    bar = (
        Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
        .add_xaxis(data[x_col].tolist())
        .add_yaxis(y_name, data[y_col].tolist())
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title),
            xaxis_opts=opts.AxisOpts(
                name=x_name,
                axislabel_opts=opts.LabelOpts(rotate=45)  # 旋转 x 轴标签
            ),
            yaxis_opts=opts.AxisOpts(name=y_name)
        )
    )
    bar.render(filename)
#
#
def create_pie_chart(data, name, title, filename):
    """创建饼状图"""
    if not isinstance(data, pd.Series):
        print(f"Error: {name} 数据不是 Series 类型")
        return

    pie = (
        Pie(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
        .add(name, [list(z) for z in zip(data.index, data.values)])
        .set_global_opts(title_opts=opts.TitleOpts(title=title))
        .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c} ({d}%)"))
    )
    pie.render(filename)
    print(f"{filename} 生成成功")
#
def create_line_chart(data, x_col, y_col, title, x_name, y_name, filename):
    """创建折线图"""
    line = (
        Line(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
        .add_xaxis(data[x_col].unique().tolist())
        .add_yaxis(y_name, data.groupby(x_col)[y_col].mean().tolist())
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title),
            xaxis_opts=opts.AxisOpts(
                name=x_name,
                axislabel_opts=opts.LabelOpts(rotate=45)  # 旋转 x 轴标签
            ),
            yaxis_opts=opts.AxisOpts(name=y_name)
        )
    )
    line.render(filename)


def generate_wordcloud(text):
    wordcloud = WordCloud(
        width=800,
        height=400,
        background_color='white',
        font_path='/System/Library/Fonts/PingFang.ttc'  # 使用绝对路径
    ).generate(text)

    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.savefig('job_benefits_wordcloud.png')
    plt.show()


def create_map_chart(data, name, title, filename):
    """创建地图图"""
    map_chart = (
        Map(init_opts=opts.InitOpts(width="800px", height="600px", theme=ThemeType.LIGHT))
        .add(name, [list(z) for z in zip(data.index, data.values)], "china")
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title),
            visualmap_opts=opts.VisualMapOpts(max_=max(data.values), min_=min(data.values))
        )
    )
    map_chart.render(filename)
#
# # 读取Excel文件
df = read_excel_data('北极星招聘数据.csv')
# # 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题
# 处理薪资数据
df['平均月薪'] = df['薪资'].apply(process_salary)


# # # 5.1.2 城市与职位数量柱状图
city_counts = df['城市'].value_counts().reset_index()
city_counts.columns = ['城市', '数量']
create_bar_chart(city_counts, '城市', '数量', '城市与职位数量柱状图', '城市', '职位数量', 'city_job_count_bar.html')
#
# # 5.1.3 职位与工作经验、学历要求饼状图
salary_counts = df['学历'].value_counts()

alary_counts = df['学历'].value_counts()
pie_salary = (
    Pie()
    .add("学历分布", list(zip(salary_counts.index, salary_counts)))
    .set_global_opts(title_opts={"text": "学历分布"})
)
pie_salary.render("salary.html")

# 资历饼图
exp_counts = df['资历'].value_counts()
pie_exp = (
    Pie()
    .add("资历分布", list(zip(exp_counts.index, exp_counts)))
    .set_global_opts(title_opts={"text": "资历分布"})
)
pie_exp.render("experience.html")
#
# # 5.1.4 工作城市与薪资走势图
salary_data = df[['城市', '平均月薪']].copy()
create_line_chart(salary_data, '城市', '平均月薪', '工作城市与薪资走势图', '城市', '平均薪资（元）', 'city_salary_line.html')
#
# # 5.1.5 福利待遇词云图
# 5.1.6 全国各省市平均薪资水平柱状图
province_salary = salary_data.groupby('城市')['平均月薪'].mean().reset_index()
province_salary.columns = ['城市', '平均月薪']

create_bar_chart(province_salary, '城市', '平均月薪', '全国各省市平均薪资水平柱状图', '城市', '平均月薪（元）', 'province_salary_bar.html')

print("所有图表已生成，请查看对应的HTML文件。")
# 修改前
benefits_text = ' '.join(df['其他信息'].dropna().astype(str).tolist())
generate_wordcloud(benefits_text)

# 修改后
stopwords = {'的', '等', '、', '及', '相关', '具有', '优先', '要求', '包括'}
benefits_text = ' '.join([
    text for text in df['其他信息'].dropna().astype(str).tolist()
    if text.strip() not in stopwords
])
generate_wordcloud(benefits_text)



