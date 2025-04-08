// t.MqmaW(c, t[r(1881)](t[r(489)], f))
// 等价于c(t[r(1881)](t[r(489)], f))
// 等价于 c('9527'+时间戳)


const Crypto=require('crypto-js')

function get_data(){
    const timestamp=new Date().getTime()
    const m=Crypto.HmacSHA1('9527'+timestamp.toString(),"xxxooo").toString()

    t=btoa(timestamp)
    return {
        'm':m,
        't':t
    }
}
get_data()