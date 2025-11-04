/**
 * Lexical Scope
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS LEXICAL SCOPE
 *    - Variables accessible based on where code is written
 *    - Not where it's called
 *    - Determined at definition time
 *    - Also called "static scope"
 * 
 * 2. SCOPE CHAIN
 *    - Inner functions can access outer variables
 *    - Order: local → outer function → global
 *    - Searches up the chain
 *    - Stops at first match
 * 
 * 3. VARIABLE LOOKUP
 *    - Checks current scope first
 *    - Then parent scope
 *    - Then parent's parent
 *    - Finally global scope
 *    - ReferenceError if not found
 * 
 * 4. NESTED FUNCTION EXAMPLE
 *    - function outer() {
 *        const x = 1;
 *        function inner() {
 *          console.log(x); // accesses outer's x
 *        }
 *      }
 * 
 * 5. SHADOWING
 *    - Inner variable hides outer with same name
 *    - function outer() {
 *        const x = 1;
 *        function inner() {
 *          const x = 2; // shadows outer x
 *          console.log(x); // 2
 *        }
 *      }
 * 
 * 6. GLOBAL SCOPE
 *    - Variables declared outside functions
 *    - Accessible everywhere
 *    - Avoid polluting global scope
 *    - Use modules or IIFE
 * 
 * 7. FUNCTION SCOPE
 *    - Variables declared inside function
 *    - Only accessible within function
 *    - var is function-scoped
 * 
 * 8. BLOCK SCOPE
 *    - let and const are block-scoped
 *    - Blocks: { }, if, for, while, etc.
 *    - More granular than function scope
 *    - Introduced in ES6
 * 
 * 9. LEXICAL VS DYNAMIC SCOPE
 *    - Lexical: scope determined by code position
 *    - Dynamic: scope determined by call stack
 *    - JavaScript uses lexical scope
 *    - this is exception (dynamic)
 * 
 * 10. CLOSURE AND LEXICAL SCOPE
 *     - Closures capture lexical environment
 *     - Function remembers where it was defined
 *     - Not where it's called
 *     - Based on lexical scope
 * 
 * 11. SCOPE CHAIN PERFORMANCE
 *     - Longer chains = slower lookup
 *     - Usually negligible
 *     - Avoid extremely deep nesting
 *     - Modern engines optimize well
 * 
 * 12. BEST PRACTICES
 *     - Limit global variables
 *     - Use const/let for block scope
 *     - Avoid deep nesting
 *     - Keep scope chains short
 *     - Use meaningful variable names
 */

// Lexical scope: inner functions access variables from their outer scope.
// Scope chain: inner → outer → global.
