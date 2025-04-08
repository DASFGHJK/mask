from base64 import b64encode, b64decode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import binascii,json,random,requests

key = '68zhehao20776519'  # 密钥
iv = 'aa176b7519e84710'   # 初始向量

def aes_encrypt(plain_text, key, iv):
    try:
        # 将明文转换为字节并进行填充
        plain_bytes = plain_text.encode('utf-8')
        key_bytes = key.encode('utf-8')
        iv_bytes = iv.encode('utf-8')

        # 创建 AES 加密器对象
        cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)

        # 使用 PKCS7 填充模式填充明文，确保其大小是 AES 块大小的倍数
        padded_data = pad(plain_bytes, AES.block_size)

        # 执行加密操作
        encrypted_data = cipher.encrypt(padded_data)

        # 将加密后的字节数据编码为 Base64
        encrypted_base64 = b64encode(encrypted_data).decode('utf-8')

        return encrypted_base64
    except Exception as e:
        print(f"Error during encryption: {e}")
        return None

def aes_decrypt(encrypted_base64_str, key, iv):
    try:
        # 解码 Base64 加密字符串
        encrypted_data = b64decode(encrypted_base64_str)

        # 将密钥和 IV 转换为 bytes
        key_bytes = key.encode('utf-8')
        iv_bytes = iv.encode('utf-8')

        # 创建 AES 解密器对象
        cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)

        # 解密数据并去除 padding
        decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)

        # 将解密后的数据转换为 UTF-8 字符串
        decrypted_str = decrypted_data.decode('utf-8')
        return decrypted_str
    except Exception as e:
        print(f"Error during decryption: {e}")
        return None

def getWallpaperList():
    headers = {
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://haowallpaper.com/homeView?isSel=false&page=1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "accept": "application/json",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
    }
    url = "http://haowallpaper.com/link/pc/wallpaper/getWallpaperList"
    data = json.dumps({"page": str(random.randint(1,100)),"sortType":3,"isSel":"false","rows":9,"isFavorites":False,"wpType":1},separators=(',', ':'))

    encrypted_data = aes_encrypt(data, key, iv)
    #print("Encrypted Data (Base64):", encrypted_data)
    params = {
        "data":encrypted_data
    }
    res = requests.get(url,headers=headers,verify=True,params=params)
    #print(res.text)
    print(res)
    data_code = res.status_code
    if data_code != 200 :
        return ""

    decrypted_data = aes_decrypt(res.json()["data"], key, iv)
    print("Decrypted Data:", decrypted_data)
    decrypted_data = decrypted_data.replace('\x00', '').replace('true', 'True').strip()
    print(type(eval(decrypted_data)))

    wtId = eval(decrypted_data)["list"][random.randint(0,8)]["wtId"]
    print(wtId)
    res = requests.get("https://x.haowallpaper.com/link/common/file/getFileImg/" + wtId + ".png",headers=headers)

    with open('1.png','wb') as f:
        f.write(res.content)

if __name__ == "__main__":
    getWallpaperList()