export function createContentTemplate(content, id) {
    let article;
    if (id == 'section-catalog') {
        article = `
            <span>
                <img src=${content.img} alt=${content.title}>
                <p id='title'>${content.title}:</br>${content.description}</p>
                <p id='productPrice'>${content.price} грн</p>
                <button id='${content.id}' class="button1">В кошик</button>
            </span>
            `;
    }
    else if (id == 'section-review') {
        article = `                
                <div class='opinion-container'>
                    <div class="opinion">
                        <span class='review-img' style="background: no-repeat url('${content.img}') center center; background-size: cover;"></span>
                        <span class="text">
                            <p class="description">“${content.description}”
                            </p>
                                <span class="hr"></span>
                            <p>${content.name}  ${content.date}</p>
                        </span>
                    </div>
                </div>
            `;
    }
    return createFragment(article);
}

export function createFragment(content) {
    const template = document.createElement('template');
    template.innerHTML = content;

    return template.content;
}