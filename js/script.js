import Keyboard from './keyboard.js';
import langArr from "./lang.js";
const lang = JSON.parse(localStorage.getItem("lang")) || "en";

const keyboard = new Keyboard();

keyboard.createKeyboardWrapper(lang);

const textarea=document.querySelector("textarea");
let text="";  


document.onkeydown = function(event) {
  document.querySelector(`.keyboard_key.${event.code}`).classList.add('active');
  console.log(event.key)
  text = event.key;
  switch (text) {
    case "Del":   
    case "Shift":
    case "Ctrl":
    case "Meta":
    case "Alt":            
    break;
    default:
      textarea.value += text;
  break;
  }

}
document.querySelectorAll(".keyboard_key").forEach(function(elem) {
  elem.onclick = function (event) {
    document.querySelectorAll(".keyboard_key").forEach(function (elem){
      elem.classList.remove('active');
    });
    this.classList.add('active');
    text = this.innerText;
    switch (text) {
      case "Del":   
      case "Shift":
      case "Ctrl":
      case "Meta":
      case "Alt":            
      break;
      case "Space": 
        textarea.value += ' ';
      default:
        textarea.value += text;
    break;
    }
    document.querySelectorAll(".keyboard_key").forEach(function (elem){
      elem.classList.remove('active');
    });


  }
});

// document.onclick = function(event) {
//   // document.querySelector(`.keyboard_key.${event.code}`).classList.add('active');
//   console.log(event.key)
//   let text="";  
//   text = event.key;
//   switch (text) {
//     case "Del":   
//     case "Shift":
//     case "Ctrl":
//     case "Meta":q
//     case "Alt":            
//     break;
//     default:
//       textarea.value += text;
//   break;
//   }

// }



document.onkeyup = function(event) { 
  document.querySelector(`.keyboard_key.${event.code}`).classList.remove('active');     
}
