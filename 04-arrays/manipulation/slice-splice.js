/**
 * slice() and splice()
 * 
 * WHAT TO LEARN:
 * 
 * 1. SLICE() BASICS
 *    - Extracts portion of array
 *    - Returns new array
 *    - Does NOT mutate original
 *    - arr.slice(start, end)
 * 
 * 2. SLICE() PARAMETERS
 *    - start: begin index (inclusive)
 *    - end: end index (exclusive)
 *    - arr.slice(1, 3) // indices 1 and 2
 *    - Both optional
 * 
 * 3. SLICE() WITH ONE PARAM
 *    - arr.slice(2) // from index 2 to end
 *    - Everything from start index
 *    - Useful for "rest of array"
 * 
 * 4. SLICE() NO PARAMS
 *    - arr.slice() // shallow copy
 *    - Copies entire array
 *    - Quick way to clone
 *    - Same as [...arr]
 * 
 * 5. SLICE() NEGATIVE INDICES
 *    - arr.slice(-2) // last 2 elements
 *    - arr.slice(0, -1) // all except last
 *    - Counts from end
 *    - Very useful
 * 
 * 6. SPLICE() BASICS
 *    - Adds/removes elements
 *    - MUTATES original array
 *    - Returns removed elements
 *    - arr.splice(start, deleteCount, ...items)
 * 
 * 7. SPLICE() REMOVING ELEMENTS
 *    - arr.splice(2, 1) // remove 1 element at index 2
 *    - arr.splice(0, 2) // remove first 2 elements
 *    - Returns array of removed items
 * 
 * 8. SPLICE() ADDING ELEMENTS
 *    - arr.splice(2, 0, 'new') // insert at index 2
 *    - deleteCount = 0 means no removal
 *    - Can add multiple: arr.splice(2, 0, 'a', 'b', 'c')
 * 
 * 9. SPLICE() REPLACING ELEMENTS
 *    - arr.splice(2, 1, 'new') // remove 1, add 1
 *    - Replaces element at index 2
 *    - Can replace multiple
 * 
 * 10. SPLICE() NEGATIVE START
 *     - arr.splice(-2, 1) // remove second-last
 *     - Counts from end
 *     - Same as slice
 * 
 * 11. KEY DIFFERENCES
 *     - slice: non-mutating, extracting
 *     - splice: mutating, modifying
 *     - slice: for copying/extracting
 *     - splice: for add/remove/replace
 * 
 * 12. IMMUTABLE SPLICE ALTERNATIVE
 *     - const removed = arr.slice(i, i + count);
 *     - const newArr = [...arr.slice(0, i), ...arr.slice(i + count)];
 *     - Or use filter: arr.filter((_, index) => index !== i)
 * 
 * 13. COMMON SLICE PATTERNS
 *     - Copy: arr.slice()
 *     - Last n: arr.slice(-n)
 *     - Remove last: arr.slice(0, -1)
 *     - Range: arr.slice(start, end)
 * 
 * 14. COMMON SPLICE PATTERNS
 *     - Remove one: arr.splice(i, 1)
 *     - Insert: arr.splice(i, 0, item)
 *     - Replace: arr.splice(i, 1, newItem)
 *     - Clear: arr.splice(0, arr.length)
 * 
 * 15. WHEN TO USE WHICH
 *     - slice: extracting without changing original
 *     - splice: modifying array in place
 *     - slice: immutable operations
 *     - splice: when mutation is acceptable
 */

// slice(start, end): returns new array, doesn't mutate
// splice(start, deleteCount, ...items): mutates array, returns deleted items
// Use slice for copying, splice for modifying
