delete __dirname
delete __filename
delete global
delete process
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
window=globalThis

window.top=window
window=watch(window,'window---->')


Document =function(){}
Document.prototype=watch({
    body:[]
})


HTMLDocument=function(){}
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)  //设置原型链
document=new HTMLDocument()
document=watch(document,'document--------->')

Location=function(){}
location={
    "ancestorOrigins": {},
    "href": "https://qikan.cqvip.com/Qikan/Journal/JournalGuid?from=index",
    "origin": "https://qikan.cqvip.com",
    "protocol": "https:",
    "host": "qikan.cqvip.com",
    "hostname": "qikan.cqvip.com",
    "port": "",
    "pathname": "/Qikan/Journal/JournalGuid",
    "search": "?from=index",
    "hash": ""
}




setTimeout=function(){}
setInterval=function(){}   //设置时间


require('./Code123')

console.log(document.cookie)