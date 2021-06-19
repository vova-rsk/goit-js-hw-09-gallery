import onModalElemsClick from './onModalElemsClick';
import onKeyboardPress from './onKeyboardPress';
import { modal , modalImage } from '../index';


/*Функция открытия модалки*/
const openModal = e => {
    modal.classList.add('is-open');
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.getAttribute('alt');
    
    modalImage.dataset.index = e.target.dataset.index;
    
    window.addEventListener('keydown', onKeyboardPress);
    modal.addEventListener('click', onModalElemsClick);
};

/*Функция закрытия модалки*/
const closeModal = () => {
    modal.classList.remove('is-open');
    modalImage.src = '';
    modalImage.alt = '';
    
    window.removeEventListener('keydown', onKeyboardPress);
    modal.removeEventListener('click', onModalElemsClick);
}

export { openModal, closeModal };