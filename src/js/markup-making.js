/*Функция формирования разметки галереи*/
const makeMarkup = (galleryRef,items) => {
    galleryRef.innerHTML = items.reduce((acc, { preview, original, description }) => {
        return acc + `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
            </li>`
    }, '');
};

export default makeMarkup;