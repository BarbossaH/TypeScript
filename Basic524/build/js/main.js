"use strict";
// console.log('type assertion and type casting');
// type assertion and type casting
//covert to more or less specific
let test = 'hello';
let a = 'world';
let b = a; //less specific
let c = a; //more specific
console.log(test, c, b, a); //hello world world world
let d = 'world';
let e = 'world';
let ef = 'world';
let e1f = 'world'; //angle brackets are not allowed to use in react or tsx files
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//actually, the following expression is wrong, but typescript doesn't tell the problem
let myVal1 = addOrConcat(2, 2, 'concat');
// 10 as string; not allowed
10; //类型转换
//with DOM
//typescript doesn't know what exactly type it is
const img = document.getElementById('#imgId');
img.src; //if using assertion, it will work
const img3 = document.getElementById('#ko');
// img3.src; it is illegal because ts doesn't know img3 has src property or not
const img1 = document.querySelector('img');
img1.src;
const img2 = document.querySelector('img');
img2 === null || img2 === void 0 ? void 0 : img2.src;
