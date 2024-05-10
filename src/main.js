import { MASSAGES } from './js/options.js';
import { getLoader } from './js/render-functions.js';
import fetchPixabay from './js/pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener('DOMContentLoaded', event => {
  const formEl = document.querySelector('#search-form');
  const loaderEl = getLoader(MASSAGES.loading);
  const imagesEl = document.querySelector('#images');

  formEl.addEventListener('submit', event => {
    event.preventDefault();
    const searchString = formEl.querySelector('input[name="search"]').value;
    imagesEl.innerHTML = '';
    formEl.after(loaderEl);

    fetchPixabay(searchString, {
      loaderEl: loaderEl,
      imagesEl: imagesEl,
    });

    formEl.reset();
  });
});