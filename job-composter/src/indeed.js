import data from "./data";
import {waitForElement} from "./common";

window.onload = () => {
    console.log("Window load debug");
    const promise = waitForElement("#vjs-desc");
    promise.then(() => {
        console.log("element found");
        document.querySelectorAll('#vjs-desc *').forEach(function (node) {
            console.log("analysing element ", node.textContent);
            const foundIt = data.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};

