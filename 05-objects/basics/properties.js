/**
 * Object Properties
 * 
 * WHAT TO LEARN:
 * 
 * 1. ADDING PROPERTIES
 *    - obj.newProp = value
 *    - obj['newProp'] = value
 *    - After object creation
 *    - Dynamic addition
 * 
 * 2. MODIFYING PROPERTIES
 *    - obj.prop = newValue
 *    - Overwrites existing
 *    - Same syntax as adding
 * 
 * 3. DELETING PROPERTIES
 *    - delete obj.prop
 *    - Returns true if successful
 *    - Property completely removed
 *    - Not just set to undefined
 * 
 * 4. PROPERTY SHORTHAND
 *    - const name = 'Ada';
 *    - const obj = { name }
 *    - ES6 shorthand
 *    - name: name → name
 * 
 * 5. COMPUTED PROPERTY NAMES
 *    - const key = 'name';
 *    - const obj = { [key]: 'Ada' }
 *    - Dynamic keys at creation
 *    - ES6 feature
 * 
 * 6. CHECKING EXISTENCE
 *    - 'prop' in obj - includes prototype
 *    - obj.hasOwnProperty('prop') - own only
 *    - obj.prop !== undefined - check value
 *    - Different meanings
 * 
 * 7. ENUMERATING PROPERTIES
 *    - Object.keys(obj) - own enumerable keys
 *    - Object.values(obj) - own enumerable values
 *    - Object.entries(obj) - [key, value] pairs
 *    - for...in - includes prototype
 * 
 * 8. PROPERTY ATTRIBUTES
 *    - writable: can change value
 *    - enumerable: shows in for...in
 *    - configurable: can delete/modify attributes
 *    - See property descriptors
 * 
 * 9. GETTERS AND SETTERS
 *    - get propName() { return value; }
 *    - set propName(value) { }
 *    - Computed properties
 *    - Access like regular properties
 * 
 * 10. PROPERTY ORDER
 *     - Integer keys: sorted numerically
 *     - String keys: insertion order
 *     - Symbol keys: insertion order
 *     - Guaranteed since ES2015
 * 
 * 11. INHERITED PROPERTIES
 *     - From prototype chain
 *     - Accessed same way
 *     - hasOwnProperty distinguishes
 * 
 * 12. NON-ENUMERABLE PROPERTIES
 *     - Don't show in for...in
 *     - Not in Object.keys()
 *     - Still accessible
 *     - Like toString on Object.prototype
 * 
 * 13. SYMBOL PROPERTIES
 *     - const sym = Symbol();
 *     - obj[sym] = value;
 *     - Not in Object.keys()
 *     - Use Object.getOwnPropertySymbols()
 * 
 * 14. PROPERTY NAMES
 *     - Always strings or symbols
 *     - Numbers converted to strings
 *     - obj[1] same as obj['1']
 */

// Properties: add, modify, delete with delete operator
// Computed property names: const key = "name"; const obj = { [key]: "value" };
// Property shorthand: const name = "Ada"; const obj = { name };
