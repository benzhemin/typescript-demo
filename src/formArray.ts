export {}

function formArray(arr: any[]) {
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  return sortedArr.reduce((acc, cur) => {
    const lastArr = acc.slice().pop() || [];

    const lastVal = lastArr.slice().pop();
    if (lastVal!=null && cur-lastVal === 1) {
      lastArr.push(cur);
    } else {
      acc.push([cur]);
    }

    return acc;
  }, []);
}

function genNumArray(num: number, base = 100) {
  return Array.from({length: num}, () => Math.floor(Math.random()*base));
}

const arr = genNumArray(10, 15);//[2, 10, 3, 4, 5, 11, 10, 11, 20];
const res = formArray(arr);

console.log(`res ${JSON.stringify(res)}`);
