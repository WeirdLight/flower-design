export function post(item, amount){
    if(amount>1){
        fetch('https://dzdev.wiremockapi.cloud/json/flower', {
            method: 'DELETE',
            body: JSON.stringify({
                "id": item.id,
                "title": item.title,
                "price": item.price*(amount-1),
                "amount": amount-1
            })
        });
    }
    fetch('https://dzdev.wiremockapi.cloud/json/flower', {
        method: 'POST',
        body: JSON.stringify({
            "id": item.id,
            "title": item.title,
            "price": item.price*amount,
            "amount": amount
        })
    });
}
export function deleteRequest(item, amount){
    fetch('https://dzdev.wiremockapi.cloud/json/flower', {
        method: 'DELETE',
        body: JSON.stringify({
            "id": item.id,
            "title": item.title,
            "price": item.price*amount,
            "amount": amount
        })
    });
}