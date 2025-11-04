/**
 * Math Operations and Number Helpers
 * 
 * WHAT TO LEARN:
 * 
 * 1. NUMBER.ISNAN()
 *    - Checks if value is NaN
 *    - Does NOT coerce values
 *    - Number.isNaN(NaN) returns true
 *    - Number.isNaN('hello') returns false
 *    - Better than global isNaN()
 * 
 * 2. GLOBAL ISNAN() (AVOID)
 *    - Coerces value to number first
 *    - isNaN('hello') returns true (coerces to NaN)
 *    - isNaN(123) returns false
 *    - Can give unexpected results
 *    - Use Number.isNaN() instead
 * 
 * 3. NUMBER.ISFINITE()
 *    - Checks if value is finite number
 *    - Returns false for Infinity, -Infinity, NaN
 *    - Does NOT coerce values
 *    - Number.isFinite(100) returns true
 *    - Number.isFinite('100') returns false
 * 
 * 4. NUMBER.ISINTEGER()
 *    - Checks if value is integer
 *    - Number.isInteger(5) returns true
 *    - Number.isInteger(5.5) returns false
 *    - Number.isInteger('5') returns false
 * 
 * 5. NUMBER.ISSAFEINTEGER()
 *    - Checks if integer is "safe"
 *    - Safe: between -(2^53-1) and (2^53-1)
 *    - Beyond this, precision is lost
 *    - Use BigInt for larger numbers
 * 
 * 6. PARSEINT / PARSEFLOAT
 *    - parseInt(string, radix) - parse to integer
 *    - parseFloat(string) - parse to float
 *    - parseInt('123px', 10) returns 123
 *    - parseFloat('3.14') returns 3.14
 *    - See parsing.js for details
 * 
 * 7. MATH.ROUND()
 *    - Rounds to nearest integer
 *    - Math.round(4.5) returns 5
 *    - Math.round(4.4) returns 4
 *    - Rounds .5 up (away from zero)
 * 
 * 8. MATH.FLOOR()
 *    - Rounds down to integer
 *    - Math.floor(4.9) returns 4
 *    - Math.floor(-4.1) returns -5
 *    - Always rounds toward negative infinity
 * 
 * 9. MATH.CEIL()
 *    - Rounds up to integer
 *    - Math.ceil(4.1) returns 5
 *    - Math.ceil(-4.9) returns -4
 *    - Always rounds toward positive infinity
 * 
 * 10. MATH.TRUNC()
 *     - Removes decimal part
 *     - Math.trunc(4.9) returns 4
 *     - Math.trunc(-4.9) returns -4
 *     - Rounds toward zero
 * 
 * 11. MATH.RANDOM()
 *     - Returns random number 0 (inclusive) to 1 (exclusive)
 *     - Math.random() returns 0.xxxxx
 *     - Cryptographically weak
 *     - Use crypto.getRandomValues() for security
 * 
 * 12. RANDOM INTEGER RANGE
 *     - Math.floor(Math.random() * (max - min + 1)) + min
 *     - Random integer between min and max (inclusive)
 *     - Common pattern
 * 
 * 13. MATH.MAX() / MATH.MIN()
 *     - Returns largest/smallest of numbers
 *     - Math.max(1, 5, 3) returns 5
 *     - Math.min(1, 5, 3) returns 1
 *     - Use with spread: Math.max(...array)
 * 
 * 14. MATH.ABS()
 *     - Returns absolute value
 *     - Math.abs(-5) returns 5
 *     - Math.abs(5) returns 5
 * 
 * 15. MATH.POW()
 *     - Exponentiation
 *     - Math.pow(2, 3) returns 8 (2^3)
 *     - Use ** operator instead: 2 ** 3
 * 
 * 16. MATH.SQRT()
 *     - Square root
 *     - Math.sqrt(16) returns 4
 *     - Math.sqrt(-1) returns NaN
 * 
 * 17. MATH CONSTANTS
 *     - Math.PI - 3.141592...
 *     - Math.E - 2.718281... (Euler's number)
 *     - Math.LN2, Math.LN10, etc.
 */

// Explore Number helpers: Number.isNaN, Number.isFinite, parseInt, parseFloat
// Try Math methods: Math.round, Math.floor, Math.random, Math.max, Math.min
// Challenge: build a random integer generator between two bounds
