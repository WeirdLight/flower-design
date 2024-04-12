import { init } from "./init.js";

export function setEventListeners(item){
    for (let i = 0; i < item.children.length; i++) {
        let child = item.children[i];
        child.addEventListener('click', () => {
            footerAction(child, item);
        });
    }
    }

const footerAction = (child, item) => {
    item.circles[item.circlesActive].classList.remove('active');
    if (child.id.includes('next')) {
        item.circlesActive = item.circlesActive == item.circlesActive.length - 1 ? 0 : item.content[(item.circlesActive + 1) * item.numOfNewItems] ? item.circlesActive + 1 : item.circlesActive;
    }
    else if (child.id.includes('back')) {
        item.circlesActive = item.circlesActive == 0 ? item.content[(item.circlesActive.length - 1) * item.numOfNewItems] ? item.circlesActive.length - 1 : item.circlesActive : item.circlesActive - 1;
    }
    else {
        item.circlesActive = item.content[(i - 1) * item.numOfNewItems] ? i - 1 : item.circlesActive;
    }
    item.circles[item.circlesActive].classList.add('active');
    init(item);
};