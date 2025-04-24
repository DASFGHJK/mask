import pandas as pd
# 新增学历要求标准化处理
df=pd.read_excel('最终处理结果12.xlsx')

allowed_educations = {'本科', '大专', '硕士', '不限'}
df['学历要求'] = df['学历要求'].apply(
    lambda x: '本科' if pd.isna(x) or x not in allowed_educations else x
)
df.to_excel("最终处理结果123.xlsx", index=False, engine="openpyxl")