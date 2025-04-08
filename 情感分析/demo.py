import pandas as pd
import re
import jieba
import matplotlib.pyplot as plt

# 设置中文字体，防止中文显示乱码
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用SimHei字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# 1. 读取Excel文件
df = pd.read_excel('datas.xlsx')
print(df.head())

# 2. 数据预处理
def clean_text(text):
    if isinstance(text, str):  # 确保输入为字符串
        # 去除特殊字符和数字，仅保留中文字符
        text = re.sub(r'[^\u4e00-\u9fa5]', '', text)
        return text
    return ''  # 如果不是字符串，返回空字符串

# 应用文本清理
df['评论内容'] = df['评论内容'].apply(clean_text)

def tokenize(text):
    # 使用jieba进行分词
    return list(jieba.cut(text))

# 对评论内容进行分词
df['分词'] = df['评论内容'].apply(tokenize)

# 2.3 去除停用词
# 自定义停用词
stop_words = set(['的', '了', '是', '在', '和', '有', '也'])

def remove_stopwords(tokens):
    return [word for word in tokens if word not in stop_words]

# 去除停用词
df['有效分词'] = df['分词'].apply(remove_stopwords)

# 3. 特征提取
positive_words = set(['好', '喜欢', '赞', '成功', '美好'])
negative_words = set(['坏', '讨厌', '失望', '痛苦', '糟糕'])
neutral_words = set(['一般', '普通', '尚可'])  # 定义中性词

def extract_features(tokens):
    features = {
        '积极词数': sum(1 for token in tokens if token in positive_words),
        '消极词数': sum(1 for token in tokens if token in negative_words),
        '中性词数': sum(1 for token in tokens if token in neutral_words),  # 统计中性词
        '总词数': len(tokens)
    }
    return features

df['特征'] = df['有效分词'].apply(extract_features)

# 将特征拆分到新的列中
df_features = df['特征'].apply(pd.Series)

# 合并结果到原DataFrame
df = pd.concat([df, df_features], axis=1)

# 打印结果
print(df[['评论内容', '积极词数', '消极词数', '中性词数', '总词数']].head())

total_positive = df['积极词数'].sum()
total_negative = df['消极词数'].sum()
total_neutral = df['中性词数'].sum()  # 计算总中性词数
total_count = len(df)

positive_ratio = total_positive / (total_positive + total_negative + total_neutral) if (total_positive + total_negative + total_neutral) > 0 else 0
negative_ratio = total_negative / (total_positive + total_negative + total_neutral) if (total_positive + total_negative + total_neutral) > 0 else 0
neutral_ratio = total_neutral / (total_positive + total_negative + total_neutral) if (total_positive + total_negative + total_neutral) > 0 else 0

print(f'总积极词数: {total_positive}')
print(f'总消极词数: {total_negative}')
print(f'总中性词数: {total_neutral}')  # 打印总中性词数
print(f'积极评论比例: {positive_ratio:.2f}')
print(f'消极评论比例: {negative_ratio:.2f}')
print(f'中性评论比例: {neutral_ratio:.2f}')  # 打印中性评论比例

# 4. 绘制饼图
labels = ['积极词', '消极词', '中性词']
sizes = [total_positive, total_negative, total_neutral]  # 包含中性词的大小
colors = ['#66c2a5', '#fc8d62', '#ffcc00']  # 颜色
explode = (0.1, 0, 0)  # 突出显示积极词部分

plt.figure(figsize=(8, 6))
plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%',
        shadow=True, startangle=140)
plt.axis('equal')  # 确保饼图为正圆形
plt.title('积极、消极与中性词比例')
plt.savefig('积极、消极与中性词比例.png')
plt.show()

# 5. 保存结果到CSV文件
output_file = '积极、消极与中性词.csv'
df.to_csv(output_file, index=False, encoding='utf-8-sig')  # 以UTF-8格式保存CSV文件
print(f'结果已保存到 {output_file}')


from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report

# 生成特征向量
vectorizer = CountVectorizer(analyzer=lambda x: x)
X = vectorizer.fit_transform(df['有效分词'])

# 加载或创建标签（1:积极, 0:消极）
y = df['情感标签']  # 假定已有情感标签

# 分割数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型
model = MultinomialNB()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估模型
print(classification_report(y_test, y_pred))