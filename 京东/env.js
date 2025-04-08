const buffer = require("buffer");

window = global

xproxyObjs = ['window', 'document', 'navigator','location','localStorage']
// xproxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'Object']
delete __dirname;
delete __filename;
delete Buffer;
delete process;
delete global;
// xproxyObjs =['Navigator']
function HTMLAllCollection(){}
window.HTMLAllCollection=HTMLAllCollection
function Window(){}
window.__proto__=Window.prototype
window.Window=Window
function HTMLElement() {
}
_script={
    type:{},
    parentNode:{
        removeChild:function(tag){
            console.log("parentNode removeItem",tag)
            return {}
        }
    }
}
_canvas={}
_head = {
    childElementCount:54
}
_all=watch({},"all_>>>>")
_all.__proto__ = HTMLAllCollection.prototype
typeof all
_documentElement={}
_body={}
HTMLDocument=function (){}
document = {
    all:_all,
    querySelector: function (tag) {
        console.log('querySelector创建的对象为', tag)
    },
    createElement: function (tag) {
        console.log('createElement创建的对象为', tag)
        if(tag=="canvas"){
            return watch(_canvas,'createElement _canvas===>')
        }
        if(tag="script"){
            return watch(_script,'createElement script===>')
        }
    },
    createEvent:function(tag){
        console.log("createEvent创建的对象为:::",tag)
    },
    getElementsByTagName:function(tag){
        console.log("getElementsByTagName创建的对象为:::",tag)
        if (tag=="head"){
            return watch([],"head=====>")
        }
    },
    documentElement:_documentElement,
    cookie:'shshshfpa=079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921; shshshfpx=079b4d0b-79b5-b184-af8d-591a65ecdd33-1737805921; __jdu=17378059210592100696984; areaId=18; ipLoc-djd=18-1511-0-0; TrackID=1xIoPJMW0vLeGxhIEGg0vCIZGbAzbu8jKoepY8RJL8sKjQx9z_ldjfo6JQ3qF-psRthkiRZwhf2hEZxa7PEOA01Z-8iW3MewM_Jmrmm1RhIy7uMcmNFZLAyQ-EEepf5vS; pinId=EBvisAj7p1BL-LCAzlqu0A; pin=jd_PbMshcpInGYg; unick=jd_4k1pj9u92cer1z; _tp=9buZBi8QM1oRUc6OfsBTOA%3D%3D; qrsc=3; unpl=JF8EAMpnNSttC0wAUEwHHRJHQ1QBWw5fSEQCbjQEU1wIQ1JRTlcdEBR7XlVdWRRKFR9ubxRUX1NPUw4aCisSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAh0QFkJcUFZeCEoTC2xnBFVaUExcDB4yGiIXe21kW18AShQGX2Y1VW0aHwgDHQUYExQGXVJcWwFKEwtsZwRQVVtLVQQcChwaGU5tVW5e; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_b6edf471f98d4bf2b00b060a97edd735|1741499770279; 3AB9D23F7A4B3CSS=jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMVPF42PGIAAAAACFGMGA4RSXV3DAX; PCSYCityID=CN_430000_430100_0; umc_count=1; xapieid=jdd037DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORAAAAAMVPF42PGIAAAAACFGMGA4RSXV3DAX; __jda=143920055.17378059210592100696984.1737805921.1741451851.1741499770.6; __jdc=143920055; rkv=1.0; shshshfpb=BApXS_blzevBAbeMbi_JfMB1EMG3eKmzpBnXBXg5r9xJ1Mt3riYG2; 3AB9D23F7A4B3C9B=7DQ4VQ6K6VTZY6Y7O5NXMGHJ2SE3KH2QMQF62BRORHNQHSXXQEKAP7PBAFNNEGQWJTVL3URC5NGUO6OALBBTCB6ORA',
    head:_head,
    body:_body,
    referrer:'https://www.jd.com/'
}
document.__proto__ = HTMLDocument.prototype

function Location(){}
location={
    "ancestorOrigins": {},
    "href": "https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&suggest=1.his.0.0&wq=%E6%89%8B%E6%9C%BA&stock=1&pvid=251a88c303e84ca7849a74f5924ac461&isList=0&page=3&s=56&click=0&log_id=1741500629738.7295",
    "origin": "https://search.jd.com",
    "protocol": "https:",
    "host": "search.jd.com",
    "hostname": "search.jd.com",
    "port": "",
    "pathname": "/Search",
    "search": "?keyword=%E6%89%8B%E6%9C%BA&suggest=1.his.0.0&wq=%E6%89%8B%E6%9C%BA&stock=1&pvid=251a88c303e84ca7849a74f5924ac461&isList=0&page=3&s=56&click=0&log_id=1741500629738.7295",
    "hash": ""
}
location.__proto__=Location.prototype

function Navigator() {
}

navigator = {
    appCodeName:"Mozilla",
    appName:"Netscape",
    appVersion:"5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    webdriver:false,
    plugins:{
        length:5
    },
    platform:"MacIntel",
    hardwareConcurrency:8,
}
navigator.__proto__ = Navigator.prototype
function Storage(){}
local = {
    WQ_dy1_vk:'{"5.1":{"73806":{"e":31536000,"v":"9gx3wdapiq0jjhh1","t":1741448790485},"f06cc":{"e":31536000,"v":"pigxgd9zwwhjph31","t":1741448791041}}}',
    WQ_dy1_tk_algo:'{"9gx3wdapiq0jjhh1":{"73806":{"v":"eyJ0ayI6InRrMDN3YjE2OTFjYjAxOG5Cem8wSFRrYUR4T0dXejhMV0E0eGloUjJZTHpnMGpHczM2QVduZmZxSXowcC1FdHN3OWdvVWU5REtaWDd3LXJvUHJzdHhhOGtqbzA2IiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdPM1REM3BIYWFFZDMnO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1741448790875}},"pigxgd9zwwhjph31":{"f06cc":{"v":"eyJ0ayI6InRrMDN3OTEyOTFiMTYxOG44UWh3UmtoWXExSGNXYlZLNjBOclk2YVN0QTlLRVNMVTlaV1Z2VGFHTDdYUXlaZU5IbVNlRXQtYzVWLWNWZU1VR1dkc0M4YzNGM0lDIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSc4bHBna1MwbjAxM0cnO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1741448791295}}}',
    WQ_gather_wgl1:'{"v":"910d2c3a5f6086227538dd7e65c6ecc2","t":1741500629344,"e":31536000}',
    WQ_gather_cv1:'{"v":"fa3fabf83a3dc96ca518dcdec635e8d9","t":1741500629344,"e":31536000}',

}
localStorage ={
    getItem:function(key){
        console.log("localStorage getItem数值为:::",key)
        console.log(local[key])
        return local[key]
    },
    setItem:function(k,v){
        local[k] = v
    },
    clear:function(){
        local = {}
    },
    removeItem:function(k){
        delete local[k]
    }
}
localStorage.__proto__=Storage.prototype

function getEnvs(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const handler = `{
      get: function(target, property, receiver) {
        console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
        return target[property];
      },
      set: function(target, property, value, receiver) {
        console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
        return Reflect.set(...arguments);
      }
    }`;
        eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
    }
}
function watch(obj, name){
    var console_log = console.log
    if (obj=='all')
        debugger
    return new Proxy(obj, {
        get(target, p, receiver){
			// 过滤没用的信息，不进行打印
            if (p === "Math" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array" || p.toString().indexOf("Symbol(Symbol.") != -1){
                let val = Reflect.get(...arguments);
                return val
            } else {
                let val = Reflect.get(...arguments);
                console_log(`取值:`,name, '.', p, ` =>`, val);
                return val
            }
        },
        set(target, p, value, receiver){
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
watch(navigator,"navigator=======>")
getEnvs(xproxyObjs)
