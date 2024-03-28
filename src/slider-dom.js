export function createSliderDom(id) {
  const sliderContainer = document.createElement("div");
  sliderContainer.id = id;
  sliderContainer.classList.add("sliderContainer");

  const imageFrame = document.createElement("div");
  imageFrame.classList.add("imageFrame");

  sliderContainer.appendChild(imageFrame);

  return sliderContainer;
}

export function addImageToSliderDom(slider) {
  const sliderDom = document.getElementById(slider.id);
  const imageFrame = sliderDom.querySelector(".imageFrame");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");
  imageDiv.dataset.active = slider.images[slider.images.length - 1].active;

  const image = document.createElement("p");
  image.classList.add("image");
  image.textContent = "Test";

  imageDiv.appendChild(image);
  return imageFrame.appendChild(imageDiv);
}
