import langArr from "./lang.js";

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
          span.textContent = keyLang[key].small;
          button.append(span);  
          row.append(button);

        });
        this.keyboardWrapper.append(row);
      });

      return this.keyboardWrapper;
    }

}
export default Keyboard;
   
  