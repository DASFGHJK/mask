require('./x-s&mns通杀')
require('./source')
f = window._webmsxyw
u={
    "cursor_score": "",
    "num": 35,
    "refresh_type": 1,
    "note_index": 10,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.movie_and_tv_v3",
    "search_key": "",
    "need_num": 10,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}
function get_data(u) {
    p="/api/sns/web/v1/homefeed"

    var v = f(p, u)
    return v
}

