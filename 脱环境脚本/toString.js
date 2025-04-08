!function(){
    const getOwnPeopertySymbols=Objects.getOwnPropertySymbols;  //首先存储方法
    Object.getOwnPropertySymbols=function getOwnProperySymbols(){
        const result =getOwnPeopertySymbols.apply(this,arguments);
        for(let i=0;i<result.length;i++){
            if (result[i].indexOf('myToString')!=-1) return [];
        }
        return result;
    }


    const $toString=Function.toString  //首先存储原本的toString方法
    //随机检测特征
    const myFunction_toString_symbol=Symbol('('.concat('',')_',(Math.random())+'').toString(36))
    const myToString=function (){
        return typeof this=== 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }
    function set_native(func,key,value){
        Object.defineProperty(func,key,{
            enumerable:false,
            configurable:true,
            writable:truem,
            value:value
        })
    }
    delete Function.prototype.toString   //进行定义的删除
    set_native(Function.prototype,"toString".myToString)
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");
    window.func_set_natvie =(func) =>{
        set_native(func,myFunction_toString_symbol,`function ${func.name|| ''}() {native code}`)
    }
    window.func_set_natvie_Div = (func,name) =>{
        set_native(func,myFunction_toString_symbol,`function ${name||'' }() {native code}`)
    }
}.bind(this)();