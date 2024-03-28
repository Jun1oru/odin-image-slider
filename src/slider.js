import { createSliderDom, addImageToSliderDom } from "./slider-dom";

const sliders = [];

class Slider {
  constructor(id) {
    this.id = id;
    this.index = sliders.length;
    this.images = [];
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
  console.log(sliders);
  return createSliderDom(id);
}

export function addImageToSlider(sliderIndex) {
  const image = new Image(sliderIndex);
  sliders[sliderIndex].images.push(image);
  if (sliders[sliderIndex].images.length === 1) {
    image.active = true;
  }
  return addImageToSliderDom(sliders[sliderIndex]);
}
