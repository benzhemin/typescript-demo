export {};

/*
function filterPrime(n: number) {
  let numList = Array.from(Array(n)).map((v, index) => index + 1);

  // start from 2
  for (let i=2; i<n; i++) {
    numList = numList.filter(v => {
      const mod = v % i;

      // 小于自身的需要保留
      return v <= i || mod != 0;
    });
  }

  return numList;
}
*/

/*
function filterPrime(n: number) {
  let numList = Array.from(Array(n)).map((v, index) => index + 1);

  numList = numList.filter((v) => v > 1);

  for (let i=2; i<n; i++) {
    numList = numList.filter(v => {
      const mod = v % i;

      return mod != 0 || v <= i;
    });
  }

  return numList;
}
*/

/*
const getLast = (arr: any[]) => arr[arr.length];

function filterPrime(num: number) {
  const numList = Array.from(Array(num)).map((v, index) => index+1);

  let start: number = 2;
  while (true) {
    if (start > Math.ceil(Math.sqrt(num))) { break; }

    for (let i=numList.length-1; i>start; i--) {
      if (numList[i] % start === 0) {
        numList.splice(i, 1);
      }
    }

    start += 1;
  }

  return numList;
}
*/


function filterPrime(num: number) {
  const numList = Array.from(Array(num)).map((v, index) => index+1);
  const subSet = new Set();

  const max = Math.ceil(Math.sqrt(num));
  for (let num = 2; num < max; num += 1) {
    numList.forEach((v, index) => {
      if (v % num == 0 && v > num) {
        subSet.add(index);
      }
    });
  }

  return numList.filter((v, index) => !subSet.has(index));
}


const prime = 'prime';
console.time(prime);
const res = filterPrime(100000);
console.timeEnd(prime);
console.log(`total ${res.length}`);
console.log(`res ${JSON.stringify(res)}`);

