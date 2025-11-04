/**
 * Optional Chaining Operator (?.)
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - obj?.prop - safe property access
 *    - obj?.[expr] - safe computed property access
 *    - obj?.method() - safe method call
 *    - Returns undefined if nullish, otherwise continues
 * 
 * 2. WHAT IT PREVENTS
 *    - TypeError: Cannot read property 'x' of null
 *    - TypeError: Cannot read property 'x' of undefined
 *    - No need for manual null checks
 *    - Cleaner code without nested conditions
 * 
 * 3. HOW IT WORKS
 *    - Checks if left side is nullish (null or undefined)
 *    - If nullish, short-circuits and returns undefined
 *    - If not nullish, continues evaluation
 *    - Does NOT check for false, 0, '', etc.
 * 
 * 4. PROPERTY ACCESS
 *    - user?.address?.city
 *    - Safer than user.address.city
 *    - Returns undefined if any part is nullish
 *    - Can chain multiple levels
 * 
 * 5. METHOD CALLS
 *    - obj?.method()
 *    - Returns undefined if obj is nullish
 *    - Otherwise calls the method
 *    - Method must exist (not checked by ?.)
 * 
 * 6. COMPUTED PROPERTIES
 *    - obj?.[propName]
 *    - Dynamic property access
 *    - Safe when obj might be nullish
 *    - Combines with [] notation
 * 
 * 7. ARRAY ACCESS
 *    - arr?.[index]
 *    - Safe array element access
 *    - Returns undefined if arr is nullish
 *    - index can be expression
 * 
 * 8. SHORT-CIRCUITING
 *    - Stops evaluation at first nullish value
 *    - user?.address?.city?.toUpperCase()
 *    - If address is nullish, city.toUpperCase() never runs
 *    - Prevents errors down the chain
 * 
 * 9. CANNOT BE USED
 *    - On left side of assignment: obj?.prop = value (SyntaxError)
 *    - For template literals: `${obj?.prop}`  (works, but avoid)
 *    - To create properties
 * 
 * 10. COMBINING WITH ?? (NULLISH COALESCING)
 *     - user?.name ?? 'Anonymous'
 *     - Provides default value if nullish
 *     - Common pattern for safe access with fallback
 * 
 * 11. COMMON USE CASES
 *     - Nested object access
 *     - API response handling
 *     - Optional callback functions
 *     - Accessing deeply nested properties
 *     - Working with optional parameters
 * 
 * 12. BROWSER SUPPORT
 *     - Modern browsers (2020+)
 *     - Node.js 14+
 *     - May need Babel for older environments
 */

// Practice: use ?. to safely access nested object properties and methods
