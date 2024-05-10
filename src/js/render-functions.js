export function getLoader(text) {
  const loader = document.createElement('div');
  loader.textContent = text;
  loader.classList.add('loader');

  return loader;
}

export function getImagesEl(imagesList) {
  return imagesList.reduce((string, element) => {
    string += getImageEl(element);
    return string;
  }, '');
}

function getImageEl(image) {
  const {
    webformatURL: previewSrc,
    largeImageURL: originalSrc,
    tags: alt,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
    <div class="image">
      <a class="image-link" href="${originalSrc}">
        <div class="image-photo-wrap"><img class="image-photo" src="${previewSrc}" data-source="${originalSrc}" alt="${alt}"/></div>
        <div class="image-data">
          <div class="image-data-item image-data-item-likes"><div class="image-data-item-label">Likes</div><div class="image-data-item-number">${likes}</div></div>
          <div class="image-data-item image-data-item-views"><div class="image-data-item-label">Views</div><div class="image-data-item-number">${views}</div></div>
          <div class="image-data-item image-data-item-comments"><div class="image-data-item-label">Comments</div><div class="image-data-item-number">${comments}</div></div>
          <div class="image-data-item image-data-item-downloads"><div class="image-data-item-label">Downloads</div><div class="image-data-item-number">${downloads}</div></div>
      </div>
      </a>
    </div>
  `;
}