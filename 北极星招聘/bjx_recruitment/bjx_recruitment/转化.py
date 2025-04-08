import pandas as pd

# 读取 JSON 文件
df = pd.read_json('北极星招聘数据.json')

# 将数据保存为 Excel 文件
df.to_csv('北极星招聘数据.csv', index=False)
