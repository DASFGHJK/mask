const jsdom = require('jsdom')
const {JSDOM} = jsdom    //创建虚拟的dom环境
const dom = new JSDOM(`  <!DOCTYPE html>
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>`)
delete global
delete __dirname
delete __filenames
delete process
delete Navigator
delete navigator
//引入tostring方法
set_toString = function (obj, s) {
    Object.defineProperties(obj, {
        [Symbol.toStringTag]: {
            value: s,
            configurable: true
        }
    })
}
window = dom.window
window.requestAnimationFrame = function () {
    return "function requestAnimationFrame() { [native code] }"
}
window.fetch = function (t, n) {
    var r = {
        onRequest: function (t, n) {
            return x.apply(window, [t, n]).then((function (t) {
                    return 200 === t.status && z(e.FETCH_RESPONSE, {
                        object: r,
                        fn: r.onResponse,
                        fnName: "onResponse"
                    }, (function (e) {
                            return {
                                _headers: function (e) {
                                    for (var t, n = e.headers.entries(), r = {}; (t = n.next()) && (t.value && (r[t.value[0]] = t.value[1]),
                                        !t.done);)
                                        ;
                                    return r
                                }(e),
                                response: e
                            }
                        }
                    )),
                        r.onResponse.apply(window, [t])
                }
            ))
        },
        onResponse: function (e) {
            return e
        }
    };
    return z(e.FETCH_REQUEST, {
        object: r,
        fn: r.onRequest,
        fnName: "onRequest"
    }, (function (t, n) {
            var r, o = "", i = "", a = n && n.body;
            te && t instanceof Request ? (o = t.url,
                i = t.method,
                r = t.headers.set.bind(t.headers)) : (o = t,
                    i = n && n.method ? n.method : "GET",
                    (n = n || {}).headers = n.headers || {},
                    r = ne && n.headers instanceof Headers ? n.headers.set.bind(n.headers) : Array.isArray(n.headers) ? function (e, t) {
                            var r = !1;
                            (null == n ? void 0 : n.headers).forEach((function (n) {
                                    n[0] === e && (n[1] = t,
                                        r = !0)
                                }
                            )),
                            r || (null == n ? void 0 : n.headers).push([e, t])
                        }
                        : function (e, t) {
                            var r = (null == n ? void 0 : n.headers)[e];
                            (null == n ? void 0 : n.headers)[e] = r ? "".concat(r, ", ").concat(t) : t
                        }
            );
            var c = {
                url: o,
                method: i,
                body: a,
                init: n,
                input: t,
                __secReqHeaders: {},
                addHeader: r
            };
            return c.addHeader = z(e.FETCH_ADDHEADER, {
                object: {},
                fn: r,
                fnName: "addHeader"
            }, (function (e, t) {
                    return t && e ? (void 0 === c.__secReqHeaders[e] ? c.__secReqHeaders[e] = t : c.__secReqHeaders[e] = "".concat(c.__secReqHeaders[e], ", ").concat(t),
                        {}) : {}
                }
            )),
                c
        }
    )),
        r.onRequest(t, n)
}
XMLHttpRequest = dom.window.XMLHttpRequest
window.onwheelx ={
    "_Ax": "0X21"
}
window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.55",
    "bdmsVersion": "1.0.1.7",
    "captchaVersion": "4.0.2"
}
_all={}
document = {
    createElement: function (tag) {
        console.log("createElement创建的对象为", tag)
        return "<span></span>"
    },
    documentElement: function (tag) {
        console.log("documentElement创建的类型为", tag)
    },
    createEvent: function (tag) {
        console.log("createEvent")
    },
    body:{},
    all: watch(_all,'docment.all===>'),
    referrer:"",
    cookie: '__ac_signature=_02B4Z6wo00f018TMgIwAAIDAljOgl19CapfE7IQAAJaXf7; ttcid=f05fc2b401524224b452da5e4930e84b13; local_city_cache=%E9%95%BF%E6%B2%99; _ga=GA1.1.171791888.1740442887; csrftoken=bf25ede5335003005c240cd135ba5f08; s_v_web_id=verify_m7jqrava_qa4IDEm9_vUAp_4AST_9OQg_fJtpz6CfzRta; passport_csrf_token=73c603fb34cd3f4d3c2cdad10ecfbc24; gfkadpd=24,6457; _ga_QEHZPBE5HH=GS1.1.1742543425.3.1.1742545242.0.0.0; tt_scid=SQ5DZWoKZRmrR9qa58ShXUztLiMhSX678VOTqbXVyOpIEZNS8ivs.OOLD6ekzPmS561c'
}
location = {
    "ancestorOrigins": {},
    "href": "https://www.toutiao.com/",
    "origin": "https://www.toutiao.com",
    "protocol": "https:",
    "host": "www.toutiao.com",
    "hostname": "www.toutiao.com",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}
navigator = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    platform: 'MacIntel',
    vendorSubs: {
        "ink": 1742545245074
    },
    appCodeName:"Mozilla",
    appName:'Netscape',
    appVersion:'5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    vendor:'Google Inc.'

}
history = {}
screen = {}

function watch(obj, name) {
    var console_log = console.log
    return new Proxy(obj, {
        get(target, p, receiver) {
            // 过滤没用的信息，不进行打印
            if (p === "Math" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array" || p.toString().indexOf("Symbol(Symbol.") != -1) {
                let val = Reflect.get(...arguments);
                return val
            } else {
                let val = Reflect.get(...arguments);
                console_log(`取值:`, name, '.', p, ` =>`, val);
                return val
            }
        },
        set(target, p, value, receiver) {
            let val = Reflect.get(...arguments);
            console_log(`设置值:${name}.${p}, ${val} => ${value}`);
            return Reflect.set(...arguments)
        },
        // has(target,key){
        //     console_log(`in检测:${key} in ${target}`)
        //     return key in target
        // }
    })
}

window = watch(window, "window")
document = watch(document, "document")
location = watch(location, "location")
navigator = watch(navigator, "navigator")
history = watch(history, "history")
screen = watch(screen, "screen")


require('./头条')
