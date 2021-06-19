import { closeModal } from './modal-state-changing';
import changeImage from './image-changing';
import { gallery, modalImage } from '../index';

/*Функция-обработчик нажатия клавиши клавиатуры*/
const onKeyboardPress = e => {
    if (e.code === 'Escape') {
        closeModal();
        return;
    }

    const index = Number(modalImage.dataset.index);
    
    if (e.code === 'ArrowLeft') {
        
        if (index > 0) {
            const previousImage = gallery.querySelector(`[data-index="${index - 1}"]`);
            changeImage(previousImage);
        }
        return;
    }
    
    if (e.code === 'ArrowRight') {
        if (index < gallery.children.length - 1) {
            const nextImage = gallery.querySelector(`[data-index="${index + 1}"]`);
            changeImage(nextImage);
        }
        return;
    }
};

export default onKeyboardPress;