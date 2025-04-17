import os
import pandas as pd


def merge_csv_files(prefix, output_file):
    # 获取当前目录下所有文件
    files = os.listdir('.')

    # 过滤出以指定前缀开头的 CSV 文件
    csv_files = [f for f in files if f.startswith(prefix) and f.endswith('.csv')]

    if not csv_files:
        print(f"没有找到以 '{prefix}' 开头的 CSV 文件。")
        return

    # 读取所有 CSV 文件并合并
    dataframes = []
    for file in csv_files:
        try:
            df = pd.read_csv(file)
            dataframes.append(df)
        except Exception as e:
            print(f"读取文件 {file} 时出错: {e}")

    if not dataframes:
        print("没有成功读取任何 CSV 文件。")
        return

    # 合并所有 DataFrame
    merged_df = pd.concat(dataframes, ignore_index=True)

    # 保存合并后的 DataFrame 到新的 CSV 文件
    merged_df.to_csv(output_file, index=False)
    print(f"所有 CSV 文件已合并并保存为 {output_file}")


if __name__ == "__main__":
    prefix = "科幻图书_"
    output_file = "科幻图书.csv"
    merge_csv_files(prefix, output_file)
