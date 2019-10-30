export const renderImage = (image) => {
    return /*html*/`
    
        <li title="${image.description}" class="gallery-item" style="background-image: url('${image.url}')">
            <div class="item-description">
                <h2 class="image-title">${image.title}</h2>
                <p>Horns: ${image.horns}</p>
            </div>
        </li>
    `;
};