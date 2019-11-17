export {}

function reverseAndStatis(str: string) {
  const reverse = Array.from(str).reverse();
  const map = new Map();
  reverse.forEach((v) => {
    let count = map.get(v) || 0;
    count += 1;
    map.set(v, count);
  });

  map.forEach((v, k) => {
    console.log(`${k} frequency ${v} times`);
  });
}

const string = 'addddaccdkkdjflsjdflajsdfj.com';
reverseAndStatis(string);