/**
 * Class Inheritance
 * 
 * WHAT TO LEARN:
 * 
 * 1. EXTENDS KEYWORD
 *    - class Child extends Parent { }
 *    - Inherits all parent methods and properties
 *    - Creates prototype chain
 *    - Child prototype links to Parent prototype
 * 
 * 2. SUPER IN CONSTRUCTOR
 *    - super(parentArgs)
 *    - Calls parent constructor
 *    - MUST call before using 'this'
 *    - Required if child has constructor
 * 
 * 3. CALLING SUPER
 *    - class Student extends Person {
 *        constructor(name, grade) {
 *          super(name); // call parent constructor
 *          this.grade = grade;
 *        }
 *      }
 * 
 * 4. SUPER FOR METHODS
 *    - super.methodName()
 *    - Calls parent method
 *    - Can override and extend
 *    - Access parent implementation
 * 
 * 5. OVERRIDING METHODS
 *    - Define method with same name
 *    - Replaces parent method
 *    - Can call super.method() inside
 *    - Polymorphism
 * 
 * 6. INHERITING FIELDS
 *    - Child inherits parent fields
 *    - Can add new fields
 *    - Can override (shadow) fields
 * 
 * 7. INSTANCEOF
 *    - child instanceof Child // true
 *    - child instanceof Parent // true
 *    - Checks prototype chain
 *    - Useful for type checking
 * 
 * 8. PROTOTYPE CHAIN
 *    - child → Child.prototype → Parent.prototype → Object.prototype → null
 *    - Method lookup follows chain
 *    - First match wins
 * 
 * 9. STATIC METHOD INHERITANCE
 *    - Static methods also inherited
 *    - Child.staticMethod()
 *    - Less common use case
 * 
 * 10. MULTIPLE INHERITANCE
 *     - JavaScript doesn't support directly
 *     - Can extend only one class
 *     - Use mixins for multiple behaviors
 * 
 * 11. MIXINS
 *     - const Mixin = Base => class extends Base { }
 *     - class MyClass extends Mixin(BaseClass) { }
 *     - Composition over inheritance
 * 
 * 12. ABSTRACT CLASSES (PATTERN)
 *     - Not built-in
 *     - Throw in methods meant to be overridden
 *     - if (new.target === AbstractClass) throw Error()
 * 
 * 13. WHEN TO USE INHERITANCE
 *     - Clear "is-a" relationship
 *     - Shared behavior
 *     - Logical hierarchy
 * 
 * 14. WHEN TO AVOID
 *     - Prefer composition
 *     - Deep hierarchies
 *     - No clear relationship
 *     - Flexibility needed
 */

// Class inheritance: class Child extends Parent { }
// Use `super` to call parent constructor or methods
// Example: class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }
