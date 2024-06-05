import { createContentTemplate } from "./fragments.js";
import { buttonEventListeners } from "./asideBasket.js";
import { makeFooter } from "./makeFooter.js";

export let reviewExport;

let counter = 0;
export function init(item) {
    let url;
    if (item.containerId == 'section-catalog') {
        url = 'https://62y6g.wiremockapi.cloud/catalog/1';
    }
    else {
        url = "https://dzdev.wiremockapi.cloud/json/flower";
    }
    fetch(url)
        .then(data => data.json())
        .then(data => {
            const fragment = document.createDocumentFragment();
            clearContent(item.contentId);
            item.content = data;
            for (var j = ((item.circlesActive + 1) * item.numOfNewItems) - item.numOfNewItems; j < (item.circlesActive + 1) * item.numOfNewItems; j++) {
                if (data[j]) {
                    fragment.appendChild(createContentTemplate(data[j], item.containerId));
                }
            }
            if (item.containerId == 'section-review') reviewExport = data;
            appendContent(fragment, item, j-5);

            if(counter<2){
                makeFooter(data, item);
                counter++;
            }
        });
}

function appendContent(content, item, j) {
    const element = document.getElementById(item.contentId);

    element.appendChild(content);

    if (item.containerId == 'section-catalog') buttonEventListeners(item, j);
}

function clearContent(id) {
    const element = document.getElementById(id);

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}