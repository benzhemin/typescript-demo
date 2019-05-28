export {}

function flat(arr: any[]) {
  const res: any[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item))
    } else {
      res.push(item);
    }
  }

  return res;
}

function flat3(arr: any[]): any {
  return [].concat(...arr.map(v => Array.isArray(v) ? [].concat(flat3(v)) : v));
}

function flat2(arr: any[]) {
  const res: any[] = [];

  while (arr.length > 0) {
    const top = arr.pop();

    if (Array.isArray(top)) {
      for (const item of top) {
        if (Array.isArray(item)){
          arr.push(item);
        } else {
          res.push(item);
        }
      }
    } else {
      res.push(top);
    }
  }

  return res;
}

function flatDistAsc(arr: any[]) {
  const farr: any[] = flat3(arr);

  return Array.from(new Set(farr)).sort((a, b) => a - b);
}

const arr = [[3, 12, 1, 2, 2], [2, 3, 5, 5], [6, 7, 8, [11, 12, [12, 13, [14]]]]];

const farr = flat3(arr);
const res = flatDistAsc(arr);

console.log(`flat ${JSON.stringify(farr)}`);
console.log(`res ${JSON.stringify(res)}`);