"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function waitForElement(elementQuery, callBack) {
    return new Promise(function (resolve) {
        window.setTimeout(function () {
            console.log("awaiting element");
            var element = document.querySelector(elementQuery);
            if (element) {
                console.log("resolving promise");
                resolve();
            } else {
                waitForElement(elementQuery, callBack);
            }
        }, 100);
    });
}

exports.waitForElement = waitForElement;