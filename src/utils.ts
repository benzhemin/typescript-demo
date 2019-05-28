

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

/*
简化switch - type代码

const commander = dispatch(
  isa('notify', (o: any) => { console.log(`msg ${o.message}`) }),
  isa('complete', (o: any) => { console.log(`msg ${o.message}`)})
);

commander({type: 'notify', message: 'hello world'});
commander({type: 'complete', message: 'complete'});
*/
export function dispatch(...fnList: Function[]) {
  return function(target: any) {
    for (const fn of fnList) {
      const res = fn.apply(null, [target]);
      if (existy(res)) return res;
    }
  }
}

export function isa(type: string, action: Function) {
  return function (o: { type: string }) {
    if (o.type === type) {
      return action(o);
    }
  }
}

export function doWhen(cond: any, action: Function) {
  if (!!cond) return action();
}

export function curry(fn: Function) {
  return function(arg: any) {
    return fn.apply(null, [arg]);
  }
}

export function partialRight(fn: Function, ...rest: any[]) {
  return function(arg: any) {
    return fn.apply(null, [arg, ...rest]);
  }
}

export function partialLeft(fn: Function, ...rest: any[]) {
  return function(arg: any) {
    return fn.apply(null, [...rest, arg]);
  }
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

export function flatArr(arr: any[], depth: number = 1) {
  if (depth === 0) return arr;

  const newArr: any[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...item);
    }else {
      newArr.push(item);
    }
  });

  flatArr(newArr, depth-1);
}

export function validator(message: string, fn: Function) {
  const f: any = function(...rest: any[]) {
    return fn.apply(fn, rest);
  }

  f['message'] = message;
  return f;
}

// 表单校验简易版, errors push的信息不够, 需要扩充
export function checker(...validators: Function[]) {
  return function(o: any) {
    return validators.reduce((errors: any[], check: any) => {
      if (!check(o)) {
        errors.push(check.message);
      }
      
      return errors;
    }, []);
  }
}

export function condition(...validators: Function[]) {
  return function(fn: Function, o: any) {
    const errs = validators.reduce((errList: any[], fn: any) => {
      if (fn(o)) {
        errList.push(fn.message);
      }
      return errList;
    }, []);

    if (errs.length > 0) { throw new Error(errs.join(', '))}

    return fn(o);
  }
}

// https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83
// https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
// 原版本的 identity 对应多参数传递有问题. 舍弃
export function compose(...fns: Function[]) {
  if (fns.length < 2) throw new Error('compose functions should greater than two');
  return fns.reduceRight(
    (preFn, curFn) => (...args: any[]) => curFn(preFn(...args))
  );
}

// 自己实现的版本, 比如上的版本健壮, 包含只输入一个function的情况
export function compose2(...fns: Function[]) {
  return function(...rest: any[]): any {
    return fns.reduceRight((res, curFn, index) => {
      if (index === 1) {
        return curFn(...res);
      }
      return curFn(res);
    }, rest);
  }
}

export const not = (x: any) => !x;

export function flat(arr: any[], depth: number) : any[]{
  if (depth == 0) return arr;
  if (arr.every((v) => !Array.isArray(v))) return arr;

  const newArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      newArr.push(...item);
    } else {
      newArr.push(item);
    }
  }

  return flat(newArr, depth-1);
}

export const flatMap2 = compose2(partialRight(flat, 1), Array.prototype.map);

export function flatMap(arr: any[], mapFn: any) {
  return flat(arr.map(mapFn), 1);
}

export function cycle(times: number, arr: any[]): any[] {
  if (times === 0) return [];
  return arr.concat(cycle(times-1, arr));
}

export function *zip(...arrList: any[]) {
  const iteratorList = arrList.map(arr => arr[Symbol.iterator]());

  while (true) {
    let itemList = iteratorList.map(iter => iter.next());
    if (itemList.some(v => !!v.done)) { break; }
    yield itemList.map(v => v.value);
  }
}

export function unzip(iterable: IterableIterator<any>) {
  let acc: any[] = [];

  while (true) {
    const { value: zipList, done } : IteratorResult<any[]> = iterable.next();
    if (done) break;

    acc = zipList.reduce((na, v) => {
      const arr = acc.shift() || [];
      arr.push(v);
      na.push(arr);
      return na;
    }, []);
  }

  return acc;
}

export function take(n: number, iterable: IterableIterator<any>): any {
  let count = 0;

  return function *() {
    while (count < n) {
      const { value, done } = iterable.next();
      if (done) { break; }
      yield value;
      count += 1;
    }
    count = 0;
  }
}

export function andify(...preds: Array<any>) {
  return function(argList: any[]) {
    const everything = (ps: any[], truthy: boolean): boolean => {
      if (ps.length <= 0) return truthy;

      const [pred, ...rest] = ps;
      return argList.every(pred) && everything(rest, truthy);
    }

    return everything(preds, true);
  }
}

export function andify2(...preds: Array<any>) {
  return (argList: any[]) => argList.every(o => preds.every(p => p(o)))
}

export function deepFlat(arr: any[]): any {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      const acc = pre.concat(deepFlat(cur));
      return acc;
    }
    pre.push(cur);
    return pre;
  }, []);
}

export function deepFlat2(arr: any): any {
  if (Array.isArray(arr)) {
    return [].concat.apply([], arr.map(deepFlat2));
  } else {
    return [arr];
  }
}

export function repeatedly(n: number, fn: Function) {
  return Array(n).fill(0).map(() => fn());
}

// return [start, end) number
export function random(start: number, end: number) {
  return start + Math.floor(Math.random() * (end - start));
}

// const tenRandom = repeatedly(10, randAscii).join('');
export const randAscii = () => random(0, 36).toString(36);

// repeatRand(20);
// const repeatRand = compose((v:any[]) => v.join(''), partialRight(repeatedly, randAscii));
export const repeatRand = (n: number) => {
  const ra = function *() {
    yield randAscii();
  }

  return Array.from(take(n, ra())).join('');
}

export function deepFreeze(obj: any) {
  const names = Object.getOwnPropertyNames(obj);

  names.forEach((n) => {
    const prop = obj[n];

    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(obj);
}

export function distinctByProp(arr: any[], propFn: Function) {
  const map = new Map();

  arr.forEach((cur) => {
    const key = propFn(cur);

    // 以第一个出现为准
    if (map.has(key)) return;

    map.set(key, cur);
  });

  return map.values();
}

export function once(fn: Function) {
  let done = false;

  return (...rest: any) => {
    !done && fn.apply(this, rest);
    done = true;
  }
}