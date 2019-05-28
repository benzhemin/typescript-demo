export {}

const a: { prop?: any} = {};
Object.defineProperty(a, 'prop', {
  get() {
    return 'hello world'
  },
  enumerable: true,
});

console.log(`${a.prop}`);
console.log(`keys ${Object.keys(a)}`);

a.prop = 'hei';
console.log(`${a.prop}`);