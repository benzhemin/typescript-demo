export {}

function occurTwice(arr: number[]) {
  const map = new Map();

  arr.forEach(v => {
    const count = map.get(v) || 0;
    map.set(v, count+1);
  });

  const pair = Array.from(map.entries()).find((([k, v]) => v === 1)) || [];
  const [ key ] = pair;

  return key;
}