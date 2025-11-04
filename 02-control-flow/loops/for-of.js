/**
 * for...of Loop
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - for (const value of iterable) { }
 *    - Iterates over VALUES of iterables
 *    - Block-scoped with let/const
 *    - Cannot use var (syntax error in strict mode for some cases)
 * 
 * 2. WHAT IT WORKS WITH
 *    - Arrays (most common use)
 *    - Strings
 *    - Maps
 *    - Sets
 *    - TypedArrays
 *    - Arguments object
 *    - NodeList and other DOM collections
 *    - Any object with Symbol.iterator
 * 
 * 3. KEY CHARACTERISTICS
 *    - Gives you the VALUE directly (not index)
 *    - Cannot access index directly (use entries() for index)
 *    - Cannot modify loop variable
 *    - More readable than for loop for simple iteration
 *    - Automatically handles length changes
 * 
 * 4. COMPARISON WITH OTHER LOOPS
 *    - for: gives index, manual iteration
 *    - for...in: gives KEYS (avoid for arrays)
 *    - for...of: gives VALUES (best for arrays)
 *    - forEach: method (cannot break/continue)
 * 
 * 5. GETTING INDEX WITH for...of
 *    - Use array.entries() → [index, value]
 *    - for (const [index, value] of array.entries())
 *    - Gives both index and value
 * 
 * 6. BREAK AND CONTINUE
 *    - break: exit loop early
 *    - continue: skip to next iteration
 *    - Works unlike forEach (which cannot break)
 * 
 * 7. COMMON USE CASES
 *    - Iterate array when you only need values
 *    - Loop through string characters
 *    - Process Map entries
 *    - Iterate Set values
 *    - Simple, readable array iteration
 * 
 * 8. LIMITATIONS
 *    - Cannot iterate over plain objects directly
 *    - Objects are not iterable (use Object.keys/values/entries)
 *    - Cannot go backwards (use for loop instead)
 *    - Cannot modify step size
 */

// Works with arrays, strings, maps, sets
// Use entries() when you need index + value: for (const [index, value] of array.entries())
