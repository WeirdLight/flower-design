import createTemplateBasket from "./createTemplateBasket.js";

export function buttonEventListeners(item, firstEl){
    for(let j=firstEl; j<=firstEl+5; j++){
        let element = document.getElementById(`${j}`);
        element.addEventListener('click', () => {
            createTemplateBasket(item.content.filter(item => item.id==j), j);
        });
    }
}
