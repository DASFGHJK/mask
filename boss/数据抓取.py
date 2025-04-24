import pandas as pd
import re


def process_salary(salary_str):
    """处理薪资字符串，返回平均年薪（精确到小数点后两位）"""
    if not salary_str or pd.isna(salary_str) or '面议' in salary_str:
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

        def convert_part(part):
            part = part.strip()
            cleaned_part = re.sub(r'[^0-9.]', '', part)
            if not cleaned_part:
                return 0.0
            value = float(cleaned_part)

            if '元/天' in part:
                return value * 365
            elif '元/时' in part:
                return value * 8 * 260
            elif '元/月' in part:
                return value * 12
            elif '万' in part:
                return value * 10000
            elif '千' in part or 'K' in part:
                return value * 1000
            else:
                return value * 12

        if '-' in salary_range_part:
            low_str, high_str = salary_range_part.split('-', 1)
            low = convert_part(low_str)
            high = convert_part(high_str)
            avg_annual = (low + high) / 2 * multiplier
        else:
            value = convert_part(salary_range_part)
            avg_annual = value * multiplier

        return round(avg_annual, 2)

    except (ValueError, AttributeError) as e:
        print(f"Error: 无法解析薪资字符串 '{salary_str}': {e}")
        return None


# 主程序（确保文件路径正确）
df = pd.read_excel("工作簿1.xlsx")

# 新增：合并标签列到职业类型
label_cols = [col for col in df.columns if col.startswith('标签')]
df['职业类型'] = df[label_cols].apply(
    lambda row: ','.join([str(v) for v in row if pd.notna(v)]),
    axis=1
)

# 处理薪资
df['平均年薪'] = df['薪资范围'].apply(process_salary)

# 保存结果
df.to_excel("最终处理结果12.xlsx", index=False, engine="openpyxl")
print("处理完成！")
