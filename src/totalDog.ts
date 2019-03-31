
function totalDog(month: number) {
  let dogPairList: number[] = [0];
  const BIRTH_MONTH = 3;

  for (let m=1; m<=month; m++) {
    dogPairList = dogPairList.map(i => i+1);

    const birthList = dogPairList.filter((m) => m>=3);
    dogPairList = dogPairList.concat((new Array(birthList.length).fill(0)));

    console.log(`${m} month have ${dogPairList.length} dogs`);
  }
}

totalDog(10);

