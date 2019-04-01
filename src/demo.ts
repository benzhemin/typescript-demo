import { ternExp, ternFnExp, identity, groupByProp, enhanceFind } from './utils';

console.log('hellow ts');

const obj  = { a:1, b:2 };

for (const [k, v] of Object.entries(obj)) {
  console.log(`key ${k} value ${v}`);
}

function flatArr(arr: any[], depth: number) : any[]{
  if (depth == 0) return arr;

  const newArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      newArr.push(...item);
    } else {
      newArr.push(item);
    }
  }

  return flatArr(newArr, depth-1);
}

const arr = [1, 2, 3, [4, 5], [6, [8, [9, 10]]]];
console.log(JSON.stringify(flatArr(arr, 0)));
console.log(JSON.stringify(flatArr(arr, 1)));
console.log(JSON.stringify(flatArr(arr, 2)));
console.log(JSON.stringify(flatArr(arr, 3)));

interface ByProperty {
  (cur: any) : any;
}

function distinctArry(arr: any[], getProp: ByProperty) {
  const propMap = new Map<any, any>([]);

  arr.forEach((cur) => {
    const propKey = getProp(cur);
    propMap.set(propKey, cur);
  });

  return Array.from(propMap.values());
}

// eg1
const numArr = [1, 2, 2, 3, 4, 5, 6];
const distinctNumArr = distinctArry(numArr, (cur) => cur);
console.log(JSON.stringify(distinctNumArr));

// eg2
const objArr = [ {id: 1, name: 'a'}, {id: 2, name: 'b'}, {id:2, name: 'c'}, {id : 3, name: 'd'}];
const distinctObjArr = distinctArry(objArr, (obj) => obj.id);
console.log(JSON.stringify(distinctObjArr));

const createNum = function() {
  let PRIVATE = 0;

  return {
    inc(num: number) {
      PRIVATE += num;
      return PRIVATE;
    },

    dec(num: number) {
      PRIVATE -= num;
      return PRIVATE;
    },

    log() {
      console.log(`current val ${PRIVATE}`);
    }
  };
};

const numOne = createNum();
const numTwo = createNum();

numOne.inc(10);
numTwo.dec(10);

numOne.log();
numTwo.log();

const createN = function () {
  let PRIVATE = 0;
  return function() {
    PRIVATE += 1;

    console.log(`cur val ${PRIVATE}`);
    return PRIVATE;
  }
};

const incOne = createN();
const incOne1 = createN();

incOne();
incOne1();


function maxByProp(arr: any[], propFn: Function) {
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;
  return rest.reduce((acc, cur) => {
    const accVal = propFn(acc);
    const curVal = propFn(cur);
    return ternFnExp(() => accVal > curVal, acc, cur);
  }, first);
}

const people = [
  {name: 'Fred', age: 65},
  {name: 'Lucy', age: 36},
  {name: 'Meimei', age: 36},
];

const person = maxByProp(people, (o:any) => o.age);
console.log(JSON.stringify(person));



const groupPeople = groupByProp(people, (o: any) => o.age);
console.log(`group ${JSON.stringify(groupPeople)}`);

const firstPer = people.find((per) => per.age === 36);
console.log(`per ${JSON.stringify(firstPer)}`);

const nArr = [1, 2, 3, 4, 5, 6];
const findNum = enhanceFind(nArr, (a: any, b: any) => a > b);
console.log(`find max num ${findNum}`);

const minPerson = enhanceFind(people, (a: number, b: number) => a <= b, (p: any) => p.age);
console.log(`min age person ${JSON.stringify(minPerson)}`);

function repeat(times: number, value: any) {
  return Array(times).fill(0).map((val) => value);
}

console.log(`repeat ${JSON.stringify(repeat(4, 'Major'))}`);
