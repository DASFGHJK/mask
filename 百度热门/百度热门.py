import requests
from bs4 import BeautifulSoup
import re

# 设置请求头模拟浏览器访问
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
}

url = "https://top.baidu.com/board"
params = {"tab": "realtime"}

try:
    response = requests.get(url, headers=headers, params=params, timeout=10)
    response.raise_for_status()  # 检查HTTP状态码
    soup = BeautifulSoup(response.text, 'lxml')
    print("\n=== 使用正则表达式解析结果 ===")
    html_str = str(soup)
    # 提取热度值
    hot_pattern = r'<div class="hot-index_1Bl1a">\s*(\d+)\s*</div>'
    hot_indexes = re.findall(hot_pattern, html_str)
    # 改进后的标题提取（匹配含换行符的情况）
    title_pattern = r'<div class="c-single-text-ellipsis">(.*?)</div>'
    titles = re.findall(title_pattern, html_str, re.DOTALL)
    print("\n方式二：结构化输出")
    result = [
        {"序号": idx, "标题": t.strip(), "热度": h}
        for idx, (t, h) in enumerate(zip(titles, hot_indexes), 1)
    ]
    for item in result:  # 打印前5条示例
        print(f"{item['序号']}. {item['标题']}")
        print(f"当前热度：{item['热度']}\n{'-' * 30}")

except requests.exceptions.RequestException as e:
    print(f"请求失败: {e}")
except Exception as e:
    print(f"解析出错: {e}")
