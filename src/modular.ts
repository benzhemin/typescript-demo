export {}

const MyModules = (function() {
  const modules = {};

  function define(name: string, deps: string[], fn: Function) {
    const depList: any[] = [];
    for (const dep of deps) {
      depList.push(get(dep));
    }

    modules[name] = fn.apply(fn, depList);
  }

  function get(name){
    return modules[name];
  }

  return {
    define,
    get,
  }
})();

MyModules.define('bar', [], function() {
  function hello(who) {
    return `Let me introduce: ` + who;
  }

  return { hello };
});

MyModules.define('foo', ['bar'], function(bar) {
  const hungry = 'hippo';

  function awosome() {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return { awosome };
});

const bar = MyModules.get('bar');
const foo = MyModules.get('foo');

console.log(bar.hello('hiiiiiiiiiip'));
foo.awosome();