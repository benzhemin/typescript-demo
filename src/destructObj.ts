export {}

const a = {
  a: 11,
  b: 22
};

const b = {
  ...a,
  a: 'kjkjlk',
  b: true,
  c: 'heelo',
};

console.log(`${JSON.stringify(b)}`);