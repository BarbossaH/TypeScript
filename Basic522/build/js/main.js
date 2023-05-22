"use strict";
//Literal types
let myName;
let userName;
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
    // return 0; not allowed
};
logMsg('ok');
logMsg(true);
logMsg(add(1, 2));
let subtract = function (a, b) {
    return a - b;
};
logMsg(subtract(1, 2));
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(4, 2));
//optional parameters
const addAll = (a, b, c) => {
    // return a + b + c; no
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 100, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 5));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const total1 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
logMsg(total1(1, 2));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const createError1 = (errMsg) => {
    throw new Error(errMsg);
};
//if the loop is endless, the type will be never.never means it could be a problem
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen!');
};
