window = global;

window.requestAnimationFrame = function(ele){
    console.log('requestAnimationFrame:::',ele)
}
window.innerWidth = 440
window.innerHeight = 695

document = {}

XMLHttpRequest = function(ele){
    console.log('XMLHttpRequest:::',ele)
}

navigator = {
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

screen = {
    'availHeight': 816,
    'availLeft': 0,
    'availTop': 0,
    'availWidth': 1536,
    'colorDepth': 24,
    'height': 864,
}


// function SetProxy(proxyObjs) {
//     for (let i = 0; i < proxyObjs.length; i++) {
//         const handler = `{
//       get: function(target, property, receiver) {
//         console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
//         return target[property];
//       },
//       set: function(target, property, value, receiver) {
//         console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
//         return Reflect.set(...arguments);
//       }
//     }`;
//         eval(`try {
//             ${proxyObjs[i]};
//             ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
//         } catch (e) {
//             ${proxyObjs[i]} = {};
//             ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
//         }`);
//     }
// }

// proxyObjs = ['window','document','navigator']
// SetProxy(proxyObjs)