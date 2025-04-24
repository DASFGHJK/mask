delete navigator
delete Navigator

window = globalThis
window.origin='https://www.xiaohongshu.com'
window.outerWidth=997
window.innerWidth=997
window.outerHeight=841
window.innerHeight=150
Object.defineProperty(window,Symbol.toStringTag,{
    value:"Window",
    writable:false,
    enumerable:false,
    configurable:true
})
window.Object.toString=function(){
    "function Object() { [native code] }"
}
window.Element=function(){}
heads={}
_head={
    0: heads,
    length: 1
}
setInterval=function(){}
setTimeout=function(){}
_webgl = watch({
        [Symbol.for('nodejs.util.inspect.custom')]: function() {
        return '[Webgl]';
    }
}, 'webgl1')
_canvas = watch({
    getContext: function (ele) {
        console.log("getContext====>", ele)
        if (ele == 'webgl') {
            return _webgl
        }
    },
    [Symbol.for('nodejs.util.inspect.custom')]: function() {
        return '[Canvas]';
    }
}, "canvas");

document = {
    createElement: function (ele) {
        console.log('createElement====>', ele)
        if (ele == "canvas") {
            return _canvas
        }
    },
    documentElement: function (ele) {
        console.log('documentElement====>', ele)
    },
    getElementsByTagName:function(ele){
        console.log("getElementsByTagName==>",ele)
        if  (ele=='head'){
            return _head
        }
    },
    cookie: 'abRequestId=6d9532b6-edac-5ade-be2a-b48a6e2ff3ae; xsecappid=xhs-pc-web; a1=195c1e3c6fb1a6ul0sv0hjy9nb8eutg6yebmhcn0m30000166702; webId=0cf10fc6f7f04f199f3dd3923caacc97; gid=yj2Sydqf28vyyj2SydqSKdSIiDy0K718Mh8xD86VvjIDY6q8d79kKx888yKKW8J88S80yYYJ; webBuild=4.62.3; loadts=1745226945075; websectiga=f3d8eaee8a8c63016320d94a1bd00562d516a5417bc43a032a80cbf70f07d5c0; sec_poison_id=8ebf78c1-a888-47fe-a941-3eb1a382917c; unread={%22ub%22:%2268010984000000001d02632d%22%2C%22ue%22:%226803ba99000000001d0192d0%22%2C%22uc%22:24}'
}

local_list={}
localStorage={
    getItem:function(key){
        return local_list[key]
    },
    getItem:function(key,value){
        local_list[key]=value
    }
}
function ProxyDocumentObjects(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const documentObj = proxyObjs[i];
        const keys = Object.keys(documentObj);
        keys.forEach(key => {
            const value = documentObj[key];
            if (value && typeof value === "object") {
                documentObj[key] = new Proxy(value, {
                    get(target, property, receiver) {
                        if (key === 'window' && property === 'Math') {
                            return target[property];
                        }
                        if (key === 'window' && property === 'Uint8Array') {
                            return target[property];
                        }
                           if (key === 'window' && property === 'encodeURI') {
                            return target[property];
                        }
                         if (key === 'window' && property === 'isNaN') {
                            return target[property];
                        }
                        const propValue = Reflect.get(target, property, receiver);
                        console.log("方法:", "get", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", propValue, "属性值类型:", `${typeof propValue}`);
                        return propValue;
                    },
                    set(target, property, newValue, receiver) {
                        if (key === 'window' && property === 'Math') {
                            return Reflect.set(target, property, newValue, receiver);
                        }
                        console.log("方法:", "set", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", newValue, "属性值类型:", `${typeof newValue}`);
                        return Reflect.set(target, property, newValue, receiver);
                    }
                });
            }
        });
    }
}


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

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    platform: 'MacIntel',
    webdriver:false,

}

const proxyObjs = [window, document, navigator,localStorage];
ProxyDocumentObjects(proxyObjs);