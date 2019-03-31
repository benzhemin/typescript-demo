export {};
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