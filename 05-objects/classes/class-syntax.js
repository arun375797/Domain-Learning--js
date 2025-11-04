/**
 * ES6 Class Syntax
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC CLASS SYNTAX
 *    - class ClassName { }
 *    - Syntactic sugar over prototypes
 *    - More familiar for OOP programmers
 *    - ES6 feature
 * 
 * 2. CONSTRUCTOR
 *    - constructor(params) { }
 *    - Called when creating instance
 *    - Initializes instance properties
 *    - One per class
 * 
 * 3. INSTANCE METHODS
 *    - methodName() { }
 *    - Added to prototype
 *    - Shared across instances
 *    - Access with this
 * 
 * 4. CREATING INSTANCES
 *    - const obj = new ClassName()
 *    - Must use 'new' keyword
 *    - Calls constructor
 *    - Returns instance
 * 
 * 5. INSTANCE PROPERTIES
 *    - this.propName = value (in constructor)
 *    - Or: propName = value (class field)
 *    - Unique to each instance
 *    - Not shared
 * 
 * 6. CLASS FIELDS (ES2022)
 *    - class Person {
 *        name = 'default'; // class field
 *      }
 *    - Declared outside constructor
 *    - Modern syntax
 * 
 * 7. METHODS VS FIELDS
 *    - Methods: on prototype (shared)
 *    - Fields: on instance (not shared)
 *    - Methods preferred for functions
 *    - Fields for data
 * 
 * 8. THIS IN METHODS
 *    - this refers to instance
 *    - Can lose context if method extracted
 *    - Use arrow functions or bind
 * 
 * 9. ARROW FUNCTION FIELDS
 *    - methodName = () => { }
 *    - Bound to instance
 *    - Won't lose this
 *    - Not on prototype (on each instance)
 * 
 * 10. GETTERS AND SETTERS
 *     - get propName() { }
 *     - set propName(value) { }
 *     - Access like properties
 *     - Computed values
 * 
 * 11. STATIC METHODS
 *     - static methodName() { }
 *     - Called on class, not instance
 *     - ClassName.method()
 *     - No access to instance this
 * 
 * 12. STATIC FIELDS
 *     - static fieldName = value
 *     - Shared across all instances
 *     - Access via class name
 * 
 * 13. PRIVATE FIELDS
 *     - #fieldName
 *     - Truly private
 *     - Cannot access outside class
 *     - ES2022 feature
 * 
 * 14. INHERITANCE
 *     - class Child extends Parent { }
 *     - Inherits methods and properties
 *     - Can override
 * 
 * 15. SUPER
 *     - super() - call parent constructor
 *     - super.method() - call parent method
 *     - Must call in constructor if extending
 * 
 * 16. CLASS EXPRESSIONS
 *     - const MyClass = class { }
 *     - Anonymous or named
 *     - Less common
 */

// ES6 classes wrap prototype logic with cleaner syntax.
// class Person { constructor(name) { this.name = name; } greet() { return `Hi ${this.name}`; } }
// Use `new` to create instances: const person = new Person("Ada");
