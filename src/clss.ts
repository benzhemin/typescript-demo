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