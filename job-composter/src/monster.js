import data from "./data";
import {deBullshitifyArticle} from "./common";

const advertSelector = "#JobDescription"
window.onload = () => {
    deBullshitifyArticle(advertSelector);
};