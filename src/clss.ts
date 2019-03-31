import "reflect-metadata"

class Person{
  
  constructor(public name: String) {
    console.log(`${this.name}  constructor`);
  }

  greet() {
    console.log(`greet ${this.name}`);
  }

  static staticMethod() {
    console.log('static method');
  }
}

const p = new Person('hello');

console.log(p.greet === Person.prototype.greet);
Person.staticMethod();
p.greet();

class Greeter {
  greeting: String;
  constructor(message: String) {
    this.greeting = message;
  }

  greet() {
    return 'hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');

class Mammal {
  breathe() : string {
    return `I'am alive`;
  }
}

class WingedAnimal {
  fly() : string {
    return `I can fly`;
  }
}

class MyClass {}

enum Color {
  Gray,
  Green = 100,
  Blue = 2
}

let myColor = Color.Blue;
console.log(myColor);

let obj1 = {
  toString() {
    console.log('toString called');
    return 'Hello';
  }
}

const foo = 'hello world';
console.log(typeof foo);

@Reflect.metadata('inClass', 'A')
class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): String {
    return 'hello world';
  }
}

console.log(Reflect.getMetadata('inClass', Test));
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello'));

function classDecorator(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata('classMetaData', 'a', target);
  }
}

function methodDecorator(): MethodDecorator {
  return (target, property, descriptor) => {
    Reflect.defineMetadata('methodMetaData', 'b', target, property);
  }
}

@classDecorator()
class SomeClass {
  @methodDecorator()
  someMethod() {}
}

const scClassData = Reflect.getMetadata('classMetaData', SomeClass);
const scMethodData = Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod');

console.log(`class data ${scClassData}`);
console.log(`method data ${scMethodData}`);


