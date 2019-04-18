
function waitSec(sec: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world');
    }, sec);
  });
}

async function resolveLater() {
  const res = await waitSec(5000);

  console.log(`res ${res}`);

  return 'finished'

}

const later = resolveLater();

console.log('later');

later.then((v) => {
  console.log(`resovle value ${v}`);
});

const arr = ['Mike', 'Peter', 'Ben'];
console.log(`arr ${JSON.stringify(Array.from(arr.entries()))}`);

