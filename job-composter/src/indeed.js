import data from "./data";
import {waitForElement} from "./common";


const deBullshitifyArticle = () => {
    const promise = waitForElement("#vjs-desc");
    promise.then(() => {
        console.log("Promise resolved");
        const advertElement = document.querySelector('#vjs-desc');
        console.log("Element found");
        const advertText = advertElement.textContent;
        console.log("advert text", advertText);

        const replacements = data.getReplacements(advertText);
        if (replacements) {
            console.log("replacements", replacements);
        }

        const currentHtml = advertElement.innerHTML;
        let newHtml = currentHtml;

        for (const replacement of replacements) {
            console.log("Applying replacement");
            newHtml = newHtml.replace(replacement.textPattern,
                `<div class="tooltip">$&<span class="tooltiptext">${replacement.replacementTexts[0]}</span></div>`)
        }
        console.log("Replacing html", newHtml === currentHtml);
        advertElement.innerHTML = newHtml;
    });
}

window.onload = () => {
    deBullshitifyArticle();
    const articleSelectors = document.querySelectorAll("a[data-tn-element='jobTitle']");
    for (const articleTitleDomNode of articleSelectors) {
        articleTitleDomNode.addEventListener("click", () => {
            window.setTimeout(function() {
                deBullshitifyArticle();
            });
        });
    }
};

