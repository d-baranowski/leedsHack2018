import {deBullshitifyArticle} from "./common";

const advertSelector = "#vjs-desc";
window.onload = () => {
    deBullshitifyArticle(advertSelector);
    const articleSelectors = document.querySelectorAll("a[data-tn-element='jobTitle']");
    for (const articleTitleDomNode of articleSelectors) {
        articleTitleDomNode.addEventListener("click", () => {
            window.setTimeout(function() {
                deBullshitifyArticle(advertSelector);
            });
        });
    }
};

