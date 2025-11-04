/**
 * Type Checking
 * 
 * WHAT TO LEARN:
 * 
 * 1. TYPEOF OPERATOR
 *    - Returns string indicating type
 *    - Works for primitives mostly
 *    - typeof null returns 'object' (JavaScript bug)
 *    - typeof array returns 'object'
 *    - typeof function returns 'function'
 *    - Cannot distinguish between object types
 * 
 * 2. INSTANCEOF OPERATOR
 *    - Checks if object is instance of class/constructor
 *    - Tests prototype chain
 *    - Works with custom classes
 *    - array instanceof Array returns true
 *    - Does NOT work across different window/frame contexts
 *    - Fails for primitives
 * 
 * 3. ARRAY.ISARRAY()
 *    - Best way to check if value is array
 *    - Works across all contexts (frames/windows)
 *    - More reliable than instanceof
 *    - Returns boolean
 *    - Preferred over typeof and instanceof for arrays
 * 
 * 4. OBJECT.PROTOTYPE.TOSTRING.CALL()
 *    - Most reliable type checking method
 *    - Returns string like '[object Type]'
 *    - Works for all types
 *    - Can detect null and undefined
 *    - Distinguishes between object types
 *    - Used by many libraries for type checking
 * 
 * 5. CONSTRUCTOR PROPERTY
 *    - Check value.constructor === Type
 *    - Can be misleading (can be overridden)
 *    - Not reliable for type checking
 *    - Fails for null and undefined
 *    - Less safe than other methods
 * 
 * 6. NUMBER.ISNAN()
 *    - Checks if value is NaN
 *    - More reliable than global isNaN()
 *    - Doesn't coerce values
 *    - Returns true only for NaN
 * 
 * 7. NUMBER.ISFINITE()
 *    - Checks if value is finite number
 *    - Doesn't coerce values
 *    - Returns false for Infinity, -Infinity, NaN
 *    - Better than global isFinite()
 * 
 * 8. COMMON TYPE CHECKING PATTERNS
 *    - Null: value === null
 *    - Undefined: value === undefined
 *    - Array: Array.isArray(value)
 *    - Object: typeof value === 'object' && value !== null
 *    - Function: typeof value === 'function'
 *    - String: typeof value === 'string'
 *    - Number: typeof value === 'number' && !isNaN(value)
 */

// Practice: create type checking utilities for different scenarios
