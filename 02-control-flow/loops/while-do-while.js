/**
 * While and Do-While Loops
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHILE LOOP SYNTAX
 *    - while (condition) { ... }
 *    - Checks condition before each iteration
 *    - If false initially, never runs
 *    - Simpler than for loop
 * 
 * 2. WHILE LOOP BEHAVIOR
 *    - Condition evaluated first
 *    - If truthy, executes block
 *    - Repeats until condition becomes falsy
 *    - Must update condition inside loop
 * 
 * 3. INFINITE WHILE LOOP
 *    - while (true) { ... }
 *    - Runs forever
 *    - Must have break inside
 *    - Common for event loops, servers
 * 
 * 4. CONDITION UPDATE
 *    - Must change condition variable
 *    - Otherwise infinite loop
 *    - let i = 0;
 *      while (i < 10) { i++; }
 * 
 * 5. DO-WHILE SYNTAX
 *    - do { ... } while (condition);
 *    - Executes block first
 *    - Then checks condition
 *    - Runs at least once
 * 
 * 6. DO-WHILE BEHAVIOR
 *    - Block executes first
 *    - Condition checked after
 *    - If truthy, repeats
 *    - Guarantees one execution
 * 
 * 7. WHEN TO USE WHILE
 *    - Unknown number of iterations
 *    - Condition-based termination
 *    - Reading files until end
 *    - Polling for data
 *    - User input validation
 * 
 * 8. WHEN TO USE DO-WHILE
 *    - Need to run at least once
 *    - Menu systems (show menu first)
 *    - Input validation (ask first, then check)
 *    - Less common than while
 * 
 * 9. WHILE VS FOR
 *    - for: known iterations, counter-based
 *    - while: condition-based, unknown iterations
 *    - for more common in JavaScript
 *    - while more flexible
 * 
 * 10. COMMON PATTERNS
 *     - Polling: while (!dataReady) { check(); }
 *     - Counter: let i = 0; while (i < 10) { i++; }
 *     - Queue processing: while (queue.length) { process(queue.shift()); }
 *     - Input: do { input = prompt(); } while (!isValid(input));
 * 
 * 11. GUARDING INFINITE LOOPS
 *     - Add safety counter
 *     - let attempts = 0;
 *       while (condition && attempts++ < 100) { }
 *     - Prevents hanging
 * 
 * 12. BREAK AND CONTINUE
 *     - break: exits loop immediately
 *     - continue: skips to next iteration
 *     - while (true) { if (done) break; }
 * 
 * 13. COMMON PITFALLS
 *     - Forgetting to update condition
 *     - Infinite loops
 *     - Off-by-one errors
 *     - Condition never becomes falsy
 */

// while (condition) {
//   // update condition or risk an infinite loop
// }
// Example: poll an API until data arrives, but guard with a counter.
//
// do {
//   // run at least once
// } while (condition);
// Useful when you need a first pass before checking input validity
