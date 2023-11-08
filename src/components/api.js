import axios from 'axios';

const API_KEY = '35881420-2d2d98e14b45a58eae8e32dce';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (serchValue, page) => {
  const response = await axios.get(
    `/?q=${serchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
