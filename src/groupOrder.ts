export {}

function groupOrder(arr: any[]) {
  return arr.reduce((acc, cur) => {
    for (const [k, v] of Object.entries(cur)) {
      const vList: any[] = acc[k] || [];
      
      if (vList.every((e => e[k] !== v))) {
        vList.push({[k]: v});
      }

      vList.sort((a, b) => b[k] - a[k]);
      acc[k] = vList;
    }

    return acc;
  }, {});
}

const arr = [
  {a: 1, c: 3},
  {a: 11, b: 2},
  {a: 111, c: 3},
  {b: 22},
  {a: 1111, b:222},
];

const res = groupOrder(arr);
console.log(`res ${JSON.stringify(res)}`);