import { modalImage } from '../index';

/*Функция смены картинки в модалке*/
const changeImage = target => {
    modalImage.src= target.dataset.source;
    modalImage.alt = target.getAttribute('alt');
    modalImage.dataset.index = target.dataset.index;
};
 
export default changeImage;