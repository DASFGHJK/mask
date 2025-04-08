navigator={}
window={}
let isAutomated = navigator["webdriver"];

if (isAutomated) {
  while (true) {
    console["log"]("打死自动化");
  }
}

window["chrome"] && window["chrome"]["webstore"] && window["chrome"]["webstore"]["private"] && (window["location"]["href"] = "about:blank", window["close"]());
window["document"]["documentElement"]["getAttribute"]("webdriver") && (window["location"]["href"] = "about:blank", window["close"]());
navigator["plugins"]["length"] === 0 && (window["location"]["href"] = "about:blank", window["close"]());
navigator["languages"] && navigator["languages"]["length"] === 1 && navigator["languages"][0] === "en-US" && (window["location"]["href"] = "about:blank", window["close"]());
window["originGetComputedStyle"] = window["getComputedStyle"];
window["record1"] = 0;

window["getComputedStyle"] = function () {
  window["record1"]++;
  return window["originGetComputedStyle"](...arguments);
};

Element["prototype"]["originScrollIntoViewIfNeeded"] = Element["prototype"]["scrollIntoViewIfNeeded"];
window["record2"] = 0;

Element["prototype"]["scrollIntoViewIfNeeded"] = function () {
  window["record2"]++;
  return this["originScrollIntoViewIfNeeded"](...arguments);
};

window["addEventListener"]("click", function (_0x3954d9) {
  trusted = _0x3954d9["isTrusted"];
  window["getComputedStyle"](document["body"], null);
  window["record1"]--;
  document["body"]["scrollIntoViewIfNeeded"](true);
  window["record2"]--;

  if (window["record2"] !== 0 || window["record1"] !== 0) {
    window["location"]["href"] = "about:blank";
  } else {
    if (!trusted) {
      window["location"]["href"] = "about:blank";
    }
  }
});