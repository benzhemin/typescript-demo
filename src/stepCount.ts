export {}

let count = 0;
const logStepList = (steps) => console.log(`step ${JSON.stringify(steps)}`);
const checkFinish = (remain, step, hisList) => {
  if (remain - step === 0) {
    count += 1;
    hisList.push(step);
  }
}

function stepCount(n: number, hisStepList: number[]) {
  const histryStepList = hisStepList.slice();
  const steps = [1, 2];

  if (n - steps[0] === 0) {
    count += 1;
    histryStepList.push(steps[0]);
    logStepList(histryStepList);
  }
}

function solveSteps(n) {
  let totalCount = 0;
  
  function stepDown() {
    
  }
}