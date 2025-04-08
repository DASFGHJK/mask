#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @FileName  :招标网.py
# @Time      :2025-03-14 12:59
# @Author    :Buluo
import requests
from fake_useragent import UserAgent
from bs4 import BeautifulSoup
import os
import csv
import time
import datetime


def save_to_csv(data, filename=f'招标网.csv'):
    fieldnames = ['标题', '投标时间', '链接地址', '正文']
    try:
        with open(filename, 'a', encoding='utf-8', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            if csvfile.tell() == 0:
                writer.writeheader()
            try:
                writer.writerow({
                    '标题': data['标题'].strip(),
                    '投标时间': data['投标时间'].strip(),
                    '链接地址': data['链接地址'].strip(),
                    '正文': data['正文'].strip()
                })
            except Exception as e:
                print(f"写入 CSV 文件时出错: {e}")
    except PermissionError as e:
        print(f"请关闭打开的csv文件再运行")


def get_content(notice):
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Access-Control-Allow-Headers': '*, DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Origin': ',',
        'Access-Control-Max-Age': '3600',
        'Bidding-Traceid': '17419306650100.20822529176775273',
        'Connection': 'keep-alive',
        'Origin': 'https://bidding.epec.com',
        'Referer': 'https://bidding.epec.com/tenderInfoOne',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': ua,
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    json_data = {
        'noticeId': notice,
    }

    url = "https://bidding.epec.com/gateway/obs/business/ubm/notice/getNoticeZhaoBiaoDetail"
    res = requests.post(url, json=json_data, headers=headers).json()
    soup = BeautifulSoup(res['data']['noticeShow'], 'html.parser')
    content = soup.find('div', class_='notice_Cont').text.replace('\n', '').replace(' ', '')
    return content


def get_first(page):
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Access-Control-Allow-Headers': '*, DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Origin': ',',
        'Access-Control-Max-Age': '3600',
        'Bidding-Traceid': '17419306650100.20822529176775273',
        'Connection': 'keep-alive',
        'Origin': 'https://bidding.epec.com',
        'Referer': 'https://bidding.epec.com/tenderInfoOne',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': ua,
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    json_data = {
        'model': {
            'releaseTimeStart': key_word,
            'saleBeginTime': None,
            'startTimeStr': None,
            'saleEndTime': None,
            'releaseTimeEnd': None,
            'endTimeStr': None,
            'noticeTypeList': [
                '01',
                '11',
            ],
        },
        'currentPage': int(page),
        'limit': 10,
        'pageSize': 10,
        'start': 10,
    }
    print(f"正在抓取{page}页的数据")
    response = requests.post('https://bidding.epec.com/gateway/obs/business/ubm/notice/queryNoticePageList',
                             headers=headers, json=json_data).json()
    datas = response['data']['root']

    # 获取当前时间并计算15天前的日期
    current_time = datetime.datetime.now()
    fifteen_days_ago = current_time - datetime.timedelta(days=15)

    for item in datas:
        noticeTitle = item['noticeTitle']
        bidOpeningTime = item['releaseTime']  # 假设格式为 "2025-03-14 17:00:00"

        # 将 bidOpeningTime 转换为 datetime 对象
        bidOpeningTime_obj = datetime.datetime.strptime(bidOpeningTime, "%Y-%m-%d %H:%M:%S")
        print(bidOpeningTime_obj)
        # 如果 bidOpeningTime 超过15天，停止循环
        if bidOpeningTime_obj < fifteen_days_ago:
            print("数据已超过15天，停止抓取")
            return False  # 返回 False 表示停止抓取

        noticeId = item['noticeId']
        businessId = item['businessId']
        return_url = f'https://bidding.epec.com/noticeDetail?noticeId={noticeId}&type=01&businessId={businessId}&title={noticeTitle}'
        time.sleep(1)
        content = get_content(noticeId)
        data = {
            '标题': noticeTitle,
            '投标时间': bidOpeningTime,
            '链接地址': return_url,
            '正文': content
        }
        save_to_csv(data)
        print(f'----->{noticeTitle}存储成功')

    return True  # 返回 True 表示继续抓取


if __name__ == '__main__':
    ua = UserAgent().random

    key_word = input("输入关键词：")
    p = 1
    while True:
        should_continue = get_first(page=p)
        if not should_continue:  # 如果返回 False，停止循环
            break
        p += 1
