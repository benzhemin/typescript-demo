/*
function *foo() {
  console.log('begin');
  yield *[1, 2, 3, 5];
  console.log('end');
}

const gen = foo();

let next = gen.next();
while (!next.done) {
  console.log(`yield value ${next.value}`);
  next = gen.next();
}
*/

/*
function *logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const logGen = logGenerator();

let next: any;
let num = 100;

do {
  next = logGen.next(num);
  num += 1;
} while (!next.done);
*/

/*
function *outer() {
  yield 'begin';

  const rt = yield *inner();
  console.log(`rt ${rt}`);

  yield 'end';
}

function *inner() {
  yield 1;
  yield 2;
  return 'hello world';
}

const gen = outer();
let next = gen.next();

while(!next.done) {
  next = gen.next();
}
*/

/*
function foo(x) {
  console.log(`x ${x}`);
}

function *bar() {
  yield;
  foo(yield);
}

const gen = bar();
const n1 = gen.next();
console.log(`n1 ${JSON.stringify(n1)}`);
const n2 = gen.next();
console.log(`n2 ${JSON.stringify(n2)}`);
const n3 = gen.next('heeellllo');
console.log(`n3 ${JSON.stringify(n3)}`);
*/


