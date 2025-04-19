import requests
from lxml import etree
import re
import pandas as pd

# 职位名称,公司名称,薪资范围,工作地点,经验要求,学历要求,职位类型,技能标签,福利待遇
cookies = {
    'index_location_city': '%E5%85%A8%E5%9B%BD',
    'user_trace_token': '20250417161503-32b932d5-736d-46ed-a40e-ae8b5a50e7d1',
    'LGUID': '20250417161503-e4180bf8-2813-49e6-ba25-15ca8d673566',
    '_ga': 'GA1.2.513643464.1744877703',
    'gate_login_token': 'v1####c8fd30ce48379ebd5f77dc07c46d1fbff74c3bda809c6c861a12cf1f39e35e6f',
    'LG_HAS_LOGIN': '1',
    'hasDeliver': '0',
    'privacyPolicyPopup': 'false',
    '__lg_stoken__': '63ad647a3de9966634f732679fea357b0f13804c0c000d0a60aa69ec56daff122588a54ebffe738b8b3afe75608c31ce0327bc184cd621b32835585a5da49f8115f22c686db4',
    'Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6': '1744877703,1744973645',
    'Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6': '1744973645',
    'HMACCOUNT': '87130C7627252F2B',
    '_gid': 'GA1.2.1289314302.1744973645',
    'LGSID': '20250418185405-808a7431-2dc5-4ebe-bad7-ed363f9d9f93',
    'PRE_UTM': '',
    'PRE_HOST': '',
    'PRE_SITE': 'https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html',
    'PRE_LAND': 'https%3A%2F%2Factivity.lagou.com%2Factivi%2Fall-services%2Findex.html',
    'LGRID': '20250418185406-cdb599ba-6b5e-47b1-b418-776a84f96cb6',
    '_ga_DDLTLJDLHH': 'GS1.2.1744973646.2.0.1744973646.60.0.0',
    'JSESSIONID': 'ABAABJAABAEACCJDF80AC8990B4E8D8D761291CCD4396F2',
    'WEBTJ-ID': '20250418185459-196488999d6707-076906e242aabc8-1a525636-1405320-196488999d73695',
    'sensorsdata2015session': '%7B%7D',
    '_putrc': 'C4F07E6ACD10F5B3123F89F2B170EADC',
    'login': 'true',
    'unick': '%E7%94%A8%E6%88%B73606',
    'showExpriedIndex': '1',
    'showExpriedCompanyHome': '1',
    'showExpriedMyPublish': '1',
    'X_HTTP_TOKEN': '0bb251cb838f75f3267379447114dba756a7f3784e',
    'X_MIDDLE_TOKEN': '63ac2503fd641c89b1364b6a7d46319e',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_utm_source%22%3A%22PC_SEARCH%22%2C%22%24os%22%3A%22MacOS%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22135.0.0.0%22%7D%2C%22%24device_id%22%3A%2219642d0bd291c2f-04efc55a9065ff8-1a525636-1405320-19642d0bd2a387d%22%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.lagou.com/wn/zhaopin?fromSearch=true&kd=%E9%B8%BF%E8%92%99&city=%E5%85%A8%E5%9B%BD',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}
# keys = ['计算机', 'Java', 'Python','自动化','go','php','人工智能']  # 可扩展的关键词列表
# keys=['识别','开发','智能','芯片','工程师']
# keys=['区块链','鸿蒙','远程','ai','产品总监','页面设计师','UI']
# keys=['游戏开发','游戏策划','数据运营','测试','计算机']
# keys=['数据产品经理','策划','java开发','java运营','go开发']

keys=['物联网','大数据']


for key in keys:

    params = {
        'fromSearch': 'true',
        'kd': key,
        'pn': '1',
    }

    # 初始化列表
    name_list = []
    didian_list = []
    company_name_list = []
    much_name_list = []
    jinyan_and_xueli_list = []
    zhiwei_list = []
    zhiwei_lei_list = []
    fuli_list = []
    biaoqian_list = []

    # 循环获取前五页的数据
    for page in range(1, 5):
        params['pn'] = str(page)
        print(f"正在抓取第{page}页--------》")
        response = requests.get('https://www.lagou.com/wn/zhaopin', params=params, cookies=cookies, headers=headers)
        res = etree.HTML(response.text)

        # 顺序为工作名+工作地点
        work_name_list = res.xpath("//a[@id='openWinPostion']/text()")
        company_name_list_page = res.xpath("//div[@class='company-name__2-SjF']/a/text()")
        much_name_list_page = res.xpath("//span[@class='money__3Lkgq']/text()")  # 薪资范围

        jinyan_and_xueli_list_page = res.xpath("//div[@class='p-bom__JlNur']/text()")  # 经验和学历要求
        zhiwei_list_page = res.xpath("//div[@class='list__YibNq']/div[@class='item__10RTO']/div[@class='item-bom__cTJhu']/div[@class='ir___QwEG']")  # 技能标签
        zhiwei_lei_list_page = res.xpath("//div[@class='company__2EsC8']/div[@class='industry__1HBkr']/text()")  # 职位类型
        fuli_list_page = res.xpath('//*[@id="jobList"]/div[1]/div/div[2]/div[2]/text()')  # 福利待遇

        name_list_page = []
        didian_list_page = []
        i = 0
        for data in work_name_list:
            if i % 2 == 1:
                didian_list_page.append(data)
            else:
                name_list_page.append(data)
            i += 1

        biaoqian_list_page = []
        data = re.findall(r'class="ir___QwEG"><span>(.*?)</span></div>', response.text)

        # 确保 data 是一个长度为15的数组，不足的部分用“暂无”填充
        data = data[:15] + ['暂无'] * (15 - len(data))
        for date in data:
            biaoqian_list_page.append(date.replace('</span>', '').replace('<span>', ''))

        # 确保每一页的数据长度一致
        min_length_page = min(len(name_list_page), len(didian_list_page), len(company_name_list_page), len(much_name_list_page), len(jinyan_and_xueli_list_page), len(zhiwei_list_page), len(zhiwei_lei_list_page), len(fuli_list_page), len(biaoqian_list_page))
        name_list_page = name_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(name_list_page))
        didian_list_page = didian_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(didian_list_page))
        company_name_list_page = company_name_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(company_name_list_page))
        much_name_list_page = much_name_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(much_name_list_page))
        jinyan_and_xueli_list_page = jinyan_and_xueli_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(jinyan_and_xueli_list_page))
        zhiwei_list_page = zhiwei_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(zhiwei_list_page))
        zhiwei_lei_list_page = zhiwei_lei_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(zhiwei_lei_list_page))
        fuli_list_page = fuli_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(fuli_list_page))
        biaoqian_list_page = biaoqian_list_page[:min_length_page] + ['暂无'] * (min_length_page - len(biaoqian_list_page))

        # 合并数据
        name_list.extend(name_list_page)
        didian_list.extend(didian_list_page)
        company_name_list.extend(company_name_list_page)
        much_name_list.extend(much_name_list_page)
        jinyan_and_xueli_list.extend(jinyan_and_xueli_list_page)
        zhiwei_list.extend(zhiwei_list_page)
        zhiwei_lei_list.extend(zhiwei_lei_list_page)
        fuli_list.extend(fuli_list_page)
        biaoqian_list.extend(biaoqian_list_page)

    # 处理经验和学历要求
    jinyan_list = []
    xueli_list = []
    for jinyan_and_xueli in jinyan_and_xueli_list:
        parts = jinyan_and_xueli.split('/')
        if len(parts) == 2:
            jinyan, xueli = parts
        else:
            jinyan, xueli = '暂无', '暂无'
        jinyan_list.append(jinyan)
        xueli_list.append(xueli)

    # 处理职位类型
    zhiwei_lei_final_list = []
    for zhiwei_lei in zhiwei_lei_list:
        parts = zhiwei_lei.split('｜')
        if len(parts) > 0:
            zhiwei_lei = parts[0]
        if len(zhiwei_lei) > 10:
            parts = zhiwei_lei.split('/')
            if len(parts) > 0:
                zhiwei_lei = parts[0]
        zhiwei_lei_final_list.append(zhiwei_lei)

    # 创建 DataFrame
    df = pd.DataFrame({
        '职位名称': name_list,
        '公司名称': company_name_list,
        '薪资范围': much_name_list,
        '工作地点': didian_list,
        '经验要求': jinyan_list,
        '学历要求': xueli_list,
        '职位类型': zhiwei_lei_final_list,
        '技能标签': biaoqian_list,
        '福利待遇': fuli_list
    })

    # 保存为 CSV 文件
    df.to_csv(f'拉勾网招聘{key}.csv', index=False, encoding='utf-8-sig')

    # 保存为 XLSX 文件
    df.to_excel(f'拉勾网招聘{key}.xlsx', index=False)
