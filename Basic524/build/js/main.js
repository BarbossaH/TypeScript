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
