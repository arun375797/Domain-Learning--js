/**
 * WeakSet and WeakMap
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS WEAKSET
 *    - Collection of objects only
 *    - Weak references (allows garbage collection)
 *    - No iteration
 *    - new WeakSet()
 * 
 * 2. WEAKSET METHODS
 *    - add(object) - adds object
 *    - has(object) - checks existence
 *    - delete(object) - removes object
 *    - No size, no clear, no iteration
 * 
 * 3. WEAKSET ONLY OBJECTS
 *    - Can only store objects
 *    - weakSet.add({}) // OK
 *    - weakSet.add(1) // TypeError
 *    - Primitives not allowed
 * 
 * 4. WEAKSET GARBAGE COLLECTION
 *    - Objects can be garbage collected
 *    - Even if in WeakSet
 *    - Doesn't prevent GC
 *    - "Weak" reference
 * 
 * 5. WEAKSET NO ITERATION
 *    - Cannot iterate
 *    - No forEach, keys, values
 *    - No spread operator
 *    - No way to list members
 * 
 * 6. WEAKSET USE CASES
 *    - Track objects without preventing GC
 *    - Mark objects as "processed"
 *    - Avoid memory leaks
 *    - Private data storage
 * 
 * 7. WHAT IS WEAKMAP
 *    - Key-value pairs
 *    - Keys must be objects
 *    - Weak references
 *    - new WeakMap()
 * 
 * 8. WEAKMAP METHODS
 *    - set(key, value) - adds/updates
 *    - get(key) - retrieves value
 *    - has(key) - checks existence
 *    - delete(key) - removes entry
 *    - No size, no clear, no iteration
 * 
 * 9. WEAKMAP ONLY OBJECT KEYS
 *    - Keys must be objects
 *    - weakMap.set({}, 'value') // OK
 *    - weakMap.set('key', 'value') // TypeError
 *    - Values can be any type
 * 
 * 10. WEAKMAP GARBAGE COLLECTION
 *     - Keys can be garbage collected
 *     - When key object is GC'd, entry removed
 *     - Automatic cleanup
 *     - Prevents memory leaks
 * 
 * 11. WEAKMAP NO ITERATION
 *     - Cannot iterate
 *     - No forEach, keys, values, entries
 *     - No spread operator
 *     - No way to list entries
 * 
 * 12. WEAKMAP USE CASES
 *     - Private data for objects
 *     - Caching computed values
 *     - Metadata for DOM nodes
 *     - Avoid memory leaks
 * 
 * 13. PRIVATE DATA PATTERN
 *     - const privateData = new WeakMap();
 *     - class User {
 *         constructor(name) {
 *           privateData.set(this, { password: 'secret' });
 *         }
 *       }
 *     - Data tied to object lifetime
 * 
 * 14. WHEN TO USE WEAK COLLECTIONS
 *     - Need weak references
 *     - Avoid memory leaks
 *     - Automatic cleanup desired
 *     - Don't need iteration
 *     - Metadata storage
 * 
 * 15. WHEN NOT TO USE
 *     - Need iteration
 *     - Need size property
 *     - Need to store primitives
 *     - Need persistent storage
 *     - Most common use cases
 * 
 * 16. WEAK VS STRONG REFERENCES
 *     - Strong: prevents garbage collection
 *     - Weak: allows garbage collection
 *     - Map/Set: strong references
 *     - WeakMap/WeakSet: weak references
 */

// WeakSet: stores objects only, no iteration, allows garbage collection
// WeakMap: object keys only, no iteration, allows garbage collection
// Use when you need weak references to avoid memory leaks.
