'use strict';

const apiURL = 'https://9rph5cqv47.execute-api.eu-west-2.amazonaws.com/dev/replacements'
const aggregatorUrl = "https://localhost:8443/getSimilar";

const addTranslationHTML = `
      <div id="add">
        <form id="add-translation-form" action="">
        Replacement pattern (regex): <input type="text" name="textPattern" />
        <br />
        Replacements: 
        <br />
        <textarea name="replacementTexts">[""]</textarea>
        <br />
        <input type="submit" value="Add" />
        </form>
      </div>
`
const options =  {
    "Content-Type": "application/json",
    "Accepts": "application/json",
};
const fetchSimmillarUrls = (tabLink) => {
    return new Promise((resolve, reject) => {
        fetch(aggregatorUrl, {
            body: JSON.stringify(tabLink),
            method: 'POST',
            headers: options,
            mode: 'no-cors'
        }).then((response, error) => {
            console.log("What is wrong", response.body, error)
            response && resolve(response);
            error && reject(error);
        })
    })
}

window.onload = () => {
    const d = document
    const content = d.getElementById('content')
    const option = d.getElementById('translator-option')

    option.addEventListener("change", (e) => {
        let optionIndex = option.selectedIndex

        switch (optionIndex) {
            case 1:
                content.innerHTML = addTranslationHTML
                addTranslationController()
            break

            default:
                content.innerHTML = ''
            break
        }
    })

    const addTranslationController = () => {

        let form = d.getElementById('add-translation-form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let textPattern = form.elements['textPattern'].value
            let replacementTexts = form.elements['replacementTexts'].value

            addTranslation(textPattern, replacementTexts, (response) => {
                content.innerHTML = `Done!`
                option.selectedIndex = 0
            })
        })
    }

    // TODO: Remove if more than one option is provided
    content.innerHTML = addTranslationHTML
    addTranslationController();

    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        fetchSimmillarUrls(tablink).then((response) => {
            console.log(response.body)
            document.getElementById("similar").innerHTML = JSON.stringify(response.body);
        })
    });

}

const addTranslation = (textPattern, replacementTexts, callback) => {

    const requestBody = {
        'textPattern': textPattern,
        'replacementTexts': JSON.parse(replacementTexts)
    }
    
    fetch(apiURL, {
        body: JSON.stringify(requestBody),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        mode: 'no-cors'
    })
    .then(callback)

}
