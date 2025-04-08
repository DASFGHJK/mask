const Cryptojs=require('crypto-js')

function guid() {
    function e() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
    }

    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
}

_tk=guid()
cookies_NCK="8SDLPQ6HSIPTHAWH0N6WIIZXQC9D5FUC"

const decoded = decodeURIComponent(t);
console.log(decoded)
function generateSearchIds(cookie, t_data) {
    const _tk = guid(); // 保持原有的GUID生成逻辑
    const timestamp = new Date().getTime();

    // 生成searchWordId
    const searchWordId = Cryptojs.MD5(
        t_data +
        _tk +
        timestamp +
        cookie
    ).toString();

    // 生成searchId
    const searchId = Cryptojs.MD5(
        searchWordId +
        _tk +
        timestamp +
        cookie
    ).toString();

    return { searchWordId, searchId };
}


console.log(result.searchWordId);
console.log(result.searchId);
