"""
__title__ = 'start'
__author__ = '小肩膀教育'
__mtime__ = '2022-05-05'
"""
"""
https://search.jd.com/Search?keyword=python&wq=python&pvid=13e1b05c465b41c6a91ab45c1386f90e&page=
https://search.jd.com/Search?keyword=python&wq=python&pvid=13e1b05c465b41c6a91ab45c1386f90e&page=3&s=56&click=0
https://search.jd.com/Search?keyword=python&wq=python&pvid=13e1b05c465b41c6a91ab45c1386f90e&page=5&s=116&click=0
https://search.jd.com/Search?keyword=python&wq=python&pvid=13e1b05c465b41c6a91ab45c1386f90e&page=7&s=176&click=1
"""
import requests
from bs4 import BeautifulSoup

class JD:
    def __init__(self):
        self.headers={
            'referer': 'https://www.jd.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }

    def get_comment_num(self,sku):
        url='https://club.jd.com/comment/productCommentSummaries.action?referenceIds='+str(sku)
        html=requests.get(url,self.headers)
        if html.status_code==200:
            CommentCountStr=html.json()['CommentsCount'][0]['CommentCountStr']
            return CommentCountStr
        return None

    def start(self):
        for i in range(3):
            index_url=f'https://search.jd.com/Search?keyword=python&wq=python&pvid=13e1b05c465b41c6a91ab45c1386f90e&page={str(i)}'
            print(f'正在爬取第{i+1}页')
            html=requests.get(index_url,headers=self.headers)
            # print(html.text)
            #print(html.text)
            if html.status_code==200:
                print(html.text)
                soup=BeautifulSoup(html.text,'lxml')
                # print(soup)
                lis=soup.select('ul.gl-warp.clearfix li')
                for li in lis:
                    product_name=li.select_one('.gl-i-wrap .p-name a').text.strip().replace('\n','')
                    product_img='https:'+li.select_one('.gl-i-wrap .p-img a img')['data-lazy-img']
                    product_price=li.select_one('.gl-i-wrap .p-price strong i').text
                    product_shopname=li.select_one('.gl-i-wrap .p-shopnum a')
                    if product_shopname:
                        product_shopname=product_shopname.text

                    sku=li['data-sku']
                    product_comment=self.get_comment_num(sku)

                    print("商品名：",product_name,product_price)
                    print('商品价格：',product_price)
                    print('商品评论数：',product_comment)
                    print('商品图片：',product_img)
                    print('商品店铺：',product_shopname)

if __name__ == '__main__':
    jd=JD()
    jd.start()
    #from urllib.parse import unquote
    # """{"ad":"1476","ch":"2","sku":"70165851515","ts":"1651731859","uniqid":"{\"material_id\":\"8221240417547786793\",\"pos_id\":\"1476\",\"sid\":\"beb723ba-4236-4e05-ab95-42e954926448\"}"}"""
    #print(unquote('%7B%22ad%22%3A%221476%22%2C%22ch%22%3A%222%22%2C%22sku%22%3A%2234608882177%22%2C%22ts%22%3A%221651732646%22%2C%22uniqid%22%3A%22%7B%5C%22material_id%5C%22%3A%5C%226551296945%5C%22%2C%5C%22pos_id%5C%22%3A%5C%221476%5C%22%2C%5C%22sid%5C%22%3A%5C%22610ec5e9-18d3-4c32-9072-892f7e26f333%5C%22%7D%22%7D'))