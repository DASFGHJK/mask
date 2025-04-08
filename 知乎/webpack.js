window=global
var bc;

function a(t, n, i) {
    var a = "ITOUCHTV_WEB_M"
        , o = (new Date).getTime()
        , s = ""
        , c = "";

        // c = u.default.stringify(s));
    var d = t + "\n" + n + "\n" + o + "\n" + "";
    return {
        "Content-Type": "application/json",
        "X-ITOUCHTV-CLIENT": a,
        "X-ITOUCHTV-Ca-Timestamp": o,
        "X-ITOUCHTV-Ca-Signature":
            l.default(d, "HGXimfS2hcAeWbsCW19JQ7PDasYOgg1lY2UWUDVX8nNmwr6aSaFznnPzKrZ84VY1").toString(),
        "X-ITOUCHTV-Ca-Key": "28778826534697375418351580924221"
    }
}
jie=a("GET","\"https://api.itouchtv.cn/newsservice/v10/weMediaNews?fromSource=share&weMediaSid=38757&pageSize=15&pageNum=3\"","")
console.log(jie)