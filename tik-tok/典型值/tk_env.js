// 删除本地特征
delete __dirname
delete __filenames
delete process

// 置空本地特征
exports = undefined
require = undefined
module = undefined

// window区域-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Window(){
    if (new.target) {
    throw new TypeError('Illegal constructor');
  } else {

    }
} //不能new
Window.__proto__=EventTarget
Window.prototype.PERSISTENT=1
Window.prototype.TEMPORARY=0

Object.defineProperty(Window.prototype, Symbol.toStringTag, {
    value: 'Window',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});


window = globalThis
window.addEventListener = function(ele){
    // debugger
    console.log('[native code] window addEventListener:::',ele)
}
window.requestAnimationFrame = function(ele){
    console.log('[native code] window requestAnimationFrame:::',ele)
}
window.Request = function(ele){
    console.log('[native code] window Request:::',ele)
}
window.Headers = function(ele){
    console.log('[native code] window Headers:::',ele)
}
window.setInterval = function(){}
window.setTimeout = function(){}

XMLHttpRequest=function XMLHttpRequest(ele){
    console.log('window XMLHttpRequest:::',ele)
    this.open = function(ele){
        // debugger
    }
    this.send = function(ele){
        // debugger
    }
    this.setRequestHeader = function(ele){
        // debugger
    }
}
XMLHttpRequest.prototype = {
    open: function(ele){
        // debugger
    },
    send: function(ele){
        // debugger
    },
    setRequestHeader: function(ele){
        // debugger
    },
}


window.outerWidth = 1536
window.outerHeight = 864

window.innerWidth = 538
window.innerHeight = 695

window.onwheelx  = {
    "_Ax": "0X21"
}


window.Audio = function(ele){
    debugger
    console.log('Audio:::',ele)
}
window.MutationObserver = function(ele){
    debugger
    console.log('MutationObserver:::',ele)
}

window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.64-fix.01",
    "bdmsVersion": "1.0.1.19-fix.01",
    "captchaVersion": "4.0.10"
}

window.PromiseRejectionEvent = function(ele){
    console.log('window PromiseRejectionEvent:::',ele)
}
window.dispatchEvent = function(ele){
    console.log('window dispatchEvent:::',ele)
}
window.HTMLFormElement = function(ele){
    console.log('window HTMLFormElement:::',ele)
}
window.CSSRuleList = function(ele){
    console.log('window CSSRuleList:::',ele)
}
window.CSSStyleDeclaration  = function(ele){
    console.log('window CSSStyleDeclaration:::',ele)
}

window.DOMRectList  = function(ele){
    console.log('window DOMRectList:::',ele)
}
window.DOMStringList  = function(ele){
    console.log('window DOMStringList:::',ele)
}
window.DOMTokenList  = function(ele){
    console.log('window DOMTokenList:::',ele)
}
window.DataTransferItemList  = function(ele){
    console.log('window DataTransferItemList:::',ele)
}
window.FileList  = function(ele){
    console.log('window FileList:::',ele)
}
window.HTMLSelectElement  = function(ele){
    console.log('window HTMLSelectElement:::',ele)
}
window.NamedNodeMap  = function(ele){
    console.log('window NamedNodeMap:::',ele)
}
window.TouchList  = function(ele){
    console.log('window TouchList:::',ele)
}
window.TextTrackList  = function(ele){
    console.log('window TextTrackList:::',ele)
}
window.TextTrackCueList  = function(ele){
    console.log('window TextTrackCueList:::',ele)
}
window.StyleSheetList  = function(ele){
    console.log('window StyleSheetList:::',ele)
}
window.SourceBufferList  = function(ele){
    console.log('window SourceBufferList:::',ele)
}
window.SVGTransformList  = function(ele){
    console.log('window SVGTransformList:::',ele)
}
window.SVGStringList  = function(ele){
    console.log('window SVGStringList:::',ele)
}
window.SVGPointList  = function(ele){
    console.log('window SVGPointList:::',ele)
}
window.SVGNumberList  = function(ele){
    console.log('window SVGNumberList:::',ele)
}
window.SVGLengthList  = function(ele){
    console.log('window SVGLengthList:::',ele)
}
window.HTMLCollection = function(ele){
    console.log('window HTMLCollection:::',ele)
}
window.NodeList =  function(ele){
    console.log('window NodeList:::',ele)
}
window.MediaList = function(ele){
    console.log('window MediaList:::',ele)
}

 

window.__proto__ = Window.prototype;

delete global;
delete Buffer;







// location区域--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.Location = function Location(){};
location = {
    "ancestorOrigins": {},
    "href": "https://www.douyin.com/?recommend=1",
    "origin": "https://www.douyin.com",
    "protocol": "https:",
    "host": "www.douyin.com",
    "hostname": "www.douyin.com",
    "port": "",
    "pathname": "/",
    "search": "?recommend=1",
    "hash": ""
}
location.__proto__ = Location.prototype;
Object.defineProperty(Location.prototype, Symbol.toStringTag, {
    value: 'Location',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});





//document区域---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// body的构造函数
function HTMLBodyElement(){
    this.childElementCount = 22;
    this.tagName = 'BODY';
}

// head的构造函数
function HTMLHeadElement(){
    this.childElementCount = 45;
    this.tagName = 'HEAD';
}

// script的构造函数
function HTMLScriptElement(){
    this.type = "";
    this.src = "";
    this.tagName = 'SCRIPT';
}

// a的构造函数
function HTMLAnchorElement(){
    this.type = "";
    this.src = "";
    this.tagName = 'A';
}



// canvas 2d 的构造函数
function CanvasRenderingContext2D(){
    this.direction = "ltr";
    this.fillStyle = "#000000";
    this.filter = "none";
    this.font = "10px sans-serif";
    this.fontKerning = "auto";
    this.fontStretch = "normal";
    this.fontVariantCaps = "normal";
    this.globalAlpha = 1;
    this.globalCompositeOperation = "source-over";
    this.imageSmoothingEnabled = true;
    this.imageSmoothingQuality = "low";
    this.letterSpacing = "0px";
    this.lineCap = "butt";
    this.lineDashOffset = 0;
    this.lineJoin = "miter";
    this.lineWidth = 1;
    this.miterLimit = 10;
    this.shadowBlur = 0;
    this.shadowColor = "rgba(0; 0; 0; 0)";
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
    this.strokeStyle = "#000000";
    this.textAlign = "start";
    this.textBaseline = "alphabetic";
    this.textRendering = "auto";
    this.wordSpacing = "0px";
    this.fillRect = function(ele){
        console.log('CanvasRenderingContext2D fillRect:::',ele)
    };
    this.arc = function(ele){
        console.log('CanvasRenderingContext2D arc:::',ele)
    };
    this.stroke = function(ele){
        console.log('CanvasRenderingContext2D stroke:::',ele)
    };
    this.fillText = function(ele){
        console.log('CanvasRenderingContext2D fillText:::',ele)
    };
}

// canvas的构造函数
function HTMLCanvasElement(){
    this.getContext = function(ele){
        console.log('canvas getContext:::',ele)
        if (ele == '2d'){
            return new CanvasRenderingContext2D()
        }
    };
    this.toDataURL = function(ele){
        console.log('canvas toDataURL:::',ele)
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=="
    };
    this.getAttributeNames = function(ele){
        console.log('canvas getAttributeNames:::',ele)
    };
    this.width = 300;
    this.height = 150;
    this.style = {};
}

// div的构造函数
function HTMLDivElement(){
    this.type = "";
    this.src = "";
    this.tagName = 'DIV';
}


// Node的构造函数
function EventTarget() {

}
// Document的构造函数
function Node(){

}

// HTMLDocument的构造函数
function Document(){

}


// all实现
window.HTMLAllCollection = function HTMLAllCollection() {
    this.length = 70;
}


span = {
    classList:{
        length: 0,
        value: "",
    }
}

canvas = new HTMLCanvasElement()

// document的构造函数
function HTMLDocument(){
    this.URL = 'https://www.douyin.com/?recommend=1';
    this.documentURI = 'https://www.douyin.com/?recommend=1';
    this.compatMode = "CSS1Compat";
    this.characterSet = "UTF-8";
    this.charset = "UTF-8";
    this.inputEncoding = "UTF-8";
    this.contentType = "text/html";
    this.cookie = '_ga_LWWPCY99PB=GS1.1.1740642424.1.1.1740643911.0.0.595329898; tiktok_webapp_theme=light; delay_guest_mode_vid=5; tiktok_webapp_theme_source=system; passport_csrf_token=69770a55a19d86d6d9945844d89731d3; passport_csrf_token_default=69770a55a19d86d6d9945844d89731d3; s_v_web_id=verify_m8jrj53w_tVQBYr0S_skvm_4lLG_BJrC_QUXFWlWAA0UT; perf_feed_cache={%22expireTimestamp%22:1742792400000%2C%22itemIds%22:[%227461484254300474630%22%2C%227462117222429936904%22%2C%227476641335814950151%22]}; msToken=wE2iPbw6Cem6UuciiRYzhbifS6GZIC5COYmcGsIYKpRG_ePLRVw4TxRp_nd0n09aIknRl5PpOF2Oj3n5eaDJzqhCbhxzLJJt7_GYUhgI4_ukhmC_xDs61W4gWAynaOFdgq0lE0N9-Y177mwWxp5QQgRJDA==; msToken=2kt14PJbSR9PnKwPlIJEByoyEk34qXu5wqEFr64SJq0SRIuE-983elwi85E_Abbs21XF9RkLge2aEaZVTzV8dOiwyfFVB1I6i26xq4p5jsaqcGb0IvKoM8LXtnipumqGaRbyt-4zbmtnuSs5QF5Xl36rEw==';
    this.visibilityState = "visible";
    this.webkitVisibilityState = "visible";
    this.referrer = 'https://www.douyin.com/';
    this.fullscreenEnabled = true;
    this.webkitFullscreenEnabled = true;
    this.pictureInPictureEnabled = true;
    this.nodeType = 9;
    this.body = new HTMLBodyElement();
    this.head = new HTMLHeadElement();
    this.all = {};
    this.location = location;
    this.addEventListener = window.addEventListener;
    this.readyState = 'complete',
    this.createElement = function(ele){
        console.log('[native code] document createElement:::',ele)
        if (ele == 'script'){
            return new HTMLScriptElement()
        }
        if (ele == 'canvas'){
            return canvas
        }
        if (ele == 'div'){
            return new HTMLDivElement()
        }
        if (ele == 'span'){
            return span
        }
    };
    this.dispatchEvent = function(ele){
        console.log('[native code] document dispatchEvent:::',ele)
        return true
    };
    this.removeEventListener = function(ele){
        console.log('[native code] document removeEventListener:::',ele)
    };
    this.querySelector = function(ele){
        console.log('[native code] document querySelector:::',ele)
    };
    this.getElementsByTagName = function(ele){
        console.log('[native code] document getElementsByTagName:::',ele)
        if (ele == 'head'){
            return {'0': new HTMLHeadElement()};
        }        
    };
    this.createEvent = function(ele){
        console.log('[native code] document createEvent:::',ele)
    };
}

Object.defineProperty(HTMLDocument.prototype, Symbol.toStringTag, {
    value: 'HTMLDocument',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});


// 设置原型链
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
Object.setPrototypeOf(Document.prototype, Node.prototype);
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);

// 修正构造函数的原型链
Object.setPrototypeOf(Node, EventTarget);
Object.setPrototypeOf(Document, Node);
Object.setPrototypeOf(HTMLDocument, Document);

document = new HTMLDocument()



HTMLAllCollection.prototype.constructor = HTMLAllCollection; // 设置 constructor 为 HTMLAllCollection
document.all.__proto__ = HTMLAllCollection
//设置 document.all 的原型为 HTMLAllCollection 的原型
Object.setPrototypeOf(document.all, HTMLAllCollection.prototype);



// Element区域

function Element(){
    
}

// 修正构造函数的原型链
Object.setPrototypeOf(Element, Node);


// navigator区域-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// languages实现
window.MimeTypeArray = function MimeTypeArray(_this){
    this["enabledPlugin"] = _this
}
function Plugin(){
}
window.Plugin = new Proxy(Plugin, {
    construct: function(){
        let ob = {}
        Object.defineProperty(ob, "0", {
            get: function(){
                return new MimeTypeArray(this)
            }
        })
        Object.defineProperty(ob, "1", {
            get: function(){
                return new MimeTypeArray(this)
            }
        })
        return ob
    }
})
window.PluginArray = function PluginArray(){
    this["0"] = new Plugin();
    this["1"] = new Plugin();
    this["2"] = new Plugin();
    this["3"] = new Plugin();
    this["4"] = new Plugin();
    this.length = 5;
}

_pemrissions = {
    "microphone": "granted"
}
_storage = {
    estimate:function(ele){
        console.log('_storage estimate:::',ele)
        return new Promise((resolve) => {
            // 模拟一些存储数据
            const estimatedData = {
                usage: 1024 * 1024 * 50,  // 假设已用空间 50 MB
                quota: 1024 * 1024 * 100  // 假设总空间 100 MB
            };
    
            // 模拟异步操作，假设需要一些时间来获取存储信息
            setTimeout(() => {
                resolve(estimatedData);  // 返回模拟数据
            }, 1000);  // 模拟1秒的延迟
        });
    }
}

_connection = {
    downlink: 2.25,
    effectiveType: "4g",
    onchange:function(ele){
        console.log('_connection onchange:::',ele)
    },
    rtt: 150,
    saveData: false,
}

_userAgentData = {
    "brands": [
        {
            "brand": "Not A(Brand",
            "version": "8"
        },
        {
            "brand": "Chromium",
            "version": "132"
        },
        {
            "brand": "Google Chrome",
            "version": "132"
        }
    ],
    "mobile": false,
    "platform": "Windows"
}

function Navigator(){
    this.appName = "Netscape";
    this.appVersion = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36";
    this.platform = "Win32";
    this.product = "Gecko";
    this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36";
    this.language = "zh-CN";
    this.languages = [
        "zh-CN",
        "en",
        "en-GB",
        "en-US"
    ];
    this.plugins = new PluginArray();
    this.webdriver = false;
    this.hardwareConcurrency = 8;
    this.pemrissions = _pemrissions;
    this.storage = _storage;
    this.connection = _connection;
    this.userAgentData = _userAgentData;
}

Object.defineProperty(Navigator.prototype,Symbol.toStringTag, {
    value: 'Navigator',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});

navigator = new Navigator()














// localStorage区域---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function Storage(){}

localStorage = {}

localStorage.clear = function (ele){console.log("[native code] localStorage clear:::",ele)};
localStorage.getItem = function (ele){
    console.log("[native code] localStorage getItem:::",ele)
    if (ele == 'xmst'){
        return 'qYaxPoc8YsG8sX1faRMjw9oPeHU8Sp7c-3ygLUFXmY8rXRIu6aLzwU2m4TrfLZ72o8JfdGn6CDh0Z6OuMfSswGraiHt-OxIFujNuCPi5Pjc6RQu_LK-Hp3zF74iMZIFMK6J2_gUY_aEHNMBD1hvDLkZDTA=='
    }
    return localStorage[ele]
};
localStorage.key = function (ele){console.log("[native code] localStorage key:::",ele)};
localStorage.removeItem = function (ele){
    console.log("[native code] localStorage removeItem:::",ele)
    delete localStorage[ele]
};
localStorage.setItem = function (key, value){
    console.log("[native code] localStorage setItem:::",key,value)
    localStorage[key] = value;
};

localStorage.__proto__ = Storage.prototype



sessionStorage = {
    "visit_browser_tab_tag": "\"1\"",
    "__tea_session_id_6383": "{\"sessionId\":\"5f293c1a-66ba-4151-abdb-eaef18d4d405\",\"timestamp\":1739348520216}",
    "__tea_session_id_496513": "{\"sessionId\":\"c0198449-88d9-4522-9bdc-32f9118db25c\",\"timestamp\":1739348511784}",
    "xgplayer-webgl-hard-supported": "1",
    "__ac_ns": "1739336412313",
    "MANUAL_SWITCH": "{\"clarityReal\":[\"normal_540_0\",\"normal_720_0\",\"low_720_0\",\"low_540_0\",\"lower_540_0\",\"adapt_low_540_0\",\"adapt_lowest_720_1\",\"adapt_540_1\",\"adapt_lower_540_1\",\"adapt_lowest_720_1\",\"adapt_540_1\",\"adapt_lower_540_1\"]}",
    "__tea_session_id_1300": "{\"sessionId\":\"e94eb429-5334-4faf-80f7-34313140a6e0\",\"timestamp\":1739348511771}",
    "__tea_session_id_7497": "{\"sessionId\":\"da0dfedc-14b7-4a29-a880-e2be82b7b805\",\"timestamp\":1739348511784}",
    "ModalRefresh": "1",
    "BackURl": "\"/root/search/%E5%93%AA%E5%90%921\"",
    "__tea_session_id_2018": "{\"sessionId\":\"a6a623b2-44df-4d7c-99e1-08da2d0942a3\",\"timestamp\":1739348511784}"
}
sessionStorage.clear = function (ele){console.log("[native code] sessionStorage clear:::",ele)};
sessionStorage.getItem = function (ele){
    console.log("[native code] sessionStorage getItem:::",ele)
    return sessionStorage[ele]
};
sessionStorage.key = function (ele){console.log("[native code] sessionStorage key:::",ele)};
sessionStorage.removeItem = function (ele){
    console.log("[native code] sessionStorage removeItem:::",ele)
    delete sessionStorage[ele]
};
sessionStorage.setItem = function (key, value){
    console.log("[native code] sessionStorage setItem:::",key,value)
    sessionStorage[key] = value;
};
sessionStorage.__proto__ = Storage.prototype



// screen区域---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Screen(){
    this.availWidth = 1536;
    this.availHeight = 864;
    this.width = 1536;
    this.height = 864;
    this.colorDepth = 24;
    this.pixelDepth = 24;
}

Object.defineProperty(Screen.prototype,Symbol.toStringTag, {
    value: 'Screen',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});

screen = new Screen()





// history区域------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function History(){
    this.length = 2;
    this.scrollRestoration = "auto";
    this.state = null;
}
Object.defineProperty(History.prototype,Symbol.toStringTag, {
    value: 'History',
    writable: false, // 可选，设置为不可写
    enumerable: false, // 可选，设置为不可枚举
    configurable: true, // 可选，设置为可配置
});

history = new History()





// getOwnPropertyDescriptor方法------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 重写 Object.getOwnPropertyDescriptor 方法
getOwnPropertyDescriptor_=Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor = function (obj, prop) {
    // console.log('[native code] Object getOwnPropertyDescriptor:::','对象--->',obj,'属性--->',prop)
    if (obj === navigator && prop === 'userAgent') {
        return undefined
    }
    if (obj === navigator && prop === 'webdriver'){
        return undefined
    }
    return getOwnPropertyDescriptor_(obj, prop)
}



function ProxyDocumentObjects(proxyObjs) {
    // 动态生成要忽略的全局属性列表
    const globalProperties = Object.getOwnPropertyNames(window);
    const ignoredProperties = new Set(globalProperties);
    for (let i = 0; i < proxyObjs.length; i++) {
        const documentObj = proxyObjs[i];
        const keys = Object.keys(documentObj);
        keys.forEach(key => {
            const value = documentObj[key];
            if (value && typeof value === "object") {
                documentObj[key] = new Proxy(value, {
                    get(target, property, receiver) {
                        const propValue = Reflect.get(target, property, receiver);
                        if (!ignoredProperties.has(property)) {
                        console.log("方法:", "get", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", propValue, "属性值类型:", `${typeof propValue}`);
                        }
                        return propValue;
                    },
                    set(target, property, newValue, receiver) {
                        if (!ignoredProperties.has(property)) {
                            console.log("方法:", "set", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", newValue, "属性值类型:", `${typeof newValue}`);
                        }
                        return Reflect.set(target, property, newValue, receiver);
                    }
                });
            }
        });
    }
}
// // 先挂载代理到顶层对象
// const proxyObjs = [window,navigator,location,screen,document,history,localStorage,sessionStorage];
// ProxyDocumentObjects(proxyObjs);

frames = parent = globalThis = self = top = window
window.clientInformation = navigator
document.location = location