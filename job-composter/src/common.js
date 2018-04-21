import needle from "needle";

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

    needle.post('http://ec2-18-130-16-177.eu-west-2.compute.amazonaws.com:8080/jobLoad', body,
        function(err, resp, body) {
    })
}

export { waitForElement, sendToAggregator }