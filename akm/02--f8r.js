                var Jv = function() {
                    var G8R = [[]];
                    try {
                        var R2R = AY(QtR);
                        if (R2R !== false) {
                            var dv = wR["decodeURIComponent"](R2R)["split"]('~');
                            if (dv["length"] >= 5) {
                                var SLR = dv[0];
                                var OtR = dv[4];
                                var Er = OtR["split"]('||');
                                if (Er["length"] > 0) {
                                    for (var YhR = 0; YhR < Er["length"]; YhR++) {
                                        var Z8R = Er[YhR];
                                        var EAR = Z8R["split"]('-');
                                        if (EAR["length"] === 1 && EAR[0] === '0') {
                                            B0R = false;
                                        }
                                        if (EAR["length"] >= 5) {
                                            var P2R = wR["parseInt"](EAR[0], 10);
                                            var zr = EAR[1];
                                            var ZUR = wR["parseInt"](EAR[2], 10);
                                            var MFR = wR["parseInt"](EAR[3], 10);
                                            var gcR = wR["parseInt"](EAR[4], 10);
                                            var dUR = 1;
                                            if (EAR["length"] >= 6)
                                                dUR = wR["parseInt"](EAR[5], 10);
                                            var WFR = [P2R, SLR, zr, ZUR, MFR, gcR, dUR];
                                            if (dUR === 2) {
                                                G8R["splice"](0, 0, WFR);
                                            } else {
                                                G8R["push"](WFR);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (R0R) {}
                    return G8R;
                };

var F8R = function() {
                    var DbR = Jv();
                    var S2R = [];
                    if (DbR != null) {
                        for (var UhR = 0; UhR < DbR["length"]; UhR++) {
                            var V3R = DbR[UhR];
                            if (V3R["length"] > 0) {
                                var h3R = V3R[1] + V3R[2];
                                var GC = V3R[6];
                                S2R[GC] = h3R;
                            }
                        }
                    }
                    console.log(S2R)
                    return S2R;
                };
F8R()