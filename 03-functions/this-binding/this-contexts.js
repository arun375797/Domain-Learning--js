/**
 * This Binding and Contexts
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS 'THIS'
 *    - Reference to execution context
 *    - Determined by HOW function is called
 *    - Not WHERE it's defined (except arrows)
 *    - Can be different each call
 * 
 * 2. GLOBAL CONTEXT
 *    - console.log(this); // window (browser) or global (Node)
 *    - In strict mode, undefined
 *    - Top-level this
 * 
 * 3. FUNCTION CONTEXT
 *    - function foo() { console.log(this); }
 *    - foo(); // window/global (or undefined in strict)
 *    - Plain function call
 *    - this is global or undefined
 * 
 * 4. METHOD CONTEXT
 *    - const obj = { name: 'Ada', greet() { console.log(this.name); } };
 *    - obj.greet(); // 'Ada'
 *    - this = object before dot
 *    - Left of the dot rule
 * 
 * 5. LOSING THIS
 *    - const greet = obj.greet;
 *    - greet(); // this is undefined/window
 *    - Function loses context when extracted
 *    - Common gotcha
 * 
 * 6. CONSTRUCTOR CONTEXT
 *    - function User(name) { this.name = name; }
 *    - const user = new User('Ada');
 *    - this = newly created object
 *    - new creates and returns object
 * 
 * 7. ARROW FUNCTION THIS
 *    - const obj = { name: 'Ada', greet: () => console.log(this.name) };
 *    - Arrow functions don't have this
 *    - Inherit this from outer scope (lexical)
 *    - Cannot rebind this
 * 
 * 8. EVENT HANDLER THIS
 *    - button.addEventListener('click', function() { 
 *        console.log(this); // button element
 *      });
 *    - this = element that triggered event
 *    - Use arrow to preserve outer this
 * 
 * 9. EXPLICIT BINDING
 *    - call(): func.call(thisArg, arg1, arg2)
 *    - apply(): func.apply(thisArg, [args])
 *    - bind(): const bound = func.bind(thisArg)
 *    - Manually set this
 * 
 * 10. IMPLICIT VS EXPLICIT
 *     - Implicit: obj.method() // this = obj
 *     - Explicit: method.call(obj) // this = obj
 *     - Explicit overrides implicit
 * 
 * 11. BINDING RULES PRIORITY
 *     - new binding (highest)
 *     - Explicit binding (call/apply/bind)
 *     - Implicit binding (obj.method)
 *     - Default binding (global/undefined) (lowest)
 * 
 * 12. CLASS METHODS
 *     - class Counter {
 *         count = 0;
 *         increment() { this.count++; }
 *       }
 *     - this = instance
 *     - Can lose context if extracted
 * 
 * 13. STRICT MODE
 *     - 'use strict';
 *     - this is undefined in plain function calls
 *     - Not window/global
 *     - Prevents accidental global mutation
 * 
 * 14. COMMON PROBLEMS
 *     - Losing context when passing methods
 *     - this in callbacks
 *     - this in nested functions
 *     - Arrow functions in methods
 * 
 * 15. SOLUTIONS
 *     - Arrow functions for lexical this
 *     - bind() to fix this
 *     - Store this in variable: const self = this;
 *     - Use method shorthand in classes
 */

// `this` depends on how a function is called, not where it is defined.
// Example: const user = { name: "Ada", greet() { console.log(this.name); } };
// `this` can be: window (global), object (method), undefined (strict mode), new instance (constructor).
