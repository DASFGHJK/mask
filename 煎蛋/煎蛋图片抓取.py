import os
import requests
from lxml import etree

# 创建 images 文件夹（如果不存在）
if not os.path.exists('images'):
    os.makedirs('images')

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "referer": "https://jandan.net/pic/MjAyNTAzMTctMTk4",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}

for i in range(1, 4):
    print(f"目前正在抓取第{i}页面")
    url = f"https://jandan.net/pic/MjAyNTAzMTctMTk{i}"
    print(f"抓取地址为:{url}")
    response = requests.get(url, headers=headers)
    tree = etree.HTML(response.text)
    img_list = tree.xpath("//div/div/div/p/img/@src")
    for img in img_list:
        img_url = "https:" + img
        res = requests.get(url=img_url, headers=headers)
        if res.status_code == 200:
            # 提取图片文件名
            img_name = os.path.basename(img_url)
            # 确保文件名以 .jpg 结尾
            if not img_name.endswith('.jpg'):
                img_name += '.jpg'
            # 保存图片
            with open(os.path.join('images', img_name), 'wb') as f:
                f.write(res.content)
            print(f"图片 {img_name} 已保存")
        else:
            print(f"无法下载图片 {img_url}")
