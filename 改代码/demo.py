import requests
import json
import time
import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import jieba
from snownlp import SnowNLP
from collections import Counter

# 设置matplotlib的字体，使其能够正确显示中文
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用黑体显示中文
plt.rcParams['axes.unicode_minus'] = False  # 正常显示负号
# Step 1: 爬取评论数据
def fetch_comments(page, product_id='100099375825'):
    url = (f'https://club.jd.com/comment/productPageComments.action?'
           f'productId={product_id}&score=0&sortType=5&page={page}&pageSize=10&isShadowSku=0&fold=1')
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return json.loads(response.text)
    return None

def parse_comments(data):
    items = data.get('comments', [])
    return [(item['id'], item['creationTime'], item['content']) for item in items if 'content' in item]

def save_to_csv(data, file_path='comments.csv'):
    df = pd.DataFrame(data, columns=['id', 'time', 'content'])
    if not pd.io.common.file_exists(file_path):
        df.to_csv(file_path, index=False, encoding='utf-8')
    else:
        df.to_csv(file_path, index=False, encoding='utf-8', mode='a', header=False)

def crawl_comments(total_pages=10, file_path='comments.csv'):
    all_data = []
    for page in range(total_pages):
        time.sleep(1.5)  # 控制爬取速度
        data = fetch_comments(page)
        if data:
            all_data.extend(parse_comments(data))
            print(f'Page {page + 1} fetched.')
    save_to_csv(all_data, file_path)

# Step 2: 中文分词及停用词过滤
def load_stopwords(file_path='stopwords.txt'):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return set(f.read().splitlines())
    except FileNotFoundError:
        print("Stopwords file not found. Using empty stopwords.")
        return set()

def segment_text(file_path='comments.csv', stop_words_file='stopwords.txt'):
    df = pd.read_csv(file_path)
    stop_words = load_stopwords(stop_words_file)
    text = " ".join(df['content'].dropna())
    words = jieba.cut(text)
    filtered_words = [word for word in words if word not in stop_words and len(word) > 1]
    return " ".join(filtered_words)

# Step 3: 词云生成
def generate_wordcloud(segmented_text, image_file='wordcloud.png'):
    #创建词云图
    # wordcloud = WordCloud( width=800, height=400, background_color='white').generate(segmented_text)

    wordcloud = WordCloud(font_path='/System/Library/Fonts/STHeiti Medium.ttc', width=800, height=400,
                          background_color='white').generate(segmented_text)
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis("off")
    plt.savefig(image_file)
    plt.show()

# Step 4: 词频统计
def word_frequency(segmented_text):
    words = segmented_text.split()
    counter = Counter(words)
    return counter.most_common(20)

def plot_word_frequency(word_counts):
    words, counts = zip(*word_counts)
    plt.figure(figsize=(10, 5))
    plt.bar(words, counts)
    plt.xticks(rotation=45)
    plt.title("Top 20 Words in Comments")
    plt.xlabel("Words")
    plt.ylabel("Frequency")
    plt.show()

# Step 5: 情感分析
def sentiment_analysis(file_path='comments.csv'):
    df = pd.read_csv(file_path)
    sentiments = df['content'].dropna().apply(lambda x: SnowNLP(x).sentiments)
    positive = (sentiments > 0.6).mean()
    neutral = ((sentiments >= 0.4) & (sentiments <= 0.6)).mean()
    negative = (sentiments < 0.4).mean()
    return {"positive": positive, "neutral": neutral, "negative": negative}

def plot_sentiment_pie(sentiment_results):
    labels = ['Positive', 'Neutral', 'Negative']
    sizes = [sentiment_results['positive'], sentiment_results['neutral'], sentiment_results['negative']]
    colors = ['green', 'yellow', 'red']
    plt.figure(figsize=(8, 6))
    plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=colors, startangle=140)
    plt.title("Sentiment Distribution")
    plt.show()

# 追加爬虫的逻辑函数
def start(page):
    url = ('https://club.jd.com/comment/productPageComments.action?'
           '&productId=6766540'  # 商品ID
           f'&score=0'  # 0表示所有评论，1表示好评，2表示中评，3表示差评，5表示追加评论
           '&sortType=5'  # 排序类型（通常使用5）
           f'&page={page}'  # 要获取的页面数
           '&pageSize=10'  # 每页评论数
           '&isShadowSku=0'
           '&fold=1')
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36"
    }
    time.sleep(2)
    response = requests.get(url=url, headers=headers)
    data = json.loads(response.text)
    return data

def parse(data):
    items = data['comments']
    for i in items:
        yield (
            i['id'],
            i['creationTime'],
            i['content']
        )

def csv(items, file_path='comments.csv'):
    try:
        pd.read_csv(file_path)
    except FileNotFoundError:
        df = pd.DataFrame(columns=['id', 'time', 'content'])
        df.to_csv(file_path, index=False, encoding='utf-8')

    df = pd.DataFrame(items, columns=['id', 'time', 'content'])
    df.to_csv(file_path, index=False, mode='a', header=False, encoding='utf-8')

# 主函数：爬取、清洗数据、分析和可视化
def main():
    total_pages = 3  # 修改爬取的总页数   爬去
    # print("Crawling comments...")
    # crawl_comments(total_pages=total_pages, file_path='comments.csv')   #创建取
    #
    print("Segmenting text...")
    segmented_text = segment_text(file_path='comments.csv', stop_words_file='stopwords.txt')

    print("Generating wordcloud...")
    generate_wordcloud(segmented_text, image_file='wordcloud.png')
    #
    print("Counting word frequencies...")
    word_counts = word_frequency(segmented_text)   #统计出现的前20的词语
    plot_word_frequency(word_counts)

    # print("Performing sentiment analysis...")
    # sentiment_results = sentiment_analysis(file_path='comments.csv')
    # print("Sentiment Analysis Results:", sentiment_results)
    # plot_sentiment_pie(sentiment_results)

if __name__ == '__main__':
    main()
