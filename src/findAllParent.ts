export {}

const tree = {
  id: '1',
  name: 'test1',
  children: [
      {
          id: '11',
          name: 'test11',
          children: [
              {
                  id: '111',
                  name: 'test111'
              },
              {
                  id: '112',
                  name: 'test112'
              }
          ]
      },
      {
          id: '12',
          name: 'test12',
          children: [
              {
                  id: '121',
                  name: 'test121'
              },
              {
                  id: '122',
                  name: 'test122'
              }
          ]
      }
  ]
};

interface Area {
  id: string,
  name: string,
  children?: Array<Area>
};

function findAllParentId(tree: Area, id: string) {
  const stack = [tree];
  while(stack.length > 0) {
    const top = stack.slice().pop();
    if (top.id === id) break;

    if (top.children && top.children.length>0) {
      const cTop = top.children.pop();
      stack.push(cTop);
    } else {
      stack.pop();
    }
  }
  return stack.map(n => n.id);
}

const deepCopy = obj => JSON.parse(JSON.stringify(obj));
const idList = findAllParentId(deepCopy(tree), '122');
console.log(`${idList}`);