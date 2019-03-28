enum PromiseState {
  Reject = -1,
  Pending,
  Resolved,
}

interface Supplier{
  (param: any) : void
}

class MyPromise {
  private state = PromiseState.Pending;
  private value: any = null;

  private resolveCBList: Function[] = [];
  private rejectCBList: Function[] = [];

  constructor(fn: (resolve: Supplier, reject: Supplier) => void) {
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  private resolve(value: any) {
    if (this.state === PromiseState.Pending) {
      this.state = PromiseState.Resolved;
      this.value = value;
      this.resolveCBList.map(cb => cb(value))
    }
  }

  private reject(value: any) {
    if (this.state === PromiseState.Pending) {
      this.state = PromiseState.Reject;
      this.value = value;
      this.rejectCBList.map(cb => cb(value));
    }
  }

  then(onFullFilled: Supplier) {
    if (this.state === PromiseState.Pending) {
      this.resolveCBList.push(onFullFilled);
      //this.rejectCBList.push(onRejected);
    }

    if (this.state === PromiseState.Resolved) {
      onFullFilled(this.value);
    }
  }
}

new MyPromise((resovle, reject) => {
  setTimeout(() => {
    console.log('resolve');
    resovle('hello promise');
  }, 1000);
}).then((value) => {
  console.log(value);
});