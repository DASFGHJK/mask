// s0: getPlatformCode(s),
// s1: "",
// x0: g,
// x1: C,
// x2: s || "PC",
// x3: "xhs-pc-web",
// x4: "4.60.1",
// x5: l.Z.get("a1"),
// x6: c,
// x7: d,
// x8: h,
// x9: O("".concat(c).concat(d).concat(h)),
// x10: v
P=[
    "Z",
    "m",
    "s",
    "e",
    "r",
    "b",
    "B",
    "o",
    "H",
    "Q",
    "t",
    "N",
    "P",
    "+",
    "w",
    "O",
    "c",
    "z",
    "a",
    "/",
    "L",
    "p",
    "n",
    "g",
    "G",
    "8",
    "y",
    "J",
    "q",
    "4",
    "2",
    "K",
    "W",
    "Y",
    "j",
    "0",
    "D",
    "S",
    "f",
    "d",
    "i",
    "k",
    "x",
    "3",
    "V",
    "T",
    "1",
    "6",
    "I",
    "l",
    "U",
    "A",
    "F",
    "M",
    "9",
    "7",
    "h",
    "E",
    "C",
    "v",
    "u",
    "R",
    "X",
    "5"
]
function tripletToBase64(e) {
    return P[e >> 18 & 63] + P[e >> 12 & 63] + P[e >> 6 & 63] + P[63 & e]
}

function encodeChunk(e, r, i) {
    for (var a, s = [], u = r; u < i; u += 3)
        a = (e[u] << 16 & 0xff0000) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]),
            s.push(tripletToBase64(a));
    return s.join("")
}

function b64Encode(e) {
    for (var r, i = e.length, a = i % 3, s = [], u = 0, c = i - a; u < c; u += 16383)
        s.push(encodeChunk(e, u, u + 16383 > c ? c : u + 16383));
    return 1 === a ? (r = e[i - 1],
        s.push(P[r >> 2] + P[r << 4 & 63] + "==")) : 2 === a && (r = (e[i - 2] << 8) + e[i - 1],
        s.push(P[r >> 10] + P[r >> 4 & 63] + P[r << 2 & 63] + "=")),
        s.join("")
}

function encodeUtf8(e) {
    for (var r = encodeURIComponent(e), i = [], a = 0; a < r.length; a++) {
        var s = r.charAt(a);
        if ("%" === s) {
            var u = parseInt(r.charAt(a + 1) + r.charAt(a + 2), 16);
            i.push(u),
                a += 2
        } else
            i.push(s.charCodeAt(0))
    }
    return i
}

// 计算m的生成
m = {
    "s0": 3,    //暂定写死
    "s1": "",
    "x0": "1",  //写死
    "x1": "4.1.0",
    "x2": "Mac OS", //来源
    "x3": "xhs-pc-web",  //端口
    "x4": "4.60.1",   //加密版本
    // x5: l.Z.get("a1"),
    //x5值为webid的cookie
    "x5": "195c1e3c6fb1a6ul0sv0hjy9nb8eutg6yebmhcn0m30000166702",
    // x6为返回的x-t值
    "x6": 1742725962584,
    //x7为x-s值
    "x7": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6ImQ5YjY2Y2ZmZGU3Y2JiODgwNzg1NTVhNTg2OTlkZGM1YTJlNzY5OTQ2Yjg4YTZjNDBjNzBhMGI4M2JiMWFhN2NlYzY0MWEzNTMwMTcyZDZlMGM3OWQxODU1YWZiNmEzZjc4ZTIxMDU0YzcwYTI5MTkwMzFiNTUwNzM2YTM0MmE2M2NlYTQ2MDgzZjg4ZWMwYjJjZTJjNjNmOWI2YmU0M2IyN2I2ZWEzMDAyMzU3MDhlNGYxM2U0YWM4MDIyZWFjYzQ4ZWQxNGY4M2ZkMWM3NGMyYzc5YmMzNTZiOGMzNThhZTE5YmI3NDFjZjdmYzk2ZmE1MjRkOGI4NDVlMGQ3MGMwNmVlNzdmOThkNzY4MjllNzQ4ZmI1NTk4MjE5M2Y0ZmFiYTY1ZTczNDg2MzlkMmU5ZDQyMTY1ZWE4MjVjYmVhNWIzMmNhMmRmODMzMDk4ZTYwYmVkYWY0YzU1NDA2NTM2ZGFmYTA3MmI4YzU5NzBlMGJlMDQ3ZjIxMGE0YjJiOGUxOGQyMTBlMDljOGUzODY3NDhlYjIzMzNjYjY3MTdmIn0=",

    "x8": "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeSfMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR6QL+5Ii6sdneeSfqYHqwl2qt5B0DBIx++GDi/sVtkIxdsxuwr4qtiIhuaIE3e3LV0I3VTIC7e0utl2ADmsLveDSKsSPw5IEvsiVtJOqw8BuwfPpdeTFWOIx4TIiu6ZPwrPut5IvlaLbgs3qtxIxes1VwHIkumIkIyejgsY/WTge7eSqte/D7sDcpipedeYrDtIC6eDVw2IENsSqtlnlSuNjVtIx5e1qt3bmAeVn8LIESaIhEe+AFDI3EPKI8BIiW7ZPwFIvGj4sesYINsxVwSIC7sj/6e0fhwIi5e6WrS8qwUIE7s1f0s6WAeiVtwpjgeWuwEIvMpa0AeSVwRpB7sWVw8IxI2I38isqwZgVtPzg8QwcNejd/eiqwoIhAsS/AskFRYIk/s0MvskdE0IhgsiVwDIhGdQqwJ8ut9I33e3PtVIiNsVVwxIENsfutItuwJmqwMIvPuIxW229uf2I/e3VtUIhhzIideDPwaBY+rLj7sYjQkIiGe2PtwmPwXIvNexPtu+DNeTlAsTDEeIh7sxdosiVtGLPwaIvge0uwXIigeV/ueIvAeDfJeSutXIxvsxuwU4eQtIED+Iv7sxINsxAgs0c7sdPwiIvHWIvIFcPwZICIRIhgsVL4lNjJsfqttIhLUpPws47veYjOefqtEgutVIvhHIE49/VtfPuwkIv5eWF0exVtyZqwBIiu2LPw5IvG4L9MgIEJe0L/si/Oe6I==",
    // x9: O("".concat(c).concat(d).concat(h)),   其中h为x8
    "x9": 743401835,
    "x10": 194
}

Common = b64Encode(encodeUtf8(JSON.stringify(m)))
console.log(Common)