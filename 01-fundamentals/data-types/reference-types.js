/**
 * Reference Types (Objects)
 * 
 * LEARNING OBJECTIVES:
 * - Understand objects, arrays, and functions as reference types
 * - Learn pass by reference vs pass by value
 * - Master copying objects and arrays
 * - Recognize reference vs value behavior
 * 
 * KEY CONCEPTS:
 * - Objects, arrays, functions are reference types
 * - Stored by reference, not by value
 * - Assignment copies reference, not value
 * - Mutations affect all references
 */

// ============================================================================
// OBJECTS
// ============================================================================

const obj1 = { name: 'Alice', age: 25 };
const obj2 = obj1; // Both reference same object

obj2.age = 30;
console.log(obj1.age); // 30 (mutated!)

// Different objects
const obj3 = { name: 'Alice', age: 25 };
const obj4 = { name: 'Alice', age: 25 };
console.log(obj3 === obj4); // false (different references)

// ============================================================================
// ARRAYS
// ============================================================================

const arr1 = [1, 2, 3];
const arr2 = arr1; // Both reference same array

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (mutated!)

// Different arrays
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
console.log(arr3 === arr4); // false (different references)

// ============================================================================
// FUNCTIONS
// ============================================================================

function greet() {
  return 'Hello';
}

const greet2 = greet; // Both reference same function
console.log(greet === greet2); // true

// ============================================================================
// PASS BY REFERENCE
// ============================================================================

function modifyObject(obj) {
  obj.name = 'Modified';
}

const person = { name: 'Original' };
modifyObject(person);
console.log(person.name); // 'Modified' (mutated!)

function modifyArray(arr) {
  arr.push(4);
}

const numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers); // [1, 2, 3, 4] (mutated!)

// ============================================================================
// SHALLOW COPY
// ============================================================================

// Object shallow copy
const original = { name: 'Alice', age: 25 };
const copy1 = { ...original }; // Spread operator
const copy2 = Object.assign({}, original); // Object.assign

copy1.age = 30;
console.log(original.age); // 25 (not mutated)
console.log(copy1.age); // 30

// Array shallow copy
const originalArr = [1, 2, 3];
const copyArr = [...originalArr]; // Spread operator
const copyArr2 = originalArr.slice(); // slice()

copyArr.push(4);
console.log(originalArr); // [1, 2, 3] (not mutated)
console.log(copyArr); // [1, 2, 3, 4]

// ============================================================================
// NESTED OBJECTS (SHALLOW COPY LIMITATION)
// ============================================================================

const nested = {
  name: 'Alice',
  address: {
    city: 'NYC',
    country: 'USA'
  }
};

const shallowCopy = { ...nested };
shallowCopy.address.city = 'LA';

console.log(nested.address.city); // 'LA' (mutated! - shared reference)

// ============================================================================
// DEEP COPY
// ============================================================================

// JSON method (limitations: no functions, dates, undefined)
const deepCopy1 = JSON.parse(JSON.stringify(nested));

// structuredClone (ES2022) - better
const deepCopy2 = structuredClone(nested);

deepCopy2.address.city = 'Boston';
console.log(nested.address.city); // 'LA' (not mutated)

// ============================================================================
// COMPARISON
// ============================================================================

// Reference comparison
const objA = { x: 1 };
const objB = { x: 1 };
console.log(objA === objB); // false (different references)

// Same reference
const objC = objA;
console.log(objA === objC); // true (same reference)

// Value comparison for primitives
const num1 = 5;
const num2 = 5;
console.log(num1 === num2); // true (same value)

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Assume assignment copies value
// const arr = [1, 2, 3];
// const copy = arr; // Copies reference, not value!
// copy.push(4); // Mutates original

// ❌ DON'T: Use shallow copy for nested objects
// const nested = { a: { b: 1 } };
// const copy = { ...nested };
// copy.a.b = 2; // Mutates original!

// ❌ DON'T: Compare objects with == or ===
// { a: 1 } === { a: 1 } // false

// ✅ DO: Use spread operator for shallow copy
// ✅ DO: Use structuredClone for deep copy
// ✅ DO: Be aware of reference vs value

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Demonstrate reference vs value assignment
 * 2. Create shallow and deep copies
 * 3. Show mutation effects on references
 * 4. Compare objects and arrays
 * 5. Fix reference-related bugs
 * 6. Understand when to use deep copy
 * 
 * See: exercises/objects/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ Objects, arrays, functions are reference types
 * ✓ Assignment copies reference, not value
 * ✓ Mutations affect all references
 * ✓ Use spread operator for shallow copy
 * ✓ Use structuredClone for deep copy
 * ✓ === compares references, not values
 * ✓ Be careful with nested structures
 */
