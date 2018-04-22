import data from "./data";
import {deBullshitifyArticle} from "./common";


const advertSelector = ".description"
window.onload = () => {
    deBullshitifyArticle(advertSelector);
}
