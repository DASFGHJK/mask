# 国企数据分析.py

import pandas as pd
from pyecharts.charts import Bar, Pie
from pyecharts import options as opts
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# 1. 读取Excel文件
file_path = 'jobs.xlsx'
df = pd.read_excel(file_path)

# 2. 数据清洗和预处理
# 检查缺失值
print("Missing values:\n", df.isnull().sum())

# 填充或删除缺失值（根据实际情况选择）
df.dropna(inplace=True)  # 删除含有缺失值的行

# 转换数据类型（如果需要）
df['经验要求'] = df['经验要求'].astype(str)
df['学历要求'] = df['学历要求'].astype(str)

# 3. 数据分析
# 统计各列的基本信息
print("\nData description:\n", df.describe(include='all'))

# 统计公司性质为国企的数据
state_owned_companies = df[df['公司性质'] == '国企']
print("\nNumber of state-owned companies:", len(state_owned_companies))

# 统计不同职位名称的数量
job_titles_count = df['职位名称'].value_counts()
print("\nJob titles count:\n", job_titles_count)

# 统计不同经验要求的数量
experience_requirements_count = df['经验要求'].value_counts()
print("\nExperience requirements count:\n", experience_requirements_count)

# 统计不同学历要求的数量
education_requirements_count = df['学历要求'].value_counts()
print("\nEducation requirements count:\n", education_requirements_count)

# 统计不同公司规模的数量
company_size_count = df['公司规模'].value_counts()
print("\nCompany size count:\n", company_size_count)

# 4. 使用pyecharts进行数据可视化

# 职位名称分布
job_titles_data = [(name, count) for name, count in job_titles_count.items()]
bar_job_titles = (
    Bar()
    .add_xaxis([item[0] for item in job_titles_data])
    .add_yaxis("职位数量", [item[1] for item in job_titles_data])
    .set_global_opts(title_opts=opts.TitleOpts(title="职位名称分布"))
)
bar_job_titles.render("job_titles_distribution.html")

# 经验要求分布
experience_requirements_data = [(req, count) for req, count in experience_requirements_count.items()]
bar_experience_requirements = (
    Bar()
    .add_xaxis([item[0] for item in experience_requirements_data])
    .add_yaxis("职位数量", [item[1] for item in experience_requirements_data])
    .set_global_opts(title_opts=opts.TitleOpts(title="经验要求分布"))
)
bar_experience_requirements.render("experience_requirements_distribution.html")

# 学历要求分布
education_requirements_data = [(edu, count) for edu, count in education_requirements_count.items()]
pie_education_requirements = (
    Pie()
    .add("", education_requirements_data)
    .set_global_opts(title_opts=opts.TitleOpts(title="学历要求分布"))
    .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c} ({d}%)"))
)
pie_education_requirements.render("education_requirements_distribution.html")

# 公司规模分布
company_size_data = [(size, count) for size, count in company_size_count.items()]
bar_company_size = (
    Bar()
    .add_xaxis([item[0] for item in company_size_data])
    .add_yaxis("公司数量", [item[1] for item in company_size_data])
    .set_global_opts(title_opts=opts.TitleOpts(title="公司规模分布"))
)
bar_company_size.render("company_size_distribution.html")


# 5. 生成职位福利词云图
def generate_wordcloud(text):
    wordcloud = WordCloud(
        width=800,
        height=400,
        background_color='white',
        font_path='/System/Library/Fonts/PingFang.ttc'
    ).generate(text)

    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.title('职位福利词云图')
    plt.savefig('job_benefits_wordcloud.png')
    plt.show()


# 提取所有职位福利文本并生成词云图
benefits_text = ' '.join(df['职位福利'])
generate_wordcloud(benefits_text)
