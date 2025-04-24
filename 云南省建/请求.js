data = {"key": "query"}
const n=[
    "DgfIBgu",
    "Dg9tDhjPBMC",
    "ndCWnZi1BenlAuXX",
    "qJyQndaUmL9dosnLncrfmW",
    "odKZmZK0Cw9gq290",
    "zw5J",
    "ChjVDg90ExbL",
    "zxHJzxb0Aw9U",
    "Aw5MBW",
    "mJmZnZK1mNjTD3PVvW",
    "nJbmt3HNr0u",
    "zwnI",
    "mtyWodi5owfdAeH4sa",
    "Bw9Kzq",
    "y29UC3rYDwn0B3i",
    "vxrMoa",
    "mJHIwhjyyLy",
    "DhjHy2u",
    "CgfK",
    "otiXmdm5mfnxz09UEa",
    "ugTJCZC",
    "yMLUza",
    "BgvUz3rO",
    "mZiYndeZnK9UC0nYvW",
    "C200",
    "yMfZzty0",
    "y2LWAgvYvhLWzq",
    "CgfYC2u",
    "A2v5",
    "D2fYBG",
    "Bg9N",
    "ntC0nZaYweXWBevh",
    "runc",
    "y29UC29Szq",
    "mJD1tNzszMG"
]
 Qo = function(o, r) {
        o = o - 198;
        let s = n[o];
        if (Qo.puDsbx === void 0) {
            var a = function(c) {
                const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let d = ""
                  , p = "";
                for (let h = 0, x, v, b = 0; v = c.charAt(b++); ~v && (x = h % 4 ? x * 64 + v : v,
                h++ % 4) ? d += String.fromCharCode(255 & x >> (-2 * h & 6)) : 0)
                    v = f.indexOf(v);
                for (let h = 0, x = d.length; h < x; h++)
                    p += "%" + ("00" + d.charCodeAt(h).toString(16)).slice(-2);
                return decodeURIComponent(p)
            };
            Qo.KYiqds = a,
            e = arguments,
            Qo.puDsbx = !![]
        }
        const l = n[0]
          , i = o + l
          , u = e[i];
        return u ? s = u : (s = Qo.KYiqds(s),
        e[i] = s),
        s
    }
class e$e {
constructor(t) {
    let n = Er.stringToArrayBufferInUtf8(t.key);
    if (n.length !== 16)
        throw new Error("key should be a 16 bytes string");
    this.key = n;
    let o = new Uint8Array(0);
    if (t.iv !== void 0 && t.iv !== null && (o = Er.stringToArrayBufferInUtf8(t.iv),
    o.length !== 16))
        throw new Error("iv should be a 16 bytes string");
    this.iv = o,
    this.mode = "cbc",
    ["cbc", "ecb"].indexOf(t.mode) >= 0 && (this.mode = t.mode),
    this.cipherType = "base64",
    ["base64", "text"].indexOf(t.outType) >= 0 && (this.cipherType = t.outType),
    this.encryptRoundKeys = new Uint32Array(32),
    this.spawnEncryptRoundKeys(),
    this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys),
    this.decryptRoundKeys.reverse()
}
doBlockCrypt(t, n) {
    let o = new Uint32Array(36);
    o.set(t, 0);
    for (let s = 0; s < 32; s++)
        o[s + 4] = o[s] ^ this.tTransform1(o[s + 1] ^ o[s + 2] ^ o[s + 3] ^ n[s]);
    let r = new Uint32Array(4);
    return r[0] = o[35],
    r[1] = o[34],
    r[2] = o[33],
    r[3] = o[32],
    r
}
spawnEncryptRoundKeys() {
    let t = new Uint32Array(4);
    t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3],
    t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7],
    t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11],
    t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
    let n = new Uint32Array(36);
    n[0] = t[0] ^ Hi[0],
    n[1] = t[1] ^ Hi[1],
    n[2] = t[2] ^ Hi[2],
    n[3] = t[3] ^ Hi[3];
    for (let o = 0; o < 32; o++)
        n[o + 4] = n[o] ^ this.tTransform2(n[o + 1] ^ n[o + 2] ^ n[o + 3] ^ Qwe[o]),
        this.encryptRoundKeys[o] = n[o + 4]
}
rotateLeft(t, n) {
    return t << n | t >>> 32 - n
}
linearTransform1(t) {
    return t ^ this.rotateLeft(t, 2) ^ this.rotateLeft(t, 10) ^ this.rotateLeft(t, 18) ^ this.rotateLeft(t, 24)
}
linearTransform2(t) {
    return t ^ this.rotateLeft(t, 13) ^ this.rotateLeft(t, 23)
}
tauTransform(t) {
    return Vi[t >>> 24 & 255] << 24 | Vi[t >>> 16 & 255] << 16 | Vi[t >>> 8 & 255] << 8 | Vi[t & 255]
}
tTransform1(t) {
    let n = this.tauTransform(t);
    return this.linearTransform1(n)
}
tTransform2(t) {
    let n = this.tauTransform(t);
    return this.linearTransform2(n)
}
padding(t) {
    if (t === null)
        return null;
    let n = to - t.length % to
      , o = new Uint8Array(t.length + n);
    return o.set(t, 0),
    o.fill(n, t.length),
    o
}
dePadding(t) {
    if (t === null)
        return null;
    let n = t[t.length - 1];
    return t.slice(0, t.length - n)
}
uint8ToUint32Block(t, n=0) {
    let o = new Uint32Array(4);
    return o[0] = t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3],
    o[1] = t[n + 4] << 24 | t[n + 5] << 16 | t[n + 6] << 8 | t[n + 7],
    o[2] = t[n + 8] << 24 | t[n + 9] << 16 | t[n + 10] << 8 | t[n + 11],
    o[3] = t[n + 12] << 24 | t[n + 13] << 16 | t[n + 14] << 8 | t[n + 15],
    o
}
encrypt(t) {
    let n = Er.stringToArrayBufferInUtf8(t)
      , o = this.padding(n)
      , r = o.length / to
      , s = new Uint8Array(o.length);
    if (this.mode === "cbc") {
        if (this.iv === null || this.iv.length !== 16)
            throw new Error("iv error");
        let a = this.uint8ToUint32Block(this.iv);
        for (let l = 0; l < r; l++) {
            let i = l * to
              , u = this.uint8ToUint32Block(o, i);
            a[0] = a[0] ^ u[0],
            a[1] = a[1] ^ u[1],
            a[2] = a[2] ^ u[2],
            a[3] = a[3] ^ u[3];
            let c = this.doBlockCrypt(a, this.encryptRoundKeys);
            a = c;
            for (let f = 0; f < to; f++)
                s[i + f] = c[parseInt(f / 4)] >> (3 - f) % 4 * 8 & 255
        }
    } else
        for (let a = 0; a < r; a++) {
            let l = a * to
              , i = this.uint8ToUint32Block(o, l)
              , u = this.doBlockCrypt(i, this.encryptRoundKeys);
            for (let c = 0; c < to; c++)
                s[l + c] = u[parseInt(c / 4)] >> (3 - c) % 4 * 8 & 255
        }
    return this.cipherType === "base64" ? Er.arrayBufferToBase64(s) : Er.utf8ArrayBufferToString(s)
}
decrypt(t) {
    let n = new Uint8Array;
    this.cipherType === "base64" ? n = Er.base64ToArrayBuffer(t) : n = Er.stringToArrayBufferInUtf8(t);
    let o = n.length / to
      , r = new Uint8Array(n.length);
    if (this.mode === "cbc") {
        if (this.iv === null || this.iv.length !== 16)
            throw new Error("iv error");
        let a = this.uint8ToUint32Block(this.iv);
        for (let l = 0; l < o; l++) {
            let i = l * to
              , u = this.uint8ToUint32Block(n, i)
              , c = this.doBlockCrypt(u, this.decryptRoundKeys)
              , f = new Uint32Array(4);
            f[0] = a[0] ^ c[0],
            f[1] = a[1] ^ c[1],
            f[2] = a[2] ^ c[2],
            f[3] = a[3] ^ c[3],
            a = u;
            for (let d = 0; d < to; d++)
                r[i + d] = f[parseInt(d / 4)] >> (3 - d) % 4 * 8 & 255
        }
    } else
        for (let a = 0; a < o; a++) {
            let l = a * to
              , i = this.uint8ToUint32Block(n, l)
              , u = this.doBlockCrypt(i, this.decryptRoundKeys);
            for (let c = 0; c < to; c++)
                r[l + c] = u[parseInt(c / 4)] >> (3 - c) % 4 * 8 & 255
        }
    let s = this.dePadding(r);
    return Er.utf8ArrayBufferToString(s)
}
}
var t$e = e$e;
const n$e = t$e;
var o$e = {
    sm4: n$e
}
function a$e() {
    const e = Qo
      , t = {};
    t[e(226)] = e(201),
    t[e(211)] = e(209),
    t[e(224)] = e(223);
    const n = t
      , o = o$e[e(222)];
    return new o(n)
}
function encrypt(t) {
    let n = Er.stringToArrayBufferInUtf8(t)
        , o = this.padding(n)
        , r = o.length / to
        , s = new Uint8Array(o.length);
    if (this.mode === "cbc") {
        if (this.iv === null || this.iv.length !== 16)
            throw new Error("iv error");
        let a = this.uint8ToUint32Block(this.iv);
        for (let l = 0; l < r; l++) {
            let i = l * to
                , u = this.uint8ToUint32Block(o, i);
            a[0] = a[0] ^ u[0],
                a[1] = a[1] ^ u[1],
                a[2] = a[2] ^ u[2],
                a[3] = a[3] ^ u[3];
            let c = this.doBlockCrypt(a, this.encryptRoundKeys);
            a = c;
            for (let f = 0; f < to; f++)
                s[i + f] = c[parseInt(f / 4)] >> (3 - f) % 4 * 8 & 255
        }
    } else
        for (let a = 0; a < r; a++) {
            let l = a * to
                , i = this.uint8ToUint32Block(o, l)
                , u = this.doBlockCrypt(i, this.encryptRoundKeys);
            for (let c = 0; c < to; c++)
                s[l + c] = u[parseInt(c / 4)] >> (3 - c) % 4 * 8 & 255
        }
    return this.cipherType === "base64" ? Er.arrayBufferToBase64(s) : Er.utf8ArrayBufferToString(s)
}

console.log(a$e());
// const s = a$e().encrypt(data)

//请求参数
const a = u$e(s)
