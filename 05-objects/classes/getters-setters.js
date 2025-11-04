/**
 * Getters and Setters in Classes
 * 
 * WHAT TO LEARN:
 * 
 * 1. GETTER SYNTAX
 *    - get propName() { return value; }
 *    - Accessed like property: obj.propName
 *    - No parentheses
 *    - Returns computed value
 * 
 * 2. SETTER SYNTAX
 *    - set propName(value) { ... }
 *    - Assigned like property: obj.propName = val
 *    - Takes one parameter
 *    - Can validate or transform
 * 
 * 3. COMPUTED PROPERTIES
 *    - get fullName() { return `${this.first} ${this.last}`; }
 *    - Derived from other properties
 *    - Always up-to-date
 *    - No need to store
 * 
 * 4. VALIDATION IN SETTERS
 *    - set age(value) {
 *        if (value < 0) throw Error('Invalid age');
 *        this._age = value;
 *      }
 *    - Validate before setting
 *    - Throw errors for invalid
 * 
 * 5. PRIVATE BACKING FIELD
 *    - Convention: _propName for internal
 *    - Or #propName for true private
 *    - get propName() { return this._propName; }
 *    - set propName(val) { this._propName = val; }
 * 
 * 6. READ-ONLY PROPERTIES
 *    - Define getter only, no setter
 *    - Cannot assign value
 *    - get id() { return this._id; }
 *    - Attempting to set silently fails or throws
 * 
 * 7. WRITE-ONLY PROPERTIES
 *    - Define setter only, no getter
 *    - Rare use case
 *    - set password(val) { this.#hash = hash(val); }
 * 
 * 8. SIDE EFFECTS
 *    - Setters can trigger updates
 *    - set value(val) {
 *        this._value = val;
 *        this.notifyObservers();
 *      }
 *    - Observer pattern
 * 
 * 9. LAZY INITIALIZATION
 *    - get expensiveData() {
 *        if (!this._cache) {
 *          this._cache = computeExpensive();
 *        }
 *        return this._cache;
 *      }
 *    - Compute on first access
 * 
 * 10. TRANSFORMATION
 *     - set name(val) {
 *         this._name = val.trim().toLowerCase();
 *       }
 *     - Normalize input
 * 
 * 11. WHEN TO USE
 *     - Computed properties
 *     - Validation
 *     - Side effects on change
 *     - Lazy loading
 *     - Backward compatibility
 * 
 * 12. WHEN NOT TO USE
 *     - Simple data storage
 *     - Performance critical (slight overhead)
 *     - When direct access clearer
 * 
 * 13. GETTER/SETTER VS METHODS
 *     - Getters: look like properties
 *     - Methods: explicit function call
 *     - Getters for derived data
 *     - Methods for actions
 */

// Getters and setters: class Person { get name() { return this._name; } set name(value) { this._name = value; } }
// Useful for computed properties and validation
