delete global
delete setImmediate
__process = process
delete process
delete clearImmediate
delete Buffer;
console.log=function(tag){}
window = globalThis
window.outerHeight = 841
window.chrome = {
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}
function Element() {}
window.Element = Element
window.addEventListener = function(tag) {
    console.log(":addEventListener--->", tag)
}
window.pinbridge = {}
window.setInterval = function() {}
window.setTimeout = function() {}
window.Plugin = {}
_plugins = {
    length: 5
}
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    platform: "MacIntel",
    webdriver: false,
    language: "zh-CN",
    languages: ['zh-CN', 'zh'],
    vendor: "Google Inc.",
    plugins: _plugins
}
_documentElement = {
    scrollTop: 5685
}
document = {
    addEventListener: window.addEventListener,
    documentElement: _documentElement,
    cookie: 'api_uid=CkvQmmf7RfyPHACWDiYXAg==; _nano_fp=XpmYn0dxX0Ebl0djXC_HIVaXOSKrSy~apVQKPSnx; webp=1; njrpl=moluNh7VKQZebJmBud4mNQAXnJ1MPsxB; dilx=S4hMSWEwa0ntW5hyirt0U; pdd_vds=gaYcCxfewTubeluNsmBBwddlTTDBcbsDewCDDslLdxueCTlNLdxNduLBcwNs'
}
function History() {
    this.length = 3,
    this.scrollRestoration = "auto",
    this.state = null
    this.back = function() {}
}
history = new History()
function Storage() {
    this.clear = function(ele) {
        console.log("[native code] localStorage clear:::", ele)
    };
    this.getItem = function(ele) {
        console.log("[native code] localStorage getItem:::", ele)
        return this[ele]
    };
    this.key = function(ele) {
        console.log("[native code] localStorage key:::", ele)
    };
    this.removeItem = function(ele) {
        console.log("[native code] localStorage removeItem:::", ele)
        delete this[ele]
    };
    this.setItem = function(key, value) {
        console.log("[native code] localStorage setItem:::", key, value)
        this[key] = value;
    };
}

localStorage = new Storage()

function Screen() {
    this.availHeight = 847;
    this.availLeft = 0;
    this.availTop = 38;
    this.availWidth = 1470;
    this.colorDepth = 30;
    this.height = 956;
    this.isExtended = false;
    this.onchange = null;
    this.orientation = {
        angle: 0,
        type: 'landscape-primary',
        onchange: null
    };
    this.pixelDepth = 30;
    this.width = 1470;
}
screen = new Screen()
location = {
    "ancestorOrigins": {},
    "href": "https://mobile.yangkeduo.com/?lastTabItemID=0",
    "origin": "https://mobile.yangkeduo.com",
    "protocol": "https:",
    "host": "mobile.yangkeduo.com",
    "hostname": "mobile.yangkeduo.com",
    "port": "",
    "pathname": "/",
    "search": "?lastTabItemID=0",
    "hash": ""
}

function watch(obj, name) {
    var console_log = console.log
    return new Proxy(obj, {
        get(target, p, receiver) {
            debugger;
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

xproxyObjs = ['window', 'navigator', 'document', 'history', 'screen', 'location', 'localStorage', '_documentElement']
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
self = window
require('./加密实现')
var res;
async function get_anti() {
    window.xuxu(80750);
    const n = ddd.getInstance(); // 使用 const 声明变量
    try {
        const res = await n.getRiskControlInfoAsync(); // 使用 const 声明变量
        return res; // 直接返回结果
    } catch (error) {
        console.error(error);
        return null; // 返回 null 或其他适当的值表示失败
    }
}

async function main() {
    try {
        const res = await get_anti();
        // console.log(res); // 输出结果
        return res;
    } catch (error) {
        console.error(error);
        return null; // 返回 null 或其他适当的值表示失败
    }
}

(async () => {
    const xx = await main();
    console.info(xx); // 输出 main 函数的返回值
    __process.exit();
})();


