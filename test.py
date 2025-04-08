from curl_cffi import requests
import logging
import time
import random

logging.basicConfig(level=logging.DEBUG)

url = "https://www.ajio.com/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive"
}

session = requests.Session()
for i in range(5):
    try:
        response = session.get(url, headers=headers)
        print(f"Attempt {i+1}: {response.status_code}")
        print(response.text[:200])
    except Exception as e:
        print(f"Attempt {i+1} failed: {e}")
    time.sleep(random.uniform(2, 5))