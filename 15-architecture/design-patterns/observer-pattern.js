class Observable {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notify(value) {
    this.subscribers.forEach((callback) => callback(value));
  }
}

const store = new Observable();
const unsubscribe = store.subscribe((value) => console.log("Subscriber", value));

store.notify({ count: 1 });
unsubscribe();
store.notify({ count: 2 });

// Observer pattern keeps publishers and subscribers loosely coupled.
