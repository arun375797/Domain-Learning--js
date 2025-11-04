/**
 * Promise Combinators
 * 
 * WHAT TO LEARN:
 * 
 * 1. PROMISE.ALL()
 *    - Promise.all([promise1, promise2, ...])
 *    - Waits for all to fulfill
 *    - Returns array of values
 *    - Rejects on first rejection
 * 
 * 2. ALL USE CASES
 *    - Multiple independent operations
 *    - All must succeed
 *    - Parallel execution
 *    - Fastest rejection
 * 
 * 3. PROMISE.ALLSETTLED()
 *    - Promise.allSettled([...])
 *    - Waits for all to settle
 *    - Returns all results
 *    - Never rejects
 * 
 * 4. ALLSETTLED USE CASES
 *    - Need all results
 *    - Some may fail
 *    - Partial success OK
 * 
 * 5. PROMISE.RACE()
 *    - Promise.race([...])
 *    - First to settle wins
 *    - Returns winner's value/error
 *    - Others ignored
 * 
 * 6. RACE USE CASES
 *    - Timeout pattern
 *    - Fastest response
 *    - First to complete
 * 
 * 7. PROMISE.ANY()
 *    - Promise.any([...])
 *    - First to fulfill wins
 *    - Rejects only if all reject
 *    - AggregateError if all fail
 * 
 * 8. ANY USE CASES
 *    - Multiple sources
 *    - First success wins
 *    - Fallback handling
 * 
 * 9. COMPARISON
 *    - all: all succeed
 *    - allSettled: all results
 *    - race: first to settle
 *    - any: first to succeed
 * 
 * 10. ERROR HANDLING
 *     - all: fails fast
 *     - allSettled: never fails
 *     - race: winner's error
 *     - any: fails if all fail
 */

const a = Promise.resolve("A");
const b = Promise.resolve("B");
const c = Promise.reject("C failed");

Promise.all([a, b])
  .then((values) => console.log("all:", values))
  .catch((error) => console.error("all error:", error));

Promise.allSettled([a, c]).then((results) => console.log("allSettled:", results));

Promise.race([a, c]).then((winner) => console.log("race winner:", winner)).catch((error) => console.error("race error:", error));

Promise.any([c, a]).then((value) => console.log("any:", value)).catch((error) => console.error("any error:", error));

