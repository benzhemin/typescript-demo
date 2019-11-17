export {}

class RegExp1 extends RegExp {
  [Symbol.match](str: string) {
    console.log('match in regExp1');

    const res = RegExp.prototype[Symbol.match].call(this, str);
    return res ? ['valid']: ['invalid'];
  }
}

const reg = new RegExp1('([0-9]+)-([0-9]+)-([0-9]+)');

console.log('2012-07-02'.match(reg));