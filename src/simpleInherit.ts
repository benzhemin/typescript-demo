export {}

function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return `I am ${this.me}`;
}

function Bar(who) {
  Foo.call(this, who);
}


// inheritance
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  console.log(`hello, ${this.identify()}.`)
}

const b1 = new Bar('b1');
const b2 = new Bar('b2');

b1.speak();
b2.speak();
