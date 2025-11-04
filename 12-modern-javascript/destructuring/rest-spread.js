/**
 * Rest and Spread Operators
 * 
 * WHAT TO LEARN:
 * 
 * 1. REST IN DESTRUCTURING
 *    - Collects remaining elements/properties
 *    - const [first, ...rest] = array;
 *    - const { name, ...rest } = object;
 *    - Must be last element
 * 
 * 2. SPREAD IN ARRAYS
 *    - [...array] - copy array
 *    - [...arr1, ...arr2] - concatenate
 *    - [item, ...arr] - prepend
 *    - [...arr, item] - append
 * 
 * 3. SPREAD IN OBJECTS
 *    - { ...obj } - copy object
 *    - { ...obj1, ...obj2 } - merge
 *    - { ...obj, prop: value } - override
 *    - Shallow copy
 * 
 * 4. FUNCTION ARGUMENTS
 *    - function sum(...numbers) { }
 *    - Collects all arguments
 *    - Real array (not array-like)
 *    - Rest parameters
 * 
 * 5. SPREAD AS ARGUMENTS
 *    - func(...array)
 *    - Spreads array as arguments
 *    - Math.max(...numbers)
 *    - Replaces apply()
 * 
 * 6. CLONING
 *    - Shallow copy: [...arr], { ...obj }
 *    - Nested objects/arrays still referenced
 *    - Not deep copy
 * 
 * 7. MERGING
 *    - { ...obj1, ...obj2 }
 *    - Later properties override earlier
 *    - Useful for defaults
 * 
 * 8. IMMUTABLE UPDATES
 *    - { ...obj, prop: newValue }
 *    - Creates new object
 *    - Original unchanged
 *    - React/Redux pattern
 */

// Rest: collect remaining elements/properties
// const [first, ...rest] = array;
// const { name, ...rest } = object;

// Spread: expand arrays/objects
// [...array], { ...object }
// Function arguments: func(...args)
// Spread as arguments: func(...array)
