import pandas as pd
import glob

# 1. 获取所有以"最终"开头的Excel文件
file_pattern = "最终*.xlsx"
files = glob.glob(file_pattern)

if not files:
    raise FileNotFoundError(f"未找到匹配的文件：{file_pattern}")

# 2. 读取所有文件并合并
dfs = []
for file in files:
    df = pd.read_excel(file)
    dfs.append(df)

merged_df = pd.concat(dfs, ignore_index=True)

# 3. 保存合成后的文件
output_file = "合并后的最终结果.xlsx"
merged_df.to_excel(output_file, index=False, engine="openpyxl")
print(f"成功合成 {len(files)} 个文件，结果保存至：{output_file}")
