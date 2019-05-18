/*
const have = [10, 8, 5, 4, 2, 2];
while (have.length > 0) {
  const { find, res } = findCompose(have, 6);
  if (find) {
    console.log(`have ${JSON.stringify(res)}`);
    break;
  }
  have.shift();
}
*/

/**
 * 
 * 电影票出售问题
 * 电影票售价为25元，排队的顾客可能持有25， 50， 100这三种之一
 * 售票员开始没钱，并且严格按照排队顺序卖票
 * 判断售票员能否满足每个顾客需求，完成电影票出售
 * 
 * function tickets(peopleInLine) 
 * 传入的参数peopleInLine就是排队的队列，类似[25, 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 50, 25]
 * 如果能满足返回true， 不能返回false
 * 
 */

// take 6
// have 10, 8, 5, 4, 2, 2
function findCompose(have: number[], take: number, res: number[] = []): any {
  if (have.length === 0) return { find: false };

  const fstSIdx = have.findIndex(v => v <= take);
  if (fstSIdx === -1) return { find: false};

  const val = have[fstSIdx];

  if (val === take) return { find: true, res: [...res, val]};

  return findCompose(have.slice(fstSIdx + 1), take - val, [...res, val]);
}

function composeRet(haveTotal: number[], retMoney: number) {
  haveTotal.sort((a, b) => b - a);

  const retList = haveTotal.map((_, index, arr) => arr.slice(index))
                           .map((arr) => findCompose(arr, retMoney));
  const findRet = retList.find(({ find }) => find) || retList[0];
  return findRet;
}

function ticket(peopleInLine: number[]) {
  const ticketPrice = 25;
  let stockTotal: number[] = [];

  while (peopleInLine.length > 0) {
    const money = peopleInLine.shift()!;

    stockTotal.push(money);

    const retMoney = money - ticketPrice;
    
    // find compose retMoney 
    const { find, res } = composeRet(stockTotal, retMoney);

    if (find === false) return find;

    stockTotal = stockTotal.reduce((acc: number[], cur: number) => {
      if (!res.find(cur)) acc.push(cur);
      return acc;
    }, []);
  }

  return true;
} 

const ticketRea = ticket([25,25,50,100,25,25,25,100,25,25,50,100,25,25,25,100,50,50]);
console.log(`res ${ticketRea}`);

