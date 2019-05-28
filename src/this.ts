export {}

function inner() {
  console.log(this);
}

const obj = {
  a: 'a',
  b: function() {
    console.log(this.a);
    inner()
  }
}

obj.b();


const a = 0;

function foo() {
  console.log(this.a);
}

function bar(fn) {
  fn();
}

const o = {
  a : 2,
  foo: foo,
};

bar(o.foo);
