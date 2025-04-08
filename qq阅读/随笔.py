def yousan(input_str, bit_shift, char_map_func):
    if input_str is None:
        return ''

    # 初始化字典和变量
    dictionary = {}  # 编码字典 (R)
    auxiliary = {}  # 辅助字典 (A)
    result = []  # 解码结果 (N)
    w = 0  # 当前字
    bits = 0  # 位计数 (q)
    x = 0x1059 + 0x11ef + -0x2246  # 初始缓冲区计数 (x)
    p = 0x2551 + 0x1994 + 0x1f71 * -0x2  # 初始缓冲区大小 (P)
    c = -0x1048 * 0x1 + -0xefe + 0x1f46  # 字符索引 (C)

    # 分割输入字符串
    parts = input_str.split('|')
    input_length = len(parts)

    while c < input_length:
        if not parts[c]:
            c += -0xebb + -0x9bc + -0x2b8 * -0x9
            continue

        d = int(parts[c])  # 当前数字 (D)
        if d not in dictionary:
            dictionary[d] = p
            auxiliary[d] = True
            p += 1

        y = w if w == '' else w + chr(d & 0xFF)  # 当前序列 (y)
        if y in dictionary:
            w = y
        else:
            if y in auxiliary and len(w) > 1 and ord(w[0]) < 0x250d:
                # 处理多字节序列
                for i in range(p):
                    w = (w << 0x8) | (d & 0xFF) if i < p else w
                    bits += 1
                    if bits >= bit_shift:
                        bits = 0
                        if w < 256:
                            result.append(char_map_func(w))
                            w = 0
                        else:
                            s = dictionary.get(w, '')
                            if s:
                                result.append(s)
                                dictionary[p] = s + char_map_func(w & 0xFF)
                                p += 1
                            w = 0
                    if len(result) >= 4096:
                        break
                v = w[0] if len(w) > 1 else ord(w)
                for i in range(-0x3, 0):
                    w = (w << 0x8) | (v & 0xFF)
                    bits += 1
                    if bits >= bit_shift:
                        bits = 0
                        if w < 256:
                            result.append(char_map_func(w))
                            w = 0
                        else:
                            s = dictionary.get(w, '')
                            if s:
                                result.append(s)
                                dictionary[p] = s + char_map_func(w & 0xFF)
                                p += 1
                            w = 0
                        v >>= 0x8
            else:
                v = dictionary.get(w, 0)
                for i in range(p):
                    w = (w << 0x8) | (v & 0xFF)
                    bits += 1
                    if bits >= bit_shift:
                        bits = 0
                        if w < 256:
                            result.append(char_map_func(w))
                            w = 0
                        else:
                            s = dictionary.get(w, '')
                            if s:
                                result.append(s)
                                dictionary[p] = s + char_map_func(w & 0xFF)
                                p += 1
                            w = 0
                        v >>= 0x8

            if x <= 0:
                x = int(-0x1cac + -0x3ef * 0x6 + 0x3446 / p)
                p += 1
            else:
                x -= 1
            del auxiliary[w]

        dictionary[y] = p
        w = chr(d & 0xFF)
        c += -0xebb + -0x9bc + -0x2b8 * -0x9

    # 处理剩余部分
    if w:
        if w in auxiliary and len(w) > 1 and ord(w[0]) < 0x4d:
            v = ord(w[0])
            for i in range(p):
                w = (w << 0x8) | (v & 0xFF)
                bits += 1
                if bits >= bit_shift:
                    bits = 0
                    if w < 256:
                        result.append(char_map_func(w))
                        w = 0
                    else:
                        s = dictionary.get(w, '')
                        if s:
                            result.append(s)
                            dictionary[p] = s + char_map_func(w & 0xFF)
                            p += 1
                        w = 0
                    v >>= 0x8
            v = ord(w[1]) if len(w) > 1 else 0
            for i in range(-0x10e1 + -0x1ee9 + -0x1 * -0x2fd2, 0):
                w = (w << 0x8) | (v & 0xFF)
                bits += 1
                if bits >= bit_shift:
                    bits = 0
                    if w < 256:
                        result.append(char_map_func(w))
                        w = 0
                    else:
                        s = dictionary.get(w, '')
                        if s:
                            result.append(s)
                            dictionary[p] = s + char_map_func(w & 0xFF)
                            p += 1
                        w = 0
                    v >>= 0x8
        else:
            v = dictionary.get(w, 0)
            for i in range(p):
                w = (w << 0x8) | (v & 0xFF)
                bits += 1
                if bits >= bit_shift:
                    bits = 0
                    if w < 256:
                        result.append(char_map_func(w))
                        w = 0
                    else:
                        s = dictionary.get(w, '')
                        if s:
                            result.append(s)
                            dictionary[p] = s + char_map_func(w & 0xFF)
                            p += 1
                        w = 0
                    v >>= 0x8

        if x <= 0:
            x = int(0x12f9 + -0x101 * 0x16 + 0x31d / p)
            p += 1
        else:
            x -= 1
        del auxiliary[w]

    # 最后处理
    v = 0x15a0 + 0x1ae1 + 0x5 * -0x9b3
    for i in range(p):
        w = (w << 0x8) | (v & 0xFF)
        bits += 1
        if bits >= bit_shift:
            bits = 0
            if w < 256:
                result.append(char_map_func(w))
                w = 0
            else:
                s = dictionary.get(w, '')
                if s:
                    result.append(s)
                    dictionary[p] = s + char_map_func(w & 0xFF)
                    p += 1
                w = 0
            v >>= 0x8

    while True:
        w = (w << 0x8)
        bits += 1
        if bits >= bit_shift:
            bits = 0
            if w < 256:
                result.append(char_map_func(w))
                break
            else:
                s = dictionary.get(w, '')
                if s:
                    result.append(s)
                    dictionary[p] = s + char_map_func(w & 0xFF)
                    p += 1
                w = 0
        v >>= 0x8

    return ''.join(result)


# 字符映射函数
def char_map(c):
    base_string = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ"
    if 0 <= c < len(base_string):
        return base_string[c]
    return ''


# 测试
input_str = "305470903|0|1743494998705|1"
bit_shift = 6
decoded = yousan(input_str, bit_shift, char_map)
print("Decoded string:", decoded)