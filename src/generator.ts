export {}

class Generator {
  *[Symbol.iterator]() {
    yield 1;
  }
}

class Generator1 {
  [Symbol.iterator]() {
    let val = 0;
    return {
      next() {
        val += 1;
        if (val >= 10) return { done: true }; 
        return { value: val, done: false};
      }
    }
  }
}

function *genFunc(x: number) {
  const res = x * (yield 1);
  return res;
}

function *genFunc2() {
  return 'heel';
}

const genRes = genFunc(6);
console.log(genRes[Symbol.iterator]);

const y1 = genRes.next();
console.log(`res ${JSON.stringify(y1)}`);
const y2 = genRes.next(7);
console.log(`res ${JSON.stringify(y2)}`);

const genRes2 = genFunc2();
const gy = genRes2.next();
console.log(`gy2 ${JSON.stringify(gy)}`);


const gen = new Generator();

const res = Array.from(gen);
console.log(`res ${JSON.stringify(res)}`);

const gen1 = new Generator1();
const res1 = Array.from(gen1 as any);
console.log(`res ${JSON.stringify(res1)}`);

