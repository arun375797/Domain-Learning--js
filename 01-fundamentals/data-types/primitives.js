/**
 * Primitive Data Types
 * 
 * LEARNING OBJECTIVES:
 * - Understand all 7 primitive types
 * - Learn typeof operator behavior
 * - Recognize type quirks and edge cases
 * - Master type checking techniques
 * 
 * KEY CONCEPTS:
 * - Primitives: string, number, boolean, null, undefined, symbol, bigint
 * - Primitives are immutable
 * - Primitives are passed by value
 * - typeof operator for type checking
 */

// ============================================================================
// STRING
// ============================================================================

const str1 = 'Single quotes';
const str2 = "Double quotes";
const str3 = `Template literal`;
const str4 = String(123); // '123'

console.log(typeof str1); // 'string'
console.log(str1.length); // 14
console.log(str1[0]); // 'S'

// ============================================================================
// NUMBER
// ============================================================================

const num1 = 42; // Integer
const num2 = 3.14; // Float
const num3 = 1e6; // 1000000 (scientific notation)
const num4 = 0xFF; // 255 (hexadecimal)
const num5 = 0b1010; // 10 (binary)
const num6 = 0o755; // 493 (octal)

const num7 = Number('123'); // 123
const num8 = Number('abc'); // NaN

console.log(typeof num1); // 'number'
console.log(typeof num8); // 'number' (NaN is type number!)

// Special number values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

console.log(typeof infinity); // 'number'
console.log(typeof notANumber); // 'number'
console.log(isNaN(notANumber)); // true
console.log(Number.isNaN(notANumber)); // true

// ============================================================================
// BOOLEAN
// ============================================================================

const bool1 = true;
const bool2 = false;
const bool3 = Boolean(1); // true
const bool4 = Boolean(0); // false
const bool5 = Boolean(''); // false
const bool6 = Boolean('hello'); // true

console.log(typeof bool1); // 'boolean'

// Truthy and falsy values
// Falsy: false, 0, '', null, undefined, NaN
// Everything else is truthy

// ============================================================================
// NULL
// ============================================================================

const nullValue = null;
console.log(typeof nullValue); // 'object' (QUIRK!)
console.log(nullValue === null); // true
console.log(nullValue == undefined); // true (loose equality)

// null is intentionally assigned absence of value
// It's a primitive, but typeof returns 'object' (bug in JavaScript)

// ============================================================================
// UNDEFINED
// ============================================================================

let undefinedVar; // undefined
const undefinedVar2 = undefined;

console.log(typeof undefinedVar); // 'undefined'
console.log(undefinedVar === undefined); // true
console.log(undefinedVar == null); // true (loose equality)

// undefined means variable declared but not assigned
// It's the default value for uninitialized variables

// ============================================================================
// SYMBOL
// ============================================================================

const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (each symbol is unique)

const sym3 = Symbol.for('key'); // Global symbol registry
const sym4 = Symbol.for('key');
console.log(sym3 === sym4); // true

console.log(typeof sym1); // 'symbol'

// Use cases: unique keys, private properties, well-known symbols

// Well-known symbols
const iterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// ============================================================================
// BIGINT
// ============================================================================

const big1 = 9007199254740991n; // BigInt literal
const big2 = BigInt(9007199254740991); // BigInt constructor
const big3 = BigInt('9007199254740991'); // From string

console.log(typeof big1); // 'bigint'

// Cannot mix BigInt with Number
// const mix = big1 + 1; // Error
const mix = big1 + 1n; // OK

// Use for numbers beyond Number.MAX_SAFE_INTEGER (2^53 - 1)

// ============================================================================
// TYPEOF OPERATOR
// ============================================================================

console.log(typeof 'hello'); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof null); // 'object' (QUIRK!)
console.log(typeof undefined); // 'undefined'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof 1n); // 'bigint'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'

// ============================================================================
// TYPE CHECKING
// ============================================================================

// Check for null
function isNull(value) {
  return value === null;
}

// Check for undefined
function isUndefined(value) {
  return value === undefined;
}

// Check for NaN
function isNaN(value) {
  return Number.isNaN(value);
}

// Check for array
function isArray(value) {
  return Array.isArray(value);
}

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Rely on typeof for null
// typeof null === 'object' // true (but null is not an object!)

// ❌ DON'T: Use == for type checking
// '5' == 5 // true (type coercion)

// ❌ DON'T: Use typeof for NaN
// typeof NaN === 'number' // true (but it's Not a Number)

// ✅ DO: Use === for strict equality
// ✅ DO: Use Number.isNaN() for NaN check
// ✅ DO: Use Array.isArray() for arrays
// ✅ DO: Check for null explicitly

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Create variables of each primitive type
 * 2. Use typeof to check types
 * 3. Demonstrate null vs undefined
 * 4. Create and compare Symbols
 * 5. Use BigInt for large numbers
 * 6. Identify type quirks
 * 7. Write type checking functions
 * 
 * See: exercises/warmups/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ 7 primitive types: string, number, boolean, null, undefined, symbol, bigint
 * ✓ Primitives are immutable and passed by value
 * ✓ typeof null returns 'object' (quirk)
 * ✓ typeof NaN returns 'number' (quirk)
 * ✓ Use strict equality (===) for type checking
 * ✓ Use appropriate methods for specific checks (Array.isArray, Number.isNaN)
 */
