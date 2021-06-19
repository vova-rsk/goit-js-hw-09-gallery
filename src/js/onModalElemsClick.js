import { closeModal } from './modal-state-changing';

/*Функция-обработчик клика на кнопку закрытия или пустую площадь модалки*/
const onModalElemsClick = e => {
    const isCloseButton= e.target.dataset.action === 'close-lightbox';
    const isModalArea = e.target.classList.contains('lightbox__overlay');
   
    if (!isCloseButton && !isModalArea){
        return;
    }

    closeModal();
};

export default onModalElemsClick;