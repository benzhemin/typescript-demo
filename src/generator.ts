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

const gen = new Generator();

const res = Array.from(gen);
console.log(`res ${JSON.stringify(res)}`);

const gen1 = new Generator1();
const res1 = Array.from(gen1 as any);
console.log(`res ${JSON.stringify(res1)}`);

