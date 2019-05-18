/**
 * 给定一个包含n个整数的数组nums, 判断nums中是否存在三个元素a, b, c, 使得 a+b+c = 0 ? 找出所有满足条件且不重复的三元组
 * 注意: 答案中不可以包含重复的三元组
 */
export {};

function threeSumZero(numList: number[]) {
  const tsList : Array<number[]>= [];

  numList.forEach((val, index) => {
    const restList = numList.slice(index + 1);

    restList.forEach((cur, index, arr) => {
      arr.slice(index + 1).some(v => (val + cur + v === 0) && !!tsList.push([val, cur, v]));
    });
  });

  // 去重
  const sortList = tsList.map(arr => arr.sort((a, b) => a - b).join('.'));
  const resList = Array.from(new Set(sortList)).map(str => str.split('.'));

  return resList;
}

const res = threeSumZero([-1, 0, 1, 2, -1, -4]);
console.log(`res ${JSON.stringify(res)}`);