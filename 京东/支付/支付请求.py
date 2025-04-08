import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://wqs.jd.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://wqs.jd.com/order/main_ljhy.shtml?linkfrom=npmpkg&sceneval=2&sourcefrom=detail&itemOpType=0&cmdylist=%5B%7B%22itemId%22%3A%2210145167976663%22%2C%22num%22%3A1%2C%22type%22%3A1%7D%5D&__navVer=1&jxsid=17430537591951963820&appCode=msc588d6d5",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-referer-page": "https://wqs.jd.com/order/main_ljhy.shtml",
    "x-rp-client": "h5_1.0.0"
}
cookies = {
    "shshshfpa": "079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921",
    "shshshfpx": "079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921",
    "__jdu": "17378059210592100696984",
    "jcap_dvzw_fp": "W9BZopeCBlvLuta_vPkttzPyoZi0QVFZ45WBBWBEuLCm6p6w_4ojijvFFnnCiUmXayY1_Wu8Px5smFzNX_HRZw==",
    "TrackID": "1xIoPJMW0vLeGxhIEGg0vCIZGbAzbu8jKoepY8RJL8sKjQx9z_ldjfo6JQ3qF-psRthkiRZwhf2hEZxa7PEOA01Z-8iW3MewM_Jmrmm1RhIy7uMcmNFZLAyQ-EEepf5vS",
    "light_key": "AASBKE7rOxgWQziEhC_QY6yaPQ4SwAj4PSv4mnLNMwmmPzvcnNjGJdL0wcQFgv8T3alvfZww",
    "pinId": "EBvisAj7p1BL-LCAzlqu0A",
    "_tp": "9buZBi8QM1oRUc6OfsBTOA%3D%3D",
    "_pst": "jd_PbMshcpInGYg",
    "areaId": "18",
    "ipLoc-djd": "18-1511-0-0",
    "unpl": "JF8EAMpnNSttXx4AB09WH0USHw5SW1oAQ0RWbjVQUV1dHFUNEgEfG0N7XlVdWRRKFR9sYxRXX1NKVA4eASsSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAh0QFkJcUFZeCEoTC2xnBFVaUExcDB4yGiIXe21kWlkIThAAX2Y1VW0aHwgAHAMeEBkGXVJcWwFKEwtsZwRQVVtLVQQcChwaGU5tVW5e",
    "PCSYCityID": "CN_430000_430100_0",
    "__jdv": "76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_6de3ee5f3eb74699bd0cd414f098258b|1742914912890",
    "3AB9D23F7A4B3C9B": "7DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORA",
    "wxa_level": "1",
    "cid": "9",
    "webp": "1",
    "3AB9D23F7A4B3CSS": "jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMV27WHHKQAAAAACX7GG2LO2Z3UNIX",
    "_gia_d": "1",
    "_tj_rvurl": "https%3A//wq.jd.com/wxapphttps%3A//m.jingxi.com/item/view%3Fas%3D0%26pps%3D",
    "jxsid_s_u": "https%3A//wqs.jd.com/item/view.html",
    "visitkey": "5968121300912914628",
    "__jda": "95931165.17378059210592100696984.1737805921.1743084352.1743084352.14",
    "__jdc": "95931165",
    "mba_muid": "17378059210592100696984",
    "shshshfpb": "BApXSHwfk1PBAbeMbi_JfMB1EMG3eKmzpBnXBXg5v9xJ1Mt3riYG2",
    "TrackerID": "VlPcc-jfwdfG9IeAcnED9FP7wq5jjWNwmhiv1ZCQLiVvGnuMeJ8N1sUG965jssDQQ1su-TU-zPaUXLaEyzhBO3NTZeFTWijXdQy2ATwRFdhKH8nHc6z_KT-sbWmC9zXj",
    "pt_key": "AAJn5VtsADDy04a6T7NVwGluuskf2cnfLN-lApCPM8HsTx2e6RnVwklERHjBF4pAhTc8M_YWuqE",
    "pt_pin": "jd_PbMshcpInGYg",
    "pt_st": "1_33uyW7RQWIEPAi9-5Kn-NIt5iqhbUz6ByeqHzUTgOEJdFdXpqzVWyQPAc1BvVOtNlHQqRjvPadC97JeOIvj4EPgXshlw1cr_Rl7vZYLmC4SdGa2AMkoM46dDYer_3RQVzY5eDlcGMZ4vE2qioqPD3SArVAXdsDgoJ3C9vLYIsx5noRGRnXqLZXhZuxTFjqxkTJcuBLF0CTr-DZQTXf_XZMzai49ChFEqiyYtYxK*",
    "pt_token": "ovnoqut6",
    "pwdt_id": "jd_PbMshcpInGYg",
    "sfstoken": "tk01mc6fb1cc5a8sMngybVBCU2JaBz1e5TlnEaog8UPtYe3JelckJizAwlU9D55BqasQBbxZl5WlHKykYe8CYTqYA/lc",
    "whwswswws": "",
    "PPRD_P": "UUID.17378059210592100696984-LOGID.1743084396831.210701555",
    "jxsid_s_t": "1743084396859",
    "__jdb": "95931165.4.17378059210592100696984|14.1743084352",
    "mba_sid": "174308435248896441295.8",
    "e_wq_addr": "DzK2DtY5Ctc2CsU3GzPpCtqmDv81DNcmD18vD0CvdJUzCJcvdJHPGUDpTXU3D0YzTXU2DtZQTXU1GzcnTXU1CzDLXyV1DJO2GsV1DUS5HMV1DUC3CIV1ENq1DyV1EJK1C18vD0CvdJUzCJcvdJHPGUCvdJc3HtCvdJY2DuYvdJVNDzOvdJUzC0OvdJUnDuSvdJVMEUGvdJVNDzOvdJq4DJcvdJumDJCvdJHPGtSvdJHPGtSvD0CnCJYkCtC3DNC5TJTNCzukENu4CNU5",
    "wq_addr": "7066692762%7C1_2806_54707_%7C%u5317%u4EAC_%u77F3%u666F%u5C71%u533A_%u516B%u5B9D%u5C71%u8857%u9053_%7C%u5317%u4EAC%u77F3%u666F%u5C71%u533A%u516B%u5B9D%u5C71%u8857%u9053%u4EB2%u4EB2%7C116.237439%2C39.898059",
    "sdtoken": "AAbEsBpEIOVjqTAKCQtvQu17Tt9R120mXxClCH5bdpymPH-f5SzkxSDMCyaeS2ApTlHghiUtoaDl5k3zcEnZpmZ-8p5lWLDleBk9fqGP4p06HFx3t_3UaR7BJj5_FVDMpQmxYA",
    "__jd_ref_cls": "Neworder_Submit"
}
url = "https://api.m.jd.com/api"
params = {
    "functionId": "jx_order_confirm"
}
data = {
    "functionId": "jx_order_confirm",
    "appid": "jx_h5",
    "t": "1743084459560",
    "channel": "jxh5",
    "clientVersion": "1.2.5",
    "client": "jxh5",
    "uuid": "5968121300912914628",
    "cthr": "1",
    "loginType": "2",
    "x-api-eid-token": "jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMV27WHHKQAAAAACX7GG2LO2Z3UNIX",
    "body": "{\"scalebuycmdy\":\"\",\"activeid\":\"\",\"bizkey\":\"\",\"bizval\":\"\",\"paytype\":0,\"pwd\":\"\",\"remark\":\"[]\",\"devname\":\"\",\"devversion\":\"\",\"devos\":\"\",\"devosversion\":\"\",\"pingouchannel\":0,\"sucpage\":\"\",\"pickname\":\"\",\"pickmobile\":\"\",\"t\":1743084459548,\"tuanType\":\"0\",\"canpintuan\":\"1\",\"mix\":0,\"action\":1,\"actionid\":1,\"storeid\":\"\",\"pageMode\":0,\"hasTenBillion\":\"0\",\"pingouActive\":0,\"fixupskuuuid\":\"F2Us4C1462206525481185280\",\"encryptversion\":\"1\",\"paramversion\":\"1\",\"traceid\":\"2232390006474751862\",\"skulist\":\"10145167976663\",\"fixednum\":\"\",\"resetcoupon\":\"1\",\"paychannel\":99,\"fromnative\":\"\",\"tuanstate\":\"1\",\"sourcefrom\":\"detail\",\"version\":\"2.0.0\",\"longitude\":\"\",\"latitude\":\"\",\"appCode\":\"msc588d6d5\",\"sceneval\":\"2\",\"buid\":325,\"time\":1743084459560,\"signStr\":\"ffba3c2f1e150f04d4559fee751eabdb\"}",
    "h5st": "20250327220740564;paz3ggpwp32qaaa5;50b95;tk03w8ec71bd218n0kDVA1MR0O2t4lpexfMlX4ytn_d5p-11bgx93ZSHm7StIh-Ktw5niU_p9lz1jx5gC6RC4vsg8PcP;bd5641e7338171c2edd287ca0e4099e5;5.1;1743084459564;smePkmchNpYW9l7i_RnSHR4i0poSMuMgMuHVMusmk_sgOGLmAh4WMusmk_Mm8i4WJV7W5WbV3eoV2ibh3mLi4Ori4WYhNh7W8eoi9KLmOGLm_VqTHlYV3lsmOGujMeIhKZbhJVbi5KLW4WbWLlbi_K7W8e4iLh4iNdIi_KLhMuMgMiXW41YWLlsmOGuj_uMgMebRMlsmOGujMmLj92ch4xZVCJIVPZrUMuMgMWHmOuMsCmsa62YV2qLcItJW-lsm0mcT-dITNlHmOuMsCmsTJdHTlhYWhlsm0mMV_lsmOGujxtsmkqrm0mci9aHWMusmOuMsCOrm0msi9aHWMusmOuMsCObjOGLm8qbRMlsmOusmk_Mmc9KhbRaiEdLcKZLmOGLmBxoVApISMusmOuMsCurm0msg5lImOusmOGuj_uMgMSbRMlsmOusmk_8h9uMgMWbRMlsmOusmk_siOGLm5aHWMusmOuMsCurm0msh5lImOusmOGuj2irm0m8i5lImOusmOGujMaLj92siMuMgMqbRMlsmOusmk_siOGLmDRHmOusmOGuj5uMgMinTMusmOuMsCurm0msTMusmOuMsCurm0msV3lsmOusmkCnm0msVAZoR2ZImOuMsC6nmOGOmHJ5dAJqSLN4ShloaPdIUMuMgMqrSMusmOuMsztMgMunSMusmk_Mm3yZh9ypi9usYOi5bOiYWhtsTJdHTlt8gGh3T61YULpYbMuMgMqYR7lsmOG_Q;51efc0b9d025cdae68d9e3e73b4a5980"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)