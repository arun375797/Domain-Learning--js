/**
 * Constructor Functions
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE CONSTRUCTORS
 *    - Functions used with 'new' keyword
 *    - Create and initialize objects
 *    - Pre-class way of OOP
 *    - Still widely used
 * 
 * 2. BASIC SYNTAX
 *    - function Person(name) {
 *        this.name = name;
 *      }
 *    - Convention: capitalize name
 *    - Use 'this' to set properties
 * 
 * 3. USING NEW
 *    - const person = new Person('Ada')
 *    - new creates empty object
 *    - Sets object's prototype
 *    - Binds 'this' to object
 *    - Returns object (implicitly)
 * 
 * 4. WHAT 'NEW' DOES
 *    - 1. Create new empty object
 *    - 2. Set [[Prototype]] to Constructor.prototype
 *    - 3. Call constructor with 'this' = new object
 *    - 4. Return object (or explicit return value)
 * 
 * 5. CONSTRUCTOR.PROTOTYPE
 *    - Object shared by all instances
 *    - Add methods here
 *    - Person.prototype.greet = function() {}
 *    - Shared, not duplicated
 * 
 * 6. ADDING METHODS
 *    - Person.prototype.greet = function() {
 *        return `Hi, ${this.name}`;
 *      }
 *    - All instances share method
 *    - Memory efficient
 * 
 * 7. INSTANCE PROPERTIES
 *    - Set in constructor: this.prop = value
 *    - Unique to each instance
 *    - Not shared
 *    - Direct on object
 * 
 * 8. WITHOUT 'NEW'
 *    - Person() without new
 *    - 'this' is global/undefined
 *    - Common bug
 *    - Use 'new.target' to check
 * 
 * 9. NEW.TARGET
 *    - if (!new.target) throw Error()
 *    - Checks if called with 'new'
 *    - ES6 feature
 *    - Guards against missing 'new'
 * 
 * 10. INSTANCEOF
 *     - person instanceof Person
 *     - Checks prototype chain
 *     - Returns boolean
 *     - Type checking
 * 
 * 11. CONSTRUCTOR PROPERTY
 *     - person.constructor === Person
 *     - Points back to constructor
 *     - Can be overridden (unreliable)
 * 
 * 12. RETURNING FROM CONSTRUCTOR
 *     - Implicitly returns 'this'
 *     - Can explicitly return object (overrides)
 *     - Returning primitive ignored
 * 
 * 13. VS CLASSES
 *     - Classes are syntactic sugar
 *     - class Person { } same as constructor
 *     - Classes cleaner syntax
 *     - Constructors more explicit
 * 
 * 14. WHEN TO USE
 *     - Legacy code
 *     - Understanding prototypes
 *     - When classes not available
 *     - Prefer classes in modern code
 */

// Constructor functions: function Person(name) { this.name = name; }
// Use with `new` keyword: const person = new Person("Ada");
// Constructor.prototype is shared among all instances
