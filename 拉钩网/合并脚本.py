import os
import pandas as pd

def merge_csv_files(directory):
    csv_files = [f for f in os.listdir(directory) if f.startswith('拉勾网') and f.endswith('.csv')]
    combined_csv = pd.DataFrame()

    for file in csv_files:
        file_path = os.path.join(directory, file)
        df = pd.read_csv(file_path, encoding='utf-8-sig')
        combined_csv = pd.concat([combined_csv, df], ignore_index=True)

    return combined_csv

def merge_xlsx_files(directory):
    xlsx_files = [f for f in os.listdir(directory) if f.startswith('拉勾网') and f.endswith('.xlsx')]
    combined_xlsx = pd.DataFrame()

    for file in xlsx_files:
        file_path = os.path.join(directory, file)
        df = pd.read_excel(file_path)
        combined_xlsx = pd.concat([combined_xlsx, df], ignore_index=True)

    return combined_xlsx

def main():
    directory = os.path.dirname(os.path.abspath(__file__))  # 当前脚本所在的目录
    combined_csv = merge_csv_files(directory)
    combined_xlsx = merge_xlsx_files(directory)

    # 保存合并后的 CSV 文件
    combined_csv.to_csv('拉勾网招聘计算机相关.csv', index=False, encoding='utf-8-sig')
    print("合并后的 CSV 文件已保存为 '合并后的拉勾网招聘.csv'")

    # 保存合并后的 XLSX 文件
    combined_xlsx.to_excel('拉勾网招聘计算机相关.xlsx', index=False)
    print("合并后的 XLSX 文件已保存为 '合并后的拉勾网招聘.xlsx'")

if __name__ == "__main__":
    main()
