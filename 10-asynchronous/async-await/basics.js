/**
 * Async/Await Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. ASYNC FUNCTIONS
 *    - Declared with 'async' keyword before function
 *    - Always returns a Promise
 *    - Even if you return a value, it's wrapped in Promise
 *    - Can contain 'await' expressions
 *    - Makes asynchronous code look synchronous
 * 
 * 2. AWAIT KEYWORD
 *    - Can only be used inside async functions
 *    - Pauses function execution until Promise resolves
 *    - Returns the resolved value of the Promise
 *    - If Promise rejects, throws an error
 *    - Can await any Promise or thenable
 * 
 * 3. HOW IT WORKS
 *    - async function returns Promise
 *    - await pauses execution (not blocking)
 *    - Code after await runs after Promise resolves
 *    - Other code continues running (non-blocking)
 *    - Function resumes when Promise settles
 * 
 * 4. RETURN VALUES
 *    - return value → Promise.resolve(value)
 *    - throw error → Promise.reject(error)
 *    - No return → Promise.resolve(undefined)
 *    - Implicitly wrapped in Promise
 * 
 * 5. COMPARISON WITH PROMISES
 *    - async/await: synchronous-looking syntax
 *    - Promises: .then() chaining
 *    - Both do the same thing
 *    - async/await is syntactic sugar over Promises
 *    - Easier to read and debug
 * 
 * 6. ERROR HANDLING
 *    - Use try/catch blocks
 *    - Catch errors from await expressions
 *    - More intuitive than .catch()
 *    - Can use .catch() on returned Promise too
 * 
 * 7. COMMON PATTERNS
 *    - Await multiple Promises: await Promise.all([...])
 *    - Sequential execution: await p1; await p2;
 *    - Parallel execution: Promise.all([p1, p2])
 *    - Conditional awaits: if (...) await promise;
 * 
 * 8. TOP-LEVEL AWAIT
 *    - Can use await at module top level (ES2022)
 *    - Only in modules (type="module")
 *    - Makes module async
 *    - Blocks module execution
 * 
 * 9. WHEN TO USE
 *    - Working with Promises
 *    - Multiple async operations
 *    - More readable than .then() chains
 *    - Need try/catch error handling
 *    - Sequential async operations
 */

// Example:
// async function fetchData() {
//   const response = await fetch('/api/data');
//   const data = await response.json();
//   return data;
// }
