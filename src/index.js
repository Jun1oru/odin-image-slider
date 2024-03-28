import "./styles.css";
import { createSlider, addImageToSlider } from "./slider";

const body = document.querySelector("body");
body.appendChild(createSlider("test"));
addImageToSlider(0);
addImageToSlider(0);

// body.appendChild(createSlider("test2"));

window.myFunctionNext = function next() {};
