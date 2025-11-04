/**
 * Array Destructuring
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - const [first, second] = array;
 *    - Extracts values by position
 *    - Assigns to variables
 *    - ES6 feature
 * 
 * 2. SKIPPING ELEMENTS
 *    - const [, , third] = array;
 *    - Leave empty slots
 *    - Skip unwanted elements
 *    - Access by position
 * 
 * 3. REST ELEMENTS
 *    - const [head, ...tail] = array;
 *    - Collects remaining elements
 *    - Must be last element
 *    - Creates new array
 * 
 * 4. DEFAULT VALUES
 *    - const [first = 'default'] = array;
 *    - Used if value is undefined
 *    - Not for null or other falsy
 *    - Only undefined triggers default
 * 
 * 5. SWAPPING VARIABLES
 *    - [a, b] = [b, a];
 *    - Elegant swap
 *    - No temp variable needed
 *    - Common pattern
 * 
 * 6. FUNCTION RETURN VALUES
 *    - const [x, y] = getCoords();
 *    - Destructure return value
 *    - Multiple return values
 * 
 * 7. NESTED DESTRUCTURING
 *    - const [[a, b], [c, d]] = [[1, 2], [3, 4]];
 *    - Destructure nested arrays
 *    - Can get complex
 * 
 * 8. WITH ITERABLES
 *    - Works with any iterable
 *    - Arrays, strings, Sets, etc.
 *    - const [a, b] = 'hi';
 * 
 * 9. PARTIAL DESTRUCTURING
 *    - const [first] = array;
 *    - Only extract what you need
 *    - Rest ignored
 */

// Array destructuring: const [first, second] = values;
// Rest elements: const [head, ...tail] = values;
// Default values: const [first = "default"] = array;
// Skip elements: const [, , third] = array;
