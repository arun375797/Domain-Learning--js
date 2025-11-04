/**
 * Async/Await Error Handling
 * 
 * WHAT TO LEARN:
 * 
 * 1. TRY/CATCH WITH ASYNC/AWAIT
 *    - Wrap await expressions in try/catch
 *    - Catches rejected Promises
 *    - More intuitive than .catch()
 *    - Can catch multiple await statements
 *    - Similar to synchronous error handling
 * 
 * 2. HOW ERRORS WORK
 *    - Rejected Promise → throws error at await
 *    - Error can be caught with try/catch
 *    - Uncaught errors reject the returned Promise
 *    - async function returns rejected Promise on error
 * 
 * 3. CATCHING SPECIFIC ERRORS
 *    - Use instanceof to check error type
 *    - Check error.name or error.code
 *    - Handle different errors differently
 *    - Re-throw if you can't handle
 * 
 * 4. FINALLY BLOCK
 *    - Runs whether success or error
 *    - Perfect for cleanup code
 *    - Close connections, clear timers
 *    - Same as Promise.finally()
 * 
 * 5. MULTIPLE AWAIT STATEMENTS
 *    - One try/catch can wrap multiple awaits
 *    - First error stops execution
 *    - Later awaits don't execute on error
 *    - Use multiple try/catch for independent operations
 * 
 * 6. HANDLING PROMISE REJECTIONS
 *    - await converts rejection to exception
 *    - Exception can be caught with try/catch
 *    - More natural than .catch() chaining
 * 
 * 7. ALTERNATIVE: .catch() ON ASYNC FUNCTION
 *    - Can call .catch() on returned Promise
 *    - asyncFunction().catch(error => ...)
 *    - Useful for top-level calls
 *    - Doesn't require try/catch inside
 * 
 * 8. PARALLEL OPERATIONS WITH ERRORS
 *    - Promise.all: fails if any Promise fails
 *    - Promise.allSettled: never fails, returns all results
 *    - Promise.race: returns first settled (success or fail)
 *    - Choose based on error handling needs
 * 
 * 9. BEST PRACTICES
 *    - Always handle errors (try/catch or .catch())
 *    - Don't swallow errors silently
 *    - Log errors for debugging
 *    - Use finally for cleanup
 *    - Provide meaningful error messages
 * 
 * 10. COMMON PATTERNS
 *     - Retry logic on error
 *     - Fallback values on error
 *     - Error logging and monitoring
 *     - User-friendly error messages
 *     - Cleanup in finally block
 */

// Use try/catch with async/await:
// async function fetchData() {
//   try {
//     const response = await fetch('/api/data');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error; // or handle it
//   }
// }
