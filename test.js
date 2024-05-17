import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryItemMarkup } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
let galleryEl = document.querySelector('.gallery');
const moreBtnEl = document.querySelector('.more-btn');

let total = 0;
let imageCurrentPage = 1;
let per_page = 15;
let searchQuery = '';

moreBtnEl.addEventListener('click', handleMoreBtn);

async function handleMoreBtn(event) {
  event.preventDefault();
  imageCurrentPage += 1;

  let totalPages = Math.ceil(total / per_page);

  try {
    await fetchPhotosByQuery(searchQuery, imageCurrentPage)
      .then(data => {
        galleryEl.innerHTML += createGalleryItemMarkup(data.hits);
        lightbox.refresh();
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }

  if (imageCurrentPage >= totalPages) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
    moreBtnEl.classList.add('is-hidden');
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const handleSubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.search.value.trim();

  if (searchQuery.trim() === '') {
    galleryEl.innerHTML = '';
    iziToast.show({
      message: 'Input field can not be empty',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
    form.reset();
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  moreBtnEl.classList.remove('is-hidden');

  const { total, hits } = await fetchPhotosByQuery(
    searchQuery,
    imageCurrentPage
  )
    .then(({ hits, total }) => {
      if (total === 0) {
        iziToast.show({
          message: 'Sorry, there are no images for this query',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });
      }

      galleryEl.insertAdjacentHTML('beforeend', createGalleryItemMarkup(hits));
      lightbox.refresh();
      form.reset();
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      //event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
};

searchFormEl.addEventListener('submit', handleSubmit);
