export {}

function DefProp() {
  let temp = 300;
  
  Object.defineProperty(this , 'temp', {
    enumerable: true,
    configurable: false,
    get() {
      console.log('get!');
      return temp;
    },
    set(value){
      temp = value;
    }
  });

  Object.defineProperty(this, 'acc', {
    enumerable: true,
    configurable: false,

    value: 111,
  });
}

const def = new DefProp();
console.log(def.temp);
def.temp = 100;
console.log(def.temp);

console.log(`temp ${JSON.stringify(Object.getOwnPropertyDescriptor(def, 'temp'))}`);

console.log(def.acc);