import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImages = createMarkupGallery(galleryItems);

let instance = null;

gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", onOpenModalClick);

gallery.addEventListener("keydown", onCloseModalClick);

function createMarkupGallery(images) {
  return images
    .map(
      ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function onOpenModalClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    const imageSrc = evt.target.getAttribute("data-source");
    console.log(imageSrc);
    const description = evt.target.getAttribute("alt");

    instance = basicLightbox.create(
      `<div class = "modal"></div><img src="${imageSrc}" alt="${description} "/></div>`
    );

    instance.show();
  }
}

function onCloseModalClick(evt) {
  evt.preventDefault();
  if (evt.code === "Escape" && basicLightbox.visible()) {
    instance.close();
  }
}
