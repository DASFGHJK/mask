
from DrissionPage import WebPage
import time

from DrissionPage import Chromium
key=13
# 连接浏览器
page=WebPage('d')

# 获取标签页对象
tab = page.latest_tab
tab.get(f"https://stu.tulingpyton.cn/problem-detail/{key}/")
# 提前开始监听
tab.listen.start(f'/api/problem-detail/{key}/data/')
num_ = 0
time.sleep(1)
tab.refresh()
for page in range(1, 21):
    resp = tab.listen.wait(timeout=10)  # 设置超时时间，避免无限等待
    JsonData = resp.response.body
    print(JsonData)
    datas = JsonData['current_array']
    for i in datas:
        num_ += int(i)
        print(i)
    print(f'--------->第{page}页完成')
    tab.run_js(f'loadPage({page+1});')
    time.sleep(1)


print(num_)