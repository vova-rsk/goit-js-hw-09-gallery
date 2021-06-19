import './sass/main.scss';
import galleryItems from './js/gallery-items';
import makeMarkup from './js/markup-making';
import onGalleryItemClick from './js/onGalleryItemClick';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalImage = modal.querySelector('.lightbox__image');
// let activeImage;

export { gallery, modal, modalImage };
    


makeMarkup(gallery,galleryItems);
gallery.addEventListener('click', onGalleryItemClick);