import { createSliderDom, addImageToSliderDom } from "./slider-dom";

const sliders = [];

class Slider {
  constructor(id) {
    this.id = id;
    this.index = sliders.length;
    this.images = [];
    this.currentImage = -1;
    this.activeImage = function activeImage(imageId) {
      if (imageId > this.images.length) {
        return;
      }
      if (imageId === this.images.length) {
        this.images.forEach((image) => {
          image.active = false;
        });
        this.images[0].active = true;
        this.currentImage = 0;
      } else if (imageId < 0) {
        this.images.forEach((image) => {
          image.active = false;
        });
        this.images[this.images.length - 1].active = true;
        this.currentImage = this.images.length - 1;
      } else {
        this.images.forEach((image) => {
          image.active = false;
        });
        this.images[imageId].active = true;
        this.currentImage = imageId;
      }
    };
  }

  get id() {
    return super.id;
  }

  get index() {
    return super.index;
  }

  get images() {
    return super.images;
  }

  set id(id) {
    super.id = id;
  }

  set index(index) {
    super.index = index;
  }

  set images(images) {
    super.images = images;
  }
}

class Image {
  constructor(sliderIndex) {
    this.id = sliders[sliderIndex].images.length;
    this.active = false;
  }

  get id() {
    return super.id;
  }

  get active() {
    return super.active;
  }

  set id(id) {
    super.id = id;
  }

  set active(active) {
    super.active = active;
  }
}

export function createSlider(id) {
  const slider = new Slider(id);
  sliders.push(slider);
  return createSliderDom(slider);
}

export function addImageToSlider(sliderIndex, src) {
  const image = new Image(sliderIndex);
  sliders[sliderIndex].images.push(image);
  if (sliders[sliderIndex].images.length === 1) {
    sliders[sliderIndex].activeImage(0);
  }
  return addImageToSliderDom(sliders[sliderIndex], src);
}

export function nextImage(slider) {
  const sliderContainer = document.getElementById(slider.id);
  slider.activeImage(slider.currentImage + 1);
  const images = sliderContainer.querySelectorAll(".imageDiv");
  const imagesArr = Array.from(images);
  imagesArr.forEach((image) => {
    image.dataset.active = "false";
    image.dataset.slide = "";
  });
  imagesArr[slider.currentImage].dataset.active = "true";
  imagesArr[slider.currentImage].dataset.slide = "next";

  const imageDots = sliderContainer.querySelectorAll(".imageDot");
  const imageDotsArr = Array.from(imageDots);
  imageDotsArr.forEach((dot) => {
    dot.dataset.active = "false";
  });
  imageDotsArr[slider.currentImage].dataset.active = "true";
}
