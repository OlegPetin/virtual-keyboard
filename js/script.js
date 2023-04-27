import Keyboard from './keyboard.js';
const lang = JSON.parse(localStorage.getItem("lang")) || "en";

const keyboard = new Keyboard();

keyboard.createKeyboardWrapper(lang);
