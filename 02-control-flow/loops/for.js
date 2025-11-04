/**
 * For Loop
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - for (initialization; condition; increment) { ... }
 *    - Three parts separated by semicolons
 *    - Initialization runs once
 *    - Condition checked before each iteration
 *    - Increment runs after each iteration
 * 
 * 2. STANDARD FORWARD LOOP
 *    - for (let i = 0; i < array.length; i++)
 *    - i starts at 0
 *    - Runs while i < length
 *    - i incremented after each iteration
 * 
 * 3. LOOP PARTS EXPLAINED
 *    - Initialization: let i = 0 (runs once)
 *    - Condition: i < 10 (checked each iteration)
 *    - Increment: i++ (runs after each iteration)
 *    - All parts are optional (can omit any)
 * 
 * 4. BACKWARDS LOOP
 *    - for (let i = arr.length - 1; i >= 0; i--)
 *    - Start from last index
 *    - Decrement i
 *    - Stop at 0
 * 
 * 5. INCREMENT VARIATIONS
 *    - i++ (increment by 1)
 *    - i += 2 (increment by 2, skip items)
 *    - i-- (decrement)
 *    - i *= 2 (exponential growth)
 * 
 * 6. NESTED LOOPS
 *    - Loop inside loop
 *    - for (let i = 0; i < rows; i++) {
 *        for (let j = 0; j < cols; j++) {
 *          // access grid[i][j]
 *        }
 *      }
 *    - Use different variable names (i, j, k)
 * 
 * 7. LOOP SCOPE
 *    - let/const variables scoped to loop
 *    - for (let i = 0; i < 5; i++) { }
 *    - i not accessible outside loop
 *    - var would leak to outer scope
 * 
 * 8. INFINITE LOOP
 *    - for (;;) { } runs forever
 *    - All parts omitted
 *    - Must have break inside
 *    - Use while(true) instead for clarity
 * 
 * 9. MULTIPLE VARIABLES
 *    - for (let i = 0, j = 10; i < j; i++, j--)
 *    - Initialize multiple variables
 *    - Update multiple variables
 *    - Less common pattern
 * 
 * 10. WHEN TO USE FOR LOOP
 *     - Need index access
 *     - Specific start/end points
 *     - Non-standard iteration (backwards, skip)
 *     - Nested loops (2D arrays)
 * 
 * 11. WHEN NOT TO USE
 *     - Simple iteration: use for...of
 *     - Array methods often clearer: map, filter, etc.
 *     - Object iteration: use for...in or Object methods
 * 
 * 12. COMMON PATTERNS
 *     - Array iteration: for (let i = 0; i < arr.length; i++)
 *     - Countdown: for (let i = 10; i > 0; i--)
 *     - Skip items: for (let i = 0; i < arr.length; i += 2)
 *     - 2D array: nested for loops
 * 
 * 13. PERFORMANCE
 *     - Cache array length: for (let i = 0, len = arr.length; i < len; i++)
 *     - Usually not needed in modern JS
 *     - Optimization rarely necessary
 */

// Standard for loop:
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// Try iterating backwards or skipping items with continue
