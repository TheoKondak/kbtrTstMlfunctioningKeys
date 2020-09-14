// Calculate Key Time Pressed
// Source: https://stackoverflow.com/questions/6472707/how-to-get-info-on-what-key-was-pressed-on-for-how-long

const keyboardMap = {
    Backspace: [8, '←'],
    Tab: [9, ' ↹ Tab'],
    Enter: [13, '↵ Enter '],
    ShiftLeft: [16, '⇧ Shift'],
    ShiftRight: [16, 'Shift ⇧'],
    ControlRight: [17, 'ctrl rght'],
    ControlLeft: [17, 'ctrl lft'],
    Alt: [18, 'alt'],
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
    // ScrollLock: [145, ''],
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
    Quote: [222, ' \' '],
    Backquote: [192, '`']
}


const keyboardMapArray = Object.keys(keyboardMap);



const pressedLog = document.getElementById('pressedLog'),
    pressed = {};

window.onkeydown = function (e) {
    e.preventDefault();

    if (pressed[e.which]) return;
    pressed[e.which] = e.timeStamp;

    // console.log(e.timeStamp);

};

window.onkeyup = function (e) {


    const duration = (e.timeStamp - pressed[e.which]) / 1000;
    let getIcon;
    console.log(e);

    switch (e.keyCode) {

        case 16: e.location == 1 ? getIcon = keyboardMap.ShiftLeft : getIcon = keyboardMap.ControlLeft;
        case 17: e.location == 1 ? getIcon = keyboardMap.ShiftLeft : getIcon = keyboardMap.ControlRight;
        default: getIcon = keyboardMap[e.code];

    }




    pressedLog.innerHTML += '<div class="keyLogAction"><span class="keyLogBtn">' + getIcon[1] + '</span><span class="keyLogTxt"> pressed for </span><span class="keyLogTime">' + Math.round((duration + Number.EPSILON) * 1000) / 1000 + '</span><span class="keyLogSeconds">  seconds</span></div>';
    pressed[e.which] = 0;

    if (!pressed[e.which]) return;
};
// ========
