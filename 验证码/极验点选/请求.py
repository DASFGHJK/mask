def count_characters(s):
    digit_count = 0
    letter_count = 0
    other_count = 0

    for char in s:
        if char.isdigit():
            digit_count += 1
        elif char.isalpha():
            letter_count += 1
        else:
            other_count += 1

    return digit_count, letter_count, other_count


# 示例字符串
example_string = "Hello123! @World456#"

# 统计字符
digit_count, letter_count, other_count = count_characters(example_string)

# 输出结果
print(f"数字个数: {digit_count}")
print(f"字符个数: {letter_count}")
print(f"其他字符个数: {other_count}")
