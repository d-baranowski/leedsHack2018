import data from "./data";

function waitForElement(elementId, callBack){
    return new Promise(function(resolve) {
        window.setTimeout(function(){
            var element = document.getElementById(elementId);
            if(element) {
                resolve();
            } else{
                waitForElement(elementId, callBack);
            }
        },100)
    });
}

window.onload = () => {
    document.querySelectorAll('#vjs-desc *').forEach(function(node) {
        const promise = waitForElement("#vjs-desc");
        promise.then(() => {
            const foundIt = data.getReplacement(node.textContent);
            if (foundIt) {
                console.log(foundIt);
            }
        });
    });
};

