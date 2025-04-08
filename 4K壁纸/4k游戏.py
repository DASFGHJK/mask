# import cloudscraper
#
# from lxml import etree
# headers = {
#     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
#     "accept-language": "zh-CN,zh;q=0.9",
#     "cache-control": "no-cache",
#     "pragma": "no-cache",
#     "priority": "u=0, i",
#     "referer": "https://pic.netbian.com/",
#     "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
#     "sec-ch-ua-arch": "\"arm\"",
#     "sec-ch-ua-bitness": "\"64\"",
#     "sec-ch-ua-full-version": "\"134.0.6998.166\"",
#     "sec-ch-ua-full-version-list": "\"Chromium\";v=\"134.0.6998.166\", \"Not:A-Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"134.0.6998.166\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-model": "\"\"",
#     "sec-ch-ua-platform": "\"macOS\"",
#     "sec-ch-ua-platform-version": "\"14.5.0\"",
#     "sec-fetch-dest": "document",
#     "sec-fetch-mode": "navigate",
#     "sec-fetch-site": "same-origin",
#     "sec-fetch-user": "?1",
#     "upgrade-insecure-requests": "1",
#     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
# }
# cookies = {
#     "zkhanecookieclassrecord": "%2C66%2C55%2C",
#     "cf_clearance": "aVmUfAuAgYSdBkLtWuUJq0BMGZP8dk0ZWTcASn6QyR4-1743580790-1.2.1.1-UtWW9RWZehrIdgafAWnEcpJfum6dAFysAIqYy6dJJk_bp1alRtwlLgnSZCLZO.PknQfZz9Zo75Nu0xQJRPsZBkOsXnhmjsGeLukpR5JTIW3jxP_P7SPiA.IxecMB3kpoN3z9L7t9HIpK6yTZ72luKbhnbBmk4BlOgSqUkNJWZ4x2SW2sgfLWdMfDQ9mEQJU2.NrVDED7MV2yoJMI4672aZg8nfQcjFbbpOMngo52eTR4srBs8sgQ2jW63xkSZMl6TlmkY6u7wzSkoTjUdZ9g9bL2QjW7IwiKLof1rd4qRT.slrjqjgrjothN.xmerojMnw5WmSvJAklkuWz6t.VXWRcmIdJJs8azaNJ0Y3HI0o7Ltys2niCdBUzo5I1EJeiWNJNrj3cbNNfNDEFTSiICB3BWYiLbWsBBPiSkXFWAWrA"
# }
# url = "https://pic.netbian.com/4kyouxi/"
# scraper=cloudscraper.create_scraper(browser={'browser':'firefox','platform':'windows','mobile':False})
# response = scraper.get(url)
# response.encoding='utf-8'
# print(response.text)
# tree= etree.HTML(response.text)
# img_url_list= tree.xpath('//*[@id="main"]/div[3]/ul/li/a/img/@src')
# print(img_url_list)
