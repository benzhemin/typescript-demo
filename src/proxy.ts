export {}

const target = {};
const handler = {
  get(target, propKey, receiver) {
    console.log('get ' + propKey);
    return 123;
  }
};

const proxy = new Proxy(target, handler);

const res = proxy.foo;

console.log(`res ${res}`);

function traceMethod(target) {
  const methodHandler = {
    get(target, propKey, receiver) {
      const originMethod = target[propKey];
      return function (...args) {
        // console.log(this);
        console.log('brefore apply');

        // caution: notice the difference this and target in apply argument.,
        const res = originMethod.apply(this, args);
        console.log('after apply');
        console.log(propKey + JSON.stringify(args) + ' -> ' + JSON.stringify(res));
        return res;
      };
    }
  };
  return new Proxy(target, methodHandler);
}

const obj = {
  aa: 111,
  multiply(x, y) {
    return x*y;
  },
  squared(x) {
    return this.multiply(x, x);
  },
};

const tracedObj = traceMethod(obj);
// tracedObj.multiply(2, 7);
tracedObj.squared(2);

console.log('end');

const user = {
  name: 'peer',
  _password: '...888',
};

const userProxy = new Proxy(user, {
  get(target, prop) {
    if (typeof prop === 'string' && prop.startsWith('_')) {
      throw new Error('Access denied');
    }
    let val = target[prop];
    if (typeof val === 'function') {
      val.bind(target);
    }
    return val;
  },
  set(target, prop, val) {
    if (typeof prop === 'string' && prop.startsWith('_')) {
      throw new Error('Access denied');
      return false;
    } else {
      target[prop] = val;
      return true;
    }
  },
  ownKeys(target) {
    return Reflect.ownKeys(target).filter((key => !String(key).startsWith('_')))
  }
});

Object.keys(userProxy).forEach(v => console.log(v));
