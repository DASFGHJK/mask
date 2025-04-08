from scrapy import cmdline
import sys
#设置运行函数
def main():
    sys.argv = ["scrapy", "crawl", "bjx_spider",'-o','北极星招聘数据.json']
    cmdline.execute()

if __name__ == "__main__":
    main()
