/**
 * Call, Apply, and Bind
 * 
 * WHAT TO LEARN:
 * 
 * 1. PURPOSE
 *    - Explicitly set 'this' value
 *    - Control function context
 *    - Three methods for this binding
 *    - Part of Function.prototype
 * 
 * 2. CALL() METHOD
 *    - func.call(thisArg, arg1, arg2, ...argN)
 *    - Invokes function immediately
 *    - Sets this to thisArg
 *    - Arguments passed individually
 * 
 * 3. CALL() EXAMPLE
 *    - function greet(greeting) { return `${greeting}, ${this.name}`; }
 *    - const user = { name: 'Ada' };
 *    - greet.call(user, 'Hello'); // 'Hello, Ada'
 * 
 * 4. APPLY() METHOD
 *    - func.apply(thisArg, [arg1, arg2, ...argN])
 *    - Invokes function immediately
 *    - Sets this to thisArg
 *    - Arguments passed as array
 * 
 * 5. APPLY() EXAMPLE
 *    - const numbers = [1, 2, 3, 4, 5];
 *    - Math.max.apply(null, numbers); // 5
 *    - Useful before spread operator
 * 
 * 6. CALL VS APPLY
 *    - call: arguments passed individually
 *    - apply: arguments in array
 *    - Both invoke immediately
 *    - Choose based on argument format
 * 
 * 7. BIND() METHOD
 *    - const boundFunc = func.bind(thisArg, arg1, arg2)
 *    - Returns new function
 *    - Does NOT invoke immediately
 *    - Permanently binds this
 * 
 * 8. BIND() EXAMPLE
 *    - const user = { name: 'Ada', greet() { return this.name; } };
 *    - const greet = user.greet.bind(user);
 *    - greet(); // 'Ada' (context preserved)
 * 
 * 9. PARTIAL APPLICATION WITH BIND
 *    - function multiply(a, b) { return a * b; }
 *    - const double = multiply.bind(null, 2);
 *    - double(5); // 10
 *    - Pre-fill arguments
 * 
 * 10. WHEN TO USE CALL
 *     - Borrowing methods
 *     - Array-like to Array
 *     - Invoke with specific this immediately
 *     - Known number of arguments
 * 
 * 11. WHEN TO USE APPLY
 *     - Arguments already in array
 *     - Before spread operator existed
 *     - Math.max/min with arrays
 *     - Variable argument count
 * 
 * 12. WHEN TO USE BIND
 *     - Event handlers
 *     - Callbacks that lose context
 *     - Creating partially applied functions
 *     - Need function with fixed this
 * 
 * 13. METHOD BORROWING
 *     - [].slice.call(arrayLike) // convert to array
 *     - {}.toString.call(value) // check type
 *     - Reuse built-in methods
 * 
 * 14. EVENT HANDLERS
 *     - button.addEventListener('click', this.handleClick.bind(this));
 *     - Preserve this in class methods
 *     - Common in React (before class fields)
 * 
 * 15. ARROW FUNCTIONS
 *     - Cannot use call/apply/bind to change this
 *     - this is lexically bound
 *     - Methods still work but ignore thisArg
 * 
 * 16. MODERN ALTERNATIVES
 *     - Spread operator instead of apply
 *     - Math.max(...numbers)
 *     - Arrow functions instead of bind
 *     - Class field syntax
 */

// Bind manually: const greet = user.greet.bind(user);
// call() - invoke with specific this and arguments
// apply() - invoke with specific this and array of arguments
// bind() - create new function with bound this
