export  default function setTotalPrice(){
    let container = document.getElementById('basket');
    let containerTotalPrice = container.querySelector('#total-price');
    let totalPriceStr = containerTotalPrice.innerHTML.split(':');
    let array = container.querySelectorAll('#price');
    let newArray = [];
    let dop;
    array.forEach(item => {
        dop = item.innerHTML.split(':');
        newArray.push(parseFloat(dop[1].replace('грн', '').trim()));
    });
    let newTotalPrice = newArray.reduce((a, b) => a + b, 0);
        containerTotalPrice.innerHTML = totalPriceStr[0] + ': ' + newTotalPrice + ' грн';
}