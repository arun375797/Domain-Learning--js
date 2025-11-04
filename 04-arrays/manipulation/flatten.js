/**
 * Flattening Arrays (flat() and flatMap())
 * 
 * WHAT TO LEARN:
 * 
 * 1. FLAT() BASICS
 *    - Flattens nested arrays
 *    - Returns new array
 *    - Does NOT mutate original
 *    - arr.flat(depth)
 * 
 * 2. FLAT() DEFAULT DEPTH
 *    - arr.flat() // depth = 1
 *    - Flattens one level
 *    - [1, [2, [3]]].flat() // [1, 2, [3]]
 *    - Most common use case
 * 
 * 3. FLAT() WITH DEPTH
 *    - arr.flat(2) // flatten 2 levels
 *    - arr.flat(Infinity) // flatten all levels
 *    - Specify how deep to flatten
 * 
 * 4. FLAT() INFINITY
 *    - [1, [2, [3, [4]]]].flat(Infinity) // [1, 2, 3, 4]
 *    - Flattens completely
 *    - Useful for unknown depth
 *    - Be careful with circular references
 * 
 * 5. FLAT() REMOVES HOLES
 *    - [1, , 3].flat() // [1, 3]
 *    - Empty slots removed
 *    - Sparse to dense array
 * 
 * 6. FLATMAP() BASICS
 *    - Combines map() and flat(1)
 *    - More efficient than .map().flat()
 *    - arr.flatMap(callback)
 *    - Single pass operation
 * 
 * 7. FLATMAP() BEHAVIOR
 *    - Maps each element
 *    - Flattens result by one level
 *    - [1, 2].flatMap(x => [x, x * 2]) // [1, 2, 2, 4]
 *    - Returns new array
 * 
 * 8. WHEN TO USE FLATMAP
 *    - Mapping to arrays
 *    - Expanding elements
 *    - Filtering and mapping together
 *    - One-to-many transformations
 * 
 * 9. FLATMAP VS MAP
 *    - map: one-to-one
 *    - flatMap: one-to-many
 *    - flatMap: automatically flattens
 *    - map: keeps nested structure
 * 
 * 10. FLATMAP FILTERING
 *     - arr.flatMap(x => x > 5 ? [x] : [])
 *     - Empty array to filter out
 *     - [x] to include
 *     - Combines filter and map
 * 
 * 11. BEFORE FLAT() EXISTED
 *     - arr.reduce((acc, val) => acc.concat(val), [])
 *     - Or recursive function
 *     - flat() is cleaner
 * 
 * 12. DEEP FLATTEN ALTERNATIVE
 *     - function deepFlat(arr) {
 *         return arr.reduce((acc, val) => 
 *           Array.isArray(val) ? acc.concat(deepFlat(val)) : acc.concat(val)
 *         , []);
 *       }
 *     - Or: arr.flat(Infinity)
 * 
 * 13. PRACTICAL EXAMPLES
 *     - Flatten nested data: comments.map(c => c.replies).flat()
 *     - Expand items: arr.flatMap(item => [item, item + 'modified'])
 *     - Filter+map: arr.flatMap(x => x > 0 ? [x * 2] : [])
 * 
 * 14. PERFORMANCE
 *     - flat() and flatMap() are efficient
 *     - flatMap() better than map().flat()
 *     - Single pass vs two passes
 * 
 * 15. BROWSER SUPPORT
 *     - ES2019 feature
 *     - Modern browsers
 *     - Polyfill for old browsers
 */

// Flatten nested arrays: flat(depth) or flatMap()
// flatMap() = map() + flat(1)
// Useful for processing nested data structures.
