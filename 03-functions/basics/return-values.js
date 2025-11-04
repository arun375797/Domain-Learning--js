/**
 * Return Values
 * 
 * WHAT TO LEARN:
 * 
 * 1. RETURN STATEMENT
 *    - Exits function and returns value
 *    - return expression;
 *    - Everything after return is ignored
 *    - Can return any type
 * 
 * 2. IMPLICIT UNDEFINED
 *    - Functions without return return undefined
 *    - function noReturn() { doSomething(); }
 *    - noReturn() === undefined
 *    - return; also returns undefined
 * 
 * 3. EARLY RETURNS
 *    - Return early for edge cases
 *    - if (!valid) return;
 *    - Reduces nesting
 *    - Guard clause pattern
 * 
 * 4. MULTIPLE RETURNS
 *    - Can have many return statements
 *    - Only one executes
 *    - if (x > 0) return 'positive';
 *      return 'not positive';
 *    - Common pattern
 * 
 * 5. RETURNING PRIMITIVES
 *    - Numbers: return 42;
 *    - Strings: return 'hello';
 *    - Booleans: return true;
 *    - null/undefined: return null;
 * 
 * 6. RETURNING OBJECTS
 *    - return { name: 'John', age: 30 };
 *    - Returns reference to object
 *    - Can modify returned object
 *    - Object created each call
 * 
 * 7. RETURNING ARRAYS
 *    - return [1, 2, 3];
 *    - Common for multiple values
 *    - Can destructure: const [a, b] = func();
 * 
 * 8. RETURNING FUNCTIONS
 *    - Functions can return functions
 *    - return () => { ... };
 *    - Higher-order functions
 *    - Closures
 * 
 * 9. IMPLICIT RETURN IN ARROWS
 *    - const double = x => x * 2;
 *    - No return keyword needed
 *    - Only for single expressions
 *    - Add braces = need return
 * 
 * 10. RETURN IN ARROW FUNCTIONS
 *     - Block body needs explicit return
 *     - const func = (x) => { return x * 2; }
 *     - Forgetting return returns undefined
 *     - Common mistake
 * 
 * 11. ASYNC FUNCTION RETURNS
 *     - Always returns Promise
 *     - return value becomes Promise.resolve(value)
 *     - return Promise also works
 * 
 * 12. CONSTRUCTOR RETURNS
 *     - Constructors implicitly return this
 *     - Can explicitly return object
 *     - Returning primitive ignored
 *     - Unusual pattern
 * 
 * 13. VOID FUNCTIONS
 *     - Functions for side effects
 *     - console.log, array.push, etc.
 *     - Return value not used
 *     - Still return something (usually undefined)
 * 
 * 14. BEST PRACTICES
 *     - Return early for errors
 *     - Be consistent with return type
 *     - Avoid deep nesting with returns
 *     - Use explicit returns in arrow functions with {}
 */

// Functions can return values or undefined.
// Return early for guard clauses.
// Use explicit returns for clarity.
