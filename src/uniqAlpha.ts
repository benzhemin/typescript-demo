// 连续
function firstUniqAlpha(str: string) {
  let lastAlpha = {
    val: '',
    count: 0
  };

  for (const s of str) {
    const { val, count } = lastAlpha;
    if (val && s !== val && count === 1) {
      return lastAlpha;
    }

    if (s === val) {
      lastAlpha = { val, count: count+1 };
    } else {
      lastAlpha = { val: s, count: 1 };
    }
  }

  return '';
}

// 不连续
function firstUniqAlpha2(str: string) {
  const alphaMap = Array.from(str).reduce((map, cur) => {
    const count = map.get(cur) || 0;
    return map.set(cur, count+1);
  }, new Map());

  const [ firstUniq = '' ] = Array.from(alphaMap.entries()).find(([k, v]) => v === 1) || [];

  return firstUniq;
}

const heelo = 'heelo';

const fst = firstUniqAlpha('heelo');
console.log(fst);
const sec = firstUniqAlpha('hheelo');
console.log(sec); 

const fst2 = firstUniqAlpha2('heelo');
console.log(fst2);
const sec2 = firstUniqAlpha2('hheelo');
console.log(sec2);