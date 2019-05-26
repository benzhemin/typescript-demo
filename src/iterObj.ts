const a = {
  a: 1,
  b: '2222',
  /*
  *[Symbol.iterator]() {
    const keys = Object.keys(this);
    for (const key of keys) {
      yield key;
    }
  }
  */

  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;

    return {
      next() {
        return {
          value: keys[index++],
          done: index > keys.length,
        }
      }
    }
  }
}



for (const k of a) {
  console.log(`key ${k}`);
}
