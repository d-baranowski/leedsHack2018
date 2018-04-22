import { deBullshitifyArticle } from "./common";

const advertSelector = ".job-description";
window.onload = () => {
    deBullshitifyArticle(advertSelector);
};
