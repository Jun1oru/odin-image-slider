import "./styles.css";
import { createSlider, addImageToSlider } from "./slider";
import chameleon from "./assets/images/chameleon.jpeg";
import tree from "./assets/images/tree.jpeg";
import space from "./assets/images/space.jpeg";

const body = document.querySelector("body");
body.appendChild(createSlider("mySlider"));
addImageToSlider(0, chameleon);
addImageToSlider(0, tree);
addImageToSlider(0, space);
