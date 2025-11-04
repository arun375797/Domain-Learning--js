/**
 * Arrow Functions vs Regular Functions
 * 
 * WHAT TO LEARN:
 * 
 * 1. THIS BINDING
 *    - Regular: this determined by call site
 *    - Arrow: this inherited from outer scope (lexical)
 *    - Major difference
 *    - Cannot change arrow's this
 * 
 * 2. REGULAR FUNCTION THIS
 *    - const obj = { 
 *        method: function() { console.log(this); }
 *      };
 *    - obj.method(); // this = obj
 *    - Dynamic this based on caller
 * 
 * 3. ARROW FUNCTION THIS
 *    - const obj = {
 *        method: () => { console.log(this); }
 *      };
 *    - obj.method(); // this = outer scope (not obj!)
 *    - Lexical this, fixed at definition
 * 
 * 4. ARGUMENTS OBJECT
 *    - Regular: has arguments object
 *    - Arrow: no arguments object
 *    - Arrow: use rest parameters instead
 *    - function f() { console.log(arguments); } // works
 *    - const f = () => console.log(arguments); // error
 * 
 * 5. CONSTRUCTOR USAGE
 *    - Regular: can be constructor (with new)
 *    - Arrow: cannot be constructor
 *    - function User() {} // OK with new
 *    - const User = () => {}; new User(); // Error
 * 
 * 6. PROTOTYPE PROPERTY
 *    - Regular: has prototype property
 *    - Arrow: no prototype property
 *    - Regular needed for prototypal inheritance
 * 
 * 7. YIELD KEYWORD
 *    - Regular: can be generator (function*)
 *    - Arrow: cannot be generator
 *    - Use regular for generator functions
 * 
 * 8. METHOD DEFINITIONS
 *    - Regular: good for object methods
 *    - Arrow: usually wrong for methods
 *    - const obj = {
 *        method() { } // regular, this = obj
 *        arrow: () => { } // arrow, this = outer
 *      }
 * 
 * 9. CALLBACKS
 *    - Arrow: great for callbacks
 *    - Preserves outer this
 *    - arr.map(x => this.process(x)) // this from outer
 *    - No need for bind or self = this
 * 
 * 10. EVENT HANDLERS
 *     - Regular: this = element
 *     - Arrow: this = outer scope
 *     - button.addEventListener('click', function() { this === button });
 *     - button.addEventListener('click', () => { this !== button });
 * 
 * 11. CLASS METHODS
 *     - Regular methods: this = instance
 *     - Arrow as class field: this = instance (lexical)
 *     - class Counter {
 *         method() { } // regular
 *         field = () => { } // arrow
 *       }
 * 
 * 12. WHEN TO USE REGULAR
 *     - Object methods
 *     - Constructors
 *     - Generators
 *     - Need dynamic this
 *     - Need arguments object
 * 
 * 13. WHEN TO USE ARROW
 *     - Callbacks
 *     - Array methods
 *     - Short functions
 *     - Need lexical this
 *     - Functional programming
 * 
 * 14. SYNTAX DIFFERENCES
 *     - Regular: function name() { }
 *     - Arrow: const name = () => { }
 *     - Arrow: implicit return for single expression
 *     - Arrow: shorter syntax
 * 
 * 15. PERFORMANCE
 *     - Similar performance
 *     - Arrow slightly lighter (no this/arguments binding)
 *     - Difference negligible
 *     - Choose based on semantics, not performance
 */

// Arrow functions capture `this` from the surrounding scope.
// Regular functions have their own `this` context.
// Choose based on whether you need lexical `this` binding.
