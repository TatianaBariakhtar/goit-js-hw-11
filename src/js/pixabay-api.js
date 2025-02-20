import axios from "axios";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error("Помилка при отриманні зображень:", error);
    return [];
  }
}

