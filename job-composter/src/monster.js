import data from "./data";
import {waitForElement, sendToAggregator} from "./common";

window.onload = () => {
    console.log("Window load debug");
    const promise = waitForElement("#JobDescription");
    promise.then(() => {
        console.log("element found");
        const advertText = document.querySelector('#JobDescription').textContent;

            console.log("analysing element ", advertText);
            const replacements = data.getReplacements(advertText);
            if (replacements) {
                console.log(replacements);
                const body = JSON.stringify({"keywords" : replacements.map((item) => {return item.replacementTexts[0]}), "url" : document.URL})
                //sendToAggregator(body)
            }
    });
};