/**
 * Parameters and Arguments
 * 
 * WHAT TO LEARN:
 * 
 * 1. PARAMETERS VS ARGUMENTS
 *    - Parameters: variables in function definition
 *    - Arguments: actual values passed when calling
 *    - function add(a, b) { } // a, b are parameters
 *    - add(1, 2); // 1, 2 are arguments
 * 
 * 2. DEFAULT PARAMETERS
 *    - Set default value if not provided
 *    - function greet(name = 'Guest') { }
 *    - greet() uses 'Guest'
 *    - greet('John') uses 'John'
 *    - ES6 feature
 * 
 * 3. DEFAULT PARAMETER EVALUATION
 *    - Evaluated at call time, not definition
 *    - function f(x = getDefault()) { }
 *    - getDefault() called each time f() called without x
 *    - Can reference earlier parameters
 * 
 * 4. REST PARAMETERS
 *    - Collects remaining arguments into array
 *    - function sum(...numbers) { }
 *    - numbers is actual array, not array-like
 *    - Must be last parameter
 *    - Only one rest parameter allowed
 * 
 * 5. REST VS ARGUMENTS
 *    - Rest: real array, has array methods
 *    - arguments: array-like object, no array methods
 *    - Rest is ES6, modern approach
 *    - arguments is legacy
 * 
 * 6. ARGUMENTS OBJECT
 *    - Available in regular functions (not arrows)
 *    - Array-like: has length, indexed access
 *    - Not a real array
 *    - Convert: Array.from(arguments) or [...arguments]
 * 
 * 7. PARAMETER DESTRUCTURING
 *    - Extract from objects/arrays
 *    - function greet({ name, age }) { }
 *    - function process([first, second]) { }
 *    - Can have defaults: { name = 'Guest' } = {}
 * 
 * 8. TOO FEW ARGUMENTS
 *    - Missing parameters are undefined
 *    - function add(a, b) { return a + b; }
 *    - add(5) // b is undefined, returns NaN
 *    - Use defaults to prevent this
 * 
 * 9. TOO MANY ARGUMENTS
 *    - Extra arguments ignored (unless using rest)
 *    - function add(a, b) { return a + b; }
 *    - add(1, 2, 3, 4) // 3 and 4 ignored, returns 3
 *    - Captured by arguments object
 * 
 * 10. PARAMETER ORDER
 *     - Required parameters first
 *     - Optional parameters (with defaults) after
 *     - Rest parameter last
 *     - function(required, optional = default, ...rest) {}
 * 
 * 11. NAMED PARAMETERS PATTERN
 *     - Use object for many parameters
 *     - function createUser({ name, email, age }) { }
 *     - createUser({ name: 'John', email: 'j@test.com', age: 30 })
 *     - Order doesn't matter
 *     - Self-documenting
 * 
 * 12. COMMON PATTERNS
 *     - Options object: function(data, { debug = false } = {}) {}
 *     - Rest for variadic: function sum(...nums) { }
 *     - Destructuring: function({ x, y }) { }
 *     - Defaults: function(count = 0) { }
 */

// Default parameters: function greet(name = "Guest") { ... }
// Rest parameters: function sum(...numbers) { return numbers.reduce((total, n) => total + n, 0); }
// Always return early when invalid input is detected to keep functions small.
