export {}
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];

interface Dep {
  id: number,
  name: string,
  parentId: number,
  children?: Array<Dep>
};

function deepCompose(rawList: Array<Dep>, comList: Array<Dep>) {
  const depList = rawList.slice();
  while (depList.length > 0) {
    const node = depList.shift();

    // append child nodes
    const children = comList.filter(d => d.parentId === node.id);
    if (children.length === 0) continue;

    node.children = children;

    deepCompose(children, comList);
  }
}

function composeTree(depList: Dep[]) {
  // first sort by parentId asc
  depList.sort((a, b) => a.parentId - b.parentId);

  // filter head
  const [{ parentId }] = depList;
  let rootDepList = depList.filter(dep => dep.parentId === parentId);
  
  deepCompose(rootDepList, depList);

  return rootDepList;
}

const depTree = composeTree(list);
console.log(`${JSON.stringify(depTree)}`);