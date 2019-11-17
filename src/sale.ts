const sales = {
  1: 222,
  2: 123,
  5: 888,
};

const res = Array(12).fill(null).map((val, index) => {
  const sale = sales[(index+1)];
  if (sale !== undefined) {
    return sale;
  }
  return val;
});

console.log(`res ${JSON.stringify(res)}`);

const bool = Boolean(0)
console.log(`bool ${bool}`);

const person = {
  get age() {
    console.log('getter');
    return this._age;
  },

  set age(val) {
    console.log('setter');
    this._age = val;
  }
};

person.age = 10;~
console.log(`age ${person.age}`);
person.age = 111;
console.log(`age ${person.age}`);