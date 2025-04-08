from scrapy import cmdline
import sys
#设置运行函数
def main():
    sys.argv = ["scrapy", "crawl", "iguopin"]
    cmdline.execute()

if __name__ == "__main__":
    main()
