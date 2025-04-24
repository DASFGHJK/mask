delete navigator
delete Navigator
window=globalThis
window.addEventListener=function(){}
_head=watch({},'head')
_div=watch({},'createElement.div')
_plugins0=watch({
    name:'PDF Viewer'
},'_plugins0')
_plugins1=watch({
    name:'Chrome PDF Viewer'
},'_plugins1')
_plugins2=watch({
    name:'Chromium PDF Viewer'
},'_plugins2')
_plugins3=watch({
    name:'Microsoft Edge PDF Viewer'
},'_plugins3')
_plugins4=watch({
    name:'WebKit built-in PDF'
},'_plugins4')
_plugins=watch({
    length:5,
    0:_plugins0,
    1:_plugins1,
    2:_plugins2,
    3:_plugins3,
    4:_plugins4
},'plugins')
document={
    head:_head,
    getElementsByTagName:function (ele){
        console.log('document.getElementsByTagName',ele)
    },
    createElement:function (ele){
        console.log('document.createElement',ele)
        if (ele=='div'){
            return _div
        }
    },
    documentElement:function(ele){
          console.log('document.documentElement',ele)
    },
    addEventListener:window.addEventListener,
    cookie:'',
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
    javaEnabled:function(){
        return false
    },
    plugins:_plugins
}
xproxyObjs = ['window','document','navigator']
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

require('./demo')
function get_data(){
    return window.xuxu()
}
console.log(get_data())
console.log("A0N-tNOfL6-aDePb1RnqiDnC1AzouNPqEUkaHnUhno4Z9m3y_YhnSiEcq2KG".length)