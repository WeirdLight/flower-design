import { createFragment } from "./fragments.js";
import setTotalPrice from "./totalPrice.js";
import itemsToBuy from './numOfItemsToBuy.js'
import { post, deleteRequest } from "./basketForServer.js";

export default function createTemplateBasket(parent){
    let container = document.getElementById('basket');
    try{
        let test = document.getElementById(`${parent[0].id}`);
        if(test == null) throw 'error';
        if(test){
            let count = test.querySelector('#countOfPosition');
            let countStr = count.innerHTML.split(':'); 
            let num = parseInt(countStr[1].trim()) + 1; 
            count.innerHTML = countStr[0] + ': ' + num;
            
            let price = test.querySelector('#price');
            let priceStr = price.innerHTML.split(':'); 
            price.innerHTML = priceStr[0] + ': ' + (parent[0].price * num) + ' грн';
            parent[0].amount++;
        }
    }
    catch{
        let article = `
        <div id='${parent[0].id}'>
            <img src="${parent[0].img}" alt="${parent[0].title}">
            <p id="positionTitle">${parent[0].title}: ${parent[0].description}</p>
            <p id="countOfPosition">К-сть: 1</p>
            <p id="price">Ціна: ${parent[0].price} грн</p>
            <img src="./images/menu/edit-delete-symbolic-icon-512x512-f5o2d9qt.png" id='delete${parent[0].id}' alt="delete">
        </div>
        `;
        let template = document.createDocumentFragment();
        template.appendChild(createFragment(article));
        let totalPrice = container.querySelector('#total-price');
        container.insertBefore(template, totalPrice);
        parent[0].amount = 1;
        let del = document.getElementById(`delete${parent[0].id}`);
        del.addEventListener('click', () => {
            let parentEl = del.parentNode;
            let grandparents = parentEl.parentNode;
            grandparents.removeChild(parentEl);
            deleteRequest(parent[0], parent[0].amount);
            itemsToBuy();
            setTotalPrice();
        });
    }
    post(parent[0], parent[0].amount);
    itemsToBuy();
    setTotalPrice();
}