/**
 * Hoisting
 * 
 * LEARNING OBJECTIVES:
 * - Understand what hoisting is
 * - Learn hoisting behavior of var, let, const
 * - Understand function hoisting
 * - Master Temporal Dead Zone (TDZ)
 * 
 * KEY CONCEPTS:
 * - Hoisting: moving declarations to top of scope
 * - var: hoisted and initialized with undefined
 * - let/const: hoisted but in TDZ
 * - Functions: fully hoisted
 */

// ============================================================================
// VAR HOISTING
// ============================================================================

// Variable is hoisted but initialized with undefined
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'I am hoisted';

// Equivalent to:
// var hoistedVar; // Hoisted
// console.log(hoistedVar); // undefined
// hoistedVar = 'I am hoisted';

// ============================================================================
// LET/CONST HOISTING (TDZ)
// ============================================================================

// Variables are hoisted but in Temporal Dead Zone
// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = 'I am hoisted but in TDZ';

// console.log(hoistedConst); // Error: Cannot access before initialization
const hoistedConst = 'I am also in TDZ';

// TDZ: period between start of scope and initialization
// Variables exist but cannot be accessed

// ============================================================================
// FUNCTION HOISTING
// ============================================================================

// Function declarations are fully hoisted
hoistedFunction(); // Works! Function is available

function hoistedFunction() {
  console.log('I am hoisted');
}

// Function expressions are NOT hoisted
// hoistedExpression(); // Error: Cannot access before initialization
const hoistedExpression = function() {
  console.log('I am not hoisted');
};

// Arrow functions are NOT hoisted
// hoistedArrow(); // Error
const hoistedArrow = () => {
  console.log('I am not hoisted');
};

// ============================================================================
// HOISTING ORDER
// ============================================================================

// Functions are hoisted first, then variables
console.log(typeof hoistedFunc); // 'function'
console.log(typeof hoistedVar2); // 'undefined'

function hoistedFunc() {}
var hoistedVar2;

// ============================================================================
// TDZ EXAMPLES
// ============================================================================

// TDZ with let
{
  // console.log(tdzVar); // Error: TDZ
  let tdzVar = 'value';
  console.log(tdzVar); // 'value'
}

// TDZ with const
{
  // console.log(tdzConst); // Error: TDZ
  const tdzConst = 'value';
  console.log(tdzConst); // 'value'
}

// TDZ with function parameters
function tdzExample(x = y, y = 2) {
  // x tries to use y before y is initialized
  // This creates TDZ error in strict mode
}

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Rely on hoisting for var
// console.log(x); // undefined (confusing)
// var x = 5;

// ❌ DON'T: Access let/const before initialization
// console.log(y); // Error
// let y = 5;

// ❌ DON'T: Use function expressions before declaration
// func(); // Error
// const func = function() {};

// ✅ DO: Declare variables before use
// ✅ DO: Use function declarations for hoisting
// ✅ DO: Be aware of TDZ for let/const

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Demonstrate var hoisting behavior
 * 2. Show let/const TDZ
 * 3. Compare function declaration vs expression hoisting
 * 4. Fix hoisting-related bugs
 * 5. Understand hoisting order
 * 6. Create examples showing TDZ errors
 * 
 * See: exercises/warmups/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ var: hoisted, initialized with undefined
 * ✓ let/const: hoisted, but in TDZ until initialized
 * ✓ Function declarations: fully hoisted
 * ✓ Function expressions: not hoisted
 * ✓ TDZ prevents accessing variables before initialization
 * ✓ Always declare variables before use
 */
