/**
 * Object Destructuring
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - const { prop1, prop2 } = object;
 *    - Extracts properties by name
 *    - Assigns to variables
 *    - ES6 feature
 * 
 * 2. RENAMING
 *    - const { name: userName } = object;
 *    - Extract as different name
 *    - Original name on left
 *    - New name on right
 * 
 * 3. DEFAULT VALUES
 *    - const { missing = 'fallback' } = object;
 *    - Used if property undefined
 *    - Not for null or other falsy
 *    - Only undefined triggers default
 * 
 * 4. REST PROPERTIES
 *    - const { name, ...rest } = object;
 *    - Collects remaining properties
 *    - Creates new object
 *    - Must be last
 * 
 * 5. NESTED DESTRUCTURING
 *    - const { contact: { email } } = object;
 *    - Destructure nested objects
 *    - const { contact: { email, phone } } = object;
 * 
 * 6. COMBINED PATTERNS
 *    - const { name: userName = 'Guest', ...rest } = object;
 *    - Rename + default + rest
 *    - Very flexible
 * 
 * 7. FUNCTION PARAMETERS
 *    - function greet({ name, age }) { }
 *    - Destructure in parameters
 *    - Named parameters
 *    - More readable
 * 
 * 8. COMPUTED PROPERTIES
 *    - const key = 'name';
 *    - const { [key]: value } = object;
 *    - Dynamic property names
 */

const user = { name: "Ada", role: "Engineer", active: true };
const { name, role, ...rest } = user;
console.log(name, role, rest);

// Use defaults: const { missing = "fallback" } = user;
// Rename: const { name: userName } = user;
// Nested: const { contact: { email } } = user;

