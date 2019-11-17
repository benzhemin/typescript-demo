export {}

const newString = 'abc12345#$*%';
const reg = /([^\d]*)(\d*)([^\w]*)/;

newString.replace(reg, function (...rest){
  console.log(`${rest.join('-')}`);
  return 'hee';
});
