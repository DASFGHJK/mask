navigator = {
    appCodeName:"Mozilla",
    appName:"Netscape",
    appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
    language:"zh-CN",
    cookieEnabled:true,
    doNotTrack:null,
    hardwareConcurrency:8,
    languages:['zh-CN', 'en', 'en-GB', 'en-US'],
    platform:"Win32",
    product:"Gecko",
    productSub:"20030107",
    userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
    vendor:"Google Inc.",
    vendorSub:"",
    webdriver:false,
},
window=globalThis
!function (t) {
    "use strict";
    var e = "0123456789abcdefghijklmnopqrstuvwxyz";

    function c(t) {
        return e.charAt(t)
    }

    function n(t, e) {
        return t & e
    }

    function l(t, e) {
        return t | e
    }

    function i(t, e) {
        return t ^ e
    }

    function r(t, e) {
        return t & ~e
    }

    function o(t) {
        if (0 == t)
            return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16,
            e += 16),
        0 == (255 & t) && (t >>= 8,
            e += 8),
        0 == (15 & t) && (t >>= 4,
            e += 4),
        0 == (3 & t) && (t >>= 2,
            e += 2),
        0 == (1 & t) && ++e,
            e
    }

    function a(t) {
        for (var e = 0; 0 != t;)
            t &= t - 1,
                ++e;
        return e
    }

    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function u(t) {
        var e, n, i = "";
        for (e = 0; e + 3 <= t.length; e += 3)
            n = parseInt(t.substring(e, e + 3), 16),
                i += s.charAt(n >> 6) + s.charAt(63 & n);
        for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
            i += s.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
            i += s.charAt(n >> 2) + s.charAt((3 & n) << 4)); 0 < (3 & i.length);)
            i += "=";
        return i
    }

    function h(t) {
        var e, n = "", i = 0, r = 0;
        for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
            var o = s.indexOf(t.charAt(e));
            o < 0 || (i = 0 == i ? (n += c(o >> 2),
                r = 3 & o,
                1) : 1 == i ? (n += c(r << 2 | o >> 4),
                r = 15 & o,
                2) : 2 == i ? (n += c(r),
                n += c(o >> 2),
                r = 3 & o,
                3) : (n += c(r << 2 | o >> 4),
                n += c(15 & o),
                0))
        }
        return 1 == i && (n += c(r << 2)),
            n
    }

    var f, p = function (t, e) {
        return (p = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (t, e) {
                    t.__proto__ = e
                }
                || function (t, e) {
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n])
                }
        )(t, e)
    };
    var d, g = {
            decode: function (t) {
                var e;
                if (void 0 === f) {
                    var n = "0123456789ABCDEF"
                        , i = " \f\n\r\t \u2028\u2029";
                    for (f = {},
                             e = 0; e < 16; ++e)
                        f[n.charAt(e)] = e;
                    for (n = n.toLowerCase(),
                             e = 10; e < 16; ++e)
                        f[n.charAt(e)] = e;
                    for (e = 0; e < i.length; ++e)
                        f[i.charAt(e)] = -1
                }
                var r = []
                    , o = 0
                    , a = 0;
                for (e = 0; e < t.length; ++e) {
                    var s = t.charAt(e);
                    if ("=" == s)
                        break;
                    if (-1 != (s = f[s])) {
                        if (void 0 === s)
                            throw new Error("Illegal character at offset " + e);
                        o |= s,
                            2 <= ++a ? (r[r.length] = o,
                                a = o = 0) : o <<= 4
                    }
                }
                if (a)
                    throw new Error("Hex encoding incomplete: 4 bits missing");
                return r
            }
        }, m = {
            decode: function (t) {
                var e;
                if (void 0 === d) {
                    var n = "= \f\n\r\t \u2028\u2029";
                    for (d = Object.create(null),
                             e = 0; e < 64; ++e)
                        d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                    for (e = 0; e < n.length; ++e)
                        d[n.charAt(e)] = -1
                }
                var i = []
                    , r = 0
                    , o = 0;
                for (e = 0; e < t.length; ++e) {
                    var a = t.charAt(e);
                    if ("=" == a)
                        break;
                    if (-1 != (a = d[a])) {
                        if (void 0 === a)
                            throw new Error("Illegal character at offset " + e);
                        r |= a,
                            4 <= ++o ? (i[i.length] = r >> 16,
                                i[i.length] = r >> 8 & 255,
                                i[i.length] = 255 & r,
                                o = r = 0) : r <<= 6
                    }
                }
                switch (o) {
                    case 1:
                        throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                    case 2:
                        i[i.length] = r >> 10;
                        break;
                    case 3:
                        i[i.length] = r >> 16,
                            i[i.length] = r >> 8 & 255
                }
                return i
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function (t) {
                var e = m.re.exec(t);
                if (e)
                    if (e[1])
                        t = e[1];
                    else {
                        if (!e[2])
                            throw new Error("RegExp out of sync");
                        t = e[2]
                    }
                return m.decode(t)
            }
        }, v = 1e13, y = function () {
            function t(t) {
                this.buf = [+t || 0]
            }

            return t.prototype.mulAdd = function (t, e) {
                var n, i, r = this.buf, o = r.length;
                for (n = 0; n < o; ++n)
                    (i = r[n] * t + e) < v ? e = 0 : i -= (e = 0 | i / v) * v,
                        r[n] = i;
                0 < e && (r[n] = e)
            }
                ,
                t.prototype.sub = function (t) {
                    var e, n, i = this.buf, r = i.length;
                    for (e = 0; e < r; ++e)
                        n = i[e] - t,
                            t = n < 0 ? (n += v,
                                1) : 0,
                            i[e] = n;
                    for (; 0 === i[i.length - 1];)
                        i.pop()
                }
                ,
                t.prototype.toString = function (t) {
                    if (10 != (t || 10))
                        throw new Error("only base 10 is supported");
                    for (var e = this.buf, n = e[e.length - 1].toString(), i = e.length - 2; 0 <= i; --i)
                        n += (v + e[i]).toString().substring(1);
                    return n
                }
                ,
                t.prototype.valueOf = function () {
                    for (var t = this.buf, e = 0, n = t.length - 1; 0 <= n; --n)
                        e = e * v + t[n];
                    return e
                }
                ,
                t.prototype.simplify = function () {
                    var t = this.buf;
                    return 1 == t.length ? t[0] : this
                }
                ,
                t
        }(), b = "…",
        w = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        x = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

    function T(t, e) {
        return t.length > e && (t = t.substring(0, e) + b),
            t
    }

    var E, A = function () {
            function n(t, e) {
                this.hexDigits = "0123456789ABCDEF",
                    t instanceof n ? (this.enc = t.enc,
                        this.pos = t.pos) : (this.enc = t,
                        this.pos = e)
            }

            return n.prototype.get = function (t) {
                if (void 0 === t && (t = this.pos++),
                t >= this.enc.length)
                    throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
            }
                ,
                n.prototype.hexByte = function (t) {
                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                }
                ,
                n.prototype.hexDump = function (t, e, n) {
                    for (var i = "", r = t; r < e; ++r)
                        if (i += this.hexByte(this.get(r)),
                        !0 !== n)
                            switch (15 & r) {
                                case 7:
                                    i += "  ";
                                    break;
                                case 15:
                                    i += "\n";
                                    break;
                                default:
                                    i += " "
                            }
                    return i
                }
                ,
                n.prototype.isASCII = function (t, e) {
                    for (var n = t; n < e; ++n) {
                        var i = this.get(n);
                        if (i < 32 || 176 < i)
                            return !1
                    }
                    return !0
                }
                ,
                n.prototype.parseStringISO = function (t, e) {
                    for (var n = "", i = t; i < e; ++i)
                        n += String.fromCharCode(this.get(i));
                    return n
                }
                ,
                n.prototype.parseStringUTF = function (t, e) {
                    for (var n = "", i = t; i < e;) {
                        var r = this.get(i++);
                        n += r < 128 ? String.fromCharCode(r) : 191 < r && r < 224 ? String.fromCharCode((31 & r) << 6 | 63 & this.get(i++)) : String.fromCharCode((15 & r) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++))
                    }
                    return n
                }
                ,
                n.prototype.parseStringBMP = function (t, e) {
                    for (var n, i, r = "", o = t; o < e;)
                        n = this.get(o++),
                            i = this.get(o++),
                            r += String.fromCharCode(n << 8 | i);
                    return r
                }
                ,
                n.prototype.parseTime = function (t, e, n) {
                    var i = this.parseStringISO(t, e)
                        , r = (n ? w : x).exec(i);
                    return r ? (n && (r[1] = +r[1],
                        r[1] += +r[1] < 70 ? 2e3 : 1900),
                        i = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4],
                    r[5] && (i += ":" + r[5],
                    r[6] && (i += ":" + r[6],
                    r[7] && (i += "." + r[7]))),
                    r[8] && (i += " UTC",
                    "Z" != r[8] && (i += r[8],
                    r[9] && (i += ":" + r[9]))),
                        i) : "Unrecognized time: " + i
                }
                ,
                n.prototype.parseInteger = function (t, e) {
                    for (var n, i = this.get(t), r = 127 < i, o = r ? 255 : 0, a = ""; i == o && ++t < e;)
                        i = this.get(t);
                    if (0 === (n = e - t))
                        return r ? -1 : 0;
                    if (4 < n) {
                        for (a = i,
                                 n <<= 3; 0 == (128 & (+a ^ o));)
                            a = +a << 1,
                                --n;
                        a = "(" + n + " bit)\n"
                    }
                    r && (i -= 256);
                    for (var s = new y(i), c = t + 1; c < e; ++c)
                        s.mulAdd(256, this.get(c));
                    return a + s.toString()
                }
                ,
                n.prototype.parseBitString = function (t, e, n) {
                    for (var i = this.get(t), r = (e - t - 1 << 3) - i, o = "(" + r + " bit)\n", a = "", s = t + 1; s < e; ++s) {
                        for (var c = this.get(s), l = s == e - 1 ? i : 0, u = 7; l <= u; --u)
                            a += c >> u & 1 ? "1" : "0";
                        if (a.length > n)
                            return o + T(a, n)
                    }
                    return o + a
                }
                ,
                n.prototype.parseOctetString = function (t, e, n) {
                    if (this.isASCII(t, e))
                        return T(this.parseStringISO(t, e), n);
                    var i = e - t
                        , r = "(" + i + " byte)\n";
                    (n /= 2) < i && (e = t + n);
                    for (var o = t; o < e; ++o)
                        r += this.hexByte(this.get(o));
                    return n < i && (r += b),
                        r
                }
                ,
                n.prototype.parseOID = function (t, e, n) {
                    for (var i = "", r = new y, o = 0, a = t; a < e; ++a) {
                        var s = this.get(a);
                        if (r.mulAdd(128, 127 & s),
                            o += 7,
                            !(128 & s)) {
                            if ("" === i)
                                if ((r = r.simplify()) instanceof y)
                                    r.sub(80),
                                        i = "2." + r.toString();
                                else {
                                    var c = r < 80 ? r < 40 ? 0 : 1 : 2;
                                    i = c + "." + (r - 40 * c)
                                }
                            else
                                i += "." + r.toString();
                            if (i.length > n)
                                return T(i, n);
                            r = new y,
                                o = 0
                        }
                    }
                    return 0 < o && (i += ".incomplete"),
                        i
                }
                ,
                n
        }(), D = function () {
            function u(t, e, n, i, r) {
                if (!(i instanceof S))
                    throw new Error("Invalid tag value.");
                this.stream = t,
                    this.header = e,
                    this.length = n,
                    this.tag = i,
                    this.sub = r
            }

            return u.prototype.typeName = function () {
                switch (this.tag.tagClass) {
                    case 0:
                        switch (this.tag.tagNumber) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString"
                        }
                        return "Universal_" + this.tag.tagNumber.toString();
                    case 1:
                        return "Application_" + this.tag.tagNumber.toString();
                    case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";
                    case 3:
                        return "Private_" + this.tag.tagNumber.toString()
                }
            }
                ,
                u.prototype.content = function (t) {
                    if (void 0 === this.tag)
                        return null;
                    void 0 === t && (t = 1 / 0);
                    var e = this.posContent()
                        , n = Math.abs(this.length);
                    if (!this.tag.isUniversal())
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                    switch (this.tag.tagNumber) {
                        case 1:
                            return 0 === this.stream.get(e) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(e, e + n);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                        case 6:
                            return this.stream.parseOID(e, e + n, t);
                        case 16:
                        case 17:
                            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                        case 12:
                            return T(this.stream.parseStringUTF(e, e + n), t);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return T(this.stream.parseStringISO(e, e + n), t);
                        case 30:
                            return T(this.stream.parseStringBMP(e, e + n), t);
                        case 23:
                        case 24:
                            return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
                    }
                    return null
                }
                ,
                u.prototype.toString = function () {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                }
                ,
                u.prototype.toPrettyString = function (t) {
                    void 0 === t && (t = "");
                    var e = t + this.typeName() + " @" + this.stream.pos;
                    if (0 <= this.length && (e += "+"),
                        e += this.length,
                        this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"),
                        e += "\n",
                    null !== this.sub) {
                        t += "  ";
                        for (var n = 0, i = this.sub.length; n < i; ++n)
                            e += this.sub[n].toPrettyString(t)
                    }
                    return e
                }
                ,
                u.prototype.posStart = function () {
                    return this.stream.pos
                }
                ,
                u.prototype.posContent = function () {
                    return this.stream.pos + this.header
                }
                ,
                u.prototype.posEnd = function () {
                    return this.stream.pos + this.header + Math.abs(this.length)
                }
                ,
                u.prototype.toHexString = function () {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                }
                ,
                u.decodeLength = function (t) {
                    var e = t.get()
                        , n = 127 & e;
                    if (n == e)
                        return n;
                    if (6 < n)
                        throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                    if (0 == n)
                        return null;
                    for (var i = e = 0; i < n; ++i)
                        e = 256 * e + t.get();
                    return e
                }
                ,
                u.prototype.getHexStringValue = function () {
                    var t = this.toHexString()
                        , e = 2 * this.header
                        , n = 2 * this.length;
                    return t.substr(e, n)
                }
                ,
                u.decode = function (t) {
                    var i;
                    i = t instanceof A ? t : new A(t, 0);
                    var e = new A(i)
                        , n = new S(i)
                        , r = u.decodeLength(i)
                        , o = i.pos
                        , a = o - e.pos
                        , s = null
                        , c = function () {
                        var t = [];
                        if (null !== r) {
                            for (var e = o + r; i.pos < e;)
                                t[t.length] = u.decode(i);
                            if (i.pos != e)
                                throw new Error("Content size is not correct for container starting at offset " + o)
                        } else
                            try {
                                for (; ;) {
                                    var n = u.decode(i);
                                    if (n.tag.isEOC())
                                        break;
                                    t[t.length] = n
                                }
                                r = o - i.pos
                            } catch (t) {
                                throw new Error("Exception while decoding undefined length content: " + t)
                            }
                        return t
                    };
                    if (n.tagConstructed)
                        s = c();
                    else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber))
                        try {
                            if (3 == n.tagNumber && 0 != i.get())
                                throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                            s = c();
                            for (var l = 0; l < s.length; ++l)
                                if (s[l].tag.isEOC())
                                    throw new Error("EOC is not supposed to be actual content.")
                        } catch (t) {
                            s = null
                        }
                    if (null === s) {
                        if (null === r)
                            throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                        i.pos = o + Math.abs(r)
                    }
                    return new u(e, a, r, n, s)
                }
                ,
                u
        }(), S = function () {
            function t(t) {
                var e = t.get();
                if (this.tagClass = e >> 6,
                    this.tagConstructed = 0 != (32 & e),
                    this.tagNumber = 31 & e,
                31 == this.tagNumber) {
                    for (var n = new y; e = t.get(),
                        n.mulAdd(128, 127 & e),
                    128 & e;)
                        ;
                    this.tagNumber = n.simplify()
                }
            }

            return t.prototype.isUniversal = function () {
                return 0 === this.tagClass
            }
                ,
                t.prototype.isEOC = function () {
                    return 0 === this.tagClass && 0 === this.tagNumber
                }
                ,
                t
        }(),
        I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        M = (1 << 26) / I[I.length - 1], _ = function () {
            function b(t, e, n) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }

            return b.prototype.toString = function (t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var e;
                if (16 == t)
                    e = 4;
                else if (8 == t)
                    e = 3;
                else if (2 == t)
                    e = 1;
                else if (32 == t)
                    e = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    e = 2
                }
                var n, i = (1 << e) - 1, r = !1, o = "", a = this.t, s = this.DB - a * this.DB % e;
                if (0 < a--)
                    for (s < this.DB && 0 < (n = this[a] >> s) && (r = !0,
                        o = c(n)); 0 <= a;)
                        s < e ? (n = (this[a] & (1 << s) - 1) << e - s,
                            n |= this[--a] >> (s += this.DB - e)) : (n = this[a] >> (s -= e) & i,
                        s <= 0 && (s += this.DB,
                            --a)),
                        0 < n && (r = !0),
                        r && (o += c(n));
                return r ? o : "0"
            }
                ,
                b.prototype.negate = function () {
                    var t = O();
                    return b.ZERO.subTo(this, t),
                        t
                }
                ,
                b.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this
                }
                ,
                b.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var n = this.t;
                    if (0 != (e = n - t.t))
                        return this.s < 0 ? -e : e;
                    for (; 0 <= --n;)
                        if (0 != (e = this[n] - t[n]))
                            return e;
                    return 0
                }
                ,
                b.prototype.bitLength = function () {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM)
                }
                ,
                b.prototype.mod = function (t) {
                    var e = O();
                    return this.abs().divRemTo(t, null, e),
                    this.s < 0 && 0 < e.compareTo(b.ZERO) && t.subTo(e, e),
                        e
                }
                ,
                b.prototype.modPowInt = function (t, e) {
                    var n;
                    return n = t < 256 || e.isEven() ? new C(e) : new N(e),
                        this.exp(t, n)
                }
                ,
                b.prototype.clone = function () {
                    var t = O();
                    return this.copyTo(t),
                        t
                }
                ,
                b.prototype.intValue = function () {
                    if (this.s < 0) {
                        if (1 == this.t)
                            return this[0] - this.DV;
                        if (0 == this.t)
                            return -1
                    } else {
                        if (1 == this.t)
                            return this[0];
                        if (0 == this.t)
                            return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }
                ,
                b.prototype.byteValue = function () {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }
                ,
                b.prototype.shortValue = function () {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }
                ,
                b.prototype.signum = function () {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }
                ,
                b.prototype.toByteArray = function () {
                    var t = this.t
                        , e = [];
                    e[0] = this.s;
                    var n, i = this.DB - t * this.DB % 8, r = 0;
                    if (0 < t--)
                        for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i); 0 <= t;)
                            i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i,
                                n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255,
                            i <= 0 && (i += this.DB,
                                --t)),
                            0 != (128 & n) && (n |= -256),
                            0 == r && (128 & this.s) != (128 & n) && ++r,
                            (0 < r || n != this.s) && (e[r++] = n);
                    return e
                }
                ,
                b.prototype.equals = function (t) {
                    return 0 == this.compareTo(t)
                }
                ,
                b.prototype.min = function (t) {
                    return this.compareTo(t) < 0 ? this : t
                }
                ,
                b.prototype.max = function (t) {
                    return 0 < this.compareTo(t) ? this : t
                }
                ,
                b.prototype.and = function (t) {
                    var e = O();
                    return this.bitwiseTo(t, n, e),
                        e
                }
                ,
                b.prototype.or = function (t) {
                    var e = O();
                    return this.bitwiseTo(t, l, e),
                        e
                }
                ,
                b.prototype.xor = function (t) {
                    var e = O();
                    return this.bitwiseTo(t, i, e),
                        e
                }
                ,
                b.prototype.andNot = function (t) {
                    var e = O();
                    return this.bitwiseTo(t, r, e),
                        e
                }
                ,
                b.prototype.not = function () {
                    for (var t = O(), e = 0; e < this.t; ++e)
                        t[e] = this.DM & ~this[e];
                    return t.t = this.t,
                        t.s = ~this.s,
                        t
                }
                ,
                b.prototype.shiftLeft = function (t) {
                    var e = O();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                        e
                }
                ,
                b.prototype.shiftRight = function (t) {
                    var e = O();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                        e
                }
                ,
                b.prototype.getLowestSetBit = function () {
                    for (var t = 0; t < this.t; ++t)
                        if (0 != this[t])
                            return t * this.DB + o(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1
                }
                ,
                b.prototype.bitCount = function () {
                    for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                        t += a(this[n] ^ e);
                    return t
                }
                ,
                b.prototype.testBit = function (t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                }
                ,
                b.prototype.setBit = function (t) {
                    return this.changeBit(t, l)
                }
                ,
                b.prototype.clearBit = function (t) {
                    return this.changeBit(t, r)
                }
                ,
                b.prototype.flipBit = function (t) {
                    return this.changeBit(t, i)
                }
                ,
                b.prototype.add = function (t) {
                    var e = O();
                    return this.addTo(t, e),
                        e
                }
                ,
                b.prototype.subtract = function (t) {
                    var e = O();
                    return this.subTo(t, e),
                        e
                }
                ,
                b.prototype.multiply = function (t) {
                    var e = O();
                    return this.multiplyTo(t, e),
                        e
                }
                ,
                b.prototype.divide = function (t) {
                    var e = O();
                    return this.divRemTo(t, e, null),
                        e
                }
                ,
                b.prototype.remainder = function (t) {
                    var e = O();
                    return this.divRemTo(t, null, e),
                        e
                }
                ,
                b.prototype.divideAndRemainder = function (t) {
                    var e = O()
                        , n = O();
                    return this.divRemTo(t, e, n),
                        [e, n]
                }
                ,
                b.prototype.modPow = function (t, e) {
                    var n, i, r = t.bitLength(), o = U(1);
                    if (r <= 0)
                        return o;
                    n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
                        i = r < 8 ? new C(e) : e.isEven() ? new j(e) : new N(e);
                    var a = []
                        , s = 3
                        , c = n - 1
                        , l = (1 << n) - 1;
                    if (a[1] = i.convert(this),
                    1 < n) {
                        var u = O();
                        for (i.sqrTo(a[1], u); s <= l;)
                            a[s] = O(),
                                i.mulTo(u, a[s - 2], a[s]),
                                s += 2
                    }
                    var h, f, p = t.t - 1, d = !0, g = O();
                    for (r = F(t[p]) - 1; 0 <= p;) {
                        for (c <= r ? h = t[p] >> r - c & l : (h = (t[p] & (1 << r + 1) - 1) << c - r,
                        0 < p && (h |= t[p - 1] >> this.DB + r - c)),
                                 s = n; 0 == (1 & h);)
                            h >>= 1,
                                --s;
                        if ((r -= s) < 0 && (r += this.DB,
                            --p),
                            d)
                            a[h].copyTo(o),
                                d = !1;
                        else {
                            for (; 1 < s;)
                                i.sqrTo(o, g),
                                    i.sqrTo(g, o),
                                    s -= 2;
                            0 < s ? i.sqrTo(o, g) : (f = o,
                                o = g,
                                g = f),
                                i.mulTo(g, a[h], o)
                        }
                        for (; 0 <= p && 0 == (t[p] & 1 << r);)
                            i.sqrTo(o, g),
                                f = o,
                                o = g,
                                g = f,
                            --r < 0 && (r = this.DB - 1,
                                --p)
                    }
                    return i.revert(o)
                }
                ,
                b.prototype.modInverse = function (t) {
                    var e = t.isEven();
                    if (this.isEven() && e || 0 == t.signum())
                        return b.ZERO;
                    for (var n = t.clone(), i = this.clone(), r = U(1), o = U(0), a = U(0), s = U(1); 0 != n.signum();) {
                        for (; n.isEven();)
                            n.rShiftTo(1, n),
                                e ? (r.isEven() && o.isEven() || (r.addTo(this, r),
                                    o.subTo(t, o)),
                                    r.rShiftTo(1, r)) : o.isEven() || o.subTo(t, o),
                                o.rShiftTo(1, o);
                        for (; i.isEven();)
                            i.rShiftTo(1, i),
                                e ? (a.isEven() && s.isEven() || (a.addTo(this, a),
                                    s.subTo(t, s)),
                                    a.rShiftTo(1, a)) : s.isEven() || s.subTo(t, s),
                                s.rShiftTo(1, s);
                        0 <= n.compareTo(i) ? (n.subTo(i, n),
                        e && r.subTo(a, r),
                            o.subTo(s, o)) : (i.subTo(n, i),
                        e && a.subTo(r, a),
                            s.subTo(o, s))
                    }
                    return 0 != i.compareTo(b.ONE) ? b.ZERO : 0 <= s.compareTo(t) ? s.subtract(t) : s.signum() < 0 ? (s.addTo(t, s),
                        s.signum() < 0 ? s.add(t) : s) : s
                }
                ,
                b.prototype.pow = function (t) {
                    return this.exp(t, new k)
                }
                ,
                b.prototype.gcd = function (t) {
                    var e = this.s < 0 ? this.negate() : this.clone()
                        , n = t.s < 0 ? t.negate() : t.clone();
                    if (e.compareTo(n) < 0) {
                        var i = e;
                        e = n,
                            n = i
                    }
                    var r = e.getLowestSetBit()
                        , o = n.getLowestSetBit();
                    if (o < 0)
                        return e;
                    for (r < o && (o = r),
                         0 < o && (e.rShiftTo(o, e),
                             n.rShiftTo(o, n)); 0 < e.signum();)
                        0 < (r = e.getLowestSetBit()) && e.rShiftTo(r, e),
                        0 < (r = n.getLowestSetBit()) && n.rShiftTo(r, n),
                            0 <= e.compareTo(n) ? (e.subTo(n, e),
                                e.rShiftTo(1, e)) : (n.subTo(e, n),
                                n.rShiftTo(1, n));
                    return 0 < o && n.lShiftTo(o, n),
                        n
                }
                ,
                b.prototype.isProbablePrime = function (t) {
                    var e, n = this.abs();
                    if (1 == n.t && n[0] <= I[I.length - 1]) {
                        for (e = 0; e < I.length; ++e)
                            if (n[0] == I[e])
                                return !0;
                        return !1
                    }
                    if (n.isEven())
                        return !1;
                    for (e = 1; e < I.length;) {
                        for (var i = I[e], r = e + 1; r < I.length && i < M;)
                            i *= I[r++];
                        for (i = n.modInt(i); e < r;)
                            if (i % I[e++] == 0)
                                return !1
                    }
                    return n.millerRabin(t)
                }
                ,
                b.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e)
                        t[e] = this[e];
                    t.t = this.t,
                        t.s = this.s
                }
                ,
                b.prototype.fromInt = function (t) {
                    this.t = 1,
                        this.s = t < 0 ? -1 : 0,
                        0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                }
                ,
                b.prototype.fromString = function (t, e) {
                    var n;
                    if (16 == e)
                        n = 4;
                    else if (8 == e)
                        n = 3;
                    else if (256 == e)
                        n = 8;
                    else if (2 == e)
                        n = 1;
                    else if (32 == e)
                        n = 5;
                    else {
                        if (4 != e)
                            return void this.fromRadix(t, e);
                        n = 2
                    }
                    this.t = 0,
                        this.s = 0;
                    for (var i = t.length, r = !1, o = 0; 0 <= --i;) {
                        var a = 8 == n ? 255 & +t[i] : q(t, i);
                        a < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1,
                            0 == o ? this[this.t++] = a : o + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o,
                                this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o,
                        (o += n) >= this.DB && (o -= this.DB))
                    }
                    8 == n && 0 != (128 & +t[0]) && (this.s = -1,
                    0 < o && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                        this.clamp(),
                    r && b.ZERO.subTo(this, this)
                }
                ,
                b.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)
                        --this.t
                }
                ,
                b.prototype.dlShiftTo = function (t, e) {
                    var n;
                    for (n = this.t - 1; 0 <= n; --n)
                        e[n + t] = this[n];
                    for (n = t - 1; 0 <= n; --n)
                        e[n] = 0;
                    e.t = this.t + t,
                        e.s = this.s
                }
                ,
                b.prototype.drShiftTo = function (t, e) {
                    for (var n = t; n < this.t; ++n)
                        e[n - t] = this[n];
                    e.t = Math.max(this.t - t, 0),
                        e.s = this.s
                }
                ,
                b.prototype.lShiftTo = function (t, e) {
                    for (var n = t % this.DB, i = this.DB - n, r = (1 << i) - 1, o = Math.floor(t / this.DB), a = this.s << n & this.DM, s = this.t - 1; 0 <= s; --s)
                        e[s + o + 1] = this[s] >> i | a,
                            a = (this[s] & r) << n;
                    for (var s = o - 1; 0 <= s; --s)
                        e[s] = 0;
                    e[o] = a,
                        e.t = this.t + o + 1,
                        e.s = this.s,
                        e.clamp()
                }
                ,
                b.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var n = Math.floor(t / this.DB);
                    if (n >= this.t)
                        e.t = 0;
                    else {
                        var i = t % this.DB
                            , r = this.DB - i
                            , o = (1 << i) - 1;
                        e[0] = this[n] >> i;
                        for (var a = n + 1; a < this.t; ++a)
                            e[a - n - 1] |= (this[a] & o) << r,
                                e[a - n] = this[a] >> i;
                        0 < i && (e[this.t - n - 1] |= (this.s & o) << r),
                            e.t = this.t - n,
                            e.clamp()
                    }
                }
                ,
                b.prototype.subTo = function (t, e) {
                    for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r;)
                        i += this[n] - t[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                    if (t.t < this.t) {
                        for (i -= t.s; n < this.t;)
                            i += this[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; n < t.t;)
                            i -= t[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i -= t.s
                    }
                    e.s = i < 0 ? -1 : 0,
                        i < -1 ? e[n++] = this.DV + i : 0 < i && (e[n++] = i),
                        e.t = n,
                        e.clamp()
                }
                ,
                b.prototype.multiplyTo = function (t, e) {
                    var n = this.abs()
                        , i = t.abs()
                        , r = n.t;
                    for (e.t = r + i.t; 0 <= --r;)
                        e[r] = 0;
                    for (r = 0; r < i.t; ++r)
                        e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
                    e.s = 0,
                        e.clamp(),
                    this.s != t.s && b.ZERO.subTo(e, e)
                }
                ,
                b.prototype.squareTo = function (t) {
                    for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;)
                        t[n] = 0;
                    for (n = 0; n < e.t - 1; ++n) {
                        var i = e.am(n, e[n], t, 2 * n, 0, 1);
                        (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                            t[n + e.t + 1] = 1)
                    }
                    0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                        t.s = 0,
                        t.clamp()
                }
                ,
                b.prototype.divRemTo = function (t, e, n) {
                    var i = t.abs();
                    if (!(i.t <= 0)) {
                        var r = this.abs();
                        if (r.t < i.t)
                            return null != e && e.fromInt(0),
                                void (null != n && this.copyTo(n));
                        null == n && (n = O());
                        var o = O()
                            , a = this.s
                            , s = t.s
                            , c = this.DB - F(i[i.t - 1]);
                        0 < c ? (i.lShiftTo(c, o),
                            r.lShiftTo(c, n)) : (i.copyTo(o),
                            r.copyTo(n));
                        var l = o.t
                            , u = o[l - 1];
                        if (0 != u) {
                            var h = u * (1 << this.F1) + (1 < l ? o[l - 2] >> this.F2 : 0)
                                , f = this.FV / h
                                , p = (1 << this.F1) / h
                                , d = 1 << this.F2
                                , g = n.t
                                , m = g - l
                                , v = null == e ? O() : e;
                            for (o.dlShiftTo(m, v),
                                 0 <= n.compareTo(v) && (n[n.t++] = 1,
                                     n.subTo(v, n)),
                                     b.ONE.dlShiftTo(l, v),
                                     v.subTo(o, o); o.t < l;)
                                o[o.t++] = 0;
                            for (; 0 <= --m;) {
                                var y = n[--g] == u ? this.DM : Math.floor(n[g] * f + (n[g - 1] + d) * p);
                                if ((n[g] += o.am(0, y, n, m, 0, l)) < y)
                                    for (o.dlShiftTo(m, v),
                                             n.subTo(v, n); n[g] < --y;)
                                        n.subTo(v, n)
                            }
                            null != e && (n.drShiftTo(l, e),
                            a != s && b.ZERO.subTo(e, e)),
                                n.t = l,
                                n.clamp(),
                            0 < c && n.rShiftTo(c, n),
                            a < 0 && b.ZERO.subTo(n, n)
                        }
                    }
                }
                ,
                b.prototype.invDigit = function () {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                }
                ,
                b.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s)
                }
                ,
                b.prototype.exp = function (t, e) {
                    if (4294967295 < t || t < 1)
                        return b.ONE;
                    var n = O()
                        , i = O()
                        , r = e.convert(this)
                        , o = F(t) - 1;
                    for (r.copyTo(n); 0 <= --o;)
                        if (e.sqrTo(n, i),
                        0 < (t & 1 << o))
                            e.mulTo(i, r, n);
                        else {
                            var a = n;
                            n = i,
                                i = a
                        }
                    return e.revert(n)
                }
                ,
                b.prototype.chunkSize = function (t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                }
                ,
                b.prototype.toRadix = function (t) {
                    if (null == t && (t = 10),
                    0 == this.signum() || t < 2 || 36 < t)
                        return "0";
                    var e = this.chunkSize(t)
                        , n = Math.pow(t, e)
                        , i = U(n)
                        , r = O()
                        , o = O()
                        , a = "";
                    for (this.divRemTo(i, r, o); 0 < r.signum();)
                        a = (n + o.intValue()).toString(t).substr(1) + a,
                            r.divRemTo(i, r, o);
                    return o.intValue().toString(t) + a
                }
                ,
                b.prototype.fromRadix = function (t, e) {
                    this.fromInt(0),
                    null == e && (e = 10);
                    for (var n = this.chunkSize(e), i = Math.pow(e, n), r = !1, o = 0, a = 0, s = 0; s < t.length; ++s) {
                        var c = q(t, s);
                        c < 0 ? "-" == t.charAt(s) && 0 == this.signum() && (r = !0) : (a = e * a + c,
                        ++o >= n && (this.dMultiply(i),
                            this.dAddOffset(a, 0),
                            a = o = 0))
                    }
                    0 < o && (this.dMultiply(Math.pow(e, o)),
                        this.dAddOffset(a, 0)),
                    r && b.ZERO.subTo(this, this)
                }
                ,
                b.prototype.fromNumber = function (t, e, n) {
                    if ("number" == typeof e)
                        if (t < 2)
                            this.fromInt(1);
                        else
                            for (this.fromNumber(t, n),
                                 this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), l, this),
                                 this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);)
                                this.dAddOffset(2, 0),
                                this.bitLength() > t && this.subTo(b.ONE.shiftLeft(t - 1), this);
                    else {
                        var i = []
                            , r = 7 & t;
                        i.length = 1 + (t >> 3),
                            e.nextBytes(i),
                            0 < r ? i[0] &= (1 << r) - 1 : i[0] = 0,
                            this.fromString(i, 256)
                    }
                }
                ,
                b.prototype.bitwiseTo = function (t, e, n) {
                    var i, r, o = Math.min(t.t, this.t);
                    for (i = 0; i < o; ++i)
                        n[i] = e(this[i], t[i]);
                    if (t.t < this.t) {
                        for (r = t.s & this.DM,
                                 i = o; i < this.t; ++i)
                            n[i] = e(this[i], r);
                        n.t = this.t
                    } else {
                        for (r = this.s & this.DM,
                                 i = o; i < t.t; ++i)
                            n[i] = e(r, t[i]);
                        n.t = t.t
                    }
                    n.s = e(this.s, t.s),
                        n.clamp()
                }
                ,
                b.prototype.changeBit = function (t, e) {
                    var n = b.ONE.shiftLeft(t);
                    return this.bitwiseTo(n, e, n),
                        n
                }
                ,
                b.prototype.addTo = function (t, e) {
                    for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r;)
                        i += this[n] + t[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                    if (t.t < this.t) {
                        for (i += t.s; n < this.t;)
                            i += this[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; n < t.t;)
                            i += t[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i += t.s
                    }
                    e.s = i < 0 ? -1 : 0,
                        0 < i ? e[n++] = i : i < -1 && (e[n++] = this.DV + i),
                        e.t = n,
                        e.clamp()
                }
                ,
                b.prototype.dMultiply = function (t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                        ++this.t,
                        this.clamp()
                }
                ,
                b.prototype.dAddOffset = function (t, e) {
                    if (0 != t) {
                        for (; this.t <= e;)
                            this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV;)
                            this[e] -= this.DV,
                            ++e >= this.t && (this[this.t++] = 0),
                                ++this[e]
                    }
                }
                ,
                b.prototype.multiplyLowerTo = function (t, e, n) {
                    var i = Math.min(this.t + t.t, e);
                    for (n.s = 0,
                             n.t = i; 0 < i;)
                        n[--i] = 0;
                    for (var r = n.t - this.t; i < r; ++i)
                        n[i + this.t] = this.am(0, t[i], n, i, 0, this.t);
                    for (var r = Math.min(t.t, e); i < r; ++i)
                        this.am(0, t[i], n, i, 0, e - i);
                    n.clamp()
                }
                ,
                b.prototype.multiplyUpperTo = function (t, e, n) {
                    --e;
                    var i = n.t = this.t + t.t - e;
                    for (n.s = 0; 0 <= --i;)
                        n[i] = 0;
                    for (i = Math.max(e - this.t, 0); i < t.t; ++i)
                        n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
                    n.clamp(),
                        n.drShiftTo(1, n)
                }
                ,
                b.prototype.modInt = function (t) {
                    if (t <= 0)
                        return 0;
                    var e = this.DV % t
                        , n = this.s < 0 ? t - 1 : 0;
                    if (0 < this.t)
                        if (0 == e)
                            n = this[0] % t;
                        else
                            for (var i = this.t - 1; 0 <= i; --i)
                                n = (e * n + this[i]) % t;
                    return n
                }
                ,
                b.prototype.millerRabin = function (t) {
                    var e = this.subtract(b.ONE)
                        , n = e.getLowestSetBit();
                    if (n <= 0)
                        return !1;
                    var i = e.shiftRight(n);
                    I.length < (t = t + 1 >> 1) && (t = I.length);
                    for (var r = O(), o = 0; o < t; ++o) {
                        r.fromInt(I[Math.floor(Math.random() * I.length)]);
                        var a = r.modPow(i, this);
                        if (0 != a.compareTo(b.ONE) && 0 != a.compareTo(e)) {
                            for (var s = 1; s++ < n && 0 != a.compareTo(e);)
                                if (0 == (a = a.modPowInt(2, this)).compareTo(b.ONE))
                                    return !1;
                            if (0 != a.compareTo(e))
                                return !1
                        }
                    }
                    return !0
                }
                ,
                b.prototype.square = function () {
                    var t = O();
                    return this.squareTo(t),
                        t
                }
                ,
                b.prototype.gcda = function (t, e) {
                    var n = this.s < 0 ? this.negate() : this.clone()
                        , i = t.s < 0 ? t.negate() : t.clone();
                    if (n.compareTo(i) < 0) {
                        var r = n;
                        n = i,
                            i = r
                    }
                    var o = n.getLowestSetBit()
                        , a = i.getLowestSetBit();
                    if (a < 0)
                        e(n);
                    else {
                        o < a && (a = o),
                        0 < a && (n.rShiftTo(a, n),
                            i.rShiftTo(a, i));
                        var s = function () {
                            0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n),
                            0 < (o = i.getLowestSetBit()) && i.rShiftTo(o, i),
                                0 <= n.compareTo(i) ? (n.subTo(i, n),
                                    n.rShiftTo(1, n)) : (i.subTo(n, i),
                                    i.rShiftTo(1, i)),
                                0 < n.signum() ? setTimeout(s, 0) : (0 < a && i.lShiftTo(a, i),
                                    setTimeout(function () {
                                        e(i)
                                    }, 0))
                        };
                        setTimeout(s, 10)
                    }
                }
                ,
                b.prototype.fromNumberAsync = function (t, e, n, i) {
                    if ("number" == typeof e)
                        if (t < 2)
                            this.fromInt(1);
                        else {
                            this.fromNumber(t, n),
                            this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), l, this),
                            this.isEven() && this.dAddOffset(1, 0);
                            var r = this
                                , o = function () {
                                r.dAddOffset(2, 0),
                                r.bitLength() > t && r.subTo(b.ONE.shiftLeft(t - 1), r),
                                    r.isProbablePrime(e) ? setTimeout(function () {
                                        i()
                                    }, 0) : setTimeout(o, 0)
                            };
                            setTimeout(o, 0)
                        }
                    else {
                        var a = []
                            , s = 7 & t;
                        a.length = 1 + (t >> 3),
                            e.nextBytes(a),
                            0 < s ? a[0] &= (1 << s) - 1 : a[0] = 0,
                            this.fromString(a, 256)
                    }
                }
                ,
                b
        }(), k = function () {
            function t() {
            }

            return t.prototype.convert = function (t) {
                return t
            }
                ,
                t.prototype.revert = function (t) {
                    return t
                }
                ,
                t.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n)
                }
                ,
                t.prototype.sqrTo = function (t, e) {
                    t.squareTo(e)
                }
                ,
                t
        }(), C = function () {
            function t(t) {
                this.m = t
            }

            return t.prototype.convert = function (t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }
                ,
                t.prototype.revert = function (t) {
                    return t
                }
                ,
                t.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t)
                }
                ,
                t.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                t.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                t
        }(), N = function () {
            function t(t) {
                this.m = t,
                    this.mp = t.invDigit(),
                    this.mpl = 32767 & this.mp,
                    this.mph = this.mp >> 15,
                    this.um = (1 << t.DB - 15) - 1,
                    this.mt2 = 2 * t.t
            }

            return t.prototype.convert = function (t) {
                var e = O();
                return t.abs().dlShiftTo(this.m.t, e),
                    e.divRemTo(this.m, null, e),
                t.s < 0 && 0 < e.compareTo(_.ZERO) && this.m.subTo(e, e),
                    e
            }
                ,
                t.prototype.revert = function (t) {
                    var e = O();
                    return t.copyTo(e),
                        this.reduce(e),
                        e
                }
                ,
                t.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2;)
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var n = 32767 & t[e]
                            , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (n = e + this.m.t,
                                 t[n] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV;)
                            t[n] -= t.DV,
                                t[++n]++
                    }
                    t.clamp(),
                        t.drShiftTo(this.m.t, t),
                    0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                }
                ,
                t.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                t.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                t
        }(), j = function () {
            function t(t) {
                this.m = t,
                    this.r2 = O(),
                    this.q3 = O(),
                    _.ONE.dlShiftTo(2 * t.t, this.r2),
                    this.mu = this.r2.divide(t)
            }

            return t.prototype.convert = function (t) {
                if (t.s < 0 || t.t > 2 * this.m.t)
                    return t.mod(this.m);
                if (t.compareTo(this.m) < 0)
                    return t;
                var e = O();
                return t.copyTo(e),
                    this.reduce(e),
                    e
            }
                ,
                t.prototype.revert = function (t) {
                    return t
                }
                ,
                t.prototype.reduce = function (t) {
                    for (t.drShiftTo(this.m.t - 1, this.r2),
                         t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                             t.clamp()),
                             this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                             this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
                        t.dAddOffset(1, this.m.t + 1);
                    for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);)
                        t.subTo(this.m, t)
                }
                ,
                t.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                t.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                t
        }();

    function O() {
        return new _(null)
    }

    function R(t, e) {
        return new _(t, e)
    }

    E = "Microsoft Internet Explorer" == navigator.appName ? (_.prototype.am = function (t, e, n, i, r, o) {
        var a = 32767 & e
            , s = e >> 15;
        for (; 0 <= --o;) {
            var c = 32767 & this[t]
                , l = this[t++] >> 15
                , u = s * c + l * a;
            c = a * c + ((32767 & u) << 15) + n[i] + (1073741823 & r),
                r = (c >>> 30) + (u >>> 15) + s * l + (r >>> 30),
                n[i++] = 1073741823 & c
        }
        return r
    }
        ,
        30) : "Netscape" != navigator.appName ? (_.prototype.am = function (t, e, n, i, r, o) {
        for (; 0 <= --o;) {
            var a = e * this[t++] + n[i] + r;
            r = Math.floor(a / 67108864),
                n[i++] = 67108863 & a
        }
        return r
    }
        ,
        26) : (_.prototype.am = function (t, e, n, i, r, o) {
        var a = 16383 & e
            , s = e >> 14;
        for (; 0 <= --o;) {
            var c = 16383 & this[t]
                , l = this[t++] >> 14
                , u = s * c + l * a;
            c = a * c + ((16383 & u) << 14) + n[i] + r,
                r = (c >> 28) + (u >> 14) + s * l,
                n[i++] = 268435455 & c
        }
        return r
    }
        ,
        28),
        _.prototype.DB = E,
        _.prototype.DM = (1 << E) - 1,
        _.prototype.DV = 1 << E;
    _.prototype.FV = Math.pow(2, 52),
        _.prototype.F1 = 52 - E,
        _.prototype.F2 = 2 * E - 52;
    var L, P, B = [];
    for (L = "0".charCodeAt(0),
             P = 0; P <= 9; ++P)
        B[L++] = P;
    for (L = "a".charCodeAt(0),
             P = 10; P < 36; ++P)
        B[L++] = P;
    for (L = "A".charCodeAt(0),
             P = 10; P < 36; ++P)
        B[L++] = P;

    function q(t, e) {
        var n = B[t.charCodeAt(e)];
        return null == n ? -1 : n
    }

    function U(t) {
        var e = O();
        return e.fromInt(t),
            e
    }

    function F(t) {
        var e, n = 1;
        return 0 != (e = t >>> 16) && (t = e,
            n += 16),
        0 != (e = t >> 8) && (t = e,
            n += 8),
        0 != (e = t >> 4) && (t = e,
            n += 4),
        0 != (e = t >> 2) && (t = e,
            n += 2),
        0 != (e = t >> 1) && (t = e,
            n += 1),
            n
    }

    _.ZERO = U(0),
        _.ONE = U(1);
    var z = function () {
        function t() {
            this.i = 0,
                this.j = 0,
                this.S = []
        }

        return t.prototype.init = function (t) {
            var e, n, i;
            for (e = 0; e < 256; ++e)
                this.S[e] = e;
            for (e = n = 0; e < 256; ++e)
                n = n + this.S[e] + t[e % t.length] & 255,
                    i = this.S[e],
                    this.S[e] = this.S[n],
                    this.S[n] = i;
            this.i = 0,
                this.j = 0
        }
            ,
            t.prototype.next = function () {
                var t;
                return this.i = this.i + 1 & 255,
                    this.j = this.j + this.S[this.i] & 255,
                    t = this.S[this.i],
                    this.S[this.i] = this.S[this.j],
                    this.S[this.j] = t,
                    this.S[t + this.S[this.i] & 255]
            }
            ,
            t
    }();
    var V, H, Q = 256, K = null;
    if (null == K) {
        K = [];
        var W = void (H = 0);
        if (window.crypto && window.crypto.getRandomValues) {
            var Y = new Uint32Array(256);
            for (window.crypto.getRandomValues(Y),
                     W = 0; W < Y.length; ++W)
                K[H++] = 255 & Y[W]
        }
        var G = function (t) {
            if (this.count = this.count || 0,
            256 <= this.count || Q <= H)
                window.removeEventListener ? window.removeEventListener("mousemove", G, !1) : window.detachEvent && window.detachEvent("onmousemove", G);
            else
                try {
                    var e = t.x + t.y;
                    K[H++] = 255 & e,
                        this.count += 1
                } catch (t) {
                }
        };
        window.addEventListener ? window.addEventListener("mousemove", G, !1) : window.attachEvent && window.attachEvent("onmousemove", G)
    }

    function X() {
        if (null == V) {
            for (V = new z; H < Q;) {
                var t = Math.floor(65536 * Math.random());
                K[H++] = 255 & t
            }
            for (V.init(K),
                     H = 0; H < K.length; ++H)
                K[H] = 0;
            H = 0
        }
        return V.next()
    }

    var Z = function () {
        function t() {
        }

        return t.prototype.nextBytes = function (t) {
            for (var e = 0; e < t.length; ++e)
                t[e] = X()
        }
            ,
            t
    }();
    var J = function () {
        function t() {
            this.n = null,
                this.e = 0,
                this.d = null,
                this.p = null,
                this.q = null,
                this.dmp1 = null,
                this.dmq1 = null,
                this.coeff = null
        }

        return t.prototype.doPublic = function (t) {
            return t.modPowInt(this.e, this.n)
        }
            ,
            t.prototype.doPrivate = function (t) {
                if (null == this.p || null == this.q)
                    return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;)
                    e = e.add(this.p);
                return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
            }
            ,
            t.prototype.setPublic = function (t, e) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = R(t, 16),
                    this.e = parseInt(e, 16))
            }
            ,
            t.prototype.encrypt = function (t) {
                var e = function (t, e) {
                    if (e < t.length + 11)
                        return null;
                    var n = []
                        , i = t.length - 1;
                    for (; 0 <= i && 0 < e;) {
                        var r = t.charCodeAt(i--);
                        r < 128 ? n[--e] = r : 127 < r && r < 2048 ? (n[--e] = 63 & r | 128,
                            n[--e] = r >> 6 | 192) : (n[--e] = 63 & r | 128,
                            n[--e] = r >> 6 & 63 | 128,
                            n[--e] = r >> 12 | 224)
                    }
                    n[--e] = 0;
                    var o = new Z
                        , a = [];
                    for (; 2 < e;) {
                        for (a[0] = 0; 0 == a[0];)
                            o.nextBytes(a);
                        n[--e] = a[0]
                    }
                    return n[--e] = 2,
                        n[--e] = 0,
                        new _(n)
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e)
                    return null;
                var n = this.doPublic(e);
                if (null == n)
                    return null;
                var i = n.toString(16);
                return 0 == (1 & i.length) ? i : "0" + i
            }
            ,
            t.prototype.setPrivate = function (t, e, n) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = R(t, 16),
                    this.e = parseInt(e, 16),
                    this.d = R(n, 16))
            }
            ,
            t.prototype.setPrivateEx = function (t, e, n, i, r, o, a, s) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = R(t, 16),
                    this.e = parseInt(e, 16),
                    this.d = R(n, 16),
                    this.p = R(i, 16),
                    this.q = R(r, 16),
                    this.dmp1 = R(o, 16),
                    this.dmq1 = R(a, 16),
                    this.coeff = R(s, 16))
            }
            ,
            t.prototype.generate = function (t, e) {
                var n = new Z
                    , i = t >> 1;
                this.e = parseInt(e, 16);
                for (var r = new _(e, 16); ;) {
                    for (; this.p = new _(t - i, 1, n),
                           0 != this.p.subtract(_.ONE).gcd(r).compareTo(_.ONE) || !this.p.isProbablePrime(10);)
                        ;
                    for (; this.q = new _(i, 1, n),
                           0 != this.q.subtract(_.ONE).gcd(r).compareTo(_.ONE) || !this.q.isProbablePrime(10);)
                        ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var o = this.p;
                        this.p = this.q,
                            this.q = o
                    }
                    var a = this.p.subtract(_.ONE)
                        , s = this.q.subtract(_.ONE)
                        , c = a.multiply(s);
                    if (0 == c.gcd(r).compareTo(_.ONE)) {
                        this.n = this.p.multiply(this.q),
                            this.d = r.modInverse(c),
                            this.dmp1 = this.d.mod(a),
                            this.dmq1 = this.d.mod(s),
                            this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }
            ,
            t.prototype.decrypt = function (t) {
                var e = R(t, 16)
                    , n = this.doPrivate(e);
                return null == n ? null : function (t, e) {
                    var n = t.toByteArray()
                        , i = 0;
                    for (; i < n.length && 0 == n[i];)
                        ++i;
                    if (n.length - i != e - 1 || 2 != n[i])
                        return null;
                    ++i;
                    for (; 0 != n[i];)
                        if (++i >= n.length)
                            return null;
                    var r = "";
                    for (; ++i < n.length;) {
                        var o = 255 & n[i];
                        o < 128 ? r += String.fromCharCode(o) : 191 < o && o < 224 ? (r += String.fromCharCode((31 & o) << 6 | 63 & n[i + 1]),
                            ++i) : (r += String.fromCharCode((15 & o) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]),
                            i += 2)
                    }
                    return r
                }(n, this.n.bitLength() + 7 >> 3)
            }
            ,
            t.prototype.generateAsync = function (t, e, r) {
                var o = new Z
                    , a = t >> 1;
                this.e = parseInt(e, 16);
                var s = new _(e, 16)
                    , c = this
                    , l = function () {
                    var e = function () {
                        if (c.p.compareTo(c.q) <= 0) {
                            var t = c.p;
                            c.p = c.q,
                                c.q = t
                        }
                        var e = c.p.subtract(_.ONE)
                            , n = c.q.subtract(_.ONE)
                            , i = e.multiply(n);
                        0 == i.gcd(s).compareTo(_.ONE) ? (c.n = c.p.multiply(c.q),
                            c.d = s.modInverse(i),
                            c.dmp1 = c.d.mod(e),
                            c.dmq1 = c.d.mod(n),
                            c.coeff = c.q.modInverse(c.p),
                            setTimeout(function () {
                                r()
                            }, 0)) : setTimeout(l, 0)
                    }
                        , n = function () {
                        c.q = O(),
                            c.q.fromNumberAsync(a, 1, o, function () {
                                c.q.subtract(_.ONE).gcda(s, function (t) {
                                    0 == t.compareTo(_.ONE) && c.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(n, 0)
                                })
                            })
                    }
                        , i = function () {
                        c.p = O(),
                            c.p.fromNumberAsync(t - a, 1, o, function () {
                                c.p.subtract(_.ONE).gcda(s, function (t) {
                                    0 == t.compareTo(_.ONE) && c.p.isProbablePrime(10) ? setTimeout(n, 0) : setTimeout(i, 0)
                                })
                            })
                    };
                    setTimeout(i, 0)
                };
                setTimeout(l, 0)
            }
            ,
            t.prototype.sign = function (t, e, n) {
                var i = function (t) {
                    return $[t] || ""
                }(n)
                    , r = i + e(t).toString()
                    , o = function (t, e) {
                    if (e < t.length + 22)
                        return null;
                    for (var n = e - t.length - 6, i = "", r = 0; r < n; r += 2)
                        i += "ff";
                    return R("0001" + i + "00" + t, 16)
                }(r, this.n.bitLength() / 4);
                if (null == o)
                    return null;
                var a = this.doPrivate(o);
                if (null == a)
                    return null;
                var s = a.toString(16);
                return 0 == (1 & s.length) ? s : "0" + s
            }
            ,
            t.prototype.verify = function (t, e, n) {
                var i = R(e, 16)
                    , r = this.doPublic(i);
                if (null == r)
                    return null;
                var o = r.toString(16).replace(/^1f+00/, "")
                    , a = function (t) {
                    for (var e in $)
                        if ($.hasOwnProperty(e)) {
                            var n = $[e]
                                , i = n.length;
                            if (t.substr(0, i) == n)
                                return t.substr(i)
                        }
                    return t
                }(o);
                return a == n(t).toString()
            }
            ,
            t
    }();
    var $ = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    var tt = {};
    tt.lang = {
        extend: function (t, e, n) {
            if (!e || !t)
                throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var i = function () {
            };
            if (i.prototype = e.prototype,
                t.prototype = new i,
                (t.prototype.constructor = t).superclass = e.prototype,
            e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
                n) {
                var r;
                for (r in n)
                    t.prototype[r] = n[r];
                var o = function () {
                }
                    , a = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) && (o = function (t, e) {
                            for (r = 0; r < a.length; r += 1) {
                                var n = a[r]
                                    , i = e[n];
                                "function" == typeof i && i != Object.prototype[n] && (t[n] = i)
                            }
                        }
                    )
                } catch (t) {
                }
                o(t.prototype, n)
            }
        }
    };
    var et = {};
    void 0 !== et.asn1 && et.asn1 || (et.asn1 = {}),
        et.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                    e
            }
                ,
                this.bigIntToMinTwosComplementsHex = function (t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1))
                        e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var n = e.substr(1)
                            , i = n.length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", o = 0; o < i; o++)
                            r += "f";
                        var a = new _(r, 16)
                            , s = a.xor(t).add(_.ONE);
                        e = s.toString(16).replace(/^-/, "")
                    }
                    return e
                }
                ,
                this.getPEMStringFromHex = function (t, e) {
                    return hextopem(t, e)
                }
                ,
                this.newObject = function (t) {
                    var e = et
                        , n = e.asn1
                        , i = n.DERBoolean
                        , r = n.DERInteger
                        , o = n.DERBitString
                        , a = n.DEROctetString
                        , s = n.DERNull
                        , c = n.DERObjectIdentifier
                        , l = n.DEREnumerated
                        , u = n.DERUTF8String
                        , h = n.DERNumericString
                        , f = n.DERPrintableString
                        , p = n.DERTeletexString
                        , d = n.DERIA5String
                        , g = n.DERUTCTime
                        , m = n.DERGeneralizedTime
                        , v = n.DERSequence
                        , y = n.DERSet
                        , b = n.DERTaggedObject
                        , w = n.ASN1Util.newObject
                        , x = Object.keys(t);
                    if (1 != x.length)
                        throw "key of param shall be only one.";
                    var T = x[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + T + ":"))
                        throw "undefined key: " + T;
                    if ("bool" == T)
                        return new i(t[T]);
                    if ("int" == T)
                        return new r(t[T]);
                    if ("bitstr" == T)
                        return new o(t[T]);
                    if ("octstr" == T)
                        return new a(t[T]);
                    if ("null" == T)
                        return new s(t[T]);
                    if ("oid" == T)
                        return new c(t[T]);
                    if ("enum" == T)
                        return new l(t[T]);
                    if ("utf8str" == T)
                        return new u(t[T]);
                    if ("numstr" == T)
                        return new h(t[T]);
                    if ("prnstr" == T)
                        return new f(t[T]);
                    if ("telstr" == T)
                        return new p(t[T]);
                    if ("ia5str" == T)
                        return new d(t[T]);
                    if ("utctime" == T)
                        return new g(t[T]);
                    if ("gentime" == T)
                        return new m(t[T]);
                    if ("seq" == T) {
                        for (var E = t[T], A = [], D = 0; D < E.length; D++) {
                            var S = w(E[D]);
                            A.push(S)
                        }
                        return new v({
                            array: A
                        })
                    }
                    if ("set" == T) {
                        for (var E = t[T], A = [], D = 0; D < E.length; D++) {
                            var S = w(E[D]);
                            A.push(S)
                        }
                        return new y({
                            array: A
                        })
                    }
                    if ("tag" == T) {
                        var I = t[T];
                        if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                            var M = w(I[2]);
                            return new b({
                                tag: I[0],
                                explicit: I[1],
                                obj: M
                            })
                        }
                        var _ = {};
                        if (void 0 !== I.explicit && (_.explicit = I.explicit),
                        void 0 !== I.tag && (_.tag = I.tag),
                        void 0 === I.obj)
                            throw "obj shall be specified for 'tag'.";
                        return _.obj = w(I.obj),
                            new b(_)
                    }
                }
                ,
                this.jsonToASN1HEX = function (t) {
                    var e = this.newObject(t);
                    return e.getEncodedHex()
                }
        }
        ,
        et.asn1.ASN1Util.oidHexToInt = function (t) {
            for (var e = "", n = parseInt(t.substr(0, 2), 16), i = Math.floor(n / 40), r = n % 40, e = i + "." + r, o = "", a = 2; a < t.length; a += 2) {
                var s = parseInt(t.substr(a, 2), 16)
                    , c = ("00000000" + s.toString(2)).slice(-8);
                if (o += c.substr(1, 7),
                "0" == c.substr(0, 1)) {
                    var l = new _(o, 2);
                    e = e + "." + l.toString(10),
                        o = ""
                }
            }
            return e
        }
        ,
        et.asn1.ASN1Util.oidIntToHex = function (t) {
            var c = function (t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                    e
            }
                , e = function (t) {
                var e = ""
                    , n = new _(t, 10)
                    , i = n.toString(2)
                    , r = 7 - i.length % 7;
                7 == r && (r = 0);
                for (var o = "", a = 0; a < r; a++)
                    o += "0";
                i = o + i;
                for (var a = 0; a < i.length - 1; a += 7) {
                    var s = i.substr(a, 7);
                    a != i.length - 7 && (s = "1" + s),
                        e += c(parseInt(s, 2))
                }
                return e
            };
            if (!t.match(/^[0-9.]+$/))
                throw "malformed oid string: " + t;
            var n = ""
                , i = t.split(".")
                , r = 40 * parseInt(i[0]) + parseInt(i[1]);
            n += c(r),
                i.splice(0, 2);
            for (var o = 0; o < i.length; o++)
                n += e(i[o]);
            return n
        }
        ,
        et.asn1.ASN1Object = function () {
            this.getLengthHexFromValue = function () {
                if (void 0 === this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var t = this.hV.length / 2
                    , e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e),
                t < 128)
                    return e;
                var n = e.length / 2;
                if (15 < n)
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                var i = 128 + n;
                return i.toString(16) + e
            }
                ,
                this.getEncodedHex = function () {
                    return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                }
                ,
                this.getValueHex = function () {
                    return this.getEncodedHex(),
                        this.hV
                }
                ,
                this.getFreshValueHex = function () {
                    return ""
                }
        }
        ,
        et.asn1.DERAbstractString = function (t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this),
                this.getString = function () {
                    return this.s
                }
                ,
                this.setString = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                }
                ,
                this.setStringHex = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object),
        et.asn1.DERAbstractTime = function (t) {
            et.asn1.DERAbstractTime.superclass.constructor.call(this),
                this.localDateToUTC = function (t) {
                    utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                    var e = new Date(utc);
                    return e
                }
                ,
                this.formatDate = function (t, e, n) {
                    var i = this.zeroPadding
                        , r = this.localDateToUTC(t)
                        , o = String(r.getFullYear());
                    "utc" == e && (o = o.substr(2, 2));
                    var a = i(String(r.getMonth() + 1), 2)
                        , s = i(String(r.getDate()), 2)
                        , c = i(String(r.getHours()), 2)
                        , l = i(String(r.getMinutes()), 2)
                        , u = i(String(r.getSeconds()), 2)
                        , h = o + a + s + c + l + u;
                    if (!0 === n) {
                        var f = r.getMilliseconds();
                        if (0 != f) {
                            var p = i(String(f), 3);
                            p = p.replace(/[0]+$/, ""),
                                h = h + "." + p
                        }
                    }
                    return h + "Z"
                }
                ,
                this.zeroPadding = function (t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }
                ,
                this.getString = function () {
                    return this.s
                }
                ,
                this.setString = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(t)
                }
                ,
                this.setByDateValue = function (t, e, n, i, r, o) {
                    var a = new Date(Date.UTC(t, e - 1, n, i, r, o, 0));
                    this.setByDate(a)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object),
        et.asn1.DERAbstractStructured = function (t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this),
                this.setByASN1ObjectArray = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = t
                }
                ,
                this.appendASN1Object = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(t)
                }
                ,
                this.asn1Array = new Array,
            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object),
        et.asn1.DERBoolean = function () {
            et.asn1.DERBoolean.superclass.constructor.call(this),
                this.hT = "01",
                this.hTLV = "0101ff"
        }
        ,
        tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object),
        et.asn1.DERInteger = function (t) {
            et.asn1.DERInteger.superclass.constructor.call(this),
                this.hT = "02",
                this.setByBigInteger = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }
                ,
                this.setByInteger = function (t) {
                    var e = new _(String(t), 10);
                    this.setByBigInteger(e)
                }
                ,
                this.setValueHex = function (t) {
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object),
        et.asn1.DERBitString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
                var e = et.asn1.ASN1Util.newObject(t.obj);
                t.hex = "00" + e.getEncodedHex()
            }
            et.asn1.DERBitString.superclass.constructor.call(this),
                this.hT = "03",
                this.setHexValueIncludingUnusedBits = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = t
                }
                ,
                this.setUnusedBitsAndHexValue = function (t, e) {
                    if (t < 0 || 7 < t)
                        throw "unused bits shall be from 0 to 7: u = " + t;
                    var n = "0" + t;
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = n + e
                }
                ,
                this.setByBinaryString = function (t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var n = 0; n <= e; n++)
                        t += "0";
                    for (var i = "", n = 0; n < t.length - 1; n += 8) {
                        var r = t.substr(n, 8)
                            , o = parseInt(r, 2).toString(16);
                        1 == o.length && (o = "0" + o),
                            i += o
                    }
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + e + i
                }
                ,
                this.setByBooleanArray = function (t) {
                    for (var e = "", n = 0; n < t.length; n++)
                        1 == t[n] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }
                ,
                this.newFalseArray = function (t) {
                    for (var e = new Array(t), n = 0; n < t; n++)
                        e[n] = !1;
                    return e
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
        }
        ,
        tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object),
        et.asn1.DEROctetString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
                var e = et.asn1.ASN1Util.newObject(t.obj);
                t.hex = e.getEncodedHex()
            }
            et.asn1.DEROctetString.superclass.constructor.call(this, t),
                this.hT = "04"
        }
        ,
        tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString),
        et.asn1.DERNull = function () {
            et.asn1.DERNull.superclass.constructor.call(this),
                this.hT = "05",
                this.hTLV = "0500"
        }
        ,
        tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object),
        et.asn1.DERObjectIdentifier = function (t) {
            var c = function (t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                    e
            }
                , o = function (t) {
                var e = ""
                    , n = new _(t, 10)
                    , i = n.toString(2)
                    , r = 7 - i.length % 7;
                7 == r && (r = 0);
                for (var o = "", a = 0; a < r; a++)
                    o += "0";
                i = o + i;
                for (var a = 0; a < i.length - 1; a += 7) {
                    var s = i.substr(a, 7);
                    a != i.length - 7 && (s = "1" + s),
                        e += c(parseInt(s, 2))
                }
                return e
            };
            et.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                this.hT = "06",
                this.setValueHex = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                }
                ,
                this.setValueOidString = function (t) {
                    if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                    var e = ""
                        , n = t.split(".")
                        , i = 40 * parseInt(n[0]) + parseInt(n[1]);
                    e += c(i),
                        n.splice(0, 2);
                    for (var r = 0; r < n.length; r++)
                        e += o(n[r]);
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = e
                }
                ,
                this.setValueName = function (t) {
                    var e = et.asn1.x509.OID.name2oid(t);
                    if ("" === e)
                        throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
        }
        ,
        tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object),
        et.asn1.DEREnumerated = function (t) {
            et.asn1.DEREnumerated.superclass.constructor.call(this),
                this.hT = "0a",
                this.setByBigInteger = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }
                ,
                this.setByInteger = function (t) {
                    var e = new _(String(t), 10);
                    this.setByBigInteger(e)
                }
                ,
                this.setValueHex = function (t) {
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object),
        et.asn1.DERUTF8String = function (t) {
            et.asn1.DERUTF8String.superclass.constructor.call(this, t),
                this.hT = "0c"
        }
        ,
        tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString),
        et.asn1.DERNumericString = function (t) {
            et.asn1.DERNumericString.superclass.constructor.call(this, t),
                this.hT = "12"
        }
        ,
        tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString),
        et.asn1.DERPrintableString = function (t) {
            et.asn1.DERPrintableString.superclass.constructor.call(this, t),
                this.hT = "13"
        }
        ,
        tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString),
        et.asn1.DERTeletexString = function (t) {
            et.asn1.DERTeletexString.superclass.constructor.call(this, t),
                this.hT = "14"
        }
        ,
        tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString),
        et.asn1.DERIA5String = function (t) {
            et.asn1.DERIA5String.superclass.constructor.call(this, t),
                this.hT = "16"
        }
        ,
        tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString),
        et.asn1.DERUTCTime = function (t) {
            et.asn1.DERUTCTime.superclass.constructor.call(this, t),
                this.hT = "17",
                this.setByDate = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)
                }
                ,
                this.getFreshValueHex = function () {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)),
                        this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }
        ,
        tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime),
        et.asn1.DERGeneralizedTime = function (t) {
            et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                this.hT = "18",
                this.withMillis = !1,
                this.setByDate = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)
                }
                ,
                this.getFreshValueHex = function () {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)),
                        this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date),
            !0 === t.millis && (this.withMillis = !0))
        }
        ,
        tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime),
        et.asn1.DERSequence = function (t) {
            et.asn1.DERSequence.superclass.constructor.call(this, t),
                this.hT = "30",
                this.getFreshValueHex = function () {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t += n.getEncodedHex()
                    }
                    return this.hV = t,
                        this.hV
                }
        }
        ,
        tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured),
        et.asn1.DERSet = function (t) {
            et.asn1.DERSet.superclass.constructor.call(this, t),
                this.hT = "31",
                this.sortFlag = !0,
                this.getFreshValueHex = function () {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t.push(n.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(),
                        this.hV = t.join(""),
                        this.hV
                }
                ,
            void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
        }
        ,
        tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured),
        et.asn1.DERTaggedObject = function (t) {
            et.asn1.DERTaggedObject.superclass.constructor.call(this),
                this.hT = "a0",
                this.hV = "",
                this.isExplicit = !0,
                this.asn1Object = null,
                this.setASN1Object = function (t, e, n) {
                    this.hT = e,
                        this.isExplicit = t,
                        this.asn1Object = n,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                            this.hTLV = null,
                            this.isModified = !0) : (this.hV = null,
                            this.hTLV = n.getEncodedHex(),
                            this.hTLV = this.hTLV.replace(/^../, e),
                            this.isModified = !1)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag),
            void 0 !== t.explicit && (this.isExplicit = t.explicit),
            void 0 !== t.obj && (this.asn1Object = t.obj,
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object);
    var nt = function (n) {
        function i(t) {
            var e = n.call(this) || this;
            return t && ("string" == typeof t ? e.parseKey(t) : (i.hasPrivateKeyProperty(t) || i.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)),
                e
        }

        return function (t, e) {
            function n() {
                this.constructor = t
            }

            p(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                    new n)
        }(i, n),
            i.prototype.parseKey = function (t) {
                try {
                    var e = 0
                        , n = 0
                        , i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g.decode(t) : m.unarmor(t)
                        , r = D.decode(i);
                    if (3 === r.sub.length && (r = r.sub[2].sub[0]),
                    9 === r.sub.length) {
                        e = r.sub[1].getHexStringValue(),
                            this.n = R(e, 16),
                            n = r.sub[2].getHexStringValue(),
                            this.e = parseInt(n, 16);
                        var o = r.sub[3].getHexStringValue();
                        this.d = R(o, 16);
                        var a = r.sub[4].getHexStringValue();
                        this.p = R(a, 16);
                        var s = r.sub[5].getHexStringValue();
                        this.q = R(s, 16);
                        var c = r.sub[6].getHexStringValue();
                        this.dmp1 = R(c, 16);
                        var l = r.sub[7].getHexStringValue();
                        this.dmq1 = R(l, 16);
                        var u = r.sub[8].getHexStringValue();
                        this.coeff = R(u, 16)
                    } else {
                        if (2 !== r.sub.length)
                            return !1;
                        var h = r.sub[1]
                            , f = h.sub[0];
                        e = f.sub[0].getHexStringValue(),
                            this.n = R(e, 16),
                            n = f.sub[1].getHexStringValue(),
                            this.e = parseInt(n, 16)
                    }
                    return !0
                } catch (t) {
                    return !1
                }
            }
            ,
            i.prototype.getPrivateBaseKey = function () {
                var t = {
                    array: [new et.asn1.DERInteger({
                        int: 0
                    }), new et.asn1.DERInteger({
                        bigint: this.n
                    }), new et.asn1.DERInteger({
                        int: this.e
                    }), new et.asn1.DERInteger({
                        bigint: this.d
                    }), new et.asn1.DERInteger({
                        bigint: this.p
                    }), new et.asn1.DERInteger({
                        bigint: this.q
                    }), new et.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new et.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new et.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                }
                    , e = new et.asn1.DERSequence(t);
                return e.getEncodedHex()
            }
            ,
            i.prototype.getPrivateBaseKeyB64 = function () {
                return u(this.getPrivateBaseKey())
            }
            ,
            i.prototype.getPublicBaseKey = function () {
                var t = new et.asn1.DERSequence({
                    array: [new et.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new et.asn1.DERNull]
                })
                    , e = new et.asn1.DERSequence({
                    array: [new et.asn1.DERInteger({
                        bigint: this.n
                    }), new et.asn1.DERInteger({
                        int: this.e
                    })]
                })
                    , n = new et.asn1.DERBitString({
                    hex: "00" + e.getEncodedHex()
                })
                    , i = new et.asn1.DERSequence({
                    array: [t, n]
                });
                return i.getEncodedHex()
            }
            ,
            i.prototype.getPublicBaseKeyB64 = function () {
                return u(this.getPublicBaseKey())
            }
            ,
            i.wordwrap = function (t, e) {
                if (e = e || 64,
                    !t)
                    return t;
                var n = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(n, "g")).join("\n")
            }
            ,
            i.prototype.getPrivateKey = function () {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += i.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                    t += "-----END RSA PRIVATE KEY-----"
            }
            ,
            i.prototype.getPublicKey = function () {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += i.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                    t += "-----END PUBLIC KEY-----"
            }
            ,
            i.hasPublicKeyProperty = function (t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }
            ,
            i.hasPrivateKeyProperty = function (t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }
            ,
            i.prototype.parsePropertiesFrom = function (t) {
                this.n = t.n,
                    this.e = t.e,
                t.hasOwnProperty("d") && (this.d = t.d,
                    this.p = t.p,
                    this.q = t.q,
                    this.dmp1 = t.dmp1,
                    this.dmq1 = t.dmq1,
                    this.coeff = t.coeff)
            }
            ,
            i
    }(J)
        , it = function () {
        function t(t) {
            t = t || {},
                this.default_key_size = parseInt(t.default_key_size, 10) || 1024,
                this.default_public_exponent = t.default_public_exponent || "010001",
                this.log = t.log || !1,
                this.key = null
        }

        return t.prototype.setKey = function (t) {
            this.log && this.key,
                this.key = new nt(t)
        }
            ,
            t.prototype.setPrivateKey = function (t) {
                this.setKey(t)
            }
            ,
            t.prototype.setPublicKey = function (t) {
                this.setKey(t)
            }
            ,
            t.prototype.decrypt = function (t) {
                try {
                    return this.getKey().decrypt(h(t))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.encrypt = function (t) {
                try {
                    return u(this.getKey().encrypt(t))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.sign = function (t, e, n) {
                try {
                    return u(this.getKey().sign(t, e, n))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.verify = function (t, e, n) {
                try {
                    return this.getKey().verify(t, h(e), n)
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.getKey = function (t) {
                if (!this.key) {
                    if (this.key = new nt,
                    t && "[object Function]" === {}.toString.call(t))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }
            ,
            t.prototype.getPrivateKey = function () {
                return this.getKey().getPrivateKey()
            }
            ,
            t.prototype.getPrivateKeyB64 = function () {
                return this.getKey().getPrivateBaseKeyB64()
            }
            ,
            t.prototype.getPublicKey = function () {
                return this.getKey().getPublicKey()
            }
            ,
            t.prototype.getPublicKeyB64 = function () {
                return this.getKey().getPublicBaseKeyB64()
            }
            ,
            t.version = "3.0.0-rc.1",
            t
    }();
    window.JSEncrypt = it,
    window.jiami=new window.JSEncrypt
}()
function get_password(pwd){
    password=window.jiami.encrypt(pwd)
    console.log(password)

}

get_password('1234565')