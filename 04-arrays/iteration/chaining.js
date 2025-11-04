/**
 * Method Chaining
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS CHAINING
 *    - Call multiple methods in sequence
 *    - arr.filter().map().reduce()
 *    - Output of one is input of next
 *    - Clean, readable pipelines
 * 
 * 2. WHY IT WORKS
 *    - Methods return new arrays
 *    - Can call methods on returned arrays
 *    - Pure functions enable chaining
 *    - Immutable transformations
 * 
 * 3. CHAINABLE METHODS
 *    - map() - returns array
 *    - filter() - returns array
 *    - flat() - returns array
 *    - flatMap() - returns array
 *    - slice() - returns array
 *    - concat() - returns array
 *    - reverse() - returns array
 *    - sort() - returns array
 * 
 * 4. NON-CHAINABLE METHODS
 *    - reduce() - returns accumulated value
 *    - forEach() - returns undefined
 *    - find() - returns element or undefined
 *    - some() - returns boolean
 *    - every() - returns boolean
 *    - includes() - returns boolean
 * 
 * 5. BASIC CHAINING EXAMPLE
 *    - const result = numbers
 *        .filter(x => x > 0)
 *        .map(x => x * 2)
 *        .slice(0, 5);
 *    - Filter, transform, take first 5
 * 
 * 6. ORDER MATTERS
 *    - filter before map: more efficient
 *    - arr.filter().map() // process fewer items
 *    - vs arr.map().filter() // process all items
 *    - Optimize by filtering early
 * 
 * 7. PERFORMANCE CONSIDERATIONS
 *    - Each method creates new array
 *    - Multiple passes over data
 *    - Usually fast enough
 *    - For huge arrays, consider single reduce()
 * 
 * 8. READABILITY
 *    - Break chains into multiple lines
 *    - const result = arr
 *        .filter(isValid)
 *        .map(transform)
 *        .sort(compare);
 *    - More readable than nested calls
 * 
 * 9. FLATMAP IN CHAINS
 *    - Combines map and flat(1)
 *    - arr.flatMap(x => [x, x * 2])
 *    - More efficient than .map().flat()
 *    - Useful for expanding arrays
 * 
 * 10. ENDING WITH REDUCE
 *     - Common pattern: filter/map then reduce
 *     - arr
 *         .filter(condition)
 *         .map(transform)
 *         .reduce(accumulate, initial);
 *     - Accumulate final result
 * 
 * 11. DEBUGGING CHAINS
 *     - Insert taps: .map(x => { console.log(x); return x; })
 *     - Or helper: const tap = fn => x => { fn(x); return x; }
 *     - Break chain to inspect intermediate results
 * 
 * 12. COMPLEX TRANSFORMATIONS
 *     - const adults = users
 *         .filter(u => u.age >= 18)
 *         .map(u => ({ name: u.name, email: u.email }))
 *         .sort((a, b) => a.name.localeCompare(b.name));
 * 
 * 13. WHEN TO AVOID CHAINING
 *     - Very complex logic
 *     - Need intermediate results
 *     - Multiple branches
 *     - Performance critical (huge arrays)
 * 
 * 14. FUNCTIONAL PROGRAMMING STYLE
 *     - Declarative vs imperative
 *     - Says "what" not "how"
 *     - Easier to understand intent
 *     - Composable operations
 * 
 * 15. ALTERNATIVE: SINGLE REDUCE
 *     - Can replace chains with one reduce
 *     - More efficient, less readable
 *     - Usually not worth it
 *     - Prefer readable chains
 */

// Chain array methods for data transformation pipelines.
// Example: array.filter().map().reduce()
// Each method returns a new array (except reduce which returns accumulated value).
