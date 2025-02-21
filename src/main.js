import { fetchImages } from "./js/pixabay-api.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

const lightbox = new SimpleLightbox("#gallery a");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  const images = await fetchImages(query);
  loader.classList.add("hidden");

  if (images.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
    });
    return;
  }

  renderImages(images);
  lightbox.refresh();
});

function renderImages(images) {
  const markup = images
    .map(
      (image) => `
        <a href="${image.largeImageURL}" class="gallery-item">
          <img src="${image.webformatURL}" alt="${image.tags}" />
          <div class="info">
            <p>❤️ ${image.likes} Likes</p>
            <p>👁️ ${image.views} Views</p>
            <p>💬 ${image.comments} Comments</p>
            <p>📥 ${image.downloads} Downloads</p>
          </div>
        </a>
      `
    )
    .join("");

  gallery.innerHTML = markup;
}
