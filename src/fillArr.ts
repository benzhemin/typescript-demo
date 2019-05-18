export {}

const arr = Array(10).fill({ id: 1 });
console.log(`arr ${JSON.stringify(arr)}`);

arr[0].id = 7;
console.log(`arr ${JSON.stringify(arr)}`);

const res = arr.map((v, i) => {
  return Object.assign({}, v, { id: i});
});
console.log(`res ${JSON.stringify(res)}`);