

#分析每条信息的情绪

import pandas as pd
from snownlp import SnowNLP

# 加载数据
data = pd.read_csv('inital.csv')

# 使用snownlp计算每个标题的情绪得分
data['sentiment'] = data['标题'].apply(lambda x: SnowNLP(x).sentiments)

# 保存包含情绪得分的数据到新的CSV文件
data.to_csv('inital_sentiment.csv', index=False)

#输出完成的标识
print('已经分析完成每条信息的情绪。')