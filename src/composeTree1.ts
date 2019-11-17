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

function composeTree(depList: Array<Dep>) {
  const depMap = new Map();
  depList.forEach(d => depMap.set(d.id, d));

  depList.forEach(d => {
    const parentId = d.parentId;
    if (depMap.has(parentId)) {
      const parentDep = depMap.get(parentId);
      parentDep.children = parentDep.children || [];
      parentDep.children.push(d);
    }
  });

  // filter head list
  depList.sort((a, b) => a.parentId - b.parentId);
  const [{ parentId }] = depList;
  const rootDepList = depList.filter(dep => dep.parentId === parentId);

  return rootDepList;
}

const res = composeTree(list);
console.log(`${JSON.stringify(res)}`);