import { of, Observable, interval, from, combineLatest, range, Observer, Subject, ConnectableObservable, BehaviorSubject, empty } from 'rxjs';
import { map, toArray, take, scan, multicast, flatMap, switchMap, concatMap, delay, repeat, mapTo, switchAll, mergeMap } from 'rxjs/operators';

/*
const A$ = interval(1000).pipe(take(5));
const B$ = of(3);
const C$ = from([1, 2, 3]);

const D$ = C$.pipe(toArray(), map(arr => arr.reduce((a, b) => a+b, 0)));

const E$ = combineLatest(A$, B$, D$);

E$.subscribe(x => {
  console.log(x);
});

const S$ = range(0, 10).pipe(
  scan((acc, cur) => {
    console.log(`acc: ${acc}, cur: ${cur}`);
    return acc + cur;
  }, 0)
);

S$.subscribe((x) => {
  console.log(`x ${x}`);
});
*/

/*
function bindFunc(bindObj: any, funcList: string[]){
  const retObj: any = {};
  funcList.forEach((name) => {
    retObj[name] = bindObj[name].bind(bindObj);
  });
  return retObj;
}


const ob$ = Observable.create((observer: Observer<number>) => {
  
  const { next, complete } = bindFunc(observer, ['next', 'complete']);
  next(1);
  next(2);
  next(3);
  setTimeout(() => {
    next(4);
    complete();
  }, 1000);
});

const os = ob$.subscribe((x: number) => {
  console.log(`x ${x}`);
});

const sub = new Subject();

sub.subscribe((x) => {
  console.log(`observeA ${x}`);
});

sub.subscribe((x) => {
  console.log(`observeB ${x}`);
});

from([1, 2, 3]).subscribe(sub);

*/

/*
const source = from([1, 2, 3]);
const sub = new Subject<number>();
const multi = source.pipe(multicast(sub)) as ConnectableObservable<number>;

multi.subscribe((x) => {
  console.log(`observerA ${x}`);
});

multi.subscribe((x) => {
  console.log(`observerB ${x}`);
});

setTimeout(() => multi.connect(), 5000);
*/

/*
const source$ = of(1, 2, 3).pipe(flatMap((x, i) => [x, 1, 2]));

source$.subscribe((x) => {
  console.log(x);
});
*/

/*
const source$ = range(1, 2).pipe(flatMap((x) => {
  debugger;
  return range(x, 2);
}));
source$.subscribe(x => console.log(x));
*/

/*
const source$ = of('a', 'b', 'c').pipe(flatMap(x => interval(1000).pipe(map(i => x + i))));
source$.subscribe(x => console.log(x));
*/

/*
const sub = new BehaviorSubject(1);

sub.subscribe((x) => {
  console.log(`observerA: ${x}`);
});

sub.next(11);

sub.subscribe((x) => {
  console.log(`observerB: ${x}`);
});

sub.next(22);
*/

/*
const source$ = from([1, 2, 3, 4]).pipe(
  concatMap((val) => of(val).pipe(delay(1000)))
);

source$.subscribe(x => console.log(`x ${x}`));
*/


/*
const source$ = interval(1000).pipe(take(4)).pipe(switchMap((x) => interval(100).pipe(take(15))));
source$.subscribe(x => console.log(x));
*/

/*
const source$ = interval(1000).pipe(
  take(4),
  map(x => interval(100).pipe(take(15))),
  switchAll());

source$.subscribe(x => console.log(x));
*/

/*
const zip = (arr: any[], ...rest: any[]): any[] => {
  return arr.map((val, index) => {
    return rest.reduce((acc, cur) => [...acc, cur[index]], [val]);
  })
}

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

console.log(JSON.stringify(zip(a, b)));                  // [[1, 4], [2, 5], [3, 6]]
console.log(JSON.stringify(zip(a, b, c)));               // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
*/

const source$ = of(2000, 1000).pipe(
  mergeMap(val => of(`delayed by ${val} ms`).pipe(delay(val)))
);

source$.subscribe(x => console.log(x));