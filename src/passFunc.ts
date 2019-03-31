interface SupplierFunc {
  () : String;
}

class A {
  constructor(public name: String) {}
  
  hello = () => {
    return 'hi ' + this.name;
  }
}

function nameFactory(supplier: SupplierFunc) {
  return function() {
    console.log(`hi ${supplier()}`);
  }
}

const aFunc = nameFactory(new A('aaa').hello);
const bFunc = nameFactory(new A('bbb').hello)

aFunc();
bFunc();