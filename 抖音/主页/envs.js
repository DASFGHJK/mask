delete navigator
delete Navigator

window = globalThis
window.requestAnimationFrame=function(ele){
    console.log("requestAnimationFrame创建的值为",ele)
}
window.XMLHttpRequest=function(ele){
    console.log("XMLHttpRequest的值为",ele)
}
document = {
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