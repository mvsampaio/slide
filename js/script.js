import Slide from "./modules/slide.js";

const slide = new Slide(".slide", ".wrapper");
slide.init().changeSlide(0).activePrevSlide();
