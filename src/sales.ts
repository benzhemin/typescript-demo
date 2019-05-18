export {}

function salesTrans(saleObj: any) {
  return Array.from({length: 12}, (_, index) => {
    return saleObj[index+1] || null;
  });
}

const obj = { 1: 222, 2:123, 5: 888};
const res = salesTrans(obj);

console.log(`res ${JSON.stringify(res)}`);