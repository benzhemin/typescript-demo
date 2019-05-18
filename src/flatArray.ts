export {};

function flatArray(arr: any[]) {
  let res: any[] = [];

  arr.forEach(v => {
    if (Array.isArray(v)) {
      res = res.concat(flatArray(v));
    } else {
      res.push(v);
    }
  });

  return res;
}

function distinctSort(arr: any[]) {
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

const arr = [[9, [10, [11, 12]]], 1, 2, 3, [4, 5], 8];
const res = distinctSort(flatArray(arr));


console.log(`res: ${JSON.stringify(res)}`);