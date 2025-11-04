/**
 * Prototype Chain
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS PROTOTYPE CHAIN
 *    - Linked series of objects
 *    - object → prototype → prototype → ... → null
 *    - Inheritance mechanism in JavaScript
 *    - Property lookup follows chain
 * 
 * 2. [[PROTOTYPE]] INTERNAL SLOT
 *    - Every object has internal [[Prototype]]
 *    - Links to another object
 *    - null at end of chain
 *    - Not directly accessible
 * 
 * 3. ACCESSING PROTOTYPE
 *    - Object.getPrototypeOf(obj)
 *    - Preferred method
 *    - Returns prototype object
 *    - Or obj.__proto__ (deprecated)
 * 
 * 4. DEFAULT CHAIN
 *    - const obj = {};
 *    - obj → Object.prototype → null
 *    - All objects inherit from Object.prototype
 *    - Gets toString, hasOwnProperty, etc.
 * 
 * 5. ARRAY PROTOTYPE CHAIN
 *    - const arr = [];
 *    - arr → Array.prototype → Object.prototype → null
 *    - Gets array methods from Array.prototype
 *    - Gets object methods from Object.prototype
 * 
 * 6. PROPERTY LOOKUP
 *    - obj.prop
 *    - 1. Check obj
 *    - 2. Check obj's prototype
 *    - 3. Check prototype's prototype
 *    - 4. Until null (undefined if not found)
 * 
 * 7. SHADOWING
 *    - Property on object shadows prototype property
 *    - obj.prop hides prototype.prop
 *    - Own property takes precedence
 * 
 * 8. SETTING PROTOTYPE
 *    - Object.create(proto)
 *    - Creates object with specified prototype
 *    - Object.setPrototypeOf(obj, proto)
 *    - Changes existing object's prototype (slow!)
 * 
 * 9. CONSTRUCTOR PROTOTYPE
 *    - function Constructor() {}
 *    - Constructor.prototype
 *    - Shared among all instances
 *    - const obj = new Constructor()
 *    - obj → Constructor.prototype → Object.prototype
 * 
 * 10. PROTOTYPE VS __PROTO__
 *     - Constructor.prototype: object that becomes prototype
 *     - obj.__proto__: accessor for [[Prototype]]
 *     - Different concepts!
 *     - Use Object.getPrototypeOf() instead of __proto__
 * 
 * 11. CHECKING PROTOTYPE
 *     - Object.getPrototypeOf(obj) === proto
 *     - proto.isPrototypeOf(obj)
 *     - obj instanceof Constructor
 * 
 * 12. BREAKING THE CHAIN
 *     - const obj = Object.create(null)
 *     - No prototype
 *     - "Dictionary" object
 *     - No inherited methods
 * 
 * 13. PERFORMANCE
 *     - Lookup follows chain (slightly slower)
 *     - Own properties faster
 *     - Usually negligible
 *     - Modern engines optimize
 * 
 * 14. COMMON PATTERNS
 *     - Inheritance via prototype
 *     - Shared methods on prototype
 *     - Instance data on object
 */

// Every object has an internal [[Prototype]] linking to another object.
// Prototype chain: object → prototype → Object.prototype → null
// Use Object.getPrototypeOf(obj) to inspect the chain.
