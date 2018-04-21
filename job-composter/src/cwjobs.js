import data from "./data";
import {waitForElement} from "./common";

window.onload = () => {
   console.log("Window load debug");
   const promise = waitForElement(".job-description");
   promise.then(() => {
       console.log("element found");
       const advertText = document.querySelector('.job-description').textContent;

           console.log("analysing element ", advertText);
           const foundIt = data.getReplacements(advertText);
           if (foundIt) {
               console.log(foundIt);
           }
   });
};
