export {}

function rotateStep(arr: any[]) {
  arr.unshift(arr.pop());
}

function rotateTimes(arr: any[], k: number) {
  for(let i=0; i<k; i++) {
    rotateStep(arr);
  }
}

const  arr = [1, 2, 3, 4, 5, 6, 7, 8];
rotateTimes(arr, 1);

console.log(`arr ${JSON.stringify(arr)}`);
