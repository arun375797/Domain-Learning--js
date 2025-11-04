/**
 * Scope Rules
 * 
 * LEARNING OBJECTIVES:
 * - Understand global, function, and block scope
 * - Learn scope chain and variable lookup
 * - Master scope differences between var, let, const
 * - Understand closure and scope relationship
 * 
 * KEY CONCEPTS:
 * - Global scope: accessible everywhere
 * - Function scope: variables declared with var
 * - Block scope: variables declared with let/const
 * - Scope chain: inner → outer → global
 */

// ============================================================================
// GLOBAL SCOPE
// ============================================================================

// Variables declared outside functions are global
const globalVar = 'I am global';
let globalLet = 'I am also global';

function accessGlobal() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
}

// ============================================================================
// FUNCTION SCOPE (var)
// ============================================================================

function functionScope() {
  var functionScoped = 'I am function-scoped';
  
  if (true) {
    var alsoFunctionScoped = 'Also function-scoped';
    console.log(functionScoped); // Accessible
  }
  
  console.log(alsoFunctionScoped); // Accessible (not block-scoped)
  // console.log(blockScoped); // Error: not accessible
}

// ============================================================================
// BLOCK SCOPE (let, const)
// ============================================================================

function blockScope() {
  let blockScoped = 'I am block-scoped';
  
  if (true) {
    let innerBlock = 'I am in inner block';
    const innerConst = 'I am also in inner block';
    console.log(blockScoped); // Accessible (outer scope)
    console.log(innerBlock); // Accessible
  }
  
  console.log(blockScoped); // Accessible
  // console.log(innerBlock); // Error: not accessible
}

// ============================================================================
// SCOPE CHAIN
// ============================================================================

const outer = 'outer variable';

function outerFunction() {
  const middle = 'middle variable';
  
  function innerFunction() {
    const inner = 'inner variable';
    
    // Access all levels
    console.log(inner); // 'inner variable'
    console.log(middle); // 'middle variable'
    console.log(outer); // 'outer variable'
  }
  
  innerFunction();
  // console.log(inner); // Error: not accessible
}

// ============================================================================
// SHADOWING
// ============================================================================

const name = 'Global';

function shadowingExample() {
  const name = 'Function'; // Shadows outer name
  
  if (true) {
    const name = 'Block'; // Shadows function name
    console.log(name); // 'Block'
  }
  
  console.log(name); // 'Function'
}

console.log(name); // 'Global'

// ============================================================================
// LEXICAL SCOPE
// ============================================================================

function lexicalExample() {
  const message = 'Hello';
  
  function inner() {
    console.log(message); // Accesses outer scope (lexical)
  }
  
  return inner;
}

const innerFunc = lexicalExample();
innerFunc(); // 'Hello' (closure preserves scope)

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Pollute global scope
// var globalPollution = 'bad'; // Creates global variable

// ❌ DON'T: Access variables before declaration (let/const)
// console.log(x); // Error
// let x = 5;

// ❌ DON'T: Assume block scope for var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100); // Logs 3, 3, 3
// }

// ✅ DO: Use let in loops
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100); // Logs 0, 1, 2
// }

// ✅ DO: Declare variables in smallest scope
// ✅ DO: Use const/let to avoid scope issues

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Create examples showing global, function, and block scope
 * 2. Demonstrate scope chain lookup
 * 3. Show variable shadowing
 * 4. Create closure that preserves scope
 * 5. Fix scope issues in loops
 * 6. Compare var vs let scope in if statements
 * 
 * See: exercises/warmups/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ Global scope: accessible everywhere
 * ✓ Function scope: var variables
 * ✓ Block scope: let/const variables
 * ✓ Scope chain: inner → outer → global
 * ✓ Shadowing: inner variables hide outer ones
 * ✓ Lexical scope: determined by where code is written
 * ✓ Closures preserve scope chain
 */
