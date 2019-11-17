export {};

const upperFirst = (arr: Array<string>) => {
  return arr.map(item => {
    const first = item.slice(0, 1);
    const rest = item.slice(1);

    return first.toUpperCase() + rest;
  });
};


const arr: Array<string> = ['apple', 'pen', 'apple-pen'];
const result = upperFirst(arr);

console.log(`res ${JSON.stringify(result)}`);



