const Cryptojs=require('Crypto-js')
t='12345'
n="WdDY0aK0kdbl1OCJ"
n = Cryptojs.AES.encrypt(Cryptojs.enc.Utf8.parse(t), Cryptojs.enc.Utf8.parse(n), {
    mode: Cryptojs.mode.ECB,
    padding: Cryptojs.pad.Pkcs7
});

console.log(n.toString())