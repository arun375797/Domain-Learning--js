/**
 * Copying and Cloning Objects
 * 
 * WHAT TO LEARN:
 * 
 * 1. SHALLOW COPY
 *    - Copies only top level
 *    - Nested objects/arrays referenced
 *    - Not deep copy
 *    - Most common need
 * 
 * 2. SPREAD OPERATOR
 *    - const copy = { ...original };
 *    - ES2018
 *    - Shallow copy
 *    - Clean syntax
 * 
 * 3. OBJECT.ASSIGN()
 *    - Object.assign({}, original)
 *    - Shallow copy
 *    - Can merge: Object.assign({}, obj1, obj2)
 *    - Pre-spread method
 * 
 * 4. SHALLOW COPY GOTCHA
 *    - const copy = { ...obj };
 *    - copy.nested.value = 'changed';
 *    - obj.nested.value also changed!
 *    - Nested objects still referenced
 * 
 * 5. DEEP COPY WITH JSON
 *    - JSON.parse(JSON.stringify(obj))
 *    - Simple deep copy
 *    - Limitations: no functions, dates become strings, no undefined, no symbols
 *    - Works for plain data
 * 
 * 6. STRUCTUREDCLONE()
 *    - structuredClone(obj)
 *    - True deep copy
 *    - Preserves Dates, Maps, Sets, typed arrays
 *    - Cannot clone functions
 *    - Modern browsers (2022+)
 * 
 * 7. STRUCTUREDCLONE VS JSON
 *    - structuredClone preserves more types
 *    - Handles circular references
 *    - Faster
 *    - Preferred for deep cloning
 * 
 * 8. MANUAL DEEP COPY
 *    - Recursive function
 *    - Check type of each property
 *    - Clone nested objects/arrays
 *    - Complex but flexible
 * 
 * 9. LIBRARIES
 *    - Lodash: _.cloneDeep()
 *    - Most reliable
 *    - Handles edge cases
 *    - Slower but safer
 * 
 * 10. WHEN SHALLOW IS ENOUGH
 *     - No nested objects
 *     - Intentionally sharing nested data
 *     - Performance critical
 *     - Most use cases
 * 
 * 11. WHEN DEEP COPY NEEDED
 *     - Nested structures
 *     - No shared references
 *     - State management
 *     - Undo/redo functionality
 * 
 * 12. IMMUTABILITY PATTERNS
 *     - Instead of mutating: create new with changes
 *     - { ...obj, prop: newValue }
 *     - Functional programming style
 *     - React/Redux standard
 * 
 * 13. PERFORMANCE
 *     - Shallow copy: very fast
 *     - Deep copy: slower
 *     - structuredClone faster than JSON or libraries
 *     - Usually not bottleneck
 */

// Shallow copy: const clone = { ...user };
// Deep copy techniques: structuredClone(user), JSON.parse(JSON.stringify(user));
// Note: structuredClone preserves Dates, Maps, Sets; JSON methods do not.
