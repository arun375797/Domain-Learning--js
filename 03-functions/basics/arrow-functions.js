/**
 * Arrow Functions
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - const func = () => expression
 *    - Introduced in ES6
 *    - Shorter than function expressions
 *    - (param) => expression
 * 
 * 2. SYNTAX VARIATIONS
 *    - No params: () => expression
 *    - One param: x => expression (no parentheses needed)
 *    - Multiple params: (x, y) => expression
 *    - Block body: (x) => { statements; return value; }
 * 
 * 3. IMPLICIT RETURN
 *    - Single expression returns automatically
 *    - const double = x => x * 2
 *    - No need for return keyword
 *    - Only works without braces
 * 
 * 4. EXPLICIT RETURN
 *    - Use braces for multiple statements
 *    - const func = (x) => { const y = x * 2; return y; }
 *    - Must use return keyword
 *    - Required for multiple lines
 * 
 * 5. RETURNING OBJECTS
 *    - Must wrap in parentheses
 *    - const makeObj = x => ({ value: x })
 *    - Without (), {} treated as block
 *    - Common gotcha
 * 
 * 6. NO THIS BINDING
 *    - Inherits this from outer scope (lexical this)
 *    - Cannot rebind this with call/apply/bind
 *    - Useful in callbacks, event handlers
 *    - Major difference from regular functions
 * 
 * 7. NO ARGUMENTS OBJECT
 *    - Arrow functions don't have arguments
 *    - Use rest parameters: (...args) => {}
 *    - Can access outer function's arguments
 * 
 * 8. CANNOT BE CONSTRUCTORS
 *    - Cannot use with new keyword
 *    - No prototype property
 *    - Use regular functions for constructors
 * 
 * 9. NO YIELD KEYWORD
 *    - Cannot be used as generators
 *    - Use regular function* for generators
 * 
 * 10. WHEN TO USE ARROW FUNCTIONS
 *     - Callbacks: array.map(x => x * 2)
 *     - Short functions
 *     - When you need lexical this
 *     - Event handlers in classes
 *     - Functional programming patterns
 * 
 * 11. WHEN NOT TO USE
 *     - Object methods (this won't be object)
 *     - Constructors
 *     - Methods that need dynamic this
 *     - When you need arguments object
 *     - Generators
 * 
 * 12. LEXICAL THIS EXAMPLE
 *     - class Counter {
 *         count = 0;
 *         increment = () => { this.count++; }  // this is lexical
 *       }
 *     - this always refers to Counter instance
 * 
 * 13. COMMON PATTERNS
 *     - Array methods: arr.map(x => x * 2)
 *     - Filters: arr.filter(x => x > 0)
 *     - Promises: promise.then(data => handleData(data))
 *     - SetTimeout: setTimeout(() => doSomething(), 1000)
 */

// Arrow functions: const multiply = (a, b) => a * b;
// Shorter syntax, no `this` binding, implicit return for single expressions.
// Use when you need lexical `this` or concise syntax.
