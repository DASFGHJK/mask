import requests

cookies = {
    'newstatisticUUID': '1741588482_1949525866',
    '_csrfToken': 'TyawmOCPWFPEfxUh6kjo1mN4CUYERyhC5mdlayeQ',
    'fu': '520052661',
    'supportWebp': 'true',
    'supportwebp': 'true',
    'Hm_lvt_f00f67093ce2f38f215010b699629083': '1741587838,1744081484',
    'HMACCOUNT': 'B4428F75A6FDEEFB',
    '_gid': 'GA1.2.2023950147.1744081485',
    '_gat_gtag_UA_199934072_2': '1',
    'e2': '',
    'e1': '%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A9%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A110%22%2C%22l2%22%3A2%7D',
    '_ga': 'GA1.1.485883105.1744081484',
    'traffic_utm_referer': 'https%3A%2F%2Fwww.baidu.com%2Flink',
    'traffic_search_engine': '',
    'se_ref': '',
    'Hm_lpvt_f00f67093ce2f38f215010b699629083': '1744081492',
    '_ga_PFYW0QLV3P': 'GS1.1.1744081484.5.1.1744081499.0.0.0',
    '_ga_FZMMH98S83': 'GS1.1.1744081484.1.1.1744081499.0.0.0',
    'w_tsfp': 'ltvuV0MF2utBvS0Q7a7pnEqrFzwkdDg4h0wpEaR0f5thQLErU5mB1YZyv872NHbW4Mxnvd7DsZoyJTLYCJI3dwMVE8mSJ4sZigyQldQg1YpCUxE0QpnVUFFOIb8j7zUTKHhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TjV4V/zLQl8Ur5G0USW1H4cX38htBm8fOwLNkquI5qvSqA=',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.qidian.com/book/1041098695/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'newstatisticUUID=1741588482_1949525866; _csrfToken=TyawmOCPWFPEfxUh6kjo1mN4CUYERyhC5mdlayeQ; fu=520052661; supportWebp=true; supportwebp=true; Hm_lvt_f00f67093ce2f38f215010b699629083=1741587838,1744081484; HMACCOUNT=B4428F75A6FDEEFB; _gid=GA1.2.2023950147.1744081485; _gat_gtag_UA_199934072_2=1; e2=; e1=%7B%22l6%22%3A%22%22%2C%22l7%22%3A%22%22%2C%22l1%22%3A9%2C%22l3%22%3A%22%22%2C%22pid%22%3A%22qd_p_qidian%22%2C%22eid%22%3A%22qd_A110%22%2C%22l2%22%3A2%7D; _ga=GA1.1.485883105.1744081484; traffic_utm_referer=https%3A%2F%2Fwww.baidu.com%2Flink; traffic_search_engine=; se_ref=; Hm_lpvt_f00f67093ce2f38f215010b699629083=1744081492; _ga_PFYW0QLV3P=GS1.1.1744081484.5.1.1744081499.0.0.0; _ga_FZMMH98S83=GS1.1.1744081484.1.1.1744081499.0.0.0; w_tsfp=ltvuV0MF2utBvS0Q7a7pnEqrFzwkdDg4h0wpEaR0f5thQLErU5mB1YZyv872NHbW4Mxnvd7DsZoyJTLYCJI3dwMVE8mSJ4sZigyQldQg1YpCUxE0QpnVUFFOIb8j7zUTKHhCNxS00jA8eIUd379yilkMsyN1zap3TO14fstJ019E6KDQmI5uDW3HlFWQRzaLbjcMcuqPr6g18L5a5TjV4V/zLQl8Ur5G0USW1H4cX38htBm8fOwLNkquI5qvSqA=',
}

response = requests.get('https://www.qidian.com/chapter/1041098695/807995490/', cookies=cookies, headers=headers)
