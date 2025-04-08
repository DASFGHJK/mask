Ye_a=5053
Ye_b='750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2'
 var t = {
        utf8: {
            stringToBytes: function(e) {
                return r.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
var r=t
tt = {
rotl: function(e, t) {
    return e << t | e >>> 32 - t
},
rotr: function(e, t) {
    return e << 32 - t | e >>> t
},
endian: function(e) {
    if (e.constructor == Number)
        return 16711935 & tt.rotl(e, 8) | 4278255360 & tt.rotl(e, 24);
    for (var t = 0; t < e.length; t++)
        e[t] = tt.endian(e[t]);
    return e
},
randomBytes: function(e) {
    for (var t = []; e > 0; e--)
        t.push(Math.floor(256 * Math.random()));
    return t
},
bytesToWords: function(e) {
    for (var t = [], n = 0, r = 0; n < e.length; n++,
    r += 8)
        t[r >>> 5] |= e[n] << 24 - r % 32;
    return t
},
wordsToBytes: function(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
},
bytesToHex: function(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
        t.push((15 & e[n]).toString(16));
    return t.join("")
},
hexToBytes: function(e) {
    for (var t = [], n = 0; n < e.length; n += 2)
        t.push(parseInt(e.substr(n, 2), 16));
    return t
},
bytesToBase64: function(e) {
    for (var n = [], r = 0; r < e.length; r += 3)
        for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++)
            8 * r + 6 * a <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - a) & 63)) : n.push("=");
    return n.join("")
},
base64ToBytes: function(e) {
    e = e.replace(/[^A-Z0-9+\/]/gi, "");
    for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4)
        0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
    return n
}
};
function hs(e, t, n, r, o, a, c) {
        var i = e + (t & n | ~t & r) + (o >>> 0) + c;
        return (i << a | i >>> 32 - a) + t
    }
 ms = function(e, t, n, r, o, a, c) {
    var i = e + (t & r | n & ~r) + (o >>> 0) + c;
    return (i << a | i >>> 32 - a) + t
}
ys = function(e, t, n, r, o, a, c) {
                var i = e + (t ^ n ^ r) + (o >>> 0) + c;
                return (i << a | i >>> 32 - a) + t
            }
bs = function(e, t, n, r, o, a, c) {
    var i = e + (n ^ (t | ~r)) + (o >>> 0) + c;
    return (i << a | i >>> 32 - a) + t
}
c = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? a.stringToBytes(e) : r.utf8.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                for (var i = tt.bytesToWords(e), s = 8 * e.length, u = 1732584193, d = -271733879, f = -1732584194, l = 271733878, p = 0; p < i.length; p++)
                    i[p] = 16711935 & (i[p] << 8 | i[p] >>> 24) | 4278255360 & (i[p] << 24 | i[p] >>> 8);
                i[s >>> 5] |= 128 << s % 32,
                i[14 + (s + 64 >>> 9 << 4)] = s;
                var h = c._ff
                  , m = c._gg
                  , y = c._hh
                  , b = c._ii;
                for (p = 0; p < i.length; p += 16) {
                    var w = u
                      , v = d
                      , g = f
                      , j = l;
                    u = hs(u, d, f, l, i[p + 0], 7, -680876936),
                    l = hs(l, u, d, f, i[p + 1], 12, -389564586),
                    f = hs(f, l, u, d, i[p + 2], 17, 606105819),
                    d = hs(d, f, l, u, i[p + 3], 22, -1044525330),
                    u = hs(u, d, f, l, i[p + 4], 7, -176418897),
                    l = hs(l, u, d, f, i[p + 5], 12, 1200080426),
                    f = hs(f, l, u, d, i[p + 6], 17, -1473231341),
                    d = hs(d, f, l, u, i[p + 7], 22, -45705983),
                    u = hs(u, d, f, l, i[p + 8], 7, 1770035416),
                    l = hs(l, u, d, f, i[p + 9], 12, -1958414417),
                    f = hs(f, l, u, d, i[p + 10], 17, -42063),
                    d = hs(d, f, l, u, i[p + 11], 22, -1990404162),
                    u = hs(u, d, f, l, i[p + 12], 7, 1804603682),
                    l = hs(l, u, d, f, i[p + 13], 12, -40341101),
                    f = hs(f, l, u, d, i[p + 14], 17, -1502002290),
                    u = ms(u, d = hs(d, f, l, u, i[p + 15], 22, 1236535329), f, l, i[p + 1], 5, -165796510),
                    l = ms(l, u, d, f, i[p + 6], 9, -1069501632),
                    f = ms(f, l, u, d, i[p + 11], 14, 643717713),
                    d = ms(d, f, l, u, i[p + 0], 20, -373897302),
                    u = ms(u, d, f, l, i[p + 5], 5, -701558691),
                    l = ms(l, u, d, f, i[p + 10], 9, 38016083),
                    f = ms(f, l, u, d, i[p + 15], 14, -660478335),
                    d = ms(d, f, l, u, i[p + 4], 20, -405537848),
                    u = ms(u, d, f, l, i[p + 9], 5, 568446438),
                    l = ms(l, u, d, f, i[p + 14], 9, -1019803690),
                    f = ms(f, l, u, d, i[p + 3], 14, -187363961),
                    d = ms(d, f, l, u, i[p + 8], 20, 1163531501),
                    u = ms(u, d, f, l, i[p + 13], 5, -1444681467),
                    l = ms(l, u, d, f, i[p + 2], 9, -51403784),
                    f = ms(f, l, u, d, i[p + 7], 14, 1735328473),
                    u = ys(u, d = ms(d, f, l, u, i[p + 12], 20, -1926607734), f, l, i[p + 5], 4, -378558),
                    l = ys(l, u, d, f, i[p + 8], 11, -2022574463),
                    f = ys(f, l, u, d, i[p + 11], 16, 1839030562),
                    d = ys(d, f, l, u, i[p + 14], 23, -35309556),
                    u = ys(u, d, f, l, i[p + 1], 4, -1530992060),
                    l = ys(l, u, d, f, i[p + 4], 11, 1272893353),
                    f = ys(f, l, u, d, i[p + 7], 16, -155497632),
                    d = ys(d, f, l, u, i[p + 10], 23, -1094730640),
                    u = ys(u, d, f, l, i[p + 13], 4, 681279174),
                    l = ys(l, u, d, f, i[p + 0], 11, -358537222),
                    f = ys(f, l, u, d, i[p + 3], 16, -722521979),
                    d = ys(d, f, l, u, i[p + 6], 23, 76029189),
                    u = ys(u, d, f, l, i[p + 9], 4, -640364487),
                    l = ys(l, u, d, f, i[p + 12], 11, -421815835),
                    f = ys(f, l, u, d, i[p + 15], 16, 530742520),
                    u = bs(u, d = ys(d, f, l, u, i[p + 2], 23, -995338651), f, l, i[p + 0], 6, -198630844),
                    l = bs(l, u, d, f, i[p + 7], 10, 1126891415),
                    f = bs(f, l, u, d, i[p + 14], 15, -1416354905),
                    d = bs(d, f, l, u, i[p + 5], 21, -57434055),
                    u = bs(u, d, f, l, i[p + 12], 6, 1700485571),
                    l = bs(l, u, d, f, i[p + 3], 10, -1894986606),
                    f = bs(f, l, u, d, i[p + 10], 15, -1051523),
                    d = bs(d, f, l, u, i[p + 1], 21, -2054922799),
                    u = bs(u, d, f, l, i[p + 8], 6, 1873313359),
                    l = bs(l, u, d, f, i[p + 15], 10, -30611744),
                    f = bs(f, l, u, d, i[p + 6], 15, -1560198380),
                    d = bs(d, f, l, u, i[p + 13], 21, 1309151649),
                    u = bs(u, d, f, l, i[p + 4], 6, -145523070),
                    l = bs(l, u, d, f, i[p + 11], 10, -1120210379),
                    f = bs(f, l, u, d, i[p + 2], 15, 718787259),
                    d = bs(d, f, l, u, i[p + 9], 21, -343485551),
                    u = u + w >>> 0,
                    d = d + v >>> 0,
                    f = f + g >>> 0,
                    l = l + j >>> 0
                }
                return tt.endian([u, d, f, l])
            };
function t_wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}
function Je(e, n) {
                if (void 0 === e || null === e)
                    throw new Error("Illegal argument " + e);
                var r = t_wordsToBytes(c(e, n));
                return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : tt.bytesToHex(r)
            }
ot = function(e) {
            var t = "appId=".concat(Ye_a, "&t=").concat((new Date).getTime());
            for (var n in e)
                String(e[n]) && void 0 != e[n] && null != e[n] && "undefined" != e[n] && "null" != e[n] && (t = "".concat(t, "&").concat(n, "=").concat(e[n]));
            return {
                params: t,
                sign: Je("".concat(t).concat(Ye_b))
            }
        }
function Qe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}

u_a=n
  function Ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qe(Object(n), !0).forEach((function(t) {
                    Object(u_a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
CityCode='430300'   //城市编号
o=CityCode
l={
    "pageIndex": 10,
    "pageSize": 12,
    "categoryCode": "123",
    "order": "0"
}
s = ot(
    Ge(
        {cityCode: o}, l
    )
)
console.log(s)