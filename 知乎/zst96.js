

tr={
    "zse93": "101_3_3.0",      //版本
    "dc0": "AAASrNtCyBmPTsRUr9PZL3KQCJ59bn385Yk=|1735716028",    //具体为cookie中的d_c0参数

    //根据页面生成的zst81参数
    "xZst81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZK0Y0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTFTSByw2Bqwo8mrNmkJNBc_2XgGpqErxGLh3MQveK-gFmjveL6_L9OJSBrBcTVANKyho0C9F_1Gpm6UY1Y9L_ag3xgqOBZJN1ThNYHcHYggeLQhX0ubo9CDVsT9S93upfJgpmSrxLnqg8yhXBQbOOT9H_xGVLTUg1EUgMQgc8WJS_lJN9Cg_zoDpBOvc1MANO9BXC9g3sEgX9YvcfFvLO29wmtbLy3BOKBb3OICc1BqCC_CwLevNfQbS99DeVuDpCbUeCO9NOPwc0iJN99J3Ooio9kDNf29eGWgNL2wYs"
}
t3 = function(tt) {
            var te = new URL(tt,"https://www.zhihu.com");
            return "" + te.pathname + te.search
        }
//请求接口
tt="/api/v3/feed/topstory/recommend?action=down&ad_interval=-10&after_id=35&desktop=true&end_offset=36&page_number=7&session_token=7a63651542aa9b7d2a62bb74ac97417f"
var ta = tr.zse93
    , tu = tr.dc0
    , tc = tr.xZst81
    , tf = t3(tt)
    // console.log(tf)
    , td = ""
    , tp = [ta, tf, tu,false, tc].filter(Boolean).join("+");
tw = function(tt) {
        var te, tr, ti = "0123456789abcdef", ta = "";
        for (tr = 0; tr < tt.length; tr += 1)
            ta += ti.charAt((te = tt.charCodeAt(tr)) >>> 4 & 15) + ti.charAt(15 & te);
        return ta
    }
tE = function(tt) {
        return tw(tC(tt))
    }
console.log(tE(tp))
signature = (0, tJ(ti).encrypt)(tE(tp))
console.log(tp.length)