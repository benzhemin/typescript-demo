export {}

const startEnd = (arr: any[]) => {
  return [arr[0], arr[arr.length - 1]];
}

const inRange = (val: any, range: any[]) => {
  const [start, end] = startEnd(range);
  return val >= start && val <= end;
}

const intersection = (aList: any[], bList: any[]) => {
  const [aStart, aEnd] = startEnd(aList);

  return inRange(aStart, bList) || inRange(aEnd, bList);
}

function mergeArray(arrayList: Array<any[]>): Array<any[]> {
  const mergeList: Array<any[]> = [];

  arrayList.reduce((accList, curList) => {
    let inter = false;
    // 有交集
    accList.forEach((acc: any[]) => {
      if (!inter && intersection(acc, curList)) {
        inter = true;
        curList.forEach(v => !acc.includes(v) && acc.push(v));
        acc.sort();
      }
    });

    if (!inter) accList.push(curList);

    return accList;
  }, mergeList);

  return mergeList;
}

const arrList = [[7,8], [2,3,4,5], [1,2,3]];

const res = mergeArray(arrList);

console.log(`res ${JSON.stringify(res)}`);
