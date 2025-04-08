import os

url = "https://s.weibo.com/weibo?q=巴黎奥运会&typeall=1&suball=1&timescope=custom%3A2024-07-24-6%3A2024-07-24-12&Refer=g"
url = url.replace(' ', '')
print(url)
# https://s.weibo.com/weibo?q=巴黎奥运会&typeall=1&suball=1&timescope=custom%3A2024-07-24 00-00-00%3A2024-07-24 06-00-00&Refer=g
FILENAMES = os.path.join(desktop_path, f'{"_".join(keyword)}2024.07.24-2024.08.11.xlsx')  # 进行数据存储
