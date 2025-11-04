/**
 * IIFE (Immediately Invoked Function Expression)
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS IIFE
 *    - Function defined and executed immediately
 *    - (function() { ... })();
 *    - Runs once at definition
 *    - Creates isolated scope
 * 
 * 2. BASIC SYNTAX
 *    - (function() { console.log('IIFE'); })();
 *    - Parentheses wrap function expression
 *    - () at end invokes it
 *    - Can also: (function() { ... }());
 * 
 * 3. WHY USE IIFE
 *    - Avoid polluting global scope
 *    - Create private variables
 *    - Module pattern
 *    - One-time initialization
 *    - Before ES6 modules
 * 
 * 4. ARROW FUNCTION IIFE
 *    - (() => { console.log('Arrow IIFE'); })();
 *    - More concise
 *    - Same behavior
 *    - Modern syntax
 * 
 * 5. NAMED IIFE
 *    - (function name() { ... })();
 *    - Name visible inside function only
 *    - Useful for recursion
 *    - Self-documenting
 * 
 * 6. RETURNING FROM IIFE
 *    - const result = (function() { return 42; })();
 *    - Can return values
 *    - Common for module pattern
 *    - Creates and returns object
 * 
 * 7. PARAMETERS IN IIFE
 *    - (function(x) { console.log(x); })(5);
 *    - Can pass arguments
 *    - Common: pass window, document, undefined
 *    - Protect against modifications
 * 
 * 8. MODULE PATTERN
 *    - const module = (function() {
 *        let private = 'secret';
 *        return { getPrivate: () => private };
 *      })();
 *    - Creates private state
 *    - Returns public API
 * 
 * 9. AVOIDING GLOBAL POLLUTION
 *    - (function() {
 *        let temp = processData();
 *        // temp not in global scope
 *      })();
 *    - Variables contained
 * 
 * 10. BEFORE ES6 MODULES
 *     - IIFE was main module pattern
 *     - Now use import/export
 *     - Still useful for one-off isolation
 *     - Legacy code patterns
 * 
 * 11. ASYNC IIFE
 *     - (async () => {
 *         const data = await fetch(url);
 *       })();
 *     - Use await at top level
 *     - Before top-level await
 * 
 * 12. SEMICOLON BEFORE IIFE
 *     - ;(function() { ... })();
 *     - Prevents issues with previous statement
 *     - Safe practice
 *     - Especially without semicolons
 * 
 * 13. MODERN ALTERNATIVES
 *     - ES6 modules
 *     - Block scope with let/const
 *     - { } blocks for scope
 *     - IIFE less common now
 * 
 * 14. WHEN TO USE TODAY
 *     - Quick scope isolation
 *     - One-time setup code
 *     - Avoiding global pollution
 *     - Legacy code maintenance
 */

// Immediately Invoked Function Expression (IIFE):
// (function() { ... })();
// Used to create isolated scope and avoid polluting global namespace.
