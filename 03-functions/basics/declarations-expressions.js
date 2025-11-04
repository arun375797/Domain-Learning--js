/**
 * Function Declarations vs Expressions
 * 
 * LEARNING OBJECTIVES:
 * - Understand function declarations and expressions
 * - Learn arrow function syntax
 * - Know when to use each type
 * - Understand hoisting differences
 * 
 * KEY CONCEPTS:
 * - Function declarations are hoisted
 * - Function expressions are not hoisted
 * - Arrow functions have lexical this binding
 * - Each has different use cases
 */

// ============================================================================
// FUNCTION DECLARATIONS
// ============================================================================

// Named function declaration
function add(a, b) {
  return a + b;
}

// Hoisted - can be called before declaration
console.log(multiply(2, 3)); // 6 (works!)

function multiply(a, b) {
  return a * b;
}

// Function declarations are hoisted to top of scope
// Above code is equivalent to:
// function multiply(a, b) { return a * b; }
// console.log(multiply(2, 3));

// ============================================================================
// FUNCTION EXPRESSIONS
// ============================================================================

// Named function expression
const subtract = function sub(a, b) {
  return a - b;
};

// Anonymous function expression
const divide = function(a, b) {
  return a / b;
};

// Not hoisted - must be defined before use
// console.log(divide(10, 2)); // Error if called before declaration

// Function expressions assigned to const/let are not hoisted
// Only the variable declaration is hoisted (undefined), not the function

// ============================================================================
// ARROW FUNCTIONS
// ============================================================================

// Basic syntax
const square = (x) => x * x;

// Single parameter - parentheses optional
const double = x => x * 2;

// Multiple parameters - parentheses required
const sum = (a, b) => a + b;

// No parameters - parentheses required
const greet = () => 'Hello!';

// Block body - return statement required
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Arrow functions are always expressions
// They are not hoisted
// They have lexical this binding (no own this)

// ============================================================================
// COMPARISON
// ============================================================================

// Function Declaration
function declarationFunction() {
  return 'I am hoisted';
}

// Function Expression
const expressionFunction = function() {
  return 'I am not hoisted';
};

// Arrow Function
const arrowFunction = () => {
  return 'I am not hoisted and have lexical this';
};

// ============================================================================
// WHEN TO USE EACH
// ============================================================================

// Function Declaration: When you need hoisting or recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Can reference itself
}

// Function Expression: When you need conditional creation
const operation = condition 
  ? function(a, b) { return a + b; }
  : function(a, b) { return a - b; };

// Arrow Function: When you need lexical this or concise syntax
const obj = {
  name: 'Alice',
  regular: function() {
    console.log(this.name); // 'Alice' (this = obj)
  },
  arrow: () => {
    console.log(this.name); // undefined (this = global/window)
  }
};

// Arrow functions in callbacks
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // Concise

// ============================================================================
// NAMED VS ANONYMOUS
// ============================================================================

// Named function (better for debugging)
const named = function calculate(x) {
  return x * 2;
};
// Stack trace shows "calculate" if error occurs

// Anonymous function
const anonymous = function(x) {
  return x * 2;
};
// Stack trace shows "anonymous" if error occurs

// Named arrow function
const namedArrow = (x) => {
  return x * 2;
};

// ============================================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ============================================================================

// Classic IIFE
(function() {
  console.log('I run immediately');
})();

// Arrow function IIFE
(() => {
  console.log('I also run immediately');
})();

// IIFE with parameters
(function(name) {
  console.log(`Hello ${name}`);
})('Alice');

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Use arrow functions as methods if you need 'this'
const obj2 = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // undefined (this is not obj2)
  }
};

// ✅ DO: Use regular function for methods
const obj3 = {
  name: 'Bob',
  greet: function() {
    console.log(this.name); // 'Bob'
  }
};

// ❌ DON'T: Call arrow function before declaration
// arrowFunc(); // Error
// const arrowFunc = () => {};

// ✅ DO: Function declarations can be called before
declarationFunc(); // Works
function declarationFunc() {}

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Create function declaration that calculates area
 * 2. Create function expression that reverses string
 * 3. Convert function to arrow function
 * 4. Create IIFE that logs current date
 * 5. Write function that returns another function
 * 6. Create method in object using different function types
 * 7. Compare this binding in different function types
 * 
 * See: exercises/functions/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ Function declarations are hoisted
 * ✓ Function expressions are not hoisted
 * ✓ Arrow functions have lexical this binding
 * ✓ Use declarations when you need hoisting
 * ✓ Use expressions for conditional functions
 * ✓ Use arrow functions for callbacks and concise syntax
 * ✓ Named functions are better for debugging
 */
