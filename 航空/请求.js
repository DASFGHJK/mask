window=global;
!(function(require, exports){
    var blackBox = '';
    function loadBlackBox(partner,appName) {
        window._fmOpt = {
            // partner: 'B2C_couponRiskControl_ loginInfo',
			// appName: 'APM_couponRiskControl',
            partner:partner,
            appName:appName,
            success: function(data) {
                blackBox = data || '';
            }
        };
        loadJs(
            "/B2C40/static/main/modules/common/fm.js"
        )
    }

    function loadJs(src, isSync) {
        var sc = document.createElement('script');
        sc.src = src;
        sc.async = sc.defer = !isSync;
        document.body.appendChild(sc);
    }
    exports.getToken = function(){
        return blackBox;
    }
    window.getbox=exports.getToken()
    exports.init = function(partner,appName){
        return loadBlackBox(partner,appName);
    }
});
console.log(window.getbox())