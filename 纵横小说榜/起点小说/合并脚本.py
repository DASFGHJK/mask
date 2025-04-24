import pandas as pd
import glob
import os


def merge_qidian_excels():
    # 获取当前目录下所有以"起点"开头的xlsx文件
    files = glob.glob("起点*.xlsx")

    if not files:
        print("未找到以'起点'开头的Excel文件")
        return

    # 创建空列表存储数据框
    all_dfs = []

    # 循环读取每个文件
    for file in files:
        try:
            df = pd.read_excel(file)
            # 添加来源文件名列（可选）
            df["来源文件"] = os.path.basename(file)
            all_dfs.append(df)
            print(f"已加载: {file} ({len(df)} 行)")
        except Exception as e:
            print(f"读取 {file} 失败: {str(e)}")
            continue

    if not all_dfs:
        print("没有可合并的有效文件")
        return

    # 合并所有数据框
    merged_df = pd.concat(all_dfs, ignore_index=True)

    # 生成输出文件名（带时间戳避免覆盖）
    output_file = "合并后_起点月票榜总表.xlsx"

    # 保存合并结果
    try:
        merged_df.to_excel(output_file, index=False)
        print(f"\n合并完成！共合并 {len(files)} 个文件")
        print(f"总记录数: {len(merged_df)} 条")
        print(f"保存到: {os.path.abspath(output_file)}")
    except Exception as e:
        print(f"保存失败: {str(e)}")


if __name__ == "__main__":
    merge_qidian_excels()
