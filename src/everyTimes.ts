export {}

function executeEveryTime(wait: number, times: number, fn: Function) {
  if (times === 0) return;

  setTimeout(() => {
    fn.call(null);
    
    executeEveryTime(wait, times-1, fn);
  }, wait);
}

const delay = (wait) => {'8'
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  })
}

async function executeEvery(wait: number, times: number, fn: Function) {

  while (times > 0) {

    await delay(wait);
    fn.call(null);

    times -= 1;
  }

}

const log = () => console.log('hello world');

//executeEveryTime(1000, 3, log);
executeEvery(1000, 4, log);