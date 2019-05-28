export {}

function prime(arr: number[]) {
  let numList = arr;
  let sub = 0;

  while (true) {
    const first = numList[sub];
    const boundary = numList[numList.length - 1];

    if (first >= boundary) break;

    numList = numList.filter((v) => {
      return v===first || v % first != 0;
    });

    sub += 1;
  }

  return numList;
}

const arr = Array.from(Array(100), (v, i) => i += 2);

const res = prime(arr);
console.log(`res ${JSON.stringify(res)}`);