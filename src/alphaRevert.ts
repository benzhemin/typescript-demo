import _ from 'lodash'

function alphaRevert(str: string) {
  return Array.from(str).map((v) => {
    if (v.toUpperCase() === v) return v.toLowerCase();
    return v.toUpperCase();
  }).join('');
}

function alphaRevert1(str:string) {
  const cc = (s: string) => s.charCodeAt(0);
  const isLower = (s: string) => cc('a') <= cc(s) && cc(s) <= cc('z');

  return Array.from(str).map(v => {
    let code: number;
    if (_.inRange(cc(v), cc('a'), cc('z'))) {
      code = cc('A') + cc(v) - cc('a');
    } else {
      code = cc('a') + cc(v) - cc('A');
    }
    return String.fromCharCode(code);
  }).join('');
}

function alphaRevert3(str: string) {
  const mapCode = ['A', 'Z', 'a', 'z'].reduce((acc: any, cur) => {
    acc[cur] = cur.charCodeAt(0);
    return acc;
  }, {});

  const diff = mapCode['a'] - mapCode['A'];

  return Array.from(str, (s) => {
    const code = s.charCodeAt(0);

    if (code >= mapCode['a'] && code <= mapCode['z']) {
      return String.fromCharCode(code - diff);
    } else if (code >= mapCode['A'] && code <= mapCode['Z']) {
      return String.fromCharCode(code + diff);
    } else {
      return s;
    }
  }).join('');
}

function generAlpha(isLower: boolean = true) {
  const alphaList = isLower ? ['a', 'z']: ['A', 'Z'];
  const [start, end] = alphaList.map(v => v.charCodeAt(0));

  const charList: string[] = [];

  for (let s = start; s<=end; s++) {
    charList.push(String.fromCharCode(s));
  }

  return charList;

  /*
  const range = alphaList.map(v => v.charCodeAt(0)).reduce((a, b) => b - a);

  return Array.from(Array(range), (v, index) => {
    return String.fromCharCode(alphaList[0].charCodeAt(0) + index);
  });
  */

  /*
  const charList = [];
  for (let s = start.charCodeAt(0); s<= end.charCodeAt(0); s += 1) {
    charList.push(String.fromCharCode(s));
  }
  

  return charList;
  */
}

const str = 'aBc';
const res = alphaRevert3(str);
console.log(`res ${res}`);