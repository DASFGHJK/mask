window=globalThis
delete __filename
delete __dirname
delete process
CanvasRenderingContext2D=function CanvasRenderingContext2D(){}
window.CanvasRenderingContext2D=CanvasRenderingContext2D
HTMLCanvasElement=function HTMLCanvasElement(){}
window.HTMLCanvasElement=HTMLCanvasElement

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    platform: "MacIntel",
    webdriver: false,
    language: "zh-CN",
    languages: ['zh-CN', 'zh'],
    vendor: "Google Inc."
}

document={
    createElement:function(ele){
        console.log("document.createElement(",ele,")")
    },
    cookie:"SECKEY_ABVK=m2yMjwTMd7WBPGwEp7qzfVKHZly4nXJJfehVgzawSDY%3D; BMAP_SECKEY=s_wIWFoWwWeEbqKocn8IXKxjZaaOxjOxHVNmuzvCSy3a_CnLAIBv4FPZjnv3WaIiMG5eYwhJjCXeA_1ODbFv6cJ2CJh6Nv7xJZuY3xtZtXC0ayQUlDUCP6IWWnRC5BaHpQ2wa09I0_evBA01Cvp-gyk6XKUDF4tEAkOls9NNwUq1Ks3LvmDcdvglj2Y5AfqQzZU_IcH4ybjCTy39Ho5sWA; Hm_lvt_a8d6737197d542432f4ff4abc6e06384=1744624507; HMACCOUNT=87130C7627252F2B; _ga=GA1.1.1830384164.1744624508; UBT_VID=1744624507902.d2f1AnPciNx7; MKT_CKID=1744624508407.6s9ro.0o4g; GUID=09031152110991404871; _RF1=223.160.114.28; _RSG=isqqiDl.ZhCh3zkMkltWp8; _RDG=28a5a34f26981627891c9c3e4c8f5c1ecc; _RGUID=cae3faf3-6cd3-4dac-8ce0-defb96bbd0eb; MKT_Pagesource=PC; ibulanguage=CN; ibulocale=zh_cn; cookiePricesDisplayed=CNY; IBU_TRANCE_LOG_P=34330767585; Hm_lvt_4a51227696a44e11b0c61f6105dc4ee4=1744624513; librauuid=; nfes_isSupportWebP=1; Hm_lpvt_a8d6737197d542432f4ff4abc6e06384=1744624532; _ga_5DVRDQD429=GS1.1.1744624507.1.1.1744624532.0.0.0; _ga_B77BES1Z8Z=GS1.1.1744624507.1.1.1744624532.35.0.0; _ga_9BZF483VNQ=GS1.1.1744624507.1.1.1744624532.0.0.0; Session=smartlinkcode=U130026&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=; Union=AllianceID=4897&SID=130026&OUID=&createtime=1744624534&Expires=1745229333592; _jzqco=%7C%7C%7C%7C1744624509023%7C1.1755418633.1744624508408.1744625100533.1744625429228.1744625100533.1744625429228.0.0.0.6.6; Hm_lpvt_4a51227696a44e11b0c61f6105dc4ee4=1744625437; _bfa=1.1744624507902.d2f1AnPciNx7.1.1744625408900.1744625438170.1.7.102002"
}
location={
    "ancestorOrigins": {},
    "href": "https://hotels.ctrip.com/hotels/list?countryId=1&city=2&provinceId=0&checkin=2025/04/14&checkout=2025/04/15&optionId=2&optionType=City&directSearch=0&display=%E4%B8%8A%E6%B5%B7&crn=1&adult=1&children=0&searchBoxArg=t&travelPurpose=0&ctm_ref=ix_sb_dl&domestic=1&",
    "origin": "https://hotels.ctrip.com",
    "protocol": "https:",
    "host": "hotels.ctrip.com",
    "hostname": "hotels.ctrip.com",
    "port": "",
    "pathname": "/hotels/list",
    "search": "?countryId=1&city=2&provinceId=0&checkin=2025/04/14&checkout=2025/04/15&optionId=2&optionType=City&directSearch=0&display=%E4%B8%8A%E6%B5%B7&crn=1&adult=1&children=0&searchBoxArg=t&travelPurpose=0&ctm_ref=ix_sb_dl&domestic=1&",
    "hash": ""
}
function Screen() {
    this.availHeight = 847;
    this.availLeft = 0;
    this.availTop = 38;
    this.availWidth = 1470;
    this.colorDepth = 30;
    this.height = 956;
    this.isExtended = false;
    this.onchange = null;
    this.orientation = {
        angle: 0,
        type: 'landscape-primary',
        onchange: null
    };
    this.pixelDepth = 30;
    this.width = 1470;
}
screen = new Screen()
xproxyObjs = ['window', 'localStorage','document','navigator','screen']
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
getEnvs(xproxyObjs)