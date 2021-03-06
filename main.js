const Keyboard = class {
    constructor(){
        this.eng = {
            shiftUnpressed : [
                ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
                ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
                ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '↑', '/'],
                ['Ctrl', 'Alt', 'Space', '←', '↓', '→']
                ],
            shiftPressed : [
                ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
                ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
                ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
                ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '↑', '?'],
                ['Ctrl', 'Alt', 'Space', '←', '↓', '→']
                ]
        }
        this.rus = {
            shiftUnpressed : [
                ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
                ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
                ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '↑', '.'],
                ['Ctrl', 'Alt', 'Space', '←', '↓', '→']
            ],
            shiftPressed : [
                ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
                ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
                ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
                ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '↑', ','],
                ['Ctrl', 'Alt', 'Space', '←', '↓', '→']
            ],
        }
        this.body = document.querySelector('body'),
        this.btnsArray = [
          [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
          [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
          [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
          [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 38, 191],
          [17, 18, 32, 37, 40, 39]],
        this.allBtns = [[],[],[],[],[]]
        this.activeLanguage = this.eng
        this.capsIsPressed = false
    }
    create() {
        this.body = document.querySelector('body')
        this.body.insertAdjacentHTML('afterbegin', `
        <div class="main-wrapper">
            <textarea name="input" id="input" cols="90" rows="20" readonly></textarea>
            <div class="keyboard-wrapper">
                <div class="keyboard-str">
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                </div>
                <div class="keyboard-str">
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                </div>
                <div class="keyboard-str">
                    <button class="keyboard-btn caps"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                </div>
                <div class="keyboard-str">
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                </div>
                <div class="keyboard-str">
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn space"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                    <button class="keyboard-btn"></button>
                </div>
            </div>
        </div>
        `)
    }
    pressEvent(){           
        this.input = document.querySelector('#input')
        let keyboard = document.querySelector('.keyboard-wrapper')
        for(let k = 0; k < keyboard.childNodes.length; k++){
            if (k % 2 === 1) {
                for(let l = 0; l < keyboard.childNodes[k].childNodes.length; l++)
                if (l % 2 === 1) {
                    switch (k) {
                        case 1:
                            this.allBtns[0].push(keyboard.childNodes[k].childNodes[l]);
                            break;
                        case 3:
                            this.allBtns[1].push(keyboard.childNodes[k].childNodes[l]);
                            break;
                        case 5:
                            this.allBtns[2].push(keyboard.childNodes[k].childNodes[l]);
                            break;
                        case 7:
                            this.allBtns[3].push(keyboard.childNodes[k].childNodes[l]);
                            break;
                        case 9:
                            this.allBtns[4].push(keyboard.childNodes[k].childNodes[l]);
                            break;
                    } 
                } 
            }
        }
        for(let k = 0; k < this.allBtns.length; k++)
        for(let l = 0; l < this.allBtns[k].length; l++){
            this.allBtns[k][l].innerText = this.activeLanguage.shiftUnpressed[k][l]
        }
    
        document.addEventListener('keydown', () => {
            for(let k = 0; k < this.allBtns.length; k++)
            for(let l = 0; l < this.allBtns[k].length; l++){
                if (event.keyCode === this.btnsArray[k][l]) {
                    (this.allBtns[k][l]).classList.add('pressed');
                    (this.allBtns[k][l]).classList.remove('keyup');
                }
            }
            switch (event.keyCode) {
                case 9:
                        this.input.value += '\t';
                    break;
                case 8:
                        this.backspace()
                    break;
                case 20:
                        console.log('caps');
                    break; 
                case 13:
                        this.input.value += '\n'
                    break;       
                case 16:
                        this.shifted(this.activeLanguage.shiftPressed)
                    break;
                case 17:
                        console.log('ctrl');
                    break;
                case 18:
                        console.log('alt');
                    break;
                case 38:
                    this.input.value += '↑';
                    break;
                case 37:
                    this.input.value += '←';
                    break;
                case 40:
                    this.input.value += '↓';
                    break;
                case 39:
                    this.input.value += '→';
                    break;
                default:
                    this.input.value += event.key;
                    break;
            }
        })
        document.addEventListener('keyup', () => {
            for(let k = 0; k < this.allBtns.length; k++)
            for(let l = 0; l < this.allBtns[k].length; l++){ 
                if (event.keyCode === this.btnsArray[k][l]) {
                    (this.allBtns[k][l]).classList.remove('pressed');
                    (this.allBtns[k][l]).classList.add('keyup');
                } 
            }
            switch (event.keyCode) {
                case 16:
                    this.unshifted(this.activeLanguage.shiftUnpressed)
                    break;
                case 20:
                    this.capsLockPressed()
                    break; 
            }
        })
    }
    pressEventMouse() {
        let buttons = document.querySelectorAll('.keyboard-btn')
        buttons.forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.classList.add('pressed');
                btn.classList.remove('keyup');
                switch (btn.innerHTML) {
                    case 'Tab':
                        this.input.value += '\t';
                    break;
                    case 'Backspace':
                            this.backspace()
                        break;
                    case 'CapsLock':
                            console.log('capsPressed');
                        break; 
                    case 'Enter':
                            this.input.value += '\n'
                        break;       
                    case 'Shift':
                            this.shifted(this.activeLanguage.shiftPressed)
                        break;
                    case 'Ctrl':
                            console.log('ctrl');
                        break;
                    case 'Alt':
                            console.log('alt');
                        break;
                    case 'Space':
                        this.input.value += ' ';
                        break;
                    default:
                        this.input.value += btn.innerHTML;
                        break;
                }
            })
            btn.addEventListener('mouseup', () => {
                btn.classList.remove('pressed');
                        btn.classList.add('keyup');
                switch (btn.innerHTML) {
                    case 'Shift':
                        this.shifted(this.activeLanguage.shiftUnpressed)
                        break;
                    case 'CapsLock':
                        this.capsLockPressed()
                        break;
                    default:
                        
                        break;
                }
            })
        });
    }
    backspace(){
        this.input.value = this.input.value.slice(0, -1);
    }
    shifted(uppercaseLanguage){
        for(let k = 0; k < this.allBtns.length; k++)
        for(let l = 0; l < this.allBtns[k].length; l++){
            this.allBtns[k][l].innerText = uppercaseLanguage[k][l]
        }
    }
    unshifted(lowercaseLanguage){
        for(let k = 0; k < this.allBtns.length; k++)
        for(let l = 0; l < this.allBtns[k].length; l++){
            this.allBtns[k][l].innerText = lowercaseLanguage[k][l]
        }
    }
    capsLockPressed(){
        if (!this.capsIsPressed) {
            this.capsIsPressed = true
            document.querySelector('.caps').classList.add('pressed');
            document.querySelector('.caps').classList.remove('keyup');
            this.shifted(this.activeLanguage.shiftPressed)
        } else {
            this.capsIsPressed = false
            this.shifted(this.activeLanguage.shiftUnpressed)
            document.querySelector('.caps').classList.add('keyup')
            document.querySelector('.caps').classList.remove('pressed');
        }
    }
    changeLanguage(){
        document.addEventListener('keydown', () => {
            if (event.shiftKey  &&  event.altKey) {
                if(this.activeLanguage === this.eng){
                    this.activeLanguage = this.rus
                    console.log('s+a');
                } else {
                    this.activeLanguage = this.eng
                }
            }
        })
    }
}
const keyboard = new Keyboard();
keyboard.create()
keyboard.pressEvent()
keyboard.pressEventMouse() 
keyboard.changeLanguage()