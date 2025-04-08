const CryptoJS=require('crypto-js')
data={
    "r": "pcrXIHmRv3B8SZVQUayuMNGFhYePmeT3n47e4L185b/Z6tptDQJL9zYrJWu1ZEywqFszCRjLdOL+zKw/hq7RFiPabWG6W0U2cUvyhDxIKvDHmCEs3oSvp/TGA4ng+QLRMioYW/G1gMZRjhXmjmLQ5XTuGAnNWgcNWyvflqiJZvZ+XbukasHqBalKxPcARyG1ImlfFrYKhOsNAqlnYiySigfTFyiI9S7h3asiQQ/0a+rruPSyDX9r1L+wVPb6JrJ/8uBYbqByxjp/CqWOW6ov6foXxY7yGdkw+Np4qIrQJtx0wvFaCI4C1TVQgWL3iIF2C3B54CH3XW2ft50IDNkP/L/0Z7/1ZjRyAU+UAn7WlAH+bQxh0A0gvxkKzdVP0WWP8X0J6/QgJFnBM/9pTlYlLryKTXuMP5oMaIK2kgfCWQk5DqpBm2ZVxd90ye1JBtd486OXck0aqmtDJY3NjxMIHvyIYoBZ0E7YdrVFn542v9Q5UQTO2RzHUU5jK2Byi/QxI5REfKx/xmckhHCwKh8iYhoSqlkDmxdwxltXi91OR+Ng3o5vVqwdzlC7Ui2jssWZTOyYtVrpQGcx8GoTvFlZksv+6/GIlbfjPbbSPyWSqZYmvgaoccl6ju4qd/GjGaYrNyblWBcOtTJKEBQgA5Cdz7FG/xXhbGxXm5KEJoN1oaUf8ae0Yn9GJwmLHLxrs0A+h+Ktsxrk/MvBGxJpj8LgSgd4eZyGSXDnmIlQbA5zmoFXaEyxgcf+aRAAF5XtHiLUam57FslCWf3HjrW+hlSZlQ==",
    "k": "omYf6V8EbT0h8GkTU0SKKNRF"
}

decrypt= function (b, c) {
    if (c) {
        return CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(b, CryptoJS.enc.Utf8.parse(c), {
            iv: CryptoJS.enc.Utf8.parse("20250407"),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })).toString()
    }
    return ""
}
console.log(decrypt(data.r,data.k))