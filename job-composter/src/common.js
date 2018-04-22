import needle from "needle"

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

    const options = {
        headers: {'Content-Type': 'application/json'}
    }
    needle.post('https://localhost:8443/jobLoad', body, options,  function(err, resp){
            console.log('potato');
            console.log(resp.body)
        });
}

export { waitForElement, sendToAggregator }