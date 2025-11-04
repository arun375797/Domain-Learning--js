/**
 * Promise Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS A PROMISE
 *    - Represents async operation result
 *    - Three states: pending, fulfilled, rejected
 *    - Once settled, cannot change
 *    - ES6 feature
 * 
 * 2. CREATING PROMISES
 *    - new Promise((resolve, reject) => { })
 *    - Executor function runs immediately
 *    - resolve(value) - fulfill promise
 *    - reject(error) - reject promise
 * 
 * 3. PROMISE STATES
 *    - pending - initial state
 *    - fulfilled - resolved successfully
 *    - rejected - failed/error
 *    - Settled = fulfilled or rejected
 * 
 * 4. THEN() METHOD
 *    - promise.then(onFulfilled, onRejected)
 *    - Returns new promise
 *    - Chainable
 *    - Handles fulfillment
 * 
 * 5. CATCH() METHOD
 *    - promise.catch(onRejected)
 *    - Handles rejection
 *    - Returns new promise
 *    - Shorthand for .then(null, onRejected)
 * 
 * 6. FINALLY() METHOD
 *    - promise.finally(onFinally)
 *    - Always executes
 *    - For cleanup
 *    - Doesn't receive value/error
 * 
 * 7. PROMISE.RESOLVE()
 *    - Promise.resolve(value)
 *    - Creates fulfilled promise
 *    - Useful for wrapping values
 * 
 * 8. PROMISE.REJECT()
 *    - Promise.reject(error)
 *    - Creates rejected promise
 *    - Useful for error handling
 * 
 * 9. IMMEDIATE SETTLEMENT
 *    - Promise.resolve() - immediate
 *    - Promise.reject() - immediate
 *    - Still async (microtask)
 * 
 * 10. ASYNCHRONOUS EXECUTION
 *     - Promise callbacks are async
 *     - Execute in microtask queue
 *     - After current code
 * 
 * 11. WHEN TO USE
 *     - Async operations
 *     - Better than callbacks
 *     - Chainable
 *     - Error handling
 */

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

delay(500).then(() => console.log("Resolved after 500ms"));

// Reject example:
// const failing = new Promise((_, reject) => reject(new Error("Oops")));
// failing.catch((error) => console.error(error.message));

