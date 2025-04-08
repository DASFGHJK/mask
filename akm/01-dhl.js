var MU = 0;
var df = 1;
var E5 = 8;
Ul = [
    4095,
    4,
    0,
    127,
    34,
    65535,
    65793,
    4282663,
    8388607,
    4294967295,
    8888888,
    1501614,
    1,
    128,
    2048,
    3600,
    4096,
    10,
    11,
    17,
    18,
    19,
    26,
    27,
    8,
    1000,
    10000,
    25,
    20,
    47,
    112,
    123,
    4294967296,
    2016,
    999999,
    2,
    13,
    5,
    6,
    15,
    1.67,
    1.43,
    3000,
    3,
    1.73,
    2.11,
    2222,
    3600000,
    87,
    1.81
]
var m5 = 6;
var UV = 9
var wS = 7;
var K9 = 0;
var ng = 3;
var EI = 32
var f8R = new Array(127)
var Mx = 1
var jx = 39
var zH = 4
var XO = 92
var Qz = 5;
var TD = 127;
var vg = function (XB, H4) {
    return XB < H4;
};
var fx = function (EGR, O1R) {
    return EGR % O1R;
};
var R9 = function (pN, NB) {
    return pN & NB;
};
var xx = function (SBR, ckR) {
    return SBR >> ckR;
};
var HY = function (Ex, OV) {
    return Ex >= OV;
};

function WY123(Kg) {
    var bH = Kg[MU];
    var AS = Kg[df];
    var bM;
    var rV;
    // qO.push(bg);
    var zg;
    var wV;
    var K9 = 0;
    var zI = ":";
    var c5 = bH["split"](zI);
    for (wV = K9; vg(wV, c5["length"]); wV++) {
        bM = fx(R9(xx(AS, E5), 65535), c5["length"]);
        AS *= Ul[m5];
        AS &= Ul[UV];
        AS += Ul[wS];
        AS &= Ul[E5];
        rV = fx(R9(xx(AS, E5), 65535), c5["length"]);
        AS *= Ul[m5];
        AS &= Ul[UV];
        AS += Ul[wS];
        AS &= Ul[E5];
        zg = c5[bM];
        c5[bM] = c5[rV];
        c5[rV] = zg;
    }
    var lg;
    return lg = c5["join"](zI),
        // qO.pop(),
        lg;
}

var rl = function (R5) {
    return -R5;
};
var Hq = function (FV, Az) {
    return FV === Az;
};

var Dl = function (HbR, fLR) {
    return HbR !== fLR;
};
var P7 = function (QFR) {
    return !QFR;
};
var TpR = 8888888;
var YFR = 1501614;
var lXR = function (bm_sz) {
    var BtR = [TpR, YFR];
    // qO.push(kN);
    var Z0R = bm_sz;

    var Ol = 2;
    var dq = 10;
    var YXR = decodeURIComponent(Z0R)["split"]("~");
    var f2R = parseInt(YXR[Ol], dq);
    f2R = isNaN(f2R) ? TpR : f2R;
    BtR[0] = f2R;


    var qRR;
    return qRR = BtR,
        qRR;
};
var B3R = function (pcR, fpR) {
    var QhR = ""
    for (var BRR = K9; vg(BRR, Ul[ng]); ++BRR) {
        if (vg(BRR, EI) || Hq(BRR, jx) || Hq(BRR, Ul[zH]) || Hq(BRR, XO)) {
            f8R[BRR] = rl(Mx);
        } else {
            f8R[BRR] = QhR["length"];
            QhR += String["fromCharCode"](BRR);

        }
    }
    debugger;
    QhR = " !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    var xWR = "";
    for (var rRR = 0; vg(rRR, pcR["length"]); rRR++) {
        var RXR = pcR["charAt"](rRR);
        var P3R = R9(xx(fpR, E5), Ul[Qz]);
        fpR *= Ul[m5];
        fpR &= Ul[UV]
        fpR += Ul[wS];
        fpR &= Ul[E5];
        var tWR = f8R[pcR["charCodeAt"](rRR)];
        var W8R = RXR["codePointAt"](K9);
        if (HY(W8R, EI) && vg(W8R, TD)) {
            tWR = f8R[W8R];
        }

        if (HY(tWR, K9)) {
            var ZpR = fx(P3R, QhR["length"]);
            tWR += ZpR;
            tWR %= QhR["length"];
            RXR = QhR[tWR];
        }
        xWR += RXR;
    }
    var VC;
    return VC = xWR,
        VC;
};

function get_data(bm_sz) {
    QqR = '{"ver":"ldfyWy84oqAV/jVkNMEYUz65/Smo2nUkuYXrXG/oa7Q=","fpt":"-1","fpc":"94","ajr":"20848|869325896251,836,Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36,20030107,1470,0.967288899483,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,5,zh-CN,1180,0,0,0,0,8751,956,1180,150,1470,12147,427790,0,Gecko","din":[{"hal":869325896251},{"ash":836},{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"},{"nps":"20030107"},{"asw":1470},{"ran":"0.967288899483"},{"adp":"cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"},{"npl":5},{"nal":"zh-CN"},{"wiw":1180},{"wdr":0},{"pha":0},{"ibr":0},{"dau":0},{"ucs":"8751"},{"she":956},{"wow":1180},{"wih":150},{"swi":1470},{"xag":12147},{"hz1":427790},{"tsd":0},{"nap":"Gecko"}],"eem":"do_en,dm_en,t_en","ffs":"0,0,0,0,4615,113,0;0,-1,1,1,4725,1101,0;0,0,0,0,4690,113,0;0,-1,1,1,4673,1101,0;0,-1,1,1,4788,1101,0;0,0,0,0,4630,113,0;0,-1,1,1,4584,1101,0;0,0,0,0,4753,113,0;","vev":"","inf":"0,0,0,0,4615,113,0;0,-1,1,1,4725,1101,0;0,0,0,0,4690,113,0;0,-1,1,1,4673,1101,0;0,-1,1,1,4788,1101,0;0,0,0,0,4630,113,0;0,-1,1,1,4584,1101,0;0,0,0,0,4753,113,0;","ajt":"0,0","kev":"","dme":"","mev":"","doe":"","pur":"https://www.dhl.com/cn-zh/home/tracking.html?tracking-id=1234&submit=1&inputsource=marketingstage","pev":"","mst":[{"kevl":1},{"mevl":32},{"tevl":32},{"devl":0},{"dmvl":0},{"pevl":0},{"tovl":0},{"delt":1},{"it":0},{"sts":1738651792502},{"fct":-999999},{"dd2":18599},{"kc":0},{"mc":0},{"ww8":0},{"pc":0},{"tc":0},{"ssts":2},{"tst":0},{"rval":"-1"},{"rcfp":"-1"},{"nfas":30261693},{"jsrf":"PiZtE"},{"jsrf1":11690},{"jsrf2":15},{"signals":"0"},{"mwd":"0"},{"hea":""},{"dvc":"a3idYhg3ikcgadyxxhsq,7,i+j+d+e+a+l+c+f+g+k+h+"},{"srd":"0"}],"o9":0,"tev":"","sde":"0,0,0,0,1,0,0","pmo":"","dpw":"","pac":"","per":"8","pde":"","oev":"","if":"","fwd":[{"fmh":""},{"fmz":""},{"ssh":"0"}]}'

    QqR = WY123([QqR, 1501614]);

    // 第三次加密
    // 4536641
    var KIR = lXR(bm_sz)

    QqR = B3R(QqR, KIR[0]);
    var Z9R = "11,0,0,0,2,0"
    var nSR = "3;0;1;0;" + KIR[0] + ";ldfyWy84oqAV/jVkNMEYUz65/Smo2nUkuYXrXG/oa7Q="

    QqR = ""["concat"](nSR, ";")["concat"](Z9R, ";")["concat"](QqR);
    var ClR = JSON.stringify(QqR);
    return ClR

}

console.log(get_data("48F414BF6FCB40CFAE4D418BFC399B6B~YAAQPg1x3xKU/7mUAQAAKb8uzRojAp1DG1F7K/mpzplLokpSpGbpGsy5aupDZwm1zEpW9olGsIksDTFKTh2xW5RkBM5XT+Rtpu07SPY859v95wl2FTtK4+Jqm6CzYdONZqaeotHSEc7yGuFdRDUSZCG3o1ZAs93e01ZOmlqiAa+q2WZwCSZFCQTCGqL0N5N/YKTR8wRZlOKMrLfcMByhCwrURqrvuqhk5KgMDYyG7JGo4f/PPYr0S9ryJeGoOiJVz+/yEg/G0rXzCJgZyLKJ+K3lykBWlJQd+x4zDzLBuoNSOTtesuxY6DnC+XIMB43KBmOrUAa17vYvihrZADZIx3Ee3NjtG81hn17Q8jxNNSpckHarmf88cbTEIteuscikn1fLAAGtxJU9vhIozW+n/qHbQ7D+TFn1WDR8PGDr8lU44Lw7crSIJBxkyDA=~3753541~4339510"))