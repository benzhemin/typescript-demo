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

console.log('Color.Green === 100', Color.Green === 100);

let myColor = Color.Blue;
console.log(myColor);

interface HH {}

class AHH implements HH {}

function activator<T extends HH>(type: { new(): T ;} ): T {
  return new type();
}

const ahh : AHH = activator<AHH>(AHH);

class A {}
class B<T> {
    prop: T;
    constructor(Type: { new(): T }) {
        this.prop = new Type();
    }
}

const b = new B<A>(A);

interface KeyValueProcessor<T, U> {
  (key: T, val: U) : void;
}

function addKeyValue(key:number, value:string): void {
  console.log('addKeyValue: key = ' + key + ', value = ' + value);
}

function updateKeyValue(key: number, value: string): void {
  console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}

let kvp: KeyValueProcessor<number, string> = addKeyValue;

interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (salary: number) => number;
  getEarn(earn: number) : number;
}

interface Bird {
  fly(): void;
  layEgg(): void;
}

interface Fish {
  swim(): void;
  layEgg(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    fly() {

    },
    layEgg() {
      console.log('hello');
    }
  }
}

interface Padder {
  getPaddingString(): String;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number){}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('  ');
}

let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  
}

let s = 'string';

interface Per {
  name: string;
  age: number;
  location: string;
}

interface Pers {
  [x: string] : Person;
}

type K = keyof { [x:string] : Per};

interface BankAccount {
  money: number;
  deposit: (value: number) => void;
}

interface Customer {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
}

let bankAccount: BankAccount = {
  money: 200,
  deposit(value: number) {
    this.money += value;
  }
};

let myself: Customer = {
  name: 'Max',
  bankAccount,
  hobbies: ['sports', 'cooking'],
};

myself.bankAccount.deposit(3000);

console.log(JSON.stringify(myself));

interface Pson {
  name: string;
  age: number;
}

let pson: Pson = {
  name: 'Jarid',
  age: 35,
};

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

let mapping = pluck(pson, ['name', 'age']);
console.log(`mapping ${mapping}`);

function f() {
  console.log('f(): evalutaed');
  return function (target: Object, propertyKey:string, descriptor:PropertyDescriptor) {
    console.log('f(): called');
  }
}

function g() {
  console.log('g(): evaluated');
  return function(target: Object, propertyKey:string, descriptor: PropertyDescriptor) {
    console.log('g(): called');
  }
}

class C {
  @f()
  @g()
  method() {}
}

const c = new C();
c.method();

interface ReturnString {
  (): string;
}

const foo: ReturnString = () => 'hello';
console.log(`foo ${foo()}`);

interface SquareConfig {
  color? : string;
  width?: number;
}

function createSquare(config: SquareConfig){

}

let mySquare = createSquare({ color:'red'});

class Hell {
  private _name: string = 'hello';

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

type Constructor<T> = new (...args: any[]) => T;
const Injectable = (): <TFunction extends Function>(target: TFunction) => TFunction | void =>  {
  return (target => {})
};

const injectable = function(): ClassDecorator {
  return (target) => {};
}

// var injectable = function () { return function (target) { }; };

const callback = (): string => 'string';

interface SearchFunc {
  (source: string, subString: string) : boolean;
  (source: string) : boolean;
}

// function type has two parts : parameter list and return type, we make it clear by using => between parameters and return types

function reverse<T>(itemList: T[]): T[] {
  return itemList.reduce((accList: T[], cur) => {
    accList.unshift(cur);
    return accList;
  }, []);
}

const sampleList = [1, 2, 3];
const reverseList = reverse(sampleList);

console.log(`sampleList: ${sampleList} reverseList ${reverseList}`);


export enum Weekday {
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

export namespace Weekday {
  export function isBussinessDay(day: Weekday) {
    return day >= Weekday.Monday && day <= Weekday.Friday;
  }
}

function logName(something: { name: string}) {
  console.log(something.name);
}

const person = { name: 'matt', job: 'being awesome' };

logName({ name: 'matt' });;
logName(person);

interface Gro {
  [index: string]: number;
}

interface GroCollection {
  [index: string]: Array<Gro>;
}

const groupingList: Array<Array<Gro>> = [
  [{a: 1}, {c: 3},],
  [{a: 11}, {b: 2}],
  [{a: 111}, {c: 3}],
  [{b: 22}],
  [{a: 1111}, {b: 222}]
];

const singleKey = (o: Gro) => Object.keys(o).find((_, index) => index === 0)!;
const singlVal = (o: Gro) => Object.values(o).find((_, index) => index === 0)!;

const result = groupingList.reduce((flatObj, curList) => {
  curList.forEach((gro) => {
    const key = singleKey(gro);
    const fList = flatObj[key] = flatObj[key] || [];

    const findValue = fList.find(g => singlVal(gro) === singlVal(g))
    !findValue && fList.push({ [key]: gro[key]});
    fList.sort((a, b) => singlVal(b) - singlVal(a));
  });

  return flatObj;
}, {} as GroCollection);

console.log(`result ${JSON.stringify(result)}`);


interface ObjName {
  name: string;
};

const dObj = {};
Object.defineProperty(dObj, 'name', {
  configurable: false,
  get() {
    console.log('get name');
    return 'hello';
  },
  set(newVal) {
    console.log(`set name newValue ${newVal}`);
  }
});


const name = (dObj as ObjName).name;
(dObj as ObjName).name = 'aaa';

const nameDescriptor = Object.getOwnPropertyDescriptor(dObj, 'name');

console.log(`dObj name descriptor ${Object.getOwnPropertyDescriptor(dObj, 'name')}`);