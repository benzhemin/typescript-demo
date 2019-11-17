function waitTimePromise(time: number, value: string = '') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

async function request(preTime: number, seq: string) {
  await waitTimePromise(preTime);

  const randTime = Math.floor(Math.random() * 10 * 1000);
  return waitTimePromise(randTime, `${seq} preTime ${preTime} waitTime: ${randTime}`);
}

async function dispatchActions() {
  const startTime = Date.now();

  const interval = 500;
  const reqCount = 10; 
  const reqList = Array.from({length: reqCount}).map((_, i) => request(interval * i, `aa - ${i}`));

  while (reqList.length > 0) {
    const resp = await reqList.shift();
    console.log(`resp ${resp} total ${Date.now() - startTime}`);
  }

  const endTime = Date.now();

  console.log(`finished total ${endTime - startTime}`);
}

dispatchActions();
