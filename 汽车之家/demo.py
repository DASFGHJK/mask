import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor
import csv

head = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'cookie': 'your_cookie_here'  # 需替换为最新有效的Cookie
}

def get_html(page):
    url = f'https://www.che168.com/beijing/a0_0msdgscncgpi1ltocsp{page}exx0/?pvareaid=102179'
    try:
        res = requests.get(url, headers=head, timeout=10)
        res.raise_for_status()  # 检查HTTP错误
        print(f"成功获取页面 {page} 的HTML内容")
        return res.text
    except Exception as e:
        print(f"获取页面 {page} 失败: {str(e)}")
        return None

def parse_page(html):
    car_info_list = []
    if not html:
        print("HTML内容为空，跳过解析")
        return car_info_list

    try:
        soup = BeautifulSoup(html, 'html.parser')  # 更改为更稳定的解析器
        soup1 = soup.find('div', class_='tp-cards-tofu fn-clear')
        if not soup1:
            print("未找到汽车列表容器，跳过此页")
            return car_info_list

        li_list = soup1.find_all('li', attrs={'name': 'lazyloadcpc'})
        if not li_list:
            print("未找到汽车列表项，跳过")
            return car_info_list

        for idx, li in enumerate(li_list):
            try:
                href = 'https://www.che168.com' + li.find('a')['href']
                res1 = requests.get(href, headers=head, timeout=10)
                res1.raise_for_status()
                res1soup = BeautifulSoup(res1.text, 'html.parser')

                # 提取基础信息
                name = li.get('carname') or li.find('a').text.strip()
                src1 = li.find('img')['src'] if idx < 7 else li.find('img')['src2']

                # 解析详细信息
                allnew = res1soup.find('ul', class_='brand-unit-item fn-clear')
                mileage, time, address1 = None, None, None
                if allnew:
                    allnew_li = allnew.find_all('li')
                    mileage = allnew_li[0].find('h4').text if len(allnew_li) > 0 else None
                    time = allnew_li[1].find('h4').text if len(allnew_li) > 1 else None
                    address1 = allnew_li[3].find('h4').text if len(allnew_li) > 3 else None

                # 价格信息
                price = li.find('span', class_='pirce').text if li.find('span', class_='pirce') else None
                price2 = li.find('s').text if li.find('s') else None

                # 颜色/等级/方式
                l11 = res1soup.find('div', class_='all-basic-content fn-clear')
                color, grade, way = None, None, None
                if l11:
                    ul_list = l11.find_all('ul')
                    if len(ul_list) > 2:
                        color = ul_list[2].find_all('li')[1].text if len(ul_list[2].find_all('li')) > 1 else None
                        grade = ul_list[2].find_all('li')[2].text if len(ul_list[2].find_all('li')) > 2 else None
                        way = ul_list[2].find_all('li')[4].text if len(ul_list[2].find_all('li')) > 4 else None

                car_info_list.append([
                    src1, name, mileage, time, address1, price, price2, None, color, grade, way
                ])
                print(f"成功解析第 {idx+1} 条汽车信息")

            except Exception as e:
                continue

    except Exception as e:
        print(f"解析页面时发生错误: {str(e)}")

    return car_info_list

if __name__ == "__main__":
    all_car_info = []
    with ThreadPoolExecutor(max_workers=5) as pool:
        # 获取第1页内容（可扩展页码范围）
        htmls = pool.map(get_html, [1])  # 修改页码范围
        for html in htmls:
            if html:
                parsed_data = parse_page(html)
                all_car_info.extend(parsed_data)
            else:
                print("跳过空HTML内容")

    # 写入CSV文件
    if all_car_info:
        with open('t3多线程t.csv', 'w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['照片链接', '名字', '里程', '时间', '地址', '现价', '原价', '次数', '颜色', '等级', '方式'])
            writer.writerows(all_car_info)
        print("数据已成功保存到CSV文件")
    else:
        print("未收集到有效数据")
