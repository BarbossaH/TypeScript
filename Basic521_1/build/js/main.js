"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['start', 'fiona and me', 521];
let mixedData = ['EV', 1981, true];
//the code commented out doesn't work because of the different type
// stringArr[0]=42
stringArr[0] = 'Me';
// stringArr.push(32)
stringArr.push('ko');
guitars[0] = 123;
//add one or more element to the beginning of the array
guitars.unshift('jim');
// guitars.unshift(true);
guitars.push(123);
// guitars=mixedData
let test = [];
// it can be added the annotation when claiming it
let bands = [];
bands.push('dasdasdsa');
//tuple, it's strict
let mytuple = ['sds', 123, true];
let mixed = ['juo', 1, true];
// mytuple = mixed; it is not allowed
// mytuple[1] = false
mytuple[2] = false;
mixed = mytuple;
let myobj;
myobj = [];
console.log(typeof myobj);
myobj = bands;
myobj = {};
const obj2 = {
    prop1: 'name',
    prop2: true,
};
obj2.prop1 = 'ok';
//we cannot comment any properties in this oject, it will not be allowed
let everd = {
    name: 'das',
    active: true,
    albums: [123, '321', 443, 'dds'],
};
let flexobj = {
    name: 'ok',
    // active:1, not allowed
    // active: false, //it can be comment it out, because the second property is set as optional
    albums: ['1', '2'],
};
let flexob1j = {
    name: 'ok',
    // active:1, not allowed
    active: false,
    albums: ['1', '2'],
};
flexob1j = flexobj; //this is legal
const greetFlex = (arg) => {
    // return arg.name.toUpperCase();
    //because the name is optional
    if (arg.name) {
        return `hello ${arg.name.toUpperCase()}`;
    }
    return 'hello';
};
// enum
//unlike most typescript features, Enums are not a type-level addition to JS but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["one"] = 1] = "one";
    Grade[Grade["two"] = 2] = "two";
    Grade[Grade["three"] = 3] = "three";
    Grade[Grade["four"] = 4] = "four";
    Grade[Grade["five"] = 5] = "five";
})(Grade || (Grade = {}));
console.log(Grade.five);
