/**
 * Closures
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS A CLOSURE
 *    - Function that remembers outer scope
 *    - Even after outer function returns
 *    - Access to outer variables
 *    - Fundamental JavaScript concept
 * 
 * 2. HOW CLOSURES WORK
 *    - Inner function keeps reference to outer scope
 *    - Variables stay in memory
 *    - Not copied, referenced
 *    - Created every time function is called
 * 
 * 3. BASIC CLOSURE EXAMPLE
 *    - function outer() {
 *        let count = 0;
 *        return function() { return ++count; };
 *      }
 *    - const counter = outer();
 *    - counter() // 1, counter() // 2
 * 
 * 4. PRIVATE VARIABLES
 *    - Closures create private state
 *    - Variables not accessible outside
 *    - Only through returned functions
 *    - Encapsulation pattern
 * 
 * 5. MULTIPLE CLOSURES
 *    - Each call creates new closure
 *    - const c1 = counter(); const c2 = counter();
 *    - c1 and c2 have separate counts
 *    - Independent state
 * 
 * 6. CLOSURES IN LOOPS
 *    - Common gotcha with var
 *    - for (var i = 0; i < 3; i++) {
 *        setTimeout(() => console.log(i), 100);
 *      } // logs 3, 3, 3
 *    - Use let for block scope
 * 
 * 7. CLOSURE MEMORY
 *    - Keeps variables in memory
 *    - Can cause memory leaks if not careful
 *    - Only issue with large data/many closures
 *    - Usually not a problem
 * 
 * 8. PRACTICAL USES
 *    - Data privacy
 *    - Factory functions
 *    - Event handlers
 *    - Callbacks
 *    - Module pattern
 * 
 * 9. FACTORY FUNCTIONS
 *    - function createUser(name) {
 *        return {
 *          getName: () => name,
 *          setName: (newName) => { name = newName; }
 *        };
 *      }
 *    - Each user has private name
 * 
 * 10. CLOSURES IN CALLBACKS
 *     - button.addEventListener('click', () => {
 *         console.log(userId); // remembers userId
 *       });
 *     - Callback remembers outer scope
 * 
 * 11. MODULE PATTERN
 *     - const module = (() => {
 *         let private = 'secret';
 *         return { getPrivate: () => private };
 *       })();
 *     - IIFE creates private scope
 * 
 * 12. PERFORMANCE
 *     - Slight memory overhead
 *     - Usually negligible
 *     - Don't optimize prematurely
 *     - Benefits outweigh costs
 * 
 * 13. COMMON PATTERNS
 *     - Counter: closure tracks count
 *     - Cache/memoization: closure stores results
 *     - Partial application: closure remembers arguments
 *     - Event handlers: closure remembers context
 */

// Closure example:
// function createCounter() {
//   let count = 0;
//   return () => ++count;
// }
// const counter = createCounter(); counter(); // 1
// Closures preserve access to outer scope variables.
