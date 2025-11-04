/**
 * Object Literals
 * 
 * WHAT TO LEARN:
 * 
 * 1. OBJECT LITERAL SYNTAX
 *    - const obj = { key: value };
 *    - Curly braces {}
 *    - Key-value pairs
 *    - Most common way to create objects
 * 
 * 2. PROPERTY TYPES
 *    - String keys: { name: 'Ada' }
 *    - Number keys: { 1: 'one' }
 *    - Computed keys: { [expr]: value }
 *    - Symbol keys: { [Symbol()]: value }
 * 
 * 3. VALUE TYPES
 *    - Primitives: { age: 30 }
 *    - Objects: { address: {} }
 *    - Arrays: { items: [] }
 *    - Functions: { greet: function() {} }
 * 
 * 4. PROPERTY SHORTHAND
 *    - const name = 'Ada';
 *    - const obj = { name }; // same as { name: name }
 *    - ES6 feature
 *    - Very common pattern
 * 
 * 5. METHOD SHORTHAND
 *    - { greet() { } } instead of { greet: function() { } }
 *    - Cleaner syntax
 *    - ES6 feature
 *    - Preferred style
 * 
 * 6. DOT NOTATION
 *    - obj.propertyName
 *    - Simple and clean
 *    - Most common access
 *    - Valid identifiers only
 * 
 * 7. BRACKET NOTATION
 *    - obj['propertyName']
 *    - Dynamic property access
 *    - Works with any string
 *    - Can use variables
 * 
 * 8. ADDING PROPERTIES
 *    - obj.newProp = value;
 *    - obj['newProp'] = value;
 *    - Dynamic addition
 *    - Objects are mutable
 * 
 * 9. MODIFYING PROPERTIES
 *    - obj.prop = newValue;
 *    - Overwrites existing value
 *    - Same as adding
 * 
 * 10. DELETING PROPERTIES
 *     - delete obj.prop;
 *     - Removes property
 *     - Returns boolean
 *     - Leaves undefined hole
 * 
 * 11. CHECKING PROPERTIES
 *     - 'prop' in obj - checks existence (incl. prototype)
 *     - obj.hasOwnProperty('prop') - own property only
 *     - obj.prop !== undefined - checks value
 * 
 * 12. NESTED OBJECTS
 *     - { user: { name: 'Ada', address: { city: 'London' } } }
 *     - Access: obj.user.address.city
 *     - Or: obj['user']['address']['city']
 * 
 * 13. OPTIONAL CHAINING
 *     - obj?.prop?.nested
 *     - Safe access
 *     - Returns undefined if nullish
 *     - ES2020 feature
 * 
 * 14. SPREAD OPERATOR
 *     - const copy = { ...obj };
 *     - Shallow copy
 *     - Merge: { ...obj1, ...obj2 }
 *     - ES2018 feature
 * 
 * 15. TRAILING COMMAS
 *     - { a: 1, b: 2, } // trailing comma OK
 *     - Easier diffs
 *     - Modern style
 */

// Create objects with literals and add/remove properties dynamically.
// const user = { name: "Ada", age: 36 };
// Access via dot vs bracket notation; use optional chaining for safety.
