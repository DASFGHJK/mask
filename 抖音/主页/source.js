require('./envs')
require('./bdms')
const ttt={}

ttt.bdmsInvokeList=[
    {
        "args": [
            "POST",
            "/aweme/v1/web/profile/record/?device_platform=webapp&aid=6383&channel=channel_pc_web&publish_video_strategy_type=2&pc_client_type=1&pc_libra_divert=Mac&update_version_code=170400&support_h265=1&support_dash=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1470&screen_height=956&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=134.0.0.0&browser_online=true&engine_name=Blink&engine_version=134.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=100&webid=7460896413070853671&uifid=0de8750d2b188f4235dbfd208e44abbb976428f0720eb983255afefa45d39c0ceaaa50fa87a99720f0f6bddcc68cd46378aa1de3d8bd1407bcd52b1e97947edd91ab7cdd34a034e46f733a4f0a3e1a0f8016bb09db46b7f1863b1cf3a5ece76632a2b0f8628d15ac91809dcb66bb551b6925e97148028b35e918285248bd60d8a6c14596e73455a62c600b95252051f7a32c9ece271a536a27c2764ac5ffbae5&verifyFp=verify_m8h0zgms_EPcXORXj_i8SJ_4Lcp_BvpE_IdpEL5CEbirR&fp=verify_m8h0zgms_EPcXORXj_i8SJ_4Lcp_BvpE_IdpEL5CEbirR",
            true
        ],
        func:function (eee){
            console.log("chuang")
        }
    },
    {
        "args": [
            "Accept",
            "application/json, text/plain, */*"
        ],
          func:function (eee){
            console.log("chuang")
        }
    },
    {
        "args": [
            "Content-Type",
            "application/x-www-form-urlencoded; charset=UTF-8"
        ],
          func:function (eee){
            console.log("chuang")
        }
    },
    {
        "args": [
            "uifid",
            "0de8750d2b188f4235dbfd208e44abbb976428f0720eb983255afefa45d39c0ceaaa50fa87a99720f0f6bddcc68cd46378aa1de3d8bd1407bcd52b1e97947edd91ab7cdd34a034e46f733a4f0a3e1a0f8016bb09db46b7f1863b1cf3a5ece76632a2b0f8628d15ac91809dcb66bb551b6925e97148028b35e918285248bd60d8a6c14596e73455a62c600b95252051f7a32c9ece271a536a27c2764ac5ffbae5"
        ],
          func:function (eee){
            console.log("chuang")
        }
    }
]
const nnn=[null]
window.jiami.apply(ttt,nnn)
console.log(window.jiami)