 // var r = t[$_CEEIO(1150)]()
 //                  , o = $_BEU()[$_CEEIO(1157)](fe[$_CEEIO(475)](t[$_CEEIO(307)]), t[$_CEEIO(1178)]())
 //                  , i = me[$_CEEHi(1141)](o)
 //                  , s = {
 //                    "\u0067\u0074": t[$_CEEIO(307)][$_CEEIO(343)],
 //                    "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065": t[$_CEEHi(307)][$_CEEIO(324)],
 //                    "\u006c\u0061\u006e\u0067": n[$_CEEIO(247)],
 //                    "\u0070\u0074": t[$_CEEHi(1099)],
 //                    "\u0063\u006c\u0069\u0065\u006e\u0074\u005f\u0074\u0079\u0070\u0065": t[$_CEEIO(1090)],
 //                    "\u0077": i + r
 //                };
//加密的关键代码
//  首先分析i的生成
 // i = me[$_CEEHi(1141)](o)
 // 得出入参为o，然后我们继续分析o的参数
 // 然后
 // o = $_BEU()[$_CEEIO(1157)](fe[$_CEEIO(475)](t[$_CEEIO(307)]), t[$_CEEIO(1178)]())
// $_BEU()[$_CEEIO(1157)]  为一个方法

 // fe[$_CEEIO(475)](t[$_CEEIO(307)])  参数1
// '{"gt":"019924a82c70bb123aae90d483087f94",' +
// '"challenge":"a0e797febc2b77b4131438eb53b50179",' +
// '"offline":false,' +
// '"new_captcha":true,' +
// '"product":"float",' +
// '"width":"300px",' +
// '"https":true,' +
// '"api_server":"apiv6.geetest.com",' +
// '"protocol":"https://",' +
// '"type":"fullpage",' +
// '"static_servers":["static.geetest.com/","static.geevisit.com/"],' +
// '"beeline":"/static/js/beeline.1.0.1.js",' +
// '"voice":"/static/js/voice.1.2.4.js",' +
// '"click":"/static/js/click.3.1.1.js",' +
// '"fullpage":"/static/js/fullpage.9.1.9-cyhomb.js",' +
// '"slide":"/static/js/slide.7.9.2.js",' +
// '"geetest":"/static/js/geetest.6.0.9.js",' +
// '"aspect_radio":{"slide":103,"click":128,' +
// '"voice":128,"beeline":50},"cc":8,' +
// '"ww":true,"' +
// 'i":"-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1"}'

 // 首先我们可以hookt[$_CEEIO(307)]这个值的生成来解决


 // var e = t[$_CEEIO(1046)][$_CEEHi(1092)]();

// "\u0024\u005f\u0042\u0049\u0041\u0056": function() {
//
//                 var n = this
//                   , r = n[$_CDHHp(93)]
//                   , o = [];
//                 return new ae(n[$_CDHHp(1089)]())[$_CDHIH(35)](function(e) {
//                     var $_CDICi = AFiup.$_CP
//                       , $_CDIBI = ['$_CDIFE'].concat($_CDICi)
//                       , $_CDIDO = $_CDIBI[1];
//                     $_CDIBI.shift();
//                     var $_CDIEG = $_CDIBI[0];
//                     var t = r[e];
//                     o[$_CDIDO(10)](n[$_CDICi(1049)](t) ? n[$_CDIDO(1051)] : t);
//                 }),
//                 o[$_CDHHp(538)]($_CDHHp(1034));
//             }
//         },




 // t[$_CEEIO(1178)]()  参数2
// e2dfce0d04d0dc77