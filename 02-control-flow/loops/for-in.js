/**
 * for...in Loop
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - for (const key in object) { }
 *    - Iterates over KEYS (property names)
 *    - Block-scoped with let/const
 * 
 * 2. WHAT IT ITERATES
 *    - Enumerable properties of objects
 *    - Own properties
 *    - Inherited properties from prototype chain
 *    - String indices for arrays (NOT recommended)
 * 
 * 3. KEY CHARACTERISTICS
 *    - Gives you the KEY/property name (not value)
 *    - Includes inherited enumerable properties
 *    - Order is not guaranteed (though usually predictable)
 *    - Iterates over all enumerable properties
 * 
 * 4. USE WITH OBJECTS
 *    - Designed for plain objects
 *    - Iterate over object keys
 *    - Access values with object[key]
 *    - Check hasOwnProperty() to skip inherited props
 * 
 * 5. AVOID WITH ARRAYS
 *    - Gives string indices ("0", "1", "2")
 *    - Includes inherited properties
 *    - Slower than for or for...of
 *    - Can include non-index properties
 *    - Use for...of for arrays instead
 * 
 * 6. FILTERING INHERITED PROPERTIES
 *    - Use Object.hasOwn(object, key) [modern]
 *    - Or object.hasOwnProperty(key) [older]
 *    - Ensures you only get own properties
 * 
 * 7. ALTERNATIVES (USUALLY BETTER)
 *    - Object.keys(obj) → array of keys
 *    - Object.values(obj) → array of values
 *    - Object.entries(obj) → array of [key, value] pairs
 *    - These don't include inherited properties
 * 
 * 8. WHEN TO USE
 *    - Iterating plain object properties
 *    - Debugging objects
 *    - When you specifically need inherited properties
 *    - Avoid for arrays (use for...of instead)
 * 
 * 9. COMMON PITFALLS
 *    - Using on arrays (gives string indices)
 *    - Not checking hasOwnProperty
 *    - Assuming specific order
 *    - Forgetting it includes inherited properties
 */

// Use for objects; avoid on arrays unless you specifically need keys
// Always check: if (Object.hasOwn(object, key)) { }
