/**
 * Prototypal Inheritance
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS PROTOTYPAL INHERITANCE
 *    - Objects inherit from other objects
 *    - Via prototype chain
 *    - Different from class-based inheritance
 *    - Core JavaScript mechanism
 * 
 * 2. OBJECT.CREATE()
 *    - const child = Object.create(parent)
 *    - Creates object with parent as prototype
 *    - Direct prototypal inheritance
 *    - No constructor involved
 * 
 * 3. CONSTRUCTOR INHERITANCE
 *    - function Child() {
 *        Parent.call(this); // inherit properties
 *      }
 *    - Child.prototype = Object.create(Parent.prototype)
 *    - Child.prototype.constructor = Child
 *    - Pre-class pattern
 * 
 * 4. INHERITING PROPERTIES
 *    - Call parent constructor in child
 *    - Parent.call(this, args)
 *    - Copies parent's properties
 *    - Instance properties
 * 
 * 5. INHERITING METHODS
 *    - Set child prototype to parent prototype
 *    - Child.prototype = Object.create(Parent.prototype)
 *    - Prototype chain established
 *    - Shared methods
 * 
 * 6. FIXING CONSTRUCTOR
 *    - Child.prototype.constructor = Child
 *    - After setting prototype
 *    - Points back to child
 *    - Good practice
 * 
 * 7. OVERRIDING METHODS
 *    - Define method on Child.prototype
 *    - Shadows parent method
 *    - Can call parent: Parent.prototype.method.call(this)
 * 
 * 8. SUPER PATTERN
 *    - const _super = Object.getPrototypeOf(this)
 *    - _super.method.call(this)
 *    - Simulates super keyword
 *    - Pre-class workaround
 * 
 * 9. MIXINS
 *    - Object.assign(Child.prototype, Mixin)
 *    - Copy properties from multiple sources
 *    - Simulate multiple inheritance
 *    - Composition pattern
 * 
 * 10. INSTANCEOF WITH INHERITANCE
 *     - child instanceof Child // true
 *     - child instanceof Parent // true
 *     - Checks entire prototype chain
 * 
 * 11. DELEGATION
 *    - Objects delegate to prototype
 *    - If property not found, check prototype
 *    - Behavior sharing
 *    - Core concept
 * 
 * 12. OLOO PATTERN
 *    - Objects Linked to Other Objects
 *    - No constructors
 *    - const child = Object.create(parent)
 *    - child.init = function() {}
 *    - Alternative to constructors/classes
 * 
 * 13. CLASS INHERITANCE VS PROTOTYPAL
 *     - Classes are sugar over prototypes
 *     - Same mechanism underneath
 *     - Classes easier syntax
 *     - Prototypes more flexible
 * 
 * 14. WHEN TO USE
 *     - Understanding JavaScript deeply
 *     - Working with legacy code
 *     - Need flexibility beyond classes
 *     - Prefer classes in new code
 */

// Prototypal inheritance: Child.prototype = Object.create(Parent.prototype)
// Or use Object.create() directly: const child = Object.create(parent)
// Modern approach: use class Child extends Parent
