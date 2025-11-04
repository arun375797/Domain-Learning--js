/**
 * Static and Private Class Members
 * 
 * WHAT TO LEARN:
 * 
 * 1. STATIC METHODS
 *    - static methodName() { }
 *    - Called on class itself
 *    - ClassName.method()
 *    - Not on instances
 * 
 * 2. STATIC METHOD BEHAVIOR
 *    - No access to instance 'this'
 *    - Can access other static members
 *    - Utility functions
 *    - Factory methods
 * 
 * 3. STATIC FIELDS
 *    - static fieldName = value
 *    - Shared across all instances
 *    - One copy for entire class
 *    - ES2022 feature
 * 
 * 4. STATIC USE CASES
 *    - Factory methods: static create() { }
 *    - Utility functions: static compare(a, b) { }
 *    - Constants: static MAX_SIZE = 100
 *    - Counters: static count = 0
 * 
 * 5. PRIVATE FIELDS
 *    - #fieldName
 *    - Truly private
 *    - Cannot access outside class
 *    - ES2022 feature
 * 
 * 6. PRIVATE FIELD SYNTAX
 *    - class Person {
 *        #age; // declare
 *        constructor(age) {
 *          this.#age = age; // use with #
 *        }
 *      }
 * 
 * 7. PRIVATE METHODS
 *    - #methodName() { }
 *    - Only accessible within class
 *    - True encapsulation
 * 
 * 8. PRIVATE GETTERS/SETTERS
 *    - get #prop() { }
 *    - set #prop(val) { }
 *    - Private accessor properties
 * 
 * 9. PRIVATE STATIC
 *    - static #privateStatic = value
 *    - static #privateMethod() { }
 *    - Private to class itself
 * 
 * 10. CHECKING PRIVATE FIELDS
 *     - #field in obj
 *     - Check if private field exists
 *     - ES2022 feature
 * 
 * 11. PRIVATE VS _CONVENTION
 *     - _field - convention, not enforced
 *     - #field - truly private, enforced
 *     - Prefer # for real privacy
 * 
 * 12. FRIEND CLASSES PATTERN
 *     - Pass private to related class
 *     - No built-in friend concept
 *     - Workarounds exist
 * 
 * 13. WHEN TO USE STATIC
 *     - Utility methods
 *     - Factory methods
 *     - Class-level constants
 *     - No instance data needed
 * 
 * 14. WHEN TO USE PRIVATE
 *     - Implementation details
 *     - Prevent external access
 *     - Encapsulation
 *     - Internal state
 * 
 * 15. BROWSER SUPPORT
 *     - Modern browsers (2022+)
 *     - May need transpilation
 *     - Polyfills don't work (syntax)
 */

// Static members: class MathUtils { static add(a, b) { return a + b; } }
// Private fields: class Person { #name; constructor(name) { this.#name = name; } }
// Private methods: #privateMethod() { }
