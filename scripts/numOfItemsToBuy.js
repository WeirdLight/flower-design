export default function itemsToBuy(){
    let container = document.getElementById('basket');
    let oldNumOfItems = document.querySelector('#numOfItems');
    let array = container.querySelectorAll('#countOfPosition');
    let newArray = [], dop;
    array.forEach(item => {
        dop = item.innerHTML.split(':');
        newArray.push(parseFloat(dop[1].trim()));
    })
    let numOfItems = newArray.reduce((a, b) => a + b, 0);
    oldNumOfItems.innerHTML = numOfItems;
}