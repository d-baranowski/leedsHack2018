import data from "./data";
import {waitForElement} from "./common";

var needle = require('needle');

window.onload = () => {
    console.log("Window load debug");
    const promise = waitForElement("#vjs-desc");
    promise.then(() => {
        console.log("element found");
        const advertElement = document.querySelector('#vjs-desc');
        const advertText = advertElement.textContent;

        console.log("analysing element ", advertText);
        const replacements = data.getReplacements(advertText);
        if (replacements) {
            console.log(replacements);
        }

        const currentHtml = advertElement.innerHTML;
        let newHtml = currentHtml;
        for (const replacement of replacements) {
            newHtml = newHtml.replace(replacement.textPattern, `<span data-explained="${replacement.replacementTexts[0]}">$&</span>`)
        }

        advertElement.innerHTML = newHtml;
    });
};

