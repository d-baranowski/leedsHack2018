import data from "./data";

function waitForElement(elementClass, callBack){
    return new Promise(function(resolve) {
        window.setTimeout(function(){
            var element = document.getElementsByClassName(elementClass).item(0);
            if(element) {
                resolve();
            } else{
                waitForElement(elementClass, callBack);
            }
        },100)
    });
}

window.onload = () => {
    document.querySelectorAll(".job-description *").forEach(function(node) {
        const promise = waitForElement(".job-description");
        promise.then(() => {
            const foundIt = data.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};