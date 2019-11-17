export {}

function shortenPath(curObj, curPath, targetObj) {
  Object.entries(curObj).forEach(([key, value]) => {
    const path = curPath ? `${curPath}.` : '';
    if (typeof value === 'object' && value != null) {
      shortenPath(value, `${path}${key}`, targetObj);
    } else {
      targetObj[`${curPath}.${key}`] = value;
    }
  });
}

const obj = {
  a : {
    b: {
      c: {
        dd: 'hello',
        cc: 'world',
      },
      d: 'sasa',
    },
    xx: {
      sas: {
        name: 'xiaozhang',
      }
    }
  }
};

const target = {};

shortenPath(obj, '', target);

console.log(`res: ${JSON.stringify(target)}`);