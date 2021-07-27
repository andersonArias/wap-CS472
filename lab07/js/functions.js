"use strict";

function sum(array) {
    if (array.length == 0) return 0;
    return array.reduce((x, y) => (x + y), 0);
}

function multiply(array) {
    if (array.length == 0) return 0;
    return array.reduce((x, y) => (x * y), 1);
}

function reverse(str) {
    if (str.length == 0) return "";
    return str.split('').reduce((x, y) => y + x, '');
}

function filterLongWords(array, f) {
    if (array.length == 0 || f <= 0) return 0;
    return array.filter(word => word.length > f);
}