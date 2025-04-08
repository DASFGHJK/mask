delete navigator;
delete Navigator;
__process = process;

Object.defineProperties(globalThis, {
    [Symbol.toStringTag]: {
        value: "Window"
    }
})
Function.prototype.constructor.back = Function.prototype.constructor;
Function.prototype.constructor = function() {
    if (arguments && typeof arguments[0] === 'string') {
        if ("debugger" === arguments[0]) {
            return;
        }
    }
    return Function.prototype.constructor.back.apply(this, arguments);
};

window = globalThis;
delete global;
delete Buffer;
delete process;

document = {
    cookie:''
}
function watch(obj, name){
    var console_log = console.log
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
location = {
    "ancestorOrigins": {},
    "href": "https://www.qidian.com/chapter/1041961702/808576999/",
    "origin": "https://www.qidian.com",
    "protocol": "https:",
    "host": "www.qidian.com",
    "hostname": "www.qidian.com",
    "port": "",
    "pathname": "/chapter/1041961702/808576999/",
    "search": "",
    "hash": ""
}
_plugns={
    length:0,
}
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
    plugins: watch(_plugns,"plugins=====>")
}

local = {}
localStorage ={
    getItem: function (k) {
        return local[k]
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
sess = {}
sessionStorage = {
    getItem: function (k) {
        return sess[k]
    },
    setItem:function(k,v){
        sess[k] = v
    },
    clear:function(){
        sess = {}
    },
    removeItem:function(k){
        delete sess[k]
    }
}
addEventListener = function () { }
window.open = function () { }
window.XMLHttpRequest = function () { }
require('./起点读书w_ts.js');

(function () {
var cookieTemp = '';
Object.defineProperty(document, 'cookie', {
    set: function (val) {
        if (val.indexOf('w_tsfp') != -1) {
            console.log('w_tsfp:',val.split('=')[1].split(';')[0]);
            __process.exit(0);
    }
    cookieTemp = val;
    return val;
    },
    get: function () {
    return cookieTemp;
    },
});
})();

function get_cookie(){
    console.log("coookie值为")
    return document.cookie
}

console.log(get_cookie())
