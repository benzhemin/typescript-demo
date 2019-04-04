import { count } from "rxjs/operators";

export {};

export function curry(fn: Function) {
  return function(arg: any) {
    return fn.apply(null, [arg]);
  }
}

export function curryRight(fn: Function, ...rest: any[]) {
  return function(arg: any) {
    return fn.apply(null, [arg, ...rest]);
  }
}

export function curryLeft(fn: Function, ...rest: any[]) {
  return function(arg: any) {
    return fn.apply(null, [...rest, arg]);
  }
}

const parseIntDecimal = curryRight(parseInt, 10);
const parseIntBinary = curryRight(parseInt, 2);

console.log(`
  ${parseIntDecimal('111')},
  ${parseIntDecimal('222')},
`)

console.log(`
  ${parseIntBinary('111')},
  ${parseIntBinary('101')},
`)

console.log(`${
  JSON.stringify(
    ['11', '11', '11', '11', '13', '24'].map(curry(parseInt))
  )
}`);

function countBy(arr: any[], fn: Function) {
  return arr.reduce((o, cur) => {
    const key = fn(cur);
    const count = o[key] | 0;
    o[key] = (count + 1);
    return o;
  }, {});
}

interface Play {
  artist: string, 
  track: string
};

const plays = [
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Ben Frost', track: 'Stomp'},
  {artist: 'Ben Frost', track: 'Stomp'},
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Emeralds', track: 'Snores'},
];

const songToString = ({ artist, track} : Play) => [artist, track].join('-')

const countByRes = countBy(plays, songToString);

console.log(`players countBy ${JSON.stringify(countByRes)}`);

export function uniq(arr: any[], itereeFn: Function) {
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

const distinctPlayers  = uniq(plays, songToString);
console.log(`distinct players ${JSON.stringify(distinctPlayers)}`);
