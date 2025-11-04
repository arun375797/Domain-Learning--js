/**
 * Object Static Methods
 * 
 * WHAT TO LEARN:
 * 
 * 1. OBJECT.KEYS()
 *    - Returns array of own enumerable property names
 *    - Object.keys(obj) // ['name', 'age']
 *    - Does not include prototype properties
 *    - Does not include symbols
 * 
 * 2. OBJECT.VALUES()
 *    - Returns array of own enumerable property values
 *    - Object.values(obj) // ['Ada', 30]
 *    - ES2017 feature
 *    - Does not include prototype values
 * 
 * 3. OBJECT.ENTRIES()
 *    - Returns array of [key, value] pairs
 *    - Object.entries(obj) // [['name', 'Ada'], ['age', 30]]
 *    - ES2017 feature
 *    - Good for Object.fromEntries() round-trip
 * 
 * 4. OBJECT.FROMENTRIES()
 *    - Opposite of entries
 *    - Object.fromEntries([['name', 'Ada'], ['age', 30]])
 *    - Creates object from key-value pairs
 *    - ES2019 feature
 * 
 * 5. OBJECT.ASSIGN()
 *    - Copies properties from sources to target
 *    - Object.assign(target, source1, source2)
 *    - Shallow copy
 *    - Returns target
 * 
 * 6. OBJECT.CREATE()
 *    - Creates object with specified prototype
 *    - Object.create(proto, descriptors)
 *    - Can pass null for no prototype
 *    - Advanced feature
 * 
 * 7. OBJECT.GETPROTOTYPEOF()
 *    - Returns prototype of object
 *    - Object.getPrototypeOf(obj)
 *    - Preferred over __proto__
 * 
 * 8. OBJECT.SETPROTOTYPEOF()
 *    - Changes prototype of object
 *    - Object.setPrototypeOf(obj, proto)
 *    - Slow, avoid if possible
 *    - Can break optimizations
 * 
 * 9. OBJECT.HASOWN()
 *    - Checks if object has own property
 *    - Object.hasOwn(obj, 'prop')
 *    - ES2022 feature
 *    - Replaces hasOwnProperty
 * 
 * 10. OBJ.HASOWNPROPERTY()
 *     - Older method
 *     - obj.hasOwnProperty('prop')
 *     - Still widely used
 *     - Can be overridden
 * 
 * 11. OBJECT.GETOWNPROPERTYDESCRIPTOR()
 *     - Gets property descriptor
 *     - Object.getOwnPropertyDescriptor(obj, 'prop')
 *     - Returns descriptor object
 *     - {value, writable, enumerable, configurable}
 * 
 * 12. OBJECT.DEFINEPROPERTY()
 *     - Define property with descriptor
 *     - Object.defineProperty(obj, 'prop', descriptor)
 *     - Advanced control
 *     - Getters/setters
 * 
 * 13. OBJECT.FREEZE/SEAL/PREVENTEXTENSIONS
 *     - Immutability methods
 *     - See freezing-sealing.js
 * 
 * 14. OBJECT.IS()
 *     - Strict equality comparison
 *     - Object.is(NaN, NaN) // true
 *     - Object.is(+0, -0) // false
 *     - More precise than ===
 * 
 * 15. OBJECT.GETOWNPROPERTYNAMES()
 *     - All own properties (including non-enumerable)
 *     - Object.getOwnPropertyNames(obj)
 *     - Unlike keys(), includes non-enumerable
 * 
 * 16. OBJECT.GETOWNPROPERTYSYMBOLS()
 *     - Returns array of own symbol properties
 *     - Object.getOwnPropertySymbols(obj)
 *     - Symbols not in keys()
 */

// Object methods: keys, values, entries, assign, hasOwn, hasOwnProperty
// Object.keys(obj) - array of own property names
// Object.values(obj) - array of own property values
// Object.entries(obj) - array of [key, value] pairs
