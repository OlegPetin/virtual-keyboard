// import langArr from "./lang.js";
// let h1 = document.createElement('h1');
// h1.className = "text-center";
// h1.innerHTML = "RSS Virtual Keyboard";
// document.body.append(h1);
// let div = document.createElement('div');
// div.id = "keyboard";
// document.body.append(div);

// let keyboard = [];
// document.onkeydown = function(event) {
//     console.log(event);
//     keyboard.push(event.code);
//     console.log(keyboard);
// }
// function init() {

// }
const lang = JSON.parse(localStorage.getItem("lang")) || "en";
const langArr = {
  en : {
      "Backquote" : {
          small: '`',
          big: '~',
      },
      "Digit1" : {
          small: '1',
          big: '!',
      },
      "Digit2" : {
          small: '2',
          big: '@',
      },
      "Digit3" : {
          small: '3',
          big: '#',
      },
      "Digit4" : {
          small: '4',
          big: '$',
      },
      "Digit5" : {
          small: '5',
          big: '%',
      },
      "Digit6" : {
          small: '6',
          big: '^',
      },
      "Digit7" : {
          small: '7',
          big: '&',
      },
      "Digit8" : {
          small: '8',
          big: '*',
      },
      "Digit9" : {
          small: '9',
          big: '(',
      },
      "Digit0" : {
          small: '0',
          big: ')',
      },
      "Minus" : {
          small: '-',
          big: '_',
      },
      "Equal" : {
          small: '=',
          big: '+',
      },
      "Backspace" : {
          small: 'Backspace',
          big: null,
      },
      "Tab" : {
          small: 'Tab',
          big: null,
      },
      "KeyQ" : {
          small: 'q',
          big: 'Q',
      },
      "KeyW" : {
          small: 'w',
          big: 'W',
      },
      "KeyE" : {
          small: 'e',
          big: 'E',
      },
      "KeyR" : {
          small: 'r',
          big: 'R',
      },
      "KeyT" :  {
          small: 't',
          big: 'T',
      },
      "KeyY" :  {
          small: 'y',
          big: 'Y',
      },
      "KeyU" :  {
          small: 'u',
          big: 'U',
      },
      "KeyI" :  {
          small: 'i',
          big: 'I',
      },
      "KeyO" :  {
          small: 'o',
          big: 'O',
      },
      "KeyP" :  {
          small: 'p',
          big: 'P',
      },
      "BracketLeft" :  {
          small: '[',
          big: '{',
      },
      "BracketRight" :  {
          small: ']',
          big: '}',
      },
      "Backslash" :  {
          small: '\\',
          big: '|',
      },
      "Delete" :  {
          small: 'Del',
          big: null,
      },
      "CapsLock" :  {
          small: 'CapsLock',
          big: 'CapsLock',
      },
      "KeyA" :  {
          small: 'a',
          big: 'A',
      },
      "KeyS" :  {
          small: 's',
          big: 'S',
      },
      "KeyD" :  {
          small: 'd',
          big: 'D',
      },
      "KeyF" :  {
          small: 'f',
          big: 'F',
      },
      "KeyG" : {
          small: 'g',
          big: 'G',
      },
      "KeyH" :  {
          small: 'h',
          big: 'H',
      },
      "KeyJ" :  {
          small: 'j',
          big: 'J',
      },
      "KeyK" :  {
          small: 'k',
          big: 'K',
      },
      "KeyL" :  {
          small: 'l',
          big: 'L',
      },
      "Semicolon" :  {
          small: ';',
          big: ':',
      },
      "Quote" :  {
          small: '\'',
          big: '"',
      },
      "Enter" :  {
          small: 'Enter',
          big: null,
      },
      "ShiftLeft" :  {
          small: 'Shift',
          big: null,
      },

      "KeyZ" : {
          small: 'z',
          big: 'Z',
      },
      "KeyX" : {
          small: 'x',
          big: 'X',
      },
      "KeyC" : {
          small: 'c',
          big: 'C',
      },
      "KeyV" : {
          small: 'v',
          big: 'V',
      },
      "KeyB" : {
          small: 'b',
          big: 'B',
      },
      "KeyN" : {
          small: 'n',
          big: 'N',
      },
      "KeyM" : {
          small: 'm',
          big: 'M',
      },
      "Comma" : {
          small: ',',
          big: '<',
      },
      "Period" : {
          small: '.',
          big: '>',
      },
      "Slash" : {
          small: '/',
          big: '?',
      },
      "ArrowUp" : {
          small: '▲',
          big: '▲',
      },
      "ShiftRight" : {
          small: 'Shift',
          big: null,
      },
      "ControlLeft" : {
          small: 'Ctrl',
          big: null,
      },
      "MetaLeft" : {
          small: 'Win',
          big: null,
      },
      "AltLeft" : {
          small: 'Alt',
          big: null,
      },
      "Space" : {
          small: ' ',
          big: ' ',
      },
      "AltRight" : {
          small: 'Alt',
          big: null,
      },
      "ArrowLeft" : {
          small: '◄',
          big: '◄',
      },
      "ArrowDown" : {
          small: '▼',
          big: '▼',
      },
      "ArrowRight" : {
          small: '►',
          big: '►',
      },
      "ControlRight" : {
          small: 'Ctrl',
          big: null,
      },
      "IntlBackslash" : {
        small: '\\',
        big: null,
      },
      
  },
  ru : {
    "IntlBackslash" : {
      small: '\\',
      big: null,
    },
      "Backquote" : {
          small: 'ё',
          big: 'Ё',
      },
      "Digit1" : {
          small: '1',
          big: '!',
      },
      "Digit2" : {
          small: '2',
          big: '"',
      },
      "Digit3" : {
          small: '3',
          big: '№',
      },
      "Digit4" : {
          small: '4',
          big: ';',
      },
      "Digit5" : {
          small: '5',
          big: '%',
      },
      "Digit6" : {
          small: '6',
          big: ':',
      },
      "Digit7" : {
          small: '7',
          big: '?',
      },
      "Digit8" : {
          small: '8',
          big: '*',
      },
      "Digit9" : {
          small: '9',
          big: '(',
      },
      "Digit0" : {
          small: '0',
          big: ')',
      },
      "Minus" : {
          small: '-',
          big: '_',
      },
      "Equal" : {
          small: '=',
          big: '+',
      },
      "Backspace" : {
          small: 'Backspace',
          big: null,
      },
      "Tab" : {
          small: 'Tab',
          big: null,
      },
      "KeyQ" : {
          small: 'й',
          big: 'Й',
      },
      "KeyW" : {
          small: 'ц',
          big: 'Ц',
      },
      "KeyE" : {
          small: 'у',
          big: 'У',
      },
      "KeyR" : {
          small: 'к',
          big: 'К',
      },
      "KeyT" :  {
          small: 'е',
          big: 'Е',
      },
      "KeyY" :  {
          small: 'н',
          big: 'Н',
      },
      "KeyU" :  {
          small: 'г',
          big: 'Г',
      },
      "KeyI" :  {
          small: 'ш',
          big: 'Ш',
      },
      "KeyO" :  {
          small: 'щ',
          big: 'Щ',
      },
      "KeyP" :  {
          small: 'з',
          big: 'З',
      },
      "BracketLeft" :  {
          small: 'х',
          big: 'Х',
      },
      "BracketRight" :  {
          small: 'ъ',
          big: 'Ъ',
      },
      "Backslash" :  {
          small: '\\',
          big: '/',
      },
      "Delete" :  {
          small: 'Del',
          big: null,
      },
      "CapsLock" :  {
          small: 'CapsLock',
          big: 'CapsLock',
      },
      "KeyA" :  {
          small: 'ф',
          big: 'Ф',
      },
      "KeyS" :  {
          small: 'ы',
          big: 'Ы',
      },
      "KeyD" :  {
          small: 'в',
          big: 'В',
      },
      "KeyF" :  {
          small: 'а',
          big: 'А',
      },
      "KeyG" : {
          small: 'п',
          big: 'П',
      },
      "KeyH" :  {
          small: 'р',
          big: 'Р',
      },
      "KeyJ" :  {
          small: 'о',
          big: 'О',
      },
      "KeyK" :  {
          small: 'л',
          big: 'Л',
      },
      "KeyL" :  {
          small: 'д',
          big: 'Д',
      },
      "Semicolon" :  {
          small: 'ж',
          big: 'Ж',
      },
      "Quote" :  {
          small: 'э',
          big: 'Э',
      },
      "Enter" :  {
          small: 'Enter',
          big: null,
      },
      "ShiftLeft" :  {
          small: 'Shift',
          big: null,
      },
      "KeyZ" : {
          small: 'я',
          big: 'Я',
      },
      "KeyX" : {
          small: 'ч',
          big: 'Ч',
      },
      "KeyC" : {
          small: 'с',
          big: 'С',
      },
      "KeyV" : {
          small: 'м',
          big: 'М',
      },
      "KeyB" : {
          small: 'и',
          big: 'И',
      },
      "KeyN" : {
          small: 'т',
          big: 'Т',
      },
      "KeyM" : {
          small: 'ь',
          big: 'Ь',
      },
      "Comma" : {
          small: 'б',
          big: 'Б',
      },
      "Period" : {
          small: 'ю',
          big: 'Ю',
      },
      "Slash" : {
          small: '.',
          big: ',',
      },
      "ArrowUp" : {
          small: '▲',
          big: '▲',
      },
      "ShiftRight" : {
          small: 'Shift',
          big: null,
      },
      "ControlLeft" : {
          small: 'Ctrl',
          big: null,
      },
      "MetaLeft" : {
          small: 'Win',
          big: null,
      },
      "AltLeft" : {
          small: 'Alt',
          big: null,
      },
      "Space" : {
          small: ' ',
          big: ' ',
      },
      "AltRight" : {
          small: 'Alt',
          big: null,
      },
      "ArrowLeft" : {
          small: '◄',
          big: '◄',
      },
      "ArrowDown" : {
          small: '▼',
          big: '▼',
      },
      "ArrowRight" : {
          small: '►',
          big: '►',
      },
      "ControlRight" : {
          small: 'Ctrl',
          big: null,
      },
  }
}

class Keyboard {
    constructor() {
        this.keys = [
            [
                'Backquote',
                 'Digit1', 
                 'Digit2', 
                 'Digit3', 
                 'Digit4', 
                 'Digit5', 
                 'Digit6', 
                 'Digit7', 
                 'Digit8', 
                 'Digit9', 
                 'Digit0', 
                 'Minus', 
                 'Equal', 
                 'Backspace'
                ],
                [
                'Tab', 
                'KeyQ', 
                'KeyW', 
                'KeyE', 
                'KeyR', 
                'KeyT', 
                'KeyY', 
                'KeyU', 
                'KeyI', 
                'KeyO', 
                'KeyP', 
                'BracketLeft', 
                'BracketRight', 
                'Backslash', 
                'Delete'
                ],
                [
                'CapsLock', 
                'KeyA', 
                'KeyS', 
                'KeyD', 
                'KeyF', 
                'KeyG', 
                'KeyH', 
                'KeyJ', 
                'KeyK', 
                'KeyL', 
                'Semicolon', 
                'Quote', 
                'Enter'
                ],
                [
                'ShiftLeft', 
                'IntlBackslash', 
                'KeyZ', 
                'KeyX', 
                'KeyC', 
                'KeyV', 
                'KeyB', 
                'KeyN', 
                'KeyM', 
                'Comma', 
                'Period', 
                'Slash', 
                'ArrowUp', 
                'ShiftRight'
                ],
                [
                'ControlLeft', 
                'MetaLeft', 
                'AltLeft', 
                'Space', 
                'AltRight', 
                'ControlRight', 
                'ArrowLeft', 
                'ArrowDown', 
                'ArrowRight'
                ]

        ];
        this.isCaps = false;
    }

    createKeyboardWrapper(lang) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");      
      document.body.append(wrapper);    

      const title = document.createElement("h1");
      title.className = "text-center";
      title.textContent = "RSS Virtual Keyboard";
      wrapper.append(title);

      const textarea = document.createElement("textarea");
      textarea.classList.add("textarea");
      wrapper.append(textarea);

      const keyboard = document.createElement("div");
      keyboard.classList.add("keyboard");
      keyboard.setAttribute('data-lang',lang);
      wrapper.append(keyboard);

      const keyboardWrapper = this.createKeyboard(langArr[lang]);
      keyboard.append(keyboardWrapper);
      document.body.append(wrapper);
   
    }

    createKeyboard(keyLang) {
      this.keyboardWrapper = document.createElement("div");
      this.keyboardWrapper.classList.add("keyboard_wrapper");

      this.keys.forEach((rows) => {
        const row = document.createElement("div");
        row.classList.add("keyboard_row");
        rows.forEach((key) => {
          const button = document.createElement("div");
          button.classList.add("keyboard_key");
          button.classList.add(key);

          const span = document.createElement("span");
          console.log(typeof keyLang[key],key)
          // span.textContent = langArr.en.KeyM.small;
          span.textContent = keyLang[key].small;
          button.append(span);  
          row.append(button);

        });
        this.keyboardWrapper.append(row);
      });
      return this.keyboardWrapper;


    }


}

const keyboard = new Keyboard();

keyboard.createKeyboardWrapper(lang);
