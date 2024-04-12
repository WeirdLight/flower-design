export default function sendNewComment(){
    const sendReview = document.getElementById('new-review');
    const visitorsName = document.getElementById('name');
    const visitorsOpinion = document.getElementById('new-opinion');

    sendReview.addEventListener('click', () => {
        let date = new Date();
        fetch('https://dzdev.wiremockapi.cloud/json/flower', {
            method: 'POST',
            body: JSON.stringify({
                "id": review.length+1,
                "name": visitorsName.value,
                "date": `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
                "img": "none",
                "description": visitorsOpinion.value
            })
        });
    });
}