import SlideNav from "./modules/slide.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init().addArrow(".prev", ".next").addControl(".custom-controls");
