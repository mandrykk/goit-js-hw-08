// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryElem = document.querySelector('.gallery');

galleryElem.addEventListener( 'click', e => {
    e.preventDefault();
}, false);


function galleryPattern(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join("");
    galleryElem.insertAdjacentHTML('beforeend', markup);

};

galleryPattern();


const lightbox = new SimpleLightbox('.gallery a', {
        captionData: "alt",
        captionDelay: 250
    });
lightbox.on("show.simplelightbox");

console.log(galleryItems);
