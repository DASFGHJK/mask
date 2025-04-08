require('./x-s&mns通杀')
require('./mnc_source')

p="/api/sns/web/v1/homefeed"
g="daf4de4b9a8002d6fe425200770bf348"
u={
    "cursor_score": "",
    "num": 19,
    "refresh_type": 1,
    "note_index": 10,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.household_product_v3",
    "search_key": "",
    "need_num": 4,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}
mns= window.getMnsToken(p, u, g)
console.log(mns)