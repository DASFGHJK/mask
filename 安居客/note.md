# 要逆向的网址:https://api.anjuke.com/web/general/captchaNew.html

## checkInfo里面总共需要五个参数sessionId，responseId，dInfo，language，data五个参数。

其中 sessionId  在https://api.anjuke.com/web/general/captchaNew.html此页面中的可以使用re来提取

responseId 在https://verifycode.58.com/captcha/getInfoTp 中响应

然后language为语言可以写死为zh-CN

因此我们要逆向的两个参数主要为dInfo，data两个参数

