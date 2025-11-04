// Custom iterator
const iterable = {
  current: 0,
  *[Symbol.iterator]() {
    while (this.current < 3) {
      yield this.current++;
    }
  },
};

for (const value of iterable) {
  console.log(value);
}

// Generators pause execution, returning value and done flag on each iteration.
