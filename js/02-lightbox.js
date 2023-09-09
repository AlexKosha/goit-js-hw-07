import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImages = createMarkupGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", onOpenModalClick);

const galleryModal = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function createMarkupGallery(images) {
  return images
    .map(
      ({ preview, description, original }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

function onOpenModalClick(evt) {
  evt.preventDefault();

  galleryModal.on("show.simplelightbox");

  galleryModal.on("close.simplelightbox");
}
