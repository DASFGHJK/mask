import requests
import json
import pandas as pd
def get_date(book_id):
    headers = {
        "accept": "application/json",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "origin": "https://read.douban.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://read.douban.com/ebook/537213/?dcs=category",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-csrf-token": ".eJwFwQkRADEIBDAvVVCWAYqc41n_Ei45GLj07CZvP4ECZVtfmDByufDEDaqHByfDetiiZInavvMDYNgSPw.Z-F7MA.WISccLupOZxgH2Bz9WhMv3sqkos",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "ll": "\"108288\"",
        "bid": "OHMRB1USNDk",
        "__utma": "30149280.41827125.1742651446.1742651446.1742651446.1",
        "__utmz": "30149280.1742651446.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic",
        "_vwo_uuid_v2": "DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70",
        "uaid": "\"d88395e43542160e1bb18e154dae1cb7f6f90a8a\"",
        "_pk_id.100001.a7dd": "1af87428ac58ce6d.1742828259.",
        "_ga": "GA1.1.584985988.1742828259",
        "_ga_RXNMP372GL": "GS1.1.1742828259.1.1.1742830386.60.0.0"
    }
    url = "https://read.douban.com/j/graphql"
    params = {
        "name": "getWorksComment"
    }
    data = {
        "query": "\n    query getWorksComment($worksId: ID!, $limit: Int) {\n      works: works(worksId: $worksId) {\n        worksType\n        ... on ColumnWorks {\n          columnId\n        }\n        \n    ... on WorksBase {\n      comments: mixedComments(limit: $limit) {\n        \n  ... on CommentBase {\n    id\n    isHidden\n    \n    \n  ... on CommentBase {\n    id\n    works {\n      agent {\n        id\n      }\n      \n  title\n  url\n  isChapter\n  isOnSale\n  hasOwned\n  agent {\n    id\n  }\n\n    }\n    user {\n      id\n      avatar: picture(size: MEDIUM)\n      avatarFrame\n      name\n      url\n      ... on Agent {\n        agentName\n        hasMedal\n        agentId\n      }\n    }\n    createTime\n    commentType\n    ... on Review {\n      url\n    }\n    \n  ... on Review {\n    badge {\n      url\n      image\n      title\n      color\n      label\n    }\n    badgeV2 {\n      url\n      icon\n      name\n      title\n      width\n      height\n      iconHover\n    }\n  }\n\n    ... on Annotation {\n      url\n      isPublic\n      isNote\n    }\n    \n  ... on WorksRecommend {\n    score\n    isEditorChoice\n  }\n\n  }\n  \n  ... on CommentBase {\n    works {\n      agent {\n        id\n      }\n    }\n    user {\n      id\n      isVip\n    }\n    hasPurchasedAllBadge\n  }\n  ... on Discussion {\n    donation {\n      amount\n    }\n  }\n\n\n    \n  ... on CommentBase {\n    id\n    content\n    commentType\n    works {\n      agent {\n        id\n      }\n    }\n    user {\n      id\n      ... on Agent {\n        agentName\n      }\n    }\n    ... on Discussion {\n      refComment {\n        id\n        user {\n          id\n          name\n          url\n          ... on Agent {\n            agentName\n            agentId\n          }\n        }\n        \n        createTime\n        content\n      }\n    }\n    ... on Review {\n      title\n    }\n    \n  ... on Review {\n    badge {\n      url\n      image\n      title\n      color\n      label\n    }\n    badgeV2 {\n      url\n      icon\n      name\n      title\n      width\n      height\n      iconHover\n    }\n  }\n\n    ... on Annotation {\n      \n  ... on Annotation {\n    originContent {\n      rawTexts {\n        text\n        type\n      }\n      startOffset\n      endOffset\n    }\n  }\n\n    }\n    ... on WorksRecommend {\n      title\n    }\n    ... on ReviewComment {\n      refComment {\n        id\n        content\n        createTime\n        \n        user {\n          id\n          name\n          ... on Agent {\n            agentName\n            agentId\n          }\n        }\n      }\n    }\n    ... on AnnotationComment {\n      refComment {\n        id\n        content\n        createTime\n        \n        user {\n          id\n          name\n          ... on Agent {\n            agentName\n            agentId\n          }\n        }\n      }\n    }\n    ... on WorksRecommendComment {\n      refComment {\n        id\n        content\n        createTime\n        \n        user {\n          id\n          name\n          ... on Agent {\n            agentName\n            agentId\n          }\n        }\n      }\n    }\n  }\n\n    \n  ... on CommentBase {\n    id\n    commentType\n    isHidden\n    \n    content\n    user {\n      id\n      name\n      isBlocked\n      ... on Agent {\n        agentName\n      }\n    }\n    works {\n      id\n      cover(useSmall: true)\n      title\n      \n  title\n  url\n  isChapter\n  isOnSale\n  hasOwned\n  agent {\n    id\n  }\n\n      agent {\n        id\n      }\n    }\n    \n    ... on Review {\n      url\n      upvoted\n      upvoteCount\n      commentCount\n      works {\n        isFanfiction\n        markAsFinished\n      }\n    }\n    ... on Annotation {\n      url\n      upvoted\n      upvoteCount\n      commentCount\n      isPublic\n      isNote\n      \n  ... on Annotation {\n    originContent {\n      rawTexts {\n        text\n        type\n      }\n      startOffset\n      endOffset\n    }\n  }\n\n    }\n    ... on Discussion {\n      targetId\n      upvoted\n      upvoteCount\n      works {\n        title\n        url\n      }\n    }\n    ... on WorksRecommend {\n      url\n      upvoted\n      upvoteCount\n      commentCount\n      readerTags {\n        id\n        name\n        url\n      }\n    }\n    ... on ReviewComment {\n      targetId\n      upvoted\n      upvoteCount\n    }\n    ... on AnnotationComment {\n      targetId\n      upvoted\n      upvoteCount\n    }\n    ... on WorksRecommendComment {\n      targetId\n      upvoted\n      upvoteCount\n    }\n  }\n\n    \n  ... on WorksRecommend {\n    id\n    works {\n      id\n      \n    title\n    cover(useSmall: true)\n    url\n    isBundle\n    coverLabel(preferVip: true)\n  \n      \n  url\n  title\n\n      \n  author {\n    name\n    url\n  }\n  origAuthor {\n    name\n    url\n  }\n  translator {\n    name\n    url\n  }\n\n      isColumn\n      isFinished\n      wordCount\n      wordCountUnit\n      isInLibrary\n    }\n  }\n\n    \n  ... on CommentBase {\n    id\n    commentType\n    content\n    works {\n      id\n      title\n    }\n    user {\n      id\n      name\n      isBlocked\n      ... on Agent {\n        agentName\n      }\n    }\n    isHidden\n    \n    \n    ... on Review {\n      title\n      rating\n      upvoted\n      upvoteCount\n      commentCount\n      works {\n        isFanfiction\n      }\n    }\n    ... on Annotation {\n      upvoted\n      upvoteCount\n      commentCount\n    }\n    ... on WorksRecommend {\n      upvoted\n      upvoteCount\n      commentCount\n    }\n    ... on Discussion {\n      targetId\n    }\n    ... on ReviewComment {\n      targetId\n    }\n    ... on AnnotationComment {\n      targetId\n    }\n    ... on WorksRecommendComment {\n      targetId\n    }\n  }\n  \n  ... on CommentBase {\n    id\n    commentType\n    content\n    works {\n      id\n    }\n    user {\n      id\n      name\n      ... on Agent {\n        agentName\n      }\n    }\n  }\n\n  \n  ... on CommentBase {\n    id\n    commentType\n  }\n\n\n    \n  ... on WorksRecommend {\n    readerTags {\n      id\n      name\n      url\n    }\n  }\n\n  }\n\n      }\n      commentTotal: mixedCommentCount\n    }\n  \n\n  ... on WorksBase {\n    id\n    title\n    isFanfiction\n    markAsFinished\n    isColumn\n    isFinished\n    isOnSale\n  }\n  ... on WorksBase @include(if: true) {\n    review {\n      id\n      content\n      createTime\n      ... on Review {\n        title\n        url\n        rating\n      }\n    }\n  }\n  ... on WorksBase @include(if: false) {\n    rating {\n      rating\n    }\n  }\n\n      }\n    }\n  ",
        "variables": {
            "worksId": str(book_id),
            "limit": 6
        },
        "operationName": "getWorksComment"
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
    content_list=[]
    total_list = json.loads(response.text)['data']['works']['comments']
    for totoal in total_list:
        content = totoal['content']  # 计算出评论信息
        content_list.append(content)
    try:
        return content_list[0]   #返回第一个
    except:
        return "暂无书评论"


headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://read.douban.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://read.douban.com/category/103?sort=hot&page=1",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-csrf-token": ".eJwFwQkRADEIBDAvVVCWAYqc41n_Ei45GLj07CZvP4ECZVtfmDByufDEDaqHByfDetiiZInavvMDYNgSPw.Z-Fy4g.kXanQfUDtq_HD46TmDuattvgRIc",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "ll": "\"108288\"",
    "bid": "OHMRB1USNDk",
    "__utma": "30149280.41827125.1742651446.1742651446.1742651446.1",
    "__utmz": "30149280.1742651446.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic",
    "_vwo_uuid_v2": "DF1350735AFE47A703C2FE219F0FCF923|cdeb6341ee5f22ffb266268658a5bd70",
    "uaid": "\"d88395e43542160e1bb18e154dae1cb7f6f90a8a\"",
    "_pk_id.100001.a7dd": "1af87428ac58ce6d.1742828259.",
    "_pk_ses.100001.a7dd": "1",
    "_ga": "GA1.1.584985988.1742828259",
    "_ga_RXNMP372GL": "GS1.1.1742828259.1.1.1742829188.14.0.0"
}
book_date=[]
url = "https://read.douban.com/j/kind/"
for i in range(1,70):
    print(f"正在抓第{i}页------------------->")
    data = {
        "sort": "hot",
        "page": i,
        "kind": 103,
        "query": "\n    query getFilterWorksList($works_ids: [ID!]) {\n      worksList(worksIds: $works_ids) {\n        \n    id\n    isOrigin\n    isEssay\n    \n    title\n    cover(useSmall: false)\n    url\n    isBundle\n    coverLabel(preferVip: true)\n  \n    \n  url\n  title\n\n    \n  author {\n    name\n    url\n  }\n  origAuthor {\n    name\n    url\n  }\n  translator {\n    name\n    url\n  }\n\n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isOrigin\n    kinds {\n      \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n  \n    }\n    ... on WorksBase @include(if: true) {\n      wordCount\n      wordCountUnit\n    }\n    ... on WorksBase @include(if: false) {\n      inLibraryCount\n    }\n    ... on WorksBase @include(if: false) {\n      \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n    isColumn\n    isFinished\n  \n  \n  \n    }\n    ... on EbookWorks @include(if: false) {\n      \n    ... on EbookWorks {\n      book {\n        url\n        averageRating\n        ratingCount\n      }\n    }\n  \n    }\n    ... on WorksBase @include(if: false) {\n      isColumn\n      isEssay\n      onSaleTime\n      ... on ColumnWorks {\n        updateTime\n      }\n    }\n    ... on WorksBase @include(if: true) {\n      isColumn\n      ... on ColumnWorks {\n        isFinished\n      }\n    }\n    ... on EssayWorks {\n      essayActivityData {\n        \n    title\n    uri\n    tag {\n      name\n      color\n      background\n      icon2x\n      icon3x\n      iconSize {\n        height\n      }\n      iconPosition {\n        x y\n      }\n    }\n  \n      }\n    }\n    highlightTags {\n      name\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        tags {\n          id\n          name\n          url\n        }\n      }\n    }\n  \n    \n  ... on WorksBase {\n    copyrightInfo {\n      newlyAdapted\n      newlyPublished\n      adaptedName\n      publishedName\n    }\n  }\n\n    isInLibrary\n    ... on WorksBase @include(if: false) {\n      \n    fixedPrice\n    salesPrice\n    isRebate\n    realPrice {\n      price\n      priceType\n    }\n  \n    }\n    ... on EbookWorks {\n      \n    fixedPrice\n    salesPrice\n    isRebate\n    realPrice {\n      price\n      priceType\n    }\n  \n    }\n    ... on WorksBase @include(if: true) {\n      ... on EbookWorks {\n        id\n        isPurchased\n        isInWishlist\n      }\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        fandoms {\n          title\n          url\n        }\n      }\n    }\n    ... on WorksBase @include(if: false) {\n      fanfiction {\n        kudoCount\n      }\n    }\n  \n      }\n    }\n  ",
        "variables": {}
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    data_list = json.loads(response.text)['list']
    for date in data_list:
        title=date['title']
        book_id=date['id']   #sh
        print(title)

        content= get_date(book_id)
        # print(content)
        book_date.append({
            "书名":title,
            "评论内容":content
        })
try:
    df=pd.DataFrame(book_date)
    df.to_excel('豆瓣读书数据.xlsx',index=False)
    print('保存成功')
except Exception as e:
    print(e)