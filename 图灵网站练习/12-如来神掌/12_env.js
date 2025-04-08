window = global;
_$ = {
    'ajax':function(){
        console.log(arguments)
    },
    'extend':function(){
        // console.log(arguments)
        // console.log(arguments[2].url)
        window.url = arguments[2].url
        // debugger
    },
    'originalAjax':function(){
        console.log(arguments)
    }
}
window['$'] = _$
window.jQuery = _$
//cavas 2d的构造函数
function CanvasRenderingContext2D(){
    this.direction = "ltr";
    this.fillStyle = "#000000";
    this.filter = "none";
    this.font = "10px sans-serif";
    this.fontKerning = "auto";
    this.fontStretch = "normal";
    this.fontVariantCaps = "normal";
    this.globalAlpha = 1;
    this.globalCompositeOperation = "source-over";
    this.imageSmoothingEnabled = true;
    this.imageSmoothingQuality = "low";
    this.letterSpacing = "0px";
    this.lineCap = "butt";
    this.lineDashOffset = 0;
    this.lineJoin = "miter";
    this.lineWidth = 1;
    this.miterLimit = 10;
    this.shadowBlur = 0;
    this.shadowColor = "rgba(0; 0; 0; 0)";
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
    this.strokeStyle = "#000000";
    this.textAlign = "start";
    this.textBaseline = "alphabetic";
    this.textRendering = "auto";
    this.wordSpacing = "0px";
    this.fillRect = function(ele){
        console.log('CanvasRenderingContext2D fillRect:::',ele)
    };
    this.arc = function(ele){
        console.log('CanvasRenderingContext2D arc:::',ele)
    };
    this.stroke = function(ele){
        console.log('CanvasRenderingContext2D stroke:::',ele)
    };
    this.fillText = function(ele){
        console.log('CanvasRenderingContext2D fillText:::',ele)
    };
        // return watch({},'CanvasRenderingContext2D')

}


canvas2d = new CanvasRenderingContext2D()
// canvas的构造函数
// div={
//     // setAttribute:function(){
//     //     console.log('div setAttribute:::',ele)
//     // }
// }
div=watch({
    setAttribute:function(ele){
        console.log('div setAttribute:::',ele)
    }
},'div')
function HTMLCanvasElement(){
    this.getContext = function(ele){
        console.log('canvas getContext:::',ele)
        if (ele == '2d'){
            return canvas2d
        }

    };
    this.toDataURL = function(ele){
        console.log('canvas toDataURL:::',ele)
    };
    this.getAttributeNames = function(ele){
        console.log('canvas getAttributeNames:::',ele)
    };
    this.width = 300;
    this.height = 150;
    this.style = {};
    // return watch({},'HTMLCanvasElement')
}
canvas = new HTMLCanvasElement()
//canvas构造函数

document = {
    createElement:function(ele){
        console.log('document createElement:::',ele)
        if (ele == 'canvas'){
            return canvas
        }
        if (ele == 'div'){
            return div
        }
    }
}
screen={}
xproxyObjs = ['window','document','screen','canvas','CanvasRenderingContext2D']

function getEnvs(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const handler = `{
      get: function(target, property, receiver) {
        console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
        return target[property];
      },
      set: function(target, property, value, receiver) {
        console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
        return Reflect.set(...arguments);
      }
    }`;
        eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
    }
}
function watch(obj, name){
    var console_log = console.log
    return new Proxy(obj, {
        get(target, p, receiver){
			// 过滤没用的信息，不进行打印
            if (p === "Math" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array" || p.toString().indexOf("Symbol(Symbol.") != -1){
                let val = Reflect.get(...arguments);
                return val
            } else {
                let val = Reflect.get(...arguments);
                console_log(`取值:`,name, '.', p, ` =>`, val);
                return val
            }
        },
        set(target, p, value, receiver){
            let val = Reflect.get(...arguments);
            console_log(`设置值:${name}.${p}, ${val} => ${value}`);
            return Reflect.set(...arguments)
        },
        // has(target,key){
        //     console_log(`in检测:${key} in ${target}`)
        //     return key in target
        // }
    })
}
getEnvs(xproxyObjs)
