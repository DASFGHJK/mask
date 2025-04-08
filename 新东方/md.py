import hashlib

# 要加密的字符串
data = 'appId=5053&t=1740727808608&cityCode=430300&pageIndex=3&pageSize=12&categoryCode=123&order=0750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2'

# 创建一个MD5哈希对象
hash_object = hashlib.md5()

# 更新哈希对象的内容
hash_object.update(data.encode('utf-8'))

# 计算哈希值并输出为十六进制字符串
md5_hash = hash_object.hexdigest()

print(md5_hash)
