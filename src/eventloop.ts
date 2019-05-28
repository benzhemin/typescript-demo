export {}

setImmediate(function(){
  console.log(1);
  process.nextTick(function(){
    console.log(2);
  });
});
  
process.nextTick(function(){
  console.log(3);
  setImmediate(function(){
    console.log(4);
  })
});

