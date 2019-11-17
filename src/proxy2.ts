export {};

const user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

const userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    // return receiver[prop];
    return Reflect.get(target, prop, receiver);
  },
});

const admin: any = {
  __proto__: userProxy,
  _name: 'admin',
};

console.log(admin.name);


const obj = {
  a: 1,
  b: 2,
};

const receiver = {
  a: 'hello',
};

const val = Reflect.get(obj, 'a', receiver);
console.log(`val ${val}`);