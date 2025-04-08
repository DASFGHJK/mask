import requests

cookies = {
    'token': 'ac1e1aad-54e4-43ef-a625-9e73105c350b_1741410843813',
    'JSESSIONID': 'A0BDD20578915D33BEBE853B5D80B91C',
    'unionid': 'oHn4A1E6Id3oc9-zYwyerWbUyY1I',
    'wxsecret': 'U2FsdGVkX1/vkDZdY5xFbNdw5569wBbQ0zSnAfiXV7Bt69Hxc4IUTDX/t1ykjND5',
    'koa.sess': 'eyJwaG9uZSI6IjEzMDc3MDkzNjA2Iiwic21zVmVyaWZ5UGhvbmUiOiIxMzA3NzA5MzYwNiIsInNtc1ZlcmlmeUNvZGUiOiI2NDE4Iiwic21zVmVyaWZ5RXhwaXJlIjo1MjI0MjMzMDA3OTY1MDAwMDAsIl9leHBpcmUiOjE3NDE0OTc0MDI2NTYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ==',
    'wxuser': '{"openid":"ouCEv1LfsA-PNB8XygmemAnkQaKM","nickname":"å—¯å“¼ï¼Ÿ","sex":0,"language":"","city":"","province":"","country":"","headimgurl":"https://thirdwx.qlogo.cn/mmopen/vi_32/2NU9KZt8Up0xDfmKd9kia89Oo91yLBckWtgghVQibHDGDFd7yywJlEIt8Uost5IyWu59AW3NdrHLRUNPuWEOMlibQzJqtNty47P3LzMs6TiaibXY/132","privilege":[],"unionid":"oHn4A1E6Id3oc9-zYwyerWbUyY1I","secret":"U2FsdGVkX1/vkDZdY5xFbNdw5569wBbQ0zSnAfiXV7Bt69Hxc4IUTDX/t1ykjND5","phone":13077093606,"currentUser":{"phone":13077093606,"role":3,"useid":44343},"secretV2":"A+KEY27jhoTQCnqKor7rvuz1ZBRzFiu5eBtsltoNb6TCVlgK/kBVx429LI7t6OIMaUOaoe2PpDviEIVxRNFwMR20I7Ldb8T0/VnVJAbu3Blk/13tKtnIICxHZUguRAHE1qx6VcPu8HT0+GiPFcTyCd/20gYWnyTQfCpY6RCy+4Y4/cs234iBJfr9uVNUZM1NPx8cfcGeWWSh8oAoEenW4B6HVyTpeqnkI7+nQqbL5tE="}',
    'secretV2_ml': 'A+KEY27jhoTQCnqKor7rvuz1ZBRzFiu5eBtsltoNb6TCVlgK/kBVx429LI7t6OIMaUOaoe2PpDviEIVxRNFwMR20I7Ldb8T0/VnVJAbu3Blk/13tKtnIICxHZUguRAHE1qx6VcPu8HT0+GiPFcTyCd/20gYWnyTQfCpY6RCy+4Y4/cs234iBJfr9uVNUZM1NPx8cfcGeWWSh8oAoEenW4B6HVyTpeqnkI7+nQqbL5tE=',
    'currentUser_ml': '{%22phone%22:13077093606%2C%22role%22:3%2C%22payType%22:%22%22%2C%22permit%22:false%2C%22trial%22:false%2C%22categoryID%22:%22%22%2C%22isTrialAdd%22:%22yes%22}',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://ml.damaishuju.com',
    'Pragma': 'no-cache',
    'Referer': 'https://ml.damaishuju.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'token=ac1e1aad-54e4-43ef-a625-9e73105c350b_1741410843813; JSESSIONID=A0BDD20578915D33BEBE853B5D80B91C; unionid=oHn4A1E6Id3oc9-zYwyerWbUyY1I; wxsecret=U2FsdGVkX1/vkDZdY5xFbNdw5569wBbQ0zSnAfiXV7Bt69Hxc4IUTDX/t1ykjND5; koa.sess=eyJwaG9uZSI6IjEzMDc3MDkzNjA2Iiwic21zVmVyaWZ5UGhvbmUiOiIxMzA3NzA5MzYwNiIsInNtc1ZlcmlmeUNvZGUiOiI2NDE4Iiwic21zVmVyaWZ5RXhwaXJlIjo1MjI0MjMzMDA3OTY1MDAwMDAsIl9leHBpcmUiOjE3NDE0OTc0MDI2NTYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ==; wxuser={"openid":"ouCEv1LfsA-PNB8XygmemAnkQaKM","nickname":"å—¯å“¼ï¼Ÿ","sex":0,"language":"","city":"","province":"","country":"","headimgurl":"https://thirdwx.qlogo.cn/mmopen/vi_32/2NU9KZt8Up0xDfmKd9kia89Oo91yLBckWtgghVQibHDGDFd7yywJlEIt8Uost5IyWu59AW3NdrHLRUNPuWEOMlibQzJqtNty47P3LzMs6TiaibXY/132","privilege":[],"unionid":"oHn4A1E6Id3oc9-zYwyerWbUyY1I","secret":"U2FsdGVkX1/vkDZdY5xFbNdw5569wBbQ0zSnAfiXV7Bt69Hxc4IUTDX/t1ykjND5","phone":13077093606,"currentUser":{"phone":13077093606,"role":3,"useid":44343},"secretV2":"A+KEY27jhoTQCnqKor7rvuz1ZBRzFiu5eBtsltoNb6TCVlgK/kBVx429LI7t6OIMaUOaoe2PpDviEIVxRNFwMR20I7Ldb8T0/VnVJAbu3Blk/13tKtnIICxHZUguRAHE1qx6VcPu8HT0+GiPFcTyCd/20gYWnyTQfCpY6RCy+4Y4/cs234iBJfr9uVNUZM1NPx8cfcGeWWSh8oAoEenW4B6HVyTpeqnkI7+nQqbL5tE="}; secretV2_ml=A+KEY27jhoTQCnqKor7rvuz1ZBRzFiu5eBtsltoNb6TCVlgK/kBVx429LI7t6OIMaUOaoe2PpDviEIVxRNFwMR20I7Ldb8T0/VnVJAbu3Blk/13tKtnIICxHZUguRAHE1qx6VcPu8HT0+GiPFcTyCd/20gYWnyTQfCpY6RCy+4Y4/cs234iBJfr9uVNUZM1NPx8cfcGeWWSh8oAoEenW4B6HVyTpeqnkI7+nQqbL5tE=; currentUser_ml={%22phone%22:13077093606%2C%22role%22:3%2C%22payType%22:%22%22%2C%22permit%22:false%2C%22trial%22:false%2C%22categoryID%22:%22%22%2C%22isTrialAdd%22:%22yes%22}',
}

response = requests.get('https://www.damaishuju.com/api/fetchMLGoodsEs?site=ml_mx&period=30&goodsNameType=es&page=2&rows=50&sorterField&sorderOrder', cookies=cookies, headers=headers)
