import { nextImage } from "./slider";

let interval = false;

export function createSliderDom(slider) {
  const sliderContainer = document.createElement("div");
  sliderContainer.id = slider.id;
  sliderContainer.classList.add("sliderContainer");

  const imageFrame = document.createElement("div");
  imageFrame.classList.add("imageFrame");

  const nextButton = document.createElement("div");
  nextButton.classList.add("sliderButton");
  nextButton.id = "nextButton";
  nextButton.addEventListener("click", () => {
    nextImage(slider);
  });

  const prevButton = document.createElement("div");
  prevButton.classList.add("sliderButton");
  prevButton.id = "prevButton";
  prevButton.addEventListener("click", () => {
    slider.activeImage(slider.currentImage - 1);

    const images = sliderContainer.querySelectorAll(".imageDiv");
    const imagesArr = Array.from(images);
    imagesArr.forEach((image) => {
      image.dataset.active = "false";
    });
    imagesArr[slider.currentImage].dataset.active = "true";

    const imageDots = sliderContainer.querySelectorAll(".imageDot");
    const imageDotsArr = Array.from(imageDots);
    imageDotsArr.forEach((dot) => {
      dot.dataset.active = "false";
    });
    imageDotsArr[slider.currentImage].dataset.active = "true";
  });

  const sliderNav = document.createElement("div");
  sliderNav.classList.add("sliderNav");

  sliderContainer.appendChild(imageFrame);
  sliderContainer.appendChild(prevButton);
  sliderContainer.appendChild(nextButton);
  sliderContainer.appendChild(sliderNav);

  return sliderContainer;
}

export function addImageToSliderDom(slider, src) {
  const imageIndex = slider.images.length - 1;
  if (imageIndex !== 0) {
    if (interval !== false) {
      clearInterval(interval);
    }
    interval = setInterval(nextImage, 5000, slider);
  }
  const sliderDom = document.getElementById(slider.id);
  const imageFrame = sliderDom.querySelector(".imageFrame");
  const sliderNav = sliderDom.querySelector(".sliderNav");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");
  imageDiv.dataset.active = slider.images[imageIndex].active;

  const image = document.createElement("img");
  image.classList.add("image");
  image.src = `${src}`;

  imageDiv.appendChild(image);
  imageFrame.appendChild(imageDiv);

  const imageDot = document.createElement("div");
  imageDot.classList.add("imageDot");
  imageDot.dataset.active = slider.images[imageIndex].active;
  imageDot.addEventListener("click", () => {
    slider.activeImage(imageIndex);

    const images = sliderDom.querySelectorAll(".imageDiv");
    const imagesArr = Array.from(images);
    imagesArr.forEach((image) => {
      image.dataset.active = "false";
    });
    imagesArr[slider.currentImage].dataset.active = "true";

    const imageDots = sliderDom.querySelectorAll(".imageDot");
    const imageDotsArr = Array.from(imageDots);
    imageDotsArr.forEach((dot) => {
      dot.dataset.active = "false";
    });
    imageDotsArr[slider.currentImage].dataset.active = "true";
  });

  return sliderNav.appendChild(imageDot);
}
