export {}

setImmediate(function() {
  console.log(6);
});

new Promise(function(resolve){
  console.log(1);
  for (let i=0; i<10000; i++) {
    i === 9999 && resolve();
  }
  console.log(2);
}).then(function() {
  console.log(5);
});

setTimeout(function(){
  console.log(4);
}, 0);

console.log(3);