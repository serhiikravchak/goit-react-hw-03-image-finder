import axios from "axios";

export const perPage = 12;

export const axiosImages = async (query) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '30947996-96e9277b400b51ec4b69b5054';
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: 1,
  });
  
  const response = await axios.get(BASE_URL, { params: searchParams });
  console.log(response.data);
  return response.data;
};




    


