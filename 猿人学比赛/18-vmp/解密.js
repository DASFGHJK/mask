const CryptoJS = require("crypto-js");

function get_random_str(page) {
    // 生成一个随机的 m 值
    let m = Math.floor(Math.random() * 50) + 200;

    // 生成 d 和 u 的值，范围为 m ± 10
    let d = Math.floor(Math.random() * 21) + m - 10; // m - 10 到 m + 10
    let u = Math.floor(Math.random() * 21) + m - 10; // m - 10 到 m + 10

    // 构建数组
    let result = [
        page,
        `606m${m}`,
        `606m${m}`,
        `606d${d}`,
        `606m${m}`,
        `606u${u}`
    ];

    // 将数组转换为字符串，格式为 "2|606m95,606m95,606d95,606m95,606u95"
    return result.join(',').replace(',', '|');
}

function get_data(page) {
    let data = get_random_str(page);
    console.log("Generated Data:", data);

    let timestamp = Math.round(new Date().getTime() / 1000);
    var key = timestamp.toString(16) + timestamp.toString(16);
    console.log("Key:", key);
    var iv = key;

    // 将数据进行加密
    var encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // 获取密文
    var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    console.log("Encrypted Data:", ciphertext);

    // 解密密文
    var decrypted = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(ciphertext) }, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // 获取解密后的数据
    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("Decrypted Data:", decryptedData);

    return {
        v: ciphertext,
        t: timestamp
    };
}

// 示例调用
console.log(get_data(2));
