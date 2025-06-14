import requests


headers = {
    "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "bx-v": "2.5.28",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://hotel.fliggy.com/hotel_list3.htm?spm=181.11358650.hotelModule.domesticSearch&city=&cityName=%E5%8C%97%E4%BA%AC&checkIn=2025-04-04&checkOut=2025-04-06&keywords=%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%85%B4%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&_output_charset=utf8",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "wk_cookie2": "17171cf2167cd82cbb83b70dbad0a1f5",
    "xlly_s": "1",
    "lid": "tb937616841",
    "wk_unb": "UUphzOrCqKNK%2BfSOtQ%3D%3D",
    "VISITED_HOTEL_TOKEN": "a5068358-49dc-4289-9fd7-59b879441552",
    "cna": "9fdwIIXBPQsBASQKQsInlkUY",
    "mtop_partitioned_detect": "1",
    "_m_h5_tk": "b4c4e0eab796b7c2dc8cede09cc7008f_1743399862434",
    "_m_h5_tk_enc": "2db2ab2ae729329c823c94f1a6fcbf52",
    "dnk": "tb937616841",
    "t": "3048c245cd0ae9de489bcff8b02a0839",
    "tracknick": "tb937616841",
    "lgc": "",
    "sn": "",
    "_tb_token_": "773e805863be1",
    "cookie2": "2d76af8c4463b8aa4328b92df0ace599",
    "isg": "BGxsuf7JJ9XPlzPklO7xOwrdPUyeJRDPy4gftsateJe60Qzb7jXgX2Jg9Jnp40gn",
    "uc1": "cookie15=URm48syIIVrSKA%3D%3D&pas=0&cookie14=UoYaiGrCjUetug%3D%3D&cookie21=UtASsssmeJpuutb4AQ%3D%3D&cookie16=VFC%2FuZ9az08KUQ56dCrZDlbNdA%3D%3D&existShop=false",
    "_l_g_": "Ug%3D%3D",
    "unb": "2206881338499",
    "cookie1": "UNQ3GRdNlSOxj2ZxoZo68ojWjNOBBjdWpGgjHb8tieI%3D",
    "login": "true",
    "cookie17": "UUphzOrCqKNK%2BfSOtQ%3D%3D",
    "_nk_": "tb937616841",
    "sgcookie": "E100qdhp0LJRsi1qtwzupbQEUkr2%2BAuaY4mDwzXHrPdfKY3yAbbzKMuGjiGIC2LDsJ4dRRD1kJoJ5aRGYmsiaaluPZuQCG70i9wWbG0nP6sdqxc%3D",
    "cancelledSubSites": "empty",
    "sg": "19a",
    "csg": "d371f6a6",
    "tfstk": "gF2EF26_dY41252FrcDy_o_uurMKhvbbr8gSquqoA203FvikUP3_NYNQdUWo7z3IOv27z04bSwH7O2ioSVzHFXwz2LouqzIKPMC_vkH-EZ_bUtZLvRJ76-eErVDgX0oH-1G3wepLaZ_fhO1HjY7FlyNbYaQZ2VmnqbAhbfmmxYmnZBjZS0ovZe4oEGSZ4mdkE4coIFmj0Y0urYjwj00ixfLLjkK-VXjPNyyGwi6otqqn7LvDDDGhVkRWFLZKxXrCuVvo1RoETqq3dqp0p0P03XUc5Bg3g7aqcy6MLrr38Sc0KFbZelN4zmyhmIuzJl2IsJjWMcH8tSD3UZ83fjygdvFNuKg06u2rskQ2McNucJNzRNpoRSrg7jw65KMgLyyn_xjz4UnGdOe8TUArtcnZlGSZA_g-O6YxoCOJwXB-bqsnhQd-tamZlGSwwQhKPcufxx1.."
}
url = "https://hotel.fliggy.com/ajax/hotelList.htm"
params = {
    "pageSize": "20",
    "currentPage": "3",
    "totalItem": "512",
    "startRow": "10",
    "endRow": "19",
    "city": "110100",
    "tid": "null",
    "market": "0",
    "previousChannel": "",
    "u": "null",
    "detailLinkCity": "110100",
    "cityName": "北京",
    "checkIn": "2025-04-04",
    "checkOut": "2025-04-06",
    "browserUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "userClientIp": "223.160.115.189",
    "userSessionId": "2206881338499",
    "offset": "20",
    "keywords": "北京大兴国际机场",
    "priceRange": "R0",
    "dangcis": "null",
    "brands": "null",
    "services": "null",
    "order": "DEFAULT",
    "dir": "DESC",
    "client": "null",
    "tagids": "null",
    "searchPoiName": "北京大兴国际机场",
    "pByRadiusLng": "-1",
    "pByRadiusLat": "-1",
    "radius": "-1",
    "pByRectMinLat": "-1",
    "pByRectMinLng": "-1",
    "pByRectMaxLat": "-1",
    "pByRectMaxLng": "-1",
    "lowPrice": "-1",
    "highPrice": "-1",
    "filterByKezhan": "false",
    "searchBy": "",
    "searchByTb": "false",
    "businessAreaId": "null",
    "skipKeywords": "false",
    "district": "null",
    "backCash": "false",
    "shids": "null",
    "activity": "null",
    "filterDoubleEleven": "false",
    "filterByRoomTickets": "false",
    "filterHxk": "false",
    "filterCxk": "false",
    "filterByRoomTicketsAndNeedLogin": "false",
    "filterByRoomTicketsAndNeedBuyTicket": "false",
    "activityCode": "null",
    "searchId": "null",
    "userId": "null",
    "hotelTypes": "null",
    "filterByB2g": "false",
    "filterByAgreement": "false",
    "bizNo": "null",
    "bizType": "null",
    "region": "0",
    "newYearSpeOffer": "false",
    "laterPay": "false",
    "sellerId": "null",
    "sellerIds": "",
    "isMemberPrice": "false",
    "isLaterPayActivity": "false",
    "isFilterByTeHui": "false",
    "keyWordsType": "null",
    "userUniqTag": "null",
    "iniSearchKW": "false",
    "poiNameFilter": "",
    "isFreeCancel": "false",
    "isInstantConfirm": "false",
    "activityCodes": "",
    "notFilterActivityCodeShotel": "false",
    "overseaMarket": "false",
    "roomNum": "1",
    "poisearch": "false",
    "adultChildrenCondition": "&roomNum=1&aNum_1=2&cNum_1=0",
    "previousPage": "1",
    "nextPage": "3",
    "totalPage": "52",
    "pageFirstItem": "11",
    "firstPage": "false",
    "lastPage": "false",
    "pageLastItem": "20",
    "aNum_1": "2",
    "cNum_1": "0",
    "cAge_1_1": "0",
    "cAge_1_2": "0",
    "cAge_1_3": "0",
    "_input_charset": "utf-8",
    "laterPaySwitch": "",
    "_ksTS": "1743392139734_3300",
    "callback": "jsonp3301"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)