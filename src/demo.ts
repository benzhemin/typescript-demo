console.log('hellow ts');

const obj  = { a:1, b:2 };

for (const [k, v] of Object.entries(obj)) {
  console.log(`key ${k} value ${v}`);
}