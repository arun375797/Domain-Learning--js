/**
 * Function Composition
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS COMPOSITION
 *    - Combining simple functions to build complex ones
 *    - Output of one becomes input of next
 *    - compose(f, g)(x) = f(g(x))
 *    - Mathematical function composition
 * 
 * 2. BASIC EXAMPLE
 *    - const compose = (f, g) => (x) => f(g(x));
 *    - const double = x => x * 2;
 *    - const increment = x => x + 1;
 *    - const doubleThenIncrement = compose(increment, double);
 *    - doubleThenIncrement(5) // 11
 * 
 * 3. READING ORDER
 *    - compose(f, g, h)(x) executes: f(g(h(x)))
 *    - Right to left
 *    - h first, then g, then f
 *    - Mathematical convention
 * 
 * 4. PIPE (ALTERNATIVE)
 *    - const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
 *    - Left to right execution
 *    - pipe(h, g, f)(x) = f(g(h(x)))
 *    - More intuitive for some
 * 
 * 5. WHY USE COMPOSITION
 *    - Build complex logic from simple pieces
 *    - Reusable components
 *    - Easier testing
 *    - Declarative style
 *    - No intermediate variables
 * 
 * 6. COMPOSING MULTIPLE FUNCTIONS
 *    - const compose = (...fns) => (x) => 
 *        fns.reduceRight((v, f) => f(v), x);
 *    - Works with any number of functions
 *    - reduceRight for right-to-left
 * 
 * 7. PURE FUNCTIONS
 *    - Composition works best with pure functions
 *    - No side effects
 *    - Same input = same output
 *    - Predictable and testable
 * 
 * 8. POINT-FREE STYLE
 *    - const process = compose(format, validate, parse);
 *    - No explicit parameters
 *    - Cleaner, more declarative
 *    - Common in functional programming
 * 
 * 9. DATA TRANSFORMATION PIPELINE
 *    - const transform = pipe(
 *        trim,
 *        toLowerCase,
 *        removeSpaces,
 *        capitalize
 *      );
 *    - Clear flow of transformations
 * 
 * 10. PRACTICAL EXAMPLES
 *     - String processing: pipe(trim, toLowerCase, capitalize)
 *     - Data validation: compose(validate, sanitize, parse)
 *     - Array operations: compose(sum, filter, map)
 * 
 * 11. ASYNC COMPOSITION
 *     - const composeAsync = (...fns) => (x) =>
 *         fns.reduceRight((v, f) => v.then(f), Promise.resolve(x));
 *     - Works with async functions
 *     - Returns promises
 * 
 * 12. DEBUGGING COMPOSED FUNCTIONS
 *     - Hard to debug nested calls
 *     - Add tap function: const tap = (f) => (x) => { f(x); return x; }
 *     - Insert logs: compose(f, tap(console.log), g)
 * 
 * 13. BENEFITS
 *     - Reusable pieces
 *     - Easy to test
 *     - Declarative
 *     - No intermediate variables
 *     - Clear data flow
 * 
 * 14. DRAWBACKS
 *     - Can be hard to read
 *     - Debugging challenges
 *     - Not common in mainstream JS
 *     - Requires pure functions
 * 
 * 15. WHEN TO USE
 *     - Data transformation pipelines
 *     - Functional programming
 *     - Reusable operations
 *     - Complex transformations
 * 
 * 16. LIBRARIES
 *     - Lodash: _.flow, _.flowRight
 *     - Ramda: R.compose, R.pipe
 *     - Built-in alternatives
 */

// Function composition: combining simple functions to build complex ones.
// Example: const compose = (f, g) => (x) => f(g(x));
// Enables building complex operations from simple, reusable functions.
