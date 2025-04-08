import requests
from lxml import etree
import pandas as pd
from concurrent.futures import ThreadPoolExecutor, as_completed
from contextlib import redirect_stdout

# 请求头
headers1 = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Referer': 'http://172.19.163.3:8060/GetDat?id=2405010224&pg=1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0'
}

# 初始化一个空列表来存储所有数据
data_list = []


def fetch_page(page):
    print(f"正在抓取第{page}页------------------------")
    url1 = f'http://172.19.163.3:8060/GetDat?id=2405010224&pg={page}'
    response = requests.get(url1, headers=headers1, verify=False)
    response.raise_for_status()  # 检查请求是否成功
    tree = etree.HTML(response.text)

    # 提取数据
    hu_kou_list = tree.xpath("//td[1]/text()")  # 户口
    sex_list = tree.xpath("//td[2]/text()")  # 性别
    name_list = tree.xpath("//td[3]/text()")  # 姓名
    xue_li_list = tree.xpath("//td[4]/text()")  # 学历
    brithday_list = tree.xpath("//td[5]/text()")  # 出生日期
    sheng_list = tree.xpath("//td[6]/text()")  # 省
    zhi_cheng_list = tree.xpath("//td[7]/text()")  # 职称
    shi_list = tree.xpath("//td[8]/text()")  # 市

    # 将数据存储到列表中
    for hu_kou, sex, name, xue_li, brithday, sheng, zhi_cheng, shi in zip(
            [str(x).strip() for x in hu_kou_list],
            [str(x).strip() for x in sex_list],
            [str(x).strip() for x in name_list],
            [str(x).strip() for x in xue_li_list],
            [str(x).strip() for x in brithday_list],
            [str(x).strip() for x in sheng_list],
            [str(x).strip() for x in zhi_cheng_list],
            [str(x).strip() for x in shi_list]
    ):
        data_list.append({
            '户口': hu_kou,
            '性别': sex,
            '姓名': name,
            '学历': xue_li,
            '出生日期': brithday,
            '省': sheng,
            '职称': zhi_cheng,
            '市': shi
        })
        # 输出爬取到的数据
        print(hu_kou, sex, name, xue_li, brithday, sheng, zhi_cheng, shi)


def fetch_all_pages():
    with ThreadPoolExecutor(max_workers=1000) as executor:   #设置1个线程
        futures = [executor.submit(fetch_page, page) for page in range(1, 519)]
        for future in as_completed(futures):
            future.result()


def get_non(df):
    household_column = df['户口']
    household_counts = household_column.value_counts()
    total_households = household_counts.sum()
    percentage = (household_counts / total_households * 100).round(2)
    percentage_str = ', '.join([f"{val}%" for val in percentage])
    # print("农业户口和非农户口的占比:")
    print(percentage_str)


def sex_(df):
    sex_column = df['性别']
    total_sex_count = sex_column.value_counts(ascending=False)

    # 获取性别多的类型和数量
    majority_sex = total_sex_count.idxmax()
    majority_count = total_sex_count.max()

    # 获取性别少的类型和数量
    minority_sex = total_sex_count.idxmin()
    minority_count = total_sex_count.min()

    # 计算差值
    difference = majority_count - minority_count

    # 输出结果
    print(f"{majority_sex};{difference}")


def count_non_empty_city(df):
    city_column = df[df['市'] != '(空)']['市']
    non_empty_count = city_column.count()
    print(f'{non_empty_count}')


# def count_name_lengths(df):
#     name_column = df['姓名']
#     try:
#         length_counts = name_column.str.len().value_counts().reindex([2, 3, 4], fill_value=0)
#         length_counts_sorted = length_counts.sort_index(ascending=False)
#         print("姓名")
#         print(' '.join(map(str, length_counts_sorted)))
#     except:
#         print("姓名")
#         print("0")


def count_education_levels(df):
    education_column = df['学历']
    postgraduate_count = (education_column == '研究生').sum()
    bachelor_college_count = education_column.isin(['本科', '专科']).sum()
    high_junior_count = education_column.isin(['高中', '初中']).sum()
    sorted_counts = sorted([postgraduate_count, bachelor_college_count, high_junior_count])
    print("学历")
    print('<'.join(map(str, sorted_counts)))


def count_sheng(df):
    sheng_column = df[df['省'] != '(空)']['省']
    south_count = sheng_column.str.contains('南').sum()
    north_count = sheng_column.str.contains('北').sum()
    print(f'{south_count + north_count}')


def count_zhicheng(df):
    sheng_column = df[df['职称'] != '(空)']['职称']
    south_count = sheng_column.str.contains('高级工程师').sum()
    print(f'{south_count}')


def count_age_range(df):
    birth_column = pd.to_datetime(df['出生日期'], format='%Y-%m-%d', errors='coerce')
    valid_birth_column = birth_column.dropna()
    age_column = 2023 - valid_birth_column.dt.year
    age_range_count = age_column[(age_column >= 20) & (age_column <= 60)].count()
    print(f'{age_range_count}')


if __name__ == '__main__':
    fetch_all_pages()

    # 将数据转换为DataFrame
    df = pd.DataFrame(data_list)
    # 删除全为字符串 "None" 的列
    df = df.loc[:, ~df.apply(lambda col: col.astype(str) == "None").all()]
    # 保存为Excel文件
    df.to_excel('中国石油数据.xlsx', index=False)
    print("数据已成功保存为 中国石油数据.xlsx")
    # df=pd.read_excel('中国石油数据.xlsx')
    # 执行统计函数

    get_non(df)  # 农业与非农
    sex_(df)  # 性别
    count_age_range(df)  # 20-60年龄单位
    count_sheng(df)  # 省级南北的出现储量
    count_zhicheng(df)  # 高级职称数量
    count_non_empty_city(df)  # 市级非空
