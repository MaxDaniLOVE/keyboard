let createKeyboard = function create() {
    let body = document.querySelector('body')

    body.insertAdjacentHTML('afterbegin', `
    <div class="main-wrapper">
        <textarea name="input" id="input" cols="90" rows="20"></textarea>
        <div class="keyboard-wrapper">
            <div class="keyboard-str">
                <button class="keyboard-btn">ё</button>
                <button class="keyboard-btn">1</button>
                <button class="keyboard-btn">2</button>
                <button class="keyboard-btn">3</button>
                <button class="keyboard-btn">4</button>
                <button class="keyboard-btn">5</button>
                <button class="keyboard-btn">6</button>
                <button class="keyboard-btn">7</button>
                <button class="keyboard-btn">8</button>
                <button class="keyboard-btn">9</button>
                <button class="keyboard-btn">0</button>
                <button class="keyboard-btn">-</button>
                <button class="keyboard-btn">=</button>
                <button class="keyboard-btn">backspace</button>
            </div>
            <div class="keyboard-str">
                <button class="keyboard-btn">Tab</button>
                <button class="keyboard-btn">й</button>
                <button class="keyboard-btn">ц</button>
                <button class="keyboard-btn">у</button>
                <button class="keyboard-btn">к</button>
                <button class="keyboard-btn">е</button>
                <button class="keyboard-btn">н</button>
                <button class="keyboard-btn">г</button>
                <button class="keyboard-btn">ш</button>
                <button class="keyboard-btn">щ</button>
                <button class="keyboard-btn">з</button>
                <button class="keyboard-btn">х</button>
                <button class="keyboard-btn">ъ</button>
                <button class="keyboard-btn"> &#92 </button>
                <button class="keyboard-btn">delete</button>
            </div>
            <div class="keyboard-str">
                <span class="keyboard-btn">
                    <input type="radio" name="caps" id="caps"> CapsLock
                </span>
                <button class="keyboard-btn">ф</button>
                <button class="keyboard-btn">ы</button>
                <button class="keyboard-btn">в</button>
                <button class="keyboard-btn">а</button>
                <button class="keyboard-btn">п</button>
                <button class="keyboard-btn">р</button>
                <button class="keyboard-btn">о</button>
                <button class="keyboard-btn">л</button>
                <button class="keyboard-btn">д</button>
                <button class="keyboard-btn">ж</button>
                <button class="keyboard-btn">э</button>
                <button class="keyboard-btn">enter</button>
            </div>
            <div class="keyboard-str">
                <button class="keyboard-btn">shift</button>
                <button class="keyboard-btn">я</button>
                <button class="keyboard-btn">ч</button>
                <button class="keyboard-btn">с</button>
                <button class="keyboard-btn">м</button>
                <button class="keyboard-btn">и</button>
                <button class="keyboard-btn">т</button>
                <button class="keyboard-btn">ь</button>
                <button class="keyboard-btn">б</button>
                <button class="keyboard-btn">ю</button>
                <button class="keyboard-btn">.</button>
                <button class="keyboard-btn">up</button>
            </div>
            <div class="keyboard-str">
                <button class="keyboard-btn">Ctrl</button>
                <button class="keyboard-btn">Alt</button>
                <button class="keyboard-btn space">Space</button>
                <button class="keyboard-btn">Left</button>
                <button class="keyboard-btn">Down</button>
                <button class="keyboard-btn">Right</button>
            </div>
        </div>
    </div>
    `)
}

let pressBtn = function pressEvent() {
    let btnsArray = [
        [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
        [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
        [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
        [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38],
        [17, 18, 32, 37, 40, 39]]
    let allBtns = [[],[],[],[],[]]
        
    let input = document.querySelector('#input')
    let keyboard = document.querySelector('.keyboard-wrapper')

    for(k = 0; k < keyboard.childNodes.length; k++){
        if (k % 2 === 1) {
            for(l = 0; l < keyboard.childNodes[k].childNodes.length; l++)
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
    
    //console.log(input);
    
    document.addEventListener('keydown', () => {
        for(i = 0; i < btnsArray.length; i++)
        for(j = 0; j < btnsArray[i].length; j++){
            if (event.keyCode === btnsArray[i][j]) {
               (allBtns[i][j]).classList.add('pressed');
               (allBtns[i][j]).classList.remove('keyup');
            }
        }
        input.value += event.key; 
        //console.log(event.keyCode);
        //console.log(event.key);
    })
    document.addEventListener('keyup', () => {
        for(i = 0; i < btnsArray.length; i++)
        for(j = 0; j < btnsArray[i].length; j++){
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
createKeyboard();
pressBtn();
pressBtnByMouse();
