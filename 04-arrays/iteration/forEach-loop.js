/**
 * forEach Loop
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - arr.forEach((element, index, array) => { })
 *    - Executes function for each element
 *    - Returns undefined (not chainable)
 *    - For side effects, not transformations
 * 
 * 2. CALLBACK PARAMETERS
 *    - element: current item
 *    - index: current position (optional)
 *    - array: original array (optional)
 *    - Usually only need element
 * 
 * 3. NO RETURN VALUE
 *    - forEach always returns undefined
 *    - Cannot chain like map/filter
 *    - For side effects only
 *    - Cannot break or return early
 * 
 * 4. WHEN TO USE forEach
 *    - Need side effects (logging, DOM manipulation)
 *    - Not creating new array
 *    - Calling external APIs
 *    - Updating external state
 * 
 * 5. WHEN NOT TO USE forEach
 *    - Transforming array: use map()
 *    - Filtering array: use filter()
 *    - Accumulating value: use reduce()
 *    - Need to break early: use for...of or for loop
 * 
 * 6. CANNOT BREAK
 *    - Can't use break or continue
 *    - Can't exit early
 *    - return only skips current iteration
 *    - Processes entire array
 * 
 * 7. EARLY EXIT WORKAROUNDS
 *    - Use for...of loop instead
 *    - Use some() (returns boolean)
 *    - Use every() (returns boolean)
 *    - Throw exception (not recommended)
 * 
 * 8. THIS BINDING
 *    - Arrow function: inherits outer this
 *    - Regular function: use second parameter
 *    - arr.forEach(function() { this... }, thisArg);
 *    - Arrow preferred
 * 
 * 9. VS FOR...OF LOOP
 *    - forEach: method, no break
 *    - for...of: statement, can break
 *    - for...of: more flexible
 *    - forEach: functional style
 * 
 * 10. VS MAP
 *     - forEach: for side effects
 *     - map: for transformations
 *     - map: returns new array
 *     - forEach: returns undefined
 * 
 * 11. SPARSE ARRAYS
 *     - Skips empty slots
 *     - [1, , 3].forEach() // only 1 and 3
 *     - Same as map/filter behavior
 * 
 * 12. ASYNC IN forEach
 *     - forEach doesn't wait for promises
 *     - arr.forEach(async (item) => {}) // fires all at once
 *     - Use for...of with await for sequential
 *     - Use Promise.all for parallel
 * 
 * 13. MODIFYING ARRAY
 *     - Can modify elements
 *     - Don't add/remove during iteration
 *     - Causes confusing behavior
 *     - Create new array instead
 * 
 * 14. PERFORMANCE
 *     - Slightly slower than for loop
 *     - Usually negligible
 *     - For loop faster for huge arrays
 *     - Prefer readability
 */

// forEach: execute function for each element (no return value)
// Use when you need side effects, prefer map/filter/reduce when creating new arrays.
