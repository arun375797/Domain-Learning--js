/**
 * Math Object
 * 
 * WHAT TO LEARN:
 * 
 * 1. MATH OBJECT
 *    - Built-in object for math operations
 *    - Not a constructor (no new)
 *    - All methods static
 * 
 * 2. ROUNDING METHODS
 *    - Math.round(x) - nearest integer
 *    - Math.floor(x) - down to integer
 *    - Math.ceil(x) - up to integer
 *    - Math.trunc(x) - remove decimal part
 * 
 * 3. ABSOLUTE VALUE
 *    - Math.abs(x)
 *    - Always positive
 *    - Math.abs(-5) // 5
 * 
 * 4. MIN/MAX
 *    - Math.min(a, b, c, ...)
 *    - Math.max(a, b, c, ...)
 *    - Can use with spread: Math.max(...array)
 *    - Returns Infinity/-Infinity for empty
 * 
 * 5. RANDOM
 *    - Math.random()
 *    - 0 (inclusive) to 1 (exclusive)
 *    - Not cryptographically secure
 *    - Use crypto.getRandomValues() for security
 * 
 * 6. RANDOM INTEGER
 *    - Math.floor(Math.random() * (max - min + 1)) + min
 *    - Random between min and max (inclusive)
 *    - Common pattern
 * 
 * 7. POWER
 *    - Math.pow(base, exponent)
 *    - Math.pow(2, 3) // 8
 *    - Or use ** operator: 2 ** 3
 * 
 * 8. SQUARE ROOT
 *    - Math.sqrt(x)
 *    - Math.sqrt(16) // 4
 *    - Returns NaN for negative
 * 
 * 9. CUBE ROOT
 *    - Math.cbrt(x)
 *    - Math.cbrt(8) // 2
 * 
 * 10. EXPONENTIAL
 *     - Math.exp(x) - e^x
 *     - Math.log(x) - natural log
 *     - Math.log10(x) - base 10 log
 *     - Math.log2(x) - base 2 log
 * 
 * 11. TRIGONOMETRY
 *     - Math.sin(x), Math.cos(x), Math.tan(x)
 *     - Math.asin(x), Math.acos(x), Math.atan(x)
 *     - Math.atan2(y, x) - two-argument arctangent
 *     - Angles in radians
 * 
 * 12. DEGREES/RADIANS
 *     - Math.PI / 180 to convert degrees to radians
 *     - 180 / Math.PI to convert radians to degrees
 * 
 * 13. CONSTANTS
 *     - Math.PI - 3.14159...
 *     - Math.E - 2.71828... (Euler's number)
 *     - Math.LN2, Math.LN10
 *     - Math.SQRT2, Math.SQRT1_2
 * 
 * 14. SIGN
 *     - Math.sign(x)
 *     - Returns 1, -1, 0, -0, or NaN
 *     - Indicates sign of number
 * 
 * 15. HYPOT
 *     - Math.hypot(x, y, ...)
 *     - Square root of sum of squares
 *     - Math.hypot(3, 4) // 5
 *     - Useful for distance calculations
 * 
 * 16. CLAMP
 *     - Math.clamp(x, min, max) - not built-in
 *     - Can implement: Math.max(min, Math.min(max, x))
 *     - Restricts value to range
 */

// Math methods: Math.round, Math.floor, Math.ceil, Math.random, Math.max, Math.min
// Math constants: Math.PI, Math.E
// Challenge: build a random integer generator between two bounds.
