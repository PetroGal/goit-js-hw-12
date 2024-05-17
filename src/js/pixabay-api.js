import axios from 'axios';
import { createGalleryItemMarkup } from './render-functions';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const myApiKey = '43776865-31502832095c6a436255fe0a5';

export const fetchPhotosByQuery = async (searchQuery, page) => {
  const response = await axios.get('/', {
    params: {
      key: myApiKey,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });

  return response.data;
};
