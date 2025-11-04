/**
 * Currying
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS CURRYING
 *    - Transform function with multiple arguments
 *    - Into sequence of functions with single argument
 *    - f(a, b, c) → f(a)(b)(c)
 *    - Each function returns next function
 * 
 * 2. BASIC EXAMPLE
 *    - const add = (a) => (b) => a + b;
 *    - const add5 = add(5);
 *    - add5(3) // 8
 *    - Or: add(5)(3) // 8
 * 
 * 3. HOW IT WORKS
 *    - Each function closes over previous arguments
 *    - Returns new function expecting next argument
 *    - Final function computes result
 *    - Uses closures
 * 
 * 4. PARTIAL APPLICATION
 *    - Fix some arguments
 *    - Return function waiting for rest
 *    - const greet = (greeting) => (name) => `${greeting}, ${name}`;
 *    - const sayHello = greet('Hello');
 *    - sayHello('John') // 'Hello, John'
 * 
 * 5. WHY USE CURRYING
 *    - Reusable specialized functions
 *    - Better composition
 *    - Functional programming
 *    - Partial application
 *    - More flexible
 * 
 * 6. CURRYING VS PARTIAL APPLICATION
 *    - Currying: always one argument at a time
 *    - Partial: can fix multiple arguments
 *    - Currying is specific form of partial
 *    - Partial more general
 * 
 * 7. MANUAL CURRYING
 *    - const multiply = (a) => (b) => (c) => a * b * c;
 *    - Write functions explicitly
 *    - Clear and simple
 *    - Manual for each function
 * 
 * 8. AUTO-CURRY HELPER
 *    - function curry(fn) {
 *        return function curried(...args) {
 *          if (args.length >= fn.length) return fn(...args);
 *          return (...nextArgs) => curried(...args, ...nextArgs);
 *        };
 *      }
 *    - Automatically curry any function
 * 
 * 9. PRACTICAL EXAMPLES
 *    - API calls: const get = (url) => (params) => fetch(url, params)
 *    - Logging: const log = (level) => (message) => console[level](message)
 *    - Validation: const validate = (rule) => (value) => rule(value)
 * 
 * 10. FUNCTION COMPOSITION
 *     - Curried functions compose well
 *     - const addThenDouble = compose(double, add(5))
 *     - Pipelines of transformations
 *     - Functional programming style
 * 
 * 11. BENEFITS
 *     - Reusable function templates
 *     - Clear parameter dependencies
 *     - Easier testing
 *     - Point-free style
 *     - Better composition
 * 
 * 12. DRAWBACKS
 *     - More verbose
 *     - Can be confusing
 *     - Performance overhead (usually negligible)
 *     - Not common in mainstream JS
 * 
 * 13. WHEN TO USE
 *     - Functional programming
 *     - Need partial application
 *     - Building utilities
 *     - Reusable specialized functions
 * 
 * 14. WHEN NOT TO USE
 *     - Simple one-time functions
 *     - When clarity suffers
 *     - Team unfamiliar with pattern
 *     - Not needed for problem
 */

// Currying: transforming a function with multiple arguments into a sequence of functions.
// Example: const add = (a) => (b) => a + b;
// Useful for partial application and function composition.
