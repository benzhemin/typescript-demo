
const flatTree = [
  {id: 1},
  {id: 2, pid: 1},
  {id: 3, pid: 2},
  {id: 4, pid: 2},
  {id: 5, pid: 1},
  {id: 6, pid: 4},
];

function findNode(nodeList: any, id: number) : any {
  if (!id) return { find: false };

  for (const n of nodeList) {
    if (n.id === id) return { find: true, node: n };
    if (n.child) return findNode(n.child, id);
  }

  return { find: false };
}

function converToTree(ftree: any[]) {
  const deepTree: any[] = [];

  ftree.forEach((node) => {
    const { find, node: n } = findNode(deepTree, node.pid);

    if (find) {
      const childList = n.child || [];
      childList.push(node);
      n.child = childList;
    } else {
      deepTree.push(node);
    }
  });

  return deepTree;
}

const deepTree = converToTree(flatTree);
console.log(`deepTree ${JSON.stringify(deepTree)}`);



