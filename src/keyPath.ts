export {}

function assignKeyPath(obj, path, value) {
  const pathList: string[] = path.split('.');

  let assign = obj;
  while (pathList.length > 0) {
    const key = pathList.shift();

    if (pathList.length === 0) {
      assign[key] = value;
      break;
    }

    // assign[key] = assign[key] || {};
    assign = typeof assign[key] === 'object' ? assign[key] : (assign[key] = {});
  }

  return obj;
}

const obj = assignKeyPath({}, 'aa.bb.cc', 'hello');
const obj1 = assignKeyPath({aa: {dd: 1}}, 'aa.bb.cc', 'hello');
const obj2 = assignKeyPath({aa: 1}, 'aa.bb.cc', 'hello');
console.log(`obj ${JSON.stringify(obj)}`);
console.log(`obj ${JSON.stringify(obj1)}`);
console.log(`obj ${JSON.stringify(obj2)}`);

