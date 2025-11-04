/**
 * Array Creation & Indexing
 * 
 * LEARNING OBJECTIVES:
 * - Learn different ways to create arrays
 * - Understand array indexing and access patterns
 * - Master array modification methods
 * - Learn to copy arrays without mutation
 * 
 * KEY CONCEPTS:
 * - Arrays are zero-indexed
 * - Arrays are objects with numeric keys
 * - Length property is dynamic
 * - Methods can be mutating or non-mutating
 */

// ============================================================================
// CREATING ARRAYS
// ============================================================================

// Array literal (most common)
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'hello', true, { name: 'Alice' }, [1, 2, 3]];

// Array constructor
const arr1 = new Array(); // Empty array
const arr2 = new Array(5); // Array with 5 empty slots
const arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Array.from() - Create from array-like objects
const str = 'hello';
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
const fromSet = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// Array.of() - Create from arguments
const arr4 = Array.of(1, 2, 3); // [1, 2, 3]
const arr5 = Array.of(5); // [5] (not [empty × 5])

// Using spread operator
const arr6 = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
const arr7 = [...numbers]; // Copy of numbers

// Using split() for strings
const words = 'apple banana orange'.split(' '); // ['apple', 'banana', 'orange']

// ============================================================================
// ACCESSING ELEMENTS
// ============================================================================

// Index access (zero-indexed)
const first = numbers[0]; // 1
const second = numbers[1]; // 2
const last = numbers[numbers.length - 1]; // 5

// Using at() method (ES2022) - supports negative indices
const first2 = numbers.at(0); // 1
const last2 = numbers.at(-1); // 5 (last element)
const last3 = numbers.at(-2); // 4 (second to last)

// Accessing non-existent index
const missing = numbers[10]; // undefined (not error)
const exists = numbers.hasOwnProperty(0); // true
const notExists = numbers.hasOwnProperty(10); // false

// ============================================================================
// ARRAY LENGTH
// ============================================================================

console.log(numbers.length); // 5

// Length is writable!
const arr8 = [1, 2, 3, 4, 5];
arr8.length = 3;
console.log(arr8); // [1, 2, 3] (truncated)

arr8.length = 10;
console.log(arr8); // [1, 2, 3, empty × 7] (sparse array)

// ============================================================================
// MODIFYING ARRAYS
// ============================================================================

// Mutating methods (change original array)
const arr9 = [1, 2, 3];

// push() - add to end
arr9.push(4); // [1, 2, 3, 4]

// pop() - remove from end
arr9.pop(); // [1, 2, 3], returns 4

// unshift() - add to beginning
arr9.unshift(0); // [0, 1, 2, 3]

// shift() - remove from beginning
arr9.shift(); // [1, 2, 3], returns 0

// splice() - add/remove at any position
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(2, 1, 'a', 'b'); // Remove 1 element at index 2, insert 'a', 'b'
console.log(arr10); // [1, 2, 'a', 'b', 4, 5]

// Non-mutating alternatives
const arr11 = [1, 2, 3];
const newArr = [...arr11, 4]; // [1, 2, 3, 4] (arr11 unchanged)
const newArr2 = [0, ...arr11]; // [0, 1, 2, 3] (arr11 unchanged)
const newArr3 = arr11.slice(0, 2); // [1, 2] (arr11 unchanged)

// ============================================================================
// COPYING ARRAYS
// ============================================================================

const original = [1, 2, 3, 4, 5];

// Shallow copy - Spread operator (recommended)
const copy1 = [...original];

// Shallow copy - Array.from()
const copy2 = Array.from(original);

// Shallow copy - slice()
const copy3 = original.slice();

// Shallow copy - concat()
const copy4 = [].concat(original);

// All copies are independent but shallow
const nested = [[1, 2], [3, 4]];
const nestedCopy = [...nested];
nestedCopy[0].push(5);
console.log(nested); // [[1, 2, 5], [3, 4]] (shared reference!)

// Deep copy (for nested arrays)
const deepCopy = JSON.parse(JSON.stringify(nested)); // Only works for JSON-serializable
const deepCopy2 = structuredClone(nested); // Modern way (ES2022)

// ============================================================================
// CHECKING ARRAYS
// ============================================================================

// Array.isArray() - check if value is array
Array.isArray([1, 2, 3]); // true
Array.isArray('hello'); // false
Array.isArray({ length: 5 }); // false

// instanceof Array
[1, 2, 3] instanceof Array; // true

// Check if array has elements
const empty = [];
empty.length > 0; // false
empty.length === 0; // true

// ============================================================================
// COMMON PITFALLS
// ============================================================================

// ❌ DON'T: Use == to compare arrays
// [1, 2] == [1, 2] // false (different references)

// ❌ DON'T: Modify array while iterating
// numbers.forEach((n, i) => { numbers.push(n * 2); }); // Infinite loop risk

// ❌ DON'T: Use delete on array elements
// delete numbers[0]; // Creates sparse array, doesn't update length

// ✅ DO: Use methods like splice() for removal
// ✅ DO: Use spread operator for copying
// ✅ DO: Check Array.isArray() before array operations

// ============================================================================
// PRACTICE EXERCISES
// ============================================================================

/**
 * 1. Create array with numbers 1-10
 * 2. Get first and last elements
 * 3. Add element to beginning and end
 * 4. Remove element at specific index
 * 5. Create copy of array without mutation
 * 6. Check if value is array
 * 7. Create array from string
 * 8. Create array with specific length filled with value
 * 
 * See: exercises/arrays/ directory for more challenges
 */

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ✓ Arrays are zero-indexed objects
 * ✓ Use array literals [] for creation
 * ✓ Length property is dynamic and writable
 * ✓ Use spread operator [...] for copying
 * ✓ Prefer non-mutating methods when possible
 * ✓ Use Array.isArray() to check type
 * ✓ at() method supports negative indices (ES2022)
 */
