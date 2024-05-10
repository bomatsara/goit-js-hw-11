import { MASSAGES, iziToastOptions } from './options.js';
import { getImagesEl } from './render-functions.js';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

let lightbox;

function fetchPixabay(searchString, options = {}) {
  const params = new URLSearchParams({
    key: '43799735-9794f2fe47020c8ff64ba54b4',
    q: searchString,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const { loaderEl, imagesEl } = options;

  const url = `https://pixabay.com/api/?${params}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw MASSAGES.request_error;
      }

      return response.json();
    })
    .then(images => {
      if (images.total < 1) {
        iziToast.error(iziToastOptions.error_no_data);
        loaderEl.remove();
        return;
      }

      imagesEl.innerHTML = getImagesEl(images.hits);
      loaderEl.remove();

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('#images .image-link', {
          captions: true,
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      iziToast.error(iziToastOptions.request_error);
      loaderEl.remove();
    });
}

export default fetchPixabay;