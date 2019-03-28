function isDiff(num: number) {
  const numList = String(num).split('');

  return !numList.some((val, index) => {
    const fnList = numList.filter((v, i) => i !== index);
    return fnList.some(v => v === val);
  });
}

function containSelf(res: number, num: number) : boolean {
  const resString = String(res);
  const numList = String(num).split('');
  
  return numList.some(v => resString.includes(v));
}

function sixSquare() {
  for (let i=100000; i<=999999; i++) {
    if (isDiff(i) && !containSelf((i*i), i)) {
      console.log(`i = ${i} i*i = ${i*i}`);
    }
  }
}

sixSquare();