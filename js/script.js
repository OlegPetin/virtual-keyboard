import Keyboard from './keyboard.js';
import langArr from "./lang.js";
const lang = JSON.parse(localStorage.getItem("lang")) || "en";

const keyboard = new Keyboard();

keyboard.createKeyboardWrapper(lang);

const textarea=document.querySelector("textarea");
let text="";  
document.onkeydown = function(event) {
  document.querySelector(`.keyboard_key.${event.code}`).classList.add('active');
  // console.log(event.key)
  text = event.key;
  switch (text) {
    case "Del":   
    case "Shift":
    case "Ctrl":
    case "Meta":
    case "Alt":      
    break;
    case "Enter":
      textarea.value += "\n";
      break;
    //   case "Backspace":
    //     textarea.value = text.slice(0,-1);
    // break;
      case "Tab":          
      textarea.value += "\t";
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
      case "Enter":
        textarea.value += "\n";
        break;
      // case "Space": 
      // console.log(this.text)
      //   textarea.value += 'ggggg';
        // break;
        case "Backspace":
          textarea.value = text.slice(0,-1);
      break;

        case "Tab":          
        textarea.value += "\t";
       break; 
      default:
        textarea.value += text;
    break;
    }
    document.querySelectorAll(".keyboard_key").forEach(function (elem){
      elem.classList.remove('active');
    });


  }
});

document.onkeyup = function(event) { 
  document.querySelector(`.keyboard_key.${event.code}`).classList.remove('active');     
}
