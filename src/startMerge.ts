export {};

function startMerge(startList: any[], arrayList: any[]) {
  const map = new Map();

  startList.forEach(v => {
    arrayList.forEach((item: string) => {
      if (item.startsWith(v)) {
        const matchList = map.get(v) || [];
        matchList.push(item);
        map.set(v, matchList);
      }
    })
  });

  const res: any[] = [];
  for (const [key, value] of map.entries()) {
    [].push.apply(res, [...value, key] as any);
  }
  return res;
}

const rawList = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const startList = ['A', 'B', 'C', 'D'];

const res = startMerge(startList, rawList);
console.log(`res ${JSON.stringify(res)}`);