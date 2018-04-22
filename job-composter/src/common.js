import needle from "needle"
import data from "./data";

const getRandomReplacement = (replacement) => {
    const items = replacement.replacementTexts;
    const maxLength = items.length;
    return items[Math.floor(Math.random()*maxLength)];
};

function waitForElement(elementQuery){
    return new Promise(function(resolve, reject) {
        window.setTimeout(function(){
            let element = document.querySelector(elementQuery);
            if(element && element.textContent) {
                resolve(document.querySelector(elementQuery));
            } else{
                waitForElement(elementQuery);
            }
        },100)
    });
}

const getTooltipTemplate = (tooltip, id) => `<div id="${id}" class="tooltip">$&<span class="tooltiptext">${tooltip}</span></div>`;

//const bullshitAggregatorApiUrl = 'http://ec2-18-130-16-177.eu-west-2.compute.amazonaws.com:8080/jobLoad';
const bullshitAggregatorApiUrl = 'https://172.20.226.46:8443/jobLoad';


const options = {
    headers: {'Content-Type': 'application/json'}
}
const sendToAggregator = (body) =>
    new Promise((resolve, reject) => {
        needle.post(bullshitAggregatorApiUrl, body, options, (err, resp) => {
            resp && resolve(resp.body);
            err && reject(err);
        });
    });

const updateAggregator = async () => {
    const tooltips = Array.prototype.slice.call(document.querySelectorAll(".tooltip"));
    const url = window.location.href;
    const results = tooltips.map((element => sendToAggregator({
        url: url,
        id: element.id
    })));
    await Promise.all(results);
}

const deBullshitifyArticle = async (elementSelector) => {
    const advertElement = await waitForElement(elementSelector);
    const replacements = await data.getReplacements();
    const currentHtml = advertElement.innerHTML;
    let newHtml = currentHtml;

    for (const replacement of replacements) {
        newHtml = newHtml.replace(
            new RegExp(replacement.textPattern),
            getTooltipTemplate(getRandomReplacement(replacement), replacement.replacementId)
        )
    }
    if (newHtml !== currentHtml) {
        advertElement.innerHTML = newHtml;
        updateAggregator();
    }
}

export { waitForElement, sendToAggregator, getRandomReplacement, getTooltipTemplate, deBullshitifyArticle }