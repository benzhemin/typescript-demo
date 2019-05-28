import { maxByProp } from "./utils";

// 判断一个字符串中出现次数最多的字符，统计这个次数。
export {}

function alphaStatis(string: string) {
  const map = new Map();

  Array.from(string).forEach(key => {
    const count = map.get(key) || 0;
    map.set(key, count + 1);
  });

  //const [max] = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  const max = maxByProp(Array.from(map.entries()), ([, c]: any[]) => c);
  /*
  return Array.from(map.entries()).reduce((max, cur) => {
    return max[1] > cur[1] ? max : cur;
  });
  */
 return max;
}

const res = alphaStatis('abcdefgaddda');
console.log(`max ${JSON.stringify(res)}`);