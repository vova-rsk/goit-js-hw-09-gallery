import { modalImage } from '../index';

/*Функция смены картинки в модалке*/
const changeImage = target => {
    modalImage.src= target.dataset.source;
    modalImage.alt = target.getAttribute('alt');
    // activeImage = target;
};
 
export default changeImage;