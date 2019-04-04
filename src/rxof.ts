import { of, Observable, interval, from, combineLatest, range, Observer, 
  Subject, ConnectableObservable, BehaviorSubject, empty, timer, race, identity 
} from 'rxjs';
import { map, toArray, take, scan, multicast, flatMap, switchMap, 
  concatMap, delay, repeat, mapTo, switchAll, mergeMap, combineAll, mergeAll, delayWhen, tap, shareReplay } from 'rxjs/operators';

import fetch from 'node-fetch'; 

const log = (x:any) => console.log(x);
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

/*
const source$ = of(2000, 1000).pipe(
  mergeMap(val => of(`delayed by ${val} ms`).pipe(delay(val)))
);

source$.subscribe(x => console.log(x));


empty().subscribe(x => console.log(x));

of(1).pipe(repeat(10)).subscribe(log);
*/

/*
const source$ = timer(0, 1000).pipe(take(2), map(v => {
  return interval(Math.random() * 2000).pipe(take(3));
})).pipe(combineAll());

source$.subscribe(log);
*/

/*
const source$ = interval(2000).pipe(
    take(5)
  ).pipe(
    map(val => interval(val).pipe(
      delay(100), take(3))
    ), 
    mergeAll(2)
  );
source$.subscribe(log);
*/

/*
const source$ = race(
  interval(1500),
  interval(1000).pipe(mapTo('1st won!')),
  interval(2000),
  interval(2500)
);
*/

// of(1, 2, 3).pipe(toArray()).subscribe(log);

/*
const source$ = interval(1000).pipe(delayWhen(() => timer(5000)));
source$.subscribe(log);
*/

//interval(1000).pipe(map(x => new Date())).subscribe(log);


// fetch("http://image.baidu.com/data/imgs?col=%E7%BE%8E%E5%A5%B3&tag=%E6%B8%85%E7%BA%AF&sort=0&pn=0&rn=1000&p=channel&from=1", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7","cache-control":"max-age=0","proxy-connection":"keep-alive","upgrade-insecure-requests":"1"},"referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"})
// .then(function(response: { json: () => void; }){ return response.json(); }).then(function(json: any) { console.log(JSON.stringify(json)); });

const source$ = interval(1000).pipe(
  take(4), 
  tap(() => { console.log('side effect') }),
  shareReplay(3)
);

function createObserver(tag: any) {
  return function(x: any){
      console.log(`next: ${tag} ${x}`);
  }
}

source$.subscribe(createObserver('sourceA'), identity, () => console.log('complete A'));
source$.subscribe(createObserver('sourceB'), identity, () => console.log('complete B'));

const replaySource$ = of(0).pipe(
  delay(6000),
  flatMap((x) => source$)
);
replaySource$.subscribe(createObserver('sourceC')); 



