import data from "./data";
import {sendToAggregator, waitForElement, getRandomReplacement, getTooltipTemplate} from "./common";

const deBullshitifyArticle = async () => {
    const advertElement = await waitForElement("#vjs-desc");
    const replacements = await data.getReplacements();
    const currentHtml = advertElement.innerHTML;
    let newHtml = currentHtml;

    for (const replacement of replacements) {
        newHtml = newHtml.replace(
            new RegExp(replacement.textPattern),
            getTooltipTemplate(getRandomReplacement(replacement))
        )
    }
    if (newHtml !== currentHtml) {
        advertElement.innerHTML = newHtml;
    }
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

