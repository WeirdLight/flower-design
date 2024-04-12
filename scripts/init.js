import { createContentTemplate } from "./fragments.js";
import { buttonEventListeners } from "./asideBasket.js";

export function init(item) {
    let url;
    if (item.containerId == 'section-catalog') {
        url = 'https://run.mocky.io/v3/ced24126-e530-48f5-bb23-68efa4a532d1';
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
        for (let j = ((item.circlesActive + 1) * item.numOfNewItems) - item.numOfNewItems; j < (item.circlesActive + 1) * item.numOfNewItems; j++) {
            if (data[j]) {
                fragment.appendChild(createContentTemplate(data[j], item.containerId));
            }
        }
        appendContent(fragment, item);
        });
}

function appendContent(content, item) {
    const element = document.getElementById(item.contentId);

    element.appendChild(content);

    if(item.containerId == 'section-catalog') buttonEventListeners(item);
}

function clearContent(id) {
    const element = document.getElementById(id);

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}