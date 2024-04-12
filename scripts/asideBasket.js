import createTemplateBasket from "./createTemplateBasket.js";

export function buttonEventListeners(item){
    for(let j=1; j<=item.content.length; j++){
        let element = document.getElementById(`${j}`);
        element.addEventListener('click', () => {
            createTemplateBasket(item.content.filter(item => item.id==j), j);
        });
    }
}
