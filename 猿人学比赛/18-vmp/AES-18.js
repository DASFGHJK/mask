const CryptoJS=require("crypto-js")

function get_data(data){
    var key="67c3084867c30848";   //密钥
    var iv="67c3084867c30848";  //偏移量
    var b=CryptoJS.enc.Utf8.parse(key)
        var c=CryptoJS.enc.Utf8.parse(iv);
        var d=CryptoJS.AES.decrypt(data,b,{
            iv:c,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        })
    return d.toString(CryptoJS.enc.Utf8)
}

data=""
console.log(get_data('pAg7waxYiCghhptGBE+Tcf5lZ5JmzVDfD3vuVOZUgACoxNT0iKaeWt/M9saylGE1'))