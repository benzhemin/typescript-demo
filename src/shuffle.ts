export {}

function shuffle(arr: any[]) {
  const res: any[] = [];

  while (arr.length > 0) {
    const removeIndex = Math.floor(Math.random() * arr.length);
    const item = arr.splice(removeIndex, 1);
    res.push(...item);
  }

  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

Array.from({ length: 10}, () => {
  const randArr = shuffle(arr.slice());
  console.log(`randArr ${JSON.stringify(randArr)}`);
});
