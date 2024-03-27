import "./styles.css";

const body = document.querySelector("body");

const sliderContainer = document.createElement("div");
sliderContainer.classList.add("sliderContainer");

const imageFrame = document.createElement("div");
imageFrame.classList.add("imageFrame");

const image = document.createElement("p");
image.classList.add("image");
image.textContent = "Test";

const secondImage = document.createElement("p");
secondImage.classList.add("image");
secondImage.textContent = "Test 2";
secondImage.dataset.active = "false";

imageFrame.appendChild(image);
imageFrame.appendChild(secondImage);

sliderContainer.appendChild(imageFrame);

body.appendChild(sliderContainer);

window.myFunctionNext = function next() {};
