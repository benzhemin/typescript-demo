export function once(fn: Function) {
  let done = false;

  return (...rest: any[]) => {
    !done && fn.apply(this, rest);
    done = true;
  }
}

function log(msg) {
  console.log(`hello ${msg}`);
}

const onceLog = once(log);
onceLog('one');
onceLog('one');

const anOnceLog = once(log);
anOnceLog('two');
anOnceLog('two');