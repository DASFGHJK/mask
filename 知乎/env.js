// 删除本地特征
delete __dirname
delete __filenames
delete process
delete Navigator
delete navigator
window=globalThis;
Window=function(){}
window.Window=Window
window.constructor=Window
window.name=''
navigator = {
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    webdriver:false
}

location = {
    "ancestorOrigins": {},
    "href": "https://www.zhihu.com/",
    "origin": "https://www.zhihu.com",
    "protocol": "https:",
    "host": "www.zhihu.com",
    "hostname": "www.zhihu.com",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}


// ProxyDocumentObjects(proxyObjs);
getOwnPropertyDescriptor_=Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor=function (obj,prop){
    // debugger;
    if (obj===navigator && prop ==="userAgent"){
            return undefined
    }
    if (obj===navigator && prop ==="webdriver"){
            return undefined
    }
    return getOwnPropertyDescriptor_(obj,prop)

}



delete global;
delete Buffer