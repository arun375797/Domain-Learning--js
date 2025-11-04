/**
 * Labeled Statements
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE LABELS
 *    - Named identifier for statements
 *    - labelName: statement
 *    - Used with break/continue
 *    - Control outer loops from inner loops
 * 
 * 2. BASIC SYNTAX
 *    - labelName: for (...) { }
 *    - break labelName;
 *    - continue labelName;
 *    - Label is just a name with colon
 * 
 * 3. BREAK WITH LABEL
 *    - Breaks out of named loop
 *    - Can break outer loop from inner
 *    - outer: for (...) {
 *        for (...) {
 *          if (condition) break outer;
 *        }
 *      }
 * 
 * 4. CONTINUE WITH LABEL
 *    - Continues named loop
 *    - Skips to next iteration of outer loop
 *    - outer: for (...) {
 *        for (...) {
 *          if (condition) continue outer;
 *        }
 *      }
 * 
 * 5. WHEN TO USE
 *    - Nested loops need outer loop control
 *    - Break out of multiple levels
 *    - 2D array search
 *    - Matrix operations
 * 
 * 6. WHEN NOT TO USE
 *    - Can usually refactor to function
 *    - Extract inner loop to function
 *    - Use return instead
 *    - Labels considered less readable
 * 
 * 7. COMMON USE CASE: SEARCH
 *    - outer: for (const row of grid) {
 *        for (const cell of row) {
 *          if (cell === target) break outer;
 *        }
 *      }
 *    - Exit both loops when found
 * 
 * 8. ALTERNATIVE: EXTRACT FUNCTION
 *    - function findInGrid(grid, target) {
 *        for (const row of grid) {
 *          for (const cell of row) {
 *            if (cell === target) return true;
 *          }
 *        }
 *        return false;
 *      }
 *    - Usually cleaner than labels
 * 
 * 9. ALTERNATIVE: ARRAY METHODS
 *    - Use some(), every(), find()
 *    - grid.some(row => row.includes(target))
 *    - More readable than nested loops
 * 
 * 10. LABEL NAMING
 *     - Use descriptive names: outerLoop, rowLoop
 *     - Not just 'outer', 'inner'
 *     - Helps readability
 * 
 * 11. RARE USAGE
 *     - Labels are rarely needed
 *     - Last resort for complex loops
 *     - Consider refactoring first
 *     - Modern JS has better alternatives
 * 
 * 12. BLOCK LABELS
 *     - Can label any block statement
 *     - myLabel: { if (condition) break myLabel; }
 *     - Rarely useful
 *     - Confusing to readers
 * 
 * 13. BEST PRACTICES
 *     - Avoid when possible
 *     - Refactor to functions
 *     - Use array methods
 *     - Only use for genuinely complex nested loops
 *     - Document why label is needed
 */

// Labels let you control outer loops:
// outer: for (const row of grid) {
//   for (const cell of row) {
//     if (!cell) continue outer;
//   }
// }
// Use labels only when refactoring to functions or array helpers is not practical
