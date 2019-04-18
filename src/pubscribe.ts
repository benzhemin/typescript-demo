
function Observer() {
  let listener: any[] = [];

  return {
    subscribe(fn: Function) {
      listener.push(fn);
    },

    unsbscribe(fn: Function) {
      listener = listener.filter(f => f !== fn);
    },

    publish(some: any) {
      listener.forEach(fn => fn.apply(null, [some]));
    }
  }
}

class ObserverPattern {
  topicMap = new Map<string, any[]>();

  subscribe(topic: string, callback: Function) {
    const cbList = this.topicMap.get(topic) || [];
    cbList.push(callback);

    this.topicMap.set(topic, cbList);
  }

  public(topic: string, whatever: any) {
    const cbList = this.topicMap.get(topic) || [];

    cbList.forEach(callback => callback.apply(null, [whatever]));
  }
}