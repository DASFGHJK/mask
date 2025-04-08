delete navigator,
delete Navigator;
Object.defineProperty(globalThis,{
    [Symbol.toString()]:{
        value:"Window"
    }
})
window = globalThis;
delete global;
delete Buffer;
delete __dirname;
delete __filename;
function Location() {
    return {
        "ancestorOrigins": {},
        "href": "https://xueqiu.com/",
        "origin": "https://xueqiu.com",
        "protocol": "https:",
        "host": "xueqiu.com",
        "hostname": "xueqiu.com",
        "port": "",
        "pathname": "/",
        "search": "",
        "hash": ""
    }
}

_location = new Location()
_div={
    firstChild: '<a></a>>',
    innerHTML:''
}
document = {
    location: watch(_location, "document_location") ,
    createElement:function(ele){
        console.log("createElement::",arguments)
        if (ele=='div'){
            return watch(_div,"createElement::div")
        }
    }
}

navigator = {}
xproxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'Object']

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

getEnvs(xproxyObjs)

delete global;

