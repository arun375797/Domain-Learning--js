/**
 * Generators
 * 
 * WHAT TO LEARN:
 * 
 * 1. GENERATOR FUNCTIONS
 *    - function* generator() { }
 *    - Returns generator object
 *    - Can pause execution
 *    - ES6 feature
 * 
 * 2. YIELD KEYWORD
 *    - yield value
 *    - Pauses execution
 *    - Returns value
 *    - Resumes on next call
 * 
 * 3. GENERATOR OBJECT
 *    - Has next() method
 *    - Returns { value, done }
 *    - done: true when finished
 * 
 * 4. ITERATION
 *    - for (const value of generator())
 *    - Automatic iteration
 *    - Consumes generator
 * 
 * 5. YIELD*
 *    - yield* anotherGenerator()
 *    - Delegates to another generator
 *    - Composes generators
 * 
 * 6. INFINITE GENERATORS
 *    - Can generate infinite sequences
 *    - Only produce when needed
 *    - Memory efficient
 * 
 * 7. USE CASES
 *    - Lazy evaluation
 *    - Infinite sequences
 *    - Custom iteration
 *    - State machines
 */

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
// Use function* syntax and yield keyword

