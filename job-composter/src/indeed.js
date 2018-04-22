import data from "./data";
import {waitForElement} from "./common";


window.onload = () => {
    const promise = waitForElement("#vjs-desc");
    promise.then(() => {
        const advertElement = document.querySelector('#vjs-desc');
        const advertText = advertElement.textContent;

        const replacements = data.getReplacements(advertText);
        if (replacements) {
            console.log(replacements);
        }

        const currentHtml = advertElement.innerHTML;
        let newHtml = currentHtml;
        for (const replacement of replacements) {
            newHtml = newHtml.replace(replacement.textPattern,
                `<div class="tooltip">$&<span class="tooltiptext">${replacement.replacementTexts[0]}</span></div>`)
        }

        advertElement.innerHTML = newHtml;
    });
};

