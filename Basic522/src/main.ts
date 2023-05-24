//type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;
const test: UserId = 1;

//Literal types
let myName: 'Julian';
let userName: 'D' | 'F' | 'A';

//functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
  // return 0; not allowed
};

logMsg('ok');
logMsg(true);
logMsg(add(1, 2));

let subtract = function (a: number, b: number): number {
  return a - b;
};
logMsg(subtract(1, 2));

// type mathFunction = (a: number, b: number) => number; both ok, but both of them cannot use the default value
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a * b;
};
logMsg(multiply(4, 2));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  // return a + b + c; no
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number = 100, b: number, c: number = 3): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 5));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

//Rest params

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
const total1 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));
logMsg(total1(1, 2));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};
const createError1 = (errMsg: string): never => {
  throw new Error(errMsg);
};
//if the loop is endless, the type will be never.never means it could be a problem
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  if (isNumber(value)) return 'number';
  return createError('this should never happen!');
};
