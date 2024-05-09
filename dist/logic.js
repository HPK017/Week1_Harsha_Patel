"use strict";
//1
Object.defineProperty(exports, "__esModule", { value: true });
exports.handShake = exports.leapYear = exports.concatenate = exports.split = void 0;
function split(str) {
    return str.split('_').join(' ');
}
exports.split = split;
//2
function concatenate(s1, s2) {
    return s1 + s2;
}
exports.concatenate = concatenate;
//3
function leapYear(year) {
    if (((year % 4 === 0) && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
exports.leapYear = leapYear;
//4
function handShake(code) {
    let Handshake = [];
    if (code & 0b1)
        Handshake.push('wink');
    if (code & 0b10)
        Handshake.push('double blink');
    if (code & 0b100)
        Handshake.push('close your eyes');
    if (code & 0b1000)
        Handshake.push('jump');
    if (code & 0b10000)
        Handshake.reverse();
    return Handshake;
}
exports.handShake = handShake;
//# sourceMappingURL=logic.js.map