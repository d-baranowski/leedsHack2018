"use strict";

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function waitForElement(elementClass, callBack) {
    return new Promise(function (resolve) {
        window.setTimeout(function () {
            var element = document.getElementsByClassName(elementClass).item(0);
            if (element) {
                resolve();
            } else {
                waitForElement(elementClass, callBack);
            }
        }, 100);
    });
}

window.onload = function () {
    document.querySelectorAll(".job-description *").forEach(function (node) {
        var promise = waitForElement(".job-description");
        promise.then(function () {
            var foundIt = _data2.default.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};