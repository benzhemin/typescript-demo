class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;

  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greet1: Greeter = new Greeter();
console.log(greet1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey, there";

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet());