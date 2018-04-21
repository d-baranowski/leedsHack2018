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
        var advertText = document.querySelector('#vjs-desc').textContent;

        console.log("analysing element ", advertText);
        var foundIt = _data2.default.getReplacements(advertText);
        if (foundIt) {
            console.log(foundIt);
        }
    });
};