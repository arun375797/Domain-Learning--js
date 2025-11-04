/**
 * Set Collection
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS SET
 *    - Collection of unique values
 *    - new Set()
 *    - No duplicate values
 *    - Maintains insertion order
 * 
 * 2. CREATING SETS
 *    - const set = new Set();
 *    - const set = new Set([1, 2, 3]);
 *    - const set = new Set('hello'); // Set of chars
 *    - From any iterable
 * 
 * 3. UNIQUENESS
 *    - new Set([1, 2, 2, 3]) // Set {1, 2, 3}
 *    - Automatically removes duplicates
 *    - Uses SameValueZero equality
 *    - NaN equals NaN in Set
 * 
 * 4. ADD() METHOD
 *    - set.add(value)
 *    - Adds value if not present
 *    - Returns set (chainable)
 *    - set.add(1).add(2).add(3)
 * 
 * 5. HAS() METHOD
 *    - set.has(value)
 *    - Checks if value exists
 *    - Returns boolean
 *    - Fast O(1) lookup
 * 
 * 6. DELETE() METHOD
 *    - set.delete(value)
 *    - Removes value
 *    - Returns true if existed, false otherwise
 *    - Not undefined
 * 
 * 7. CLEAR() METHOD
 *    - set.clear()
 *    - Removes all values
 *    - Returns undefined
 *    - Empties the set
 * 
 * 8. SIZE PROPERTY
 *    - set.size
 *    - Number of unique values
 *    - Not length, size!
 *    - Always accurate
 * 
 * 9. ITERATION
 *    - for (const value of set) {}
 *    - set.forEach(value => {})
 *    - [...set] to array
 *    - Order: insertion order
 * 
 * 10. KEYS() AND VALUES()
 *     - set.keys() and set.values() return same
 *     - Both return values (no keys in Set)
 *     - For consistency with Map
 *     - Usually just iterate with for...of
 * 
 * 11. REMOVING DUPLICATES
 *     - const unique = [...new Set(array)];
 *     - Most common use case
 *     - Quick and easy
 *     - One-liner
 * 
 * 12. SET OPERATIONS (MANUAL)
 *     - Union: new Set([...set1, ...set2])
 *     - Intersection: new Set([...set1].filter(x => set2.has(x)))
 *     - Difference: new Set([...set1].filter(x => !set2.has(x)))
 *     - No built-in methods (yet)
 * 
 * 13. WHEN TO USE SET
 *     - Need unique values
 *     - Fast membership checking
 *     - Remove duplicates
 *     - Set operations
 *     - Don't need key-value pairs
 * 
 * 14. WHEN TO USE ARRAY
 *     - Need duplicates
 *     - Need indexing
 *     - Need order manipulation
 *     - Most common use case
 * 
 * 15. PERFORMANCE
 *     - has() is O(1) vs array includes() O(n)
 *     - add() is O(1) vs array push() O(1)
 *     - delete() is O(1) vs array splice() O(n)
 *     - Better for lookups
 * 
 * 16. OBJECT STORAGE
 *     - Can store objects
 *     - Uses reference equality
 *     - {} !== {} (different objects)
 *     - Same reference = same value
 */

// Set stores unique values: const ids = new Set([1, 2, 2]);
// Methods: add, delete, has, size, clear
// Useful for removing duplicates: [...new Set(array)]
