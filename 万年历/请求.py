import requests
from lxml import etree
cookies = {
    'c_y_g_j': '36',
    'Hm_lvt_bd706f26d2267b54fd3543ceaea48e96': '1744185746',
    'Hm_lpvt_bd706f26d2267b54fd3543ceaea48e96': '1744185746',
    'HMACCOUNT': '87130C7627252F2B',
    '__gads': 'ID=acd5cf701275d784:T=1744185747:RT=1744185747:S=ALNI_MYa0meii_Dz51oxHIPGhecyVoBB2g',
    '__gpi': 'UID=000010964c0c92d0:T=1744185747:RT=1744185747:S=ALNI_MYBYsWZ2K0BUhIkjpUyqz9kD3wC1g',
    '__eoi': 'ID=f20b6f30e04c73ef:T=1744185747:RT=1744185747:S=AA-Afja9LsxLSSrYe3pUM5v2UHiy',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'c_y_g_j=36; Hm_lvt_bd706f26d2267b54fd3543ceaea48e96=1744185746; Hm_lpvt_bd706f26d2267b54fd3543ceaea48e96=1744185746; HMACCOUNT=87130C7627252F2B; __gads=ID=acd5cf701275d784:T=1744185747:RT=1744185747:S=ALNI_MYa0meii_Dz51oxHIPGhecyVoBB2g; __gpi=UID=000010964c0c92d0:T=1744185747:RT=1744185747:S=ALNI_MYBYsWZ2K0BUhIkjpUyqz9kD3wC1g; __eoi=ID=f20b6f30e04c73ef:T=1744185747:RT=1744185747:S=AA-Afja9LsxLSSrYe3pUM5v2UHiy',
}

response = requests.get('https://wannianrili.bmcx.com/2025-04-07__wannianrili/', cookies=cookies, headers=headers)
# print(response.text)

res=etree.HTML(response.text)
jieri=res.xpath("//div[@id='wnrl_k_you_id_6']/div[@class='wnrl_k_you_id_wnrl_jieri']/span[@class='wnrl_k_you_id_wnrl_jieri_neirong']/a/text()")[0]
bazi=res.xpath("//div[@id='wnrl_k_you_id_6']/div[@class='wnrl_k_you_id_wnrl_nongli_ganzhi']/text()")[0]
shengxiao=res.xpath("//div[@id='jie_guo']/div[@id='wnrl_k_xia_id_6']/div[@class='wnrl_k_xia']/div[@class='wnrl_k_xia_nr']/div[@class='wnrl_k_xia_nr_wnrl_beizhu'][1]/span[@class='wnrl_k_xia_nr_wnrl_beizhu_neirong']/text()")[0]
xingzuo=res.xpath("//div[@class='wnrl_k_xia']/div[@class='wnrl_k_xia_nr']/div[@class='wnrl_k_xia_nr_wnrl_beizhu'][2]/span[@class='wnrl_k_xia_nr_wnrl_beizhu_neirong']/text()")[0]
peng_zu=res.xpath("//div[@class='wnrl_k_xia_nr']/div[@class='wnrl_k_xia_nr_wnrl_beizhu'][3]/span[@class='wnrl_k_xia_nr_wnrl_beizhu_neirong']/text()")[0]
tai_shen=res.xpath("//div[@id='jie_guo']/div[@id='wnrl_k_xia_id_6']/div[@class='wnrl_k_xia']/div[@class='wnrl_k_xia_nr']/div[@class='wnrl_k_xia_nr_wnrl_beizhu'][4]/span[@class='wnrl_k_xia_nr_wnrl_beizhu_neirong']/text()")[0]

print(jieri)