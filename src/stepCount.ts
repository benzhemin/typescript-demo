export {}

/**
 * 一共有N个台阶，一次走一个或两个台阶，问走完一共可以有多少种走法（多少个解）
 * @param n 台阶数
 * @param eachList 一次可以走几个台阶 
 */
function stepCount(n: number, eachList: number[]) {
  let count = 0;
  const logSteps = (stepList: number[]) => console.log(`step => ${JSON.stringify(stepList)}`);

  function stepRecur(stepNum: number, stepHisList: number[]) {
    if (stepNum < 0) return;
    if (stepNum === 0) {
      count += 1;
      logSteps(stepHisList);
      return;
    }

    for (const step of eachList) {
      const remain = stepNum - step;
      const hisList = stepHisList.slice();
      hisList.push(step);

      stepRecur(remain, hisList);
    }
  }

  stepRecur(n, []);
  
  console.log(`total count ${count}`);
}

stepCount(4, [1, 2]);

