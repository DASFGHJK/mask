import requests
import time
import json
import re
import hashlib
import jsonpath
from curl_cffi import requests
from fontTools.ttLib import TTFont
import pandas as pd

class SendRequest():
    # 初始化函数
    def __init__(self):
        self.cookies = {
            '_lxsdk_cuid': '18e7512f5bcc8-07f5167e83cb6e-26001a51-1fa400-18e7512f5bcc8',
            '_lxsdk': '18e7512f5bcc8-07f5167e83cb6e-26001a51-1fa400-18e7512f5bcc8',
            '_lxsdk_s': '18e7512f5bd-af4-a9a-fc2%7C%7C9',
        }
        self.headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://piaofang.maoyan.com/dashboard/movie',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'X-FOR-WITH': 'ACsndNv2CnlB52Tbs2GOKRGuHEvx+wD7uhj2pw3IFsaF1yRwYk5jYHv9rgOM/LfkcOKDCQaiq7aOSEYK04vN5vBBorD8whiMGhpNmKKmui4712ZxAakjX/pxSOr2OGSyFrPdcpC7++FhWUpy+pGxw7sHO39yQgGxXxSD7ZfsVXwXobST4J7dFi6IHYj7FdfCuUOZ35tWXBSS4qLbMC92xw==',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        self.key = 'A013F70DB97834C0A5492378BD76C53A'

    # md5加密函数
    def md5_encrypt(self, input_string):
        # 创建一个md5对象
        m = hashlib.md5()
        # 提供需要加密的数据，必须是bytes类型
        m.update(input_string.encode('utf-8'))
        # 获取16进制的哈希值
        return m.hexdigest()

    # 请求函数
    @property
    def URquest(self):
        # 计算signKey的值
        timeStamp = str(int(time.time() * 1000))
        c = f'method=GET&timeStamp={timeStamp}&User-Agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNC4wLjAuMCBTYWZhcmkvNTM3LjM2&index=978&channelId=40009&sVersion=2&key={self.key}'
        signKey = self.md5_encrypt(c)

        # 构造请求参数
        params = {
            'orderType': '0',
            'timeStamp': timeStamp,  # 时间戳
            'User-Agent': 'TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzNC4wLjAuMCBTYWZhcmkvNTM3LjM2',  # 固定
            'index': '517',
            'channelId': '40009',
            'sVersion': '2',
            'signKey': signKey,   # md5加密
        }

        # 请求-响应
        response = requests.get('https://piaofang.maoyan.com/dashboard-ajax/movie', params=params, cookies=self.cookies, headers=self.headers)
        json_data = response.json()
        return json_data

    # 处理数据
    def DealData(self):
        json_data = self.URquest

        # 利用jsonpath进行数据解析
        movieList = jsonpath.jsonpath(json_data, '$..list')[0]
        raw_data = []
        for li in movieList:
            # 1.影票名
            movieName = jsonpath.jsonpath(li, '$..movieName')[0]

            # 2.综合票房
            # 数字
            boxSplit = jsonpath.jsonpath(li, '$..boxSplitUnit.num')[0]
            # 单位
            Unit = jsonpath.jsonpath(li, '$..boxSplitUnit.unit')[0]
            boxSplitUnit = boxSplit + Unit

            # 3.票房占比
            boxRate = jsonpath.jsonpath(li, '$..boxRate')[0]

            # 4.排片场次
            showCount = jsonpath.jsonpath(li, '$..showCount')[0]
            raw_data.append({"movieName": movieName, "boxSplitUnit": boxSplitUnit, "boxRate": boxRate, "showCount": showCount})

        # 获取字体url
        fontStyle = jsonpath.jsonpath(json_data, '$..fontStyle')[0].split('url')[-1]
        fontStyle_url = 'https://' + re.findall('.*//(.*?).woff".*', fontStyle)[0] + '.woff'

        # 获得处理好的数据
        return raw_data, fontStyle_url

    def Pre_FontDeal(self):
        raw_data, fontStyle_url = self.DealData()
        for li in raw_data:
            boxSplitUnit = li['boxSplitUnit']
            boxSplitUnit = re.sub('&#', '0', boxSplitUnit).split('.')
            end_boxSplitUnit = []
            # 整数位
            Z = boxSplitUnit[0].split(';')[:-1]
            # 小数位
            D = boxSplitUnit[1].split(';')
            end_boxSplitUnit.extend(Z)
            end_boxSplitUnit.append('.')
            end_boxSplitUnit.extend(D)

            prep_map = []
            for num in end_boxSplitUnit:
                if num not in ['.', '万']:
                    prep_map.append(int(eval(num)))
                else:
                    prep_map.append(num)

            li['boxSplitUnit'] = prep_map

        return raw_data, fontStyle_url

    def FontDeal(self):
        New_List, fontStyle_url = self.Pre_FontDeal()

        # 写入字体文件
        bytes_data = requests.get(fontStyle_url).content
        with open('maoyan_new.woff', 'wb') as f:
            f.write(bytes_data)

        # 打开字体文件
        font_obj_new = TTFont('maoyan_new.woff')
        font_obj_new.saveXML('maoyan_new.xml')

        # 构造模板，一共5套模板
        template = {
            1: {'order': ['glyph00000', 'x', 'uniE132', 'uniE83D', 'uniE583', 'uniEC4B', 'uniEBA2', 'uniE886', 'uniF23F', 'uniF16B', 'uniED8F', 'uniF05A']},
            2: {'order': ['glyph00000', 'x', 'uniF66D', 'uniF615', 'uniE1B7', 'uniEC68', 'uniE5AC', 'uniE317', 'uniE274', 'uniEAB3', 'uniE6D5', 'uniEF74']},
            3: {'order': ['glyph00000', 'x', 'uniEB19', 'uniE3EC', 'uniF7D2', 'uniED30', 'uniF3E8', 'uniF11C', 'uniEA60', 'uniEF28', 'uniEA6F', 'uniE3DF']},
            4: {'order': ['glyph00000', 'x', 'uniF7B3', 'uniED98', 'uniF70E', 'uniF0F0', 'uniED4F', 'uniE85F', 'uniE83F', 'uniE916', 'uniEDBA', 'uniEFE9']},
            5: {'order': ['glyph00000', 'x', 'uniEB92', 'uniE8D7', 'uniF7FF', 'uniF85E', 'uniE99C', 'uniF1FC', 'uniF726', 'uniE8EE', 'uniE9EA', 'uniECDC']},
        }
        template[1]['map'] = ['','',7, 5, 3, 9, 0, 2, 6, 4, 1, 8]
        template[2]['map'] = ['','',0, 3, 8, 2, 6, 7, 9, 4, 1, 5]
        template[3]['map'] = ['','',9, 2, 4, 1, 5, 3, 6, 8, 0, 7]
        template[4]['map'] = ['','',0, 9, 6, 2, 5, 3, 8, 7, 1, 4]
        template[5]['map'] = ['','',7, 3, 6, 1, 2, 8, 0, 4, 9, 5]

        cmap_num = 0
        for k, v in template.items():
            if v['order'] == font_obj_new.getGlyphOrder():
                cmap_num = k
                break

        # 映射1
        cmap1 = font_obj_new.getBestCmap()

        # 映射2
        order = template[cmap_num]['order']
        map = template[cmap_num]['map']
        cmap2 = dict(zip(order, map))

        # 进行映射生成最终数据
        for li in New_List:
            boxSplitUnit = li['boxSplitUnit']
            results = []
            for i in boxSplitUnit:
                try:
                    result = cmap2[cmap1[i]]
                    results.append(str(result))
                except:
                    results.append(i)
            DealedBoxSplitUnit = ''.join(results)
            li['boxSplitUnit'] = DealedBoxSplitUnit

        return New_List

    def SaveDataToExcel(self):
        EndList = self.FontDeal()
        insert_data = []
        for li in EndList:
            insert_data.append([li['movieName'], li['boxSplitUnit'], li['boxRate'], li['showCount']])
        df = pd.DataFrame(insert_data, columns=['影片', '综合票房', '票房占比', '排片场次'])
        df.to_excel(f'实时票房数据.xlsx', index=False)
        return EndList

if __name__ == '__main__':
    # 获取当前时间的时间戳
    timestamp = time.time()
    # 将时间戳转换为结构化时间
    struct_time = time.localtime(timestamp)
    # 格式化结构化时间为指定格式
    formatted_time = time.strftime("%Y/%m/%d %H:%M:%S", struct_time)
    # 输出格式化后的时间戳
    print(f'{formatted_time} 的数据：')

    t = SendRequest()
    EndList = t.SaveDataToExcel()
    print(EndList)
