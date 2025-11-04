/**
 * Variables: let, const, and var
 * 
 * LEARNING OBJECTIVES:
 * - Understand differences between let, const, and var
 * - Learn scope rules for each variable type
 * - Know when to use each declaration
 * - Understand hoisting behavior
 * 
 * KEY CONCEPTS:
 * - let: block-scoped, mutable, not hoisted
 * - const: block-scoped, immutable binding, not hoisted
 * - var: function-scoped, mutable, hoisted
 * - Always prefer const, use let when needed, avoid var
 */

// ============================================================================
// VAR - Function-Scoped (Legacy)
// ============================================================================

// Function scope
function example() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable (redeclared)
    console.log(x); // 2
  }
  console.log(x); // 2 (accessible outside block)
}

// Hoisted - initialized with undefined
console.log(y); // undefined (not error)
var y = 5;
console.log(y); // 5

// Redeclaration allowed
var z = 1;
var z = 2; // No error
console.log(z); // 2

// ============================================================================
// LET - Block-Scoped, Mutable
// ============================================================================

// Block scope
if (true) {
  let a = 1;
  console.log(a); // 1
}
// console.log(a); // Error: a is not defined

// Temporal Dead Zone (TDZ)
// console.log(b); // Error: Cannot access before initialization
let b = 10;
console.log(b); // 10

// Block-scoped within loops
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 (each iteration has own i)
}

// Redeclaration not allowed in same scope
let c = 1;
// let c = 2; // Error: Identifier 'c' has already been declared

// Different scopes - OK
{
  let d = 1;
}
{
  let d = 2; // OK - different scope
}

// ============================================================================
// CONST - Block-Scoped, Immutable Binding
// ============================================================================

// Must be initialized
// const e; // Error: Missing initializer

const e = 10;
// e = 20; // Error: Assignment to constant variable

// Block scope (same as let)
if (true) {
  const f = 5;
  console.log(f); // 5
}
// console.log(f); // Error: f is not defined

// Temporal Dead Zone
// console.log(g); // Error: Cannot access before initialization
const g = 15;

// Objects and arrays are mutable
const obj = { name: 'Alice' };
obj.name = 'Bob'; // OK - modifying property
obj.age = 25; // OK - adding property
// obj = {}; // Error: Cannot reassign

const arr = [1, 2, 3];
arr.push(4); // OK - modifying array
arr[0] = 10; // OK - modifying element
// arr = []; // Error: Cannot reassign

// ============================================================================
// SCOPE COMPARISON
// ============================================================================

function scopeExample() {
  // Function scope
  var varVar = 'var';
  
  // Block scope
  if (true) {
    var varVar2 = 'var in block'; // Function-scoped
    let letVar = 'let in block';
    const constVar = 'const in block';
    
    console.log(varVar2); // Accessible
    console.log(letVar); // Accessible
    console.log(constVar); // Accessible
  }
  
  console.log(varVar2); // Accessible (var is function-scoped)
  // console.log(letVar); // Error: Block-scoped
  // console.log(constVar); // Error: Block-scoped
}

// ============================================================================
// HOISTING COMPARISON
// ============================================================================

// var: hoisted and initialized with undefined
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'I am hoisted';

// let/const: hoisted but in TDZ
// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = 'I am not accessible';

// console.log(hoistedConst); // Error: Cannot access before initialization
const hoistedConst = 'I am not accessible';

// ============================================================================
// WHEN TO USE EACH
// ============================================================================

// ✅ PREFER: const (default choice)
const API_URL = 'https://api.example.com';
const user = { id: 1, name: 'Alice' };
const numbers = [1, 2, 3];

// ✅ USE: let (when you need to reassign)
let counter = 0;
counter = counter + 1;

let index;
for (index = 0; index < 10; index++) {
  // ...
}

// ❌ AVOID: var (legacy, use only if necessary for compatibility)

// ============================================================================
// BEST PRACTICES
// ============================================================================

// 1. Use const by default
const name = 'Alice';
const age = 25;

// 2. Use let only when reassignment needed
let score = 0;
score = score + 10;

// 3. Declare variables in smallest scope possible
if (true) {
  const temp = 'temporary';
  // Use temp here
}
// temp not accessible here

// 4. Initialize variables when declaring
const data = null; // Better than: let data; ... data = something;

// 5. Use meaningful names
const userName = 'Alice'; // Better than: const u = 'Alice';

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Use var in modern code
// var oldVar = 'avoid this';

// ❌ DON'T: Try to reassign const
// const PI = 3.14;
// PI = 3.14159; // Error

// ❌ DON'T: Access let/const before initialization
// console.log(x); // Error
// let x = 5;

// ❌ DON'T: Declare same variable twice in same scope
// let y = 1;
// let y = 2; // Error

// ✅ DO: Use const by default
// ✅ DO: Use let when reassignment needed
// ✅ DO: Declare variables in appropriate scope

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Declare variables using const, let, and var
 * 2. Demonstrate scope differences
 * 3. Show hoisting behavior
 * 4. Modify const object/array properties
 * 5. Create block-scoped variables
 * 6. Rewrite var code to use let/const
 * 7. Identify scope issues in code
 * 
 * See: exercises/warmups/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ const: Block-scoped, immutable binding, not hoisted
 * ✓ let: Block-scoped, mutable, not hoisted
 * ✓ var: Function-scoped, mutable, hoisted
 * ✓ Prefer const, use let when needed, avoid var
 * ✓ let/const are in TDZ until initialized
 * ✓ const prevents reassignment, not mutation
 * ✓ Block scope prevents variable leakage
 */
