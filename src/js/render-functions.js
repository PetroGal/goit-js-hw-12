export const createGalleryItemMarkup = galleryItems => {
  return galleryItems
    .map(
      ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
   <a class="gallery-link" href="${largeImageURL}">
    <img
    id=${id}
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
   
    </a>
    <div class="image-properties">
      <div class="property-item">
        <h3 class="image-property-title">Likes</h3>
        <p class="image-property-data">${likes}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Views</h3>
        <p class="image-property-data">${views}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Comments</h3>
        <p class="image-property-data">${comments}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Downloads</h3>
        <p class="image-property-data">${downloads}</p>
      </div>
    </div>
 </li>`
    )
    .join('');
};
