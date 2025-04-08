var d = (new Date).getTime()
h = function (e, t, r) {
    var n = ""
        , i = t
        ,
        a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    e && (i = Math.round(Math.random() * (r - t)) + t);
    for (var o = 0; o < i; o++) {
        n += a[Math.round(Math.random() * (a.length - 1))]
    }
    return n
}(!1, 16)
u = "$d6eb7ff91ee257475%"
e = 1
l = 10
p = {
    "type1": 19,
    "type2": 1,
    "type3": 1,
    "type4": 1,
    "jury": 1
}
var t = c([d, h, u, e, l, p["type" + e]].sort().join(""))
