import needle from "needle"
import data from "./data";

const getRandomReplacement = (replacement) => {
    const items = replacement.replacementTexts;
    const maxLength = items.length;
    return items[Math.floor(Math.random()*maxLength)];
};

function waitForElement(elementQuery){
    console.log("Starting to wait for element ", elementQuery);
    return new Promise(function(resolve) {
        window.setTimeout(function(){
            var element = document.querySelector(elementQuery);
            if(element && element.textContent) {
                console.log("Promise resolved");
                resolve(document.querySelector(elementQuery));
            } else{
                console.log("Waiting for element");
                waitForElement(elementQuery);
            }
        },100)
    });
}

const getTooltipTemplate = (tooltip) => `<div class="tooltip">$&<span class="tooltiptext">${tooltip}</span></div>`;

//const bullshitAggregatorApiUrl = 'http://ec2-18-130-16-177.eu-west-2.compute.amazonaws.com:8080/jobLoad';
const bullshitAggregatorApiUrl = 'https://172.20.226.46:8443/jobLoad';

function sendToAggregator(body){
    const options = {
        headers: {'Content-Type': 'application/json'}
    }
    needle.post(bullshitAggregatorApiUrl, body, options,  function(err, resp){
        console.log("succefully saved to aggregator", resp.body)
    });
}

const deBullshitifyArticle = async (elementSelector) => {
    const advertElement = await waitForElement(elementSelector);
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

export { waitForElement, sendToAggregator, getRandomReplacement, getTooltipTemplate, deBullshitifyArticle }