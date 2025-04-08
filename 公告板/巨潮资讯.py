import requests
import time
from datetime import datetime, timedelta
import logging
import os
import signal
import sys

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('crawler.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# 全局配置
HEADERS = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Host": "www.cninfo.com.cn",
    "Origin": "http://www.cninfo.com.cn",
    "Referer": "http://www.cninfo.com.cn/new/commonUrl/pageOfSearch?url=disclosure/list/search",
    "User-Agent": "Mozilla/5.0"
}

BASE_URL = "http://www.cninfo.com.cn/new/hisAnnouncement/query"

# 全局运行上下文
current_context = {
    'running': True,
    'current_year': None,
    'current_segment': None,
    'current_page': 1,
    'collected_data': []
}


def signal_handler(sig, frame):
    """处理中断信号并保存进度"""
    logger.info("\n检测到终止信号，正在保存数据...")
    try:
        # 保存已收集但未写入的数据
        if current_context['collected_data']:
            year = current_context['current_year']
            file_name = f"公告链接_{year}.txt"
            save_links_to_file(current_context['collected_data'], file_name)
            logger.info(f"已保存中断前的{len(current_context['collected_data'])}条数据")

        # 保存当前进度
        if current_context['current_year'] and current_context['current_segment']:
            year = current_context['current_year']
            time_segments = generate_time_segments(year)
            try:
                segment_index = time_segments.index(current_context['current_segment'])
                save_progress(year, segment_index)
                logger.info(f"进度已保存：年份 {year}，时间段 {current_context['current_segment']}")
            except ValueError:
                logger.warning("当前时间段不在预生成列表中")
    except Exception as e:
        logger.error(f"保存中断数据失败: {e}")
    finally:
        sys.exit(0)


# 注册信号处理
signal.signal(signal.SIGINT, signal_handler)
signal.signal(signal.SIGTERM, signal_handler)


def fetch_page_data(page_num, date_range, plate="sz;sh"):
    """获取某一页的公告数据"""
    data = {
        "pageNum": page_num,
        "pageSize": 30,
        "column": "szse",
        "tabName": "fulltext",
        "plate": plate,
        "searchkey": "",
        "secid": "",
        "seDate": date_range,
        "sortName": "code",
        "sortType": "asc",
        "isHLtitle": "false"
    }
    try:
        response = requests.post(BASE_URL, data=data, headers=HEADERS, timeout=15)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logger.error(f"请求失败：页码 {page_num}, 错误信息: {str(e)}")
    except Exception as e:
        logger.error(f"处理响应时出错: {str(e)}")
    return None


def save_links_to_file(data, file_name):
    """实时保存公告链接到文件"""
    try:
        with open(file_name, 'a', encoding='utf-8', buffering=1) as f:  # 行缓冲模式
            for item in data:
                adjunct_url = item.get("adjunctUrl", "")
                if not adjunct_url:
                    continue
                announcement_url = f"http://static.cninfo.com.cn/{adjunct_url}"
                f.write(f"{announcement_url}\n")
        logger.debug(f"已保存 {len(data)} 条数据到 {file_name}")
    except IOError as e:
        logger.error(f"文件操作失败: {str(e)}")
    except Exception as e:
        logger.error(f"保存数据时发生意外错误: {str(e)}")


def generate_time_segments(year):
    """生成月度时间段"""
    try:
        start_date = datetime(year, 1, 1)
        end_date = datetime(year, 12, 31)
    except ValueError:
        logger.error(f"无效的年份参数: {year}")
        return []

    segments = []
    current_start = start_date
    while current_start <= end_date:
        current_end = min(current_start + timedelta(days=30), end_date)
        segments.append(f"{current_start.date()}~{current_end.date()}")
        current_start = current_end + timedelta(days=1)
    return segments


def save_progress(year, segment_index):
    """保存进度到文件"""
    try:
        with open("progress.txt", 'w') as f:
            f.write(f"{year},{segment_index}")
        logger.debug(f"进度已保存：年份 {year}, 时间段索引 {segment_index}")
    except Exception as e:
        logger.error(f"保存进度失败: {str(e)}")


def load_progress():
    """从文件加载进度"""
    if os.path.exists("progress.txt"):
        try:
            with open("progress.txt", 'r') as f:
                content = f.read().strip()
                year, segment_index = map(int, content.split(','))
                logger.info(f"读取到进度：年份 {year}, 时间段索引 {segment_index}")
                print(segment_index)
                return year, segment_index
        except Exception as e:
            logger.error(f"读取进度文件失败: {str(e)}")
    return None, None


def download_reports(year, plate="sz;sh"):
    """下载指定年份的公告数据"""
    global current_context
    file_name = f"公告链接_{year}.txt"

    try:
        time_segments = generate_time_segments(year)
        if not time_segments:
            logger.error(f"无法为年份 {year} 生成时间段")
            return
    except Exception as e:
        logger.error(f"生成时间段失败: {str(e)}")
        return

    # 初始化进度
    start_year, start_segment_index = load_progress()
    start_index = start_segment_index if start_year == year else 0
    current_context.update({
        'current_year': year,
        'current_segment': None,
        'current_page': 1,
        'collected_data': []
    })

    # 遍历时间段
    for idx, segment in enumerate(time_segments[start_index:], start=start_index):
        if not current_context['running']:
            break

        current_context['current_segment'] = segment
        logger.info(f"开始爬取：年份 {year}, 时间段 {segment} ({idx + 1}/{len(time_segments)})")

        page_num = 1
        while True:
            if not current_context['running']:
                return

            current_context['current_page'] = page_num
            page_data = fetch_page_data(page_num, segment, plate)

            # 检查数据有效性
            if not page_data or not isinstance(page_data, dict):
                break

            announcements = page_data.get("announcements", [])
            if not announcements:
                break

            # 实时保存数据
            try:
                print(announcements,file_name)
                save_links_to_file(announcements, file_name)
                current_context['collected_data'].extend(announcements)
            except Exception as e:
                logger.error(f"保存数据时出错: {str(e)}")

            # 更新进度
            try:
                save_progress(year, idx)
            except Exception as e:
                logger.error(f"保存进度时出错: {str(e)}")

            page_num += 1
            time.sleep(1.5)  # 增加间隔防止封禁

        # 重置当前页数据
        current_context['collected_data'] = []


def main(start_year=2022):
    """主控制函数"""
    try:
        end_year = datetime.now().year
        end_year=2023
        logger.info(f"启动爬虫，时间范围：{start_year}-{end_year}")

        for year in range(start_year, end_year + 1):
            logger.info(f"开始处理 {year} 年数据")
            download_reports(year)

    except KeyboardInterrupt:
        logger.info("用户主动终止操作")
    except Exception as e:
        logger.error(f"发生未处理异常: {str(e)}")
    finally:
        signal_handler(None, None)


if __name__ == "__main__":
    main()
