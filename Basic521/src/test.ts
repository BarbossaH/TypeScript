let a = 1123;
let b: string = 'test';
b = '32';

let isOk: boolean;
isOk = true;

let album: any;
let something: string | number;
something = 'string';
something = 1;
album = 'Fiona';
album = true;

let re = /\w+/g;
let re1: RegExp = /\w+/g;

const sum = (a: number, b: number) => {
  return a + b;
};

const sum1 = (a: number, b: string) => {
  return a + b;
};
