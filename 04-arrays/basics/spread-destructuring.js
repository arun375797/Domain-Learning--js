/**
 * Spread and Destructuring
 * 
 * WHAT TO LEARN:
 * 
 * 1. ARRAY DESTRUCTURING
 *    - Extract values from array into variables
 *    - const [first, second] = [1, 2, 3];
 *    - first = 1, second = 2
 *    - Position-based extraction
 * 
 * 2. SKIPPING ELEMENTS
 *    - const [first, , third] = [1, 2, 3];
 *    - first = 1, third = 3
 *    - Leave empty slot to skip
 * 
 * 3. REST IN DESTRUCTURING
 *    - const [head, ...tail] = [1, 2, 3, 4];
 *    - head = 1, tail = [2, 3, 4]
 *    - Collects remaining elements
 *    - Must be last element
 * 
 * 4. DEFAULT VALUES
 *    - const [a = 10, b = 20] = [5];
 *    - a = 5, b = 20
 *    - Used when value is undefined
 *    - Not used for null
 * 
 * 5. SWAPPING VARIABLES
 *    - [a, b] = [b, a];
 *    - Elegant swap without temp variable
 *    - Clean and concise
 * 
 * 6. FUNCTION RETURN VALUES
 *    - function getCoords() { return [10, 20]; }
 *    - const [x, y] = getCoords();
 *    - Multiple return values
 * 
 * 7. SPREAD OPERATOR
 *    - ...array
 *    - Expands array into individual elements
 *    - Creates shallow copy
 *    - ES6 feature
 * 
 * 8. COPYING ARRAYS
 *    - const copy = [...original];
 *    - Shallow copy
 *    - Changes to copy don't affect original
 *    - Cleaner than slice()
 * 
 * 9. CONCATENATING ARRAYS
 *    - const combined = [...arr1, ...arr2, ...arr3];
 *    - More readable than concat()
 *    - Can mix with individual elements
 *    - [...arr1, 'extra', ...arr2]
 * 
 * 10. FUNCTION ARGUMENTS
 *     - Math.max(...numbers);
 *     - Spreads array as individual arguments
 *     - Replaces apply: Math.max.apply(null, numbers)
 * 
 * 11. ADDING ELEMENTS
 *     - const newArr = [...arr, newItem]; // end
 *     - const newArr = [newItem, ...arr]; // start
 *     - const newArr = [...arr.slice(0, i), item, ...arr.slice(i)]; // middle
 * 
 * 12. REMOVING ELEMENTS
 *     - const newArr = arr.filter((_, index) => index !== i);
 *     - Or: [...arr.slice(0, i), ...arr.slice(i + 1)]
 *     - Non-mutating removal
 * 
 * 13. NESTED DESTRUCTURING
 *     - const [[a, b], [c, d]] = [[1, 2], [3, 4]];
 *     - Works with nested arrays
 *     - Can get complex quickly
 * 
 * 14. SHALLOW COPY WARNING
 *     - Spread creates shallow copy
 *     - Nested objects/arrays still referenced
 *     - const copy = [...arr]; // shallow
 *     - For deep copy: structuredClone(arr) or libraries
 * 
 * 15. PERFORMANCE
 *     - Spread is fast for small-medium arrays
 *     - Slightly slower than push for building arrays
 *     - Usually negligible difference
 *     - Prefer readability
 */

// Destructure arrays: const [first, second] = numbers;
// Rest elements: const [head, ...tail] = numbers;
// Spread arrays into new arrays or function arguments: Math.max(...numbers);
