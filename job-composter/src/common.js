import request from "request";

function waitForElement(elementQuery){
    return new Promise(function(resolve) {
        window.setTimeout(function(){
            console.log("awaiting element")
            var element = document.querySelector(elementQuery);
            if(element) {
                console.log("resolving promise");
                resolve();
            } else{
                waitForElement(elementQuery);
            }
        },100)
    });
}

function sendToAggregator(body){
    request.post('http://localhost:8080/jobLoad', { json: true, rejectUnauthorized: false, body: body }),
        function(error, response) {
                console.log(error,response.body);
                return;
        }
}

export { waitForElement, sendToAggregator }