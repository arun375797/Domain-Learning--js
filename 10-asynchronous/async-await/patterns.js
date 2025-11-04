/**
 * Async/Await Patterns
 * 
 * WHAT TO LEARN:
 * 
 * 1. PARALLEL EXECUTION
 *    - await Promise.all([p1, p2])
 *    - All run simultaneously
 *    - Faster than sequential
 *    - Wait for all to complete
 * 
 * 2. SEQUENTIAL EXECUTION
 *    - await p1; await p2;
 *    - Run one after another
 *    - Slower but simpler
 *    - When order matters
 * 
 * 3. ERROR HANDLING
 *    - try/catch around await
 *    - Or .catch() on promise
 *    - Multiple options
 *    - Choose based on context
 * 
 * 4. PROMISE.ALLSETTLED
 *    - await Promise.allSettled([...])
 *    - Get all results
 *    - Some may fail
 *    - Check each result.status
 * 
 * 5. EARLY RETURNS
 *    - if (condition) return;
 *    - Exit early
 *    - Avoid nesting
 *    - Cleaner code
 * 
 * 6. LOOPING
 *    - for (const item of items) {
 *        await process(item);
 *      }
 *    - Sequential processing
 *    - Or: await Promise.all(items.map(process))
 *    - Parallel processing
 * 
 * 7. CONDITIONAL AWAITS
 *    - if (condition) {
 *        await asyncOperation();
 *      }
 *    - Only await when needed
 *    - Efficient
 * 
 * 8. RACE CONDITIONS
 *    - Be careful with shared state
 *    - Use Promise.all for parallel
 *    - Avoid race conditions
 */

// Parallel execution: await Promise.all([promise1, promise2])
// Sequential: await promise1; await promise2;
// Error handling: try/catch or .catch() on returned promise
// Use Promise.allSettled() when you want all results regardless of failures
