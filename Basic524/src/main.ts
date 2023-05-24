// console.log('type assertion and type casting');
// type assertion and type casting

// aliases
type One = string;
type Two = string | number;
type Three = 'hello';

//covert to more or less specific
let test = 'hello' as Three;
let a: One = 'world';
let b = a as Two; //less specific
let c = a as Three; //more specific

console.log(test, c, b, a); //hello world world world

let d: Two = 'world';
let e = <Two>'world';
let ef = <One>'world';
let e1f = <string | number>'world'; //angle brackets are not allowed to use in react or tsx files

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

//actually, the following expression is wrong, but typescript doesn't tell the problem
let myVal1: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string; not allowed

10 as unknown as string; //类型转换
