"use strict";

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    document.querySelectorAll('#vjs-desc *').forEach(function (node) {
        var foundIt = _data2.default.getReplacement(node.textContent);
        if (foundIt) {
            console.log(foundIt);
        }
    });
};