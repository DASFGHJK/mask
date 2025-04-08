// dInfo，，data五个参数。
_4jA = {
    "sdkv": "3.0.1",
    "busurl": "https://api.anjuke.com/web/general/captchaNew.html",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "clienttype": "1"
}   //可以写死
sessionid = "78b90f77009b47719626f0a29da0d02c"
const crypto = require('Crypto-js')

function stringify(_smO) {
    for (var _BzS = _smO["words"], _TBC = _smO["sigBytes"], _rxb = this["_map"], _91B = (_smO["clamp"](),
        []), _tHY = 0; _tHY < _TBC; _tHY += 3)
        for (var _sje = (_BzS[_tHY >>> 2] >>> 24 - _tHY % 4 * 8 & 255) << 16 | (_BzS[_tHY + 1 >>> 2] >>> 24 - (_tHY + 1) % 4 * 8 & 255) << 8 | _BzS[_tHY + 2 >>> 2] >>> 24 - (_tHY + 2) % 4 * 8 & 255, _ubw = 0; _ubw < 4 && _tHY + .75 * _ubw < _TBC; _ubw++)
            _91B["push"](_rxb["charAt"](_sje >>> 6 * (3 - _ubw) & 63));
    var _Je4 = _rxb["charAt"](64);
        for (; _91B["length"] % 4;)
            _91B["push"](_Je4);
        return _91B["join"]("");

}



function AES(_cRV, _2undefinedp) {

    _2undefinedp = _2undefinedp["split"]("")["reduce"](function (_PUi, _JrX, _JP9) {
        return _JP9 % 2 == 0 ? _PUi + "" : _PUi + _JrX;
    }, ""),
        _2undefinedp = window["parse"](_2undefinedp),
        _cRV = JSON["stringify"](_cRV),
        _cRV = crypto.AES.encrypt(_cRV, _2undefinedp, {
            iv: _2undefinedp,
            mode: crypto.mode.CBC,
            padding: crypto.pad.Pkcs7
        }),
        _cRV["ciphertext"] = '41340dabd0ac104a3c277a8a4928d54cd22f075bffae6c8598de5eb9663bdb3db6e18ecf03b9d448bc0949101509219bc6f4c31d626281a9322209886c608388524d05ec7790ab193582bdb193d79a0fee4f3adfa9b0f82cf9acfff3bfd789fb75ab3025433d4fcebaabfea121e56fb35fd3589b96d33083f6bff1e049f8d371d662d53b68ef50342e17cb1e8f19675c339dc608c23b5b724405c04500fa2dbfd82b846233f9f2b3d4b6b98e4cdb5cf72a3851dbed6a9099420397eb55b2ba3971ee874b66e3e9dcd9c93b55ec110804978c211dd2c9e7d3dab4cd33ee734479568f26f9f30810ad0a90c606792a5bce'
    _2undefinedp = stringify(_cRV["ciphertext"]);
    return (0,
        encodeURIComponent)(_2undefinedp);
}

data= AES( _4jA, sessionid)