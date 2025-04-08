EventTarget =function EventTarget(){

};
Node = function Node(){

};
Document=function Document(){

};  //创建



Document.prototype.createElement=function createElement(className){
    switch(className){
        case "div":
            return  ""//div
    };
    return null;
}


HTMLDocument=function HTMLDocument(){}
Object.setPrototypeOf(Node.prototype,EventTarget.prototype)
Object.setPrototypeOf(Document)