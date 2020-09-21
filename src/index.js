// Calculate Key Time Pressed
// Source: https://stackoverflow.com/questions/6472707/how-to-get-info-on-what-key-was-pressed-on-for-how-long

const keyboardMap = {
    Backspace: [8, '🠐'],
    Tab: [9, ' ↹ Tab'],
    EnterLeft: [13, '↵ Enter '],
    EnterRight: [13, '↵'],
    ShiftLeft: [16, '⇧ Shift'],
    ShiftRight: [16, 'Shift ⇧'],
    ControlRight: [17, 'ctrl rght'],
    ControlLeft: [17, 'ctrl lft'],
    AltLeft: [18, 'alt lft'],
    AltRight: [18, 'alt rght'],
    Space: [32, '___'],
    ContextMenu: [93, '≣ Menu'],
    Pause: [19, 'Pause'],
    CapsLock: [20, 'Caps Lock'],
    Escape: [27, 'Esc'],
    PageUp: [33, 'Page Up'],
    PageDown: [34, 'Page Down'],
    End: [35, 'End'],
    Home: [36, 'Home'],
    ArrowLeft: [37, '←'],
    ArrowUp: [38, '↑ '],
    ArrowRight: [39, '→ '],
    ArrowDown: [40, '↓ '],
    Insert: [45, 'Ins'],
    Delete: [46, 'Del'],
    Digit0: [48, '0'],
    Digit1: [49, '1'],
    Digit2: [50, '2'],
    Digit3: [51, '3'],
    Digit4: [52, '4'],
    Digit5: [53, '5'],
    Digit6: [54, '6'],
    Digit7: [55, '7'],
    Digit8: [56, '8'],
    Digit9: [57, '9'],
    KeyA: [65, 'a'],
    KeyB: [66, 'b'],
    KeyC: [67, 'c'],
    KeyD: [68, 'd'],
    KeyE: [69, 'e'],
    KeyF: [70, 'f'],
    KeyG: [71, 'g'],
    KeyH: [72, 'h'],
    KeyI: [73, 'i'],
    KeyJ: [74, 'j'],
    KeyK: [75, 'k'],
    KeyL: [76, 'l'],
    KeyM: [77, 'm'],
    KeyN: [78, 'n'],
    KeyO: [79, 'o'],
    KeyP: [80, 'p'],
    KeyQ: [81, 'q'],
    KeyR: [82, 'r'],
    KeyS: [83, 's'],
    KeyT: [84, 't'],
    KeyU: [85, 'u'],
    KeyV: [86, 'v'],
    KeyW: [87, 'w'],
    KeyX: [88, 'x'],
    KeyY: [89, 'y'],
    KeyZ: [90, 'z'],
    MetaLeft: [91, '⊞ Win '],
    MetaRight: [92, 'Win ⊞'],
    // select_key: [93, ''],
    Numpad0: [96, '0'],
    Numpad1: [97, '1'],
    Numpad2: [98, '2'],
    Numpad3: [99, '3'],
    Numpad4: [100, '4'],
    Numpad5: [101, '5'],
    Numpad6: [102, '6'],
    Numpad7: [103, '7'],
    Numpad8: [104, '8'],
    Numpad9: [105, '9'],
    NumpadMultiply: [106, '*'],
    NumpadAdd: [107, '+'],
    NumpadSubtract: [109, '-'],
    NumpadDecimal: [110, '.,'],
    NumpadDivide: [111, '/'],
    F1: [112, 'f1'],
    F2: [113, 'f2'],
    F3: [114, 'f3'],
    F4: [115, 'f4'],
    F5: [116, 'f5'],
    F6: [117, 'f6'],
    F7: [118, 'f7'],
    F8: [119, 'f8'],
    F9: [120, 'f9'],
    F10: [121, 'f10'],
    F11: [122, 'f11'],
    F12: [123, 'f12'],
    NumLock: [144, 'Num Lock'],
    ScrollLock: [145, 'Scr Lk'],
    Semicolon: [186, ';'],
    Equal: [187, '='],
    Comma: [188, ','],
    Minus: [189, '-'],
    Period: [190, '.'],
    IntlBackslash: [191, '\\'],
    grave_accent: [192, ''],
    BracketLeft: [219, '{'],
    Slash: [220, '/'],
    BracketRight: [221, '}'],
    Backslash: [222, ' \' '],
    Backquote: [192, '`'],
    AudioVolumeDown: [174, 'vlm ↓'],
    AudioVolumeUp: [175, 'vlm ↑'],
    MediaTrackNext: [176, '⏭'],
    MediaPlayPause: [179, '⏯'],
    PrintScreen: [44, 'prt sscr']
}

const pressedLog = document.getElementById('pressedLog'),
    pressed = {};

window.onkeydown = function (e) {
    e.preventDefault(); // Prevent Button Default Behavior 
    pressed[e.which] ? pressed[e.which] : pressed[e.which] = e.timeStamp;


keyPressDown(e);

};

window.onkeyup = function (e) {
    const duration = (e.timeStamp - pressed[e.which]) / 1000;
    let getIcon;

    console.log('Key: ' + e.key);
    console.log('Code: ' + e.code + ' | keyCode: ' + e.keyCode);
    console.log(e);

    e.preventDefault(); // Prevent Button Default Behavior 

keyPressUp(e);

    switch (e.keyCode) {

        // Some Keys have no Code, so in order to find the keys.
        case 13: e.location == 0 ? getIcon = keyboardMap.EnterLeft : getIcon = keyboardMap.EnterRight; break;
        case 16: e.location == 1 ? getIcon = keyboardMap.ShiftLeft : getIcon = keyboardMap.ShiftRight; break;
        case 17: e.location == 1 ? getIcon = keyboardMap.ControlLeft : getIcon = keyboardMap.ControlRight; break;
        case 18: e.location == 1 ? getIcon = keyboardMap.AltLeft : getIcon = keyboardMap.AltRight; break;
        case 174: getIcon = keyboardMap.AudioVolumeDown; break;
        case 175: getIcon = keyboardMap.AudioVolumeUp; break;
        case 179: getIcon = keyboardMap.MediaPlayPause; break;
        default: getIcon = keyboardMap[e.code];

    }

    pressedLog.innerHTML += '<div class="keyLogAction"><span class="keyLogBtn">' + getIcon[1] + '</span><span class="keyLogTxt"> pressed for </span><span class="keyLogTime">' + Math.round((duration + Number.EPSILON) * 1000) / 1000 + '</span><span class="keyLogSeconds">  seconds</span></div>';
    pressed[e.which] = 0;

    if (!pressed[e.which]) return;
};



// ========
// Mouse Enter/Exit Events
let mouseEvent = document.querySelector('#mainWrapper');
let mouseEventWrapper = document.querySelector('#mouseEventWrapper');

mouseEvent.addEventListener('mouseleave', e => mouseEventWrapper.classList.add("mouseLeave"));
mouseEvent.addEventListener('mouseenter', e => mouseEventWrapper.classList.remove("mouseLeave"));



const keyPressDown = (e) => {  
    let keyPressed = ''
    
    e.code != '' ? keyPressed = e.code : keyPressed = e.keyCode;

    // const keyPressed = e.code;
    console.log(keyPressed);
    const element = document.getElementById(keyPressed);
    element.classList.add('active');
}


const keyPressUp = (e) => {
    // const keyPressed = e.code;

    let keyPressed = ''
    
    e.code != '' ? keyPressed = e.code : keyPressed = e.keyCode;
    const element = document.getElementById(keyPressed);
    element.classList.remove('active');
}








const calculateKeyboardColumnsWidth = () => {

    // Widths Measured on Das Keyboard x50 in inches
const widths = {
    totalWidth: 16.6,
    firstColumn: 11.2,
    secondColumn: 2.2,
    thirdColumn: 3,
    gapBetweenColumns: 0.1
    
}

console.log('First Column %: ' + widths.firstColumn*(100/widths.totalWidth));
console.log('Second Column %: ' + widths.secondColumn*(100/widths.totalWidth));
console.log('Third Column %: ' + widths.thirdColumn*(100/widths.totalWidth));
console.log('Third Column %: ' + widths.gapBetweenColumns*(100/widths.totalWidth));
console.log('Sum (should be just bellow 100): ' + (widths.firstColumn*(100/widths.totalWidth) + widths.secondColumn*(100/widths.totalWidth) + widths.thirdColumn*(100/widths.totalWidth) + widths.gapBetweenColumns*(100/widths.totalWidth)));

}


calculateKeyboardColumnsWidth();



const loadTheme = document.getElementById('keyboard');

document.getElementById('themeWhite').onclick = () => loadTheme.classList.add('neoWhite');
document.getElementById('themeBlack').onclick = () => loadTheme.classList.add('neoBlack')