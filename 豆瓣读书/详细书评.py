import requests
import json


headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://read.douban.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://read.douban.com/category/100?sort=hot&page=2",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-csrf-token": ".eJwFwQkRADEIBDAvVVCWAYqc41n_Ei45GLj07CZvP4ECZVtfmDByufDEDaqHByfDetiiZInavvMDYNgSPw.Z-PBDg.gWzQmNBA_OI21JqU46fajXeKp54",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "ll": "\"108288\"",
    "bid": "OHMRB1USNDk",
    "_vwo_uuid_v2": "DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70",
    "uaid": "\"d88395e43542160e1bb18e154dae1cb7f6f90a8a\"",
    "_pk_id.100001.a7dd": "1af87428ac58ce6d.1742828259.",
    "_ga": "GA1.3.584985988.1742828259",
    "push_noty_num": "0",
    "push_doumail_num": "0",
    "__utmv": "30149280.27281",
    "_gid": "GA1.3.3021503.1742912895",
    "__utma": "30149280.41827125.1742651446.1742917948.1742925787.5",
    "__utmz": "30149280.1742925787.5.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic",
    "_pk_ref.100001.a7dd": "%5B%22%22%2C%22%22%2C1742979331%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DxUx0KvfTZCc8fs_BPnLlqdcDbqjIcoxvdu8VFGidr122TsNi75_4uZoMRYMtlTZU%26wd%3D%26eqid%3Dbbc08d6a0003e40c0000000367e3c0ff%22%5D",
    "_pk_ses.100001.a7dd": "1",
    "_gat": "1",
    "_ga_RXNMP372GL": "GS1.1.1742979330.7.1.1742979343.47.0.0"
}
url = "https://read.douban.com/j/kind/"
data = {
    "sort": "hot",
    "page": 2,
    "kind": 100,
    "query": "\n    query getFilterWorksList($works_ids: [ID!]) {\n      worksList(worksIds: $works_ids) {\n        \n    id\n    isOrigin\n    isEssay\n    \n    title\n    cover(useSmall: false)\n    url\n    isBundle\n    coverLabel(preferVip: true)\n  \n    \n  url\n  title\n\n    \n  author {\n    name\n    url\n  }\n  origAuthor {\n    name\n    url\n  }\n  translator {\n    name\n    url\n  }\n\n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isOrigin\n    kinds {\n      \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n  \n    }\n    ... on WorksBase @include(if: true) {\n      wordCount\n      wordCountUnit\n    }\n    ... on WorksBase @include(if: false) {\n      inLibraryCount\n    }\n    ... on WorksBase @include(if: false) {\n      \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n    isColumn\n    isFinished\n  \n  \n  \n    }\n    ... on EbookWorks @include(if: false) {\n      \n    ... on EbookWorks {\n      book {\n        url\n        averageRating\n        ratingCount\n      }\n    }\n  \n    }\n    ... on WorksBase @include(if: false) {\n      isColumn\n      isEssay\n      onSaleTime\n      ... on ColumnWorks {\n        updateTime\n      }\n    }\n    ... on WorksBase @include(if: true) {\n      isColumn\n      ... on ColumnWorks {\n        isFinished\n      }\n    }\n    ... on EssayWorks {\n      essayActivityData {\n        \n    title\n    uri\n    tag {\n      name\n      color\n      background\n      icon2x\n      icon3x\n      iconSize {\n        height\n      }\n      iconPosition {\n        x y\n      }\n    }\n  \n      }\n    }\n    highlightTags {\n      name\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        tags {\n          id\n          name\n          url\n        }\n      }\n    }\n  \n    \n  ... on WorksBase {\n    copyrightInfo {\n      newlyAdapted\n      newlyPublished\n      adaptedName\n      publishedName\n    }\n  }\n\n    isInLibrary\n    ... on WorksBase @include(if: false) {\n      \n    fixedPrice\n    salesPrice\n    isRebate\n    realPrice {\n      price\n      priceType\n    }\n  \n    }\n    ... on EbookWorks {\n      \n    fixedPrice\n    salesPrice\n    isRebate\n    realPrice {\n      price\n      priceType\n    }\n  \n    }\n    ... on WorksBase @include(if: true) {\n      ... on EbookWorks {\n        id\n        isPurchased\n        isInWishlist\n      }\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        fandoms {\n          title\n          url\n        }\n      }\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        kudoCount\n      }\n    }\n  \n      }\n    }\n  ",
    "variables": {}
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)