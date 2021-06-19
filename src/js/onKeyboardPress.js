import { closeModal } from './modal-state-changing';
import changeImage from './image-changing';


/*Функция-обработчик нажатия клавиши клавиатуры*/
const onKeyboardPress = e => {
    if (e.code === 'Escape') {
        closeModal();
        return;
    }

    // if (e.code === 'ArrowLeft') {
    //     const previousSiblingBranch = activeImage.closest('li').previousElementSibling;

    //     if (previousSiblingBranch) {
    //         const previousImage = previousSiblingBranch.querySelector('.gallery__image');
    //         changeImage(previousImage);
    //     }
    //     return;
    // }

    // if (e.code === 'ArrowRight') {
    //     const nextSiblingBranch = activeImage.closest('li').nextElementSibling;

    //     if (nextSiblingBranch) {
    //         const nextImage = nextSiblingBranch.querySelector('.gallery__image');
    //         changeImage(nextImage);
    //     }
    //     return;
    // }
};

export default onKeyboardPress;