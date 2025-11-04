/**
 * Array Methods: map, filter, reduce
 * 
 * WHAT TO LEARN:
 * 
 * 1. MAP()
 *    - Transforms each element in an array
 *    - Returns a new array of the SAME LENGTH as original
 *    - Does NOT modify the original array (non-mutating)
 *    - Requires a return value in the callback
 *    - Whatever you return becomes the new element
 *    - Skips empty slots in sparse arrays
 *    - Works on arrays only (not array-like objects unless converted)
 *    - Callback receives: (element, index, array)
 *    - Use when: you need to transform all elements
 * 
 * 2. FILTER()
 *    - Selects elements that pass a test
 *    - Returns a new array (usually SHORTER than original)
 *    - Does NOT modify the original array (non-mutating)
 *    - Callback must return truthy/falsy value
 *    - Keeps elements where callback returns truthy
 *    - Skips empty slots in sparse arrays
 *    - Returns empty array if no elements pass
 *    - Callback receives: (element, index, array)
 *    - Use when: you need to select specific elements
 * 
 * 3. REDUCE()
 *    - Accumulates array into a single value
 *    - Returns a SINGLE VALUE (not an array)
 *    - Does NOT modify the original array (non-mutating)
 *    - Most flexible array method
 *    - Can implement map, filter, and more with reduce
 *    - Callback receives: (accumulator, element, index, array)
 *    - Initial value is optional but recommended
 *    - Without initial value, uses first element as accumulator
 *    - Executes callback for each element
 *    - Return value becomes next accumulator
 *    - Use when: you need one value from array (sum, max, object, etc.)
 * 
 * 4. CHAINING METHODS
 *    - Can chain map, filter, reduce together
 *    - Each method returns new array (except reduce)
 *    - Executed left to right
 *    - Creates data transformation pipelines
 *    - Be mindful of performance with large arrays
 *    - Each method iterates through entire array
 * 
 * 5. COMMON PATTERNS
 *    - map: extract properties, transform data
 *    - filter: remove nulls, select by criteria
 *    - reduce: sum numbers, count occurrences, group by property
 *    - Chain: filter → map → reduce for complex transformations
 * 
 * 6. PERFORMANCE CONSIDERATIONS
 *    - Each method creates new array (except reduce)
 *    - Chaining can be memory intensive
 *    - Consider using single reduce for complex operations
 *    - forEach is faster if you don't need return value
 * 
 * 7. COMMON MISTAKES
 *    - Forgetting to return value in map callback
 *    - Not providing initial value for reduce
 *    - Mutating array inside callback
 *    - Confusing when to use each method
 *    - Not handling edge cases (empty arrays)
 */

// Challenge: chain methods to clean and summarize an array of objects
// Example: products.filter(p => p.price > 100).map(p => p.name).reduce((str, name) => str + name, '')
