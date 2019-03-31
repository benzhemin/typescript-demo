export {};
const colors = ['red', 'blue', 'green'];

/*
for (const [index, color] of colors.entries()) {
  console.log(`index: ${index},t color: ${color}`);
}
*/

const map = (arr: any[], fn: any) => [].map.call(arr, fn);

const arr = [1, 3, 4];
const [_, ...rest] = arr;

function thousandComma1(num: string) {
  const numList = num.split('').reverse();

  let count = 0;
  const reCommaList = numList.reduce((acc: string[], cur: string) => {
    if (count > 0 && count % 3 == 0) {
      acc.push(',');
    }
    count++;
    acc.push(cur);
    return acc;
  }, []);

  return reCommaList.reverse().join('');
}

function thousandComma(num: String): string {
  const numList = num.split('').reverse();

  const res: string[] = [];
  numList.forEach((n, index) => {
    if (index > 0 && index % 3 === 0) {
      res.push(',');
    }
    res.push(n);
  });

  return res.reverse().join('');
}

console.log(thousandComma('100'));
console.log(thousandComma('1001'));
console.log(thousandComma('10011'));
console.log(thousandComma('100111'));
console.log(thousandComma('1001111'));
console.log(thousandComma('10011111'));

function groupBy(objList: any[], propFn: Function) {
  return objList.reduce((acc, o) => {
    const key = propFn(o);
    const vList = acc[key] || [];
    vList.push(o);
    acc[key] = vList;
    return acc;
  }, {});
}

const albums = [
  {title: 'Sabbath Bloody Sabbath', gen: 'Metal'},
  {title: 'Scientist', gen: 'Dub'},
  {title: '', gen: 'Metal'},
];

console.log(JSON.stringify(groupBy(albums, (o: any) => o.gen)));

function toPairList(obj: any) {
  return Object.keys(obj).map((k) => {
    return [k, obj[k]];
  });
}

function pairsToObj(pairList: any[]) {
  return pairList.reduce((o, pair) => {
    const [k, v] = pair;
    o[k] = v;
    return o;
  }, {});
}

const obj = { name: 'hello', title: 'world' };
console.log(JSON.stringify(toPairList(obj)));
console.log(JSON.stringify(pairsToObj(toPairList(obj))));


const condition = true;
const objExt = {
  ...condition && obj,
};

console.log(JSON.stringify(objExt));

function plunk(o: any, prop = '') {
  const propList = prop.split('.').filter(o => !!o);

  return propList.reduce((acc, cur) => {
    return acc && acc[cur];
  }, o);
}

const o = {
  name: {
    first: 'aaa',
    last: 'bbb',
  },
};

console.log(JSON.stringify(plunk(o)));
console.log(JSON.stringify(plunk(o, 'name')));
console.log(JSON.stringify(plunk(o, 'na')));
console.log(JSON.stringify(plunk(o, 'name.first')));
console.log(JSON.stringify(plunk(o, 'name.fir')));


const createNum = function() {
  let PRIVATE = 0;

  return {
    inc(n: number) {
      PRIVATE += n;
      return PRIVATE;
    },

    dec(n: number) {
      PRIVATE -= n;
      return PRIVATE;
    },

    log() {
      console.log(`current val ${PRIVATE}`);
    }
  }
}

const numOne = createNum();
const numTwo = createNum();

numOne.inc(10);
numTwo.dec(10);

numOne.log();
numTwo.log();
