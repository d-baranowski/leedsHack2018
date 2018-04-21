"use strict";

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function waitForElement(elementId, callBack) {
    return new Promise(function (resolve) {
        window.setTimeout(function () {
            var element = document.getElementById(elementId);
            if (element) {
                resolve();
            } else {
                waitForElement(elementId, callBack);
            }
        }, 100);
    });
}

window.onload = function () {
    document.querySelectorAll('#vjs-desc *').forEach(function (node) {
        var promise = waitForElement("#vjs-desc");
        promise.then(function () {
            var foundIt = _data2.default.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};