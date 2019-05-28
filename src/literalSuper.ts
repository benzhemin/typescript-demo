export {}

const a = {
  method() {
    console.log('this is method a');
  }
};

const b = {
  method() {
    super.method();
    console.log('this is method b');
  }
};

Object.setPrototypeOf(b, a);

b.method();