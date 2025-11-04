/**
 * Factory Functions
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE FACTORY FUNCTIONS
 *    - Functions that return objects
 *    - Create and return new object each call
 *    - Alternative to constructor functions/classes
 *    - No 'new' keyword needed
 * 
 * 2. BASIC EXAMPLE
 *    - function createUser(name, email) {
 *        return { name, email };
 *      }
 *    - const user = createUser('Ada', 'ada@example.com');
 * 
 * 3. WITH METHODS
 *    - function createCounter() {
 *        let count = 0;
 *        return {
 *          increment: () => ++count,
 *          decrement: () => --count,
 *          getCount: () => count
 *        };
 *      }
 * 
 * 4. PRIVATE STATE
 *    - Variables in factory are private
 *    - Only accessible through returned methods
 *    - True encapsulation
 *    - Unlike class properties (public or convention-based)
 * 
 * 5. VS CONSTRUCTOR FUNCTIONS
 *    - Factory: no 'new' needed
 *    - Factory: true privacy
 *    - Constructor: instanceof works
 *    - Constructor: prototype chain
 *    - Factory: simpler syntax
 * 
 * 6. VS CLASSES
 *    - Factory: functional approach
 *    - Class: OOP approach
 *    - Factory: composition over inheritance
 *    - Class: better tooling support
 *    - Factory: no 'this' issues
 * 
 * 7. COMPOSITION
 *    - Easily compose behaviors
 *    - function createLogger(obj) {
 *        return { ...obj, log: () => console.log(obj) };
 *      }
 *    - Mix and match features
 * 
 * 8. DEFAULTS AND VALIDATION
 *    - function createUser({ name = 'Guest', age = 0 } = {}) {
 *        if (age < 0) throw Error('Invalid age');
 *        return { name, age };
 *      }
 *    - Easy to add validation
 * 
 * 9. OBJECT COMPOSITION PATTERN
 *    - const canEat = (state) => ({
 *        eat: (food) => { state.energy += food; }
 *      });
 *    - const canSleep = (state) => ({
 *        sleep: (hours) => { state.energy += hours * 2; }
 *      });
 *    - const person = (name) => {
 *        let state = { name, energy: 0 };
 *        return { ...canEat(state), ...canSleep(state) };
 *      };
 * 
 * 10. BENEFITS
 *     - No 'new' keyword
 *     - True privacy
 *     - Flexible composition
 *     - No 'this' binding issues
 *     - Easier testing
 * 
 * 11. DRAWBACKS
 *     - Memory: new methods per instance
 *     - No prototype chain
 *     - instanceof doesn't work
 *     - Slightly slower (usually negligible)
 * 
 * 12. WHEN TO USE
 *     - Need true privacy
 *     - Prefer composition
 *     - Avoid 'this' complexity
 *     - Functional programming style
 *     - Simpler object creation
 * 
 * 13. WHEN NOT TO USE
 *     - Need instanceof
 *     - Large number of instances (memory)
 *     - Team prefers classes
 *     - Need prototypal inheritance
 * 
 * 14. MODERN PATTERNS
 *     - Use with destructuring
 *     - Combine with closures
 *     - Composition over inheritance
 *     - Functional programming
 */

// Factory functions: functions that return objects.
// Alternative to constructors, useful for creating similar objects with different configurations.
