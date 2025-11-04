/**
 * Break and Continue
 * 
 * WHAT TO LEARN:
 * 
 * 1. BREAK STATEMENT
 *    - Exits loop immediately
 *    - Skips remaining iterations
 *    - Continues after loop
 *    - Works with for, while, do-while, switch
 * 
 * 2. BREAK BEHAVIOR
 *    - Terminates innermost loop
 *    - Execution continues after loop
 *    - for (let i = 0; i < 10; i++) {
 *        if (i === 5) break; // stops at 5
 *      }
 * 
 * 3. WHEN TO USE BREAK
 *    - Found what you're looking for
 *    - Error condition met
 *    - Early termination
 *    - Exit switch statement
 * 
 * 4. CONTINUE STATEMENT
 *    - Skips current iteration
 *    - Jumps to next iteration
 *    - Doesn't exit loop
 *    - Remaining code in iteration skipped
 * 
 * 5. CONTINUE BEHAVIOR
 *    - Skips to loop's next iteration
 *    - for (let i = 0; i < 10; i++) {
 *        if (i % 2 === 0) continue; // skip even
 *        console.log(i); // only odd numbers
 *      }
 * 
 * 6. WHEN TO USE CONTINUE
 *    - Skip invalid items
 *    - Filter without nesting
 *    - Ignore certain conditions
 *    - Process only valid data
 * 
 * 7. BREAK VS RETURN
 *    - break: exits loop, stays in function
 *    - return: exits function entirely
 *    - break doesn't return value
 *    - return can return value
 * 
 * 8. CONTINUE VS IF-ELSE
 *    - continue reduces nesting
 *    - if (!valid) continue; // rest of code
 *    - vs if (valid) { // nested code }
 *    - continue for guard clauses
 * 
 * 9. IN FOR LOOPS
 *    - break: exits loop
 *    - continue: jumps to increment part
 *    - for (let i = 0; i < 10; i++) {
 *        if (i === 3) continue; // skips 3
 *        if (i === 7) break; // stops at 7
 *      }
 * 
 * 10. IN WHILE LOOPS
 *     - break: exits loop
 *     - continue: jumps back to condition
 *     - while (condition) {
 *         if (skip) continue;
 *         if (done) break;
 *       }
 * 
 * 11. IN NESTED LOOPS
 *     - Only affects innermost loop
 *     - for (let i = 0; i < 3; i++) {
 *         for (let j = 0; j < 3; j++) {
 *           if (j === 1) break; // breaks inner loop only
 *         }
 *       }
 *     - Use labels for outer loops
 * 
 * 12. COMMON PATTERNS
 *     - Search: for (item of items) { if (found) break; }
 *     - Filter: for (item of items) { if (!valid) continue; }
 *     - Early exit: while (true) { if (done) break; }
 *     - Skip nulls: if (!item) continue;
 * 
 * 13. BEST PRACTICES
 *     - Use break for early exits
 *     - Use continue to reduce nesting
 *     - Consider array methods instead (find, filter)
 *     - Document why breaking/continuing
 */

// Break leaves the loop entirely.
// for (const city of cities) {
//   if (city === "Kerala") break;
// }
// Combine with guard clauses to exit as soon as you find a match.
//
// Continue skips to the next iteration.
// for (const item of cart) {
//   if (!item.inStock) continue;
//   total += item.price;
// }
// Great for ignoring invalid data without nesting additional blocks
