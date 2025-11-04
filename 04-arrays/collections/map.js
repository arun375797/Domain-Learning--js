/**
 * Map Collection
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS MAP
 *    - Key-value pairs collection
 *    - new Map()
 *    - Keys can be any type (not just strings)
 *    - Maintains insertion order
 * 
 * 2. MAP VS OBJECT
 *    - Map: any key type (objects, functions, primitives)
 *    - Object: only string/symbol keys
 *    - Map: maintains insertion order
 *    - Map: has size property
 *    - Map: optimized for frequent additions/deletions
 * 
 * 3. CREATING MAPS
 *    - const map = new Map();
 *    - const map = new Map([[key1, val1], [key2, val2]]);
 *    - From array of [key, value] pairs
 * 
 * 4. SET() METHOD
 *    - map.set(key, value)
 *    - Adds or updates entry
 *    - Returns map (chainable)
 *    - map.set('a', 1).set('b', 2)
 * 
 * 5. GET() METHOD
 *    - map.get(key)
 *    - Returns value for key
 *    - Returns undefined if not found
 *    - Not null, undefined!
 * 
 * 6. HAS() METHOD
 *    - map.has(key)
 *    - Checks if key exists
 *    - Returns boolean
 *    - More reliable than get()
 * 
 * 7. DELETE() METHOD
 *    - map.delete(key)
 *    - Removes entry
 *    - Returns true if existed, false otherwise
 *    - Not undefined like delete obj[key]
 * 
 * 8. CLEAR() METHOD
 *    - map.clear()
 *    - Removes all entries
 *    - Returns undefined
 *    - Quick way to empty map
 * 
 * 9. SIZE PROPERTY
 *    - map.size
 *    - Number of entries
 *    - Not length, size!
 *    - Always accurate
 * 
 * 10. KEYS() METHOD
 *     - map.keys()
 *     - Returns iterator of keys
 *     - [...map.keys()] for array
 *     - For iterating keys
 * 
 * 11. VALUES() METHOD
 *     - map.values()
 *     - Returns iterator of values
 *     - [...map.values()] for array
 *     - For iterating values
 * 
 * 12. ENTRIES() METHOD
 *     - map.entries()
 *     - Returns iterator of [key, value] pairs
 *     - map.entries() same as map[Symbol.iterator]()
 *     - Default iterator
 * 
 * 13. FOREACH() METHOD
 *     - map.forEach((value, key, map) => {})
 *     - Note: value before key (opposite of arrays!)
 *     - For side effects
 * 
 * 14. FOR...OF ITERATION
 *     - for (const [key, value] of map) {}
 *     - Destructures entries
 *     - Most convenient iteration
 * 
 * 15. OBJECT AS KEY
 *     - const obj = {};
 *     - map.set(obj, 'value');
 *     - Unique: objects as keys!
 *     - Uses reference equality
 * 
 * 16. WHEN TO USE MAP
 *     - Need non-string keys
 *     - Frequent additions/deletions
 *     - Need size easily
 *     - Maintain insertion order
 *     - Pure data storage
 * 
 * 17. WHEN TO USE OBJECT
 *     - String keys
 *     - Need JSON serialization
 *     - Need methods attached
 *     - Fixed set of keys
 *     - Most common use case
 */

// Map stores key-value pairs: const userRoles = new Map([["admin", ["read", "write"]]]);
// Methods: set, get, has, delete, size, clear
// Better than objects for dynamic keys and maintaining insertion order.
