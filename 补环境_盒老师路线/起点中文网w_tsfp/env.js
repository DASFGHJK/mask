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
// location = {
//     "ancestorOrigins": {},
//     "href": "https://www.qidian.com/chapter/1041961702/808576999/",
//     "origin": "https://www.qidian.com",
//     "protocol": "https:",
//     "host": "www.qidian.com",
//     "hostname": "www.qidian.com",
//     "port": "",
//     "pathname": "/chapter/1041961702/808576999/",
//     "search": "",
//     "hash": ""
// }
// _plugns={
//     length:0,
// }
// navigator = {
//     appCodeName:"Mozilla",
//     appName:"Netscape",
//     appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
//     language:"zh-CN",
//     cookieEnabled:true,
//     doNotTrack:null,
//     hardwareConcurrency:8,
//     languages:['zh-CN', 'en', 'en-GB', 'en-US'],
//     platform:"Win32",
//     product:"Gecko",
//     productSub:"20030107",
//     userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
//     vendor:"Google Inc.",
//     vendorSub:"",
//     webdriver:false,
//     plugins: watch(_plugns,"plugins=====>")
// }

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
// sess = {}
// sessionStorage = {
//     getItem: function (k) {
//         return sess[k]
//     },
//     setItem:function(k,v){
//         sess[k] = v
//     },
//     clear:function(){
//         sess = {}
//     },
//     removeItem:function(k){
//         delete sess[k]
//     }
// }
addEventListener = function () { }
window.open = function () { }
window.XMLHttpRequest = function () { }
xproxyObjs = ['window', 'localStorage','document','navigator']
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
getEnvs(xproxyObjs)