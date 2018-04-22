import needle from "needle"

function waitForElement(elementQuery){
    return new Promise(function(resolve) {
        window.setTimeout(function(){
            console.log("awaiting element")
            var element = document.querySelector(elementQuery);
            if(element.textContent) {
                resolve();
            } else{
                waitForElement(elementQuery);
            }
        },100)
    });
}

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

export { waitForElement, sendToAggregator }