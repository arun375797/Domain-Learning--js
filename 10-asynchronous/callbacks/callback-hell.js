/**
 * Callback Hell
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS CALLBACK HELL
 *    - Deeply nested callbacks
 *    - Hard to read and maintain
 *    - Pyramid of doom
 *    - Error handling difficult
 * 
 * 2. EXAMPLE
 *    - async1(() => {
 *        async2(() => {
 *          async3(() => {
 *            // deeply nested
 *          });
 *        });
 *      });
 * 
 * 3. PROBLEMS
 *    - Hard to read
 *    - Difficult to debug
 *    - Error handling scattered
 *    - Hard to maintain
 * 
 * 4. SOLUTIONS
 *    - Use named functions
 *    - Extract functions
 *    - Use promises
 *    - Use async/await
 * 
 * 5. NAMED FUNCTIONS
 *    - function handleStep1(data) {
 *        async2(handleStep2);
 *      }
 *    - More readable
 *    - Easier to debug
 * 
 * 6. PROMISE SOLUTION
 *    - async1()
 *      .then(async2)
 *      .then(async3)
 *    - Flat structure
 *    - Better error handling
 * 
 * 7. ASYNC/AWAIT SOLUTION
 *    - const result1 = await async1();
 *    - const result2 = await async2(result1);
 *    - const result3 = await async3(result2);
 *    - Synchronous-looking
 * 
 * 8. BEST PRACTICES
 *    - Avoid deep nesting
 *    - Extract functions
 *    - Use promises/async-await
 *    - Keep functions small
 */

// Callback hell: nested callbacks become hard to read
// Example: async1(() => { async2(() => { async3(() => { ... }) }) })
// Solution: use Promises or async/await
