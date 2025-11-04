/**
 * Property Descriptors
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE DESCRIPTORS
 *    - Objects that configure properties
 *    - Define behavior of properties
 *    - Advanced control
 *    - Four attributes
 * 
 * 2. DATA DESCRIPTOR ATTRIBUTES
 *    - value: property value
 *    - writable: can change value (true/false)
 *    - enumerable: shows in loops (true/false)
 *    - configurable: can delete/modify descriptor (true/false)
 * 
 * 3. ACCESSOR DESCRIPTOR ATTRIBUTES
 *    - get: getter function
 *    - set: setter function
 *    - enumerable: shows in loops
 *    - configurable: can delete/modify
 *    - No value or writable
 * 
 * 4. GETTING DESCRIPTOR
 *    - Object.getOwnPropertyDescriptor(obj, 'prop')
 *    - Returns descriptor object
 *    - undefined if property doesn't exist
 * 
 * 5. DEFINING WITH DESCRIPTOR
 *    - Object.defineProperty(obj, 'prop', descriptor)
 *    - Creates or modifies property
 *    - Full control over attributes
 * 
 * 6. WRITABLE ATTRIBUTE
 *    - writable: false prevents changes
 *    - obj.prop = newValue // silently fails or throws
 *    - Makes property read-only
 * 
 * 7. ENUMERABLE ATTRIBUTE
 *    - enumerable: false hides from for...in
 *    - Not in Object.keys()
 *    - Not in JSON.stringify()
 *    - Still accessible directly
 * 
 * 8. CONFIGURABLE ATTRIBUTE
 *    - configurable: false prevents:
 *      - delete obj.prop
 *      - Changing descriptor (except writable: true → false)
 *    - Makes property "locked"
 * 
 * 9. DEFAULT VALUES
 *    - Normal assignment: all true
 *    - defineProperty: all false by default!
 *    - Important difference
 * 
 * 10. ACCESSOR PROPERTIES
 *     - Object.defineProperty(obj, 'prop', {
 *         get() { return this._prop; },
 *         set(val) { this._prop = val; }
 *       });
 *     - Computed properties
 * 
 * 11. CANNOT MIX
 *     - Cannot have value/writable AND get/set
 *     - Either data or accessor
 *     - Not both
 * 
 * 12. MULTIPLE PROPERTIES
 *     - Object.defineProperties(obj, {
 *         prop1: descriptor1,
 *         prop2: descriptor2
 *       })
 *     - Define many at once
 * 
 * 13. WHEN TO USE
 *     - Creating libraries/frameworks
 *     - Fine-grained control
 *     - Read-only properties
 *     - Hidden properties
 *     - Computed properties
 * 
 * 14. COMMON PATTERNS
 *     - Read-only: {value: x, writable: false}
 *     - Hidden: {value: x, enumerable: false}
 *     - Constant: {value: x, writable: false, configurable: false}
 *     - Computed: {get: fn, set: fn}
 */

// Inspect property descriptors: Object.getOwnPropertyDescriptor(obj, "name");
// Define custom descriptors with Object.defineProperty(obj, "id", { value: 1, writable: false });
// Descriptors: value, writable, enumerable, configurable
