export {}

function combineList(mainList: string[], viceList: string[]) {
  return mainList.map(val => {
    const filterList = viceList.filter(item => item.startsWith(val));
    return filterList.concat([val]);
  });
}

const mainList = ['A', 'B', 'C', 'D'];
const viceList = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];

const res = combineList(mainList, viceList);

console.log(`res ${JSON.stringify(res)}`);