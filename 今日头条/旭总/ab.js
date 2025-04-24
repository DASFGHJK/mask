require('./env')
require('./bdms')

function get_ab(channel_id,min_behot_time,msToken) {
    var arguments = [
        0,
        1,
        8,
        `channel_id=${channel_id}&min_behot_time=${min_behot_time}&offset=0&refresh_count=5&category=pc_profile_channel&client_extra_params=%7B%22short_video_item%22%3A%22filter%22%7D&aid=24&app_name=toutiao_web&msToken=${encodeURIComponent(msToken)}`,
        "",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    ]
    var r = window.xuxu._v;
    return (0,
    window.xuxu._u)(r[0], arguments, r[1], r[2], this)
}