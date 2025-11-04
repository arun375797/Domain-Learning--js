/**
 * Object Methods
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE METHODS
 *    - Functions as object properties
 *    - obj.methodName()
 *    - Behavior attached to data
 *    - Core OOP concept
 * 
 * 2. METHOD LONGHAND
 *    - { greet: function() { } }
 *    - Traditional syntax
 *    - Still valid
 *    - More verbose
 * 
 * 3. METHOD SHORTHAND
 *    - { greet() { } }
 *    - ES6 syntax
 *    - Cleaner, preferred
 *    - Works same way
 * 
 * 4. ARROW FUNCTIONS AS METHODS
 *    - { greet: () => { } }
 *    - NO 'this' binding
 *    - Usually wrong for methods
 *    - Inherits outer this
 * 
 * 5. THIS IN METHODS
 *    - Regular function: this = object
 *    - Arrow function: this = outer scope
 *    - obj.method() - this is obj
 *    - const fn = obj.method; fn() - this is undefined/window
 * 
 * 6. LOSING THIS CONTEXT
 *    - const greet = user.greet;
 *    - greet(); // this is undefined
 *    - Common bug
 *    - Use bind or arrow
 * 
 * 7. BINDING THIS
 *    - const bound = user.greet.bind(user);
 *    - bound(); // this is user
 *    - Preserves context
 * 
 * 8. DYNAMIC METHODS
 *    - obj[methodName]()
 *    - Call method by string name
 *    - Useful for dispatch
 * 
 * 9. METHOD CHAINING
 *    - Methods return this
 *    - obj.method1().method2().method3()
 *    - Fluent interface
 *    - Popular pattern
 * 
 * 10. GETTERS
 *     - get propName() { return value; }
 *     - Access like property: obj.propName
 *     - No parentheses
 *     - Computed values
 * 
 * 11. SETTERS
 *     - set propName(value) { }
 *     - Assign like property: obj.propName = val
 *     - Can validate
 *     - Side effects
 * 
 * 12. ASYNC METHODS
 *     - async methodName() { }
 *     - Returns promise
 *     - Can use await inside
 * 
 * 13. GENERATOR METHODS
 *     - *methodName() { yield value; }
 *     - Can pause execution
 *     - Returns iterator
 * 
 * 14. STATIC METHODS (IN CLASSES)
 *     - static methodName() { }
 *     - Called on class, not instance
 *     - No access to instance this
 */

// Methods: functions as object properties
// Method shorthand: { greet() { ... } } instead of { greet: function() { ... } }
// Arrow functions as methods: be careful with `this` binding
