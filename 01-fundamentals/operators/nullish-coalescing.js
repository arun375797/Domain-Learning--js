/**
 * Nullish Coalescing Operator (??)
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - leftValue ?? rightValue
 *    - Returns right side if left is null or undefined
 *    - Returns left side otherwise
 *    - ES2020 feature
 * 
 * 2. WHAT IS NULLISH
 *    - null
 *    - undefined
 *    - ONLY these two values
 *    - NOT falsy values like 0, '', false
 * 
 * 3. DIFFERENCE FROM || OPERATOR
 *    - || returns right for ANY falsy value
 *    - ?? returns right ONLY for null/undefined
 *    - 0 || 'default' = 'default'
 *    - 0 ?? 'default' = 0
 *    - '' || 'default' = 'default'
 *    - '' ?? 'default' = ''
 * 
 * 4. WHEN TO USE ??
 *    - Setting default values
 *    - When 0, '', false are valid values
 *    - Working with optional parameters
 *    - Handling null/undefined specifically
 *    - More precise than ||
 * 
 * 5. WHEN TO USE ||
 *    - When you want to filter all falsy values
 *    - Legacy code compatibility
 *    - When 0, '', false should trigger default
 * 
 * 6. CHAINING
 *    - Can chain multiple ?? operators
 *    - value1 ?? value2 ?? value3 ?? 'default'
 *    - Returns first non-nullish value
 *    - Evaluated left to right
 * 
 * 7. CANNOT MIX WITH && OR ||
 *    - value && value2 ?? value3 (SyntaxError)
 *    - Must use parentheses
 *    - (value && value2) ?? value3 (OK)
 *    - Safety feature to prevent confusion
 * 
 * 8. NULLISH COALESCING ASSIGNMENT (??=)
 *    - ES2021 feature
 *    - x ??= y
 *    - Assigns y to x only if x is nullish
 *    - Shorthand for: x = x ?? y
 *    - Short-circuits if x is not nullish
 * 
 * 9. COMMON USE CASES
 *    - Default function parameters
 *    - Configuration objects
 *    - API responses with optional fields
 *    - Form inputs (0 is valid)
 *    - Counters and numeric inputs
 * 
 * 10. BROWSER SUPPORT
 *     - Modern browsers (2020+)
 *     - Node.js 14+
 *     - May need polyfill for older environments
 *     - Babel can transpile it
 */

// Practice: compare ?? with || operator behavior
