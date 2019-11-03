let library = {
    shiftUnpressedEng: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up'],
      ['Ctrl', 'Alt', 'Space', 'Left', 'Down', 'Right']
    ],
    shiftPressedEng: [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up'],
      ['Ctrl', 'Alt', 'Space', 'Left', 'Down', 'Right']
    ],
    shiftUnpressedRus: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
        ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up'],
        ['Ctrl', 'Alt', 'Space', 'Left', 'Down', 'Right']
    ],
    shiftPressedRus: [
        ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
        ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up'],
        ['Ctrl', 'Alt', 'Space', 'Left', 'Down', 'Right']
    ]
  }




let createKeyboard = function create() {
    let body = document.querySelector('body')

    body.insertAdjacentHTML('afterbegin', `
    <div class="main-wrapper">
        <textarea name="input" id="input" cols="90" rows="20"></textarea>
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
                <span class="keyboard-btn caps">
                    <input type="checkbox" name="caps" id="caps"> //CapsLock
                </span>
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

let pressBtn = function pressEvent() {
    let btnsArray = [
        [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
        [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
        [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
        [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38],
        [17, 18, 32, 37, 40, 39]]
    let allBtns = [[],[],[],[],[]]
        
    let input = document.querySelector('#input')
    let keyboard = document.querySelector('.keyboard-wrapper')

    for( let k = 0; k < keyboard.childNodes.length; k++){
        if (k % 2 === 1) {
            for(let l = 0; l < keyboard.childNodes[k].childNodes.length; l++)
            if (l % 2 === 1) {
                switch (k) {
                    case 1:
                        allBtns[0].push(keyboard.childNodes[k].childNodes[l]);
                        break;
                    case 3:
                        allBtns[1].push(keyboard.childNodes[k].childNodes[l]);
                        break;
                    case 5:
                        allBtns[2].push(keyboard.childNodes[k].childNodes[l]);
                        break;
                    case 7:
                        allBtns[3].push(keyboard.childNodes[k].childNodes[l]);
                        break;
                    case 9:
                        allBtns[4].push(keyboard.childNodes[k].childNodes[l]);
                        break;
                } 
            } 
        }
    }
    // -------------------- 
    for(let k = 0; k < allBtns.length; k++)
    for(let l = 0; l < allBtns[k].length; l++){
        allBtns[k][l].innerText = library.shiftUnpressedRus[k][l]
    }

    document.addEventListener('keydown', () => {
        if (event.shiftKey) {
            for(let k = 0; k < allBtns.length; k++)
            for(let l = 0; l < allBtns[k].length; l++){
                allBtns[k][l].innerText = library.shiftPressedRus[k][l]
            }
        } 
    })
    document.addEventListener('keyup', () => {
        if (!event.shiftKey) {
            for(let k = 0; k < allBtns.length; k++)
            for(let l = 0; l < allBtns[k].length; l++){
                allBtns[k][l].innerText = library.shiftUnpressedRus[k][l]
            }
        }
    })
    //---------------------------

    document.addEventListener('keydown', () => {
        for(let i = 0; i < btnsArray.length; i++)
        for(let j = 0; j < btnsArray[i].length; j++){
            if (event.keyCode === btnsArray[i][j]) {
               (allBtns[i][j]).classList.add('pressed');
               (allBtns[i][j]).classList.remove('keyup');
            }
        }
        input.value += event.key; 
        
    })
    document.addEventListener('keyup', () => {
        for(let i = 0; i < btnsArray.length; i++)
        for(let j = 0; j < btnsArray[i].length; j++){
            if (event.keyCode === btnsArray[i][j]) {
               (allBtns[i][j]).classList.remove('pressed');
               (allBtns[i][j]).classList.add('keyup');
            }
        }
    })
    
}

let pressBtnByMouse = function pressEventMouse() {
    let buttons = document.querySelectorAll('.keyboard-btn')
    let input = document.querySelector('#input')
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            input.value += btn.innerHTML;
            btn.classList.add('pressed');
            btn.classList.remove('keyup');
        })
        btn.addEventListener('mouseup', () => {
            btn.classList.remove('pressed');
            btn.classList.add('keyup');
        })
        
    });
}
let capsEvent = function caps() {
    let checkBox = document.querySelector('#caps');
    let checkBoxBtn = document.querySelector('.caps')
    console.log(checkBoxBtn);
    checkBoxBtn.addEventListener('mousedown', () => {
        
        if (checkBox.checked === true) {
            checkBox.checked = false
            checkBoxBtn.classList.remove('pressed');
            checkBoxBtn.classList.add('keyup');
        } else {
            checkBox.checked = true
            checkBoxBtn.classList.add('pressed');
            checkBoxBtn.classList.remove('keyup');
        }
        
    })
    checkBoxBtn.addEventListener('keydown', () => {
        if (event.keyCode !== 20) {
            console.log('true');
            
            if (checkBox.checked === true) {
                checkBox.checked = false
                checkBoxBtn.classList.remove('pressed');
                checkBoxBtn.classList.add('keyup');
            } else {
                checkBox.checked = true
                checkBoxBtn.classList.add('pressed');
                checkBoxBtn.classList.remove('keyup');
            } 
        } 
    })
    
}
createKeyboard();
pressBtn();
pressBtnByMouse();
capsEvent();
