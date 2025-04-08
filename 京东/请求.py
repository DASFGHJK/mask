import curl_cffi
from curl_cffi import requests
import time

cookies = {
    'shshshfpa': '079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921',
    'shshshfpx': '079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921',
    '__jdu': '17378059210592100696984',
    'areaId': '18',
    'ipLoc-djd': '18-1511-0-0',
    'jcap_dvzw_fp': 'W9BZopeCBlvLuta_vPkttzPyoZi0QVFZ45WBBWBEuLCm6p6w_4ojijvFFnnCiUmXayY1_Wu8Px5smFzNX_HRZw==',
    'TrackID': '1xIoPJMW0vLeGxhIEGg0vCIZGbAzbu8jKoepY8RJL8sKjQx9z_ldjfo6JQ3qF-psRthkiRZwhf2hEZxa7PEOA01Z-8iW3MewM_Jmrmm1RhIy7uMcmNFZLAyQ-EEepf5vS',
    'thor': '662BC3945C4975757C6648A1765C6783F31E03CD77F73E1B60AF8A0FE847267C1987F54EC7FD6881EE2C45CFDB1A6FDE9B20193943A81AA9301322A49049D08FF95A823BDEA3095552EE8505B97EA045D9C5C93218B49728E2602F634B483A5891C57B82A96DFF510B39D632954CA50610E5E35FADB729F768F72AF9544206AC98C6BDA96B53CE4F7476BDF98A4A716E09EDE7CFA62BCFF3BA2AE7949F66771E',
    'light_key': 'AASBKE7rOxgWQziEhC_QY6yaPQ4SwAj4PSv4mnLNMwmmPzvcnNjGJdL0wcQFgv8T3alvfZww',
    'pinId': 'EBvisAj7p1BL-LCAzlqu0A',
    'pin': 'jd_PbMshcpInGYg',
    'unick': 'jd_4k1pj9u92cer1z',
    '_tp': '9buZBi8QM1oRUc6OfsBTOA%3D%3D',
    '_pst': 'jd_PbMshcpInGYg',
    'unpl': 'JF8EAMpnNSttC0wAUEwHHRJHQ1QBWw5fSEQCbjQEU1wIQ1JRTlcdEBR7XlVdWRRKFR9ubxRUX1NPUw4aCisSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAh0QFkJcUFZeCEoTC2xnBFVaUExcDB4yGiIXe21kW18AShQGX2Y1VW0aHwgDHQUYExQGXVJcWwFKEwtsZwRQVVtLVQQcChwaGU5tVW5e',
    '__jdv': '76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_b6edf471f98d4bf2b00b060a97edd735|1741499770279',
    '3AB9D23F7A4B3CSS': 'jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMVPF42PGIAAAAACFGMGA4RSXV3DAX',
    'PCSYCityID': 'CN_430000_430100_0',
    'umc_count': '1',
    'jsavif': '1',
    '__jda': '143920055.17378059210592100696984.1737805921.1741451851.1741499770.6',
    '__jdb': '143920055.2.17378059210592100696984|6.1741499770',
    '__jdc': '143920055',
    'shshshfpb': 'BApXS_blzevBAbeMbi_JfMB1EMG3eKmzpBnXBXg5r9xJ1Mt3riYG2',
    '3AB9D23F7A4B3C9B': '7DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORA',
    'flash': '3_CNVcNT9kaAM9P3V926_1s02x44QbezKm9_dfPenmwmNnk3mJigr0cYs_qOCJqMhUwdyYUe5v-zOGpmDb6V3jGKD9lHNXJ6phQF3qiLOe-sVEoq8e6LGCC2Rw61Kz1YIfGwrzTdDKY8qqFx2FaOkVcJmsoa_RKwEiHU2S-YCwH_qdkz_OPzcF',
    'sdtoken': 'AAbEsBpEIOVjqTAKCQtvQu17a0lOId38IQQe_ikVzG7NAkoh3GLsuQx8S-WBoOIDA5juxySakul36em-2QDUXJFy4RkHV__1lBA0pTs6_zIXtM0xBzNxWlGr7eAckowD9E1C-tU8P2J8eFWtKKpdEQMs',
}

headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "origin": "https://search.jd.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://search.jd.com/",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "x-referer-page": "https://search.jd.com/Search",
    "x-rp-client": "h5_1.0.0"
}

url = "https://api.m.jd.com/api"
params = {
    "functionId": "pctradesoa_diviner",
    "appid": "search-pc-java",
    "client": "pc",
    "clientVersion": "1.0.0",
    "uuid": "143920055.17378059210592100696984.1737805921.1741451851.1741499770.6",
    "loginType": "3",
    "t": time.time()*1e3,
    "body": "\\{\"p\":902022,\"uuid\":\"17378059210592100696984\",\"lid\":\"18\",\"lim\":13,\"skus\":\"100120884197,10103653744419\",\"ck\":\"ipLocation\",\"ec\":\"utf-8\"\\}",
    "h5st": "20250309141043670;pigxgd9zwwhjph31;f06cc;tk03w91291b1618n8QhwRkhYq1HcWbVK60NrY6aStA9KESLU9ZWVvTaGL7XQyZeNHmSeEt-c5V-cVeMUGWdsC8c3F3IC;da6d92f8194a5daff89e41c3f0b4cba91fa694d2ed82b00464112a340370e61a;5.1;1741500641670;ri_uxFOm9irU_FoU3RHQ1e4V2RYU_lsm0msSIlsmOGuj2uMgM24WLlsmOGujMm7WLZIhLZLhJRrVKN7i5SLi8Wrg_WLV5q4iLlrV_qbgMuMgMuHdCRIWJRHmOuMsCmcgKNbV5iLhLZoVLdog9abWLVbgLd4iNhrgIlYWIhbWIlsm0m8SNVHTNhImOuMsCqbjOGLm6aHWMusmk_Mm_2ciAaLRPZoTFV4X5OImOGLm4lsmOGujMq3XtRYYIpai1pLi5iImOGLmBxoVApISMusmk_MmCZoRAJ6WN5KmOGLmItHmOuMsC6nmOGeiOGLm9qbRMlsmOusmk_sgOGLm_qbRMlsmOusmk_sgBuMgMmbi5lImOusmOGujMaZQMdYiCh3Z6OJmOGLmBxoVApISMusmOuMsCurm0msg5lImOusmOGuj_uMgMSbRMlsmOusmk_sh7uMgMWbRMlsmOusmk_siOGLm5aHWMusmOuMsCurm0msh5lImOusmOGuj3irm0m8i5lImOusmOGujMWLj92siMuMgMqbRMlsmOusmk_siOGLmDRHmOusmOGuj5uMgMinTMusmOuMsCurm0msTMusmOuMsCurm0msV3lsmOusmkCnm0msVAZoR2ZImOuMsC6nmOGOmHJ5dAJqSLN4ShloaPdIUMuMgMmrSMusmOuMsztMgMunSMusmk_Mm3yZh9ypi9usYOi5bOiYWhtsTJdHTlt8gGh3T61YULpYbMuMgMqYR7lsmOG_Q;521de795037e8c6a9821a3d355294f92e5e091430265ff75a957da7894e1b835",
    "x-api-eid-token": "jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMVPF42PGIAAAAACFGMGA4RSXV3DAX"
}
response = requests.get(url, headers=headers, params=params,cookies=cookies,impersonate='chrome101')

print(response)
