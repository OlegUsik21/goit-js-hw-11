import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { galleryTemplate, showLoader, hideLoader } from "./js/render-functions";

const message ='Sorry, there are no images matching your search query. Please, try again!';

const lightBox = new SimpleLightbox('.gallery a', {});

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    gallery.innerHTML = "";
    showLoader();
    getImages(form.elements.search.value.trim())
        .then(data => {
            if (data.hits.length === 0) iziToast.show({message});
            const markup = galleryTemplate(data.hits);
            gallery.innerHTML = markup;
            lightBox.refresh();
        })
        .catch(error => console.log(error))
        .finally(() => { hideLoader() });
}