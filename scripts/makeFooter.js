export function makeFooter(data, item){
    let numOfCircles = data.length / item.numOfNewItems;
    let circleContainer = document.querySelector(`#${item.containerId}`);
    circleContainer.style.width = '80px';
    for (let i=0; i < numOfCircles; i++) {
        let circleFragment = `
        <span class="circle ${i == 0 ? 'active' : ''}"></span>
        `;

        let template = document.createElement('template');
        template.innerHTML = circleFragment;
        let back = document.querySelector(`#next-${item.containerId.replace('section-', '')}`);
        let parent = back.parentNode;
        parent.insertBefore(template.content, back);
        circleContainer.style.width = `${Number(circleContainer.style.width.replace('px', '')) + 15}px`;
    }
}