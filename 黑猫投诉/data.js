!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "//n.sinaimg.cn/finance/blackcat/pc/",
    r(r.s = 392)
}([function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
    : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype,
            e.prototype = new r,
            e.prototype.constructor = e
        }
    }
}
, function(e, t, r) {
    var n = r(14)
      , i = n.Buffer;
    function a(e, t) {
        for (var r in e)
            t[r] = e[r]
    }
    function o(e, t, r) {
        return i(e, t, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (a(n, t),
    t.Buffer = o),
    a(i, o),
    o.from = function(e, t, r) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return i(e, t, r)
    }
    ,
    o.alloc = function(e, t, r) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var n = i(e);
        return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
        n
    }
    ,
    o.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return i(e)
    }
    ,
    o.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e)
    }
}
, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}
, function(e, t) {
    var r = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = r)
}
, function(e, t, r) {
    e.exports = !r(7)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, r) {
    var n = r(2)
      , i = r(3)
      , a = r(19)
      , o = r(13)
      , s = r(15)
      , f = function(e, t, r) {
        var c, d, h, u = e & f.F, l = e & f.G, p = e & f.S, b = e & f.P, m = e & f.B, y = e & f.W, v = l ? i : i[t] || (i[t] = {}), g = v.prototype, _ = l ? n : p ? n[t] : (n[t] || {}).prototype;
        for (c in l && (r = t),
        r)
            (d = !u && _ && void 0 !== _[c]) && s(v, c) || (h = d ? _[c] : r[c],
            v[c] = l && "function" != typeof _[c] ? r[c] : m && d ? a(h, n) : y && _[c] == h ? function(e) {
                var t = function(t, r, n) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,r)
                        }
                        return new e(t,r,n)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            }(h) : b && "function" == typeof h ? a(Function.call, h) : h,
            b && ((v.virtual || (v.virtual = {}))[c] = h,
            e & f.R && g && !g[c] && o(g, c, h)))
    };
    f.F = 1,
    f.G = 2,
    f.S = 4,
    f.P = 8,
    f.B = 16,
    f.W = 32,
    f.U = 64,
    f.R = 128,
    e.exports = f
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, r) {
    "use strict";
    var n = "//" + location.host + "/api/";
    location.host;
    e.exports = {
        LAWS_FEED: n + "laws/feed",
        INDEX_FEED: n + "index/feed",
        index_article: n + "articles/notice",
        PRAISE: n + "votes/add",
        MY_COMPLAINTS: n + "user/complaints",
        RECEIVED_COMPLAINTS: n + "user/received_complaints",
        COMPLETE_COMPLAINT: n + "complaint/completed/",
        SHARE_AMOUNT_COMPLAINT: n + "complaint/share_amount/",
        SHARE_AMOUNT_LAWS: n + "laws/share_amount/",
        NEW_SEND_MSG: n + "sms/send",
        CHANGE_SEND_MSG: n + "user/cert_send",
        CHANGE_SEND_CODE: n + "user/verify_phone",
        BINGDING_PHONE: n + "user/update_phone",
        MY_COMPLAINT_HISTORY: n + "company/my_search",
        MY_COMPLAINT_HOT: n + "company/hot",
        MY_COMPLAINT_COMPANY: n + "company/search",
        COMPLAINT_STORE: n + "complaint/store",
        COMPLAINT_STORE_UPDATE: n + "complaint/update",
        COMPLAINT_STORE_REPLY: n + "complaint/store_reply",
        COMPLAINT_STAR: n + "complaint/completed_evaluate",
        tousu_check: n + "complaint/check_input",
        tousu_verify: n + "complaint/check_alertword",
        tousu_special_company: n + "company/special_company?",
        evaluate_star: n + "complaint/evaluate_after_auto_cocomplete",
        UPLOAD_IMAGES: n + "files/image_uploader?add_water=1",
        SEARCH_SUGGEST: n + "index/suggest",
        SEARCH_RESULT: n + "index/s",
        MESSAGE_LIST: n + "user/message_list",
        GET_VIDEOID: n + "video/create_video_and_notify",
        GET_AUTH_URL: n + "video/get_authed_s3_url",
        REPORT_FEED: n + "articles/feed",
        SELLER_FEED: n + "company/received_complaints",
        service_feed: n + "company/service_complaints",
        SELLER_LIST: n + "company/main_search",
        JURY_FEED: n + "jury/feed",
        JURY_LIST: n + "jury/list_complaints",
        JURY_REPLY: n + "jury/store_reply",
        JURY_INVITE: n + "jury/invite",
        HANDLE_INVITE: n + "jury/handle_invite",
        jury_zan: n + "jury/vote",
        jury_hot: n + "jury/hot",
        jury_hot_comp: n + "jury/hotcomps",
        jury_rank: n + "jury/rank",
        invite_list: n + "jury/jury_list",
        company_search: n + "user/search_recv_complaints?k=",
        complaint_types: n + "company/issues",
        company_billboard: n + "top_rank/rank",
        company_field: n + "top_rank/rank_fields",
        file_hide: n + "complaint/set_atch_hide",
        company_datas: n + "company/get_stast",
        name_hide: n + "complaint/set_anon",
        email_vc: n + "company/email_vc",
        add_email: n + "company/add_email",
        del_email: n + "company/del_email",
        email_list: n + "company/emails",
        group_list: n + "grp_comp/feed",
        group_tslist: n + "grp_comp/feed_by_co",
        group_suggest: n + "grp_comp/suggs",
        group_progress: n + "grp_comp/progs",
        group_comps: n + "grp_comp/comps",
        user_glist: n + "grp_comp/init_grpcomps",
        company_glist: n + "grp_comp/recv_grpcomps",
        group_reply: n + "grp_comp/store_reply",
        group_join: n + "grp_comp/join_info",
        group_store_sugg: n + "grp_comp/store_sugg",
        group_share_img: n + "grp_comp/shr_img",
        group_share: n + "grp_comp/incr_shr_amt/",
        group_file_hide: n + "grp_comp/set_atch_hide",
        group_can_join: n + "grp_comp/can_join",
        heimao315: n + "leadership/get_items",
        dataCompany: n + "company/quick_stat_list",
        dataStat: n + "company/quick_stat",
        join_company: n + "company/apply_settle",
        message_read: n + "user/message_read",
        message_read_all: n + "user/message_read_all",
        top_card_time: n + "top_rank/grprank_span",
        new_rank_card: n + "top_rank/grprank_card",
        filed_rank_card: n + "top_rank/grprank_field_card",
        top_card_list: n + "top_rank/grprank_list",
        week_rank_list: n + "top_rank/riserank_list",
        user_is_law: "".concat(n, "complaint/sync_lawfirm?"),
        all_comp_field: "".concat(n, "complaint/qxzx_fields?"),
        comp_is_field: "".concat(n, "company/field?"),
        comp_is_tip: "".concat(n, "company/get_popup"),
        comp_set_tip: "".concat(n, "company/set_popup"),
        comp_is_notice: "".concat(n, "user/check_agree?"),
        comp_set_notice: "".concat(n, "user/sign_agree?"),
        comp_car_data: "".concat(n, "company/auto_products?"),
        comp_digi_data: "".concat(n, "company/digi_products?"),
        comp_ecom_data: "".concat(n, "company/eshop_issues?"),
        comp_autocomplete: "".concat(n, "complaint/set_autocomplete?"),
        group_digi: "".concat(n, "grp_comp/feed_by_co_type?"),
        ecomp_uids: "".concat(n, "company/eshop_companies?"),
        ecomp_services: "".concat(n, "company/eshop_services?"),
        company_service: "".concat(n, "company/rel_service"),
        company_info: "".concat(n, "company/info"),
        comp_sel_info: "".concat(n, "company/sel_info?"),
        tousu_exit: "".concat(n, "feedback/comp_term?")
    }
}
, function(e, t, r) {
    (function(e) {
        !function(e, t) {
            "use strict";
            function n(e, t) {
                if (!e)
                    throw new Error(t || "Assertion failed")
            }
            function i(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
            function a(e, t, r) {
                if (a.isBN(e))
                    return e;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== e && ("le" !== t && "be" !== t || (r = t,
                t = 10),
                this._init(e || 0, t || 10, r || "be"))
            }
            var o;
            "object" == typeof e ? e.exports = a : t.BN = a,
            a.BN = a,
            a.wordSize = 26;
            try {
                o = r(213).Buffer
            } catch (e) {}
            function s(e, t, r) {
                for (var n = 0, i = Math.min(e.length, r), a = t; a < i; a++) {
                    var o = e.charCodeAt(a) - 48;
                    n <<= 4,
                    n |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o
                }
                return n
            }
            function f(e, t, r, n) {
                for (var i = 0, a = Math.min(e.length, r), o = t; o < a; o++) {
                    var s = e.charCodeAt(o) - 48;
                    i *= n,
                    i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return i
            }
            a.isBN = function(e) {
                return e instanceof a || null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words)
            }
            ,
            a.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }
            ,
            a.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }
            ,
            a.prototype._init = function(e, t, r) {
                if ("number" == typeof e)
                    return this._initNumber(e, t, r);
                if ("object" == typeof e)
                    return this._initArray(e, t, r);
                "hex" === t && (t = 16),
                n(t === (0 | t) && t >= 2 && t <= 36);
                var i = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++,
                16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i),
                "-" === e[0] && (this.negative = 1),
                this.strip(),
                "le" === r && this._initArray(this.toArray(), t, r)
            }
            ,
            a.prototype._initNumber = function(e, t, r) {
                e < 0 && (this.negative = 1,
                e = -e),
                e < 67108864 ? (this.words = [67108863 & e],
                this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                this.length = 2) : (n(e < 9007199254740992),
                this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === r && this._initArray(this.toArray(), t, r)
            }
            ,
            a.prototype._initArray = function(e, t, r) {
                if (n("number" == typeof e.length),
                e.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(e.length / 3),
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var a, o, s = 0;
                if ("be" === r)
                    for (i = e.length - 1,
                    a = 0; i >= 0; i -= 3)
                        o = e[i] | e[i - 1] << 8 | e[i - 2] << 16,
                        this.words[a] |= o << s & 67108863,
                        this.words[a + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        a++);
                else if ("le" === r)
                    for (i = 0,
                    a = 0; i < e.length; i += 3)
                        o = e[i] | e[i + 1] << 8 | e[i + 2] << 16,
                        this.words[a] |= o << s & 67108863,
                        this.words[a + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        a++);
                return this.strip()
            }
            ,
            a.prototype._parseHex = function(e, t) {
                this.length = Math.ceil((e.length - t) / 6),
                this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++)
                    this.words[r] = 0;
                var n, i, a = 0;
                for (r = e.length - 6,
                n = 0; r >= t; r -= 6)
                    i = s(e, r, r + 6),
                    this.words[n] |= i << a & 67108863,
                    this.words[n + 1] |= i >>> 26 - a & 4194303,
                    (a += 24) >= 26 && (a -= 26,
                    n++);
                r + 6 !== t && (i = s(e, t, r + 6),
                this.words[n] |= i << a & 67108863,
                this.words[n + 1] |= i >>> 26 - a & 4194303),
                this.strip()
            }
            ,
            a.prototype._parseBase = function(e, t, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, i = 1; i <= 67108863; i *= t)
                    n++;
                n--,
                i = i / t | 0;
                for (var a = e.length - r, o = a % n, s = Math.min(a, a - o) + r, c = 0, d = r; d < s; d += n)
                    c = f(e, d, d + n, t),
                    this.imuln(i),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                if (0 !== o) {
                    var h = 1;
                    for (c = f(e, d, e.length, t),
                    d = 0; d < o; d++)
                        h *= t;
                    this.imuln(h),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                }
            }
            ,
            a.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                    e.words[t] = this.words[t];
                e.length = this.length,
                e.negative = this.negative,
                e.red = this.red
            }
            ,
            a.prototype.clone = function() {
                var e = new a(null);
                return this.copy(e),
                e
            }
            ,
            a.prototype._expand = function(e) {
                for (; this.length < e; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            a.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            a.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            a.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            ;
            var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function u(e, t, r) {
                r.negative = t.negative ^ e.negative;
                var n = e.length + t.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var i = 0 | e.words[0]
                  , a = 0 | t.words[0]
                  , o = i * a
                  , s = 67108863 & o
                  , f = o / 67108864 | 0;
                r.words[0] = s;
                for (var c = 1; c < n; c++) {
                    for (var d = f >>> 26, h = 67108863 & f, u = Math.min(c, t.length - 1), l = Math.max(0, c - e.length + 1); l <= u; l++) {
                        var p = c - l | 0;
                        d += (o = (i = 0 | e.words[p]) * (a = 0 | t.words[l]) + h) / 67108864 | 0,
                        h = 67108863 & o
                    }
                    r.words[c] = 0 | h,
                    f = 0 | d
                }
                return 0 !== f ? r.words[c] = 0 | f : r.length--,
                r.strip()
            }
            a.prototype.toString = function(e, t) {
                var r;
                if (t = 0 | t || 1,
                16 === (e = e || 10) || "hex" === e) {
                    r = "";
                    for (var i = 0, a = 0, o = 0; o < this.length; o++) {
                        var s = this.words[o]
                          , f = (16777215 & (s << i | a)).toString(16);
                        r = 0 !== (a = s >>> 24 - i & 16777215) || o !== this.length - 1 ? c[6 - f.length] + f + r : f + r,
                        (i += 2) >= 26 && (i -= 26,
                        o--)
                    }
                    for (0 !== a && (r = a.toString(16) + r); r.length % t != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var u = d[e]
                      , l = h[e];
                    r = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                        var b = p.modn(l).toString(e);
                        r = (p = p.idivn(l)).isZero() ? b + r : c[u - b.length] + b + r
                    }
                    for (this.isZero() && (r = "0" + r); r.length % t != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                n(!1, "Base should be between 2 and 36")
            }
            ,
            a.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
            }
            ,
            a.prototype.toJSON = function() {
                return this.toString(16)
            }
            ,
            a.prototype.toBuffer = function(e, t) {
                return n(void 0 !== o),
                this.toArrayLike(o, e, t)
            }
            ,
            a.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }
            ,
            a.prototype.toArrayLike = function(e, t, r) {
                var i = this.byteLength()
                  , a = r || Math.max(1, i);
                n(i <= a, "byte array longer than desired length"),
                n(a > 0, "Requested array length <= 0"),
                this.strip();
                var o, s, f = "le" === t, c = new e(a), d = this.clone();
                if (f) {
                    for (s = 0; !d.isZero(); s++)
                        o = d.andln(255),
                        d.iushrn(8),
                        c[s] = o;
                    for (; s < a; s++)
                        c[s] = 0
                } else {
                    for (s = 0; s < a - i; s++)
                        c[s] = 0;
                    for (s = 0; !d.isZero(); s++)
                        o = d.andln(255),
                        d.iushrn(8),
                        c[a - s - 1] = o
                }
                return c
            }
            ,
            Math.clz32 ? a.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            }
            : a.prototype._countBits = function(e) {
                var t = e
                  , r = 0;
                return t >= 4096 && (r += 13,
                t >>>= 13),
                t >= 64 && (r += 7,
                t >>>= 7),
                t >= 8 && (r += 4,
                t >>>= 4),
                t >= 2 && (r += 2,
                t >>>= 2),
                r + t
            }
            ,
            a.prototype._zeroBits = function(e) {
                if (0 === e)
                    return 26;
                var t = e
                  , r = 0;
                return 0 == (8191 & t) && (r += 13,
                t >>>= 13),
                0 == (127 & t) && (r += 7,
                t >>>= 7),
                0 == (15 & t) && (r += 4,
                t >>>= 4),
                0 == (3 & t) && (r += 2,
                t >>>= 2),
                0 == (1 & t) && r++,
                r
            }
            ,
            a.prototype.bitLength = function() {
                var e = this.words[this.length - 1]
                  , t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }
            ,
            a.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var r = this._zeroBits(this.words[t]);
                    if (e += r,
                    26 !== r)
                        break
                }
                return e
            }
            ,
            a.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            a.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }
            ,
            a.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }
            ,
            a.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            a.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            a.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            a.prototype.iuor = function(e) {
                for (; this.length < e.length; )
                    this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++)
                    this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }
            ,
            a.prototype.ior = function(e) {
                return n(0 == (this.negative | e.negative)),
                this.iuor(e)
            }
            ,
            a.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }
            ,
            a.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }
            ,
            a.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var r = 0; r < t.length; r++)
                    this.words[r] = this.words[r] & e.words[r];
                return this.length = t.length,
                this.strip()
            }
            ,
            a.prototype.iand = function(e) {
                return n(0 == (this.negative | e.negative)),
                this.iuand(e)
            }
            ,
            a.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }
            ,
            a.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }
            ,
            a.prototype.iuxor = function(e) {
                var t, r;
                this.length > e.length ? (t = this,
                r = e) : (t = e,
                r = this);
                for (var n = 0; n < r.length; n++)
                    this.words[n] = t.words[n] ^ r.words[n];
                if (this !== t)
                    for (; n < t.length; n++)
                        this.words[n] = t.words[n];
                return this.length = t.length,
                this.strip()
            }
            ,
            a.prototype.ixor = function(e) {
                return n(0 == (this.negative | e.negative)),
                this.iuxor(e)
            }
            ,
            a.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }
            ,
            a.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }
            ,
            a.prototype.inotn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26)
                  , r = e % 26;
                this._expand(t),
                r > 0 && t--;
                for (var i = 0; i < t; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r),
                this.strip()
            }
            ,
            a.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }
            ,
            a.prototype.setn = function(e, t) {
                n("number" == typeof e && e >= 0);
                var r = e / 26 | 0
                  , i = e % 26;
                return this._expand(r + 1),
                this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i),
                this.strip()
            }
            ,
            a.prototype.iadd = function(e) {
                var t, r, n;
                if (0 !== this.negative && 0 === e.negative)
                    return this.negative = 0,
                    t = this.isub(e),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== e.negative)
                    return e.negative = 0,
                    t = this.isub(e),
                    e.negative = 1,
                    t._normSign();
                this.length > e.length ? (r = this,
                n = e) : (r = e,
                n = this);
                for (var i = 0, a = 0; a < n.length; a++)
                    t = (0 | r.words[a]) + (0 | n.words[a]) + i,
                    this.words[a] = 67108863 & t,
                    i = t >>> 26;
                for (; 0 !== i && a < r.length; a++)
                    t = (0 | r.words[a]) + i,
                    this.words[a] = 67108863 & t,
                    i = t >>> 26;
                if (this.length = r.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (r !== this)
                    for (; a < r.length; a++)
                        this.words[a] = r.words[a];
                return this
            }
            ,
            a.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                t = this.sub(e),
                e.negative ^= 1,
                t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                t = e.sub(this),
                this.negative = 1,
                t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }
            ,
            a.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1,
                    t._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(e),
                    this.negative = 1,
                    this._normSign();
                var r, n, i = this.cmp(e);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (r = this,
                n = e) : (r = e,
                n = this);
                for (var a = 0, o = 0; o < n.length; o++)
                    a = (t = (0 | r.words[o]) - (0 | n.words[o]) + a) >> 26,
                    this.words[o] = 67108863 & t;
                for (; 0 !== a && o < r.length; o++)
                    a = (t = (0 | r.words[o]) + a) >> 26,
                    this.words[o] = 67108863 & t;
                if (0 === a && o < r.length && r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this.length = Math.max(this.length, o),
                r !== this && (this.negative = 1),
                this.strip()
            }
            ,
            a.prototype.sub = function(e) {
                return this.clone().isub(e)
            }
            ;
            var l = function(e, t, r) {
                var n, i, a, o = e.words, s = t.words, f = r.words, c = 0, d = 0 | o[0], h = 8191 & d, u = d >>> 13, l = 0 | o[1], p = 8191 & l, b = l >>> 13, m = 0 | o[2], y = 8191 & m, v = m >>> 13, g = 0 | o[3], _ = 8191 & g, w = g >>> 13, S = 0 | o[4], M = 8191 & S, k = S >>> 13, E = 0 | o[5], x = 8191 & E, A = E >>> 13, I = 0 | o[6], B = 8191 & I, T = I >>> 13, R = 0 | o[7], C = 8191 & R, P = R >>> 13, j = 0 | o[8], O = 8191 & j, L = j >>> 13, D = 0 | o[9], U = 8191 & D, N = D >>> 13, q = 0 | s[0], z = 8191 & q, F = q >>> 13, H = 0 | s[1], K = 8191 & H, Y = H >>> 13, W = 0 | s[2], $ = 8191 & W, V = W >>> 13, G = 0 | s[3], X = 8191 & G, Z = G >>> 13, J = 0 | s[4], Q = 8191 & J, ee = J >>> 13, te = 0 | s[5], re = 8191 & te, ne = te >>> 13, ie = 0 | s[6], ae = 8191 & ie, oe = ie >>> 13, se = 0 | s[7], fe = 8191 & se, ce = se >>> 13, de = 0 | s[8], he = 8191 & de, ue = de >>> 13, le = 0 | s[9], pe = 8191 & le, be = le >>> 13;
                r.negative = e.negative ^ t.negative,
                r.length = 19;
                var me = (c + (n = Math.imul(h, z)) | 0) + ((8191 & (i = (i = Math.imul(h, F)) + Math.imul(u, z) | 0)) << 13) | 0;
                c = ((a = Math.imul(u, F)) + (i >>> 13) | 0) + (me >>> 26) | 0,
                me &= 67108863,
                n = Math.imul(p, z),
                i = (i = Math.imul(p, F)) + Math.imul(b, z) | 0,
                a = Math.imul(b, F);
                var ye = (c + (n = n + Math.imul(h, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(u, K) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, Y) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0,
                ye &= 67108863,
                n = Math.imul(y, z),
                i = (i = Math.imul(y, F)) + Math.imul(v, z) | 0,
                a = Math.imul(v, F),
                n = n + Math.imul(p, K) | 0,
                i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, K) | 0,
                a = a + Math.imul(b, Y) | 0;
                var ve = (c + (n = n + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, V) | 0) + Math.imul(u, $) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, V) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0,
                ve &= 67108863,
                n = Math.imul(_, z),
                i = (i = Math.imul(_, F)) + Math.imul(w, z) | 0,
                a = Math.imul(w, F),
                n = n + Math.imul(y, K) | 0,
                i = (i = i + Math.imul(y, Y) | 0) + Math.imul(v, K) | 0,
                a = a + Math.imul(v, Y) | 0,
                n = n + Math.imul(p, $) | 0,
                i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, $) | 0,
                a = a + Math.imul(b, V) | 0;
                var ge = (c + (n = n + Math.imul(h, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(u, X) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, Z) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0,
                ge &= 67108863,
                n = Math.imul(M, z),
                i = (i = Math.imul(M, F)) + Math.imul(k, z) | 0,
                a = Math.imul(k, F),
                n = n + Math.imul(_, K) | 0,
                i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, K) | 0,
                a = a + Math.imul(w, Y) | 0,
                n = n + Math.imul(y, $) | 0,
                i = (i = i + Math.imul(y, V) | 0) + Math.imul(v, $) | 0,
                a = a + Math.imul(v, V) | 0,
                n = n + Math.imul(p, X) | 0,
                i = (i = i + Math.imul(p, Z) | 0) + Math.imul(b, X) | 0,
                a = a + Math.imul(b, Z) | 0;
                var _e = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(u, Q) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0,
                _e &= 67108863,
                n = Math.imul(x, z),
                i = (i = Math.imul(x, F)) + Math.imul(A, z) | 0,
                a = Math.imul(A, F),
                n = n + Math.imul(M, K) | 0,
                i = (i = i + Math.imul(M, Y) | 0) + Math.imul(k, K) | 0,
                a = a + Math.imul(k, Y) | 0,
                n = n + Math.imul(_, $) | 0,
                i = (i = i + Math.imul(_, V) | 0) + Math.imul(w, $) | 0,
                a = a + Math.imul(w, V) | 0,
                n = n + Math.imul(y, X) | 0,
                i = (i = i + Math.imul(y, Z) | 0) + Math.imul(v, X) | 0,
                a = a + Math.imul(v, Z) | 0,
                n = n + Math.imul(p, Q) | 0,
                i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0,
                a = a + Math.imul(b, ee) | 0;
                var we = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(u, re) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0,
                we &= 67108863,
                n = Math.imul(B, z),
                i = (i = Math.imul(B, F)) + Math.imul(T, z) | 0,
                a = Math.imul(T, F),
                n = n + Math.imul(x, K) | 0,
                i = (i = i + Math.imul(x, Y) | 0) + Math.imul(A, K) | 0,
                a = a + Math.imul(A, Y) | 0,
                n = n + Math.imul(M, $) | 0,
                i = (i = i + Math.imul(M, V) | 0) + Math.imul(k, $) | 0,
                a = a + Math.imul(k, V) | 0,
                n = n + Math.imul(_, X) | 0,
                i = (i = i + Math.imul(_, Z) | 0) + Math.imul(w, X) | 0,
                a = a + Math.imul(w, Z) | 0,
                n = n + Math.imul(y, Q) | 0,
                i = (i = i + Math.imul(y, ee) | 0) + Math.imul(v, Q) | 0,
                a = a + Math.imul(v, ee) | 0,
                n = n + Math.imul(p, re) | 0,
                i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0,
                a = a + Math.imul(b, ne) | 0;
                var Se = (c + (n = n + Math.imul(h, ae) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, oe) | 0) + Math.imul(u, ae) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, oe) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0,
                Se &= 67108863,
                n = Math.imul(C, z),
                i = (i = Math.imul(C, F)) + Math.imul(P, z) | 0,
                a = Math.imul(P, F),
                n = n + Math.imul(B, K) | 0,
                i = (i = i + Math.imul(B, Y) | 0) + Math.imul(T, K) | 0,
                a = a + Math.imul(T, Y) | 0,
                n = n + Math.imul(x, $) | 0,
                i = (i = i + Math.imul(x, V) | 0) + Math.imul(A, $) | 0,
                a = a + Math.imul(A, V) | 0,
                n = n + Math.imul(M, X) | 0,
                i = (i = i + Math.imul(M, Z) | 0) + Math.imul(k, X) | 0,
                a = a + Math.imul(k, Z) | 0,
                n = n + Math.imul(_, Q) | 0,
                i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0,
                a = a + Math.imul(w, ee) | 0,
                n = n + Math.imul(y, re) | 0,
                i = (i = i + Math.imul(y, ne) | 0) + Math.imul(v, re) | 0,
                a = a + Math.imul(v, ne) | 0,
                n = n + Math.imul(p, ae) | 0,
                i = (i = i + Math.imul(p, oe) | 0) + Math.imul(b, ae) | 0,
                a = a + Math.imul(b, oe) | 0;
                var Me = (c + (n = n + Math.imul(h, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(u, fe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, ce) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0,
                Me &= 67108863,
                n = Math.imul(O, z),
                i = (i = Math.imul(O, F)) + Math.imul(L, z) | 0,
                a = Math.imul(L, F),
                n = n + Math.imul(C, K) | 0,
                i = (i = i + Math.imul(C, Y) | 0) + Math.imul(P, K) | 0,
                a = a + Math.imul(P, Y) | 0,
                n = n + Math.imul(B, $) | 0,
                i = (i = i + Math.imul(B, V) | 0) + Math.imul(T, $) | 0,
                a = a + Math.imul(T, V) | 0,
                n = n + Math.imul(x, X) | 0,
                i = (i = i + Math.imul(x, Z) | 0) + Math.imul(A, X) | 0,
                a = a + Math.imul(A, Z) | 0,
                n = n + Math.imul(M, Q) | 0,
                i = (i = i + Math.imul(M, ee) | 0) + Math.imul(k, Q) | 0,
                a = a + Math.imul(k, ee) | 0,
                n = n + Math.imul(_, re) | 0,
                i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0,
                a = a + Math.imul(w, ne) | 0,
                n = n + Math.imul(y, ae) | 0,
                i = (i = i + Math.imul(y, oe) | 0) + Math.imul(v, ae) | 0,
                a = a + Math.imul(v, oe) | 0,
                n = n + Math.imul(p, fe) | 0,
                i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, fe) | 0,
                a = a + Math.imul(b, ce) | 0;
                var ke = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ue) | 0) + Math.imul(u, he) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, ue) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0,
                ke &= 67108863,
                n = Math.imul(U, z),
                i = (i = Math.imul(U, F)) + Math.imul(N, z) | 0,
                a = Math.imul(N, F),
                n = n + Math.imul(O, K) | 0,
                i = (i = i + Math.imul(O, Y) | 0) + Math.imul(L, K) | 0,
                a = a + Math.imul(L, Y) | 0,
                n = n + Math.imul(C, $) | 0,
                i = (i = i + Math.imul(C, V) | 0) + Math.imul(P, $) | 0,
                a = a + Math.imul(P, V) | 0,
                n = n + Math.imul(B, X) | 0,
                i = (i = i + Math.imul(B, Z) | 0) + Math.imul(T, X) | 0,
                a = a + Math.imul(T, Z) | 0,
                n = n + Math.imul(x, Q) | 0,
                i = (i = i + Math.imul(x, ee) | 0) + Math.imul(A, Q) | 0,
                a = a + Math.imul(A, ee) | 0,
                n = n + Math.imul(M, re) | 0,
                i = (i = i + Math.imul(M, ne) | 0) + Math.imul(k, re) | 0,
                a = a + Math.imul(k, ne) | 0,
                n = n + Math.imul(_, ae) | 0,
                i = (i = i + Math.imul(_, oe) | 0) + Math.imul(w, ae) | 0,
                a = a + Math.imul(w, oe) | 0,
                n = n + Math.imul(y, fe) | 0,
                i = (i = i + Math.imul(y, ce) | 0) + Math.imul(v, fe) | 0,
                a = a + Math.imul(v, ce) | 0,
                n = n + Math.imul(p, he) | 0,
                i = (i = i + Math.imul(p, ue) | 0) + Math.imul(b, he) | 0,
                a = a + Math.imul(b, ue) | 0;
                var Ee = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(u, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(u, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0,
                Ee &= 67108863,
                n = Math.imul(U, K),
                i = (i = Math.imul(U, Y)) + Math.imul(N, K) | 0,
                a = Math.imul(N, Y),
                n = n + Math.imul(O, $) | 0,
                i = (i = i + Math.imul(O, V) | 0) + Math.imul(L, $) | 0,
                a = a + Math.imul(L, V) | 0,
                n = n + Math.imul(C, X) | 0,
                i = (i = i + Math.imul(C, Z) | 0) + Math.imul(P, X) | 0,
                a = a + Math.imul(P, Z) | 0,
                n = n + Math.imul(B, Q) | 0,
                i = (i = i + Math.imul(B, ee) | 0) + Math.imul(T, Q) | 0,
                a = a + Math.imul(T, ee) | 0,
                n = n + Math.imul(x, re) | 0,
                i = (i = i + Math.imul(x, ne) | 0) + Math.imul(A, re) | 0,
                a = a + Math.imul(A, ne) | 0,
                n = n + Math.imul(M, ae) | 0,
                i = (i = i + Math.imul(M, oe) | 0) + Math.imul(k, ae) | 0,
                a = a + Math.imul(k, oe) | 0,
                n = n + Math.imul(_, fe) | 0,
                i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, fe) | 0,
                a = a + Math.imul(w, ce) | 0,
                n = n + Math.imul(y, he) | 0,
                i = (i = i + Math.imul(y, ue) | 0) + Math.imul(v, he) | 0,
                a = a + Math.imul(v, ue) | 0;
                var xe = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0,
                xe &= 67108863,
                n = Math.imul(U, $),
                i = (i = Math.imul(U, V)) + Math.imul(N, $) | 0,
                a = Math.imul(N, V),
                n = n + Math.imul(O, X) | 0,
                i = (i = i + Math.imul(O, Z) | 0) + Math.imul(L, X) | 0,
                a = a + Math.imul(L, Z) | 0,
                n = n + Math.imul(C, Q) | 0,
                i = (i = i + Math.imul(C, ee) | 0) + Math.imul(P, Q) | 0,
                a = a + Math.imul(P, ee) | 0,
                n = n + Math.imul(B, re) | 0,
                i = (i = i + Math.imul(B, ne) | 0) + Math.imul(T, re) | 0,
                a = a + Math.imul(T, ne) | 0,
                n = n + Math.imul(x, ae) | 0,
                i = (i = i + Math.imul(x, oe) | 0) + Math.imul(A, ae) | 0,
                a = a + Math.imul(A, oe) | 0,
                n = n + Math.imul(M, fe) | 0,
                i = (i = i + Math.imul(M, ce) | 0) + Math.imul(k, fe) | 0,
                a = a + Math.imul(k, ce) | 0,
                n = n + Math.imul(_, he) | 0,
                i = (i = i + Math.imul(_, ue) | 0) + Math.imul(w, he) | 0,
                a = a + Math.imul(w, ue) | 0;
                var Ae = (c + (n = n + Math.imul(y, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, be) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(v, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0,
                Ae &= 67108863,
                n = Math.imul(U, X),
                i = (i = Math.imul(U, Z)) + Math.imul(N, X) | 0,
                a = Math.imul(N, Z),
                n = n + Math.imul(O, Q) | 0,
                i = (i = i + Math.imul(O, ee) | 0) + Math.imul(L, Q) | 0,
                a = a + Math.imul(L, ee) | 0,
                n = n + Math.imul(C, re) | 0,
                i = (i = i + Math.imul(C, ne) | 0) + Math.imul(P, re) | 0,
                a = a + Math.imul(P, ne) | 0,
                n = n + Math.imul(B, ae) | 0,
                i = (i = i + Math.imul(B, oe) | 0) + Math.imul(T, ae) | 0,
                a = a + Math.imul(T, oe) | 0,
                n = n + Math.imul(x, fe) | 0,
                i = (i = i + Math.imul(x, ce) | 0) + Math.imul(A, fe) | 0,
                a = a + Math.imul(A, ce) | 0,
                n = n + Math.imul(M, he) | 0,
                i = (i = i + Math.imul(M, ue) | 0) + Math.imul(k, he) | 0,
                a = a + Math.imul(k, ue) | 0;
                var Ie = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0,
                Ie &= 67108863,
                n = Math.imul(U, Q),
                i = (i = Math.imul(U, ee)) + Math.imul(N, Q) | 0,
                a = Math.imul(N, ee),
                n = n + Math.imul(O, re) | 0,
                i = (i = i + Math.imul(O, ne) | 0) + Math.imul(L, re) | 0,
                a = a + Math.imul(L, ne) | 0,
                n = n + Math.imul(C, ae) | 0,
                i = (i = i + Math.imul(C, oe) | 0) + Math.imul(P, ae) | 0,
                a = a + Math.imul(P, oe) | 0,
                n = n + Math.imul(B, fe) | 0,
                i = (i = i + Math.imul(B, ce) | 0) + Math.imul(T, fe) | 0,
                a = a + Math.imul(T, ce) | 0,
                n = n + Math.imul(x, he) | 0,
                i = (i = i + Math.imul(x, ue) | 0) + Math.imul(A, he) | 0,
                a = a + Math.imul(A, ue) | 0;
                var Be = (c + (n = n + Math.imul(M, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, be) | 0) + Math.imul(k, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(k, be) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0,
                Be &= 67108863,
                n = Math.imul(U, re),
                i = (i = Math.imul(U, ne)) + Math.imul(N, re) | 0,
                a = Math.imul(N, ne),
                n = n + Math.imul(O, ae) | 0,
                i = (i = i + Math.imul(O, oe) | 0) + Math.imul(L, ae) | 0,
                a = a + Math.imul(L, oe) | 0,
                n = n + Math.imul(C, fe) | 0,
                i = (i = i + Math.imul(C, ce) | 0) + Math.imul(P, fe) | 0,
                a = a + Math.imul(P, ce) | 0,
                n = n + Math.imul(B, he) | 0,
                i = (i = i + Math.imul(B, ue) | 0) + Math.imul(T, he) | 0,
                a = a + Math.imul(T, ue) | 0;
                var Te = (c + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0,
                Te &= 67108863,
                n = Math.imul(U, ae),
                i = (i = Math.imul(U, oe)) + Math.imul(N, ae) | 0,
                a = Math.imul(N, oe),
                n = n + Math.imul(O, fe) | 0,
                i = (i = i + Math.imul(O, ce) | 0) + Math.imul(L, fe) | 0,
                a = a + Math.imul(L, ce) | 0,
                n = n + Math.imul(C, he) | 0,
                i = (i = i + Math.imul(C, ue) | 0) + Math.imul(P, he) | 0,
                a = a + Math.imul(P, ue) | 0;
                var Re = (c + (n = n + Math.imul(B, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, be) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(T, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0,
                Re &= 67108863,
                n = Math.imul(U, fe),
                i = (i = Math.imul(U, ce)) + Math.imul(N, fe) | 0,
                a = Math.imul(N, ce),
                n = n + Math.imul(O, he) | 0,
                i = (i = i + Math.imul(O, ue) | 0) + Math.imul(L, he) | 0,
                a = a + Math.imul(L, ue) | 0;
                var Ce = (c + (n = n + Math.imul(C, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, be) | 0) + Math.imul(P, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(P, be) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0,
                Ce &= 67108863,
                n = Math.imul(U, he),
                i = (i = Math.imul(U, ue)) + Math.imul(N, he) | 0,
                a = Math.imul(N, ue);
                var Pe = (c + (n = n + Math.imul(O, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, be) | 0) + Math.imul(L, pe) | 0)) << 13) | 0;
                c = ((a = a + Math.imul(L, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0,
                Pe &= 67108863;
                var je = (c + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, be)) + Math.imul(N, pe) | 0)) << 13) | 0;
                return c = ((a = Math.imul(N, be)) + (i >>> 13) | 0) + (je >>> 26) | 0,
                je &= 67108863,
                f[0] = me,
                f[1] = ye,
                f[2] = ve,
                f[3] = ge,
                f[4] = _e,
                f[5] = we,
                f[6] = Se,
                f[7] = Me,
                f[8] = ke,
                f[9] = Ee,
                f[10] = xe,
                f[11] = Ae,
                f[12] = Ie,
                f[13] = Be,
                f[14] = Te,
                f[15] = Re,
                f[16] = Ce,
                f[17] = Pe,
                f[18] = je,
                0 !== c && (f[19] = c,
                r.length++),
                r
            };
            function p(e, t, r) {
                return (new b).mulp(e, t, r)
            }
            function b(e, t) {
                this.x = e,
                this.y = t
            }
            Math.imul || (l = u),
            a.prototype.mulTo = function(e, t) {
                var r = this.length + e.length;
                return 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? u(this, e, t) : r < 1024 ? function(e, t, r) {
                    r.negative = t.negative ^ e.negative,
                    r.length = e.length + t.length;
                    for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                        var o = i;
                        i = 0;
                        for (var s = 67108863 & n, f = Math.min(a, t.length - 1), c = Math.max(0, a - e.length + 1); c <= f; c++) {
                            var d = a - c
                              , h = (0 | e.words[d]) * (0 | t.words[c])
                              , u = 67108863 & h;
                            s = 67108863 & (u = u + s | 0),
                            i += (o = (o = o + (h / 67108864 | 0) | 0) + (u >>> 26) | 0) >>> 26,
                            o &= 67108863
                        }
                        r.words[a] = s,
                        n = o,
                        o = i
                    }
                    return 0 !== n ? r.words[a] = n : r.length--,
                    r.strip()
                }(this, e, t) : p(this, e, t)
            }
            ,
            b.prototype.makeRBT = function(e) {
                for (var t = new Array(e), r = a.prototype._countBits(e) - 1, n = 0; n < e; n++)
                    t[n] = this.revBin(n, r, e);
                return t
            }
            ,
            b.prototype.revBin = function(e, t, r) {
                if (0 === e || e === r - 1)
                    return e;
                for (var n = 0, i = 0; i < t; i++)
                    n |= (1 & e) << t - i - 1,
                    e >>= 1;
                return n
            }
            ,
            b.prototype.permute = function(e, t, r, n, i, a) {
                for (var o = 0; o < a; o++)
                    n[o] = t[e[o]],
                    i[o] = r[e[o]]
            }
            ,
            b.prototype.transform = function(e, t, r, n, i, a) {
                this.permute(a, e, t, r, n, i);
                for (var o = 1; o < i; o <<= 1)
                    for (var s = o << 1, f = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), d = 0; d < i; d += s)
                        for (var h = f, u = c, l = 0; l < o; l++) {
                            var p = r[d + l]
                              , b = n[d + l]
                              , m = r[d + l + o]
                              , y = n[d + l + o]
                              , v = h * m - u * y;
                            y = h * y + u * m,
                            m = v,
                            r[d + l] = p + m,
                            n[d + l] = b + y,
                            r[d + l + o] = p - m,
                            n[d + l + o] = b - y,
                            l !== s && (v = f * h - c * u,
                            u = f * u + c * h,
                            h = v)
                        }
            }
            ,
            b.prototype.guessLen13b = function(e, t) {
                var r = 1 | Math.max(t, e)
                  , n = 1 & r
                  , i = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    i++;
                return 1 << i + 1 + n
            }
            ,
            b.prototype.conjugate = function(e, t, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var i = e[n];
                        e[n] = e[r - n - 1],
                        e[r - n - 1] = i,
                        i = t[n],
                        t[n] = -t[r - n - 1],
                        t[r - n - 1] = -i
                    }
            }
            ,
            b.prototype.normalize13b = function(e, t) {
                for (var r = 0, n = 0; n < t / 2; n++) {
                    var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                    e[n] = 67108863 & i,
                    r = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return e
            }
            ,
            b.prototype.convert13b = function(e, t, r, i) {
                for (var a = 0, o = 0; o < t; o++)
                    a += 0 | e[o],
                    r[2 * o] = 8191 & a,
                    a >>>= 13,
                    r[2 * o + 1] = 8191 & a,
                    a >>>= 13;
                for (o = 2 * t; o < i; ++o)
                    r[o] = 0;
                n(0 === a),
                n(0 == (-8192 & a))
            }
            ,
            b.prototype.stub = function(e) {
                for (var t = new Array(e), r = 0; r < e; r++)
                    t[r] = 0;
                return t
            }
            ,
            b.prototype.mulp = function(e, t, r) {
                var n = 2 * this.guessLen13b(e.length, t.length)
                  , i = this.makeRBT(n)
                  , a = this.stub(n)
                  , o = new Array(n)
                  , s = new Array(n)
                  , f = new Array(n)
                  , c = new Array(n)
                  , d = new Array(n)
                  , h = new Array(n)
                  , u = r.words;
                u.length = n,
                this.convert13b(e.words, e.length, o, n),
                this.convert13b(t.words, t.length, c, n),
                this.transform(o, a, s, f, n, i),
                this.transform(c, a, d, h, n, i);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * d[l] - f[l] * h[l];
                    f[l] = s[l] * h[l] + f[l] * d[l],
                    s[l] = p
                }
                return this.conjugate(s, f, n),
                this.transform(s, f, u, a, n, i),
                this.conjugate(u, a, n),
                this.normalize13b(u, n),
                r.negative = e.negative ^ t.negative,
                r.length = e.length + t.length,
                r.strip()
            }
            ,
            a.prototype.mul = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length),
                this.mulTo(e, t)
            }
            ,
            a.prototype.mulf = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length),
                p(this, e, t)
            }
            ,
            a.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }
            ,
            a.prototype.imuln = function(e) {
                n("number" == typeof e),
                n(e < 67108864);
                for (var t = 0, r = 0; r < this.length; r++) {
                    var i = (0 | this.words[r]) * e
                      , a = (67108863 & i) + (67108863 & t);
                    t >>= 26,
                    t += i / 67108864 | 0,
                    t += a >>> 26,
                    this.words[r] = 67108863 & a
                }
                return 0 !== t && (this.words[r] = t,
                this.length++),
                this
            }
            ,
            a.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }
            ,
            a.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            a.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            a.prototype.pow = function(e) {
                var t = function(e) {
                    for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        t[r] = (e.words[n] & 1 << i) >>> i
                    }
                    return t
                }(e);
                if (0 === t.length)
                    return new a(1);
                for (var r = this, n = 0; n < t.length && 0 === t[n]; n++,
                r = r.sqr())
                    ;
                if (++n < t.length)
                    for (var i = r.sqr(); n < t.length; n++,
                    i = i.sqr())
                        0 !== t[n] && (r = r.mul(i));
                return r
            }
            ,
            a.prototype.iushln = function(e) {
                n("number" == typeof e && e >= 0);
                var t, r = e % 26, i = (e - r) / 26, a = 67108863 >>> 26 - r << 26 - r;
                if (0 !== r) {
                    var o = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & a
                          , f = (0 | this.words[t]) - s << r;
                        this.words[t] = f | o,
                        o = s >>> 26 - r
                    }
                    o && (this.words[t] = o,
                    this.length++)
                }
                if (0 !== i) {
                    for (t = this.length - 1; t >= 0; t--)
                        this.words[t + i] = this.words[t];
                    for (t = 0; t < i; t++)
                        this.words[t] = 0;
                    this.length += i
                }
                return this.strip()
            }
            ,
            a.prototype.ishln = function(e) {
                return n(0 === this.negative),
                this.iushln(e)
            }
            ,
            a.prototype.iushrn = function(e, t, r) {
                var i;
                n("number" == typeof e && e >= 0),
                i = t ? (t - t % 26) / 26 : 0;
                var a = e % 26
                  , o = Math.min((e - a) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> a << a
                  , f = r;
                if (i -= o,
                i = Math.max(0, i),
                f) {
                    for (var c = 0; c < o; c++)
                        f.words[c] = this.words[c];
                    f.length = o
                }
                if (0 === o)
                    ;
                else if (this.length > o)
                    for (this.length -= o,
                    c = 0; c < this.length; c++)
                        this.words[c] = this.words[c + o];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var d = 0;
                for (c = this.length - 1; c >= 0 && (0 !== d || c >= i); c--) {
                    var h = 0 | this.words[c];
                    this.words[c] = d << 26 - a | h >>> a,
                    d = h & s
                }
                return f && 0 !== d && (f.words[f.length++] = d),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this.strip()
            }
            ,
            a.prototype.ishrn = function(e, t, r) {
                return n(0 === this.negative),
                this.iushrn(e, t, r)
            }
            ,
            a.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }
            ,
            a.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }
            ,
            a.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }
            ,
            a.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }
            ,
            a.prototype.testn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26
                  , r = (e - t) / 26
                  , i = 1 << t;
                return !(this.length <= r) && !!(this.words[r] & i)
            }
            ,
            a.prototype.imaskn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26
                  , r = (e - t) / 26;
                if (n(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= r)
                    return this;
                if (0 !== t && r++,
                this.length = Math.min(r, this.length),
                0 !== t) {
                    var i = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= i
                }
                return this.strip()
            }
            ,
            a.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }
            ,
            a.prototype.iaddn = function(e) {
                return n("number" == typeof e),
                n(e < 67108864),
                e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(e),
                this.negative = 1,
                this) : this._iaddn(e)
            }
            ,
            a.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                    this.words[t] -= 67108864,
                    t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1),
                this
            }
            ,
            a.prototype.isubn = function(e) {
                if (n("number" == typeof e),
                n(e < 67108864),
                e < 0)
                    return this.iaddn(-e);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(e),
                    this.negative = 1,
                    this;
                if (this.words[0] -= e,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        this.words[t] += 67108864,
                        this.words[t + 1] -= 1;
                return this.strip()
            }
            ,
            a.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }
            ,
            a.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }
            ,
            a.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            a.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            a.prototype._ishlnsubmul = function(e, t, r) {
                var i, a, o = e.length + r;
                this._expand(o);
                var s = 0;
                for (i = 0; i < e.length; i++) {
                    a = (0 | this.words[i + r]) + s;
                    var f = (0 | e.words[i]) * t;
                    s = ((a -= 67108863 & f) >> 26) - (f / 67108864 | 0),
                    this.words[i + r] = 67108863 & a
                }
                for (; i < this.length - r; i++)
                    s = (a = (0 | this.words[i + r]) + s) >> 26,
                    this.words[i + r] = 67108863 & a;
                if (0 === s)
                    return this.strip();
                for (n(-1 === s),
                s = 0,
                i = 0; i < this.length; i++)
                    s = (a = -(0 | this.words[i]) + s) >> 26,
                    this.words[i] = 67108863 & a;
                return this.negative = 1,
                this.strip()
            }
            ,
            a.prototype._wordDiv = function(e, t) {
                var r = (this.length,
                e.length)
                  , n = this.clone()
                  , i = e
                  , o = 0 | i.words[i.length - 1];
                0 !== (r = 26 - this._countBits(o)) && (i = i.ushln(r),
                n.iushln(r),
                o = 0 | i.words[i.length - 1]);
                var s, f = n.length - i.length;
                if ("mod" !== t) {
                    (s = new a(null)).length = f + 1,
                    s.words = new Array(s.length);
                    for (var c = 0; c < s.length; c++)
                        s.words[c] = 0
                }
                var d = n.clone()._ishlnsubmul(i, 1, f);
                0 === d.negative && (n = d,
                s && (s.words[f] = 1));
                for (var h = f - 1; h >= 0; h--) {
                    var u = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                    for (u = Math.min(u / o | 0, 67108863),
                    n._ishlnsubmul(i, u, h); 0 !== n.negative; )
                        u--,
                        n.negative = 0,
                        n._ishlnsubmul(i, 1, h),
                        n.isZero() || (n.negative ^= 1);
                    s && (s.words[h] = u)
                }
                return s && s.strip(),
                n.strip(),
                "div" !== t && 0 !== r && n.iushrn(r),
                {
                    div: s || null,
                    mod: n
                }
            }
            ,
            a.prototype.divmod = function(e, t, r) {
                return n(!e.isZero()),
                this.isZero() ? {
                    div: new a(0),
                    mod: new a(0)
                } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t),
                "mod" !== t && (i = s.div.neg()),
                "div" !== t && (o = s.mod.neg(),
                r && 0 !== o.negative && o.iadd(e)),
                {
                    div: i,
                    mod: o
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t),
                "mod" !== t && (i = s.div.neg()),
                {
                    div: i,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t),
                "div" !== t && (o = s.mod.neg(),
                r && 0 !== o.negative && o.isub(e)),
                {
                    div: s.div,
                    mod: o
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new a(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new a(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new a(this.modn(e.words[0]))
                } : this._wordDiv(e, t);
                var i, o, s
            }
            ,
            a.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }
            ,
            a.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }
            ,
            a.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }
            ,
            a.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero())
                    return t.div;
                var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                  , n = e.ushrn(1)
                  , i = e.andln(1)
                  , a = r.cmp(n);
                return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }
            ,
            a.prototype.modn = function(e) {
                n(e <= 67108863);
                for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--)
                    r = (t * r + (0 | this.words[i])) % e;
                return r
            }
            ,
            a.prototype.idivn = function(e) {
                n(e <= 67108863);
                for (var t = 0, r = this.length - 1; r >= 0; r--) {
                    var i = (0 | this.words[r]) + 67108864 * t;
                    this.words[r] = i / e | 0,
                    t = i % e
                }
                return this.strip()
            }
            ,
            a.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }
            ,
            a.prototype.egcd = function(e) {
                n(0 === e.negative),
                n(!e.isZero());
                var t = this
                  , r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i = new a(1), o = new a(0), s = new a(0), f = new a(1), c = 0; t.isEven() && r.isEven(); )
                    t.iushrn(1),
                    r.iushrn(1),
                    ++c;
                for (var d = r.clone(), h = t.clone(); !t.isZero(); ) {
                    for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u,
                    l <<= 1)
                        ;
                    if (u > 0)
                        for (t.iushrn(u); u-- > 0; )
                            (i.isOdd() || o.isOdd()) && (i.iadd(d),
                            o.isub(h)),
                            i.iushrn(1),
                            o.iushrn(1);
                    for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p,
                    b <<= 1)
                        ;
                    if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                            (s.isOdd() || f.isOdd()) && (s.iadd(d),
                            f.isub(h)),
                            s.iushrn(1),
                            f.iushrn(1);
                    t.cmp(r) >= 0 ? (t.isub(r),
                    i.isub(s),
                    o.isub(f)) : (r.isub(t),
                    s.isub(i),
                    f.isub(o))
                }
                return {
                    a: s,
                    b: f,
                    gcd: r.iushln(c)
                }
            }
            ,
            a.prototype._invmp = function(e) {
                n(0 === e.negative),
                n(!e.isZero());
                var t = this
                  , r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i, o = new a(1), s = new a(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                    for (var c = 0, d = 1; 0 == (t.words[0] & d) && c < 26; ++c,
                    d <<= 1)
                        ;
                    if (c > 0)
                        for (t.iushrn(c); c-- > 0; )
                            o.isOdd() && o.iadd(f),
                            o.iushrn(1);
                    for (var h = 0, u = 1; 0 == (r.words[0] & u) && h < 26; ++h,
                    u <<= 1)
                        ;
                    if (h > 0)
                        for (r.iushrn(h); h-- > 0; )
                            s.isOdd() && s.iadd(f),
                            s.iushrn(1);
                    t.cmp(r) >= 0 ? (t.isub(r),
                    o.isub(s)) : (r.isub(t),
                    s.isub(o))
                }
                return (i = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && i.iadd(e),
                i
            }
            ,
            a.prototype.gcd = function(e) {
                if (this.isZero())
                    return e.abs();
                if (e.isZero())
                    return this.abs();
                var t = this.clone()
                  , r = e.clone();
                t.negative = 0,
                r.negative = 0;
                for (var n = 0; t.isEven() && r.isEven(); n++)
                    t.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; t.isEven(); )
                        t.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var i = t.cmp(r);
                    if (i < 0) {
                        var a = t;
                        t = r,
                        r = a
                    } else if (0 === i || 0 === r.cmpn(1))
                        break;
                    t.isub(r)
                }
                return r.iushln(n)
            }
            ,
            a.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }
            ,
            a.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            a.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            a.prototype.andln = function(e) {
                return this.words[0] & e
            }
            ,
            a.prototype.bincn = function(e) {
                n("number" == typeof e);
                var t = e % 26
                  , r = (e - t) / 26
                  , i = 1 << t;
                if (this.length <= r)
                    return this._expand(r + 1),
                    this.words[r] |= i,
                    this;
                for (var a = i, o = r; 0 !== a && o < this.length; o++) {
                    var s = 0 | this.words[o];
                    a = (s += a) >>> 26,
                    s &= 67108863,
                    this.words[o] = s
                }
                return 0 !== a && (this.words[o] = a,
                this.length++),
                this
            }
            ,
            a.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            a.prototype.cmpn = function(e) {
                var t, r = e < 0;
                if (0 !== this.negative && !r)
                    return -1;
                if (0 === this.negative && r)
                    return 1;
                if (this.strip(),
                this.length > 1)
                    t = 1;
                else {
                    r && (e = -e),
                    n(e <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    t = i === e ? 0 : i < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            a.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative)
                    return -1;
                if (0 === this.negative && 0 !== e.negative)
                    return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            a.prototype.ucmp = function(e) {
                if (this.length > e.length)
                    return 1;
                if (this.length < e.length)
                    return -1;
                for (var t = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , i = 0 | e.words[r];
                    if (n !== i) {
                        n < i ? t = -1 : n > i && (t = 1);
                        break
                    }
                }
                return t
            }
            ,
            a.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }
            ,
            a.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }
            ,
            a.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }
            ,
            a.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }
            ,
            a.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }
            ,
            a.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }
            ,
            a.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }
            ,
            a.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }
            ,
            a.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }
            ,
            a.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }
            ,
            a.red = function(e) {
                return new S(e)
            }
            ,
            a.prototype.toRed = function(e) {
                return n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
            }
            ,
            a.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            a.prototype._forceRed = function(e) {
                return this.red = e,
                this
            }
            ,
            a.prototype.forceRed = function(e) {
                return n(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
            }
            ,
            a.prototype.redAdd = function(e) {
                return n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
            }
            ,
            a.prototype.redIAdd = function(e) {
                return n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
            }
            ,
            a.prototype.redSub = function(e) {
                return n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
            }
            ,
            a.prototype.redISub = function(e) {
                return n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
            }
            ,
            a.prototype.redShl = function(e) {
                return n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
            }
            ,
            a.prototype.redMul = function(e) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
            }
            ,
            a.prototype.redIMul = function(e) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
            }
            ,
            a.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            a.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            a.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            a.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            a.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            a.prototype.redPow = function(e) {
                return n(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
            }
            ;
            var m = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function y(e, t) {
                this.name = e,
                this.p = new a(t,16),
                this.n = this.p.bitLength(),
                this.k = new a(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function v() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function g() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function _() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function w() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function S(e) {
                if ("string" == typeof e) {
                    var t = a._prime(e);
                    this.m = t.p,
                    this.prime = t
                } else
                    n(e.gtn(1), "modulus must be greater than 1"),
                    this.m = e,
                    this.prime = null
            }
            function M(e) {
                S.call(this, e),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new a(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            y.prototype._tmp = function() {
                var e = new a(null);
                return e.words = new Array(Math.ceil(this.n / 13)),
                e
            }
            ,
            y.prototype.ireduce = function(e) {
                var t, r = e;
                do {
                    this.split(r, this.tmp),
                    t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var n = t < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(),
                r
            }
            ,
            y.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }
            ,
            y.prototype.imulK = function(e) {
                return e.imul(this.k)
            }
            ,
            i(v, y),
            v.prototype.split = function(e, t) {
                for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                    t.words[n] = e.words[n];
                if (t.length = r,
                e.length <= 9)
                    return e.words[0] = 0,
                    void (e.length = 1);
                var i = e.words[9];
                for (t.words[t.length++] = 4194303 & i,
                n = 10; n < e.length; n++) {
                    var a = 0 | e.words[n];
                    e.words[n - 10] = (4194303 & a) << 4 | i >>> 22,
                    i = a
                }
                i >>>= 22,
                e.words[n - 10] = i,
                0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
            }
            ,
            v.prototype.imulK = function(e) {
                e.words[e.length] = 0,
                e.words[e.length + 1] = 0,
                e.length += 2;
                for (var t = 0, r = 0; r < e.length; r++) {
                    var n = 0 | e.words[r];
                    t += 977 * n,
                    e.words[r] = 67108863 & t,
                    t = 64 * n + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--,
                0 === e.words[e.length - 1] && e.length--),
                e
            }
            ,
            i(g, y),
            i(_, y),
            i(w, y),
            w.prototype.imulK = function(e) {
                for (var t = 0, r = 0; r < e.length; r++) {
                    var n = 19 * (0 | e.words[r]) + t
                      , i = 67108863 & n;
                    n >>>= 26,
                    e.words[r] = i,
                    t = n
                }
                return 0 !== t && (e.words[e.length++] = t),
                e
            }
            ,
            a._prime = function(e) {
                if (m[e])
                    return m[e];
                var t;
                if ("k256" === e)
                    t = new v;
                else if ("p224" === e)
                    t = new g;
                else if ("p192" === e)
                    t = new _;
                else {
                    if ("p25519" !== e)
                        throw new Error("Unknown prime " + e);
                    t = new w
                }
                return m[e] = t,
                t
            }
            ,
            S.prototype._verify1 = function(e) {
                n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers")
            }
            ,
            S.prototype._verify2 = function(e, t) {
                n(0 == (e.negative | t.negative), "red works only with positives"),
                n(e.red && e.red === t.red, "red works only with red numbers")
            }
            ,
            S.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }
            ,
            S.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }
            ,
            S.prototype.add = function(e, t) {
                this._verify2(e, t);
                var r = e.add(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            S.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var r = e.iadd(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            S.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var r = e.sub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            S.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var r = e.isub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            S.prototype.shl = function(e, t) {
                return this._verify1(e),
                this.imod(e.ushln(t))
            }
            ,
            S.prototype.imul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.imul(t))
            }
            ,
            S.prototype.mul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.mul(t))
            }
            ,
            S.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }
            ,
            S.prototype.sqr = function(e) {
                return this.mul(e, e)
            }
            ,
            S.prototype.sqrt = function(e) {
                if (e.isZero())
                    return e.clone();
                var t = this.m.andln(3);
                if (n(t % 2 == 1),
                3 === t) {
                    var r = this.m.add(new a(1)).iushrn(2);
                    return this.pow(e, r)
                }
                for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1); )
                    o++,
                    i.iushrn(1);
                n(!i.isZero());
                var s = new a(1).toRed(this)
                  , f = s.redNeg()
                  , c = this.m.subn(1).iushrn(1)
                  , d = this.m.bitLength();
                for (d = new a(2 * d * d).toRed(this); 0 !== this.pow(d, c).cmp(f); )
                    d.redIAdd(f);
                for (var h = this.pow(d, i), u = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = o; 0 !== l.cmp(s); ) {
                    for (var b = l, m = 0; 0 !== b.cmp(s); m++)
                        b = b.redSqr();
                    n(m < p);
                    var y = this.pow(h, new a(1).iushln(p - m - 1));
                    u = u.redMul(y),
                    h = y.redSqr(),
                    l = l.redMul(h),
                    p = m
                }
                return u
            }
            ,
            S.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0,
                this.imod(t).redNeg()) : this.imod(t)
            }
            ,
            S.prototype.pow = function(e, t) {
                if (t.isZero())
                    return new a(1).toRed(this);
                if (0 === t.cmpn(1))
                    return e.clone();
                var r = new Array(16);
                r[0] = new a(1).toRed(this),
                r[1] = e;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], e);
                var i = r[0]
                  , o = 0
                  , s = 0
                  , f = t.bitLength() % 26;
                for (0 === f && (f = 26),
                n = t.length - 1; n >= 0; n--) {
                    for (var c = t.words[n], d = f - 1; d >= 0; d--) {
                        var h = c >> d & 1;
                        i !== r[0] && (i = this.sqr(i)),
                        0 !== h || 0 !== o ? (o <<= 1,
                        o |= h,
                        (4 === ++s || 0 === n && 0 === d) && (i = this.mul(i, r[o]),
                        s = 0,
                        o = 0)) : s = 0
                    }
                    f = 26
                }
                return i
            }
            ,
            S.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }
            ,
            S.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null,
                t
            }
            ,
            a.mont = function(e) {
                return new M(e)
            }
            ,
            i(M, S),
            M.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }
            ,
            M.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null,
                t
            }
            ,
            M.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return e.words[0] = 0,
                    e.length = 1,
                    e;
                var r = e.imul(t)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , a = i;
                return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            M.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return new a(0)._forceRed(this);
                var r = e.mul(t)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            M.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(e, this)
    }
    ).call(this, r(212)(e))
}
, function(e, t, r) {
    var n = r(12)
      , i = r(24)
      , a = r(22)
      , o = Object.defineProperty;
    t.f = r(4) ? Object.defineProperty : function(e, t, r) {
        if (n(e),
        t = a(t, !0),
        n(r),
        i)
            try {
                return o(e, t, r)
            } catch (e) {}
        if ("get"in r || "set"in r)
            throw TypeError("Accessors not supported!");
        return "value"in r && (e[t] = r.value),
        e
    }
}
, function(e, t, r) {
    var n = r(6);
    e.exports = function(e) {
        if (!n(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, r) {
    var n = r(11)
      , i = r(18);
    e.exports = r(4) ? function(e, t, r) {
        return n.f(e, t, i(1, r))
    }
    : function(e, t, r) {
        return e[t] = r,
        e
    }
}
, function(e, t, r) {
    "use strict";
    (function(e) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var n = r(173)
          , i = r(174)
          , a = r(175);
        function o() {
            return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function s(e, t) {
            if (o() < t)
                throw new RangeError("Invalid typed array length");
            return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)),
            e.length = t),
            e
        }
        function f(e, t, r) {
            if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                return new f(e,t,r);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return h(this, e)
            }
            return c(this, e, t, r)
        }
        function c(e, t, r, n) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                if (t.byteLength,
                r < 0 || t.byteLength < r)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                    throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,r) : new Uint8Array(t,r,n);
                f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = u(e, t);
                return e
            }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!f.isEncoding(r))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | p(t, r)
                  , i = (e = s(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e
            }(e, t, r) : function(e, t) {
                if (f.isBuffer(t)) {
                    var r = 0 | l(t.length);
                    return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r),
                    e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : u(e, t);
                    if ("Buffer" === t.type && a(t.data))
                        return u(e, t.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function d(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function h(e, t) {
            if (d(t),
            e = s(e, t < 0 ? 0 : 0 | l(t)),
            !f.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r)
                    e[r] = 0;
            return e
        }
        function u(e, t) {
            var r = t.length < 0 ? 0 : 0 | l(t.length);
            e = s(e, r);
            for (var n = 0; n < r; n += 1)
                e[n] = 255 & t[n];
            return e
        }
        function l(e) {
            if (e >= o())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
            return 0 | e
        }
        function p(e, t) {
            if (f.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r)
                return 0;
            for (var n = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return z(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return F(e).length;
                default:
                    if (n)
                        return z(e).length;
                    t = ("" + t).toLowerCase(),
                    n = !0
                }
        }
        function b(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return T(this, t, r);
                case "utf8":
                case "utf-8":
                    return x(this, t, r);
                case "ascii":
                    return I(this, t, r);
                case "latin1":
                case "binary":
                    return B(this, t, r);
                case "base64":
                    return E(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return R(this, t, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    n = !0
                }
        }
        function m(e, t, r) {
            var n = e[t];
            e[t] = e[r],
            e[r] = n
        }
        function y(e, t, r, n, i) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            r = +r,
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (i)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" == typeof t && (t = f.from(t, n)),
            f.isBuffer(t))
                return 0 === t.length ? -1 : v(e, t, r, n, i);
            if ("number" == typeof t)
                return t &= 255,
                f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function v(e, t, r, n, i) {
            var a, o = 1, s = e.length, f = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                o = 2,
                s /= 2,
                f /= 2,
                r /= 2
            }
            function c(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            if (i) {
                var d = -1;
                for (a = r; a < s; a++)
                    if (c(e, a) === c(t, -1 === d ? 0 : a - d)) {
                        if (-1 === d && (d = a),
                        a - d + 1 === f)
                            return d * o
                    } else
                        -1 !== d && (a -= a - d),
                        d = -1
            } else
                for (r + f > s && (r = s - f),
                a = r; a >= 0; a--) {
                    for (var h = !0, u = 0; u < f; u++)
                        if (c(e, a + u) !== c(t, u)) {
                            h = !1;
                            break
                        }
                    if (h)
                        return a
                }
            return -1
        }
        function g(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var a = t.length;
            if (a % 2 != 0)
                throw new TypeError("Invalid hex string");
            n > a / 2 && (n = a / 2);
            for (var o = 0; o < n; ++o) {
                var s = parseInt(t.substr(2 * o, 2), 16);
                if (isNaN(s))
                    return o;
                e[r + o] = s
            }
            return o
        }
        function _(e, t, r, n) {
            return H(z(t, e.length - r), e, r, n)
        }
        function w(e, t, r, n) {
            return H(function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }
        function S(e, t, r, n) {
            return w(e, t, r, n)
        }
        function M(e, t, r, n) {
            return H(F(t), e, r, n)
        }
        function k(e, t, r, n) {
            return H(function(e, t) {
                for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                    r = e.charCodeAt(o),
                    n = r >> 8,
                    i = r % 256,
                    a.push(i),
                    a.push(n);
                return a
            }(t, e.length - r), e, r, n)
        }
        function E(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }
        function x(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
                var a, o, s, f, c = e[i], d = null, h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + h <= r)
                    switch (h) {
                    case 1:
                        c < 128 && (d = c);
                        break;
                    case 2:
                        128 == (192 & (a = e[i + 1])) && (f = (31 & c) << 6 | 63 & a) > 127 && (d = f);
                        break;
                    case 3:
                        a = e[i + 1],
                        o = e[i + 2],
                        128 == (192 & a) && 128 == (192 & o) && (f = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (f < 55296 || f > 57343) && (d = f);
                        break;
                    case 4:
                        a = e[i + 1],
                        o = e[i + 2],
                        s = e[i + 3],
                        128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (f = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && f < 1114112 && (d = f)
                    }
                null === d ? (d = 65533,
                h = 1) : d > 65535 && (d -= 65536,
                n.push(d >>> 10 & 1023 | 55296),
                d = 56320 | 1023 & d),
                n.push(d),
                i += h
            }
            return function(e) {
                var t = e.length;
                if (t <= A)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , n = 0;
                for (; n < t; )
                    r += String.fromCharCode.apply(String, e.slice(n, n += A));
                return r
            }(n)
        }
        t.Buffer = f,
        t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return f.alloc(+e)
        }
        ,
        t.INSPECT_MAX_BYTES = 50,
        f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = o(),
        f.poolSize = 8192,
        f._augment = function(e) {
            return e.__proto__ = f.prototype,
            e
        }
        ,
        f.from = function(e, t, r) {
            return c(null, e, t, r)
        }
        ,
        f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype,
        f.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
            value: null,
            configurable: !0
        })),
        f.alloc = function(e, t, r) {
            return function(e, t, r, n) {
                return d(t),
                t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t)
            }(null, e, t, r)
        }
        ,
        f.allocUnsafe = function(e) {
            return h(null, e)
        }
        ,
        f.allocUnsafeSlow = function(e) {
            return h(null, e)
        }
        ,
        f.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        f.compare = function(e, t) {
            if (!f.isBuffer(e) || !f.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                if (e[i] !== t[i]) {
                    r = e[i],
                    n = t[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        f.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        f.concat = function(e, t) {
            if (!a(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return f.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var n = f.allocUnsafe(t)
              , i = 0;
            for (r = 0; r < e.length; ++r) {
                var o = e[r];
                if (!f.isBuffer(o))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(n, i),
                i += o.length
            }
            return n
        }
        ,
        f.byteLength = p,
        f.prototype._isBuffer = !0,
        f.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                m(this, t, t + 1);
            return this
        }
        ,
        f.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                m(this, t, t + 3),
                m(this, t + 1, t + 2);
            return this
        }
        ,
        f.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this
        }
        ,
        f.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : b.apply(this, arguments)
        }
        ,
        f.prototype.equals = function(e) {
            if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === f.compare(this, e)
        }
        ,
        f.prototype.inspect = function() {
            var e = ""
              , r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
            this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        f.prototype.compare = function(e, t, r, n, i) {
            if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && t >= r)
                return 0;
            if (n >= i)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var a = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), s = Math.min(a, o), c = this.slice(n, i), d = e.slice(t, r), h = 0; h < s; ++h)
                if (c[h] !== d[h]) {
                    a = c[h],
                    o = d[h];
                    break
                }
            return a < o ? -1 : o < a ? 1 : 0
        }
        ,
        f.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        f.prototype.indexOf = function(e, t, r) {
            return y(this, e, t, r, !0)
        }
        ,
        f.prototype.lastIndexOf = function(e, t, r) {
            return y(this, e, t, r, !1)
        }
        ,
        f.prototype.write = function(e, t, r, n) {
            if (void 0 === t)
                n = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" == typeof t)
                n = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(r) ? (r |= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || r > i) && (r = i),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var a = !1; ; )
                switch (n) {
                case "hex":
                    return g(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return _(this, e, t, r);
                case "ascii":
                    return w(this, e, t, r);
                case "latin1":
                case "binary":
                    return S(this, e, t, r);
                case "base64":
                    return M(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return k(this, e, t, r);
                default:
                    if (a)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    a = !0
                }
        }
        ,
        f.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var A = 4096;
        function I(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(127 & e[i]);
            return n
        }
        function B(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(e[i]);
            return n
        }
        function T(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", a = t; a < r; ++a)
                i += q(e[a]);
            return i
        }
        function R(e, t, r) {
            for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2)
                i += String.fromCharCode(n[a] + 256 * n[a + 1]);
            return i
        }
        function C(e, t, r) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function P(e, t, r, n, i, a) {
            if (!f.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < a)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length)
                throw new RangeError("Index out of range")
        }
        function j(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i)
                e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }
        function O(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i)
                e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
        }
        function L(e, t, r, n, i, a) {
            if (r + n > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function D(e, t, r, n, a) {
            return a || L(e, 0, r, 4),
            i.write(e, t, r, n, 23, 4),
            r + 4
        }
        function U(e, t, r, n, a) {
            return a || L(e, 0, r, 8),
            i.write(e, t, r, n, 52, 8),
            r + 8
        }
        f.prototype.slice = function(e, t) {
            var r, n = this.length;
            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e),
            f.TYPED_ARRAY_SUPPORT)
                (r = this.subarray(e, t)).__proto__ = f.prototype;
            else {
                var i = t - e;
                r = new f(i,void 0);
                for (var a = 0; a < i; ++a)
                    r[a] = this[a + e]
            }
            return r
        }
        ,
        f.prototype.readUIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
                n += this[e + a] * i;
            return n
        }
        ,
        f.prototype.readUIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                n += this[e + --t] * i;
            return n
        }
        ,
        f.prototype.readUInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            this[e]
        }
        ,
        f.prototype.readUInt16LE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        f.prototype.readUInt16BE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        f.prototype.readUInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        f.prototype.readUInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        f.prototype.readIntLE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
                n += this[e + a] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
            n
        }
        ,
        f.prototype.readIntBE = function(e, t, r) {
            e |= 0,
            t |= 0,
            r || C(e, t, this.length);
            for (var n = t, i = 1, a = this[e + --n]; n > 0 && (i *= 256); )
                a += this[e + --n] * i;
            return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)),
            a
        }
        ,
        f.prototype.readInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        f.prototype.readInt16LE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        f.prototype.readInt16BE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        f.prototype.readInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        f.prototype.readInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        f.prototype.readFloatLE = function(e, t) {
            return t || C(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
        }
        ,
        f.prototype.readFloatBE = function(e, t) {
            return t || C(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
        }
        ,
        f.prototype.readDoubleLE = function(e, t) {
            return t || C(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
        }
        ,
        f.prototype.readDoubleBE = function(e, t) {
            return t || C(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
        }
        ,
        f.prototype.writeUIntLE = function(e, t, r, n) {
            (e = +e,
            t |= 0,
            r |= 0,
            n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , a = 0;
            for (this[t] = 255 & e; ++a < r && (i *= 256); )
                this[t + a] = e / i & 255;
            return t + r
        }
        ,
        f.prototype.writeUIntBE = function(e, t, r, n) {
            (e = +e,
            t |= 0,
            r |= 0,
            n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , a = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                this[t + i] = e / a & 255;
            return t + r
        }
        ,
        f.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 1, 255, 0),
            f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : j(this, e, t, !0),
            t + 2
        }
        ,
        f.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : j(this, e, t, !1),
            t + 2
        }
        ,
        f.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : O(this, e, t, !0),
            t + 4
        }
        ,
        f.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : O(this, e, t, !1),
            t + 4
        }
        ,
        f.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e,
            t |= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, i - 1, -i)
            }
            var a = 0
              , o = 1
              , s = 0;
            for (this[t] = 255 & e; ++a < r && (o *= 256); )
                e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
                this[t + a] = (e / o >> 0) - s & 255;
            return t + r
        }
        ,
        f.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e,
            t |= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, i - 1, -i)
            }
            var a = r - 1
              , o = 1
              , s = 0;
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
                e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
                this[t + a] = (e / o >> 0) - s & 255;
            return t + r
        }
        ,
        f.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 1, 127, -128),
            f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : j(this, e, t, !0),
            t + 2
        }
        ,
        f.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : j(this, e, t, !1),
            t + 2
        }
        ,
        f.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : O(this, e, t, !0),
            t + 4
        }
        ,
        f.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t |= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : O(this, e, t, !1),
            t + 4
        }
        ,
        f.prototype.writeFloatLE = function(e, t, r) {
            return D(this, e, t, !0, r)
        }
        ,
        f.prototype.writeFloatBE = function(e, t, r) {
            return D(this, e, t, !1, r)
        }
        ,
        f.prototype.writeDoubleLE = function(e, t, r) {
            return U(this, e, t, !0, r)
        }
        ,
        f.prototype.writeDoubleBE = function(e, t, r) {
            return U(this, e, t, !1, r)
        }
        ,
        f.prototype.copy = function(e, t, r, n) {
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
            var i, a = n - r;
            if (this === e && r < t && t < n)
                for (i = a - 1; i >= 0; --i)
                    e[i + t] = this[i + r];
            else if (a < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < a; ++i)
                    e[i + t] = this[i + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
            return a
        }
        ,
        f.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t,
                t = 0,
                r = this.length) : "string" == typeof r && (n = r,
                r = this.length),
                1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !f.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var a;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (a = t; a < r; ++a)
                    this[a] = e;
            else {
                var o = f.isBuffer(e) ? e : z(new f(e,n).toString())
                  , s = o.length;
                for (a = 0; a < r - t; ++a)
                    this[a + t] = o[a % s]
            }
            return this
        }
        ;
        var N = /[^+\/0-9A-Za-z-_]/g;
        function q(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function z(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, a = [], o = 0; o < n; ++o) {
                if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === n) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && a.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (t -= 3) > -1 && a.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    a.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    a.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return a
        }
        function F(e) {
            return n.toByteArray(function(e) {
                if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(N, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function H(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                t[i + r] = e[i];
            return i
        }
    }
    ).call(this, r(32))
}
, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return r.call(e, t)
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = {
        request: function(e, t, r, n) {
            $.ajax({
                url: e.url,
                data: e.data || {},
                type: e.type || "GET",
                xhrFields: {
                    withCredentials: !0
                },
                timeout: e.timeout,
                success: function(e) {
                    t && "function" == typeof t && t(e)
                },
                error: function() {
                    r && "function" == typeof r && r()
                },
                complete: function() {
                    n && "function" == typeof n && n()
                }
            })
        }
    }
}
, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t, r) {
        if (n(e),
        void 0 === t)
            return e;
        switch (r) {
        case 1:
            return function(r) {
                return e.call(t, r)
            }
            ;
        case 2:
            return function(r, n) {
                return e.call(t, r, n)
            }
            ;
        case 3:
            return function(r, n, i) {
                return e.call(t, r, n, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, r) {
    var n = r(6)
      , i = r(2).document
      , a = n(i) && n(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}
, function(e, t, r) {
    var n = r(6);
    e.exports = function(e, t) {
        if (!n(e))
            return e;
        var r, i;
        if (t && "function" == typeof (r = e.toString) && !n(i = r.call(e)))
            return i;
        if ("function" == typeof (r = e.valueOf) && !n(i = r.call(e)))
            return i;
        if (!t && "function" == typeof (r = e.toString) && !n(i = r.call(e)))
            return i;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, r) {}
, function(e, t, r) {
    e.exports = !r(4) && !r(7)((function() {
        return 7 != Object.defineProperty(r(21)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, r) {
    "use strict";
    r(42),
    r(43),
    function(t) {
        var r = {
            alert: function(e, n) {
                if (e = e || "") {
                    n = n || {};
                    var i = (n = t.extend({
                        callback: function() {},
                        callbackTime: 1,
                        time: 1,
                        animate: "bounceIn",
                        animateOut: "bounceOut",
                        type: "wrong",
                        width: 200
                    }, n)).time;
                    n.callbackTime;
                    r.notice.close();
                    Math.max(t("body").width(), t(window).width()),
                    Math.max(t("body").height(), t(window).height());
                    var a, o, s = t('<div class="popup level2_alert animated"></div>').css({
                        "margin-left": -n.width / 2
                    });
                    t('<div class="popup_mask"></div>').css({
                        height: "100%",
                        "min-width": "1000px;"
                    }).appendTo(t("body")),
                    t("body").css("overflow", "hidden"),
                    t('<div class="alertContent ' + n.type + '"><i></i>' + e + "</div>").appendTo(s),
                    s.appendTo(t("body")).addClass(n.animate),
                    function(e, n, i) {
                        setTimeout((function() {
                            e.addClass(n.animateOut).delay(1e3).fadeOut(10, (function() {
                                r.notice.close(),
                                t("body").css("overflow", "auto")
                            }
                            ))
                        }
                        ), 1e3 * i)
                    }(s, n, i),
                    a = n.callback,
                    o = n.callbackTime,
                    setTimeout((function() {
                        "string" == typeof a && (location.href = a),
                        "function" == typeof a && a()
                    }
                    ), 1e3 * o)
                }
            },
            loading: function(e, n) {
                e = e || "加载中,请稍后...",
                n = n || {},
                n = t.extend({
                    time: 15e3,
                    type: "loading"
                }, n),
                r.alert(e, n)
            },
            getWeiboInfo: function(e) {
                var r = e.data.name;
                t("#unlogin_User").hide(),
                t("#logined_User").show().find("i").html(r),
                "function" == typeof userInfoCallBack && userInfoCallBack(e.data)
            },
            invite: {
                show: function(e) {
                    r.notice.close();
                    var n = e
                      , i = t('<div class="jury_nbox popup notice_popup animated"></div>').css({
                        width: n.width,
                        height: n.height,
                        "margin-left": -n.width / 2,
                        "margin-top": -n.height / 2
                    }).appendTo(t("body")).addClass(n.animate)
                      , a = Math.max(t("body").width(), t(window).width())
                      , o = Math.max(t("body").height(), t(window).height());
                    n.mask && t('<div class="popup_mask"></div>').css({
                        width: a,
                        height: o
                    }).appendTo(t("body"));
                    var s = t('<div class="popContent"></div>').css("height", n.height).appendTo(i);
                    if (n.title) {
                        t('<div class="popTitle"><h3>' + n.title + "</h3></div>").appendTo(s);
                        t('<div class="popClose" title="关闭"></div>').appendTo(s).on("click", (function() {
                            r.notice.close(n.animateOut),
                            n.reload && window.location.reload()
                        }
                        ))
                    }
                    var f = t('<div class="popInner"></div>').appendTo(s);
                    t('<div class="jury-form"><h3>第1步：选择帮帮官</h3>\n                                 <div class="jury_blk">\n                                    <form class="jury-type">\n                                       <p class="check-label"><span class="checkbox-ico"><input type="radio" name="lawer" value="3"/></span>律师<span class="jury_note">（可提供专业建议）</span></p>\n                                       <p class="check-label"><span class="checkbox-ico"><input type="radio" name="media" value="4"/></span>媒体<span class="jury_note">（有机会提高曝光）</span></p>\n                                    </form>\n                                    <div class="jury_nlist invite_list">\n                                       <p class="jury_note">注：每次可邀请1个帮帮官，最多能邀请2次。</p>\n                                       <form class="jury-invite"></form>\n                                    </div>\n                                 </div>\n                                 <div class="jury_nodiv">\n                                 <h3 class="step2">第2步：填写邀请理由<span class="jury_note">注：请向帮帮官简单描述目前纠纷的主要问题以及你最想得到哪方面的帮助</span></h3></h3>\n                                 <div class="jury-reason ts-item"><textarea id="jury_invite_reason" name="content" verify-words="0,100" verify-warning="邀请理由不能为空" class="jury-area" placeholder="填写邀请理由"></textarea>\n                                 <div class="clearfix"><div class="ts-textarea-num"><i id="jury_invite_reason_tip" class="">0</i>/100</div><span class="js-msg-clear ts-input-delete" title="清空"></span></div></div>\n                              </div></div>').appendTo(f);
                    if (0 == n.btn)
                        ;
                    else {
                        var c = t('<div class="pbtn"><span class="popCancel ' + n.cancelWClass + '">' + n.cancelW + '</span><span class="popConform">' + n.confirmW + "</span></div>").appendTo(f);
                        n.noCancelBtn && c.find(".popCancel").remove(),
                        c.on("click", ".popCancel", (function() {
                            r.notice._close(n.animateOut, (function() {
                                n.oncancel && n.oncancel(i)
                            }
                            ))
                        }
                        )).on("click", ".popConform", (function() {
                            n.callback()
                        }
                        ))
                    }
                    n.oncomplete && n.oncomplete(i)
                },
                close: function() {
                    t(".popup").remove(),
                    t(".popup_mask").remove()
                },
                _close: function(e, r) {
                    t(".popup").addClass(e).delay(1e3).fadeOut(10, (function() {
                        t(".popup").empty().remove(),
                        r && r.call()
                    }
                    )),
                    t(".popup_mask").animate({
                        opacity: 0
                    }, 1e3, (function() {
                        t(".popup_mask").remove()
                    }
                    ))
                }
            },
            notice: {
                show: function(e, n) {
                    r.notice.close();
                    var i = n
                      , a = t('<div class="popup notice_popup animated"></div>');
                    "top" == i.position && (a = t('<div class="popup notice_popup animated top_popup"></div>'));
                    var o = a.css({
                        width: i.width,
                        height: i.height,
                        "margin-left": -i.width / 2,
                        "margin-top": -i.height / 2
                    }).appendTo(t("body")).addClass(i.animate)
                      , s = Math.max(t("body").width(), t(window).width())
                      , f = Math.max(t("body").height(), t(window).height());
                    i.mask && t('<div class="popup_mask"></div>').css({
                        width: s,
                        height: f
                    }).appendTo(t("body"));
                    var c = t('<div class="popContent"></div>').css("height", i.height).appendTo(o);
                    if (i.title) {
                        t('<div class="popTitle"><h3>' + i.title + "</h3></div>").appendTo(c);
                        t('<div class="popClose" title="关闭"></div>').appendTo(c).on("click", (function() {
                            i.onclose && i.onclose(o),
                            r.notice.close(i.animateOut),
                            i.reload && window.location.reload()
                        }
                        ))
                    }
                    var d = t('<div class="popInner"></div>').appendTo(c);
                    t('<div class="p ' + i.type + '">' + e + "</div>").appendTo(d);
                    if (0 == i.btn)
                        ;
                    else {
                        var h = t('<div class="pbtn"><span class="popCancel ' + i.cancelWClass + '">' + i.cancelW + '</span><span class="popConform">' + i.confirmW + "</span></div>").appendTo(d);
                        i.noCancelBtn && h.find(".popCancel").remove(),
                        h.on("click", ".popCancel", (function() {
                            r.notice._close(i.animateOut, (function() {
                                i.oncancel && i.oncancel(o)
                            }
                            ))
                        }
                        )).on("click", ".popConform", (function() {
                            i.callback && i.callback(o)
                        }
                        ))
                    }
                    i.oncomplete && i.oncomplete(o)
                },
                close: function() {
                    t(".popup").remove(),
                    t(".popup_mask").remove()
                },
                _close: function(e, r) {
                    t(".popup").addClass(e).delay(1e3).fadeOut(10, (function() {
                        t(".popup").empty().remove(),
                        r && r.call()
                    }
                    )),
                    t(".popup_mask").animate({
                        opacity: 0
                    }, 1e3, (function() {
                        t(".popup_mask").remove()
                    }
                    ))
                }
            },
            dialog: {
                open: function(e) {
                    r.notice.close();
                    var n = t.extend({
                        url: "",
                        width: 350,
                        height: 200,
                        mask: 1
                    }, e)
                      , i = t('<div class="popup dialog_popup"></div>').css({
                        width: n.width,
                        height: n.height,
                        "margin-left": -n.width / 2,
                        "margin-top": -n.height / 2
                    }).appendTo(t("body"))
                      , a = Math.max(t("body").width(), t(window).width())
                      , o = Math.max(t("body").height(), t(window).height());
                    n.mask && t('<div class="popup_mask"></div>').css({
                        width: a,
                        height: o
                    }).appendTo(t("body"));
                    var s = t('<div class="popContent"></div>').css("height", n.height).appendTo(i)
                      , f = t('<div class="popClose" title="关闭"></div>').appendTo(s);
                    t('<iframe frameborder="0" width="' + n.width + '" height="' + n.height + '" scrolling="no" ></iframe>').attr("src", n.url).appendTo(s),
                    f.on("click", (function() {
                        r.notice.close()
                    }
                    ))
                },
                close: function() {
                    t(".popup").empty().remove(),
                    t(".popup_mask").empty().remove()
                }
            },
            kick: function(e) {
                e = t.extend({
                    width: 450,
                    height: 200,
                    type: "notice",
                    title: "信息内容"
                }, e),
                _aLvl2.widgets.notice.show(e.title, {
                    width: e.width,
                    height: e.height,
                    type: e.type,
                    callback: function() {
                        webcfg.isKick = !0,
                        _aLvl2.pageLoad.pageloaded = !1,
                        _aLvl2.pageLoad._init("kick")
                    }
                })
            }
        }
          , n = {
            widgets: r
        };
        e.exports = n.widgets
    }(jQuery)
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t) {
    function r(e, t) {
        if (!e)
            throw new Error(t || "Assertion failed")
    }
    e.exports = r,
    r.equal = function(e, t, r) {
        if (e != t)
            throw new Error(r || "Assertion failed: " + e + " != " + t)
    }
}
, function(e, t, r) {
    "use strict";
    var n = t
      , i = r(10)
      , a = r(27)
      , o = r(125);
    n.assert = a,
    n.toArray = o.toArray,
    n.zero2 = o.zero2,
    n.toHex = o.toHex,
    n.encode = o.encode,
    n.getNAF = function(e, t, r) {
        var n = new Array(Math.max(e.bitLength(), r) + 1);
        n.fill(0);
        for (var i = 1 << t + 1, a = e.clone(), o = 0; o < n.length; o++) {
            var s, f = a.andln(i - 1);
            a.isOdd() ? (s = f > (i >> 1) - 1 ? (i >> 1) - f : f,
            a.isubn(s)) : s = 0,
            n[o] = s,
            a.iushrn(1)
        }
        return n
    }
    ,
    n.getJSF = function(e, t) {
        var r = [[], []];
        e = e.clone(),
        t = t.clone();
        for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
            var a, o, s, f = e.andln(3) + n & 3, c = t.andln(3) + i & 3;
            if (3 === f && (f = -1),
            3 === c && (c = -1),
            0 == (1 & f))
                a = 0;
            else
                a = 3 !== (s = e.andln(7) + n & 7) && 5 !== s || 2 !== c ? f : -f;
            if (r[0].push(a),
            0 == (1 & c))
                o = 0;
            else
                o = 3 !== (s = t.andln(7) + i & 7) && 5 !== s || 2 !== f ? c : -c;
            r[1].push(o),
            2 * n === a + 1 && (n = 1 - n),
            2 * i === o + 1 && (i = 1 - i),
            e.iushrn(1),
            t.iushrn(1)
        }
        return r
    }
    ,
    n.cachedProperty = function(e, t, r) {
        var n = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
        }
    }
    ,
    n.parseBytes = function(e) {
        return "string" == typeof e ? n.toArray(e, "hex") : e
    }
    ,
    n.intFromLE = function(e) {
        return new i(e,"hex","le")
    }
}
, function(e, t, r) {
    e.exports = r(36)
}
, , function(e, t, r) {
    "use strict";
    var n = r(8)(r(39))
      , i = {
        name: "Lang",
        version: 1,
        strLen: function(e) {
            return e.replace(/[^\x00-\xff]/g, "**").length
        },
        getUrlSearch: function(e, t) {
            var r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
              , n = e.slice(e.indexOf("?") + 1).match(r);
            if (null != n)
                try {
                    return decodeURIComponent(n[2])
                } catch (e) {
                    return null
                }
            return null
        },
        formatTime: function(e, t, r) {
            var a, o, s;
            return e = +e,
            t ? (a = (0,
            n.default)() - e) < 0 ? (s = new Date(e),
            o = i.completeZero(s.getMonth() + 1) + "-" + i.completeZero(s.getDate()) + " " + i.completeZero(s.getHours()) + ":" + i.completeZero(s.getMinutes())) : a < 6e4 ? o = "一分钟内" : a < 36e5 ? o = (a / 60 / 1e3 | 0) + "分钟前" : a < 864e5 ? o = (a / 60 / 60 / 1e3 | 0) + "小时前" : (s = new Date(e),
            o = r ? i.completeZero(s.getMonth() + 1) + "-" + i.completeZero(s.getDate()) + " " + i.completeZero(s.getHours()) + ":" + i.completeZero(s.getMinutes()) : i.completeZero(s.getMonth() + 1) + "-" + i.completeZero(s.getDate())) : (s = new Date(e),
            o = r ? s.getFullYear() + "-" + i.completeZero(s.getMonth() + 1) + "-" + i.completeZero(s.getDate()) + " " + i.completeZero(s.getHours()) + ":" + i.completeZero(s.getMinutes()) + ":" + i.completeZero(s.getSeconds()) : s.getFullYear() + "-" + i.completeZero(s.getMonth() + 1) + "-" + i.completeZero(s.getDate())),
            o
        },
        completeZero: function(e, t) {
            var r = (e += "").length;
            return r < (t = t || 2) && (e = (Math.pow(10, t - r) + "").substring(1) + e),
            e
        },
        addUrlComponent: function(e, t, r) {
            var n = e.indexOf("#")
              , i = "";
            return n >= 0 && (i = e.substr(n),
            e = e.substr(0, n)),
            e + (e.indexOf("?") < 0 ? "?" : "&") + t + "=" + r + i
        },
        throttle: function(e, t, r) {
            var n, i = Array.prototype.slice.call(arguments, 3);
            return r = void 0 !== r ? r : 20,
            function() {
                t = t || this,
                clearTimeout(n),
                n = setTimeout((function() {
                    clearTimeout(n),
                    e.apply(t, i)
                }
                ), r)
            }
        },
        correctNum: function(e, t) {
            var r, n, i, a, o, s, f = t;
            return void 0 === t ? {
                num: e,
                str: e + ""
            } : (n = (r = Math.abs(+e)) * Math.pow(10, f) | 0,
            i = (r * Math.pow(10, f + 1) | 0) - 10 * n > 4 ? (n + 1) / Math.pow(10, f) : n / Math.pow(10, f),
            a = (i *= e < 0 ? -1 : 1) + "",
            f > 0 && ((o = a.indexOf(".")) < 0 ? (a += ".",
            s = f) : s = f - a.substring(o + 1).length,
            a += (Math.pow(10, s) + "").substring(1)),
            {
                num: i,
                str: a
            })
        },
        encodeDangerousCharacterToHTMLEntity: function(e) {
            try {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
            } catch (t) {
                throw new TypeError(e)
            }
        },
        removeProtocol: function(e) {
            if (!e)
                return e;
            try {
                return e.replace(/^http(|s):/, "")
            } catch (t) {
                return e
            }
        }
    };
    e.exports = i
}
, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}
, function(e, t, r) {
    "use strict";
    var n = r(27)
      , i = r(0);
    function a(e, t) {
        return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
    }
    function o(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }
    function s(e) {
        return 1 === e.length ? "0" + e : e
    }
    function f(e) {
        return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
    }
    t.inherits = i,
    t.toArray = function(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var r = [];
        if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e),
                    i = 0; i < e.length; i += 2)
                        r.push(parseInt(e[i] + e[i + 1], 16))
            } else
                for (var n = 0, i = 0; i < e.length; i++) {
                    var o = e.charCodeAt(i);
                    o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192,
                    r[n++] = 63 & o | 128) : a(e, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++i)),
                    r[n++] = o >> 18 | 240,
                    r[n++] = o >> 12 & 63 | 128,
                    r[n++] = o >> 6 & 63 | 128,
                    r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224,
                    r[n++] = o >> 6 & 63 | 128,
                    r[n++] = 63 & o | 128)
                }
        else
            for (i = 0; i < e.length; i++)
                r[i] = 0 | e[i];
        return r
    }
    ,
    t.toHex = function(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t += s(e[r].toString(16));
        return t
    }
    ,
    t.htonl = o,
    t.toHex32 = function(e, t) {
        for (var r = "", n = 0; n < e.length; n++) {
            var i = e[n];
            "little" === t && (i = o(i)),
            r += f(i.toString(16))
        }
        return r
    }
    ,
    t.zero2 = s,
    t.zero8 = f,
    t.join32 = function(e, t, r, i) {
        var a = r - t;
        n(a % 4 == 0);
        for (var o = new Array(a / 4), s = 0, f = t; s < o.length; s++,
        f += 4) {
            var c;
            c = "big" === i ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f],
            o[s] = c >>> 0
        }
        return o
    }
    ,
    t.split32 = function(e, t) {
        for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++,
        i += 4) {
            var a = e[n];
            "big" === t ? (r[i] = a >>> 24,
            r[i + 1] = a >>> 16 & 255,
            r[i + 2] = a >>> 8 & 255,
            r[i + 3] = 255 & a) : (r[i + 3] = a >>> 24,
            r[i + 2] = a >>> 16 & 255,
            r[i + 1] = a >>> 8 & 255,
            r[i] = 255 & a)
        }
        return r
    }
    ,
    t.rotr32 = function(e, t) {
        return e >>> t | e << 32 - t
    }
    ,
    t.rotl32 = function(e, t) {
        return e << t | e >>> 32 - t
    }
    ,
    t.sum32 = function(e, t) {
        return e + t >>> 0
    }
    ,
    t.sum32_3 = function(e, t, r) {
        return e + t + r >>> 0
    }
    ,
    t.sum32_4 = function(e, t, r, n) {
        return e + t + r + n >>> 0
    }
    ,
    t.sum32_5 = function(e, t, r, n, i) {
        return e + t + r + n + i >>> 0
    }
    ,
    t.sum64 = function(e, t, r, n) {
        var i = e[t]
          , a = n + e[t + 1] >>> 0
          , o = (a < n ? 1 : 0) + r + i;
        e[t] = o >>> 0,
        e[t + 1] = a
    }
    ,
    t.sum64_hi = function(e, t, r, n) {
        return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
    }
    ,
    t.sum64_lo = function(e, t, r, n) {
        return t + n >>> 0
    }
    ,
    t.sum64_4_hi = function(e, t, r, n, i, a, o, s) {
        var f = 0
          , c = t;
        return f += (c = c + n >>> 0) < t ? 1 : 0,
        f += (c = c + a >>> 0) < a ? 1 : 0,
        e + r + i + o + (f += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
    }
    ,
    t.sum64_4_lo = function(e, t, r, n, i, a, o, s) {
        return t + n + a + s >>> 0
    }
    ,
    t.sum64_5_hi = function(e, t, r, n, i, a, o, s, f, c) {
        var d = 0
          , h = t;
        return d += (h = h + n >>> 0) < t ? 1 : 0,
        d += (h = h + a >>> 0) < a ? 1 : 0,
        d += (h = h + s >>> 0) < s ? 1 : 0,
        e + r + i + o + f + (d += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
    }
    ,
    t.sum64_5_lo = function(e, t, r, n, i, a, o, s, f, c) {
        return t + n + a + s + c >>> 0
    }
    ,
    t.rotr64_hi = function(e, t, r) {
        return (t << 32 - r | e >>> r) >>> 0
    }
    ,
    t.rotr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }
    ,
    t.shr64_hi = function(e, t, r) {
        return e >>> r
    }
    ,
    t.shr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }
}
, function(e, t, r) {
    var n = r(5)
      , i = r(26)
      , a = r(7)
      , o = r(17)
      , s = "[" + o + "]"
      , f = RegExp("^" + s + s + "*")
      , c = RegExp(s + s + "*$")
      , d = function(e, t, r) {
        var i = {}
          , s = a((function() {
            return !!o[e]() || "​" != "​"[e]()
        }
        ))
          , f = i[e] = s ? t(h) : o[e];
        r && (i[r] = f),
        n(n.P + n.F * s, "String", i)
    }
      , h = d.trim = function(e, t) {
        return e = String(i(e)),
        1 & t && (e = e.replace(f, "")),
        2 & t && (e = e.replace(c, "")),
        e
    }
    ;
    e.exports = d
}
, function(e, t, r) {}
, function(e, t, r) {
    r(37),
    e.exports = r(3).parseInt
}
, function(e, t, r) {
    var n = r(5)
      , i = r(38);
    n(n.G + n.F * (parseInt != i), {
        parseInt: i
    })
}
, function(e, t, r) {
    var n = r(2).parseInt
      , i = r(34).trim
      , a = r(17)
      , o = /^[-+]?0[xX]/;
    e.exports = 8 !== n(a + "08") || 22 !== n(a + "0x16") ? function(e, t) {
        var r = i(String(e), 3);
        return n(r, t >>> 0 || (o.test(r) ? 16 : 10))
    }
    : n
}
, function(e, t, r) {
    e.exports = r(44)
}
, function(e, t) {
    var r, n, i = e.exports = {};
    function a() {
        throw new Error("setTimeout has not been defined")
    }
    function o() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (r === setTimeout)
            return setTimeout(e, 0);
        if ((r === a || !r) && setTimeout)
            return r = setTimeout,
            setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            r = a
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            n = o
        }
    }();
    var f, c = [], d = !1, h = -1;
    function u() {
        d && f && (d = !1,
        f.length ? c = f.concat(c) : h = -1,
        c.length && l())
    }
    function l() {
        if (!d) {
            var e = s(u);
            d = !0;
            for (var t = c.length; t; ) {
                for (f = c,
                c = []; ++h < t; )
                    f && f[h].run();
                h = -1,
                t = c.length
            }
            f = null,
            d = !1,
            function(e) {
                if (n === clearTimeout)
                    return clearTimeout(e);
                if ((n === o || !n) && clearTimeout)
                    return n = clearTimeout,
                    clearTimeout(e);
                try {
                    n(e)
                } catch (t) {
                    try {
                        return n.call(null, e)
                    } catch (t) {
                        return n.call(this, e)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function b() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
        c.push(new p(e,t)),
        1 !== c.length || d || s(l)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = b,
    i.addListener = b,
    i.once = b,
    i.off = b,
    i.removeListener = b,
    i.removeAllListeners = b,
    i.emit = b,
    i.prependListener = b,
    i.prependOnceListener = b,
    i.listeners = function(e) {
        return []
    }
    ,
    i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, function(e, t, r) {
    var n = r(1).Buffer
      , i = r(77).Transform
      , a = r(81).StringDecoder;
    function o(e) {
        i.call(this),
        this.hashMode = "string" == typeof e,
        this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest,
        this._final && (this.__final = this._final,
        this._final = null),
        this._decoder = null,
        this._encoding = null
    }
    r(0)(o, i),
    o.prototype.update = function(e, t, r) {
        "string" == typeof e && (e = n.from(e, t));
        var i = this._update(e);
        return this.hashMode ? this : (r && (i = this._toString(i, r)),
        i)
    }
    ,
    o.prototype.setAutoPadding = function() {}
    ,
    o.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }
    ,
    o.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }
    ,
    o.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }
    ,
    o.prototype._transform = function(e, t, r) {
        var n;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
        } catch (e) {
            n = e
        } finally {
            r(n)
        }
    }
    ,
    o.prototype._flush = function(e) {
        var t;
        try {
            this.push(this.__final())
        } catch (e) {
            t = e
        }
        e(t)
    }
    ,
    o.prototype._finalOrDigest = function(e) {
        var t = this.__final() || n.alloc(0);
        return e && (t = this._toString(t, e, !0)),
        t
    }
    ,
    o.prototype._toString = function(e, t, r) {
        if (this._decoder || (this._decoder = new a(t),
        this._encoding = t),
        this._encoding !== t)
            throw new Error("can't switch encodings");
        var n = this._decoder.write(e);
        return r && (n += this._decoder.end()),
        n
    }
    ,
    e.exports = o
}
, function(e, t, r) {}
, function(e, t, r) {}
, function(e, t, r) {
    r(45),
    e.exports = r(3).Date.now
}
, function(e, t, r) {
    var n = r(5);
    n(n.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}
, function(e, t) {
    !function() {
        function t(e, t) {
            return (/string|function/.test(typeof t) ? a : i)(e, t)
        }
        function r(e, t) {
            return "string" != typeof e && ("number" === (t = typeof e) ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
            e
        }
        function n(e) {
            return c[e]
        }
        function i(e, r) {
            var n = t.get(e) || o({
                filename: e,
                name: "Render Error",
                message: "Template not found"
            });
            return r ? n(r) : n
        }
        function a(e, t) {
            if ("string" == typeof t) {
                var r = t;
                t = function() {
                    return new f(r)
                }
            }
            var n = s[e] = function(r) {
                try {
                    return new t(r,e) + ""
                } catch (e) {
                    return o(e)()
                }
            }
            ;
            return n.prototype = t.prototype = h,
            n.toString = function() {
                return t + ""
            }
            ,
            n
        }
        function o(e) {
            var t = "{Template Error}"
              , r = e.stack || "";
            if (r)
                r = r.split("\n").slice(0, 2).join("\n");
            else
                for (var n in e)
                    r += "<" + n + ">\n" + e[n] + "\n\n";
            return function() {
                return "object" == typeof console && console.error(t + "\n\n" + r),
                t
            }
        }
        var s = t.cache = {}
          , f = this.String
          , c = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        }
          , d = Array.isArray || function(e) {
            return "[object Array]" === {}.toString.call(e)
        }
          , h = t.utils = {
            $helpers: {},
            $include: function(e, t, r) {
                return i(e = function(e, t) {
                    var r = /(\/)[^\/]+\1\.\.\1/
                      , n = ("./" + e).replace(/[^\/]+$/, "") + t;
                    for (n = n.replace(/\/\.\//g, "/"); n.match(r); )
                        n = n.replace(r, "/");
                    return n
                }(r, e), t)
            },
            $string: r,
            $escape: function(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, n)
            },
            $each: function(e, t) {
                if (d(e))
                    for (var r = 0, n = e.length; n > r; r++)
                        t.call(e, e[r], r, e);
                else
                    for (r in e)
                        t.call(e, e[r], r)
            }
        }
          , u = t.helpers = h.$helpers;
        t.get = function(e) {
            return s[e.replace(/^\.\//, "")]
        }
        ,
        t.helper = function(e, t) {
            u[e] = t
        }
        ,
        e.exports = t
    }()
}
, function(e, t, r) {
    "use strict";
    var n = r(62)
      , i = Object.keys || function(e) {
        var t = [];
        for (var r in e)
            t.push(r);
        return t
    }
    ;
    e.exports = h;
    var a = r(52);
    a.inherits = r(0);
    var o = r(103)
      , s = r(80);
    a.inherits(h, o);
    for (var f = i(s.prototype), c = 0; c < f.length; c++) {
        var d = f[c];
        h.prototype[d] || (h.prototype[d] = s.prototype[d])
    }
    function h(e) {
        if (!(this instanceof h))
            return new h(e);
        o.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", u)
    }
    function u() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this)
    }
    function l(e) {
        e.end()
    }
    Object.defineProperty(h.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(h.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
            this._writableState.destroyed = e)
        }
    }),
    h.prototype._destroy = function(e, t) {
        this.push(null),
        this.end(),
        n.nextTick(t, e)
    }
}
, function(e, t, r) {
    "use strict";
    (function(t, n) {
        var i = 65536
          , a = 4294967295;
        var o = r(1).Buffer
          , s = t.crypto || t.msCrypto;
        s && s.getRandomValues ? e.exports = function(e, t) {
            if (e > a)
                throw new RangeError("requested too many random bytes");
            var r = o.allocUnsafe(e);
            if (e > 0)
                if (e > i)
                    for (var f = 0; f < e; f += i)
                        s.getRandomValues(r.slice(f, f + i));
                else
                    s.getRandomValues(r);
            if ("function" == typeof t)
                return n.nextTick((function() {
                    t(null, r)
                }
                ));
            return r
        }
        : e.exports = function() {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
    }
    ).call(this, r(32), r(40))
}
, function(e, t, r) {
    var n = r(1).Buffer;
    function i(e, t) {
        this._block = n.alloc(e),
        this._finalSize = t,
        this._blockSize = e,
        this._len = 0
    }
    i.prototype.update = function(e, t) {
        "string" == typeof e && (t = t || "utf8",
        e = n.from(e, t));
        for (var r = this._block, i = this._blockSize, a = e.length, o = this._len, s = 0; s < a; ) {
            for (var f = o % i, c = Math.min(a - s, i - f), d = 0; d < c; d++)
                r[f + d] = e[s + d];
            s += c,
            (o += c) % i == 0 && this._update(r)
        }
        return this._len += a,
        this
    }
    ,
    i.prototype.digest = function(e) {
        var t = this._len % this._blockSize;
        this._block[t] = 128,
        this._block.fill(0, t + 1),
        t >= this._finalSize && (this._update(this._block),
        this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var n = (4294967295 & r) >>> 0
              , i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
            this._block.writeUInt32BE(n, this._blockSize - 4)
        }
        this._update(this._block);
        var a = this._hash();
        return e ? a.toString(e) : a
    }
    ,
    i.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }
    ,
    e.exports = i
}
, , function(e, t, r) {
    "use strict";
    var n = r(0)
      , i = r(76)
      , a = r(82)
      , o = r(83)
      , s = r(41);
    function f(e) {
        s.call(this, "digest"),
        this._hash = e
    }
    n(f, s),
    f.prototype._update = function(e) {
        this._hash.update(e)
    }
    ,
    f.prototype._final = function() {
        return this._hash.digest()
    }
    ,
    e.exports = function(e) {
        return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new a : new f(o(e))
    }
}
, function(e, t, r) {
    (function(e) {
        function r(e) {
            return Object.prototype.toString.call(e)
        }
        t.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e)
        }
        ,
        t.isBoolean = function(e) {
            return "boolean" == typeof e
        }
        ,
        t.isNull = function(e) {
            return null === e
        }
        ,
        t.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        t.isNumber = function(e) {
            return "number" == typeof e
        }
        ,
        t.isString = function(e) {
            return "string" == typeof e
        }
        ,
        t.isSymbol = function(e) {
            return "symbol" == typeof e
        }
        ,
        t.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        t.isRegExp = function(e) {
            return "[object RegExp]" === r(e)
        }
        ,
        t.isObject = function(e) {
            return "object" == typeof e && null !== e
        }
        ,
        t.isDate = function(e) {
            return "[object Date]" === r(e)
        }
        ,
        t.isError = function(e) {
            return "[object Error]" === r(e) || e instanceof Error
        }
        ,
        t.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }
        ,
        t.isBuffer = e.isBuffer
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    (function(t) {
        e.exports = function(e, r) {
            for (var n = Math.min(e.length, r.length), i = new t(n), a = 0; a < n; ++a)
                i[a] = e[a] ^ r[a];
            return i
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(27);
    function a() {
        this.pending = null,
        this.pendingTotal = 0,
        this.blockSize = this.constructor.blockSize,
        this.outSize = this.constructor.outSize,
        this.hmacStrength = this.constructor.hmacStrength,
        this.padLength = this.constructor.padLength / 8,
        this.endian = "big",
        this._delta8 = this.blockSize / 8,
        this._delta32 = this.blockSize / 32
    }
    t.BlockHash = a,
    a.prototype.update = function(e, t) {
        if (e = n.toArray(e, t),
        this.pending ? this.pending = this.pending.concat(e) : this.pending = e,
        this.pendingTotal += e.length,
        this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length),
            0 === this.pending.length && (this.pending = null),
            e = n.join32(e, 0, e.length - r, this.endian);
            for (var i = 0; i < e.length; i += this._delta32)
                this._update(e, i, i + this._delta32)
        }
        return this
    }
    ,
    a.prototype.digest = function(e) {
        return this.update(this._pad()),
        i(null === this.pending),
        this._digest(e)
    }
    ,
    a.prototype._pad = function() {
        var e = this.pendingTotal
          , t = this._delta8
          , r = t - (e + this.padLength) % t
          , n = new Array(r + this.padLength);
        n[0] = 128;
        for (var i = 1; i < r; i++)
            n[i] = 0;
        if (e <<= 3,
        "big" === this.endian) {
            for (var a = 8; a < this.padLength; a++)
                n[i++] = 0;
            n[i++] = 0,
            n[i++] = 0,
            n[i++] = 0,
            n[i++] = 0,
            n[i++] = e >>> 24 & 255,
            n[i++] = e >>> 16 & 255,
            n[i++] = e >>> 8 & 255,
            n[i++] = 255 & e
        } else
            for (n[i++] = 255 & e,
            n[i++] = e >>> 8 & 255,
            n[i++] = e >>> 16 & 255,
            n[i++] = e >>> 24 & 255,
            n[i++] = 0,
            n[i++] = 0,
            n[i++] = 0,
            n[i++] = 0,
            a = 8; a < this.padLength; a++)
                n[i++] = 0;
        return n
    }
}
, function(e, t, r) {
    var n = t;
    n.bignum = r(10),
    n.define = r(238).define,
    n.base = r(56),
    n.constants = r(131),
    n.decoders = r(243),
    n.encoders = r(245)
}
, function(e, t, r) {
    var n = t;
    n.Reporter = r(240).Reporter,
    n.DecoderBuffer = r(130).DecoderBuffer,
    n.EncoderBuffer = r(130).EncoderBuffer,
    n.Node = r(241)
}
, function(e, t, r) {
    "use strict";
    var n = r(8)(r(29))
      , i = r(16)
      , a = r(9);
    e.exports = function(e, t) {
        e && e.length && t && function(e, t) {
            e.off("click.praise").on("click.praise", (function(e) {
                if (window.SINA_OUTLOGIN_LAYER.isLogin()) {
                    var r = $(e.currentTarget)
                      , o = (0,
                    n.default)($.trim(r.text()) || 0)
                      , s = r.parent().data("rid") || ""
                      , f = {
                        option: {
                            url: a.PRAISE,
                            data: {
                                type: t,
                                rid: s
                            },
                            type: "POST",
                            dataType: "json",
                            timeout: 1e4
                        },
                        successCb: function(e) {
                            var t = e.result;
                            if (t) {
                                t.data;
                                var n = t.status;
                                n && 0 === n.code ? r.hasClass("select") ? (r.removeClass("select"),
                                r.html('<i class="icon-code-3"></i>' + (o - 1))) : (r.addClass("select"),
                                r.html('<i class="icon-code-3"></i>' + (o + 1))) : alert("请稍后再试")
                            }
                        },
                        errCb: function(e) {
                            alert("请稍后再试")
                        }
                    };
                    i.request(f.option, f.successCb, f.errCb, null)
                } else
                    alert("请先登录")
            }
            ))
        }(e, t)
    }
}
, , , , , function(e, t, r) {
    "use strict";
    (function(t) {
        void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
            nextTick: function(e, r, n, i) {
                if ("function" != typeof e)
                    throw new TypeError('"callback" argument must be a function');
                var a, o, s = arguments.length;
                switch (s) {
                case 0:
                case 1:
                    return t.nextTick(e);
                case 2:
                    return t.nextTick((function() {
                        e.call(null, r)
                    }
                    ));
                case 3:
                    return t.nextTick((function() {
                        e.call(null, r, n)
                    }
                    ));
                case 4:
                    return t.nextTick((function() {
                        e.call(null, r, n, i)
                    }
                    ));
                default:
                    for (a = new Array(s - 1),
                    o = 0; o < a.length; )
                        a[o++] = arguments[o];
                    return t.nextTick((function() {
                        e.apply(null, a)
                    }
                    ))
                }
            }
        } : e.exports = t
    }
    ).call(this, r(40))
}
, function(e, t, r) {
    var n = r(1).Buffer;
    function i(e) {
        n.isBuffer(e) || (e = n.from(e));
        for (var t = e.length / 4 | 0, r = new Array(t), i = 0; i < t; i++)
            r[i] = e.readUInt32BE(4 * i);
        return r
    }
    function a(e) {
        for (; 0 < e.length; e++)
            e[0] = 0
    }
    function o(e, t, r, n, i) {
        for (var a, o, s, f, c = r[0], d = r[1], h = r[2], u = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], m = e[3] ^ t[3], y = 4, v = 1; v < i; v++)
            a = c[l >>> 24] ^ d[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ u[255 & m] ^ t[y++],
            o = c[p >>> 24] ^ d[b >>> 16 & 255] ^ h[m >>> 8 & 255] ^ u[255 & l] ^ t[y++],
            s = c[b >>> 24] ^ d[m >>> 16 & 255] ^ h[l >>> 8 & 255] ^ u[255 & p] ^ t[y++],
            f = c[m >>> 24] ^ d[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ u[255 & b] ^ t[y++],
            l = a,
            p = o,
            b = s,
            m = f;
        return a = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & m]) ^ t[y++],
        o = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[m >>> 8 & 255] << 8 | n[255 & l]) ^ t[y++],
        s = (n[b >>> 24] << 24 | n[m >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[y++],
        f = (n[m >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[y++],
        [a >>>= 0, o >>>= 0, s >>>= 0, f >>>= 0]
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , f = function() {
        for (var e = new Array(256), t = 0; t < 256; t++)
            e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        for (var r = [], n = [], i = [[], [], [], []], a = [[], [], [], []], o = 0, s = 0, f = 0; f < 256; ++f) {
            var c = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
            c = c >>> 8 ^ 255 & c ^ 99,
            r[o] = c,
            n[c] = o;
            var d = e[o]
              , h = e[d]
              , u = e[h]
              , l = 257 * e[c] ^ 16843008 * c;
            i[0][o] = l << 24 | l >>> 8,
            i[1][o] = l << 16 | l >>> 16,
            i[2][o] = l << 8 | l >>> 24,
            i[3][o] = l,
            l = 16843009 * u ^ 65537 * h ^ 257 * d ^ 16843008 * o,
            a[0][c] = l << 24 | l >>> 8,
            a[1][c] = l << 16 | l >>> 16,
            a[2][c] = l << 8 | l >>> 24,
            a[3][c] = l,
            0 === o ? o = s = 1 : (o = d ^ e[e[e[u ^ d]]],
            s ^= e[e[s]])
        }
        return {
            SBOX: r,
            INV_SBOX: n,
            SUB_MIX: i,
            INV_SUB_MIX: a
        }
    }();
    function c(e) {
        this._key = i(e),
        this._reset()
    }
    c.blockSize = 16,
    c.keySize = 32,
    c.prototype.blockSize = c.blockSize,
    c.prototype.keySize = c.keySize,
    c.prototype._reset = function() {
        for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], a = 0; a < t; a++)
            i[a] = e[a];
        for (a = t; a < n; a++) {
            var o = i[a - 1];
            a % t == 0 ? (o = o << 8 | o >>> 24,
            o = f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o],
            o ^= s[a / t | 0] << 24) : t > 6 && a % t == 4 && (o = f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o]),
            i[a] = i[a - t] ^ o
        }
        for (var c = [], d = 0; d < n; d++) {
            var h = n - d
              , u = i[h - (d % 4 ? 0 : 4)];
            c[d] = d < 4 || h <= 4 ? u : f.INV_SUB_MIX[0][f.SBOX[u >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[u >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[u >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & u]]
        }
        this._nRounds = r,
        this._keySchedule = i,
        this._invKeySchedule = c
    }
    ,
    c.prototype.encryptBlockRaw = function(e) {
        return o(e = i(e), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
    }
    ,
    c.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e)
          , r = n.allocUnsafe(16);
        return r.writeUInt32BE(t[0], 0),
        r.writeUInt32BE(t[1], 4),
        r.writeUInt32BE(t[2], 8),
        r.writeUInt32BE(t[3], 12),
        r
    }
    ,
    c.prototype.decryptBlock = function(e) {
        var t = (e = i(e))[1];
        e[1] = e[3],
        e[3] = t;
        var r = o(e, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds)
          , a = n.allocUnsafe(16);
        return a.writeUInt32BE(r[0], 0),
        a.writeUInt32BE(r[3], 4),
        a.writeUInt32BE(r[2], 8),
        a.writeUInt32BE(r[1], 12),
        a
    }
    ,
    c.prototype.scrub = function() {
        a(this._keySchedule),
        a(this._invKeySchedule),
        a(this._key)
    }
    ,
    e.exports.AES = c
}
, function(e, t, r) {
    var n = r(1).Buffer
      , i = r(76);
    e.exports = function(e, t, r, a) {
        if (n.isBuffer(e) || (e = n.from(e, "binary")),
        t && (n.isBuffer(t) || (t = n.from(t, "binary")),
        8 !== t.length))
            throw new RangeError("salt should be Buffer with 8 byte length");
        for (var o = r / 8, s = n.alloc(o), f = n.alloc(a || 0), c = n.alloc(0); o > 0 || a > 0; ) {
            var d = new i;
            d.update(c),
            d.update(e),
            t && d.update(t),
            c = d.digest();
            var h = 0;
            if (o > 0) {
                var u = s.length - o;
                h = Math.min(o, c.length),
                c.copy(s, u, 0, h),
                o -= h
            }
            if (h < c.length && a > 0) {
                var l = f.length - a
                  , p = Math.min(a, c.length - h);
                c.copy(f, l, h, h + p),
                a -= p
            }
        }
        return c.fill(0),
        {
            key: s,
            iv: f
        }
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(28)
      , a = i.getNAF
      , o = i.getJSF
      , s = i.assert;
    function f(e, t) {
        this.type = e,
        this.p = new n(t.p,16),
        this.red = t.prime ? n.red(t.prime) : n.mont(this.p),
        this.zero = new n(0).toRed(this.red),
        this.one = new n(1).toRed(this.red),
        this.two = new n(2).toRed(this.red),
        this.n = t.n && new n(t.n,16),
        this.g = t.g && this.pointFromJSON(t.g, t.gRed),
        this._wnafT1 = new Array(4),
        this._wnafT2 = new Array(4),
        this._wnafT3 = new Array(4),
        this._wnafT4 = new Array(4),
        this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
        this.redN = this.n.toRed(this.red))
    }
    function c(e, t) {
        this.curve = e,
        this.type = t,
        this.precomputed = null
    }
    e.exports = f,
    f.prototype.point = function() {
        throw new Error("Not implemented")
    }
    ,
    f.prototype.validate = function() {
        throw new Error("Not implemented")
    }
    ,
    f.prototype._fixedNafMul = function(e, t) {
        s(e.precomputed);
        var r = e._getDoubles()
          , n = a(t, 1, this._bitLength)
          , i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        i /= 3;
        for (var o = [], f = 0; f < n.length; f += r.step) {
            var c = 0;
            for (t = f + r.step - 1; t >= f; t--)
                c = (c << 1) + n[t];
            o.push(c)
        }
        for (var d = this.jpoint(null, null, null), h = this.jpoint(null, null, null), u = i; u > 0; u--) {
            for (f = 0; f < o.length; f++) {
                (c = o[f]) === u ? h = h.mixedAdd(r.points[f]) : c === -u && (h = h.mixedAdd(r.points[f].neg()))
            }
            d = d.add(h)
        }
        return d.toP()
    }
    ,
    f.prototype._wnafMul = function(e, t) {
        var r = 4
          , n = e._getNAFPoints(r);
        r = n.wnd;
        for (var i = n.points, o = a(t, r, this._bitLength), f = this.jpoint(null, null, null), c = o.length - 1; c >= 0; c--) {
            for (t = 0; c >= 0 && 0 === o[c]; c--)
                t++;
            if (c >= 0 && t++,
            f = f.dblp(t),
            c < 0)
                break;
            var d = o[c];
            s(0 !== d),
            f = "affine" === e.type ? d > 0 ? f.mixedAdd(i[d - 1 >> 1]) : f.mixedAdd(i[-d - 1 >> 1].neg()) : d > 0 ? f.add(i[d - 1 >> 1]) : f.add(i[-d - 1 >> 1].neg())
        }
        return "affine" === e.type ? f.toP() : f
    }
    ,
    f.prototype._wnafMulAdd = function(e, t, r, n, i) {
        for (var s = this._wnafT1, f = this._wnafT2, c = this._wnafT3, d = 0, h = 0; h < n; h++) {
            var u = (E = t[h])._getNAFPoints(e);
            s[h] = u.wnd,
            f[h] = u.points
        }
        for (h = n - 1; h >= 1; h -= 2) {
            var l = h - 1
              , p = h;
            if (1 === s[l] && 1 === s[p]) {
                var b = [t[l], null, null, t[p]];
                0 === t[l].y.cmp(t[p].y) ? (b[1] = t[l].add(t[p]),
                b[2] = t[l].toJ().mixedAdd(t[p].neg())) : 0 === t[l].y.cmp(t[p].y.redNeg()) ? (b[1] = t[l].toJ().mixedAdd(t[p]),
                b[2] = t[l].add(t[p].neg())) : (b[1] = t[l].toJ().mixedAdd(t[p]),
                b[2] = t[l].toJ().mixedAdd(t[p].neg()));
                var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                  , y = o(r[l], r[p]);
                d = Math.max(y[0].length, d),
                c[l] = new Array(d),
                c[p] = new Array(d);
                for (var v = 0; v < d; v++) {
                    var g = 0 | y[0][v]
                      , _ = 0 | y[1][v];
                    c[l][v] = m[3 * (g + 1) + (_ + 1)],
                    c[p][v] = 0,
                    f[l] = b
                }
            } else
                c[l] = a(r[l], s[l], this._bitLength),
                c[p] = a(r[p], s[p], this._bitLength),
                d = Math.max(c[l].length, d),
                d = Math.max(c[p].length, d)
        }
        var w = this.jpoint(null, null, null)
          , S = this._wnafT4;
        for (h = d; h >= 0; h--) {
            for (var M = 0; h >= 0; ) {
                var k = !0;
                for (v = 0; v < n; v++)
                    S[v] = 0 | c[v][h],
                    0 !== S[v] && (k = !1);
                if (!k)
                    break;
                M++,
                h--
            }
            if (h >= 0 && M++,
            w = w.dblp(M),
            h < 0)
                break;
            for (v = 0; v < n; v++) {
                var E, x = S[v];
                0 !== x && (x > 0 ? E = f[v][x - 1 >> 1] : x < 0 && (E = f[v][-x - 1 >> 1].neg()),
                w = "affine" === E.type ? w.mixedAdd(E) : w.add(E))
            }
        }
        for (h = 0; h < n; h++)
            f[h] = null;
        return i ? w : w.toP()
    }
    ,
    f.BasePoint = c,
    c.prototype.eq = function() {
        throw new Error("Not implemented")
    }
    ,
    c.prototype.validate = function() {
        return this.curve.validate(this)
    }
    ,
    f.prototype.decodePoint = function(e, t) {
        e = i.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
            this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw new Error("Unknown point format")
    }
    ,
    c.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }
    ,
    c.prototype._encode = function(e) {
        var t = this.curve.p.byteLength()
          , r = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
    }
    ,
    c.prototype.encode = function(e, t) {
        return i.encode(this._encode(t), e)
    }
    ,
    c.prototype.precompute = function(e) {
        if (this.precomputed)
            return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8),
        t.doubles = this._getDoubles(4, e),
        t.beta = this._getBeta(),
        this.precomputed = t,
        this
    }
    ,
    c.prototype._hasDoubles = function(e) {
        if (!this.precomputed)
            return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }
    ,
    c.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
        for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var a = 0; a < e; a++)
                n = n.dbl();
            r.push(n)
        }
        return {
            step: e,
            points: r
        }
    }
    ,
    c.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
        for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            t[i] = t[i - 1].add(n);
        return {
            wnd: e,
            points: t
        }
    }
    ,
    c.prototype._getBeta = function() {
        return null
    }
    ,
    c.prototype.dblp = function(e) {
        for (var t = this, r = 0; r < e; r++)
            t = t.dbl();
        return t
    }
}
, function(e, t, r) {
    var n = r(237)
      , i = r(248)
      , a = r(249)
      , o = r(85)
      , s = r(112)
      , f = r(1).Buffer;
    function c(e) {
        var t;
        "object" != typeof e || f.isBuffer(e) || (t = e.passphrase,
        e = e.key),
        "string" == typeof e && (e = f.from(e));
        var r, c, d = a(e, t), h = d.tag, u = d.data;
        switch (h) {
        case "CERTIFICATE":
            c = n.certificate.decode(u, "der").tbsCertificate.subjectPublicKeyInfo;
        case "PUBLIC KEY":
            switch (c || (c = n.PublicKey.decode(u, "der")),
            r = c.algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
                return n.RSAPublicKey.decode(c.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
                return c.subjectPrivateKey = c.subjectPublicKey,
                {
                    type: "ec",
                    data: c
                };
            case "1.2.840.10040.4.1":
                return c.algorithm.params.pub_key = n.DSAparam.decode(c.subjectPublicKey.data, "der"),
                {
                    type: "dsa",
                    data: c.algorithm.params
                };
            default:
                throw new Error("unknown key id " + r)
            }
            throw new Error("unknown key type " + h);
        case "ENCRYPTED PRIVATE KEY":
            u = function(e, t) {
                var r = e.algorithm.decrypt.kde.kdeparams.salt
                  , n = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10)
                  , a = i[e.algorithm.decrypt.cipher.algo.join(".")]
                  , c = e.algorithm.decrypt.cipher.iv
                  , d = e.subjectPrivateKey
                  , h = parseInt(a.split("-")[1], 10) / 8
                  , u = s.pbkdf2Sync(t, r, n, h, "sha1")
                  , l = o.createDecipheriv(a, u, c)
                  , p = [];
                return p.push(l.update(d)),
                p.push(l.final()),
                f.concat(p)
            }(u = n.EncryptedPrivateKey.decode(u, "der"), t);
        case "PRIVATE KEY":
            switch (r = (c = n.PrivateKey.decode(u, "der")).algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
                return n.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
                return {
                    curve: c.algorithm.curve,
                    privateKey: n.ECPrivateKey.decode(c.subjectPrivateKey, "der").privateKey
                };
            case "1.2.840.10040.4.1":
                return c.algorithm.params.priv_key = n.DSAparam.decode(c.subjectPrivateKey, "der"),
                {
                    type: "dsa",
                    params: c.algorithm.params
                };
            default:
                throw new Error("unknown key id " + r)
            }
            throw new Error("unknown key type " + h);
        case "RSA PUBLIC KEY":
            return n.RSAPublicKey.decode(u, "der");
        case "RSA PRIVATE KEY":
            return n.RSAPrivateKey.decode(u, "der");
        case "DSA PRIVATE KEY":
            return {
                type: "dsa",
                params: n.DSAPrivateKey.decode(u, "der")
            };
        case "EC PRIVATE KEY":
            return {
                curve: (u = n.ECPrivateKey.decode(u, "der")).parameters.value,
                privateKey: u.privateKey
            };
        default:
            throw new Error("unknown key type " + h)
        }
    }
    e.exports = c,
    c.signature = n.signature
}
, function(e, t, r) {
    "use strict";
    r(68);
    var n = r(69);
    e.exports = {
        init: function(e, t) {
            $(window).on("scroll", n({
                fn: function(e, t) {
                    var r = $(".load-more");
                    e.length && "none" != r.css("display") && $(window).scrollTop() + window.innerHeight - (e.offset().top + e.height()) > 30 && t && "function" == typeof t && t()
                }
                .bind(this, e, t),
                context: null,
                delay: 300,
                mustRunDelay: null
            }))
        }
    }
}
, function(e, t, r) {}
, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t, r = null, n = e.fn, i = e.context, a = e.delay || 300, o = e.mustRunDelay;
        return function() {
            var e = arguments
              , s = +new Date;
            i = i || this,
            clearTimeout(r),
            t || (t = s),
            o && s - t >= o ? (n.apply(i, e),
            t = s) : r = setTimeout((function() {
                n.apply(i, e)
            }
            ), a)
        }
    }
}
, , , , , , , function(e, t, r) {
    "use strict";
    var n = r(0)
      , i = r(102)
      , a = r(1).Buffer
      , o = new Array(16);
    function s() {
        i.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878
    }
    function f(e, t) {
        return e << t | e >>> 32 - t
    }
    function c(e, t, r, n, i, a, o) {
        return f(e + (t & r | ~t & n) + i + a | 0, o) + t | 0
    }
    function d(e, t, r, n, i, a, o) {
        return f(e + (t & n | r & ~n) + i + a | 0, o) + t | 0
    }
    function h(e, t, r, n, i, a, o) {
        return f(e + (t ^ r ^ n) + i + a | 0, o) + t | 0
    }
    function u(e, t, r, n, i, a, o) {
        return f(e + (r ^ (t | ~n)) + i + a | 0, o) + t | 0
    }
    n(s, i),
    s.prototype._update = function() {
        for (var e = o, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
        var r = this._a
          , n = this._b
          , i = this._c
          , a = this._d;
        r = c(r, n, i, a, e[0], 3614090360, 7),
        a = c(a, r, n, i, e[1], 3905402710, 12),
        i = c(i, a, r, n, e[2], 606105819, 17),
        n = c(n, i, a, r, e[3], 3250441966, 22),
        r = c(r, n, i, a, e[4], 4118548399, 7),
        a = c(a, r, n, i, e[5], 1200080426, 12),
        i = c(i, a, r, n, e[6], 2821735955, 17),
        n = c(n, i, a, r, e[7], 4249261313, 22),
        r = c(r, n, i, a, e[8], 1770035416, 7),
        a = c(a, r, n, i, e[9], 2336552879, 12),
        i = c(i, a, r, n, e[10], 4294925233, 17),
        n = c(n, i, a, r, e[11], 2304563134, 22),
        r = c(r, n, i, a, e[12], 1804603682, 7),
        a = c(a, r, n, i, e[13], 4254626195, 12),
        i = c(i, a, r, n, e[14], 2792965006, 17),
        r = d(r, n = c(n, i, a, r, e[15], 1236535329, 22), i, a, e[1], 4129170786, 5),
        a = d(a, r, n, i, e[6], 3225465664, 9),
        i = d(i, a, r, n, e[11], 643717713, 14),
        n = d(n, i, a, r, e[0], 3921069994, 20),
        r = d(r, n, i, a, e[5], 3593408605, 5),
        a = d(a, r, n, i, e[10], 38016083, 9),
        i = d(i, a, r, n, e[15], 3634488961, 14),
        n = d(n, i, a, r, e[4], 3889429448, 20),
        r = d(r, n, i, a, e[9], 568446438, 5),
        a = d(a, r, n, i, e[14], 3275163606, 9),
        i = d(i, a, r, n, e[3], 4107603335, 14),
        n = d(n, i, a, r, e[8], 1163531501, 20),
        r = d(r, n, i, a, e[13], 2850285829, 5),
        a = d(a, r, n, i, e[2], 4243563512, 9),
        i = d(i, a, r, n, e[7], 1735328473, 14),
        r = h(r, n = d(n, i, a, r, e[12], 2368359562, 20), i, a, e[5], 4294588738, 4),
        a = h(a, r, n, i, e[8], 2272392833, 11),
        i = h(i, a, r, n, e[11], 1839030562, 16),
        n = h(n, i, a, r, e[14], 4259657740, 23),
        r = h(r, n, i, a, e[1], 2763975236, 4),
        a = h(a, r, n, i, e[4], 1272893353, 11),
        i = h(i, a, r, n, e[7], 4139469664, 16),
        n = h(n, i, a, r, e[10], 3200236656, 23),
        r = h(r, n, i, a, e[13], 681279174, 4),
        a = h(a, r, n, i, e[0], 3936430074, 11),
        i = h(i, a, r, n, e[3], 3572445317, 16),
        n = h(n, i, a, r, e[6], 76029189, 23),
        r = h(r, n, i, a, e[9], 3654602809, 4),
        a = h(a, r, n, i, e[12], 3873151461, 11),
        i = h(i, a, r, n, e[15], 530742520, 16),
        r = u(r, n = h(n, i, a, r, e[2], 3299628645, 23), i, a, e[0], 4096336452, 6),
        a = u(a, r, n, i, e[7], 1126891415, 10),
        i = u(i, a, r, n, e[14], 2878612391, 15),
        n = u(n, i, a, r, e[5], 4237533241, 21),
        r = u(r, n, i, a, e[12], 1700485571, 6),
        a = u(a, r, n, i, e[3], 2399980690, 10),
        i = u(i, a, r, n, e[10], 4293915773, 15),
        n = u(n, i, a, r, e[1], 2240044497, 21),
        r = u(r, n, i, a, e[8], 1873313359, 6),
        a = u(a, r, n, i, e[15], 4264355552, 10),
        i = u(i, a, r, n, e[6], 2734768916, 15),
        n = u(n, i, a, r, e[13], 1309151649, 21),
        r = u(r, n, i, a, e[4], 4149444226, 6),
        a = u(a, r, n, i, e[11], 3174756917, 10),
        i = u(i, a, r, n, e[2], 718787259, 15),
        n = u(n, i, a, r, e[9], 3951481745, 21),
        this._a = this._a + r | 0,
        this._b = this._b + n | 0,
        this._c = this._c + i | 0,
        this._d = this._d + a | 0
    }
    ,
    s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var e = a.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0),
        e.writeInt32LE(this._b, 4),
        e.writeInt32LE(this._c, 8),
        e.writeInt32LE(this._d, 12),
        e
    }
    ,
    e.exports = s
}
, function(e, t, r) {
    e.exports = i;
    var n = r(78).EventEmitter;
    function i() {
        n.call(this)
    }
    r(0)(i, n),
    i.Readable = r(79),
    i.Writable = r(185),
    i.Duplex = r(186),
    i.Transform = r(187),
    i.PassThrough = r(188),
    i.Stream = i,
    i.prototype.pipe = function(e, t) {
        var r = this;
        function i(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause()
        }
        function a() {
            r.readable && r.resume && r.resume()
        }
        r.on("data", i),
        e.on("drain", a),
        e._isStdio || t && !1 === t.end || (r.on("end", s),
        r.on("close", f));
        var o = !1;
        function s() {
            o || (o = !0,
            e.end())
        }
        function f() {
            o || (o = !0,
            "function" == typeof e.destroy && e.destroy())
        }
        function c(e) {
            if (d(),
            0 === n.listenerCount(this, "error"))
                throw e
        }
        function d() {
            r.removeListener("data", i),
            e.removeListener("drain", a),
            r.removeListener("end", s),
            r.removeListener("close", f),
            r.removeListener("error", c),
            e.removeListener("error", c),
            r.removeListener("end", d),
            r.removeListener("close", d),
            e.removeListener("close", d)
        }
        return r.on("error", c),
        e.on("error", c),
        r.on("end", d),
        r.on("close", d),
        e.on("close", d),
        e.emit("pipe", r),
        e
    }
}
, function(e, t, r) {
    "use strict";
    var n, i = "object" == typeof Reflect ? Reflect : null, a = i && "function" == typeof i.apply ? i.apply : function(e, t, r) {
        return Function.prototype.apply.call(e, t, r)
    }
    ;
    n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    var o = Number.isNaN || function(e) {
        return e != e
    }
    ;
    function s() {
        s.init.call(this)
    }
    e.exports = s,
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var f = 10;
    function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
    }
    function d(e, t, r, n) {
        var i, a, o, s;
        if ("function" != typeof r)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (a = e._events) ? (a = e._events = Object.create(null),
        e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
        a = e._events),
        o = a[t]),
        void 0 === o)
            o = a[t] = r,
            ++e._eventsCount;
        else if ("function" == typeof o ? o = a[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r),
        (i = c(e)) > 0 && o.length > i && !o.warned) {
            o.warned = !0;
            var f = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            f.name = "MaxListenersExceededWarning",
            f.emitter = e,
            f.type = t,
            f.count = o.length,
            s = f,
            console && console.warn && console.warn(s)
        }
        return e
    }
    function h() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e.push(arguments[t]);
        this.fired || (this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        a(this.listener, this.target, e))
    }
    function u(e, t, r) {
        var n = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: r
        }
          , i = h.bind(n);
        return i.listener = r,
        n.wrapFn = i,
        i
    }
    function l(e, t, r) {
        var n = e._events;
        if (void 0 === n)
            return [];
        var i = n[t];
        return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
            return t
        }(i) : b(i, i.length)
    }
    function p(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r)
                return 1;
            if (void 0 !== r)
                return r.length
        }
        return 0
    }
    function b(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n)
            r[n] = e[n];
        return r
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return f
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || o(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            f = e
        }
    }),
    s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    s.prototype.getMaxListeners = function() {
        return c(this)
    }
    ,
    s.prototype.emit = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
        var n = "error" === e
          , i = this._events;
        if (void 0 !== i)
            n = n && void 0 === i.error;
        else if (!n)
            return !1;
        if (n) {
            var o;
            if (t.length > 0 && (o = t[0]),
            o instanceof Error)
                throw o;
            var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw s.context = o,
            s
        }
        var f = i[e];
        if (void 0 === f)
            return !1;
        if ("function" == typeof f)
            a(f, this, t);
        else {
            var c = f.length
              , d = b(f, c);
            for (r = 0; r < c; ++r)
                a(d[r], this, t)
        }
        return !0
    }
    ,
    s.prototype.addListener = function(e, t) {
        return d(this, e, t, !1)
    }
    ,
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(e, t) {
        return d(this, e, t, !0)
    }
    ,
    s.prototype.once = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, u(this, e, t)),
        this
    }
    ,
    s.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, u(this, e, t)),
        this
    }
    ,
    s.prototype.removeListener = function(e, t) {
        var r, n, i, a, o;
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (n = this._events))
            return this;
        if (void 0 === (r = n[e]))
            return this;
        if (r === t || r.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
            n.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (i = -1,
            a = r.length - 1; a >= 0; a--)
                if (r[a] === t || r[a].listener === t) {
                    o = r[a].listener,
                    i = a;
                    break
                }
            if (i < 0)
                return this;
            0 === i ? r.shift() : function(e, t) {
                for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1];
                e.pop()
            }(r, i),
            1 === r.length && (n[e] = r[0]),
            void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
        }
        return this
    }
    ,
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(e) {
        var t, r, n;
        if (void 0 === (r = this._events))
            return this;
        if (void 0 === r.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null),
            this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
            this;
        if (0 === arguments.length) {
            var i, a = Object.keys(r);
            for (n = 0; n < a.length; ++n)
                "removeListener" !== (i = a[n]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = r[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--)
                this.removeListener(e, t[n]);
        return this
    }
    ,
    s.prototype.listeners = function(e) {
        return l(this, e, !0)
    }
    ,
    s.prototype.rawListeners = function(e) {
        return l(this, e, !1)
    }
    ,
    s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
    }
    ,
    s.prototype.listenerCount = p,
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? n(this._events) : []
    }
}
, function(e, t, r) {
    (t = e.exports = r(103)).Stream = t,
    t.Readable = t,
    t.Writable = r(80),
    t.Duplex = r(47),
    t.Transform = r(106),
    t.PassThrough = r(184)
}
, function(e, t, r) {
    "use strict";
    (function(t, n, i) {
        var a = r(62);
        function o(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(e, t, r) {
                    var n = e.entry;
                    e.entry = null;
                    for (; n; ) {
                        var i = n.callback;
                        t.pendingcb--,
                        i(r),
                        n = n.next
                    }
                    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                }(t, e)
            }
        }
        e.exports = v;
        var s, f = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : a.nextTick;
        v.WritableState = y;
        var c = r(52);
        c.inherits = r(0);
        var d = {
            deprecate: r(182)
        }
          , h = r(104)
          , u = r(1).Buffer
          , l = i.Uint8Array || function() {}
        ;
        var p, b = r(105);
        function m() {}
        function y(e, t) {
            s = s || r(47),
            e = e || {};
            var n = t instanceof s;
            this.objectMode = !!e.objectMode,
            n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var i = e.highWaterMark
              , c = e.writableHighWaterMark
              , d = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : d,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var h = !1 === e.decodeStrings;
            this.decodeStrings = !h,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                !function(e, t) {
                    var r = e._writableState
                      , n = r.sync
                      , i = r.writecb;
                    if (function(e) {
                        e.writing = !1,
                        e.writecb = null,
                        e.length -= e.writelen,
                        e.writelen = 0
                    }(r),
                    t)
                        !function(e, t, r, n, i) {
                            --t.pendingcb,
                            r ? (a.nextTick(i, n),
                            a.nextTick(k, e, t),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", n)) : (i(n),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", n),
                            k(e, t))
                        }(e, r, n, t, i);
                    else {
                        var o = S(r);
                        o || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r),
                        n ? f(_, e, r, o, i) : _(e, r, o, i)
                    }
                }(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new o(this)
        }
        function v(e) {
            if (s = s || r(47),
            !(p.call(v, this) || this instanceof s))
                return new v(e);
            this._writableState = new y(e,this),
            this.writable = !0,
            e && ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
            h.call(this)
        }
        function g(e, t, r, n, i, a, o) {
            t.writelen = n,
            t.writecb = o,
            t.writing = !0,
            t.sync = !0,
            r ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite),
            t.sync = !1
        }
        function _(e, t, r, n) {
            r || function(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1,
                e.emit("drain"))
            }(e, t),
            t.pendingcb--,
            n(),
            k(e, t)
        }
        function w(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
                var n = t.bufferedRequestCount
                  , i = new Array(n)
                  , a = t.corkedRequestsFree;
                a.entry = r;
                for (var s = 0, f = !0; r; )
                    i[s] = r,
                    r.isBuf || (f = !1),
                    r = r.next,
                    s += 1;
                i.allBuffers = f,
                g(e, t, !0, t.length, i, "", a.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                a.next ? (t.corkedRequestsFree = a.next,
                a.next = null) : t.corkedRequestsFree = new o(t),
                t.bufferedRequestCount = 0
            } else {
                for (; r; ) {
                    var c = r.chunk
                      , d = r.encoding
                      , h = r.callback;
                    if (g(e, t, !1, t.objectMode ? 1 : c.length, c, d, h),
                    r = r.next,
                    t.bufferedRequestCount--,
                    t.writing)
                        break
                }
                null === r && (t.lastBufferedRequest = null)
            }
            t.bufferedRequest = r,
            t.bufferProcessing = !1
        }
        function S(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function M(e, t) {
            e._final((function(r) {
                t.pendingcb--,
                r && e.emit("error", r),
                t.prefinished = !0,
                e.emit("prefinish"),
                k(e, t)
            }
            ))
        }
        function k(e, t) {
            var r = S(t);
            return r && (!function(e, t) {
                t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                t.finalCalled = !0,
                a.nextTick(M, e, t)) : (t.prefinished = !0,
                e.emit("prefinish")))
            }(e, t),
            0 === t.pendingcb && (t.finished = !0,
            e.emit("finish"))),
            r
        }
        c.inherits(v, h),
        y.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        function() {
            try {
                Object.defineProperty(y.prototype, "buffer", {
                    get: d.deprecate((function() {
                        return this.getBuffer()
                    }
                    ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(v, Symbol.hasInstance, {
            value: function(e) {
                return !!p.call(this, e) || this === v && (e && e._writableState instanceof y)
            }
        })) : p = function(e) {
            return e instanceof this
        }
        ,
        v.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        v.prototype.write = function(e, t, r) {
            var n, i = this._writableState, o = !1, s = !i.objectMode && (n = e,
            u.isBuffer(n) || n instanceof l);
            return s && !u.isBuffer(e) && (e = function(e) {
                return u.from(e)
            }(e)),
            "function" == typeof t && (r = t,
            t = null),
            s ? t = "buffer" : t || (t = i.defaultEncoding),
            "function" != typeof r && (r = m),
            i.ended ? function(e, t) {
                var r = new Error("write after end");
                e.emit("error", r),
                a.nextTick(t, r)
            }(this, r) : (s || function(e, t, r, n) {
                var i = !0
                  , o = !1;
                return null === r ? o = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")),
                o && (e.emit("error", o),
                a.nextTick(n, o),
                i = !1),
                i
            }(this, i, e, r)) && (i.pendingcb++,
            o = function(e, t, r, n, i, a) {
                if (!r) {
                    var o = function(e, t, r) {
                        e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                        return t
                    }(t, n, i);
                    n !== o && (r = !0,
                    i = "buffer",
                    n = o)
                }
                var s = t.objectMode ? 1 : n.length;
                t.length += s;
                var f = t.length < t.highWaterMark;
                f || (t.needDrain = !0);
                if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: a,
                        next: null
                    },
                    c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                    t.bufferedRequestCount += 1
                } else
                    g(e, t, !1, s, n, i, a);
                return f
            }(this, i, s, e, t, r)),
            o
        }
        ,
        v.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        v.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
        }
        ,
        v.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        Object.defineProperty(v.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        v.prototype._write = function(e, t, r) {
            r(new Error("_write() is not implemented"))
        }
        ,
        v.prototype._writev = null,
        v.prototype.end = function(e, t, r) {
            var n = this._writableState;
            "function" == typeof e ? (r = e,
            e = null,
            t = null) : "function" == typeof t && (r = t,
            t = null),
            null != e && this.write(e, t),
            n.corked && (n.corked = 1,
            this.uncork()),
            n.ending || n.finished || function(e, t, r) {
                t.ending = !0,
                k(e, t),
                r && (t.finished ? a.nextTick(r) : e.once("finish", r));
                t.ended = !0,
                e.writable = !1
            }(this, n, r)
        }
        ,
        Object.defineProperty(v.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }),
        v.prototype.destroy = b.destroy,
        v.prototype._undestroy = b.undestroy,
        v.prototype._destroy = function(e, t) {
            this.end(),
            t(e)
        }
    }
    ).call(this, r(40), r(180).setImmediate, r(32))
}
, function(e, t, r) {
    "use strict";
    var n = r(183).Buffer
      , i = n.isEncoding || function(e) {
        switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function a(e) {
        var t;
        switch (this.encoding = function(e) {
            var t = function(e) {
                if (!e)
                    return "utf8";
                for (var t; ; )
                    switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t)
                            return;
                        e = ("" + e).toLowerCase(),
                        t = !0
                    }
            }(e);
            if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                throw new Error("Unknown encoding: " + e);
            return t || e
        }(e),
        this.encoding) {
        case "utf16le":
            this.text = f,
            this.end = c,
            t = 4;
            break;
        case "utf8":
            this.fillLast = s,
            t = 4;
            break;
        case "base64":
            this.text = d,
            this.end = h,
            t = 3;
            break;
        default:
            return this.write = u,
            void (this.end = l)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = n.allocUnsafe(t)
    }
    function o(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
    }
    function s(e) {
        var t = this.lastTotal - this.lastNeed
          , r = function(e, t, r) {
            if (128 != (192 & t[0]))
                return e.lastNeed = 0,
                "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1]))
                    return e.lastNeed = 1,
                    "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return e.lastNeed = 2,
                    "�"
            }
        }(this, e);
        return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
        void (this.lastNeed -= e.length))
    }
    function f(e, t) {
        if ((e.length - t) % 2 == 0) {
            var r = e.toString("utf16le", t);
            if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1],
                    r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = e[e.length - 1],
        e.toString("utf16le", t, e.length - 1)
    }
    function c(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, r)
        }
        return t
    }
    function d(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
        this.lastTotal = 3,
        1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
        this.lastChar[1] = e[e.length - 1]),
        e.toString("base64", t, e.length - r))
    }
    function h(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }
    function u(e) {
        return e.toString(this.encoding)
    }
    function l(e) {
        return e && e.length ? this.write(e) : ""
    }
    t.StringDecoder = a,
    a.prototype.write = function(e) {
        if (0 === e.length)
            return "";
        var t, r;
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e)))
                return "";
            r = this.lastNeed,
            this.lastNeed = 0
        } else
            r = 0;
        return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
    }
    ,
    a.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
    }
    ,
    a.prototype.text = function(e, t) {
        var r = function(e, t, r) {
            var n = t.length - 1;
            if (n < r)
                return 0;
            var i = o(t[n]);
            if (i >= 0)
                return i > 0 && (e.lastNeed = i - 1),
                i;
            if (--n < r || -2 === i)
                return 0;
            if ((i = o(t[n])) >= 0)
                return i > 0 && (e.lastNeed = i - 2),
                i;
            if (--n < r || -2 === i)
                return 0;
            if ((i = o(t[n])) >= 0)
                return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
                i;
            return 0
        }(this, e, t);
        if (!this.lastNeed)
            return e.toString("utf8", t);
        this.lastTotal = r;
        var n = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, n),
        e.toString("utf8", t, n)
    }
    ,
    a.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
        this.lastNeed -= e.length
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(14).Buffer
      , i = r(0)
      , a = r(102)
      , o = new Array(16)
      , s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , d = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
      , h = [0, 1518500249, 1859775393, 2400959708, 2840853838]
      , u = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function l() {
        a.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520
    }
    function p(e, t) {
        return e << t | e >>> 32 - t
    }
    function b(e, t, r, n, i, a, o, s) {
        return p(e + (t ^ r ^ n) + a + o | 0, s) + i | 0
    }
    function m(e, t, r, n, i, a, o, s) {
        return p(e + (t & r | ~t & n) + a + o | 0, s) + i | 0
    }
    function y(e, t, r, n, i, a, o, s) {
        return p(e + ((t | ~r) ^ n) + a + o | 0, s) + i | 0
    }
    function v(e, t, r, n, i, a, o, s) {
        return p(e + (t & n | r & ~n) + a + o | 0, s) + i | 0
    }
    function g(e, t, r, n, i, a, o, s) {
        return p(e + (t ^ (r | ~n)) + a + o | 0, s) + i | 0
    }
    i(l, a),
    l.prototype._update = function() {
        for (var e = o, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
        for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, a = 0 | this._d, l = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, S = 0 | this._c, M = 0 | this._d, k = 0 | this._e, E = 0; E < 80; E += 1) {
            var x, A;
            E < 16 ? (x = b(r, n, i, a, l, e[s[E]], h[0], c[E]),
            A = g(_, w, S, M, k, e[f[E]], u[0], d[E])) : E < 32 ? (x = m(r, n, i, a, l, e[s[E]], h[1], c[E]),
            A = v(_, w, S, M, k, e[f[E]], u[1], d[E])) : E < 48 ? (x = y(r, n, i, a, l, e[s[E]], h[2], c[E]),
            A = y(_, w, S, M, k, e[f[E]], u[2], d[E])) : E < 64 ? (x = v(r, n, i, a, l, e[s[E]], h[3], c[E]),
            A = m(_, w, S, M, k, e[f[E]], u[3], d[E])) : (x = g(r, n, i, a, l, e[s[E]], h[4], c[E]),
            A = b(_, w, S, M, k, e[f[E]], u[4], d[E])),
            r = l,
            l = a,
            a = p(i, 10),
            i = n,
            n = x,
            _ = k,
            k = M,
            M = p(S, 10),
            S = w,
            w = A
        }
        var I = this._b + i + M | 0;
        this._b = this._c + a + k | 0,
        this._c = this._d + l + _ | 0,
        this._d = this._e + r + w | 0,
        this._e = this._a + n + S | 0,
        this._a = I
    }
    ,
    l.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var e = n.alloc ? n.alloc(20) : new n(20);
        return e.writeInt32LE(this._a, 0),
        e.writeInt32LE(this._b, 4),
        e.writeInt32LE(this._c, 8),
        e.writeInt32LE(this._d, 12),
        e.writeInt32LE(this._e, 16),
        e
    }
    ,
    e.exports = l
}
, function(e, t, r) {
    (t = e.exports = function(e) {
        e = e.toLowerCase();
        var r = t[e];
        if (!r)
            throw new Error(e + " is not supported (we accept pull requests)");
        return new r
    }
    ).sha = r(189),
    t.sha1 = r(190),
    t.sha224 = r(191),
    t.sha256 = r(107),
    t.sha384 = r(192),
    t.sha512 = r(108)
}
, function(e, t, r) {
    "use strict";
    var n = r(27);
    function i(e) {
        this.options = e,
        this.type = this.options.type,
        this.blockSize = 8,
        this._init(),
        this.buffer = new Array(this.blockSize),
        this.bufferOff = 0
    }
    e.exports = i,
    i.prototype._init = function() {}
    ,
    i.prototype.update = function(e) {
        return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
    }
    ,
    i.prototype._buffer = function(e, t) {
        for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - t), n = 0; n < r; n++)
            this.buffer[this.bufferOff + n] = e[t + n];
        return this.bufferOff += r,
        r
    }
    ,
    i.prototype._flushBuffer = function(e, t) {
        return this._update(this.buffer, 0, e, t),
        this.bufferOff = 0,
        this.blockSize
    }
    ,
    i.prototype._updateEncrypt = function(e) {
        var t = 0
          , r = 0
          , n = (this.bufferOff + e.length) / this.blockSize | 0
          , i = new Array(n * this.blockSize);
        0 !== this.bufferOff && (t += this._buffer(e, t),
        this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
        for (var a = e.length - (e.length - t) % this.blockSize; t < a; t += this.blockSize)
            this._update(e, t, i, r),
            r += this.blockSize;
        for (; t < e.length; t++,
        this.bufferOff++)
            this.buffer[this.bufferOff] = e[t];
        return i
    }
    ,
    i.prototype._updateDecrypt = function(e) {
        for (var t = 0, r = 0, n = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, i = new Array(n * this.blockSize); n > 0; n--)
            t += this._buffer(e, t),
            r += this._flushBuffer(i, r);
        return t += this._buffer(e, t),
        i
    }
    ,
    i.prototype.final = function(e) {
        var t, r;
        return e && (t = this.update(e)),
        r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
        t ? t.concat(r) : r
    }
    ,
    i.prototype._pad = function(e, t) {
        if (0 === t)
            return !1;
        for (; t < e.length; )
            e[t++] = 0;
        return !0
    }
    ,
    i.prototype._finalEncrypt = function() {
        if (!this._pad(this.buffer, this.bufferOff))
            return [];
        var e = new Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0),
        e
    }
    ,
    i.prototype._unpad = function(e) {
        return e
    }
    ,
    i.prototype._finalDecrypt = function() {
        n.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var e = new Array(this.blockSize);
        return this._flushBuffer(e, 0),
        this._unpad(e)
    }
}
, function(e, t, r) {
    var n = r(201)
      , i = r(209)
      , a = r(120);
    t.createCipher = t.Cipher = n.createCipher,
    t.createCipheriv = t.Cipheriv = n.createCipheriv,
    t.createDecipher = t.Decipher = i.createDecipher,
    t.createDecipheriv = t.Decipheriv = i.createDecipheriv,
    t.listCiphers = t.getCiphers = function() {
        return Object.keys(a)
    }
}
, function(e, t, r) {
    var n = {
        ECB: r(202),
        CBC: r(203),
        CFB: r(204),
        CFB8: r(205),
        CFB1: r(206),
        OFB: r(207),
        CTR: r(118),
        GCM: r(118)
    }
      , i = r(120);
    for (var a in i)
        i[a].module = n[i[a].mode];
    e.exports = i
}
, function(e, t, r) {
    var n;
    function i(e) {
        this.rand = e
    }
    if (e.exports = function(e) {
        return n || (n = new i(null)),
        n.generate(e)
    }
    ,
    e.exports.Rand = i,
    i.prototype.generate = function(e) {
        return this._rand(e)
    }
    ,
    i.prototype._rand = function(e) {
        if (this.rand.getBytes)
            return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte();
        return t
    }
    ,
    "object" == typeof self)
        self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t),
            t
        }
        : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t),
            t
        }
        : "object" == typeof window && (i.prototype._rand = function() {
            throw new Error("Not implemented yet")
        }
        );
    else
        try {
            var a = r(214);
            if ("function" != typeof a.randomBytes)
                throw new Error("Not supported");
            i.prototype._rand = function(e) {
                return a.randomBytes(e)
            }
        } catch (e) {}
}
, function(e, t, r) {
    (function(t) {
        var n = r(10)
          , i = r(48);
        function a(e, r) {
            var i = function(e) {
                var t = o(e);
                return {
                    blinder: t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),
                    unblinder: t.invm(e.modulus)
                }
            }(r)
              , a = r.modulus.byteLength()
              , s = (n.mont(r.modulus),
            new n(e).mul(i.blinder).umod(r.modulus))
              , f = s.toRed(n.mont(r.prime1))
              , c = s.toRed(n.mont(r.prime2))
              , d = r.coefficient
              , h = r.prime1
              , u = r.prime2
              , l = f.redPow(r.exponent1)
              , p = c.redPow(r.exponent2);
            l = l.fromRed(),
            p = p.fromRed();
            var b = l.isub(p).imul(d).umod(h);
            return b.imul(u),
            p.iadd(b),
            new t(p.imul(i.unblinder).umod(r.modulus).toArray(!1, a))
        }
        function o(e) {
            for (var t = e.modulus.byteLength(), r = new n(i(t)); r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2); )
                r = new n(i(t));
            return r
        }
        e.exports = a,
        a.getr = o
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    "use strict";
    var n = t;
    n.version = r(219).version,
    n.utils = r(28),
    n.rand = r(87),
    n.curve = r(126),
    n.curves = r(90),
    n.ec = r(230),
    n.eddsa = r(234)
}
, function(e, t, r) {
    "use strict";
    var n, i = t, a = r(91), o = r(126), s = r(28).assert;
    function f(e) {
        "short" === e.type ? this.curve = new o.short(e) : "edwards" === e.type ? this.curve = new o.edwards(e) : this.curve = new o.mont(e),
        this.g = this.curve.g,
        this.n = this.curve.n,
        this.hash = e.hash,
        s(this.g.validate(), "Invalid curve"),
        s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
    }
    function c(e, t) {
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var r = new f(t);
                return Object.defineProperty(i, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                }),
                r
            }
        })
    }
    i.PresetCurve = f,
    c("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: a.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }),
    c("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: a.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }),
    c("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: a.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }),
    c("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: a.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }),
    c("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: a.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }),
    c("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: a.sha256,
        gRed: !1,
        g: ["9"]
    }),
    c("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: a.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    try {
        n = r(229)
    } catch (e) {
        n = void 0
    }
    c("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: a.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [{
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
        }, {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
        }],
        gRed: !1,
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
    })
}
, function(e, t, r) {
    var n = t;
    n.utils = r(33),
    n.common = r(54),
    n.sha = r(223),
    n.ripemd = r(227),
    n.hmac = r(228),
    n.sha1 = n.sha.sha1,
    n.sha256 = n.sha.sha256,
    n.sha224 = n.sha.sha224,
    n.sha384 = n.sha.sha384,
    n.sha512 = n.sha.sha512,
    n.ripemd160 = n.ripemd.ripemd160
}
, , , , , , , , , , , function(e, t, r) {
    "use strict";
    var n = r(1).Buffer
      , i = r(77).Transform;
    function a(e) {
        i.call(this),
        this._block = n.allocUnsafe(e),
        this._blockSize = e,
        this._blockOffset = 0,
        this._length = [0, 0, 0, 0],
        this._finalized = !1
    }
    r(0)(a, i),
    a.prototype._transform = function(e, t, r) {
        var n = null;
        try {
            this.update(e, t)
        } catch (e) {
            n = e
        }
        r(n)
    }
    ,
    a.prototype._flush = function(e) {
        var t = null;
        try {
            this.push(this.digest())
        } catch (e) {
            t = e
        }
        e(t)
    }
    ,
    a.prototype.update = function(e, t) {
        if (function(e, t) {
            if (!n.isBuffer(e) && "string" != typeof e)
                throw new TypeError(t + " must be a string or a buffer")
        }(e, "Data"),
        this._finalized)
            throw new Error("Digest already called");
        n.isBuffer(e) || (e = n.from(e, t));
        for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize; ) {
            for (var a = this._blockOffset; a < this._blockSize; )
                r[a++] = e[i++];
            this._update(),
            this._blockOffset = 0
        }
        for (; i < e.length; )
            r[this._blockOffset++] = e[i++];
        for (var o = 0, s = 8 * e.length; s > 0; ++o)
            this._length[o] += s,
            (s = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * s);
        return this
    }
    ,
    a.prototype._update = function() {
        throw new Error("_update is not implemented")
    }
    ,
    a.prototype.digest = function(e) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
        this._block.fill(0),
        this._blockOffset = 0;
        for (var r = 0; r < 4; ++r)
            this._length[r] = 0;
        return t
    }
    ,
    a.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }
    ,
    e.exports = a
}
, function(e, t, r) {
    "use strict";
    (function(t, n) {
        var i = r(62);
        e.exports = g;
        var a, o = r(176);
        g.ReadableState = v;
        r(78).EventEmitter;
        var s = function(e, t) {
            return e.listeners(t).length
        }
          , f = r(104)
          , c = r(1).Buffer
          , d = t.Uint8Array || function() {}
        ;
        var h = r(52);
        h.inherits = r(0);
        var u = r(177)
          , l = void 0;
        l = u && u.debuglog ? u.debuglog("stream") : function() {}
        ;
        var p, b = r(178), m = r(105);
        h.inherits(g, f);
        var y = ["error", "close", "destroy", "pause", "resume"];
        function v(e, t) {
            e = e || {};
            var n = t instanceof (a = a || r(47));
            this.objectMode = !!e.objectMode,
            n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var i = e.highWaterMark
              , o = e.readableHighWaterMark
              , s = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : n && (o || 0 === o) ? o : s,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new b,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (p || (p = r(81).StringDecoder),
            this.decoder = new p(e.encoding),
            this.encoding = e.encoding)
        }
        function g(e) {
            if (a = a || r(47),
            !(this instanceof g))
                return new g(e);
            this._readableState = new v(e,this),
            this.readable = !0,
            e && ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
            f.call(this)
        }
        function _(e, t, r, n, i) {
            var a, o = e._readableState;
            null === t ? (o.reading = !1,
            function(e, t) {
                if (t.ended)
                    return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r),
                    t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0,
                k(e)
            }(e, o)) : (i || (a = function(e, t) {
                var r;
                n = t,
                c.isBuffer(n) || n instanceof d || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return r
            }(o, t)),
            a ? e.emit("error", a) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
                return c.from(e)
            }(t)),
            n ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1,
            o.decoder && !r ? (t = o.decoder.write(t),
            o.objectMode || 0 !== t.length ? w(e, o, t, !1) : x(e, o)) : w(e, o, t, !1))) : n || (o.reading = !1));
            return function(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }(o)
        }
        function w(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
            e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && k(e)),
            x(e, t)
        }
        Object.defineProperty(g.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        g.prototype.destroy = m.destroy,
        g.prototype._undestroy = m.undestroy,
        g.prototype._destroy = function(e, t) {
            this.push(null),
            t(e)
        }
        ,
        g.prototype.push = function(e, t) {
            var r, n = this._readableState;
            return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t),
            t = ""),
            r = !0),
            _(this, e, t, !1, r)
        }
        ,
        g.prototype.unshift = function(e) {
            return _(this, e, null, !0, !1)
        }
        ,
        g.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        g.prototype.setEncoding = function(e) {
            return p || (p = r(81).StringDecoder),
            this._readableState.decoder = new p(e),
            this._readableState.encoding = e,
            this
        }
        ;
        var S = 8388608;
        function M(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                return e >= S ? e = S : (e--,
                e |= e >>> 1,
                e |= e >>> 2,
                e |= e >>> 4,
                e |= e >>> 8,
                e |= e >>> 16,
                e++),
                e
            }(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function k(e) {
            var t = e._readableState;
            t.needReadable = !1,
            t.emittedReadable || (l("emitReadable", t.flowing),
            t.emittedReadable = !0,
            t.sync ? i.nextTick(E, e) : E(e))
        }
        function E(e) {
            l("emit readable"),
            e.emit("readable"),
            T(e)
        }
        function x(e, t) {
            t.readingMore || (t.readingMore = !0,
            i.nextTick(A, e, t))
        }
        function A(e, t) {
            for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"),
            e.read(0),
            r !== t.length); )
                r = t.length;
            t.readingMore = !1
        }
        function I(e) {
            l("readable nexttick read 0"),
            e.read(0)
        }
        function B(e, t) {
            t.reading || (l("resume read 0"),
            e.read(0)),
            t.resumeScheduled = !1,
            t.awaitDrain = 0,
            e.emit("resume"),
            T(e),
            t.flowing && !t.reading && e.read(0)
        }
        function T(e) {
            var t = e._readableState;
            for (l("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function R(e, t) {
            return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
            t.buffer.clear()) : r = function(e, t, r) {
                var n;
                e < t.head.data.length ? (n = t.head.data.slice(0, e),
                t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
                    var r = t.head
                      , n = 1
                      , i = r.data;
                    e -= i.length;
                    for (; r = r.next; ) {
                        var a = r.data
                          , o = e > a.length ? a.length : e;
                        if (o === a.length ? i += a : i += a.slice(0, e),
                        0 === (e -= o)) {
                            o === a.length ? (++n,
                            r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                            r.data = a.slice(o));
                            break
                        }
                        ++n
                    }
                    return t.length -= n,
                    i
                }(e, t) : function(e, t) {
                    var r = c.allocUnsafe(e)
                      , n = t.head
                      , i = 1;
                    n.data.copy(r),
                    e -= n.data.length;
                    for (; n = n.next; ) {
                        var a = n.data
                          , o = e > a.length ? a.length : e;
                        if (a.copy(r, r.length - e, 0, o),
                        0 === (e -= o)) {
                            o === a.length ? (++i,
                            n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                            n.data = a.slice(o));
                            break
                        }
                        ++i
                    }
                    return t.length -= i,
                    r
                }(e, t);
                return n
            }(e, t.buffer, t.decoder),
            r);
            var r
        }
        function C(e) {
            var t = e._readableState;
            if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0,
            i.nextTick(P, t, e))
        }
        function P(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"))
        }
        function j(e, t) {
            for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t)
                    return r;
            return -1
        }
        g.prototype.read = function(e) {
            l("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , r = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                return l("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? C(this) : k(this),
                null;
            if (0 === (e = M(e, t)) && t.ended)
                return 0 === t.length && C(this),
                null;
            var n, i = t.needReadable;
            return l("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0),
            t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = M(r, t))),
            null === (n = e > 0 ? R(e, t) : null) ? (t.needReadable = !0,
            e = 0) : t.length -= e,
            0 === t.length && (t.ended || (t.needReadable = !0),
            r !== e && t.ended && C(this)),
            null !== n && this.emit("data", n),
            n
        }
        ,
        g.prototype._read = function(e) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        g.prototype.pipe = function(e, t) {
            var r = this
              , a = this._readableState;
            switch (a.pipesCount) {
            case 0:
                a.pipes = e;
                break;
            case 1:
                a.pipes = [a.pipes, e];
                break;
            default:
                a.pipes.push(e)
            }
            a.pipesCount += 1,
            l("pipe count=%d opts=%j", a.pipesCount, t);
            var f = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? d : g;
            function c(t, n) {
                l("onunpipe"),
                t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0,
                l("cleanup"),
                e.removeListener("close", y),
                e.removeListener("finish", v),
                e.removeListener("drain", h),
                e.removeListener("error", m),
                e.removeListener("unpipe", c),
                r.removeListener("end", d),
                r.removeListener("end", g),
                r.removeListener("data", b),
                u = !0,
                !a.awaitDrain || e._writableState && !e._writableState.needDrain || h())
            }
            function d() {
                l("onend"),
                e.end()
            }
            a.endEmitted ? i.nextTick(f) : r.once("end", f),
            e.on("unpipe", c);
            var h = function(e) {
                return function() {
                    var t = e._readableState;
                    l("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && s(e, "data") && (t.flowing = !0,
                    T(e))
                }
            }(r);
            e.on("drain", h);
            var u = !1;
            var p = !1;
            function b(t) {
                l("ondata"),
                p = !1,
                !1 !== e.write(t) || p || ((1 === a.pipesCount && a.pipes === e || a.pipesCount > 1 && -1 !== j(a.pipes, e)) && !u && (l("false write response, pause", r._readableState.awaitDrain),
                r._readableState.awaitDrain++,
                p = !0),
                r.pause())
            }
            function m(t) {
                l("onerror", t),
                g(),
                e.removeListener("error", m),
                0 === s(e, "error") && e.emit("error", t)
            }
            function y() {
                e.removeListener("finish", v),
                g()
            }
            function v() {
                l("onfinish"),
                e.removeListener("close", y),
                g()
            }
            function g() {
                l("unpipe"),
                r.unpipe(e)
            }
            return r.on("data", b),
            function(e, t, r) {
                if ("function" == typeof e.prependListener)
                    return e.prependListener(t, r);
                e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }(e, "error", m),
            e.once("close", y),
            e.once("finish", v),
            e.emit("pipe", r),
            a.flowing || (l("pipe resume"),
            r.resume()),
            e
        }
        ,
        g.prototype.unpipe = function(e) {
            var t = this._readableState
              , r = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes ? this : (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, r),
                this);
            if (!e) {
                var n = t.pipes
                  , i = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var a = 0; a < i; a++)
                    n[a].emit("unpipe", this, r);
                return this
            }
            var o = j(t.pipes, e);
            return -1 === o ? this : (t.pipes.splice(o, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, r),
            this)
        }
        ,
        g.prototype.on = function(e, t) {
            var r = f.prototype.on.call(this, e, t);
            if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var n = this._readableState;
                n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
                n.emittedReadable = !1,
                n.reading ? n.length && k(this) : i.nextTick(I, this))
            }
            return r
        }
        ,
        g.prototype.addListener = g.prototype.on,
        g.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (l("resume"),
            e.flowing = !0,
            function(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0,
                i.nextTick(B, e, t))
            }(this, e)),
            this
        }
        ,
        g.prototype.pause = function() {
            return l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (l("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        g.prototype.wrap = function(e) {
            var t = this
              , r = this._readableState
              , n = !1;
            for (var i in e.on("end", (function() {
                if (l("wrapped end"),
                r.decoder && !r.ended) {
                    var e = r.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }
            )),
            e.on("data", (function(i) {
                (l("wrapped data"),
                r.decoder && (i = r.decoder.write(i)),
                r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                e.pause()))
            }
            )),
            e)
                void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
            for (var a = 0; a < y.length; a++)
                e.on(y[a], this.emit.bind(this, y[a]));
            return this._read = function(t) {
                l("wrapped _read", t),
                n && (n = !1,
                e.resume())
            }
            ,
            this
        }
        ,
        Object.defineProperty(g.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        g._fromList = R
    }
    ).call(this, r(32), r(40))
}
, function(e, t, r) {
    e.exports = r(78).EventEmitter
}
, function(e, t, r) {
    "use strict";
    var n = r(62);
    function i(e, t) {
        e.emit("error", t)
    }
    e.exports = {
        destroy: function(e, t) {
            var r = this
              , a = this._readableState && this._readableState.destroyed
              , o = this._writableState && this._writableState.destroyed;
            return a || o ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, (function(e) {
                !t && e ? (n.nextTick(i, r, e),
                r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
            }
            )),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(47)
      , i = r(52);
    function a(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n)
            return this.emit("error", new Error("write callback called multiple times"));
        r.writechunk = null,
        r.writecb = null,
        null != t && this.push(t),
        n(e);
        var i = this._readableState;
        i.reading = !1,
        (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
    function o(e) {
        if (!(this instanceof o))
            return new o(e);
        n.call(this, e),
        this._transformState = {
            afterTransform: a.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        e && ("function" == typeof e.transform && (this._transform = e.transform),
        "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s)
    }
    function s() {
        var e = this;
        "function" == typeof this._flush ? this._flush((function(t, r) {
            f(e, t, r)
        }
        )) : f(this, null, null)
    }
    function f(e, t, r) {
        if (t)
            return e.emit("error", t);
        if (null != r && e.push(r),
        e._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }
    i.inherits = r(0),
    i.inherits(o, n),
    o.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1,
        n.prototype.push.call(this, e, t)
    }
    ,
    o.prototype._transform = function(e, t, r) {
        throw new Error("_transform() is not implemented")
    }
    ,
    o.prototype._write = function(e, t, r) {
        var n = this._transformState;
        if (n.writecb = r,
        n.writechunk = e,
        n.writeencoding = t,
        !n.transforming) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }
    ,
    o.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
        this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }
    ,
    o.prototype._destroy = function(e, t) {
        var r = this;
        n.prototype._destroy.call(this, e, (function(e) {
            t(e),
            r.emit("close")
        }
        ))
    }
}
, function(e, t, r) {
    var n = r(0)
      , i = r(49)
      , a = r(1).Buffer
      , o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , s = new Array(64);
    function f() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function c(e, t, r) {
        return r ^ e & (t ^ r)
    }
    function d(e, t, r) {
        return e & t | r & (e | t)
    }
    function h(e) {
        return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
    }
    function u(e) {
        return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
    }
    function l(e) {
        return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
    }
    n(f, i),
    f.prototype.init = function() {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, m = 0 | this._h, y = 0; y < 16; ++y)
            r[y] = e.readInt32BE(4 * y);
        for (; y < 64; ++y)
            r[y] = 0 | (((t = r[y - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[y - 7] + l(r[y - 15]) + r[y - 16];
        for (var v = 0; v < 64; ++v) {
            var g = m + u(f) + c(f, p, b) + o[v] + r[v] | 0
              , _ = h(n) + d(n, i, a) | 0;
            m = b,
            b = p,
            p = f,
            f = s + g | 0,
            s = a,
            a = i,
            i = n,
            n = g + _ | 0
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = a + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0,
        this._f = p + this._f | 0,
        this._g = b + this._g | 0,
        this._h = m + this._h | 0
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e.writeInt32BE(this._h, 28),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var n = r(0)
      , i = r(49)
      , a = r(1).Buffer
      , o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , s = new Array(160);
    function f() {
        this.init(),
        this._w = s,
        i.call(this, 128, 112)
    }
    function c(e, t, r) {
        return r ^ e & (t ^ r)
    }
    function d(e, t, r) {
        return e & t | r & (e | t)
    }
    function h(e, t) {
        return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
    }
    function u(e, t) {
        return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
    }
    function l(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
    }
    function p(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
    }
    function b(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
    }
    function m(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
    }
    function y(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
    }
    n(f, i),
    f.prototype.init = function() {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, a = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, v = 0 | this._gh, g = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, S = 0 | this._cl, M = 0 | this._dl, k = 0 | this._el, E = 0 | this._fl, x = 0 | this._gl, A = 0 | this._hl, I = 0; I < 32; I += 2)
            t[I] = e.readInt32BE(4 * I),
            t[I + 1] = e.readInt32BE(4 * I + 4);
        for (; I < 160; I += 2) {
            var B = t[I - 30]
              , T = t[I - 30 + 1]
              , R = l(B, T)
              , C = p(T, B)
              , P = b(B = t[I - 4], T = t[I - 4 + 1])
              , j = m(T, B)
              , O = t[I - 14]
              , L = t[I - 14 + 1]
              , D = t[I - 32]
              , U = t[I - 32 + 1]
              , N = C + L | 0
              , q = R + O + y(N, C) | 0;
            q = (q = q + P + y(N = N + j | 0, j) | 0) + D + y(N = N + U | 0, U) | 0,
            t[I] = q,
            t[I + 1] = N
        }
        for (var z = 0; z < 160; z += 2) {
            q = t[z],
            N = t[z + 1];
            var F = d(r, n, i)
              , H = d(_, w, S)
              , K = h(r, _)
              , Y = h(_, r)
              , W = u(s, k)
              , $ = u(k, s)
              , V = o[z]
              , G = o[z + 1]
              , X = c(s, f, v)
              , Z = c(k, E, x)
              , J = A + $ | 0
              , Q = g + W + y(J, A) | 0;
            Q = (Q = (Q = Q + X + y(J = J + Z | 0, Z) | 0) + V + y(J = J + G | 0, G) | 0) + q + y(J = J + N | 0, N) | 0;
            var ee = Y + H | 0
              , te = K + F + y(ee, Y) | 0;
            g = v,
            A = x,
            v = f,
            x = E,
            f = s,
            E = k,
            s = a + Q + y(k = M + J | 0, M) | 0,
            a = i,
            M = S,
            i = n,
            S = w,
            n = r,
            w = _,
            r = Q + te + y(_ = J + ee | 0, J) | 0
        }
        this._al = this._al + _ | 0,
        this._bl = this._bl + w | 0,
        this._cl = this._cl + S | 0,
        this._dl = this._dl + M | 0,
        this._el = this._el + k | 0,
        this._fl = this._fl + E | 0,
        this._gl = this._gl + x | 0,
        this._hl = this._hl + A | 0,
        this._ah = this._ah + r + y(this._al, _) | 0,
        this._bh = this._bh + n + y(this._bl, w) | 0,
        this._ch = this._ch + i + y(this._cl, S) | 0,
        this._dh = this._dh + a + y(this._dl, M) | 0,
        this._eh = this._eh + s + y(this._el, k) | 0,
        this._fh = this._fh + f + y(this._fl, E) | 0,
        this._gh = this._gh + v + y(this._gl, x) | 0,
        this._hh = this._hh + g + y(this._hl, A) | 0
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(64);
        function t(t, r, n) {
            e.writeInt32BE(t, n),
            e.writeInt32BE(r, n + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        t(this._gh, this._gl, 48),
        t(this._hh, this._hl, 56),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var n = r(0)
      , i = r(193)
      , a = r(41)
      , o = r(1).Buffer
      , s = r(110)
      , f = r(82)
      , c = r(83)
      , d = o.alloc(128);
    function h(e, t) {
        a.call(this, "digest"),
        "string" == typeof t && (t = o.from(t));
        var r = "sha512" === e || "sha384" === e ? 128 : 64;
        (this._alg = e,
        this._key = t,
        t.length > r) ? t = ("rmd160" === e ? new f : c(e)).update(t).digest() : t.length < r && (t = o.concat([t, d], r));
        for (var n = this._ipad = o.allocUnsafe(r), i = this._opad = o.allocUnsafe(r), s = 0; s < r; s++)
            n[s] = 54 ^ t[s],
            i[s] = 92 ^ t[s];
        this._hash = "rmd160" === e ? new f : c(e),
        this._hash.update(n)
    }
    n(h, a),
    h.prototype._update = function(e) {
        this._hash.update(e)
    }
    ,
    h.prototype._final = function() {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new f : c(this._alg)).update(this._opad).update(e).digest()
    }
    ,
    e.exports = function(e, t) {
        return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new h("rmd160",t) : "md5" === e ? new i(s,t) : new h(e,t)
    }
}
, function(e, t, r) {
    var n = r(76);
    e.exports = function(e) {
        return (new n).update(e).digest()
    }
}
, function(e) {
    e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
}
, function(e, t, r) {
    t.pbkdf2 = r(195),
    t.pbkdf2Sync = r(115)
}
, function(e, t, r) {
    (function(t) {
        var r = Math.pow(2, 30) - 1;
        function n(e, r) {
            if ("string" != typeof e && !t.isBuffer(e))
                throw new TypeError(r + " must be a buffer or string")
        }
        e.exports = function(e, t, i, a) {
            if (n(e, "Password"),
            n(t, "Salt"),
            "number" != typeof i)
                throw new TypeError("Iterations not a number");
            if (i < 0)
                throw new TypeError("Bad iterations");
            if ("number" != typeof a)
                throw new TypeError("Key length not a number");
            if (a < 0 || a > r || a != a)
                throw new TypeError("Bad key length")
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var r;
        t.browser ? r = "utf-8" : r = parseInt(t.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary";
        e.exports = r
    }
    ).call(this, r(40))
}
, function(e, t, r) {
    var n = r(110)
      , i = r(82)
      , a = r(83)
      , o = r(113)
      , s = r(114)
      , f = r(1).Buffer
      , c = f.alloc(128)
      , d = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
    function h(e, t, r) {
        var o = function(e) {
            return "rmd160" === e || "ripemd160" === e ? function(e) {
                return (new i).update(e).digest()
            }
            : "md5" === e ? n : function(t) {
                return a(e).update(t).digest()
            }
        }(e)
          , s = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > s ? t = o(t) : t.length < s && (t = f.concat([t, c], s));
        for (var h = f.allocUnsafe(s + d[e]), u = f.allocUnsafe(s + d[e]), l = 0; l < s; l++)
            h[l] = 54 ^ t[l],
            u[l] = 92 ^ t[l];
        var p = f.allocUnsafe(s + r + 4);
        h.copy(p, 0, 0, s),
        this.ipad1 = p,
        this.ipad2 = h,
        this.opad = u,
        this.alg = e,
        this.blocksize = s,
        this.hash = o,
        this.size = d[e]
    }
    h.prototype.run = function(e, t) {
        return e.copy(t, this.blocksize),
        this.hash(t).copy(this.opad, this.blocksize),
        this.hash(this.opad)
    }
    ,
    e.exports = function(e, t, r, n, i) {
        o(e, t, r, n),
        f.isBuffer(e) || (e = f.from(e, s)),
        f.isBuffer(t) || (t = f.from(t, s));
        var a = new h(i = i || "sha1",e,t.length)
          , c = f.allocUnsafe(n)
          , u = f.allocUnsafe(t.length + 4);
        t.copy(u, 0, 0, t.length);
        for (var l = 0, p = d[i], b = Math.ceil(n / p), m = 1; m <= b; m++) {
            u.writeUInt32BE(m, t.length);
            for (var y = a.run(u, a.ipad1), v = y, g = 1; g < r; g++) {
                v = a.run(v, a.ipad2);
                for (var _ = 0; _ < p; _++)
                    y[_] ^= v[_]
            }
            y.copy(c, l),
            l += p
        }
        return c
    }
}
, function(e, t, r) {
    "use strict";
    t.readUInt32BE = function(e, t) {
        return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
    }
    ,
    t.writeUInt32BE = function(e, t, r) {
        e[0 + r] = t >>> 24,
        e[1 + r] = t >>> 16 & 255,
        e[2 + r] = t >>> 8 & 255,
        e[3 + r] = 255 & t
    }
    ,
    t.ip = function(e, t, r, n) {
        for (var i = 0, a = 0, o = 6; o >= 0; o -= 2) {
            for (var s = 0; s <= 24; s += 8)
                i <<= 1,
                i |= t >>> s + o & 1;
            for (s = 0; s <= 24; s += 8)
                i <<= 1,
                i |= e >>> s + o & 1
        }
        for (o = 6; o >= 0; o -= 2) {
            for (s = 1; s <= 25; s += 8)
                a <<= 1,
                a |= t >>> s + o & 1;
            for (s = 1; s <= 25; s += 8)
                a <<= 1,
                a |= e >>> s + o & 1
        }
        r[n + 0] = i >>> 0,
        r[n + 1] = a >>> 0
    }
    ,
    t.rip = function(e, t, r, n) {
        for (var i = 0, a = 0, o = 0; o < 4; o++)
            for (var s = 24; s >= 0; s -= 8)
                i <<= 1,
                i |= t >>> s + o & 1,
                i <<= 1,
                i |= e >>> s + o & 1;
        for (o = 4; o < 8; o++)
            for (s = 24; s >= 0; s -= 8)
                a <<= 1,
                a |= t >>> s + o & 1,
                a <<= 1,
                a |= e >>> s + o & 1;
        r[n + 0] = i >>> 0,
        r[n + 1] = a >>> 0
    }
    ,
    t.pc1 = function(e, t, r, n) {
        for (var i = 0, a = 0, o = 7; o >= 5; o--) {
            for (var s = 0; s <= 24; s += 8)
                i <<= 1,
                i |= t >> s + o & 1;
            for (s = 0; s <= 24; s += 8)
                i <<= 1,
                i |= e >> s + o & 1
        }
        for (s = 0; s <= 24; s += 8)
            i <<= 1,
            i |= t >> s + o & 1;
        for (o = 1; o <= 3; o++) {
            for (s = 0; s <= 24; s += 8)
                a <<= 1,
                a |= t >> s + o & 1;
            for (s = 0; s <= 24; s += 8)
                a <<= 1,
                a |= e >> s + o & 1
        }
        for (s = 0; s <= 24; s += 8)
            a <<= 1,
            a |= e >> s + o & 1;
        r[n + 0] = i >>> 0,
        r[n + 1] = a >>> 0
    }
    ,
    t.r28shl = function(e, t) {
        return e << t & 268435455 | e >>> 28 - t
    }
    ;
    var n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    t.pc2 = function(e, t, r, i) {
        for (var a = 0, o = 0, s = n.length >>> 1, f = 0; f < s; f++)
            a <<= 1,
            a |= e >>> n[f] & 1;
        for (f = s; f < n.length; f++)
            o <<= 1,
            o |= t >>> n[f] & 1;
        r[i + 0] = a >>> 0,
        r[i + 1] = o >>> 0
    }
    ,
    t.expand = function(e, t, r) {
        var n = 0
          , i = 0;
        n = (1 & e) << 5 | e >>> 27;
        for (var a = 23; a >= 15; a -= 4)
            n <<= 6,
            n |= e >>> a & 63;
        for (a = 11; a >= 3; a -= 4)
            i |= e >>> a & 63,
            i <<= 6;
        i |= (31 & e) << 1 | e >>> 31,
        t[r + 0] = n >>> 0,
        t[r + 1] = i >>> 0
    }
    ;
    var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    t.substitute = function(e, t) {
        for (var r = 0, n = 0; n < 4; n++) {
            r <<= 4,
            r |= i[64 * n + (e >>> 18 - 6 * n & 63)]
        }
        for (n = 0; n < 4; n++) {
            r <<= 4,
            r |= i[256 + 64 * n + (t >>> 18 - 6 * n & 63)]
        }
        return r >>> 0
    }
    ;
    var a = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    t.permute = function(e) {
        for (var t = 0, r = 0; r < a.length; r++)
            t <<= 1,
            t |= e >>> a[r] & 1;
        return t >>> 0
    }
    ,
    t.padSplit = function(e, t, r) {
        for (var n = e.toString(2); n.length < t; )
            n = "0" + n;
        for (var i = [], a = 0; a < t; a += r)
            i.push(n.slice(a, a + r));
        return i.join(" ")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(27)
      , i = r(0)
      , a = r(116)
      , o = r(84);
    function s() {
        this.tmp = new Array(2),
        this.keys = null
    }
    function f(e) {
        o.call(this, e);
        var t = new s;
        this._desState = t,
        this.deriveKeys(t, e.key)
    }
    i(f, o),
    e.exports = f,
    f.create = function(e) {
        return new f(e)
    }
    ;
    var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    f.prototype.deriveKeys = function(e, t) {
        e.keys = new Array(32),
        n.equal(t.length, this.blockSize, "Invalid key length");
        var r = a.readUInt32BE(t, 0)
          , i = a.readUInt32BE(t, 4);
        a.pc1(r, i, e.tmp, 0),
        r = e.tmp[0],
        i = e.tmp[1];
        for (var o = 0; o < e.keys.length; o += 2) {
            var s = c[o >>> 1];
            r = a.r28shl(r, s),
            i = a.r28shl(i, s),
            a.pc2(r, i, e.keys, o)
        }
    }
    ,
    f.prototype._update = function(e, t, r, n) {
        var i = this._desState
          , o = a.readUInt32BE(e, t)
          , s = a.readUInt32BE(e, t + 4);
        a.ip(o, s, i.tmp, 0),
        o = i.tmp[0],
        s = i.tmp[1],
        "encrypt" === this.type ? this._encrypt(i, o, s, i.tmp, 0) : this._decrypt(i, o, s, i.tmp, 0),
        o = i.tmp[0],
        s = i.tmp[1],
        a.writeUInt32BE(r, o, n),
        a.writeUInt32BE(r, s, n + 4)
    }
    ,
    f.prototype._pad = function(e, t) {
        for (var r = e.length - t, n = t; n < e.length; n++)
            e[n] = r;
        return !0
    }
    ,
    f.prototype._unpad = function(e) {
        for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
            n.equal(e[r], t);
        return e.slice(0, e.length - t)
    }
    ,
    f.prototype._encrypt = function(e, t, r, n, i) {
        for (var o = t, s = r, f = 0; f < e.keys.length; f += 2) {
            var c = e.keys[f]
              , d = e.keys[f + 1];
            a.expand(s, e.tmp, 0),
            c ^= e.tmp[0],
            d ^= e.tmp[1];
            var h = a.substitute(c, d)
              , u = s;
            s = (o ^ a.permute(h)) >>> 0,
            o = u
        }
        a.rip(s, o, n, i)
    }
    ,
    f.prototype._decrypt = function(e, t, r, n, i) {
        for (var o = r, s = t, f = e.keys.length - 2; f >= 0; f -= 2) {
            var c = e.keys[f]
              , d = e.keys[f + 1];
            a.expand(o, e.tmp, 0),
            c ^= e.tmp[0],
            d ^= e.tmp[1];
            var h = a.substitute(c, d)
              , u = o;
            o = (s ^ a.permute(h)) >>> 0,
            s = u
        }
        a.rip(o, s, n, i)
    }
}
, function(e, t, r) {
    var n = r(53)
      , i = r(1).Buffer
      , a = r(119);
    function o(e) {
        var t = e._cipher.encryptBlockRaw(e._prev);
        return a(e._prev),
        t
    }
    t.encrypt = function(e, t) {
        var r = Math.ceil(t.length / 16)
          , a = e._cache.length;
        e._cache = i.concat([e._cache, i.allocUnsafe(16 * r)]);
        for (var s = 0; s < r; s++) {
            var f = o(e)
              , c = a + 16 * s;
            e._cache.writeUInt32BE(f[0], c + 0),
            e._cache.writeUInt32BE(f[1], c + 4),
            e._cache.writeUInt32BE(f[2], c + 8),
            e._cache.writeUInt32BE(f[3], c + 12)
        }
        var d = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length),
        n(t, d)
    }
}
, function(e, t) {
    e.exports = function(e) {
        for (var t, r = e.length; r--; ) {
            if (255 !== (t = e.readUInt8(r))) {
                t++,
                e.writeUInt8(t, r);
                break
            }
            e.writeUInt8(0, r)
        }
    }
}
, function(e) {
    e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')
}
, function(e, t, r) {
    var n = r(63)
      , i = r(1).Buffer
      , a = r(41)
      , o = r(0)
      , s = r(208)
      , f = r(53)
      , c = r(119);
    function d(e, t, r, o) {
        a.call(this);
        var f = i.alloc(4, 0);
        this._cipher = new n.AES(t);
        var d = this._cipher.encryptBlock(f);
        this._ghash = new s(d),
        r = function(e, t, r) {
            if (12 === t.length)
                return e._finID = i.concat([t, i.from([0, 0, 0, 1])]),
                i.concat([t, i.from([0, 0, 0, 2])]);
            var n = new s(r)
              , a = t.length
              , o = a % 16;
            n.update(t),
            o && (o = 16 - o,
            n.update(i.alloc(o, 0))),
            n.update(i.alloc(8, 0));
            var f = 8 * a
              , d = i.alloc(8);
            d.writeUIntBE(f, 0, 8),
            n.update(d),
            e._finID = n.state;
            var h = i.from(e._finID);
            return c(h),
            h
        }(this, r, d),
        this._prev = i.from(r),
        this._cache = i.allocUnsafe(0),
        this._secCache = i.allocUnsafe(0),
        this._decrypt = o,
        this._alen = 0,
        this._len = 0,
        this._mode = e,
        this._authTag = null,
        this._called = !1
    }
    o(d, a),
    d.prototype._update = function(e) {
        if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;
            t < 16 && (t = i.alloc(t, 0),
            this._ghash.update(t))
        }
        this._called = !0;
        var r = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
        this._len += e.length,
        r
    }
    ,
    d.prototype._final = function() {
        if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
        var e = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(e, t) {
            var r = 0;
            e.length !== t.length && r++;
            for (var n = Math.min(e.length, t.length), i = 0; i < n; ++i)
                r += e[i] ^ t[i];
            return r
        }(e, this._authTag))
            throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = e,
        this._cipher.scrub()
    }
    ,
    d.prototype.getAuthTag = function() {
        if (this._decrypt || !i.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }
    ,
    d.prototype.setAuthTag = function(e) {
        if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e
    }
    ,
    d.prototype.setAAD = function(e) {
        if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e),
        this._alen += e.length
    }
    ,
    e.exports = d
}
, function(e, t, r) {
    var n = r(63)
      , i = r(1).Buffer
      , a = r(41);
    function o(e, t, r, o) {
        a.call(this),
        this._cipher = new n.AES(t),
        this._prev = i.from(r),
        this._cache = i.allocUnsafe(0),
        this._secCache = i.allocUnsafe(0),
        this._decrypt = o,
        this._mode = e
    }
    r(0)(o, a),
    o.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }
    ,
    o.prototype._final = function() {
        this._cipher.scrub()
    }
    ,
    e.exports = o
}
, function(e, t, r) {
    var n = r(48);
    e.exports = v,
    v.simpleSieve = m,
    v.fermatTest = y;
    var i = r(10)
      , a = new i(24)
      , o = new (r(124))
      , s = new i(1)
      , f = new i(2)
      , c = new i(5)
      , d = (new i(16),
    new i(8),
    new i(10))
      , h = new i(3)
      , u = (new i(7),
    new i(11))
      , l = new i(4)
      , p = (new i(12),
    null);
    function b() {
        if (null !== p)
            return p;
        var e = [];
        e[0] = 2;
        for (var t = 1, r = 3; r < 1048576; r += 2) {
            for (var n = Math.ceil(Math.sqrt(r)), i = 0; i < t && e[i] <= n && r % e[i] != 0; i++)
                ;
            t !== i && e[i] <= n || (e[t++] = r)
        }
        return p = e,
        e
    }
    function m(e) {
        for (var t = b(), r = 0; r < t.length; r++)
            if (0 === e.modn(t[r]))
                return 0 === e.cmpn(t[r]);
        return !0
    }
    function y(e) {
        var t = i.mont(e);
        return 0 === f.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
    }
    function v(e, t) {
        if (e < 16)
            return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
        var r, p;
        for (t = new i(t); ; ) {
            for (r = new i(n(Math.ceil(e / 8))); r.bitLength() > e; )
                r.ishrn(1);
            if (r.isEven() && r.iadd(s),
            r.testn(1) || r.iadd(f),
            t.cmp(f)) {
                if (!t.cmp(c))
                    for (; r.mod(d).cmp(h); )
                        r.iadd(l)
            } else
                for (; r.mod(a).cmp(u); )
                    r.iadd(l);
            if (m(p = r.shrn(1)) && m(r) && y(p) && y(r) && o.test(p) && o.test(r))
                return r
        }
    }
}
, function(e, t, r) {
    var n = r(10)
      , i = r(87);
    function a(e) {
        this.rand = e || new i.Rand
    }
    e.exports = a,
    a.create = function(e) {
        return new a(e)
    }
    ,
    a.prototype._randbelow = function(e) {
        var t = e.bitLength()
          , r = Math.ceil(t / 8);
        do {
            var i = new n(this.rand.generate(r))
        } while (i.cmp(e) >= 0);
        return i
    }
    ,
    a.prototype._randrange = function(e, t) {
        var r = t.sub(e);
        return e.add(this._randbelow(r))
    }
    ,
    a.prototype.test = function(e, t, r) {
        var i = e.bitLength()
          , a = n.mont(e)
          , o = new n(1).toRed(a);
        t || (t = Math.max(1, i / 48 | 0));
        for (var s = e.subn(1), f = 0; !s.testn(f); f++)
            ;
        for (var c = e.shrn(f), d = s.toRed(a); t > 0; t--) {
            var h = this._randrange(new n(2), s);
            r && r(h);
            var u = h.toRed(a).redPow(c);
            if (0 !== u.cmp(o) && 0 !== u.cmp(d)) {
                for (var l = 1; l < f; l++) {
                    if (0 === (u = u.redSqr()).cmp(o))
                        return !1;
                    if (0 === u.cmp(d))
                        break
                }
                if (l === f)
                    return !1
            }
        }
        return !0
    }
    ,
    a.prototype.getDivisor = function(e, t) {
        var r = e.bitLength()
          , i = n.mont(e)
          , a = new n(1).toRed(i);
        t || (t = Math.max(1, r / 48 | 0));
        for (var o = e.subn(1), s = 0; !o.testn(s); s++)
            ;
        for (var f = e.shrn(s), c = o.toRed(i); t > 0; t--) {
            var d = this._randrange(new n(2), o)
              , h = e.gcd(d);
            if (0 !== h.cmpn(1))
                return h;
            var u = d.toRed(i).redPow(f);
            if (0 !== u.cmp(a) && 0 !== u.cmp(c)) {
                for (var l = 1; l < s; l++) {
                    if (0 === (u = u.redSqr()).cmp(a))
                        return u.fromRed().subn(1).gcd(e);
                    if (0 === u.cmp(c))
                        break
                }
                if (l === s)
                    return (u = u.redSqr()).fromRed().subn(1).gcd(e)
            }
        }
        return !1
    }
}
, function(e, t, r) {
    "use strict";
    var n = t;
    function i(e) {
        return 1 === e.length ? "0" + e : e
    }
    function a(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t += i(e[r].toString(16));
        return t
    }
    n.toArray = function(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var r = [];
        if ("string" != typeof e) {
            for (var n = 0; n < e.length; n++)
                r[n] = 0 | e[n];
            return r
        }
        if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
            for (n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16))
        } else
            for (n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n)
                  , a = i >> 8
                  , o = 255 & i;
                a ? r.push(a, o) : r.push(o)
            }
        return r
    }
    ,
    n.zero2 = i,
    n.toHex = a,
    n.encode = function(e, t) {
        return "hex" === t ? a(e) : e
    }
}
, function(e, t, r) {
    "use strict";
    var n = t;
    n.base = r(65),
    n.short = r(220),
    n.mont = r(221),
    n.edwards = r(222)
}
, function(e, t, r) {
    "use strict";
    var n = r(33).rotr32;
    function i(e, t, r) {
        return e & t ^ ~e & r
    }
    function a(e, t, r) {
        return e & t ^ e & r ^ t & r
    }
    function o(e, t, r) {
        return e ^ t ^ r
    }
    t.ft_1 = function(e, t, r, n) {
        return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? o(t, r, n) : 2 === e ? a(t, r, n) : void 0
    }
    ,
    t.ch32 = i,
    t.maj32 = a,
    t.p32 = o,
    t.s0_256 = function(e) {
        return n(e, 2) ^ n(e, 13) ^ n(e, 22)
    }
    ,
    t.s1_256 = function(e) {
        return n(e, 6) ^ n(e, 11) ^ n(e, 25)
    }
    ,
    t.g0_256 = function(e) {
        return n(e, 7) ^ n(e, 18) ^ e >>> 3
    }
    ,
    t.g1_256 = function(e) {
        return n(e, 17) ^ n(e, 19) ^ e >>> 10
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(54)
      , a = r(127)
      , o = r(27)
      , s = n.sum32
      , f = n.sum32_4
      , c = n.sum32_5
      , d = a.ch32
      , h = a.maj32
      , u = a.s0_256
      , l = a.s1_256
      , p = a.g0_256
      , b = a.g1_256
      , m = i.BlockHash
      , y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    function v() {
        if (!(this instanceof v))
            return new v;
        m.call(this),
        this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
        this.k = y,
        this.W = new Array(64)
    }
    n.inherits(v, m),
    e.exports = v,
    v.blockSize = 512,
    v.outSize = 256,
    v.hmacStrength = 192,
    v.padLength = 64,
    v.prototype._update = function(e, t) {
        for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n];
        for (; n < r.length; n++)
            r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
        var i = this.h[0]
          , a = this.h[1]
          , m = this.h[2]
          , y = this.h[3]
          , v = this.h[4]
          , g = this.h[5]
          , _ = this.h[6]
          , w = this.h[7];
        for (o(this.k.length === r.length),
        n = 0; n < r.length; n++) {
            var S = c(w, l(v), d(v, g, _), this.k[n], r[n])
              , M = s(u(i), h(i, a, m));
            w = _,
            _ = g,
            g = v,
            v = s(y, S),
            y = m,
            m = a,
            a = i,
            i = s(S, M)
        }
        this.h[0] = s(this.h[0], i),
        this.h[1] = s(this.h[1], a),
        this.h[2] = s(this.h[2], m),
        this.h[3] = s(this.h[3], y),
        this.h[4] = s(this.h[4], v),
        this.h[5] = s(this.h[5], g),
        this.h[6] = s(this.h[6], _),
        this.h[7] = s(this.h[7], w)
    }
    ,
    v.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(54)
      , a = r(27)
      , o = n.rotr64_hi
      , s = n.rotr64_lo
      , f = n.shr64_hi
      , c = n.shr64_lo
      , d = n.sum64
      , h = n.sum64_hi
      , u = n.sum64_lo
      , l = n.sum64_4_hi
      , p = n.sum64_4_lo
      , b = n.sum64_5_hi
      , m = n.sum64_5_lo
      , y = i.BlockHash
      , v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    function g() {
        if (!(this instanceof g))
            return new g;
        y.call(this),
        this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
        this.k = v,
        this.W = new Array(160)
    }
    function _(e, t, r, n, i) {
        var a = e & r ^ ~e & i;
        return a < 0 && (a += 4294967296),
        a
    }
    function w(e, t, r, n, i, a) {
        var o = t & n ^ ~t & a;
        return o < 0 && (o += 4294967296),
        o
    }
    function S(e, t, r, n, i) {
        var a = e & r ^ e & i ^ r & i;
        return a < 0 && (a += 4294967296),
        a
    }
    function M(e, t, r, n, i, a) {
        var o = t & n ^ t & a ^ n & a;
        return o < 0 && (o += 4294967296),
        o
    }
    function k(e, t) {
        var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function E(e, t) {
        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function x(e, t) {
        var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
        return r < 0 && (r += 4294967296),
        r
    }
    function A(e, t) {
        var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
        return r < 0 && (r += 4294967296),
        r
    }
    function I(e, t) {
        var r = o(e, t, 1) ^ o(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function B(e, t) {
        var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
        return r < 0 && (r += 4294967296),
        r
    }
    function T(e, t) {
        var r = o(e, t, 19) ^ o(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296),
        r
    }
    function R(e, t) {
        var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
        return r < 0 && (r += 4294967296),
        r
    }
    n.inherits(g, y),
    e.exports = g,
    g.blockSize = 1024,
    g.outSize = 512,
    g.hmacStrength = 192,
    g.padLength = 128,
    g.prototype._prepareBlock = function(e, t) {
        for (var r = this.W, n = 0; n < 32; n++)
            r[n] = e[t + n];
        for (; n < r.length; n += 2) {
            var i = T(r[n - 4], r[n - 3])
              , a = R(r[n - 4], r[n - 3])
              , o = r[n - 14]
              , s = r[n - 13]
              , f = I(r[n - 30], r[n - 29])
              , c = B(r[n - 30], r[n - 29])
              , d = r[n - 32]
              , h = r[n - 31];
            r[n] = l(i, a, o, s, f, c, d, h),
            r[n + 1] = p(i, a, o, s, f, c, d, h)
        }
    }
    ,
    g.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var r = this.W
          , n = this.h[0]
          , i = this.h[1]
          , o = this.h[2]
          , s = this.h[3]
          , f = this.h[4]
          , c = this.h[5]
          , l = this.h[6]
          , p = this.h[7]
          , y = this.h[8]
          , v = this.h[9]
          , g = this.h[10]
          , I = this.h[11]
          , B = this.h[12]
          , T = this.h[13]
          , R = this.h[14]
          , C = this.h[15];
        a(this.k.length === r.length);
        for (var P = 0; P < r.length; P += 2) {
            var j = R
              , O = C
              , L = x(y, v)
              , D = A(y, v)
              , U = _(y, v, g, I, B)
              , N = w(y, v, g, I, B, T)
              , q = this.k[P]
              , z = this.k[P + 1]
              , F = r[P]
              , H = r[P + 1]
              , K = b(j, O, L, D, U, N, q, z, F, H)
              , Y = m(j, O, L, D, U, N, q, z, F, H);
            j = k(n, i),
            O = E(n, i),
            L = S(n, i, o, s, f),
            D = M(n, i, o, s, f, c);
            var W = h(j, O, L, D)
              , $ = u(j, O, L, D);
            R = B,
            C = T,
            B = g,
            T = I,
            g = y,
            I = v,
            y = h(l, p, K, Y),
            v = u(p, p, K, Y),
            l = f,
            p = c,
            f = o,
            c = s,
            o = n,
            s = i,
            n = h(K, Y, W, $),
            i = u(K, Y, W, $)
        }
        d(this.h, 0, n, i),
        d(this.h, 2, o, s),
        d(this.h, 4, f, c),
        d(this.h, 6, l, p),
        d(this.h, 8, y, v),
        d(this.h, 10, g, I),
        d(this.h, 12, B, T),
        d(this.h, 14, R, C)
    }
    ,
    g.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
    }
}
, function(e, t, r) {
    var n = r(0)
      , i = r(56).Reporter
      , a = r(14).Buffer;
    function o(e, t) {
        i.call(this, t),
        a.isBuffer(e) ? (this.base = e,
        this.offset = 0,
        this.length = e.length) : this.error("Input not Buffer")
    }
    function s(e, t) {
        if (Array.isArray(e))
            this.length = 0,
            this.value = e.map((function(e) {
                return e instanceof s || (e = new s(e,t)),
                this.length += e.length,
                e
            }
            ), this);
        else if ("number" == typeof e) {
            if (!(0 <= e && e <= 255))
                return t.error("non-byte EncoderBuffer value");
            this.value = e,
            this.length = 1
        } else if ("string" == typeof e)
            this.value = e,
            this.length = a.byteLength(e);
        else {
            if (!a.isBuffer(e))
                return t.error("Unsupported type: " + typeof e);
            this.value = e,
            this.length = e.length
        }
    }
    n(o, i),
    t.DecoderBuffer = o,
    o.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: i.prototype.save.call(this)
        }
    }
    ,
    o.prototype.restore = function(e) {
        var t = new o(this.base);
        return t.offset = e.offset,
        t.length = this.offset,
        this.offset = e.offset,
        i.prototype.restore.call(this, e.reporter),
        t
    }
    ,
    o.prototype.isEmpty = function() {
        return this.offset === this.length
    }
    ,
    o.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
    }
    ,
    o.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length))
            return this.error(t || "DecoderBuffer overrun");
        var r = new o(this.base);
        return r._reporterState = this._reporterState,
        r.offset = this.offset,
        r.length = this.offset + e,
        this.offset += e,
        r
    }
    ,
    o.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length)
    }
    ,
    t.EncoderBuffer = s,
    s.prototype.join = function(e, t) {
        return e || (e = new a(this.length)),
        t || (t = 0),
        0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach((function(r) {
            r.join(e, t),
            t += r.length
        }
        )) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : a.isBuffer(this.value) && this.value.copy(e, t),
        t += this.length),
        e)
    }
}
, function(e, t, r) {
    var n = t;
    n._reverse = function(e) {
        var t = {};
        return Object.keys(e).forEach((function(r) {
            (0 | r) == r && (r |= 0);
            var n = e[r];
            t[n] = r
        }
        )),
        t
    }
    ,
    n.der = r(242)
}
, function(e, t, r) {
    var n = r(0)
      , i = r(55)
      , a = i.base
      , o = i.bignum
      , s = i.constants.der;
    function f(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new c,
        this.tree._init(e.body)
    }
    function c(e) {
        a.Node.call(this, "der", e)
    }
    function d(e, t) {
        var r = e.readUInt8(t);
        if (e.isError(r))
            return r;
        var n = s.tagClass[r >> 6]
          , i = 0 == (32 & r);
        if (31 == (31 & r)) {
            var a = r;
            for (r = 0; 128 == (128 & a); ) {
                if (a = e.readUInt8(t),
                e.isError(a))
                    return a;
                r <<= 7,
                r |= 127 & a
            }
        } else
            r &= 31;
        return {
            cls: n,
            primitive: i,
            tag: r,
            tagStr: s.tag[r]
        }
    }
    function h(e, t, r) {
        var n = e.readUInt8(r);
        if (e.isError(n))
            return n;
        if (!t && 128 === n)
            return null;
        if (0 == (128 & n))
            return n;
        var i = 127 & n;
        if (i > 4)
            return e.error("length octect is too long");
        n = 0;
        for (var a = 0; a < i; a++) {
            n <<= 8;
            var o = e.readUInt8(r);
            if (e.isError(o))
                return o;
            n |= o
        }
        return n
    }
    e.exports = f,
    f.prototype.decode = function(e, t) {
        return e instanceof a.DecoderBuffer || (e = new a.DecoderBuffer(e,t)),
        this.tree._decode(e, t)
    }
    ,
    n(c, a.Node),
    c.prototype._peekTag = function(e, t, r) {
        if (e.isEmpty())
            return !1;
        var n = e.save()
          , i = d(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(i) ? i : (e.restore(n),
        i.tag === t || i.tagStr === t || i.tagStr + "of" === t || r)
    }
    ,
    c.prototype._decodeTag = function(e, t, r) {
        var n = d(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(n))
            return n;
        var i = h(e, n.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(i))
            return i;
        if (!r && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t)
            return e.error('Failed to match tag: "' + t + '"');
        if (n.primitive || null !== i)
            return e.skip(i, 'Failed to match body of: "' + t + '"');
        var a = e.save()
          , o = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(o) ? o : (i = e.offset - a.offset,
        e.restore(a),
        e.skip(i, 'Failed to match body of: "' + t + '"'))
    }
    ,
    c.prototype._skipUntilEnd = function(e, t) {
        for (; ; ) {
            var r = d(e, t);
            if (e.isError(r))
                return r;
            var n, i = h(e, r.primitive, t);
            if (e.isError(i))
                return i;
            if (n = r.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t),
            e.isError(n))
                return n;
            if ("end" === r.tagStr)
                break
        }
    }
    ,
    c.prototype._decodeList = function(e, t, r, n) {
        for (var i = []; !e.isEmpty(); ) {
            var a = this._peekTag(e, "end");
            if (e.isError(a))
                return a;
            var o = r.decode(e, "der", n);
            if (e.isError(o) && a)
                break;
            i.push(o)
        }
        return i
    }
    ,
    c.prototype._decodeStr = function(e, t) {
        if ("bitstr" === t) {
            var r = e.readUInt8();
            return e.isError(r) ? r : {
                unused: r,
                data: e.raw()
            }
        }
        if ("bmpstr" === t) {
            var n = e.raw();
            if (n.length % 2 == 1)
                return e.error("Decoding of string type: bmpstr length mismatch");
            for (var i = "", a = 0; a < n.length / 2; a++)
                i += String.fromCharCode(n.readUInt16BE(2 * a));
            return i
        }
        if ("numstr" === t) {
            var o = e.raw().toString("ascii");
            return this._isNumstr(o) ? o : e.error("Decoding of string type: numstr unsupported characters")
        }
        if ("octstr" === t)
            return e.raw();
        if ("objDesc" === t)
            return e.raw();
        if ("printstr" === t) {
            var s = e.raw().toString("ascii");
            return this._isPrintstr(s) ? s : e.error("Decoding of string type: printstr unsupported characters")
        }
        return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
    }
    ,
    c.prototype._decodeObjid = function(e, t, r) {
        for (var n, i = [], a = 0; !e.isEmpty(); ) {
            var o = e.readUInt8();
            a <<= 7,
            a |= 127 & o,
            0 == (128 & o) && (i.push(a),
            a = 0)
        }
        128 & o && i.push(a);
        var s = i[0] / 40 | 0
          , f = i[0] % 40;
        if (n = r ? i : [s, f].concat(i.slice(1)),
        t) {
            var c = t[n.join(" ")];
            void 0 === c && (c = t[n.join(".")]),
            void 0 !== c && (n = c)
        }
        return n
    }
    ,
    c.prototype._decodeTime = function(e, t) {
        var r = e.raw().toString();
        if ("gentime" === t)
            var n = 0 | r.slice(0, 4)
              , i = 0 | r.slice(4, 6)
              , a = 0 | r.slice(6, 8)
              , o = 0 | r.slice(8, 10)
              , s = 0 | r.slice(10, 12)
              , f = 0 | r.slice(12, 14);
        else {
            if ("utctime" !== t)
                return e.error("Decoding " + t + " time is not supported yet");
            n = 0 | r.slice(0, 2),
            i = 0 | r.slice(2, 4),
            a = 0 | r.slice(4, 6),
            o = 0 | r.slice(6, 8),
            s = 0 | r.slice(8, 10),
            f = 0 | r.slice(10, 12);
            n = n < 70 ? 2e3 + n : 1900 + n
        }
        return Date.UTC(n, i - 1, a, o, s, f, 0)
    }
    ,
    c.prototype._decodeNull = function(e) {
        return null
    }
    ,
    c.prototype._decodeBool = function(e) {
        var t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t
    }
    ,
    c.prototype._decodeInt = function(e, t) {
        var r = e.raw()
          , n = new o(r);
        return t && (n = t[n.toString(10)] || n),
        n
    }
    ,
    c.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getDecoder("der").tree
    }
}
, function(e, t, r) {
    var n = r(0)
      , i = r(14).Buffer
      , a = r(55)
      , o = a.base
      , s = a.constants.der;
    function f(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new c,
        this.tree._init(e.body)
    }
    function c(e) {
        o.Node.call(this, "der", e)
    }
    function d(e) {
        return e < 10 ? "0" + e : e
    }
    e.exports = f,
    f.prototype.encode = function(e, t) {
        return this.tree._encode(e, t).join()
    }
    ,
    n(c, o.Node),
    c.prototype._encodeComposite = function(e, t, r, n) {
        var a, o = function(e, t, r, n) {
            var i;
            "seqof" === e ? e = "seq" : "setof" === e && (e = "set");
            if (s.tagByName.hasOwnProperty(e))
                i = s.tagByName[e];
            else {
                if ("number" != typeof e || (0 | e) !== e)
                    return n.error("Unknown tag: " + e);
                i = e
            }
            if (i >= 31)
                return n.error("Multi-octet tag encoding unsupported");
            t || (i |= 32);
            return i |= s.tagClassByName[r || "universal"] << 6
        }(e, t, r, this.reporter);
        if (n.length < 128)
            return (a = new i(2))[0] = o,
            a[1] = n.length,
            this._createEncoderBuffer([a, n]);
        for (var f = 1, c = n.length; c >= 256; c >>= 8)
            f++;
        (a = new i(2 + f))[0] = o,
        a[1] = 128 | f;
        c = 1 + f;
        for (var d = n.length; d > 0; c--,
        d >>= 8)
            a[c] = 255 & d;
        return this._createEncoderBuffer([a, n])
    }
    ,
    c.prototype._encodeStr = function(e, t) {
        if ("bitstr" === t)
            return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ("bmpstr" === t) {
            for (var r = new i(2 * e.length), n = 0; n < e.length; n++)
                r.writeUInt16BE(e.charCodeAt(n), 2 * n);
            return this._createEncoderBuffer(r)
        }
        return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
    }
    ,
    c.prototype._encodeObjid = function(e, t, r) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("string objid given, but no values map found");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("objid not found in values map");
            e = t[e].split(/[\s\.]+/g);
            for (var n = 0; n < e.length; n++)
                e[n] |= 0
        } else if (Array.isArray(e)) {
            e = e.slice();
            for (n = 0; n < e.length; n++)
                e[n] |= 0
        }
        if (!Array.isArray(e))
            return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
        if (!r) {
            if (e[1] >= 40)
                return this.reporter.error("Second objid identifier OOB");
            e.splice(0, 2, 40 * e[0] + e[1])
        }
        var a = 0;
        for (n = 0; n < e.length; n++) {
            var o = e[n];
            for (a++; o >= 128; o >>= 7)
                a++
        }
        var s = new i(a)
          , f = s.length - 1;
        for (n = e.length - 1; n >= 0; n--) {
            o = e[n];
            for (s[f--] = 127 & o; (o >>= 7) > 0; )
                s[f--] = 128 | 127 & o
        }
        return this._createEncoderBuffer(s)
    }
    ,
    c.prototype._encodeTime = function(e, t) {
        var r, n = new Date(e);
        return "gentime" === t ? r = [d(n.getFullYear()), d(n.getUTCMonth() + 1), d(n.getUTCDate()), d(n.getUTCHours()), d(n.getUTCMinutes()), d(n.getUTCSeconds()), "Z"].join("") : "utctime" === t ? r = [d(n.getFullYear() % 100), d(n.getUTCMonth() + 1), d(n.getUTCDate()), d(n.getUTCHours()), d(n.getUTCMinutes()), d(n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"),
        this._encodeStr(r, "octstr")
    }
    ,
    c.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }
    ,
    c.prototype._encodeInt = function(e, t) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("String int or enum given, but no values map");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e]
        }
        if ("number" != typeof e && !i.isBuffer(e)) {
            var r = e.toArray();
            !e.sign && 128 & r[0] && r.unshift(0),
            e = new i(r)
        }
        if (i.isBuffer(e)) {
            var n = e.length;
            0 === e.length && n++;
            var a = new i(n);
            return e.copy(a),
            0 === e.length && (a[0] = 0),
            this._createEncoderBuffer(a)
        }
        if (e < 128)
            return this._createEncoderBuffer(e);
        if (e < 256)
            return this._createEncoderBuffer([0, e]);
        n = 1;
        for (var o = e; o >= 256; o >>= 8)
            n++;
        for (o = (a = new Array(n)).length - 1; o >= 0; o--)
            a[o] = 255 & e,
            e >>= 8;
        return 128 & a[0] && a.unshift(0),
        this._createEncoderBuffer(new i(a))
    }
    ,
    c.prototype._encodeBool = function(e) {
        return this._createEncoderBuffer(e ? 255 : 0)
    }
    ,
    c.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getEncoder("der").tree
    }
    ,
    c.prototype._skipDefault = function(e, t, r) {
        var n, i = this._baseState;
        if (null === i.default)
            return !1;
        var a = e.join();
        if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i.default, t, r).join()),
        a.length !== i.defaultBuffer.length)
            return !1;
        for (n = 0; n < a.length; n++)
            if (a[n] !== i.defaultBuffer[n])
                return !1;
        return !0
    }
}
, function(e) {
    e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
}
, function(e, t, r) {
    var n = r(51)
      , i = r(1).Buffer;
    function a(e) {
        var t = i.allocUnsafe(4);
        return t.writeUInt32BE(e, 0),
        t
    }
    e.exports = function(e, t) {
        for (var r, o = i.alloc(0), s = 0; o.length < t; )
            r = a(s++),
            o = i.concat([o, n("sha1").update(e).update(r).digest()]);
        return o.slice(0, t)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var r = e.length, n = -1; ++n < r; )
            e[n] ^= t[n];
        return e
    }
}
, function(e, t, r) {
    var n = r(10)
      , i = r(1).Buffer;
    e.exports = function(e, t) {
        return i.from(e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed().toArray())
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    var n;
    e.exports = (n = r(171),
    function(e) {
        var t = n
          , r = t.lib
          , i = r.WordArray
          , a = r.Hasher
          , o = t.algo
          , s = []
          , f = [];
        !function() {
            function t(t) {
                for (var r = e.sqrt(t), n = 2; n <= r; n++)
                    if (!(t % n))
                        return !1;
                return !0
            }
            function r(e) {
                return 4294967296 * (e - (0 | e)) | 0
            }
            for (var n = 2, i = 0; i < 64; )
                t(n) && (i < 8 && (s[i] = r(e.pow(n, .5))),
                f[i] = r(e.pow(n, 1 / 3)),
                i++),
                n++
        }();
        var c = []
          , d = o.SHA256 = a.extend({
            _doReset: function() {
                this._hash = new i.init(s.slice(0))
            },
            _doProcessBlock: function(e, t) {
                for (var r = this._hash.words, n = r[0], i = r[1], a = r[2], o = r[3], s = r[4], d = r[5], h = r[6], u = r[7], l = 0; l < 64; l++) {
                    if (l < 16)
                        c[l] = 0 | e[t + l];
                    else {
                        var p = c[l - 15]
                          , b = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                          , m = c[l - 2]
                          , y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                        c[l] = b + c[l - 7] + y + c[l - 16]
                    }
                    var v = n & i ^ n & a ^ i & a
                      , g = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)
                      , _ = u + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & d ^ ~s & h) + f[l] + c[l];
                    u = h,
                    h = d,
                    d = s,
                    s = o + _ | 0,
                    o = a,
                    a = i,
                    i = n,
                    n = _ + (g + v) | 0
                }
                r[0] = r[0] + n | 0,
                r[1] = r[1] + i | 0,
                r[2] = r[2] + a | 0,
                r[3] = r[3] + o | 0,
                r[4] = r[4] + s | 0,
                r[5] = r[5] + d | 0,
                r[6] = r[6] + h | 0,
                r[7] = r[7] + u | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , r = t.words
                  , n = 8 * this._nDataBytes
                  , i = 8 * t.sigBytes;
                return r[i >>> 5] |= 128 << 24 - i % 32,
                r[14 + (i + 64 >>> 9 << 4)] = e.floor(n / 4294967296),
                r[15 + (i + 64 >>> 9 << 4)] = n,
                t.sigBytes = 4 * r.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var e = a.clone.call(this);
                return e._hash = this._hash.clone(),
                e
            }
        });
        t.SHA256 = a._createHelper(d),
        t.HmacSHA256 = a._createHmacHelper(d)
    }(Math),
    n.SHA256)
}
, function(e, t, r) {
    (function(t) {
        var n;
        e.exports = (n = n || function(e, n) {
            var i;
            if ("undefined" != typeof window && window.crypto && (i = window.crypto),
            !i && "undefined" != typeof window && window.msCrypto && (i = window.msCrypto),
            !i && void 0 !== t && t.crypto && (i = t.crypto),
            !i)
                try {
                    i = r(172)
                } catch (e) {}
            var a = function() {
                if (i) {
                    if ("function" == typeof i.getRandomValues)
                        try {
                            return i.getRandomValues(new Uint32Array(1))[0]
                        } catch (e) {}
                    if ("function" == typeof i.randomBytes)
                        try {
                            return i.randomBytes(4).readInt32LE()
                        } catch (e) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            }
              , o = Object.create || function() {
                function e() {}
                return function(t) {
                    var r;
                    return e.prototype = t,
                    r = new e,
                    e.prototype = null,
                    r
                }
            }()
              , s = {}
              , f = s.lib = {}
              , c = f.Base = {
                extend: function(e) {
                    var t = o(this);
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }
                    ),
                    t.init.prototype = t,
                    t.$super = this,
                    t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                    e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , d = f.WordArray = c.extend({
                init: function(e, t) {
                    e = this.words = e || [],
                    this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || u).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , r = e.words
                      , n = this.sigBytes
                      , i = e.sigBytes;
                    if (this.clamp(),
                    n % 4)
                        for (var a = 0; a < i; a++) {
                            var o = r[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                            t[n + a >>> 2] |= o << 24 - (n + a) % 4 * 8
                        }
                    else
                        for (a = 0; a < i; a += 4)
                            t[n + a >>> 2] = r[a >>> 2];
                    return this.sigBytes += i,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , r = this.sigBytes;
                    t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                    t.length = e.ceil(r / 4)
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(e) {
                    for (var t = [], r = 0; r < e; r += 4)
                        t.push(a());
                    return new d.init(t,e)
                }
            })
              , h = s.enc = {}
              , u = h.Hex = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                        var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push((a >>> 4).toString(16)),
                        n.push((15 & a).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], n = 0; n < t; n += 2)
                        r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new d.init(r,t / 2)
                }
            }
              , l = h.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                        var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push(String.fromCharCode(a))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], n = 0; n < t; n++)
                        r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new d.init(r,t)
                }
            }
              , p = h.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(l.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return l.parse(unescape(encodeURIComponent(e)))
                }
            }
              , b = f.BufferedBlockAlgorithm = c.extend({
                reset: function() {
                    this._data = new d.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = p.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var r, n = this._data, i = n.words, a = n.sigBytes, o = this.blockSize, s = a / (4 * o), f = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, c = e.min(4 * f, a);
                    if (f) {
                        for (var h = 0; h < f; h += o)
                            this._doProcessBlock(i, h);
                        r = i.splice(0, f),
                        n.sigBytes -= c
                    }
                    return new d.init(r,c)
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            })
              , m = (f.Hasher = b.extend({
                cfg: c.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    b.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, r) {
                        return new e.init(r).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, r) {
                        return new m.HMAC.init(e,r).finalize(t)
                    }
                }
            }),
            s.algo = {});
            return s
        }(Math),
        n)
    }
    ).call(this, r(32))
}
, function(e, t, r) {
    "use strict";
    t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(48),
    t.createHash = t.Hash = r(51),
    t.createHmac = t.Hmac = r(109);
    var n = r(194)
      , i = Object.keys(n)
      , a = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
    t.getHashes = function() {
        return a
    }
    ;
    var o = r(112);
    t.pbkdf2 = o.pbkdf2,
    t.pbkdf2Sync = o.pbkdf2Sync;
    var s = r(196);
    t.Cipher = s.Cipher,
    t.createCipher = s.createCipher,
    t.Cipheriv = s.Cipheriv,
    t.createCipheriv = s.createCipheriv,
    t.Decipher = s.Decipher,
    t.createDecipher = s.createDecipher,
    t.Decipheriv = s.Decipheriv,
    t.createDecipheriv = s.createDecipheriv,
    t.getCiphers = s.getCiphers,
    t.listCiphers = s.listCiphers;
    var f = r(211);
    t.DiffieHellmanGroup = f.DiffieHellmanGroup,
    t.createDiffieHellmanGroup = f.createDiffieHellmanGroup,
    t.getDiffieHellman = f.getDiffieHellman,
    t.createDiffieHellman = f.createDiffieHellman,
    t.DiffieHellman = f.DiffieHellman;
    var c = r(217);
    t.createSign = c.createSign,
    t.Sign = c.Sign,
    t.createVerify = c.createVerify,
    t.Verify = c.Verify,
    t.createECDH = r(251);
    var d = r(252);
    t.publicEncrypt = d.publicEncrypt,
    t.privateEncrypt = d.privateEncrypt,
    t.publicDecrypt = d.publicDecrypt,
    t.privateDecrypt = d.privateDecrypt;
    var h = r(255);
    t.randomFill = h.randomFill,
    t.randomFillSync = h.randomFillSync,
    t.createCredentials = function() {
        throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
    }
    ,
    t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }
}
, function(e, t, r) {
    "use strict";
    t.byteLength = function(e) {
        var t = c(e)
          , r = t[0]
          , n = t[1];
        return 3 * (r + n) / 4 - n
    }
    ,
    t.toByteArray = function(e) {
        var t, r, n = c(e), o = n[0], s = n[1], f = new a(function(e, t, r) {
            return 3 * (t + r) / 4 - r
        }(0, o, s)), d = 0, h = s > 0 ? o - 4 : o;
        for (r = 0; r < h; r += 4)
            t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],
            f[d++] = t >> 16 & 255,
            f[d++] = t >> 8 & 255,
            f[d++] = 255 & t;
        2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4,
        f[d++] = 255 & t);
        1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2,
        f[d++] = t >> 8 & 255,
        f[d++] = 255 & t);
        return f
    }
    ,
    t.fromByteArray = function(e) {
        for (var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i; o < s; o += 16383)
            a.push(d(e, o, o + 16383 > s ? s : o + 16383));
        1 === i ? (t = e[r - 1],
        a.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
        a.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
        return a.join("")
    }
    ;
    for (var n = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = o.length; s < f; ++s)
        n[s] = o[s],
        i[o.charCodeAt(s)] = s;
    function c(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t),
        [r, r === t ? 0 : 4 - r % 4]
    }
    function d(e, t, r) {
        for (var i, a, o = [], s = t; s < r; s += 3)
            i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
            o.push(n[(a = i) >> 18 & 63] + n[a >> 12 & 63] + n[a >> 6 & 63] + n[63 & a]);
        return o.join("")
    }
    i["-".charCodeAt(0)] = 62,
    i["_".charCodeAt(0)] = 63
}
, function(e, t) {
    t.read = function(e, t, r, n, i) {
        var a, o, s = 8 * i - n - 1, f = (1 << s) - 1, c = f >> 1, d = -7, h = r ? i - 1 : 0, u = r ? -1 : 1, l = e[t + h];
        for (h += u,
        a = l & (1 << -d) - 1,
        l >>= -d,
        d += s; d > 0; a = 256 * a + e[t + h],
        h += u,
        d -= 8)
            ;
        for (o = a & (1 << -d) - 1,
        a >>= -d,
        d += n; d > 0; o = 256 * o + e[t + h],
        h += u,
        d -= 8)
            ;
        if (0 === a)
            a = 1 - c;
        else {
            if (a === f)
                return o ? NaN : 1 / 0 * (l ? -1 : 1);
            o += Math.pow(2, n),
            a -= c
        }
        return (l ? -1 : 1) * o * Math.pow(2, a - n)
    }
    ,
    t.write = function(e, t, r, n, i, a) {
        var o, s, f, c = 8 * a - i - 1, d = (1 << c) - 1, h = d >> 1, u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : a - 1, p = n ? 1 : -1, b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
        o = d) : (o = Math.floor(Math.log(t) / Math.LN2),
        t * (f = Math.pow(2, -o)) < 1 && (o--,
        f *= 2),
        (t += o + h >= 1 ? u / f : u * Math.pow(2, 1 - h)) * f >= 2 && (o++,
        f /= 2),
        o + h >= d ? (s = 0,
        o = d) : o + h >= 1 ? (s = (t * f - 1) * Math.pow(2, i),
        o += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i),
        o = 0)); i >= 8; e[r + l] = 255 & s,
        l += p,
        s /= 256,
        i -= 8)
            ;
        for (o = o << i | s,
        c += i; c > 0; e[r + l] = 255 & o,
        l += p,
        o /= 256,
        c -= 8)
            ;
        e[r + l - p] |= 128 * b
    }
}
, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}
, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}
, function(e, t) {}
, function(e, t, r) {
    "use strict";
    var n = r(1).Buffer
      , i = r(179);
    e.exports = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t,
            this.tail = t,
            ++this.length
        }
        ,
        e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t),
            this.head = t,
            ++this.length
        }
        ,
        e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                e
            }
        }
        ,
        e.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        e.prototype.join = function(e) {
            if (0 === this.length)
                return "";
            for (var t = this.head, r = "" + t.data; t = t.next; )
                r += e + t.data;
            return r
        }
        ,
        e.prototype.concat = function(e) {
            if (0 === this.length)
                return n.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var t, r, i, a = n.allocUnsafe(e >>> 0), o = this.head, s = 0; o; )
                t = o.data,
                r = a,
                i = s,
                t.copy(r, i),
                s += o.data.length,
                o = o.next;
            return a
        }
        ,
        e
    }(),
    i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
        var e = i.inspect({
            length: this.length
        });
        return this.constructor.name + " " + e
    }
    )
}
, function(e, t) {}
, function(e, t, r) {
    (function(e) {
        var n = void 0 !== e && e || "undefined" != typeof self && self || window
          , i = Function.prototype.apply;
        function a(e, t) {
            this._id = e,
            this._clearFn = t
        }
        t.setTimeout = function() {
            return new a(i.call(setTimeout, n, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new a(i.call(setInterval, n, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        a.prototype.unref = a.prototype.ref = function() {}
        ,
        a.prototype.close = function() {
            this._clearFn.call(n, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }
            ), t))
        }
        ,
        r(181),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(this, r(32))
}
, function(e, t, r) {
    (function(e, t) {
        !function(e, r) {
            "use strict";
            if (!e.setImmediate) {
                var n, i, a, o, s, f = 1, c = {}, d = !1, h = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                u = u && u.setTimeout ? u : e,
                "[object process]" === {}.toString.call(e.process) ? n = function(e) {
                    t.nextTick((function() {
                        p(e)
                    }
                    ))
                }
                : !function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = r,
                        t
                    }
                }() ? e.MessageChannel ? ((a = new MessageChannel).port1.onmessage = function(e) {
                    p(e.data)
                }
                ,
                n = function(e) {
                    a.port2.postMessage(e)
                }
                ) : h && "onreadystatechange"in h.createElement("script") ? (i = h.documentElement,
                n = function(e) {
                    var t = h.createElement("script");
                    t.onreadystatechange = function() {
                        p(e),
                        t.onreadystatechange = null,
                        i.removeChild(t),
                        t = null
                    }
                    ,
                    i.appendChild(t)
                }
                ) : n = function(e) {
                    setTimeout(p, 0, e)
                }
                : (o = "setImmediate$" + Math.random() + "$",
                s = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(o) && p(+t.data.slice(o.length))
                }
                ,
                e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s),
                n = function(t) {
                    e.postMessage(o + t, "*")
                }
                ),
                u.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)
                        t[r] = arguments[r + 1];
                    var i = {
                        callback: e,
                        args: t
                    };
                    return c[f] = i,
                    n(f),
                    f++
                }
                ,
                u.clearImmediate = l
            }
            function l(e) {
                delete c[e]
            }
            function p(e) {
                if (d)
                    setTimeout(p, 0, e);
                else {
                    var t = c[e];
                    if (t) {
                        d = !0;
                        try {
                            !function(e) {
                                var t = e.callback
                                  , n = e.args;
                                switch (n.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(n[0]);
                                    break;
                                case 2:
                                    t(n[0], n[1]);
                                    break;
                                case 3:
                                    t(n[0], n[1], n[2]);
                                    break;
                                default:
                                    t.apply(r, n)
                                }
                            }(t)
                        } finally {
                            l(e),
                            d = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(this, r(32), r(40))
}
, function(e, t, r) {
    (function(t) {
        function r(e) {
            try {
                if (!t.localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            var r = t.localStorage[e];
            return null != r && "true" === String(r).toLowerCase()
        }
        e.exports = function(e, t) {
            if (r("noDeprecation"))
                return e;
            var n = !1;
            return function() {
                if (!n) {
                    if (r("throwDeprecation"))
                        throw new Error(t);
                    r("traceDeprecation") ? console.trace(t) : console.warn(t),
                    n = !0
                }
                return e.apply(this, arguments)
            }
        }
    }
    ).call(this, r(32))
}
, function(e, t, r) {
    var n = r(14)
      , i = n.Buffer;
    function a(e, t) {
        for (var r in e)
            t[r] = e[r]
    }
    function o(e, t, r) {
        return i(e, t, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (a(n, t),
    t.Buffer = o),
    o.prototype = Object.create(i.prototype),
    a(i, o),
    o.from = function(e, t, r) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return i(e, t, r)
    }
    ,
    o.alloc = function(e, t, r) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var n = i(e);
        return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
        n
    }
    ,
    o.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return i(e)
    }
    ,
    o.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e)
    }
}
, function(e, t, r) {
    "use strict";
    e.exports = a;
    var n = r(106)
      , i = r(52);
    function a(e) {
        if (!(this instanceof a))
            return new a(e);
        n.call(this, e)
    }
    i.inherits = r(0),
    i.inherits(a, n),
    a.prototype._transform = function(e, t, r) {
        r(null, e)
    }
}
, function(e, t, r) {
    e.exports = r(80)
}
, function(e, t, r) {
    e.exports = r(47)
}
, function(e, t, r) {
    e.exports = r(79).Transform
}
, function(e, t, r) {
    e.exports = r(79).PassThrough
}
, function(e, t, r) {
    var n = r(0)
      , i = r(49)
      , a = r(1).Buffer
      , o = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function f() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function c(e) {
        return e << 30 | e >>> 2
    }
    function d(e, t, r, n) {
        return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
    }
    n(f, i),
    f.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, s = 0 | this._d, f = 0 | this._e, h = 0; h < 16; ++h)
            r[h] = e.readInt32BE(4 * h);
        for (; h < 80; ++h)
            r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
        for (var u = 0; u < 80; ++u) {
            var l = ~~(u / 20)
              , p = 0 | ((t = n) << 5 | t >>> 27) + d(l, i, a, s) + f + r[u] + o[l];
            f = s,
            s = a,
            a = c(i),
            i = n,
            n = p
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = a + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var n = r(0)
      , i = r(49)
      , a = r(1).Buffer
      , o = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function f() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function c(e) {
        return e << 5 | e >>> 27
    }
    function d(e) {
        return e << 30 | e >>> 2
    }
    function h(e, t, r, n) {
        return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
    }
    n(f, i),
    f.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    f.prototype._update = function(e) {
        for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, s = 0 | this._d, f = 0 | this._e, u = 0; u < 16; ++u)
            r[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u)
            r[u] = (t = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]) << 1 | t >>> 31;
        for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20)
              , b = c(n) + h(p, i, a, s) + f + r[l] + o[p] | 0;
            f = s,
            s = a,
            a = d(i),
            i = n,
            n = b
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = a + this._c | 0,
        this._d = s + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    f.prototype._hash = function() {
        var e = a.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var n = r(0)
      , i = r(107)
      , a = r(49)
      , o = r(1).Buffer
      , s = new Array(64);
    function f() {
        this.init(),
        this._w = s,
        a.call(this, 64, 56)
    }
    n(f, i),
    f.prototype.init = function() {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(28);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    var n = r(0)
      , i = r(108)
      , a = r(49)
      , o = r(1).Buffer
      , s = new Array(160);
    function f() {
        this.init(),
        this._w = s,
        a.call(this, 128, 112)
    }
    n(f, i),
    f.prototype.init = function() {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
    }
    ,
    f.prototype._hash = function() {
        var e = o.allocUnsafe(48);
        function t(t, r, n) {
            e.writeInt32BE(t, n),
            e.writeInt32BE(r, n + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        e
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var n = r(0)
      , i = r(1).Buffer
      , a = r(41)
      , o = i.alloc(128)
      , s = 64;
    function f(e, t) {
        a.call(this, "digest"),
        "string" == typeof t && (t = i.from(t)),
        this._alg = e,
        this._key = t,
        t.length > s ? t = e(t) : t.length < s && (t = i.concat([t, o], s));
        for (var r = this._ipad = i.allocUnsafe(s), n = this._opad = i.allocUnsafe(s), f = 0; f < s; f++)
            r[f] = 54 ^ t[f],
            n[f] = 92 ^ t[f];
        this._hash = [r]
    }
    n(f, a),
    f.prototype._update = function(e) {
        this._hash.push(e)
    }
    ,
    f.prototype._final = function() {
        var e = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, e]))
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    e.exports = r(111)
}
, function(e, t, r) {
    (function(t, n) {
        var i, a = r(113), o = r(114), s = r(115), f = r(1).Buffer, c = t.crypto && t.crypto.subtle, d = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, h = [];
        function u(e, t, r, n, i) {
            return c.importKey("raw", e, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then((function(e) {
                return c.deriveBits({
                    name: "PBKDF2",
                    salt: t,
                    iterations: r,
                    hash: {
                        name: i
                    }
                }, e, n << 3)
            }
            )).then((function(e) {
                return f.from(e)
            }
            ))
        }
        e.exports = function(e, r, l, p, b, m) {
            "function" == typeof b && (m = b,
            b = void 0);
            var y = d[(b = b || "sha1").toLowerCase()];
            if (!y || "function" != typeof t.Promise)
                return n.nextTick((function() {
                    var t;
                    try {
                        t = s(e, r, l, p, b)
                    } catch (e) {
                        return m(e)
                    }
                    m(null, t)
                }
                ));
            if (a(e, r, l, p),
            "function" != typeof m)
                throw new Error("No callback provided to pbkdf2");
            f.isBuffer(e) || (e = f.from(e, o)),
            f.isBuffer(r) || (r = f.from(r, o)),
            function(e, t) {
                e.then((function(e) {
                    n.nextTick((function() {
                        t(null, e)
                    }
                    ))
                }
                ), (function(e) {
                    n.nextTick((function() {
                        t(e)
                    }
                    ))
                }
                ))
            }(function(e) {
                if (t.process && !t.process.browser)
                    return Promise.resolve(!1);
                if (!c || !c.importKey || !c.deriveBits)
                    return Promise.resolve(!1);
                if (void 0 !== h[e])
                    return h[e];
                var r = u(i = i || f.alloc(8), i, 10, 128, e).then((function() {
                    return !0
                }
                )).catch((function() {
                    return !1
                }
                ));
                return h[e] = r,
                r
            }(y).then((function(t) {
                return t ? u(e, r, l, p, y) : s(e, r, l, p, b)
            }
            )), m)
        }
    }
    ).call(this, r(32), r(40))
}
, function(e, t, r) {
    var n = r(197)
      , i = r(85)
      , a = r(86)
      , o = r(210)
      , s = r(64);
    function f(e, t, r) {
        if (e = e.toLowerCase(),
        a[e])
            return i.createCipheriv(e, t, r);
        if (o[e])
            return new n({
                key: t,
                iv: r,
                mode: e
            });
        throw new TypeError("invalid suite type")
    }
    function c(e, t, r) {
        if (e = e.toLowerCase(),
        a[e])
            return i.createDecipheriv(e, t, r);
        if (o[e])
            return new n({
                key: t,
                iv: r,
                mode: e,
                decrypt: !0
            });
        throw new TypeError("invalid suite type")
    }
    t.createCipher = t.Cipher = function(e, t) {
        var r, n;
        if (e = e.toLowerCase(),
        a[e])
            r = a[e].key,
            n = a[e].iv;
        else {
            if (!o[e])
                throw new TypeError("invalid suite type");
            r = 8 * o[e].key,
            n = o[e].iv
        }
        var i = s(t, !1, r, n);
        return f(e, i.key, i.iv)
    }
    ,
    t.createCipheriv = t.Cipheriv = f,
    t.createDecipher = t.Decipher = function(e, t) {
        var r, n;
        if (e = e.toLowerCase(),
        a[e])
            r = a[e].key,
            n = a[e].iv;
        else {
            if (!o[e])
                throw new TypeError("invalid suite type");
            r = 8 * o[e].key,
            n = o[e].iv
        }
        var i = s(t, !1, r, n);
        return c(e, i.key, i.iv)
    }
    ,
    t.createDecipheriv = t.Decipheriv = c,
    t.listCiphers = t.getCiphers = function() {
        return Object.keys(o).concat(i.getCiphers())
    }
}
, function(e, t, r) {
    var n = r(41)
      , i = r(198)
      , a = r(0)
      , o = r(1).Buffer
      , s = {
        "des-ede3-cbc": i.CBC.instantiate(i.EDE),
        "des-ede3": i.EDE,
        "des-ede-cbc": i.CBC.instantiate(i.EDE),
        "des-ede": i.EDE,
        "des-cbc": i.CBC.instantiate(i.DES),
        "des-ecb": i.DES
    };
    function f(e) {
        n.call(this);
        var t, r = e.mode.toLowerCase(), i = s[r];
        t = e.decrypt ? "decrypt" : "encrypt";
        var a = e.key;
        o.isBuffer(a) || (a = o.from(a)),
        "des-ede" !== r && "des-ede-cbc" !== r || (a = o.concat([a, a.slice(0, 8)]));
        var f = e.iv;
        o.isBuffer(f) || (f = o.from(f)),
        this._des = i.create({
            key: a,
            iv: f,
            type: t
        })
    }
    s.des = s["des-cbc"],
    s.des3 = s["des-ede3-cbc"],
    e.exports = f,
    a(f, n),
    f.prototype._update = function(e) {
        return o.from(this._des.update(e))
    }
    ,
    f.prototype._final = function() {
        return o.from(this._des.final())
    }
}
, function(e, t, r) {
    "use strict";
    t.utils = r(116),
    t.Cipher = r(84),
    t.DES = r(117),
    t.CBC = r(199),
    t.EDE = r(200)
}
, function(e, t, r) {
    "use strict";
    var n = r(27)
      , i = r(0)
      , a = {};
    function o(e) {
        n.equal(e.length, 8, "Invalid IV length"),
        this.iv = new Array(8);
        for (var t = 0; t < this.iv.length; t++)
            this.iv[t] = e[t]
    }
    t.instantiate = function(e) {
        function t(t) {
            e.call(this, t),
            this._cbcInit()
        }
        i(t, e);
        for (var r = Object.keys(a), n = 0; n < r.length; n++) {
            var o = r[n];
            t.prototype[o] = a[o]
        }
        return t.create = function(e) {
            return new t(e)
        }
        ,
        t
    }
    ,
    a._cbcInit = function() {
        var e = new o(this.options.iv);
        this._cbcState = e
    }
    ,
    a._update = function(e, t, r, n) {
        var i = this._cbcState
          , a = this.constructor.super_.prototype
          , o = i.iv;
        if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++)
                o[s] ^= e[t + s];
            a._update.call(this, o, 0, r, n);
            for (s = 0; s < this.blockSize; s++)
                o[s] = r[n + s]
        } else {
            a._update.call(this, e, t, r, n);
            for (s = 0; s < this.blockSize; s++)
                r[n + s] ^= o[s];
            for (s = 0; s < this.blockSize; s++)
                o[s] = e[t + s]
        }
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(27)
      , i = r(0)
      , a = r(84)
      , o = r(117);
    function s(e, t) {
        n.equal(t.length, 24, "Invalid key length");
        var r = t.slice(0, 8)
          , i = t.slice(8, 16)
          , a = t.slice(16, 24);
        this.ciphers = "encrypt" === e ? [o.create({
            type: "encrypt",
            key: r
        }), o.create({
            type: "decrypt",
            key: i
        }), o.create({
            type: "encrypt",
            key: a
        })] : [o.create({
            type: "decrypt",
            key: a
        }), o.create({
            type: "encrypt",
            key: i
        }), o.create({
            type: "decrypt",
            key: r
        })]
    }
    function f(e) {
        a.call(this, e);
        var t = new s(this.type,this.options.key);
        this._edeState = t
    }
    i(f, a),
    e.exports = f,
    f.create = function(e) {
        return new f(e)
    }
    ,
    f.prototype._update = function(e, t, r, n) {
        var i = this._edeState;
        i.ciphers[0]._update(e, t, r, n),
        i.ciphers[1]._update(r, n, r, n),
        i.ciphers[2]._update(r, n, r, n)
    }
    ,
    f.prototype._pad = o.prototype._pad,
    f.prototype._unpad = o.prototype._unpad
}
, function(e, t, r) {
    var n = r(86)
      , i = r(121)
      , a = r(1).Buffer
      , o = r(122)
      , s = r(41)
      , f = r(63)
      , c = r(64);
    function d(e, t, r) {
        s.call(this),
        this._cache = new u,
        this._cipher = new f.AES(t),
        this._prev = a.from(r),
        this._mode = e,
        this._autopadding = !0
    }
    r(0)(d, s),
    d.prototype._update = function(e) {
        var t, r;
        this._cache.add(e);
        for (var n = []; t = this._cache.get(); )
            r = this._mode.encrypt(this, t),
            n.push(r);
        return a.concat(n)
    }
    ;
    var h = a.alloc(16, 16);
    function u() {
        this.cache = a.allocUnsafe(0)
    }
    function l(e, t, r) {
        var s = n[e.toLowerCase()];
        if (!s)
            throw new TypeError("invalid suite type");
        if ("string" == typeof t && (t = a.from(t)),
        t.length !== s.key / 8)
            throw new TypeError("invalid key length " + t.length);
        if ("string" == typeof r && (r = a.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
            throw new TypeError("invalid iv length " + r.length);
        return "stream" === s.type ? new o(s.module,t,r) : "auth" === s.type ? new i(s.module,t,r) : new d(s.module,t,r)
    }
    d.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return e = this._mode.encrypt(this, e),
            this._cipher.scrub(),
            e;
        if (!e.equals(h))
            throw this._cipher.scrub(),
            new Error("data not multiple of block length")
    }
    ,
    d.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    u.prototype.add = function(e) {
        this.cache = a.concat([this.cache, e])
    }
    ,
    u.prototype.get = function() {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16),
            e
        }
        return null
    }
    ,
    u.prototype.flush = function() {
        for (var e = 16 - this.cache.length, t = a.allocUnsafe(e), r = -1; ++r < e; )
            t.writeUInt8(e, r);
        return a.concat([this.cache, t])
    }
    ,
    t.createCipheriv = l,
    t.createCipher = function(e, t) {
        var r = n[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var i = c(t, !1, r.key, r.iv);
        return l(e, i.key, i.iv)
    }
}
, function(e, t) {
    t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t)
    }
    ,
    t.decrypt = function(e, t) {
        return e._cipher.decryptBlock(t)
    }
}
, function(e, t, r) {
    var n = r(53);
    t.encrypt = function(e, t) {
        var r = n(t, e._prev);
        return e._prev = e._cipher.encryptBlock(r),
        e._prev
    }
    ,
    t.decrypt = function(e, t) {
        var r = e._prev;
        e._prev = t;
        var i = e._cipher.decryptBlock(t);
        return n(i, r)
    }
}
, function(e, t, r) {
    var n = r(1).Buffer
      , i = r(53);
    function a(e, t, r) {
        var a = t.length
          , o = i(t, e._cache);
        return e._cache = e._cache.slice(a),
        e._prev = n.concat([e._prev, r ? t : o]),
        o
    }
    t.encrypt = function(e, t, r) {
        for (var i, o = n.allocUnsafe(0); t.length; ) {
            if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev),
            e._prev = n.allocUnsafe(0)),
            !(e._cache.length <= t.length)) {
                o = n.concat([o, a(e, t, r)]);
                break
            }
            i = e._cache.length,
            o = n.concat([o, a(e, t.slice(0, i), r)]),
            t = t.slice(i)
        }
        return o
    }
}
, function(e, t, r) {
    var n = r(1).Buffer;
    function i(e, t, r) {
        var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
        return e._prev = n.concat([e._prev.slice(1), n.from([r ? t : i])]),
        i
    }
    t.encrypt = function(e, t, r) {
        for (var a = t.length, o = n.allocUnsafe(a), s = -1; ++s < a; )
            o[s] = i(e, t[s], r);
        return o
    }
}
, function(e, t, r) {
    var n = r(1).Buffer;
    function i(e, t, r) {
        for (var n, i, o = -1, s = 0; ++o < 8; )
            n = t & 1 << 7 - o ? 128 : 0,
            s += (128 & (i = e._cipher.encryptBlock(e._prev)[0] ^ n)) >> o % 8,
            e._prev = a(e._prev, r ? n : i);
        return s
    }
    function a(e, t) {
        var r = e.length
          , i = -1
          , a = n.allocUnsafe(e.length);
        for (e = n.concat([e, n.from([t])]); ++i < r; )
            a[i] = e[i] << 1 | e[i + 1] >> 7;
        return a
    }
    t.encrypt = function(e, t, r) {
        for (var a = t.length, o = n.allocUnsafe(a), s = -1; ++s < a; )
            o[s] = i(e, t[s], r);
        return o
    }
}
, function(e, t, r) {
    (function(e) {
        var n = r(53);
        function i(e) {
            return e._prev = e._cipher.encryptBlock(e._prev),
            e._prev
        }
        t.encrypt = function(t, r) {
            for (; t._cache.length < r.length; )
                t._cache = e.concat([t._cache, i(t)]);
            var a = t._cache.slice(0, r.length);
            return t._cache = t._cache.slice(r.length),
            n(r, a)
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    var n = r(1).Buffer
      , i = n.alloc(16, 0);
    function a(e) {
        var t = n.allocUnsafe(16);
        return t.writeUInt32BE(e[0] >>> 0, 0),
        t.writeUInt32BE(e[1] >>> 0, 4),
        t.writeUInt32BE(e[2] >>> 0, 8),
        t.writeUInt32BE(e[3] >>> 0, 12),
        t
    }
    function o(e) {
        this.h = e,
        this.state = n.alloc(16, 0),
        this.cache = n.allocUnsafe(0)
    }
    o.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length; )
            this.state[t] ^= e[t];
        this._multiply()
    }
    ,
    o.prototype._multiply = function() {
        for (var e, t, r, n = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], i = [0, 0, 0, 0], o = -1; ++o < 128; ) {
            for (0 != (this.state[~~(o / 8)] & 1 << 7 - o % 8) && (i[0] ^= n[0],
            i[1] ^= n[1],
            i[2] ^= n[2],
            i[3] ^= n[3]),
            r = 0 != (1 & n[3]),
            t = 3; t > 0; t--)
                n[t] = n[t] >>> 1 | (1 & n[t - 1]) << 31;
            n[0] = n[0] >>> 1,
            r && (n[0] = n[0] ^ 225 << 24)
        }
        this.state = a(i)
    }
    ,
    o.prototype.update = function(e) {
        var t;
        for (this.cache = n.concat([this.cache, e]); this.cache.length >= 16; )
            t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            this.ghash(t)
    }
    ,
    o.prototype.final = function(e, t) {
        return this.cache.length && this.ghash(n.concat([this.cache, i], 16)),
        this.ghash(a([0, e, 0, t])),
        this.state
    }
    ,
    e.exports = o
}
, function(e, t, r) {
    var n = r(121)
      , i = r(1).Buffer
      , a = r(86)
      , o = r(122)
      , s = r(41)
      , f = r(63)
      , c = r(64);
    function d(e, t, r) {
        s.call(this),
        this._cache = new h,
        this._last = void 0,
        this._cipher = new f.AES(t),
        this._prev = i.from(r),
        this._mode = e,
        this._autopadding = !0
    }
    function h() {
        this.cache = i.allocUnsafe(0)
    }
    function u(e, t, r) {
        var s = a[e.toLowerCase()];
        if (!s)
            throw new TypeError("invalid suite type");
        if ("string" == typeof r && (r = i.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
            throw new TypeError("invalid iv length " + r.length);
        if ("string" == typeof t && (t = i.from(t)),
        t.length !== s.key / 8)
            throw new TypeError("invalid key length " + t.length);
        return "stream" === s.type ? new o(s.module,t,r,!0) : "auth" === s.type ? new n(s.module,t,r,!0) : new d(s.module,t,r)
    }
    r(0)(d, s),
    d.prototype._update = function(e) {
        var t, r;
        this._cache.add(e);
        for (var n = []; t = this._cache.get(this._autopadding); )
            r = this._mode.decrypt(this, t),
            n.push(r);
        return i.concat(n)
    }
    ,
    d.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return function(e) {
                var t = e[15];
                if (t < 1 || t > 16)
                    throw new Error("unable to decrypt data");
                var r = -1;
                for (; ++r < t; )
                    if (e[r + (16 - t)] !== t)
                        throw new Error("unable to decrypt data");
                if (16 === t)
                    return;
                return e.slice(0, 16 - t)
            }(this._mode.decrypt(this, e));
        if (e)
            throw new Error("data not multiple of block length")
    }
    ,
    d.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    h.prototype.add = function(e) {
        this.cache = i.concat([this.cache, e])
    }
    ,
    h.prototype.get = function(e) {
        var t;
        if (e) {
            if (this.cache.length > 16)
                return t = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                t
        } else if (this.cache.length >= 16)
            return t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            t;
        return null
    }
    ,
    h.prototype.flush = function() {
        if (this.cache.length)
            return this.cache
    }
    ,
    t.createDecipher = function(e, t) {
        var r = a[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var n = c(t, !1, r.key, r.iv);
        return u(e, n.key, n.iv)
    }
    ,
    t.createDecipheriv = u
}
, function(e, t) {
    t["des-ecb"] = {
        key: 8,
        iv: 0
    },
    t["des-cbc"] = t.des = {
        key: 8,
        iv: 8
    },
    t["des-ede3-cbc"] = t.des3 = {
        key: 24,
        iv: 8
    },
    t["des-ede3"] = {
        key: 24,
        iv: 0
    },
    t["des-ede-cbc"] = {
        key: 16,
        iv: 8
    },
    t["des-ede"] = {
        key: 16,
        iv: 0
    }
}
, function(e, t, r) {
    (function(e) {
        var n = r(123)
          , i = r(215)
          , a = r(216);
        var o = {
            binary: !0,
            hex: !0,
            base64: !0
        };
        t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(t) {
            var r = new e(i[t].prime,"hex")
              , n = new e(i[t].gen,"hex");
            return new a(r,n)
        }
        ,
        t.createDiffieHellman = t.DiffieHellman = function t(r, i, s, f) {
            return e.isBuffer(i) || void 0 === o[i] ? t(r, "binary", i, s) : (i = i || "binary",
            f = f || "binary",
            s = s || new e([2]),
            e.isBuffer(s) || (s = new e(s,f)),
            "number" == typeof r ? new a(n(r, s),s,!0) : (e.isBuffer(r) || (r = new e(r,i)),
            new a(r,s,!0)))
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t) {}
, function(e, t) {}
, function(e) {
    e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
}
, function(e, t, r) {
    (function(t) {
        var n = r(10)
          , i = new (r(124))
          , a = new n(24)
          , o = new n(11)
          , s = new n(10)
          , f = new n(3)
          , c = new n(7)
          , d = r(123)
          , h = r(48);
        function u(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this._pub = new n(e),
            this
        }
        function l(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this._priv = new n(e),
            this
        }
        e.exports = b;
        var p = {};
        function b(e, t, r) {
            this.setGenerator(t),
            this.__prime = new n(e),
            this._prime = n.mont(this.__prime),
            this._primeLen = e.length,
            this._pub = void 0,
            this._priv = void 0,
            this._primeCode = void 0,
            r ? (this.setPublicKey = u,
            this.setPrivateKey = l) : this._primeCode = 8
        }
        function m(e, r) {
            var n = new t(e.toArray());
            return r ? n.toString(r) : n
        }
        Object.defineProperty(b.prototype, "verifyError", {
            enumerable: !0,
            get: function() {
                return "number" != typeof this._primeCode && (this._primeCode = function(e, t) {
                    var r = t.toString("hex")
                      , n = [r, e.toString(16)].join("_");
                    if (n in p)
                        return p[n];
                    var h, u = 0;
                    if (e.isEven() || !d.simpleSieve || !d.fermatTest(e) || !i.test(e))
                        return u += 1,
                        u += "02" === r || "05" === r ? 8 : 4,
                        p[n] = u,
                        u;
                    switch (i.test(e.shrn(1)) || (u += 2),
                    r) {
                    case "02":
                        e.mod(a).cmp(o) && (u += 8);
                        break;
                    case "05":
                        (h = e.mod(s)).cmp(f) && h.cmp(c) && (u += 8);
                        break;
                    default:
                        u += 4
                    }
                    return p[n] = u,
                    u
                }(this.__prime, this.__gen)),
                this._primeCode
            }
        }),
        b.prototype.generateKeys = function() {
            return this._priv || (this._priv = new n(h(this._primeLen))),
            this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(),
            this.getPublicKey()
        }
        ,
        b.prototype.computeSecret = function(e) {
            var r = (e = (e = new n(e)).toRed(this._prime)).redPow(this._priv).fromRed()
              , i = new t(r.toArray())
              , a = this.getPrime();
            if (i.length < a.length) {
                var o = new t(a.length - i.length);
                o.fill(0),
                i = t.concat([o, i])
            }
            return i
        }
        ,
        b.prototype.getPublicKey = function(e) {
            return m(this._pub, e)
        }
        ,
        b.prototype.getPrivateKey = function(e) {
            return m(this._priv, e)
        }
        ,
        b.prototype.getPrime = function(e) {
            return m(this.__prime, e)
        }
        ,
        b.prototype.getGenerator = function(e) {
            return m(this._gen, e)
        }
        ,
        b.prototype.setGenerator = function(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this.__gen = e,
            this._gen = new n(e),
            this
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var n = r(51)
          , i = r(77)
          , a = r(0)
          , o = r(218)
          , s = r(250)
          , f = r(111);
        function c(e) {
            i.Writable.call(this);
            var t = f[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hashType = t.hash,
            this._hash = n(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function d(e) {
            i.Writable.call(this);
            var t = f[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hash = n(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function h(e) {
            return new c(e)
        }
        function u(e) {
            return new d(e)
        }
        Object.keys(f).forEach((function(e) {
            f[e].id = new t(f[e].id,"hex"),
            f[e.toLowerCase()] = f[e]
        }
        )),
        a(c, i.Writable),
        c.prototype._write = function(e, t, r) {
            this._hash.update(e),
            r()
        }
        ,
        c.prototype.update = function(e, r) {
            return "string" == typeof e && (e = new t(e,r)),
            this._hash.update(e),
            this
        }
        ,
        c.prototype.sign = function(e, t) {
            this.end();
            var r = this._hash.digest()
              , n = o(r, e, this._hashType, this._signType, this._tag);
            return t ? n.toString(t) : n
        }
        ,
        a(d, i.Writable),
        d.prototype._write = function(e, t, r) {
            this._hash.update(e),
            r()
        }
        ,
        d.prototype.update = function(e, r) {
            return "string" == typeof e && (e = new t(e,r)),
            this._hash.update(e),
            this
        }
        ,
        d.prototype.verify = function(e, r, n) {
            "string" == typeof r && (r = new t(r,n)),
            this.end();
            var i = this._hash.digest();
            return s(r, i, e, this._signType, this._tag)
        }
        ,
        e.exports = {
            Sign: h,
            Verify: u,
            createSign: h,
            createVerify: u
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var n = r(109)
          , i = r(88)
          , a = r(89).ec
          , o = r(10)
          , s = r(66)
          , f = r(134);
        function c(e, r, i, a) {
            if ((e = new t(e.toArray())).length < r.byteLength()) {
                var o = new t(r.byteLength() - e.length);
                o.fill(0),
                e = t.concat([o, e])
            }
            var s = i.length
              , f = function(e, r) {
                e = (e = d(e, r)).mod(r);
                var n = new t(e.toArray());
                if (n.length < r.byteLength()) {
                    var i = new t(r.byteLength() - n.length);
                    i.fill(0),
                    n = t.concat([i, n])
                }
                return n
            }(i, r)
              , c = new t(s);
            c.fill(1);
            var h = new t(s);
            return h.fill(0),
            h = n(a, h).update(c).update(new t([0])).update(e).update(f).digest(),
            c = n(a, h).update(c).digest(),
            {
                k: h = n(a, h).update(c).update(new t([1])).update(e).update(f).digest(),
                v: c = n(a, h).update(c).digest()
            }
        }
        function d(e, t) {
            var r = new o(e)
              , n = (e.length << 3) - t.bitLength();
            return n > 0 && r.ishrn(n),
            r
        }
        function h(e, r, i) {
            var a, o;
            do {
                for (a = new t(0); 8 * a.length < e.bitLength(); )
                    r.v = n(i, r.k).update(r.v).digest(),
                    a = t.concat([a, r.v]);
                o = d(a, e),
                r.k = n(i, r.k).update(r.v).update(new t([0])).digest(),
                r.v = n(i, r.k).update(r.v).digest()
            } while (-1 !== o.cmp(e));
            return o
        }
        function u(e, t, r, n) {
            return e.toRed(o.mont(r)).redPow(t).fromRed().mod(n)
        }
        e.exports = function(e, r, n, l, p) {
            var b = s(r);
            if (b.curve) {
                if ("ecdsa" !== l && "ecdsa/rsa" !== l)
                    throw new Error("wrong private key type");
                return function(e, r) {
                    var n = f[r.curve.join(".")];
                    if (!n)
                        throw new Error("unknown curve " + r.curve.join("."));
                    var i = new a(n).keyFromPrivate(r.privateKey).sign(e);
                    return new t(i.toDER())
                }(e, b)
            }
            if ("dsa" === b.type) {
                if ("dsa" !== l)
                    throw new Error("wrong private key type");
                return function(e, r, n) {
                    var i, a = r.params.priv_key, s = r.params.p, f = r.params.q, l = r.params.g, p = new o(0), b = d(e, f).mod(f), m = !1, y = c(a, f, e, n);
                    for (; !1 === m; )
                        i = h(f, y, n),
                        p = u(l, i, s, f),
                        0 === (m = i.invm(f).imul(b.add(a.mul(p))).mod(f)).cmpn(0) && (m = !1,
                        p = new o(0));
                    return function(e, r) {
                        e = e.toArray(),
                        r = r.toArray(),
                        128 & e[0] && (e = [0].concat(e));
                        128 & r[0] && (r = [0].concat(r));
                        var n = [48, e.length + r.length + 4, 2, e.length];
                        return n = n.concat(e, [2, r.length], r),
                        new t(n)
                    }(p, m)
                }(e, b, n)
            }
            if ("rsa" !== l && "ecdsa/rsa" !== l)
                throw new Error("wrong private key type");
            e = t.concat([p, e]);
            for (var m = b.modulus.byteLength(), y = [0, 1]; e.length + y.length + 1 < m; )
                y.push(255);
            y.push(0);
            for (var v = -1; ++v < e.length; )
                y.push(e[v]);
            return i(y, b)
        }
        ,
        e.exports.getKey = c,
        e.exports.makeKey = h
    }
    ).call(this, r(14).Buffer)
}
, function(e) {
    e.exports = JSON.parse('{"_args":[["elliptic@6.5.2","/Users/lidan6/sinawork/project/0226_黑猫pc"]],"_development":true,"_from":"elliptic@6.5.2","_id":"elliptic@6.5.2","_inBundle":false,"_integrity":"sha512-f4x70okzZbIQl/NSRLkI/+tteV/9WqL98zx+SQ69KbXxmVrmjwsNUPn/gYJJ0sHvEak24cZgHIPegRePAtA/xw==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.5.2","name":"elliptic","escapedName":"elliptic","rawSpec":"6.5.2","saveSpec":null,"fetchSpec":"6.5.2"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.5.2.tgz","_spec":"6.5.2","_where":"/Users/lidan6/sinawork/project/0226_黑猫pc","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.5.2"}')
}
, function(e, t, r) {
    "use strict";
    var n = r(28)
      , i = r(10)
      , a = r(0)
      , o = r(65)
      , s = n.assert;
    function f(e) {
        o.call(this, "short", e),
        this.a = new i(e.a,16).toRed(this.red),
        this.b = new i(e.b,16).toRed(this.red),
        this.tinv = this.two.redInvm(),
        this.zeroA = 0 === this.a.fromRed().cmpn(0),
        this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
        this.endo = this._getEndomorphism(e),
        this._endoWnafT1 = new Array(4),
        this._endoWnafT2 = new Array(4)
    }
    function c(e, t, r, n) {
        o.BasePoint.call(this, e, "affine"),
        null === t && null === r ? (this.x = null,
        this.y = null,
        this.inf = !0) : (this.x = new i(t,16),
        this.y = new i(r,16),
        n && (this.x.forceRed(this.curve.red),
        this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.inf = !1)
    }
    function d(e, t, r, n) {
        o.BasePoint.call(this, e, "jacobian"),
        null === t && null === r && null === n ? (this.x = this.curve.one,
        this.y = this.curve.one,
        this.z = new i(0)) : (this.x = new i(t,16),
        this.y = new i(r,16),
        this.z = new i(n,16)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one
    }
    a(f, o),
    e.exports = f,
    f.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta)
                t = new i(e.beta,16).toRed(this.red);
            else {
                var n = this._getEndoRoots(this.p);
                t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
            }
            if (e.lambda)
                r = new i(e.lambda,16);
            else {
                var a = this._getEndoRoots(this.n);
                0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) ? r = a[0] : (r = a[1],
                s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
            }
            return {
                beta: t,
                lambda: r,
                basis: e.basis ? e.basis.map((function(e) {
                    return {
                        a: new i(e.a,16),
                        b: new i(e.b,16)
                    }
                }
                )) : this._getEndoBasis(r)
            }
        }
    }
    ,
    f.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : i.mont(e)
          , r = new i(2).toRed(t).redInvm()
          , n = r.redNeg()
          , a = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [n.redAdd(a).fromRed(), n.redSub(a).fromRed()]
    }
    ,
    f.prototype._getEndoBasis = function(e) {
        for (var t, r, n, a, o, s, f, c, d, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, l = this.n.clone(), p = new i(1), b = new i(0), m = new i(0), y = new i(1), v = 0; 0 !== u.cmpn(0); ) {
            var g = l.div(u);
            c = l.sub(g.mul(u)),
            d = m.sub(g.mul(p));
            var _ = y.sub(g.mul(b));
            if (!n && c.cmp(h) < 0)
                t = f.neg(),
                r = p,
                n = c.neg(),
                a = d;
            else if (n && 2 == ++v)
                break;
            f = c,
            l = u,
            u = c,
            m = p,
            p = d,
            y = b,
            b = _
        }
        o = c.neg(),
        s = d;
        var w = n.sqr().add(a.sqr());
        return o.sqr().add(s.sqr()).cmp(w) >= 0 && (o = t,
        s = r),
        n.negative && (n = n.neg(),
        a = a.neg()),
        o.negative && (o = o.neg(),
        s = s.neg()),
        [{
            a: n,
            b: a
        }, {
            a: o,
            b: s
        }]
    }
    ,
    f.prototype._endoSplit = function(e) {
        var t = this.endo.basis
          , r = t[0]
          , n = t[1]
          , i = n.b.mul(e).divRound(this.n)
          , a = r.b.neg().mul(e).divRound(this.n)
          , o = i.mul(r.a)
          , s = a.mul(n.a)
          , f = i.mul(r.b)
          , c = a.mul(n.b);
        return {
            k1: e.sub(o).sub(s),
            k2: f.add(c).neg()
        }
    }
    ,
    f.prototype.pointFromX = function(e, t) {
        (e = new i(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
          , n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
        var a = n.fromRed().isOdd();
        return (t && !a || !t && a) && (n = n.redNeg()),
        this.point(e, n)
    }
    ,
    f.prototype.validate = function(e) {
        if (e.inf)
            return !0;
        var t = e.x
          , r = e.y
          , n = this.a.redMul(t)
          , i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0)
    }
    ,
    f.prototype._endoWnafMulAdd = function(e, t, r) {
        for (var n = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
            var o = this._endoSplit(t[a])
              , s = e[a]
              , f = s._getBeta();
            o.k1.negative && (o.k1.ineg(),
            s = s.neg(!0)),
            o.k2.negative && (o.k2.ineg(),
            f = f.neg(!0)),
            n[2 * a] = s,
            n[2 * a + 1] = f,
            i[2 * a] = o.k1,
            i[2 * a + 1] = o.k2
        }
        for (var c = this._wnafMulAdd(1, n, i, 2 * a, r), d = 0; d < 2 * a; d++)
            n[d] = null,
            i[d] = null;
        return c
    }
    ,
    a(c, o.BasePoint),
    f.prototype.point = function(e, t, r) {
        return new c(this,e,t,r)
    }
    ,
    f.prototype.pointFromJSON = function(e, t) {
        return c.fromJSON(this, e, t)
    }
    ,
    c.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta)
                return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve
                  , n = function(e) {
                    return r.point(e.x.redMul(r.endo.beta), e.y)
                };
                e.beta = t,
                t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(n)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(n)
                    }
                }
            }
            return t
        }
    }
    ,
    c.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }
    ,
    c.fromJSON = function(e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var n = e.point(t[0], t[1], r);
        if (!t[2])
            return n;
        function i(t) {
            return e.point(t[0], t[1], r)
        }
        var a = t[2];
        return n.precomputed = {
            beta: null,
            doubles: a.doubles && {
                step: a.doubles.step,
                points: [n].concat(a.doubles.points.map(i))
            },
            naf: a.naf && {
                wnd: a.naf.wnd,
                points: [n].concat(a.naf.points.map(i))
            }
        },
        n
    }
    ,
    c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }
    ,
    c.prototype.isInfinity = function() {
        return this.inf
    }
    ,
    c.prototype.add = function(e) {
        if (this.inf)
            return e;
        if (e.inf)
            return this;
        if (this.eq(e))
            return this.dbl();
        if (this.neg().eq(e))
            return this.curve.point(null, null);
        if (0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x)
          , n = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n)
    }
    ,
    c.prototype.dbl = function() {
        if (this.inf)
            return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0))
            return this.curve.point(null, null);
        var t = this.curve.a
          , r = this.x.redSqr()
          , n = e.redInvm()
          , i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n)
          , a = i.redSqr().redISub(this.x.redAdd(this.x))
          , o = i.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, o)
    }
    ,
    c.prototype.getX = function() {
        return this.x.fromRed()
    }
    ,
    c.prototype.getY = function() {
        return this.y.fromRed()
    }
    ,
    c.prototype.mul = function(e) {
        return e = new i(e,16),
        this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
    }
    ,
    c.prototype.mulAdd = function(e, t, r) {
        var n = [this, t]
          , i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
    }
    ,
    c.prototype.jmulAdd = function(e, t, r) {
        var n = [this, t]
          , i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
    }
    ,
    c.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }
    ,
    c.prototype.neg = function(e) {
        if (this.inf)
            return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed
              , n = function(e) {
                return e.neg()
            };
            t.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(n)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(n)
                }
            }
        }
        return t
    }
    ,
    c.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }
    ,
    a(d, o.BasePoint),
    f.prototype.jpoint = function(e, t, r) {
        return new d(this,e,t,r)
    }
    ,
    d.prototype.toP = function() {
        if (this.isInfinity())
            return this.curve.point(null, null);
        var e = this.z.redInvm()
          , t = e.redSqr()
          , r = this.x.redMul(t)
          , n = this.y.redMul(t).redMul(e);
        return this.curve.point(r, n)
    }
    ,
    d.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }
    ,
    d.prototype.add = function(e) {
        if (this.isInfinity())
            return e;
        if (e.isInfinity())
            return this;
        var t = e.z.redSqr()
          , r = this.z.redSqr()
          , n = this.x.redMul(t)
          , i = e.x.redMul(r)
          , a = this.y.redMul(t.redMul(e.z))
          , o = e.y.redMul(r.redMul(this.z))
          , s = n.redSub(i)
          , f = a.redSub(o);
        if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr()
          , d = c.redMul(s)
          , h = n.redMul(c)
          , u = f.redSqr().redIAdd(d).redISub(h).redISub(h)
          , l = f.redMul(h.redISub(u)).redISub(a.redMul(d))
          , p = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(u, l, p)
    }
    ,
    d.prototype.mixedAdd = function(e) {
        if (this.isInfinity())
            return e.toJ();
        if (e.isInfinity())
            return this;
        var t = this.z.redSqr()
          , r = this.x
          , n = e.x.redMul(t)
          , i = this.y
          , a = e.y.redMul(t).redMul(this.z)
          , o = r.redSub(n)
          , s = i.redSub(a);
        if (0 === o.cmpn(0))
            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var f = o.redSqr()
          , c = f.redMul(o)
          , d = r.redMul(f)
          , h = s.redSqr().redIAdd(c).redISub(d).redISub(d)
          , u = s.redMul(d.redISub(h)).redISub(i.redMul(c))
          , l = this.z.redMul(o);
        return this.curve.jpoint(h, u, l)
    }
    ,
    d.prototype.dblp = function(e) {
        if (0 === e)
            return this;
        if (this.isInfinity())
            return this;
        if (!e)
            return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++)
                t = t.dbl();
            return t
        }
        var n = this.curve.a
          , i = this.curve.tinv
          , a = this.x
          , o = this.y
          , s = this.z
          , f = s.redSqr().redSqr()
          , c = o.redAdd(o);
        for (r = 0; r < e; r++) {
            var d = a.redSqr()
              , h = c.redSqr()
              , u = h.redSqr()
              , l = d.redAdd(d).redIAdd(d).redIAdd(n.redMul(f))
              , p = a.redMul(h)
              , b = l.redSqr().redISub(p.redAdd(p))
              , m = p.redISub(b)
              , y = l.redMul(m);
            y = y.redIAdd(y).redISub(u);
            var v = c.redMul(s);
            r + 1 < e && (f = f.redMul(u)),
            a = b,
            s = v,
            c = y
        }
        return this.curve.jpoint(a, c.redMul(i), s)
    }
    ,
    d.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }
    ,
    d.prototype._zeroDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var n = this.x.redSqr()
              , i = this.y.redSqr()
              , a = i.redSqr()
              , o = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
            o = o.redIAdd(o);
            var s = n.redAdd(n).redIAdd(n)
              , f = s.redSqr().redISub(o).redISub(o)
              , c = a.redIAdd(a);
            c = (c = c.redIAdd(c)).redIAdd(c),
            e = f,
            t = s.redMul(o.redISub(f)).redISub(c),
            r = this.y.redAdd(this.y)
        } else {
            var d = this.x.redSqr()
              , h = this.y.redSqr()
              , u = h.redSqr()
              , l = this.x.redAdd(h).redSqr().redISub(d).redISub(u);
            l = l.redIAdd(l);
            var p = d.redAdd(d).redIAdd(d)
              , b = p.redSqr()
              , m = u.redIAdd(u);
            m = (m = m.redIAdd(m)).redIAdd(m),
            e = b.redISub(l).redISub(l),
            t = p.redMul(l.redISub(e)).redISub(m),
            r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(e, t, r)
    }
    ,
    d.prototype._threeDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var n = this.x.redSqr()
              , i = this.y.redSqr()
              , a = i.redSqr()
              , o = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
            o = o.redIAdd(o);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
              , f = s.redSqr().redISub(o).redISub(o);
            e = f;
            var c = a.redIAdd(a);
            c = (c = c.redIAdd(c)).redIAdd(c),
            t = s.redMul(o.redISub(f)).redISub(c),
            r = this.y.redAdd(this.y)
        } else {
            var d = this.z.redSqr()
              , h = this.y.redSqr()
              , u = this.x.redMul(h)
              , l = this.x.redSub(d).redMul(this.x.redAdd(d));
            l = l.redAdd(l).redIAdd(l);
            var p = u.redIAdd(u)
              , b = (p = p.redIAdd(p)).redAdd(p);
            e = l.redSqr().redISub(b),
            r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(d);
            var m = h.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m),
            t = l.redMul(p.redISub(e)).redISub(m)
        }
        return this.curve.jpoint(e, t, r)
    }
    ,
    d.prototype._dbl = function() {
        var e = this.curve.a
          , t = this.x
          , r = this.y
          , n = this.z
          , i = n.redSqr().redSqr()
          , a = t.redSqr()
          , o = r.redSqr()
          , s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i))
          , f = t.redAdd(t)
          , c = (f = f.redIAdd(f)).redMul(o)
          , d = s.redSqr().redISub(c.redAdd(c))
          , h = c.redISub(d)
          , u = o.redSqr();
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = s.redMul(h).redISub(u)
          , p = r.redAdd(r).redMul(n);
        return this.curve.jpoint(d, l, p)
    }
    ,
    d.prototype.trpl = function() {
        if (!this.curve.zeroA)
            return this.dbl().add(this);
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , r = this.z.redSqr()
          , n = t.redSqr()
          , i = e.redAdd(e).redIAdd(e)
          , a = i.redSqr()
          , o = this.x.redAdd(t).redSqr().redISub(e).redISub(n)
          , s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr()
          , f = n.redIAdd(n);
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var c = i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(f)
          , d = t.redMul(c);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var h = this.x.redMul(s).redISub(d);
        h = (h = h.redIAdd(h)).redIAdd(h);
        var u = this.y.redMul(c.redMul(f.redISub(c)).redISub(o.redMul(s)));
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = this.z.redAdd(o).redSqr().redISub(r).redISub(s);
        return this.curve.jpoint(h, u, l)
    }
    ,
    d.prototype.mul = function(e, t) {
        return e = new i(e,t),
        this.curve._wnafMul(this, e)
    }
    ,
    d.prototype.eq = function(e) {
        if ("affine" === e.type)
            return this.eq(e.toJ());
        if (this === e)
            return !0;
        var t = this.z.redSqr()
          , r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
            return !1;
        var n = t.redMul(this.z)
          , i = r.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
    }
    ,
    d.prototype.eqXToP = function(e) {
        var t = this.z.redSqr()
          , r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r))
            return !0;
        for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if (n.iadd(this.curve.n),
            n.cmp(this.curve.p) >= 0)
                return !1;
            if (r.redIAdd(i),
            0 === this.x.cmp(r))
                return !0
        }
    }
    ,
    d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }
    ,
    d.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(0)
      , a = r(65)
      , o = r(28);
    function s(e) {
        a.call(this, "mont", e),
        this.a = new n(e.a,16).toRed(this.red),
        this.b = new n(e.b,16).toRed(this.red),
        this.i4 = new n(4).toRed(this.red).redInvm(),
        this.two = new n(2).toRed(this.red),
        this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    function f(e, t, r) {
        a.BasePoint.call(this, e, "projective"),
        null === t && null === r ? (this.x = this.curve.one,
        this.z = this.curve.zero) : (this.x = new n(t,16),
        this.z = new n(r,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    i(s, a),
    e.exports = s,
    s.prototype.validate = function(e) {
        var t = e.normalize().x
          , r = t.redSqr()
          , n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
        return 0 === n.redSqrt().redSqr().cmp(n)
    }
    ,
    i(f, a.BasePoint),
    s.prototype.decodePoint = function(e, t) {
        return this.point(o.toArray(e, t), 1)
    }
    ,
    s.prototype.point = function(e, t) {
        return new f(this,e,t)
    }
    ,
    s.prototype.pointFromJSON = function(e) {
        return f.fromJSON(this, e)
    }
    ,
    f.prototype.precompute = function() {}
    ,
    f.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }
    ,
    f.fromJSON = function(e, t) {
        return new f(e,t[0],t[1] || e.one)
    }
    ,
    f.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    f.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
    ,
    f.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr()
          , t = this.x.redSub(this.z).redSqr()
          , r = e.redSub(t)
          , n = e.redMul(t)
          , i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(n, i)
    }
    ,
    f.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.diffAdd = function(e, t) {
        var r = this.x.redAdd(this.z)
          , n = this.x.redSub(this.z)
          , i = e.x.redAdd(e.z)
          , a = e.x.redSub(e.z).redMul(r)
          , o = i.redMul(n)
          , s = t.z.redMul(a.redAdd(o).redSqr())
          , f = t.x.redMul(a.redISub(o).redSqr());
        return this.curve.point(s, f)
    }
    ,
    f.prototype.mul = function(e) {
        for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1))
            i.push(t.andln(1));
        for (var a = i.length - 1; a >= 0; a--)
            0 === i[a] ? (r = r.diffAdd(n, this),
            n = n.dbl()) : (n = r.diffAdd(n, this),
            r = r.dbl());
        return n
    }
    ,
    f.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    f.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }
    ,
    f.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()),
        this.z = this.curve.one,
        this
    }
    ,
    f.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(28)
      , i = r(10)
      , a = r(0)
      , o = r(65)
      , s = n.assert;
    function f(e) {
        this.twisted = 1 != (0 | e.a),
        this.mOneA = this.twisted && -1 == (0 | e.a),
        this.extended = this.mOneA,
        o.call(this, "edwards", e),
        this.a = new i(e.a,16).umod(this.red.m),
        this.a = this.a.toRed(this.red),
        this.c = new i(e.c,16).toRed(this.red),
        this.c2 = this.c.redSqr(),
        this.d = new i(e.d,16).toRed(this.red),
        this.dd = this.d.redAdd(this.d),
        s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
        this.oneC = 1 == (0 | e.c)
    }
    function c(e, t, r, n, a) {
        o.BasePoint.call(this, e, "projective"),
        null === t && null === r && null === n ? (this.x = this.curve.zero,
        this.y = this.curve.one,
        this.z = this.curve.one,
        this.t = this.curve.zero,
        this.zOne = !0) : (this.x = new i(t,16),
        this.y = new i(r,16),
        this.z = n ? new i(n,16) : this.curve.one,
        this.t = a && new i(a,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one,
        this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
        this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    a(f, o),
    e.exports = f,
    f.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }
    ,
    f.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }
    ,
    f.prototype.jpoint = function(e, t, r, n) {
        return this.point(e, t, r, n)
    }
    ,
    f.prototype.pointFromX = function(e, t) {
        (e = new i(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr()
          , n = this.c2.redSub(this.a.redMul(r))
          , a = this.one.redSub(this.c2.redMul(this.d).redMul(r))
          , o = n.redMul(a.redInvm())
          , s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero))
            throw new Error("invalid point");
        var f = s.fromRed().isOdd();
        return (t && !f || !t && f) && (s = s.redNeg()),
        this.point(e, s)
    }
    ,
    f.prototype.pointFromY = function(e, t) {
        (e = new i(e,16)).red || (e = e.toRed(this.red));
        var r = e.redSqr()
          , n = r.redSub(this.c2)
          , a = r.redMul(this.d).redMul(this.c2).redSub(this.a)
          , o = n.redMul(a.redInvm());
        if (0 === o.cmp(this.zero)) {
            if (t)
                throw new Error("invalid point");
            return this.point(this.zero, e)
        }
        var s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero))
            throw new Error("invalid point");
        return s.fromRed().isOdd() !== t && (s = s.redNeg()),
        this.point(s, e)
    }
    ,
    f.prototype.validate = function(e) {
        if (e.isInfinity())
            return !0;
        e.normalize();
        var t = e.x.redSqr()
          , r = e.y.redSqr()
          , n = t.redMul(this.a).redAdd(r)
          , i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
        return 0 === n.cmp(i)
    }
    ,
    a(c, o.BasePoint),
    f.prototype.pointFromJSON = function(e) {
        return c.fromJSON(this, e)
    }
    ,
    f.prototype.point = function(e, t, r, n) {
        return new c(this,e,t,r,n)
    }
    ,
    c.fromJSON = function(e, t) {
        return new c(e,t[0],t[1],t[2])
    }
    ,
    c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    c.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }
    ,
    c.prototype._extDbl = function() {
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , r = this.z.redSqr();
        r = r.redIAdd(r);
        var n = this.curve._mulA(e)
          , i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t)
          , a = n.redAdd(t)
          , o = a.redSub(r)
          , s = n.redSub(t)
          , f = i.redMul(o)
          , c = a.redMul(s)
          , d = i.redMul(s)
          , h = o.redMul(a);
        return this.curve.point(f, c, h, d)
    }
    ,
    c.prototype._projDbl = function() {
        var e, t, r, n = this.x.redAdd(this.y).redSqr(), i = this.x.redSqr(), a = this.y.redSqr();
        if (this.curve.twisted) {
            var o = (c = this.curve._mulA(i)).redAdd(a);
            if (this.zOne)
                e = n.redSub(i).redSub(a).redMul(o.redSub(this.curve.two)),
                t = o.redMul(c.redSub(a)),
                r = o.redSqr().redSub(o).redSub(o);
            else {
                var s = this.z.redSqr()
                  , f = o.redSub(s).redISub(s);
                e = n.redSub(i).redISub(a).redMul(f),
                t = o.redMul(c.redSub(a)),
                r = o.redMul(f)
            }
        } else {
            var c = i.redAdd(a);
            s = this.curve._mulC(this.z).redSqr(),
            f = c.redSub(s).redSub(s);
            e = this.curve._mulC(n.redISub(c)).redMul(f),
            t = this.curve._mulC(c).redMul(i.redISub(a)),
            r = c.redMul(f)
        }
        return this.curve.point(e, t, r)
    }
    ,
    c.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }
    ,
    c.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
          , r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
          , n = this.t.redMul(this.curve.dd).redMul(e.t)
          , i = this.z.redMul(e.z.redAdd(e.z))
          , a = r.redSub(t)
          , o = i.redSub(n)
          , s = i.redAdd(n)
          , f = r.redAdd(t)
          , c = a.redMul(o)
          , d = s.redMul(f)
          , h = a.redMul(f)
          , u = o.redMul(s);
        return this.curve.point(c, d, u, h)
    }
    ,
    c.prototype._projAdd = function(e) {
        var t, r, n = this.z.redMul(e.z), i = n.redSqr(), a = this.x.redMul(e.x), o = this.y.redMul(e.y), s = this.curve.d.redMul(a).redMul(o), f = i.redSub(s), c = i.redAdd(s), d = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o), h = n.redMul(f).redMul(d);
        return this.curve.twisted ? (t = n.redMul(c).redMul(o.redSub(this.curve._mulA(a))),
        r = f.redMul(c)) : (t = n.redMul(c).redMul(o.redSub(a)),
        r = this.curve._mulC(f).redMul(c)),
        this.curve.point(h, t, r)
    }
    ,
    c.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }
    ,
    c.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }
    ,
    c.prototype.mulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
    }
    ,
    c.prototype.jmulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
    }
    ,
    c.prototype.normalize = function() {
        if (this.zOne)
            return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e),
        this.y = this.y.redMul(e),
        this.t && (this.t = this.t.redMul(e)),
        this.z = this.curve.one,
        this.zOne = !0,
        this
    }
    ,
    c.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }
    ,
    c.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
    ,
    c.prototype.getY = function() {
        return this.normalize(),
        this.y.fromRed()
    }
    ,
    c.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }
    ,
    c.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t))
            return !0;
        for (var r = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if (r.iadd(this.curve.n),
            r.cmp(this.curve.p) >= 0)
                return !1;
            if (t.redIAdd(n),
            0 === this.x.cmp(t))
                return !0
        }
    }
    ,
    c.prototype.toP = c.prototype.normalize,
    c.prototype.mixedAdd = c.prototype.add
}
, function(e, t, r) {
    "use strict";
    t.sha1 = r(224),
    t.sha224 = r(225),
    t.sha256 = r(128),
    t.sha384 = r(226),
    t.sha512 = r(129)
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(54)
      , a = r(127)
      , o = n.rotl32
      , s = n.sum32
      , f = n.sum32_5
      , c = a.ft_1
      , d = i.BlockHash
      , h = [1518500249, 1859775393, 2400959708, 3395469782];
    function u() {
        if (!(this instanceof u))
            return new u;
        d.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.W = new Array(80)
    }
    n.inherits(u, d),
    e.exports = u,
    u.blockSize = 512,
    u.outSize = 160,
    u.hmacStrength = 80,
    u.padLength = 64,
    u.prototype._update = function(e, t) {
        for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n];
        for (; n < r.length; n++)
            r[n] = o(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0]
          , a = this.h[1]
          , d = this.h[2]
          , u = this.h[3]
          , l = this.h[4];
        for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20)
              , b = f(o(i, 5), c(p, a, d, u), l, r[n], h[p]);
            l = u,
            u = d,
            d = o(a, 30),
            a = i,
            i = b
        }
        this.h[0] = s(this.h[0], i),
        this.h[1] = s(this.h[1], a),
        this.h[2] = s(this.h[2], d),
        this.h[3] = s(this.h[3], u),
        this.h[4] = s(this.h[4], l)
    }
    ,
    u.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(128);
    function a() {
        if (!(this instanceof a))
            return new a;
        i.call(this),
        this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    n.inherits(a, i),
    e.exports = a,
    a.blockSize = 512,
    a.outSize = 224,
    a.hmacStrength = 192,
    a.padLength = 64,
    a.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(129);
    function a() {
        if (!(this instanceof a))
            return new a;
        i.call(this),
        this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    n.inherits(a, i),
    e.exports = a,
    a.blockSize = 1024,
    a.outSize = 384,
    a.hmacStrength = 192,
    a.padLength = 128,
    a.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(54)
      , a = n.rotl32
      , o = n.sum32
      , s = n.sum32_3
      , f = n.sum32_4
      , c = i.BlockHash;
    function d() {
        if (!(this instanceof d))
            return new d;
        c.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.endian = "little"
    }
    function h(e, t, r, n) {
        return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
    }
    function u(e) {
        return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
    }
    function l(e) {
        return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
    }
    n.inherits(d, c),
    t.ripemd160 = d,
    d.blockSize = 512,
    d.outSize = 160,
    d.hmacStrength = 192,
    d.padLength = 64,
    d.prototype._update = function(e, t) {
        for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], d = this.h[4], v = r, g = n, _ = i, w = c, S = d, M = 0; M < 80; M++) {
            var k = o(a(f(r, h(M, n, i, c), e[p[M] + t], u(M)), m[M]), d);
            r = d,
            d = c,
            c = a(i, 10),
            i = n,
            n = k,
            k = o(a(f(v, h(79 - M, g, _, w), e[b[M] + t], l(M)), y[M]), S),
            v = S,
            S = w,
            w = a(_, 10),
            _ = g,
            g = k
        }
        k = s(this.h[1], i, w),
        this.h[1] = s(this.h[2], c, S),
        this.h[2] = s(this.h[3], d, v),
        this.h[3] = s(this.h[4], r, g),
        this.h[4] = s(this.h[0], n, _),
        this.h[0] = k
    }
    ,
    d.prototype._digest = function(e) {
        return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
    }
    ;
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}
, function(e, t, r) {
    "use strict";
    var n = r(33)
      , i = r(27);
    function a(e, t, r) {
        if (!(this instanceof a))
            return new a(e,t,r);
        this.Hash = e,
        this.blockSize = e.blockSize / 8,
        this.outSize = e.outSize / 8,
        this.inner = null,
        this.outer = null,
        this._init(n.toArray(t, r))
    }
    e.exports = a,
    a.prototype._init = function(e) {
        e.length > this.blockSize && (e = (new this.Hash).update(e).digest()),
        i(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++)
            e.push(0);
        for (t = 0; t < e.length; t++)
            e[t] ^= 54;
        for (this.inner = (new this.Hash).update(e),
        t = 0; t < e.length; t++)
            e[t] ^= 106;
        this.outer = (new this.Hash).update(e)
    }
    ,
    a.prototype.update = function(e, t) {
        return this.inner.update(e, t),
        this
    }
    ,
    a.prototype.digest = function(e) {
        return this.outer.update(this.inner.digest()),
        this.outer.digest(e)
    }
}
, function(e, t) {
    e.exports = {
        doubles: {
            step: 4,
            points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
        },
        naf: {
            wnd: 7,
            points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
        }
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(231)
      , a = r(28)
      , o = r(90)
      , s = r(87)
      , f = a.assert
      , c = r(232)
      , d = r(233);
    function h(e) {
        if (!(this instanceof h))
            return new h(e);
        "string" == typeof e && (f(o.hasOwnProperty(e), "Unknown curve " + e),
        e = o[e]),
        e instanceof o.PresetCurve && (e = {
            curve: e
        }),
        this.curve = e.curve.curve,
        this.n = this.curve.n,
        this.nh = this.n.ushrn(1),
        this.g = this.curve.g,
        this.g = e.curve.g,
        this.g.precompute(e.curve.n.bitLength() + 1),
        this.hash = e.hash || e.curve.hash
    }
    e.exports = h,
    h.prototype.keyPair = function(e) {
        return new c(this,e)
    }
    ,
    h.prototype.keyFromPrivate = function(e, t) {
        return c.fromPrivate(this, e, t)
    }
    ,
    h.prototype.keyFromPublic = function(e, t) {
        return c.fromPublic(this, e, t)
    }
    ,
    h.prototype.genKeyPair = function(e) {
        e || (e = {});
        for (var t = new i({
            hash: this.hash,
            pers: e.pers,
            persEnc: e.persEnc || "utf8",
            entropy: e.entropy || s(this.hash.hmacStrength),
            entropyEnc: e.entropy && e.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), r = this.n.byteLength(), a = this.n.sub(new n(2)); ; ) {
            var o = new n(t.generate(r));
            if (!(o.cmp(a) > 0))
                return o.iaddn(1),
                this.keyFromPrivate(o)
        }
    }
    ,
    h.prototype._truncateToN = function(e, t) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return r > 0 && (e = e.ushrn(r)),
        !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
    }
    ,
    h.prototype.sign = function(e, t, r, a) {
        "object" == typeof r && (a = r,
        r = null),
        a || (a = {}),
        t = this.keyFromPrivate(t, r),
        e = this._truncateToN(new n(e,16));
        for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), f = e.toArray("be", o), c = new i({
            hash: this.hash,
            entropy: s,
            nonce: f,
            pers: a.pers,
            persEnc: a.persEnc || "utf8"
        }), h = this.n.sub(new n(1)), u = 0; ; u++) {
            var l = a.k ? a.k(u) : new n(c.generate(this.n.byteLength()));
            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                var p = this.g.mul(l);
                if (!p.isInfinity()) {
                    var b = p.getX()
                      , m = b.umod(this.n);
                    if (0 !== m.cmpn(0)) {
                        var y = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                        if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                            var v = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                            return a.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y),
                            v ^= 1),
                            new d({
                                r: m,
                                s: y,
                                recoveryParam: v
                            })
                        }
                    }
                }
            }
        }
    }
    ,
    h.prototype.verify = function(e, t, r, i) {
        e = this._truncateToN(new n(e,16)),
        r = this.keyFromPublic(r, i);
        var a = (t = new d(t,"hex")).r
          , o = t.s;
        if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
            return !1;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
            return !1;
        var s, f = o.invm(this.n), c = f.mul(e).umod(this.n), h = f.mul(a).umod(this.n);
        return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && s.eqXToP(a) : !(s = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(a)
    }
    ,
    h.prototype.recoverPubKey = function(e, t, r, i) {
        f((3 & r) === r, "The recovery param is more than two bits"),
        t = new d(t,i);
        var a = this.n
          , o = new n(e)
          , s = t.r
          , c = t.s
          , h = 1 & r
          , u = r >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate");
        s = u ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
        var l = t.r.invm(a)
          , p = a.sub(o).mul(l).umod(a)
          , b = c.mul(l).umod(a);
        return this.g.mulAdd(p, s, b)
    }
    ,
    h.prototype.getKeyRecoveryParam = function(e, t, r, n) {
        if (null !== (t = new d(t,n)).recoveryParam)
            return t.recoveryParam;
        for (var i = 0; i < 4; i++) {
            var a;
            try {
                a = this.recoverPubKey(e, t, i)
            } catch (e) {
                continue
            }
            if (a.eq(r))
                return i
        }
        throw new Error("Unable to find valid recovery factor")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(91)
      , i = r(125)
      , a = r(27);
    function o(e) {
        if (!(this instanceof o))
            return new o(e);
        this.hash = e.hash,
        this.predResist = !!e.predResist,
        this.outLen = this.hash.outSize,
        this.minEntropy = e.minEntropy || this.hash.hmacStrength,
        this._reseed = null,
        this.reseedInterval = null,
        this.K = null,
        this.V = null;
        var t = i.toArray(e.entropy, e.entropyEnc || "hex")
          , r = i.toArray(e.nonce, e.nonceEnc || "hex")
          , n = i.toArray(e.pers, e.persEnc || "hex");
        a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._init(t, r, n)
    }
    e.exports = o,
    o.prototype._init = function(e, t, r) {
        var n = e.concat(t).concat(r);
        this.K = new Array(this.outLen / 8),
        this.V = new Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++)
            this.K[i] = 0,
            this.V[i] = 1;
        this._update(n),
        this._reseed = 1,
        this.reseedInterval = 281474976710656
    }
    ,
    o.prototype._hmac = function() {
        return new n.hmac(this.hash,this.K)
    }
    ,
    o.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)),
        this.K = t.digest(),
        this.V = this._hmac().update(this.V).digest(),
        e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
        this.V = this._hmac().update(this.V).digest())
    }
    ,
    o.prototype.reseed = function(e, t, r, n) {
        "string" != typeof t && (n = r,
        r = t,
        t = null),
        e = i.toArray(e, t),
        r = i.toArray(r, n),
        a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._update(e.concat(r || [])),
        this._reseed = 1
    }
    ,
    o.prototype.generate = function(e, t, r, n) {
        if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
        "string" != typeof t && (n = r,
        r = t,
        t = null),
        r && (r = i.toArray(r, n || "hex"),
        this._update(r));
        for (var a = []; a.length < e; )
            this.V = this._hmac().update(this.V).digest(),
            a = a.concat(this.V);
        var o = a.slice(0, e);
        return this._update(r),
        this._reseed++,
        i.encode(o, t)
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(28).assert;
    function a(e, t) {
        this.ec = e,
        this.priv = null,
        this.pub = null,
        t.priv && this._importPrivate(t.priv, t.privEnc),
        t.pub && this._importPublic(t.pub, t.pubEnc)
    }
    e.exports = a,
    a.fromPublic = function(e, t, r) {
        return t instanceof a ? t : new a(e,{
            pub: t,
            pubEnc: r
        })
    }
    ,
    a.fromPrivate = function(e, t, r) {
        return t instanceof a ? t : new a(e,{
            priv: t,
            privEnc: r
        })
    }
    ,
    a.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }
    ,
    a.prototype.getPublic = function(e, t) {
        return "string" == typeof e && (t = e,
        e = null),
        this.pub || (this.pub = this.ec.g.mul(this.priv)),
        t ? this.pub.encode(t, e) : this.pub
    }
    ,
    a.prototype.getPrivate = function(e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
    }
    ,
    a.prototype._importPrivate = function(e, t) {
        this.priv = new n(e,t || 16),
        this.priv = this.priv.umod(this.ec.curve.n)
    }
    ,
    a.prototype._importPublic = function(e, t) {
        if (e.x || e.y)
            return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"),
            void (this.pub = this.ec.curve.point(e.x, e.y));
        this.pub = this.ec.curve.decodePoint(e, t)
    }
    ,
    a.prototype.derive = function(e) {
        return e.mul(this.priv).getX()
    }
    ,
    a.prototype.sign = function(e, t, r) {
        return this.ec.sign(e, this, t, r)
    }
    ,
    a.prototype.verify = function(e, t) {
        return this.ec.verify(e, t, this)
    }
    ,
    a.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(28)
      , a = i.assert;
    function o(e, t) {
        if (e instanceof o)
            return e;
        this._importDER(e, t) || (a(e.r && e.s, "Signature without r or s"),
        this.r = new n(e.r,16),
        this.s = new n(e.s,16),
        void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }
    function s() {
        this.place = 0
    }
    function f(e, t) {
        var r = e[t.place++];
        if (!(128 & r))
            return r;
        for (var n = 15 & r, i = 0, a = 0, o = t.place; a < n; a++,
        o++)
            i <<= 8,
            i |= e[o];
        return t.place = o,
        i
    }
    function c(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
            t++;
        return 0 === t ? e : e.slice(t)
    }
    function d(e, t) {
        if (t < 128)
            e.push(t);
        else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            for (e.push(128 | r); --r; )
                e.push(t >>> (r << 3) & 255);
            e.push(t)
        }
    }
    e.exports = o,
    o.prototype._importDER = function(e, t) {
        e = i.toArray(e, t);
        var r = new s;
        if (48 !== e[r.place++])
            return !1;
        if (f(e, r) + r.place !== e.length)
            return !1;
        if (2 !== e[r.place++])
            return !1;
        var a = f(e, r)
          , o = e.slice(r.place, a + r.place);
        if (r.place += a,
        2 !== e[r.place++])
            return !1;
        var c = f(e, r);
        if (e.length !== c + r.place)
            return !1;
        var d = e.slice(r.place, c + r.place);
        return 0 === o[0] && 128 & o[1] && (o = o.slice(1)),
        0 === d[0] && 128 & d[1] && (d = d.slice(1)),
        this.r = new n(o),
        this.s = new n(d),
        this.recoveryParam = null,
        !0
    }
    ,
    o.prototype.toDER = function(e) {
        var t = this.r.toArray()
          , r = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)),
        128 & r[0] && (r = [0].concat(r)),
        t = c(t),
        r = c(r); !(r[0] || 128 & r[1]); )
            r = r.slice(1);
        var n = [2];
        d(n, t.length),
        (n = n.concat(t)).push(2),
        d(n, r.length);
        var a = n.concat(r)
          , o = [48];
        return d(o, a.length),
        o = o.concat(a),
        i.encode(o, e)
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(91)
      , i = r(90)
      , a = r(28)
      , o = a.assert
      , s = a.parseBytes
      , f = r(235)
      , c = r(236);
    function d(e) {
        if (o("ed25519" === e, "only tested with ed25519 so far"),
        !(this instanceof d))
            return new d(e);
        e = i[e].curve;
        this.curve = e,
        this.g = e.g,
        this.g.precompute(e.n.bitLength() + 1),
        this.pointClass = e.point().constructor,
        this.encodingLength = Math.ceil(e.n.bitLength() / 8),
        this.hash = n.sha512
    }
    e.exports = d,
    d.prototype.sign = function(e, t) {
        e = s(e);
        var r = this.keyFromSecret(t)
          , n = this.hashInt(r.messagePrefix(), e)
          , i = this.g.mul(n)
          , a = this.encodePoint(i)
          , o = this.hashInt(a, r.pubBytes(), e).mul(r.priv())
          , f = n.add(o).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: f,
            Rencoded: a
        })
    }
    ,
    d.prototype.verify = function(e, t, r) {
        e = s(e),
        t = this.makeSignature(t);
        var n = this.keyFromPublic(r)
          , i = this.hashInt(t.Rencoded(), n.pubBytes(), e)
          , a = this.g.mul(t.S());
        return t.R().add(n.pub().mul(i)).eq(a)
    }
    ,
    d.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
        return a.intFromLE(e.digest()).umod(this.curve.n)
    }
    ,
    d.prototype.keyFromPublic = function(e) {
        return f.fromPublic(this, e)
    }
    ,
    d.prototype.keyFromSecret = function(e) {
        return f.fromSecret(this, e)
    }
    ,
    d.prototype.makeSignature = function(e) {
        return e instanceof c ? e : new c(this,e)
    }
    ,
    d.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
        t
    }
    ,
    d.prototype.decodePoint = function(e) {
        var t = (e = a.parseBytes(e)).length - 1
          , r = e.slice(0, t).concat(-129 & e[t])
          , n = 0 != (128 & e[t])
          , i = a.intFromLE(r);
        return this.curve.pointFromY(i, n)
    }
    ,
    d.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }
    ,
    d.prototype.decodeInt = function(e) {
        return a.intFromLE(e)
    }
    ,
    d.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(28)
      , i = n.assert
      , a = n.parseBytes
      , o = n.cachedProperty;
    function s(e, t) {
        this.eddsa = e,
        this._secret = a(t.secret),
        e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = a(t.pub)
    }
    s.fromPublic = function(e, t) {
        return t instanceof s ? t : new s(e,{
            pub: t
        })
    }
    ,
    s.fromSecret = function(e, t) {
        return t instanceof s ? t : new s(e,{
            secret: t
        })
    }
    ,
    s.prototype.secret = function() {
        return this._secret
    }
    ,
    o(s, "pubBytes", (function() {
        return this.eddsa.encodePoint(this.pub())
    }
    )),
    o(s, "pub", (function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }
    )),
    o(s, "privBytes", (function() {
        var e = this.eddsa
          , t = this.hash()
          , r = e.encodingLength - 1
          , n = t.slice(0, e.encodingLength);
        return n[0] &= 248,
        n[r] &= 127,
        n[r] |= 64,
        n
    }
    )),
    o(s, "priv", (function() {
        return this.eddsa.decodeInt(this.privBytes())
    }
    )),
    o(s, "hash", (function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }
    )),
    o(s, "messagePrefix", (function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }
    )),
    s.prototype.sign = function(e) {
        return i(this._secret, "KeyPair can only verify"),
        this.eddsa.sign(e, this)
    }
    ,
    s.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }
    ,
    s.prototype.getSecret = function(e) {
        return i(this._secret, "KeyPair is public only"),
        n.encode(this.secret(), e)
    }
    ,
    s.prototype.getPublic = function(e) {
        return n.encode(this.pubBytes(), e)
    }
    ,
    e.exports = s
}
, function(e, t, r) {
    "use strict";
    var n = r(10)
      , i = r(28)
      , a = i.assert
      , o = i.cachedProperty
      , s = i.parseBytes;
    function f(e, t) {
        this.eddsa = e,
        "object" != typeof t && (t = s(t)),
        Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }),
        a(t.R && t.S, "Signature without R or S"),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof n && (this._S = t.S),
        this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded,
        this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    o(f, "S", (function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }
    )),
    o(f, "R", (function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }
    )),
    o(f, "Rencoded", (function() {
        return this.eddsa.encodePoint(this.R())
    }
    )),
    o(f, "Sencoded", (function() {
        return this.eddsa.encodeInt(this.S())
    }
    )),
    f.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }
    ,
    f.prototype.toHex = function() {
        return i.encode(this.toBytes(), "hex").toUpperCase()
    }
    ,
    e.exports = f
}
, function(e, t, r) {
    "use strict";
    var n = r(55);
    t.certificate = r(247);
    var i = n.define("RSAPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    }
    ));
    t.RSAPrivateKey = i;
    var a = n.define("RSAPublicKey", (function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    }
    ));
    t.RSAPublicKey = a;
    var o = n.define("SubjectPublicKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
    }
    ));
    t.PublicKey = o;
    var s = n.define("AlgorithmIdentifier", (function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
    }
    ))
      , f = n.define("PrivateKeyInfo", (function() {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
    }
    ));
    t.PrivateKey = f;
    var c = n.define("EncryptedPrivateKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    }
    ));
    t.EncryptedPrivateKey = c;
    var d = n.define("DSAPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    }
    ));
    t.DSAPrivateKey = d,
    t.DSAparam = n.define("DSAparam", (function() {
        this.int()
    }
    ));
    var h = n.define("ECPrivateKey", (function() {
        this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(u), this.key("publicKey").optional().explicit(1).bitstr())
    }
    ));
    t.ECPrivateKey = h;
    var u = n.define("ECParameters", (function() {
        this.choice({
            namedCurve: this.objid()
        })
    }
    ));
    t.signature = n.define("signature", (function() {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    }
    ))
}
, function(e, t, r) {
    var n = r(55)
      , i = r(0);
    function a(e, t) {
        this.name = e,
        this.body = t,
        this.decoders = {},
        this.encoders = {}
    }
    t.define = function(e, t) {
        return new a(e,t)
    }
    ,
    a.prototype._createNamed = function(e) {
        var t;
        try {
            t = r(239).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
        } catch (e) {
            t = function(e) {
                this._initNamed(e)
            }
        }
        return i(t, e),
        t.prototype._initNamed = function(t) {
            e.call(this, t)
        }
        ,
        new t(this)
    }
    ,
    a.prototype._getDecoder = function(e) {
        return e = e || "der",
        this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(n.decoders[e])),
        this.decoders[e]
    }
    ,
    a.prototype.decode = function(e, t, r) {
        return this._getDecoder(t).decode(e, r)
    }
    ,
    a.prototype._getEncoder = function(e) {
        return e = e || "der",
        this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(n.encoders[e])),
        this.encoders[e]
    }
    ,
    a.prototype.encode = function(e, t, r) {
        return this._getEncoder(t).encode(e, r)
    }
}
, function(module, exports) {
    var indexOf = function(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var r = 0; r < e.length; r++)
            if (e[r] === t)
                return r;
        return -1
    }
      , Object_keys = function(e) {
        if (Object.keys)
            return Object.keys(e);
        var t = [];
        for (var r in e)
            t.push(r);
        return t
    }
      , forEach = function(e, t) {
        if (e.forEach)
            return e.forEach(t);
        for (var r = 0; r < e.length; r++)
            t(e[r], r, e)
    }
      , defineProp = function() {
        try {
            return Object.defineProperty({}, "_", {}),
            function(e, t, r) {
                Object.defineProperty(e, t, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: r
                })
            }
        } catch (e) {
            return function(e, t, r) {
                e[t] = r
            }
        }
    }()
      , globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
    function Context() {}
    Context.prototype = {};
    var Script = exports.Script = function(e) {
        if (!(this instanceof Script))
            return new Script(e);
        this.code = e
    }
    ;
    Script.prototype.runInContext = function(e) {
        if (!(e instanceof Context))
            throw new TypeError("needs a 'context' argument.");
        var t = document.createElement("iframe");
        t.style || (t.style = {}),
        t.style.display = "none",
        document.body.appendChild(t);
        var r = t.contentWindow
          , n = r.eval
          , i = r.execScript;
        !n && i && (i.call(r, "null"),
        n = r.eval),
        forEach(Object_keys(e), (function(t) {
            r[t] = e[t]
        }
        )),
        forEach(globals, (function(t) {
            e[t] && (r[t] = e[t])
        }
        ));
        var a = Object_keys(r)
          , o = n.call(r, this.code);
        return forEach(Object_keys(r), (function(t) {
            (t in e || -1 === indexOf(a, t)) && (e[t] = r[t])
        }
        )),
        forEach(globals, (function(t) {
            t in e || defineProp(e, t, r[t])
        }
        )),
        document.body.removeChild(t),
        o
    }
    ,
    Script.prototype.runInThisContext = function() {
        return eval(this.code)
    }
    ,
    Script.prototype.runInNewContext = function(e) {
        var t = Script.createContext(e)
          , r = this.runInContext(t);
        return e && forEach(Object_keys(t), (function(r) {
            e[r] = t[r]
        }
        )),
        r
    }
    ,
    forEach(Object_keys(Script.prototype), (function(e) {
        exports[e] = Script[e] = function(t) {
            var r = Script(t);
            return r[e].apply(r, [].slice.call(arguments, 1))
        }
    }
    )),
    exports.isContext = function(e) {
        return e instanceof Context
    }
    ,
    exports.createScript = function(e) {
        return exports.Script(e)
    }
    ,
    exports.createContext = Script.createContext = function(e) {
        var t = new Context;
        return "object" == typeof e && forEach(Object_keys(e), (function(r) {
            t[r] = e[r]
        }
        )),
        t
    }
}
, function(e, t, r) {
    var n = r(0);
    function i(e) {
        this._reporterState = {
            obj: null,
            path: [],
            options: e || {},
            errors: []
        }
    }
    function a(e, t) {
        this.path = e,
        this.rethrow(t)
    }
    t.Reporter = i,
    i.prototype.isError = function(e) {
        return e instanceof a
    }
    ,
    i.prototype.save = function() {
        var e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        }
    }
    ,
    i.prototype.restore = function(e) {
        var t = this._reporterState;
        t.obj = e.obj,
        t.path = t.path.slice(0, e.pathLen)
    }
    ,
    i.prototype.enterKey = function(e) {
        return this._reporterState.path.push(e)
    }
    ,
    i.prototype.exitKey = function(e) {
        var t = this._reporterState;
        t.path = t.path.slice(0, e - 1)
    }
    ,
    i.prototype.leaveKey = function(e, t, r) {
        var n = this._reporterState;
        this.exitKey(e),
        null !== n.obj && (n.obj[t] = r)
    }
    ,
    i.prototype.path = function() {
        return this._reporterState.path.join("/")
    }
    ,
    i.prototype.enterObject = function() {
        var e = this._reporterState
          , t = e.obj;
        return e.obj = {},
        t
    }
    ,
    i.prototype.leaveObject = function(e) {
        var t = this._reporterState
          , r = t.obj;
        return t.obj = e,
        r
    }
    ,
    i.prototype.error = function(e) {
        var t, r = this._reporterState, n = e instanceof a;
        if (t = n ? e : new a(r.path.map((function(e) {
            return "[" + JSON.stringify(e) + "]"
        }
        )).join(""),e.message || e,e.stack),
        !r.options.partial)
            throw t;
        return n || r.errors.push(t),
        t
    }
    ,
    i.prototype.wrapResult = function(e) {
        var t = this._reporterState;
        return t.options.partial ? {
            result: this.isError(e) ? null : e,
            errors: t.errors
        } : e
    }
    ,
    n(a, Error),
    a.prototype.rethrow = function(e) {
        if (this.message = e + " at: " + (this.path || "(shallow)"),
        Error.captureStackTrace && Error.captureStackTrace(this, a),
        !this.stack)
            try {
                throw new Error(this.message)
            } catch (e) {
                this.stack = e.stack
            }
        return this
    }
}
, function(e, t, r) {
    var n = r(56).Reporter
      , i = r(56).EncoderBuffer
      , a = r(56).DecoderBuffer
      , o = r(27)
      , s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"]
      , f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);
    function c(e, t) {
        var r = {};
        this._baseState = r,
        r.enc = e,
        r.parent = t || null,
        r.children = null,
        r.tag = null,
        r.args = null,
        r.reverseArgs = null,
        r.choice = null,
        r.optional = !1,
        r.any = !1,
        r.obj = !1,
        r.use = null,
        r.useDecoder = null,
        r.key = null,
        r.default = null,
        r.explicit = null,
        r.implicit = null,
        r.contains = null,
        r.parent || (r.children = [],
        this._wrap())
    }
    e.exports = c;
    var d = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    c.prototype.clone = function() {
        var e = this._baseState
          , t = {};
        d.forEach((function(r) {
            t[r] = e[r]
        }
        ));
        var r = new this.constructor(t.parent);
        return r._baseState = t,
        r
    }
    ,
    c.prototype._wrap = function() {
        var e = this._baseState;
        f.forEach((function(t) {
            this[t] = function() {
                var r = new this.constructor(this);
                return e.children.push(r),
                r[t].apply(r, arguments)
            }
        }
        ), this)
    }
    ,
    c.prototype._init = function(e) {
        var t = this._baseState;
        o(null === t.parent),
        e.call(this),
        t.children = t.children.filter((function(e) {
            return e._baseState.parent === this
        }
        ), this),
        o.equal(t.children.length, 1, "Root node can have only one child")
    }
    ,
    c.prototype._useArgs = function(e) {
        var t = this._baseState
          , r = e.filter((function(e) {
            return e instanceof this.constructor
        }
        ), this);
        e = e.filter((function(e) {
            return !(e instanceof this.constructor)
        }
        ), this),
        0 !== r.length && (o(null === t.children),
        t.children = r,
        r.forEach((function(e) {
            e._baseState.parent = this
        }
        ), this)),
        0 !== e.length && (o(null === t.args),
        t.args = e,
        t.reverseArgs = e.map((function(e) {
            if ("object" != typeof e || e.constructor !== Object)
                return e;
            var t = {};
            return Object.keys(e).forEach((function(r) {
                r == (0 | r) && (r |= 0);
                var n = e[r];
                t[n] = r
            }
            )),
            t
        }
        )))
    }
    ,
    ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach((function(e) {
        c.prototype[e] = function() {
            var t = this._baseState;
            throw new Error(e + " not implemented for encoding: " + t.enc)
        }
    }
    )),
    s.forEach((function(e) {
        c.prototype[e] = function() {
            var t = this._baseState
              , r = Array.prototype.slice.call(arguments);
            return o(null === t.tag),
            t.tag = e,
            this._useArgs(r),
            this
        }
    }
    )),
    c.prototype.use = function(e) {
        o(e);
        var t = this._baseState;
        return o(null === t.use),
        t.use = e,
        this
    }
    ,
    c.prototype.optional = function() {
        return this._baseState.optional = !0,
        this
    }
    ,
    c.prototype.def = function(e) {
        var t = this._baseState;
        return o(null === t.default),
        t.default = e,
        t.optional = !0,
        this
    }
    ,
    c.prototype.explicit = function(e) {
        var t = this._baseState;
        return o(null === t.explicit && null === t.implicit),
        t.explicit = e,
        this
    }
    ,
    c.prototype.implicit = function(e) {
        var t = this._baseState;
        return o(null === t.explicit && null === t.implicit),
        t.implicit = e,
        this
    }
    ,
    c.prototype.obj = function() {
        var e = this._baseState
          , t = Array.prototype.slice.call(arguments);
        return e.obj = !0,
        0 !== t.length && this._useArgs(t),
        this
    }
    ,
    c.prototype.key = function(e) {
        var t = this._baseState;
        return o(null === t.key),
        t.key = e,
        this
    }
    ,
    c.prototype.any = function() {
        return this._baseState.any = !0,
        this
    }
    ,
    c.prototype.choice = function(e) {
        var t = this._baseState;
        return o(null === t.choice),
        t.choice = e,
        this._useArgs(Object.keys(e).map((function(t) {
            return e[t]
        }
        ))),
        this
    }
    ,
    c.prototype.contains = function(e) {
        var t = this._baseState;
        return o(null === t.use),
        t.contains = e,
        this
    }
    ,
    c.prototype._decode = function(e, t) {
        var r = this._baseState;
        if (null === r.parent)
            return e.wrapResult(r.children[0]._decode(e, t));
        var n, i = r.default, o = !0, s = null;
        if (null !== r.key && (s = e.enterKey(r.key)),
        r.optional) {
            var f = null;
            if (null !== r.explicit ? f = r.explicit : null !== r.implicit ? f = r.implicit : null !== r.tag && (f = r.tag),
            null !== f || r.any) {
                if (o = this._peekTag(e, f, r.any),
                e.isError(o))
                    return o
            } else {
                var c = e.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t),
                    o = !0
                } catch (e) {
                    o = !1
                }
                e.restore(c)
            }
        }
        if (r.obj && o && (n = e.enterObject()),
        o) {
            if (null !== r.explicit) {
                var d = this._decodeTag(e, r.explicit);
                if (e.isError(d))
                    return d;
                e = d
            }
            var h = e.offset;
            if (null === r.use && null === r.choice) {
                if (r.any)
                    c = e.save();
                var u = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
                if (e.isError(u))
                    return u;
                r.any ? i = e.raw(c) : e = u
            }
            if (t && t.track && null !== r.tag && t.track(e.path(), h, e.length, "tagged"),
            t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"),
            i = r.any ? i : null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t),
            e.isError(i))
                return i;
            if (r.any || null !== r.choice || null === r.children || r.children.forEach((function(r) {
                r._decode(e, t)
            }
            )),
            r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                var l = new a(i);
                i = this._getUse(r.contains, e._reporterState.obj)._decode(l, t)
            }
        }
        return r.obj && o && (i = e.leaveObject(n)),
        null === r.key || null === i && !0 !== o ? null !== s && e.exitKey(s) : e.leaveKey(s, r.key, i),
        i
    }
    ,
    c.prototype._decodeGeneric = function(e, t, r) {
        var n = this._baseState;
        return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0], r) : /str$/.test(e) ? this._decodeStr(t, e, r) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1], r) : "objid" === e ? this._decodeObjid(t, null, null, r) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, r) : "null_" === e ? this._decodeNull(t, r) : "bool" === e ? this._decodeBool(t, r) : "objDesc" === e ? this._decodeStr(t, e, r) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0], r) : null !== n.use ? this._getUse(n.use, t._reporterState.obj)._decode(t, r) : t.error("unknown tag: " + e)
    }
    ,
    c.prototype._getUse = function(e, t) {
        var r = this._baseState;
        return r.useDecoder = this._use(e, t),
        o(null === r.useDecoder._baseState.parent),
        r.useDecoder = r.useDecoder._baseState.children[0],
        r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(),
        r.useDecoder._baseState.implicit = r.implicit),
        r.useDecoder
    }
    ,
    c.prototype._decodeChoice = function(e, t) {
        var r = this._baseState
          , n = null
          , i = !1;
        return Object.keys(r.choice).some((function(a) {
            var o = e.save()
              , s = r.choice[a];
            try {
                var f = s._decode(e, t);
                if (e.isError(f))
                    return !1;
                n = {
                    type: a,
                    value: f
                },
                i = !0
            } catch (t) {
                return e.restore(o),
                !1
            }
            return !0
        }
        ), this),
        i ? n : e.error("Choice not matched")
    }
    ,
    c.prototype._createEncoderBuffer = function(e) {
        return new i(e,this.reporter)
    }
    ,
    c.prototype._encode = function(e, t, r) {
        var n = this._baseState;
        if (null === n.default || n.default !== e) {
            var i = this._encodeValue(e, t, r);
            if (void 0 !== i && !this._skipDefault(i, t, r))
                return i
        }
    }
    ,
    c.prototype._encodeValue = function(e, t, r) {
        var i = this._baseState;
        if (null === i.parent)
            return i.children[0]._encode(e, t || new n);
        var a = null;
        if (this.reporter = t,
        i.optional && void 0 === e) {
            if (null === i.default)
                return;
            e = i.default
        }
        var o = null
          , s = !1;
        if (i.any)
            a = this._createEncoderBuffer(e);
        else if (i.choice)
            a = this._encodeChoice(e, t);
        else if (i.contains)
            o = this._getUse(i.contains, r)._encode(e, t),
            s = !0;
        else if (i.children)
            o = i.children.map((function(r) {
                if ("null_" === r._baseState.tag)
                    return r._encode(null, t, e);
                if (null === r._baseState.key)
                    return t.error("Child should have a key");
                var n = t.enterKey(r._baseState.key);
                if ("object" != typeof e)
                    return t.error("Child expected, but input is not object");
                var i = r._encode(e[r._baseState.key], t, e);
                return t.leaveKey(n),
                i
            }
            ), this).filter((function(e) {
                return e
            }
            )),
            o = this._createEncoderBuffer(o);
        else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!i.args || 1 !== i.args.length)
                return t.error("Too many args for : " + i.tag);
            if (!Array.isArray(e))
                return t.error("seqof/setof, but data is not Array");
            var f = this.clone();
            f._baseState.implicit = null,
            o = this._createEncoderBuffer(e.map((function(r) {
                var n = this._baseState;
                return this._getUse(n.args[0], e)._encode(r, t)
            }
            ), f))
        } else
            null !== i.use ? a = this._getUse(i.use, r)._encode(e, t) : (o = this._encodePrimitive(i.tag, e),
            s = !0);
        if (!i.any && null === i.choice) {
            var c = null !== i.implicit ? i.implicit : i.tag
              , d = null === i.implicit ? "universal" : "context";
            null === c ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (a = this._encodeComposite(c, s, d, o))
        }
        return null !== i.explicit && (a = this._encodeComposite(i.explicit, !1, "context", a)),
        a
    }
    ,
    c.prototype._encodeChoice = function(e, t) {
        var r = this._baseState
          , n = r.choice[e.type];
        return n || o(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))),
        n._encode(e.value, t)
    }
    ,
    c.prototype._encodePrimitive = function(e, t) {
        var r = this._baseState;
        if (/str$/.test(e))
            return this._encodeStr(t, e);
        if ("objid" === e && r.args)
            return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
        if ("objid" === e)
            return this._encodeObjid(t, null, null);
        if ("gentime" === e || "utctime" === e)
            return this._encodeTime(t, e);
        if ("null_" === e)
            return this._encodeNull();
        if ("int" === e || "enum" === e)
            return this._encodeInt(t, r.args && r.reverseArgs[0]);
        if ("bool" === e)
            return this._encodeBool(t);
        if ("objDesc" === e)
            return this._encodeStr(t, e);
        throw new Error("Unsupported tag: " + e)
    }
    ,
    c.prototype._isNumstr = function(e) {
        return /^[0-9 ]*$/.test(e)
    }
    ,
    c.prototype._isPrintstr = function(e) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
    }
}
, function(e, t, r) {
    var n = r(131);
    t.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private"
    },
    t.tagClassByName = n._reverse(t.tagClass),
    t.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr"
    },
    t.tagByName = n._reverse(t.tag)
}
, function(e, t, r) {
    var n = t;
    n.der = r(132),
    n.pem = r(244)
}
, function(e, t, r) {
    var n = r(0)
      , i = r(14).Buffer
      , a = r(132);
    function o(e) {
        a.call(this, e),
        this.enc = "pem"
    }
    n(o, a),
    e.exports = o,
    o.prototype.decode = function(e, t) {
        for (var r = e.toString().split(/[\r\n]+/g), n = t.label.toUpperCase(), o = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, f = -1, c = 0; c < r.length; c++) {
            var d = r[c].match(o);
            if (null !== d && d[2] === n) {
                if (-1 !== s) {
                    if ("END" !== d[1])
                        break;
                    f = c;
                    break
                }
                if ("BEGIN" !== d[1])
                    break;
                s = c
            }
        }
        if (-1 === s || -1 === f)
            throw new Error("PEM section not found for: " + n);
        var h = r.slice(s + 1, f).join("");
        h.replace(/[^a-z0-9\+\/=]+/gi, "");
        var u = new i(h,"base64");
        return a.prototype.decode.call(this, u, t)
    }
}
, function(e, t, r) {
    var n = t;
    n.der = r(133),
    n.pem = r(246)
}
, function(e, t, r) {
    var n = r(0)
      , i = r(133);
    function a(e) {
        i.call(this, e),
        this.enc = "pem"
    }
    n(a, i),
    e.exports = a,
    a.prototype.encode = function(e, t) {
        for (var r = i.prototype.encode.call(this, e).toString("base64"), n = ["-----BEGIN " + t.label + "-----"], a = 0; a < r.length; a += 64)
            n.push(r.slice(a, a + 64));
        return n.push("-----END " + t.label + "-----"),
        n.join("\n")
    }
}
, function(e, t, r) {
    "use strict";
    var n = r(55)
      , i = n.define("Time", (function() {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        })
    }
    ))
      , a = n.define("AttributeTypeValue", (function() {
        this.seq().obj(this.key("type").objid(), this.key("value").any())
    }
    ))
      , o = n.define("AlgorithmIdentifier", (function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
    }
    ))
      , s = n.define("SubjectPublicKeyInfo", (function() {
        this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
    }
    ))
      , f = n.define("RelativeDistinguishedName", (function() {
        this.setof(a)
    }
    ))
      , c = n.define("RDNSequence", (function() {
        this.seqof(f)
    }
    ))
      , d = n.define("Name", (function() {
        this.choice({
            rdnSequence: this.use(c)
        })
    }
    ))
      , h = n.define("Validity", (function() {
        this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
    }
    ))
      , u = n.define("Extension", (function() {
        this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
    }
    ))
      , l = n.define("TBSCertificate", (function() {
        this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(o), this.key("issuer").use(d), this.key("validity").use(h), this.key("subject").use(d), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(u).optional())
    }
    ))
      , p = n.define("X509Certificate", (function() {
        this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(o), this.key("signatureValue").bitstr())
    }
    ));
    e.exports = p
}
, function(e) {
    e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')
}
, function(e, t, r) {
    var n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m
      , i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m
      , a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m
      , o = r(64)
      , s = r(85)
      , f = r(1).Buffer;
    e.exports = function(e, t) {
        var r, c = e.toString(), d = c.match(n);
        if (d) {
            var h = "aes" + d[1]
              , u = f.from(d[2], "hex")
              , l = f.from(d[3].replace(/[\r\n]/g, ""), "base64")
              , p = o(t, u.slice(0, 8), parseInt(d[1], 10)).key
              , b = []
              , m = s.createDecipheriv(h, p, u);
            b.push(m.update(l)),
            b.push(m.final()),
            r = f.concat(b)
        } else {
            var y = c.match(a);
            r = new f(y[2].replace(/[\r\n]/g, ""),"base64")
        }
        return {
            tag: c.match(i)[1],
            data: r
        }
    }
}
, function(e, t, r) {
    (function(t) {
        var n = r(10)
          , i = r(89).ec
          , a = r(66)
          , o = r(134);
        function s(e, t) {
            if (e.cmpn(0) <= 0)
                throw new Error("invalid sig");
            if (e.cmp(t) >= t)
                throw new Error("invalid sig")
        }
        e.exports = function(e, r, f, c, d) {
            var h = a(f);
            if ("ec" === h.type) {
                if ("ecdsa" !== c && "ecdsa/rsa" !== c)
                    throw new Error("wrong public key type");
                return function(e, t, r) {
                    var n = o[r.data.algorithm.curve.join(".")];
                    if (!n)
                        throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                    var a = new i(n)
                      , s = r.data.subjectPrivateKey.data;
                    return a.verify(t, e, s)
                }(e, r, h)
            }
            if ("dsa" === h.type) {
                if ("dsa" !== c)
                    throw new Error("wrong public key type");
                return function(e, t, r) {
                    var i = r.data.p
                      , o = r.data.q
                      , f = r.data.g
                      , c = r.data.pub_key
                      , d = a.signature.decode(e, "der")
                      , h = d.s
                      , u = d.r;
                    s(h, o),
                    s(u, o);
                    var l = n.mont(i)
                      , p = h.invm(o);
                    return 0 === f.toRed(l).redPow(new n(t).mul(p).mod(o)).fromRed().mul(c.toRed(l).redPow(u.mul(p).mod(o)).fromRed()).mod(i).mod(o).cmp(u)
                }(e, r, h)
            }
            if ("rsa" !== c && "ecdsa/rsa" !== c)
                throw new Error("wrong public key type");
            r = t.concat([d, r]);
            for (var u = h.modulus.byteLength(), l = [1], p = 0; r.length + l.length + 2 < u; )
                l.push(255),
                p++;
            l.push(0);
            for (var b = -1; ++b < r.length; )
                l.push(r[b]);
            l = new t(l);
            var m = n.mont(h.modulus);
            e = (e = new n(e).toRed(m)).redPow(new n(h.publicExponent)),
            e = new t(e.fromRed().toArray());
            var y = p < 8 ? 1 : 0;
            for (u = Math.min(e.length, l.length),
            e.length !== l.length && (y = 1),
            b = -1; ++b < u; )
                y |= e[b] ^ l[b];
            return 0 === y
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    (function(t) {
        var n = r(89)
          , i = r(10);
        e.exports = function(e) {
            return new o(e)
        }
        ;
        var a = {
            secp256k1: {
                name: "secp256k1",
                byteLength: 32
            },
            secp224r1: {
                name: "p224",
                byteLength: 28
            },
            prime256v1: {
                name: "p256",
                byteLength: 32
            },
            prime192v1: {
                name: "p192",
                byteLength: 24
            },
            ed25519: {
                name: "ed25519",
                byteLength: 32
            },
            secp384r1: {
                name: "p384",
                byteLength: 48
            },
            secp521r1: {
                name: "p521",
                byteLength: 66
            }
        };
        function o(e) {
            this.curveType = a[e],
            this.curveType || (this.curveType = {
                name: e
            }),
            this.curve = new n.ec(this.curveType.name),
            this.keys = void 0
        }
        function s(e, r, n) {
            Array.isArray(e) || (e = e.toArray());
            var i = new t(e);
            if (n && i.length < n) {
                var a = new t(n - i.length);
                a.fill(0),
                i = t.concat([a, i])
            }
            return r ? i.toString(r) : i
        }
        a.p224 = a.secp224r1,
        a.p256 = a.secp256r1 = a.prime256v1,
        a.p192 = a.secp192r1 = a.prime192v1,
        a.p384 = a.secp384r1,
        a.p521 = a.secp521r1,
        o.prototype.generateKeys = function(e, t) {
            return this.keys = this.curve.genKeyPair(),
            this.getPublicKey(e, t)
        }
        ,
        o.prototype.computeSecret = function(e, r, n) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength)
        }
        ,
        o.prototype.getPublicKey = function(e, t) {
            var r = this.keys.getPublic("compressed" === t, !0);
            return "hybrid" === t && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6),
            s(r, e)
        }
        ,
        o.prototype.getPrivateKey = function(e) {
            return s(this.keys.getPrivate(), e)
        }
        ,
        o.prototype.setPublicKey = function(e, r) {
            return r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r)),
            this.keys._importPublic(e),
            this
        }
        ,
        o.prototype.setPrivateKey = function(e, r) {
            r = r || "utf8",
            t.isBuffer(e) || (e = new t(e,r));
            var n = new i(e);
            return n = n.toString(16),
            this.keys = this.curve.genKeyPair(),
            this.keys._importPrivate(n),
            this
        }
    }
    ).call(this, r(14).Buffer)
}
, function(e, t, r) {
    t.publicEncrypt = r(253),
    t.privateDecrypt = r(254),
    t.privateEncrypt = function(e, r) {
        return t.publicEncrypt(e, r, !0)
    }
    ,
    t.publicDecrypt = function(e, r) {
        return t.privateDecrypt(e, r, !0)
    }
}
, function(e, t, r) {
    var n = r(66)
      , i = r(48)
      , a = r(51)
      , o = r(135)
      , s = r(136)
      , f = r(10)
      , c = r(137)
      , d = r(88)
      , h = r(1).Buffer;
    e.exports = function(e, t, r) {
        var u;
        u = e.padding ? e.padding : r ? 1 : 4;
        var l, p = n(e);
        if (4 === u)
            l = function(e, t) {
                var r = e.modulus.byteLength()
                  , n = t.length
                  , c = a("sha1").update(h.alloc(0)).digest()
                  , d = c.length
                  , u = 2 * d;
                if (n > r - u - 2)
                    throw new Error("message too long");
                var l = h.alloc(r - n - u - 2)
                  , p = r - d - 1
                  , b = i(d)
                  , m = s(h.concat([c, l, h.alloc(1, 1), t], p), o(b, p))
                  , y = s(b, o(m, d));
                return new f(h.concat([h.alloc(1), y, m], r))
            }(p, t);
        else if (1 === u)
            l = function(e, t, r) {
                var n, a = t.length, o = e.modulus.byteLength();
                if (a > o - 11)
                    throw new Error("message too long");
                n = r ? h.alloc(o - a - 3, 255) : function(e) {
                    var t, r = h.allocUnsafe(e), n = 0, a = i(2 * e), o = 0;
                    for (; n < e; )
                        o === a.length && (a = i(2 * e),
                        o = 0),
                        (t = a[o++]) && (r[n++] = t);
                    return r
                }(o - a - 3);
                return new f(h.concat([h.from([0, r ? 1 : 2]), n, h.alloc(1), t], o))
            }(p, t, r);
        else {
            if (3 !== u)
                throw new Error("unknown padding");
            if ((l = new f(t)).cmp(p.modulus) >= 0)
                throw new Error("data too long for modulus")
        }
        return r ? d(l, p) : c(l, p)
    }
}
, function(e, t, r) {
    var n = r(66)
      , i = r(135)
      , a = r(136)
      , o = r(10)
      , s = r(88)
      , f = r(51)
      , c = r(137)
      , d = r(1).Buffer;
    e.exports = function(e, t, r) {
        var h;
        h = e.padding ? e.padding : r ? 1 : 4;
        var u, l = n(e), p = l.modulus.byteLength();
        if (t.length > p || new o(t).cmp(l.modulus) >= 0)
            throw new Error("decryption error");
        u = r ? c(new o(t), l) : s(t, l);
        var b = d.alloc(p - u.length);
        if (u = d.concat([b, u], p),
        4 === h)
            return function(e, t) {
                var r = e.modulus.byteLength()
                  , n = f("sha1").update(d.alloc(0)).digest()
                  , o = n.length;
                if (0 !== t[0])
                    throw new Error("decryption error");
                var s = t.slice(1, o + 1)
                  , c = t.slice(o + 1)
                  , h = a(s, i(c, o))
                  , u = a(c, i(h, r - o - 1));
                if (function(e, t) {
                    e = d.from(e),
                    t = d.from(t);
                    var r = 0
                      , n = e.length;
                    e.length !== t.length && (r++,
                    n = Math.min(e.length, t.length));
                    var i = -1;
                    for (; ++i < n; )
                        r += e[i] ^ t[i];
                    return r
                }(n, u.slice(0, o)))
                    throw new Error("decryption error");
                var l = o;
                for (; 0 === u[l]; )
                    l++;
                if (1 !== u[l++])
                    throw new Error("decryption error");
                return u.slice(l)
            }(l, u);
        if (1 === h)
            return function(e, t, r) {
                var n = t.slice(0, 2)
                  , i = 2
                  , a = 0;
                for (; 0 !== t[i++]; )
                    if (i >= t.length) {
                        a++;
                        break
                    }
                var o = t.slice(2, i - 1);
                ("0002" !== n.toString("hex") && !r || "0001" !== n.toString("hex") && r) && a++;
                o.length < 8 && a++;
                if (a)
                    throw new Error("decryption error");
                return t.slice(i)
            }(0, u, r);
        if (3 === h)
            return u;
        throw new Error("unknown padding")
    }
}
, function(e, t, r) {
    "use strict";
    (function(e, n) {
        function i() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }
        var a = r(1)
          , o = r(48)
          , s = a.Buffer
          , f = a.kMaxLength
          , c = e.crypto || e.msCrypto
          , d = Math.pow(2, 32) - 1;
        function h(e, t) {
            if ("number" != typeof e || e != e)
                throw new TypeError("offset must be a number");
            if (e > d || e < 0)
                throw new TypeError("offset must be a uint32");
            if (e > f || e > t)
                throw new RangeError("offset out of range")
        }
        function u(e, t, r) {
            if ("number" != typeof e || e != e)
                throw new TypeError("size must be a number");
            if (e > d || e < 0)
                throw new TypeError("size must be a uint32");
            if (e + t > r || e > f)
                throw new RangeError("buffer too small")
        }
        function l(e, t, r, i) {
            if (n.browser) {
                var a = e.buffer
                  , s = new Uint8Array(a,t,r);
                return c.getRandomValues(s),
                i ? void n.nextTick((function() {
                    i(null, e)
                }
                )) : e
            }
            if (!i)
                return o(r).copy(e, t),
                e;
            o(r, (function(r, n) {
                if (r)
                    return i(r);
                n.copy(e, t),
                i(null, e)
            }
            ))
        }
        c && c.getRandomValues || !n.browser ? (t.randomFill = function(t, r, n, i) {
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            if ("function" == typeof r)
                i = r,
                r = 0,
                n = t.length;
            else if ("function" == typeof n)
                i = n,
                n = t.length - r;
            else if ("function" != typeof i)
                throw new TypeError('"cb" argument must be a function');
            return h(r, t.length),
            u(n, r, t.length),
            l(t, r, n, i)
        }
        ,
        t.randomFillSync = function(t, r, n) {
            void 0 === r && (r = 0);
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            h(r, t.length),
            void 0 === n && (n = t.length - r);
            return u(n, r, t.length),
            l(t, r, n)
        }
        ) : (t.randomFill = i,
        t.randomFillSync = i)
    }
    ).call(this, r(32), r(40))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    var n = r(16)
      , i = r(9)
      , a = r(31)
      , o = r(333)
      , s = r(57)
      , f = r(25)
      , c = r(170);
    var d = (new Date).getTime()
      , h = function(e, t, r) {
        var n = ""
          , i = t
          , a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        e && (i = Math.round(Math.random() * (r - t)) + t);
        for (var o = 0; o < i; o++) {
            n += a[Math.round(Math.random() * (a.length - 1))]
        }
        return n
    }(!1, 16)
      , u = "$d6eb7ff91ee257475%"
      , l = 10
      , p = {
        type1: 1,
        type2: 1,
        type3: 1,
        type4: 1,
        jury: 1
    };
    e.exports = function(e) {
        var t = c([d, h, u, e, l, p["type" + e]].sort().join(""))
          , r = "".concat(i.INDEX_FEED, "?ts=").concat(d, "&rs=").concat(h, "&signature=").concat(t)
          , b = {
            type: e,
            page_size: l,
            page: p["type" + e]
        };
        if ("jury" == e && (r = i.JURY_LIST,
        b = {
            juid: window.juid,
            status: 1,
            page_size: l,
            page: p.jury
        }),
        !window.tabStatus["isGetAllType" + e]) {
            var m = {
                option: {
                    url: r,
                    data: b,
                    type: "GET",
                    timeout: 1e4
                },
                successCb: function(t) {
                    var r = t.result;
                    if (r) {
                        var n = r.data
                          , i = r.status;
                        if (i && 0 === i.code && n) {
                            var c = n.lists;
                            if (c && c.length) {
                                $(".no-data").addClass("hide");
                                var d = "";
                                c.forEach((function(t, r) {
                                    var n = a.formatTime(1e3 * t.main.timestamp);
                                    "jury" == e && (n = t.main.timestamp);
                                    var i = o({
                                        sn: t.main.sn,
                                        url: t.main.url,
                                        title: t.main.title,
                                        date: n,
                                        status: t.main.status,
                                        summary: t.main.summary,
                                        cotitle: t.main.cotitle,
                                        appeal: t.main.appeal,
                                        comment_id: t.main.comment_id,
                                        is_upvote: t.main.is_upvote,
                                        upvote_amount: t.main.upvote_amount,
                                        share_amount: t.main.share_amount,
                                        comment_amount: t.main.comment_amount,
                                        has_jury: t.main.has_jury,
                                        nickname: t.author.title,
                                        avatar: t.author.avatar,
                                        sticky: t.main.sticky
                                    });
                                    d += i
                                }
                                )),
                                $("[data-role=" + e + "]").append(d),
                                "jury" == e ? p.jury++ : p["type" + e]++,
                                $(".share").hover((function() {
                                    $(this).children(".share-wrap").show()
                                }
                                ), (function() {
                                    $(this).children(".share-wrap").hide()
                                }
                                )),
                                c.forEach((function(e, t) {
                                    new FnShare(".share" + e.main.sn,{
                                        url: "https:" + e.main.url,
                                        title: e.main.title,
                                        security: "https"
                                    })
                                }
                                )),
                                s($(".blackcat-con .icon-code .praise"), 1)
                            } else
                                1 == p["type" + e] && ($(".load-more").addClass("hide"),
                                $(".no-more").addClass("hide"),
                                $(".no-data").removeClass("hide"));
                            var h = n.pager;
                            h && h.current && h.page_amount && h.current === h.page_amount && (window.tabStatus["isGetAllType" + e] = !0,
                            $(".load-more").addClass("hide"),
                            $(".no-data").addClass("hide"),
                            $(".no-more").removeClass("hide"))
                        } else
                            i && 10017 === i.code ? (window.tabStatus["isGetAllType" + e] = !0,
                            $(".load-more").addClass("hide"),
                            $(".no-data").addClass("hide"),
                            $(".no-more").addClass("hide"),
                            $(".new_more_txt").html("登录查看更多内容").removeClass("hide"),
                            f.notice.show('<div class="ts_pop_content"><div class="rs_pop_body"><p style="padding:25px 0 20px;font-size:18px;">登录查看更多内容</p></div> </div>', {
                                width: 400,
                                height: 200,
                                position: "center",
                                mask: 1,
                                animate: "bounceIn",
                                animateOut: "bounceOut",
                                type: "question",
                                title: "",
                                confirmW: "确定",
                                cancelW: "取消",
                                cancelWClass: "cancel",
                                oncomplete: function() {},
                                oncancel: function() {},
                                callback: function(e) {
                                    f.notice.close()
                                }
                            })) : i && 10018 === i.code && (window.tabStatus["isGetAllType" + e] = !0,
                            $(".load-more").addClass("hide"),
                            $(".no-data").addClass("hide"),
                            $(".no-more").addClass("hide"),
                            $(".new_more_txt").html('<a href="https://tousu.sina.com.cn/about_app/index?frompage=heimaopc">打开App查看更多内容> </a>').removeClass("hide"),
                            f.notice.show('<div class="ts_pop_content"><div class="rs_pop_body"><p style="padding:25px 0 20px;font-size:18px;">打开App查看更多内容</p></div> </div>', {
                                width: 400,
                                height: 200,
                                position: "center",
                                mask: 1,
                                animate: "bounceIn",
                                animateOut: "bounceOut",
                                type: "question",
                                title: "",
                                confirmW: "前往下载",
                                cancelW: "取消",
                                cancelWClass: "cancel",
                                oncomplete: function() {},
                                oncancel: function() {},
                                callback: function() {
                                    f.notice.close(),
                                    location.href = "https://tousu.sina.com.cn/about_app/index?frompage=heimaopc"
                                }
                            }))
                    }
                }
            };
            n.request(m.option, m.successCb, null, null)
        }
    }
}
, function(e, t, r) {
    var n = r(46);
    e.exports = n("pages/js/mods/getComplaint/tpl/index", (function(e, t) {
        "use strict";
        this.$helpers;
        var r = e.sn
          , n = e.status
          , i = this.$escape
          , a = e.url
          , o = e.avatar
          , s = e.nickname
          , f = e.date
          , c = e.sticky
          , d = e.title
          , h = e.summary
          , u = e.cotitle
          , l = e.appeal
          , p = e.has_jury
          , b = e.is_upvote
          , m = e.upvote_amount
          , y = e.comment_id
          , v = e.comment_amount
          , g = e.share_amount
          , _ = "";
        return _ += ' <div class="blackcat-con"> ',
        "11203" != r ? (_ += " ",
        1 == n ? _ += ' <div class="icon-status icon-yel">通过审核</div> ' : 4 == n ? _ += ' <div class="icon-status icon-yel">处理中</div> ' : 3 == n ? _ += ' <div class="icon-status icon-yel">待分配</div> ' : 8 == n ? _ += ' <div class="icon-status icon-yel">已关闭</div> ' : 6 == n ? _ += ' <div class="icon-status icon-answer">已回复</div> ' : 7 == n && (_ += ' <div class="icon-status icon-done"></div> '),
        _ += ' <a class="box select" href="',
        _ += i(a),
        _ += '" target="_blank">  <div class="img"><img src=',
        _ += i(o),
        _ += ' /></div> <div class="tit"><span class="name">',
        _ += i(s),
        _ += '</span><span class="time">',
        _ += i(f),
        _ += " 于黑猫投诉平台发起</span></div> ",
        1 == c ? (_ += ' <h1 class="blackcat-hot">',
        _ += i(d),
        _ += "</h1> ") : (_ += " <h1>",
        _ += i(d),
        _ += "</h1> "),
        _ += " <p>",
        _ += i(h),
        _ += '</p> <ul class="list"> <li><span>[投诉对象]</span>',
        _ += i(u),
        _ += "</li> ",
        l && (_ += " <li><span>[投诉要求]</span>",
        _ += i(l),
        _ += "</li> "),
        _ += " </ul> </a> ",
        p && (_ += ' <span class="jury-icon"></span><span class="jury-txt">帮帮官已介入</span> '),
        _ += ' <div class="icon-code" data-rid=',
        _ += i(r),
        _ += "> ",
        b ? (_ += ' <div suda-uatrack="key=index_move&value=dianzan" class="li-item praise select">',
        _ += i(m),
        _ += "</div> ") : (_ += ' <div suda-uatrack="key=index_move&value=dianzan" class="li-item praise">',
        _ += i(m),
        _ += "</div> "),
        _ += ' <a suda-uatrack="key=index_move&value=pinglun" href="https://comment5.news.sina.com.cn/comment/skin/default.html?channel=tousu&newsid=',
        _ += i(y),
        _ += '" target="_blank"> <div class="li-item comment"> ',
        _ += i(v),
        _ += ' </div> </a> <div class="li-item share" suda-uatrack="key=index_move&value=fenxiang"> ',
        _ += i(g),
        _ += ' <ul class="share-wrap share',
        _ += i(r),
        _ += '"> <li class="weibo"> <a href="" data-share="weibo"> 微博 </a> </li> <li class="weixin"> <a href="" data-share="weixin"> 微信 </a> </li> <li class="qq"> <a href="" data-share="qq"> QQ </a> </li> <li class="qzone"> <a href="" data-share="qzone"> QQ空间 </a> </li> </ul> </div> </div> ') : _ += ' <div class="icon-status icon-yel">处理中</div> <div class="img"><img src="//n.sinaimg.cn/finance/235fa465/20230314/4.png"></div><div class="tit"><span class="name"></span><span class="time">2024-01-27 于黑猫投诉平台发起</span></div> <h1>投诉宙斯美容仪的致歉声明</h1> <p>本平台2020年12月19日收到投诉对象为天猫的消费者投诉（投诉编号17351674181），称“在天猫drarrivo官方旗舰店买的宙斯二代美容仪，产品详情宣传上写着RF高频波，但是收到货后咨询客服说产品根本没有射频功能。”本平台2021年11月27日收到投诉对象为淘宝天猫drarrivo官方旗舰店的消费者投诉（投诉编号17356231102）<a href="javascript:;" class="state-btn">...</a></p> <div class="icon-code"> <div class="li-item state-praise">0</div> <div class="li-item comment"> 0 </div><div class="li-item state-share"> 0 </div> </div> ',
        _ += " </div>",
        new String(_)
    }
    ))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    r(23),
    r(301),
    r(35),
    r(25),
    r(393)();
    var n = r(332)
      , i = 1;
    n(i);
    var a = {
        type1: !0,
        type2: !1,
        type3: !1,
        type4: !1
    }
      , o = 0;
    $(".blackcat-tab").on("click", ".state-btn", (function() {
        $(this).parent().addClass("state-more").html("本平台2020年12月19日收到投诉对象为天猫的消费者投诉（投诉编号17351674181），称“在天猫drarrivo官方旗舰店买的宙斯二代美容仪，产品详情宣传上写着RF高频波，但是收到货后咨询客服说产品根本没有射频功能。”本平台2021年11月27日收到投诉对象为淘宝天猫drarrivo官方旗舰店的消费者投诉（投诉编号17356231102），称“在淘宝天猫drarrivo官方旗舰店，花7640.96人民币购买了一台宙斯魅影美容仪。收到货拆开看说明书才知道敏感肌是不可以使用的，而商家商品详情页没有写敏感肌不可用！第一时间联系商家客服退货退款！商家拒绝退款，小二介入，在我再三说明没有使用过的前提下，小二也以有痕迹判商家赢！淘宝在判商家赢第一时间就系统强制签收成功，把退款通道关闭，把钱直接打给商家！”订单的消费者达成退款和解并处理完毕，纠纷已经得以解决，故在（2021）京0491民初42370号民事案件中根据民事判决书认定的内容，该两条投诉诉求为“拒绝退货、拒绝退款”的内容，投诉进度显示为“处理中”造成了相关公众的误解。为此，本网站特发布澄清声明，为北京凸显科技有限公司消除影响。黑猫投诉1月27日")
    }
    )),
    $(".blackcat-tab").on("click", ".state-more", (function() {
        $(this).removeClass("state-more").html('本平台2020年12月19日收到投诉对象为天猫的消费者投诉（投诉编号17351674181），称“在天猫drarrivo官方旗舰店买的宙斯二代美容仪，产品详情宣传上写着RF高频波，但是收到货后咨询客服说产品根本没有射频功能。”本平台2021年11月27日收到投诉对象为淘宝天猫drarrivo官方旗舰店的消费者投诉（投诉编号17356231102）<a href="javascript:;" class="state-btn">...</a>')
    }
    )),
    $(".blackcat-tab .tab span").on("click", (function(e) {
        var t = $(e.currentTarget)
          , r = t.data("type");
        999 != r && (i = r,
        o = $(window).scrollTop(),
        t.hasClass("select") || (a["type" + i] || (n(i),
        a["type" + i] = !0),
        t.siblings("span").removeClass("select"),
        t.addClass("select"),
        $(".blackcat-tab .conbox").each((function(e, t) {
            $(t).data("role") == i ? $(t).removeClass("hide") : $(t).addClass("hide"),
            $(window).scrollTop(o)
        }
        )),
        window.tabStatus["isGetAllType" + i] ? ($(".load-more").addClass("hide"),
        $(".no-data").addClass("hide"),
        $(".new_more_txt").addClass("hide"),
        $(".no-more").removeClass("hide")) : ($(".load-more").removeClass("hide"),
        $(".no-data").addClass("hide"),
        $(".new_more_txt").addClass("hide"),
        $(".no-more").addClass("hide"))))
    }
    )),
    r(67).init($(".blackcat-tab"), (function() {
        window.SUDA && window.SUDA.uaTrack("load_click"),
        n(i)
    }
    ));
    var s = r(16)
      , f = r(9)
      , c = $("#index_hot")
      , d = c.find(".index_report")
      , h = c.find(".index_group")
      , u = {
        option: {
            url: f.index_article,
            data: {
                page_size: 5,
                page: 1
            },
            type: "GET",
            timeout: 1e4
        },
        successCb: function(e) {
            var t = e.result;
            if (t) {
                var r = t.data
                  , n = t.status;
                if (n && 0 === n.code && r) {
                    var i = r.articles;
                    if (i && i.length) {
                        var a = "";
                        i.slice(0, 5).forEach((function(e) {
                            a += '<div class="swiper-slide">\n                           <a href="'.concat(e.url, '" class="content">').concat(e.title, '</a>\n                           <a href="').concat(e.url, '" class="more">查看更多></a>\n                        </div>')
                        }
                        )),
                        $("#top_slider").html(a),
                        new Swiper(".top_slider",{
                            loop: !0,
                            autoplay: 5e3,
                            speed: 1500,
                            direction: "vertical"
                        })
                    } else
                        i && 0 == i.length && $(".notification").hide()
                }
            }
        }
    };
    s.request(u.option, u.successCb, null, null);
    var l = ["全部", "课堂", "曝光台", "报告", "法规", "行业动向", "资讯", "召回信息"]
      , p = {
        option: {
            url: f.REPORT_FEED,
            data: {
                type: 0,
                hot: 1,
                page_size: 3,
                page: 1
            },
            type: "GET",
            timeout: 1e4
        },
        successCb: function(e) {
            var t = e.result;
            if (t) {
                var r = t.data
                  , n = t.status;
                if (n && 0 === n.code && r) {
                    var i = r.articles;
                    if (i && i.length) {
                        var a = "";
                        i.slice(0, 3).forEach((function(e, t) {
                            a += '<li class="'.concat(0 == t ? "select" : "", '" onclick="window.open(\'').concat(e.url, "', '_blank')\">\n                           <img src=\"").concat(e.cover, '" alt="">\n                           <div class="right">\n                              <p class="title"><span>').concat(l[e.type], "</span>").concat(e.title, '</p>\n                              <p class="info">').concat(e.media ? e.media : "黑猫投诉", " &nbsp;&nbsp;").concat(e.time, "</p>\n                           </div>\n                        </li>")
                        }
                        )),
                        d.html(a)
                    }
                }
            }
        }
    };
    s.request(p.option, p.successCb, null, null);
    var b = {
        option: {
            url: f.group_list,
            data: {
                type: 1,
                page_size: 2,
                page: 1
            },
            type: "GET",
            timeout: 1e4
        },
        successCb: function(e) {
            var t = e.result;
            if (t) {
                var r = t.data
                  , n = t.status;
                if (n && 0 === n.code && r) {
                    var i = r.list;
                    if (i && i.length > 0) {
                        var a = "";
                        i.slice(0, 2).forEach((function(e) {
                            a += "<li onclick=\"location.href='".concat(e.url, '\'">\n                           <div class="right">\n                              <p class="title"><span>集体投诉</span>').concat(e.title, "</p>\n                           </div>\n                        </li>")
                        }
                        )),
                        h.html(a)
                    }
                }
            }
        }
    };
    s.request(b.option, b.successCb, null, null),
    d.on("mouseover", "li", (function() {
        c.find("li").removeClass("select"),
        $(this).addClass("select")
    }
    ))
}
, function(e, t, r) {
    "use strict";
    e.exports = function() {
        var e, t = "https://tousu.sina.com.cn/about_app/index?frompage=heimaopc", r = "//n.sinaimg.cn/finance/blackcat/pc/img/ts_index_min", n = [".f_app_screen_wrap{position: fixed;z-index: 1001;left:0;bottom:0;height:100px;transition:width .6s ease}", ".f_app_screen_wrap .f_app_btn{transition:left .6s ease;background-image:url(//n.sinaimg.cn/finance/blackcat/pc/img/ts_home_min1x.png); background-image:-webkit-image-set(url(//n.sinaimg.cn/finance/blackcat/pc/img/ts_home_min1x.png) 1x, url(//n.sinaimg.cn/finance/blackcat/pc/img/ts_home_min2x.png) 2x); background-repeat:no-repeat; background-position:0 0; background-size:100% 100%; width:90px;height:106px;cursor: pointer;position: absolute;top:0;left:0;z-index:2}", ".f_app_screen_wrap .f_app_screen{width:0;height:100px;overflow: hidden;position: absolute;top:0;left:0;z-index:1;background-color: rgba(0,0,0,0.8);transition:width .6s ease}", ".f_app_screen_wrap .f_app_cont{width:100%;height:100px;background-image:url(" + r + "1x.png?v=1.0.1); background-image:-webkit-image-set(url(" + r + "1x.png?v=1.0.1) 1x, url(" + r + "2x.png?v=1.0.1) 2x); background-repeat:no-repeat; background-position:50% 0; background-size:1000px 100px}", ".f_app_screen_wrap .f_app{width:1000px;margin:0 auto;height:100px;position:relative}", ".f_app_screen_wrap .f_app_cont div.f_app_close{position: absolute; cursor: pointer; width: 40px; height: 40px; right: 0px;top: 4px;}", ".f_app_screen_wrap .f_app_cont a{position:absolute;width: 960px; height: 100px; left:0;}", ".f_app_full_screen_wrap{width:100%;}", ".f_app_full_screen_wrap .f_app_btn{left:-105px;}", ".f_app_full_screen_wrap .f_app_screen{width:100%;}"].join(""), i = ['<div class="f_app_screen_wrap">', '<a href="' + t + '" target="_blank" class="f_app_btn" data-sudaclick="sf_tsapp_footbarshow_p"></a>', '<div class="f_app_screen">', '<div class="f_app_cont">', '<div class="f_app">', '<a href="' + t + '" target="_blank" data-sudaclick="sf_tsapp_footer_p"></a>', '<div class="f_app_close" title="点击收起" data-sudaclick="sf_tsapp_footbarclose_p"></div>', "</div>", "</div>", "</div>", "</div>"].join("");
        new ((e = function() {
            this.num = 0,
            this.status = "close",
            this.timeout = null,
            this.loadStyle(n),
            this.loadHtml(i),
            this.initEvent()
        }
        ).prototype = {
            cookie: {
                set: function(e, t, r) {
                    var n = new Date;
                    r = r || 30;
                    var i = (r = new Date(n.getTime() + 24 * r * 3600 * 1e3)).toGMTString();
                    document.cookie = e + "=" + t + ";expires=" + i + ";domain=" + location.hostname
                },
                get: function(e) {
                    var t = document.cookie
                      , r = t.indexOf(e + "=")
                      , n = r + e.length + 1
                      , i = t.indexOf(";", n);
                    return -1 == r ? null : -1 == i ? t.substr(n) : t.slice(n, i)
                }
            },
            loadStyle: function(e) {
                var t = document.createElement("style");
                t.type = "text/css",
                t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
                document.getElementsByTagName("head")[0].appendChild(t)
            },
            loadHtml: function(e) {
                this.dom = $(e).appendTo($("body"))
            },
            openScreen: function() {
                this.dom.addClass("f_app_full_screen_wrap"),
                this.status = "open",
                this.timeout && clearTimeout(this.timeout)
            },
            closeScreen: function() {
                var e = this;
                this.dom.css("width", "100%"),
                this.dom.removeClass("f_app_full_screen_wrap"),
                this.status = "close",
                this.timeout && clearTimeout(this.timeout),
                setTimeout((function() {
                    e.dom.removeAttr("style")
                }
                ), 600)
            },
            initEvent: function() {
                var e = this;
                this.closeCookie = this.cookie.get("APPBARCLOSE"),
                e.dom.on("click", ".f_app_close", (function() {
                    e.cookie.set("APPBARCLOSE", 1),
                    e.closeScreen()
                }
                )),
                !e.closeCookie && $(window).on("scroll", (function() {
                    ($(window).scrollTop() || $(document).scrollTop() || $("body").scrollTop()) > 800 && e.num < 1 && (e.num++,
                    e.openScreen())
                }
                ))
            }
        },
        e)
    }
}
]);
