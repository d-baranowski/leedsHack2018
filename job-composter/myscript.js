const data = require("./data.js");

window.onload = () => {
    document.querySelectorAll('body *').forEach(function(node) {
        console.log(data.getMatches());

        console.log(node.textContent);
    });
};

