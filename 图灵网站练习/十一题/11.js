

function encrypt(var0, var1) {
    return var0 + Math.floor(var1 / 3) + 16358;
}
function get_m_t(page) {
    t = parseInt(new Date().getTime()/ 1000);

    ssss = encrypt(page, t);
    return {
        'm':ssss,
        't':t,
    }
}


