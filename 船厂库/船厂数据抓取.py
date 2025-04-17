import requests
from bs4 import BeautifulSoup


def fetch_all_pages(pages=10):
    """封装多页请求逻辑"""
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.imarine.cn",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.imarine.cn/shipyardslist",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }

    all_data = []

    for page in range(pages):
        try:
            # 构造分页参数
            data = {
                "draw": "3",
                "start": str(page * 25),  # 动态计算起始位置
                "length": "25",
                "wdtNonce": "de0f85ca19"
            }

            # 发送请求
            response = requests.post(
                url="https://www.imarine.cn/wp-admin/admin-ajax.php",
                headers=headers,
                params={"action": "get_wdtable", "table_id": "29"},
                data=data,
                timeout=10
            )
            response.raise_for_status()

            # 解析当前页数据
            page_data = parse_data(response)
            all_data.extend(page_data)

            print(f"已成功抓取第 {page + 1} 页数据，共 {len(page_data)} 条记录")

        except Exception as e:
            print(f"第 {page + 1} 页抓取失败: {str(e)}")
            continue

    return all_data


def parse_data(response):
    """封装数据解析逻辑"""

    def clean_html(content):
        """HTML清理工具函数"""
        return BeautifulSoup(content, 'html.parser').get_text(strip=True) if content else ""

    try:
        json_data = response.json()
        return [
            (item[4].strip(), clean_html(item[9]))  # (公司名称, 清理后的简介)
            for item in json_data.get('data', [])
            if len(item) > 9  # 确保数据有效性
        ]
    except Exception as e:
        raise RuntimeError(f"数据解析失败: {str(e)}")


def save_to_txt(data, filename="船场数据.txt"):
    """封装存储逻辑（支持增量保存）"""
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            for idx, (name, desc) in enumerate(data, 1):
                f.write(f"记录 {idx}:\n")
                f.write(f"公司名称：{name}\n")
                f.write(f"公司简介：{desc}\n")
                f.write("-" * 50 + "\n\n")
        print(f"\n成功保存 {len(data)} 条数据到 {filename}")
        return True
    except Exception as e:
        raise RuntimeError(f"文件保存失败: {str(e)}")


# 主程序执行流程
if __name__ == "__main__":
    try:
        # 抓取前10页数据（每页25条）
        all_data = fetch_all_pages(pages=10)

        # 去重处理
        unique_data = list({(name, desc) for name, desc in all_data})

        if unique_data:
            save_to_txt(unique_data)
        else:
            print("未获取到有效数据")

    except Exception as e:
        print(f"程序运行异常: {str(e)}")
