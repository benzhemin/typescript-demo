

export const existy = (o: any) => o != null;

export function ternFnExp(cond: Function, retTruth: any, retFalsy: any) {
  return cond() ? retTruth : retFalsy;
}

export function ternExp(cond: boolean, retTruth: any, retFalsy: any) {
  return cond ? retTruth : retFalsy;
}

export const identity = (o: any) => o;

/**
涉及到比较
const nArr = [1, 2, 3, 4, 5, 6];
const findNum = enhanceFind(nArr, (a: any, b: any, map: Function = identity) => map(a) > map(b), identity);
console.log(`find max num ${findNum}`);

const people = [
  {name: 'Fred', age: 65},
  {name: 'Lucy', age: 36},
  {name: 'Meimei', age: 36},
];
const minPerson = enhanceFind(people, (a: number, b: number) => a <= b, (p: any) => p.age);
console.log(`min age person ${JSON.stringify(minPerson)}`);
 */
export function enhanceFind(arr: any[], comp: Function, mapFn: Function = identity) {
  if (arr.length === 0) return ;

  return arr.reduce((pre, cur) => { 
    return ternFnExp(() => comp(mapFn(pre), mapFn(cur)), pre, cur) 
  });
}

/*
const people = [
  {name: 'Fred', age: 65},
  {name: 'Lucy', age: 36},
  {name: 'Meimei', age: 36},
];

const person = maxByProp(people, (o:any) => o.age);
console.log(JSON.stringify(person));

const groupPeople = groupByProp(people, (o: any) => o.age);
console.log(`group ${JSON.stringify(groupPeople)}`);
*/
export function groupByProp(arr: any[], propFn: Function) {
  return arr.reduce((acc, cur) => {
    const key = propFn(cur);
    const valList = acc[key] || [];
    valList.push(cur);
    acc[key] = valList;
    return acc;
  }, {});
}

// 用于react component identit key generator
export function uniqueStringWithStart(start: number) {
  let count = start;
  return function(prefix: string) {
    return [prefix, count++].join('');
  }
}

export function always(val: any) {
  return function() {
    return val;
  }
}

export function cat(head: any[] = [], ...rest: any[]) {
  return head.concat(rest);
}

export function construct(head: any, tail: any[]) {
  return cat([head], Array.from(tail));
}

export function uniq(arr: any[], itereeFn: Function = identity) {
  const set = new Set();
  const uniqList: any[] = [];

  arr.forEach((o) => {
    const key = itereeFn(o);
    if (!set.has(key)) {
      set.add(key);
      uniqList.push(o);
    }
  });
  return uniqList;
}