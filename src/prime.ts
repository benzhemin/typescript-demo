import { take } from "./utils";
import { from, Scheduler, Observable, identity } from "rxjs";
import { filter, toArray } from "rxjs/operators";
import { async } from "rxjs/internal/scheduler/async";
import { stringify } from "querystring";


function *prime(max: number): IterableIterator<any>{
  for (let cur = 1; cur < max; cur += 1) {
    const sqrt = Math.ceil(Math.sqrt(cur));

    let i = 2;
    for (; i<=sqrt; i++) {
      if (cur % i === 0) {
        break;
      }
    }

    if (i > sqrt) {
      yield cur;
    } 
  }
}

function findModZero(primeNum: number, primeGen: any) {
  let { value, done } = primeGen.next();

  while (!done) {
    const mod = primeNum % value;
    if (value > 1 && mod === 0) {
      return value;
    }
  
    const next = primeGen.next();
    value = next.value;
    done = next.done;
  }

  return;
}

function composePrime(primeNum: number, divNum: number) {
  const res = primeNum / divNum;

  // desc
  const joinRes = [divNum, res].sort((a, b) => b - a).join('');
  return joinRes;
}

function *numGenerator(max: number) {
  let i = 1;
  while (i < max) {
    if (i % 2 === 1) {
      yield i;
    }
    i++;
  }
}

function occuranceThree(num: number)  {
  const digitalList = num.toString().split('');
  return digitalList.reduce((acc, dig) => {
    if (dig === '3') acc += 1;
    return acc;
  }, 0);
}

function totalOccurance(num: number)  {
  let count = 0;
  const numGen = numGenerator(num);
  let { value, done } = numGen.next();

  while (!done) {
    const occCount = occuranceThree(value);
    //console.log(`cur ${value}, three occ ${occCount}, count ${count}`);
    count += occCount;

    const next = numGen.next();
    value = next.value;
    done = next.done;
  }

  return count;
}

const begin = +new Date();

const primeNum = 707829217;
const primeGen = prime(Math.sqrt(primeNum));
const modZero = findModZero(primeNum, primeGen);
const primeStr = composePrime(primeNum, modZero);
const threeCount = totalOccurance(Number(primeStr));

const end = +new Date();

console.log(`join prime ${primeStr}`);
console.log(`threeCount ${threeCount}`);

console.log(`run consume ${(end-begin)/1000} secs`);

/*
do {
  const { value, done } = primeGen.next();
  if (done) break;

  const mod = primeNum % value;
  if (value > 1 && mod === 0) {
    break;
  }
} while (true)
*/

/*
const source$ = Observable.create((observer: any) => {
  let p = 1;
  do {
    const { value, done } = primeGen.next(p);
    if (done) break;

    p = value;
    observer.next(value);
  } while (true);
});

source$.pipe(
  filter((v: number) => {
    const mod = primeNum % v;
    //console.log(`prime ${v} mod ${mod}`);
    
    return v > 1 && mod === 0;
  }),
).subscribe((x: any) => {
  const ano = primeNum / x;

  const res = [x, ano].sort((a, b) => b-a).join('');

  console.log(`res ${res}`);
});
*/

/*
const pg = Array.from(primeGen);
console.log(`pg ${pg}`);
*/

/*
from(primeGen, async).pipe(
  filter((v) => {
    const mod = primeNum % v;
    console.log(`prime ${v} mod ${mod}`);
    
    return mod === 0;
  }),
  toArray()
).subscribe(x => {
  console.log(`filter ${JSON.stringify(x)}`);
});
*/
//console.log(`prime ${JSON.stringify(Array.from(primeGen))}`)


/*
const primeList = Array.from(prime(707829217));
console.log(`primeList ${primeList}`);
*/


/*
function *generator() {
  let i = 0;
  while (i < 100) {
    yield i;
    i += 1;
  }
}

const gen = generator();
console.log(`gen ${Array.from(gen)}`);
*/


/*
from(generator(), async).pipe(
  filter((v) => {
    return v % 2 === 0;
  }),
  toArray()
).subscribe((x) => console.log(x));
*/