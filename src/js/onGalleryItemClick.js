import { openModal } from './modal-state-changing';

/*Функция-обработчик клика на елемент галереи*/
const onGalleryItemClick = e => {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    openModal(e);
};

export default onGalleryItemClick;