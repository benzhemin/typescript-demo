export {}

/*
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

p.then(function(val) {
  // foo.bar();

  return Promise.resolve(1);
}).then(function() {
  console.log('fulfilled');
}, function(err) {
  console.log(err);

  return 222;
}).then(function(msg) {
  console.log(msg);
});
*/

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('11');  
  }, 5000);
}).catch((err) => {
  console.log(err);
  return Promise.reject('error occur');
});

p1.then((val) => {
  console.log(`val ${val}`);
}).catch((err) => {
  console.log(`err ${err}`);
});
*/

const newP1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
    console.log('world');
  }, 3000);
});

newP1.then(() => {
  console.log('p1 then');
});

newP1.then(() => {
  console.log('p1 then 2');
});