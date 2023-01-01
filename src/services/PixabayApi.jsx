import axios from "axios";

export class PixabayApi {
  constructor() {
    this.page = 1;
    this.perPage = 12;
  }

  async axiosImages(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '30947996-96e9277b400b51ec4b69b5054';
    const searchParams = new URLSearchParams({
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: this.page,
    });

    const response = await axios.get(BASE_URL, { params: searchParams });
    this.incrementPage();
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  numberOfResponses() {
    return this.perPage;
  }
}


    


