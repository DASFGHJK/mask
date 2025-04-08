o["rp"] = function (e) {
    var $_CEEJZ = zEvlF.$_CF
        , $_CEEIk = ['$_CEFCQ'].concat($_CEEJZ)
        , $_CEFAM = $_CEEIk[1];
    $_CEEIk.shift();
    var $_CEFBq = $_CEEIk[0];

    function a(e, t) {
        var $_CHIIU = zEvlF.$_DD()[0][12];
        for (; $_CHIIU !== zEvlF.$_DD()[6][11];) {
            switch ($_CHIIU) {
                case zEvlF.$_DD()[8][12]:
                    return e << t | e >>> 32 - t;
                    break;
            }
        }
    }

    function c(e, t) {
        var $_CHIJJ = zEvlF.$_DD()[6][12];
        for (; $_CHIJJ !== zEvlF.$_DD()[0][10];) {
            switch ($_CHIJJ) {
                case zEvlF.$_DD()[2][12]:
                    var n, r, i, s, o;
                    $_CHIJJ = zEvlF.$_DD()[2][11];
                    break;
                case zEvlF.$_DD()[0][11]:
                    return i = 2147483648 & e,
                        s = 2147483648 & t,
                        o = (1073741823 & e) + (1073741823 & t),
                        (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ o ^ i ^ s : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s : 1073741824 ^ o ^ i ^ s : o ^ i ^ s;
                    break;
            }
        }
    }

    function t(e, t, n, r, i, s, o) {
        var $_CHJAw = zEvlF.$_DD()[0][12];
        for (; $_CHJAw !== zEvlF.$_DD()[8][11];) {
            switch ($_CHJAw) {
                case zEvlF.$_DD()[2][12]:
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        var $_CEFEm = zEvlF.$_CF
                            , $_CEFDj = ['$_CEFHX'].concat($_CEFEm)
                            , $_CEFFH = $_CEFDj[1];
                        $_CEFDj.shift();
                        var $_CEFGC = $_CEFDj[0];
                        return e & t | ~e & n;
                    }(t, n, r), i), o)), s), t);
                    break;
            }
        }
    }

    function n(e, t, n, r, i, s, o) {
        var $_CHJBn = zEvlF.$_DD()[2][12];
        for (; $_CHJBn !== zEvlF.$_DD()[0][11];) {
            switch ($_CHJBn) {
                case zEvlF.$_DD()[4][12]:
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        var $_CEFJz = zEvlF.$_CF
                            , $_CEFIV = ['$_CEGCm'].concat($_CEFJz)
                            , $_CEGAp = $_CEFIV[1];
                        $_CEFIV.shift();
                        var $_CEGBZ = $_CEFIV[0];
                        return e & n | t & ~n;
                    }(t, n, r), i), o)), s), t);
                    break;
            }
        }
    }

    function r(e, t, n, r, i, s, o) {
        var $_CHJCO = zEvlF.$_DD()[6][12];
        for (; $_CHJCO !== zEvlF.$_DD()[10][11];) {
            switch ($_CHJCO) {
                case zEvlF.$_DD()[6][12]:
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        var $_CEGES = zEvlF.$_CF
                            , $_CEGDI = ['$_CEGHq'].concat($_CEGES)
                            , $_CEGFQ = $_CEGDI[1];
                        $_CEGDI.shift();
                        var $_CEGGH = $_CEGDI[0];
                        return e ^ t ^ n;
                    }(t, n, r), i), o)), s), t);
                    break;
            }
        }
    }

    function i(e, t, n, r, i, s, o) {
        var $_CHJDb = zEvlF.$_DD()[0][12];
        for (; $_CHJDb !== zEvlF.$_DD()[0][11];) {
            switch ($_CHJDb) {
                case zEvlF.$_DD()[4][12]:
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        var $_CEGJP = zEvlF.$_CF
                            , $_CEGIp = ['$_CEHCP'].concat($_CEGJP)
                            , $_CEHAM = $_CEGIp[1];
                        $_CEGIp.shift();
                        var $_CEHBD = $_CEGIp[0];
                        return t ^ (e | ~n);
                    }(t, n, r), i), o)), s), t);
                    break;
            }
        }
    }

    function s(e) {
        var $_CHJEp = zEvlF.$_DD()[6][12];
        for (; $_CHJEp !== zEvlF.$_DD()[4][9];) {
            switch ($_CHJEp) {
                case zEvlF.$_DD()[2][12]:
                    var t, n = $_CEEJZ(71), r = $_CEEJZ(71);
                    $_CHJEp = zEvlF.$_DD()[0][11];
                    break;
                case zEvlF.$_DD()[6][11]:
                    for (t = 0; t <= 3; t++)
                        n += (r = $_CEFAM(73) + (e >>> 8 * t & 255)[$_CEEJZ(378)](16))[$_CEFAM(991)](r[$_CEFAM(108)] - 2, 2);
                    $_CHJEp = zEvlF.$_DD()[6][10];
                    break;
                case zEvlF.$_DD()[2][10]:
                    return n;
                    break;
            }
        }
    }

    var o, _, l, u, h, p, d, g, f, v;
    for (o = function m(e) {
        var $_CEHEq = zEvlF.$_CF
            , $_CEHDh = ['$_CEHHV'].concat($_CEHEq)
            , $_CEHFx = $_CEHDh[1];
        $_CEHDh.shift();
        var $_CEHGI = $_CEHDh[0];
        var t, n = e[$_CEHFx(108)], r = n + 8, i = 16 * (1 + (r - r % 64) / 64), s = Array(i - 1), o = 0, _ = 0;
        while (_ < n)
            o = _ % 4 * 8,
                s[t = (_ - _ % 4) / 4] = s[t] | e[$_CEHFx(136)](_) << o,
                _++;
        return o = _ % 4 * 8,
            s[t = (_ - _ % 4) / 4] = s[t] | 128 << o,
            s[i - 2] = n << 3,
            s[i - 1] = n >>> 29,
            s;
    }(e = function w(e) {
        var $_CEHJt = zEvlF.$_CF
            , $_CEHIZ = ['$_CEICg'].concat($_CEHJt)
            , $_CEIAf = $_CEHIZ[1];
        $_CEHIZ.shift();
        var $_CEIBv = $_CEHIZ[0];
        e = e[$_CEIAf(14)](/\r\n/g, $_CEIAf(525));
        for (var t = $_CEIAf(71), n = 0; n < e[$_CEHJt(108)]; n++) {
            var r = e[$_CEHJt(136)](n);
            r < 128 ? t += String[$_CEIAf(111)](r) : (127 < r && r < 2048 ? t += String[$_CEHJt(111)](r >> 6 | 192) : (t += String[$_CEIAf(111)](r >> 12 | 224),
                t += String[$_CEHJt(111)](r >> 6 & 63 | 128)),
                t += String[$_CEHJt(111)](63 & r | 128));
        }
        return t;
    }(e)),
             d = 1732584193,
             g = 4023233417,
             f = 2562383102,
             v = 271733878,
             _ = 0; _ < o[$_CEEJZ(108)]; _ += 16)
        g = i(g = i(g = i(g = i(g = r(g = r(g = r(g = r(g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(u = g, f = t(h = f, v = t(p = v, d = t(l = d, g, f, v, o[_ + 0], 7, 3614090360), g, f, o[_ + 1], 12, 3905402710), d, g, o[_ + 2], 17, 606105819), v, d, o[_ + 3], 22, 3250441966), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 4], 7, 4118548399), g, f, o[_ + 5], 12, 1200080426), d, g, o[_ + 6], 17, 2821735955), v, d, o[_ + 7], 22, 4249261313), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 8], 7, 1770035416), g, f, o[_ + 9], 12, 2336552879), d, g, o[_ + 10], 17, 4294925233), v, d, o[_ + 11], 22, 2304563134), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 12], 7, 1804603682), g, f, o[_ + 13], 12, 4254626195), d, g, o[_ + 14], 17, 2792965006), v, d, o[_ + 15], 22, 1236535329), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 1], 5, 4129170786), g, f, o[_ + 6], 9, 3225465664), d, g, o[_ + 11], 14, 643717713), v, d, o[_ + 0], 20, 3921069994), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 5], 5, 3593408605), g, f, o[_ + 10], 9, 38016083), d, g, o[_ + 15], 14, 3634488961), v, d, o[_ + 4], 20, 3889429448), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 9], 5, 568446438), g, f, o[_ + 14], 9, 3275163606), d, g, o[_ + 3], 14, 4107603335), v, d, o[_ + 8], 20, 1163531501), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 13], 5, 2850285829), g, f, o[_ + 2], 9, 4243563512), d, g, o[_ + 7], 14, 1735328473), v, d, o[_ + 12], 20, 2368359562), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 5], 4, 4294588738), g, f, o[_ + 8], 11, 2272392833), d, g, o[_ + 11], 16, 1839030562), v, d, o[_ + 14], 23, 4259657740), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 1], 4, 2763975236), g, f, o[_ + 4], 11, 1272893353), d, g, o[_ + 7], 16, 4139469664), v, d, o[_ + 10], 23, 3200236656), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 13], 4, 681279174), g, f, o[_ + 0], 11, 3936430074), d, g, o[_ + 3], 16, 3572445317), v, d, o[_ + 6], 23, 76029189), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 9], 4, 3654602809), g, f, o[_ + 12], 11, 3873151461), d, g, o[_ + 15], 16, 530742520), v, d, o[_ + 2], 23, 3299628645), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 0], 6, 4096336452), g, f, o[_ + 7], 10, 1126891415), d, g, o[_ + 14], 15, 2878612391), v, d, o[_ + 5], 21, 4237533241), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 12], 6, 1700485571), g, f, o[_ + 3], 10, 2399980690), d, g, o[_ + 10], 15, 4293915773), v, d, o[_ + 1], 21, 2240044497), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 8], 6, 1873313359), g, f, o[_ + 15], 10, 4264355552), d, g, o[_ + 6], 15, 2734768916), v, d, o[_ + 13], 21, 1309151649), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 4], 6, 4149444226), g, f, o[_ + 11], 10, 3174756917), d, g, o[_ + 2], 15, 718787259), v, d, o[_ + 9], 21, 3951481745),
            d = c(d, l),
            g = c(g, u),
            f = c(f, h),
            v = c(v, p);
    return (s(d) + s(g) + s(f) + s(v))[$_CEFAM(164)]();
}(gt + challenge + passtime);
