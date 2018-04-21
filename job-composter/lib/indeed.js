"use strict";

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    console.log("Window load debug");
    var promise = (0, _common.waitForElement)("#vjs-desc");
    promise.then(function () {
        console.log("element found");
        document.querySelectorAll('#vjs-desc *').forEach(function (node) {
            console.log("analysing element ", node.textContent);
            var foundIt = _data2.default.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};