/**
 * Number Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. NUMBER TYPE
 *    - Single type for all numbers
 *    - No separate integer/float types
 *    - IEEE 754 double precision
 *    - 64-bit floating point
 * 
 * 2. INTEGER LITERALS
 *    - 42, -42, 0
 *    - Decimal: 123
 *    - Binary: 0b1010 (ES6)
 *    - Octal: 0o755 (ES6)
 *    - Hex: 0xFF (ES6)
 * 
 * 3. FLOATING POINT LITERALS
 *    - 3.14, -0.5, .5
 *    - Scientific: 1e3, 1.5e-2
 *    - 1e3 = 1000
 * 
 * 4. SPECIAL VALUES
 *    - Infinity: positive infinity
 *    - -Infinity: negative infinity
 *    - NaN: Not a Number
 *    - All are typeof 'number'!
 * 
 * 5. NUMBER.MAX_SAFE_INTEGER
 *    - 2^53 - 1 (9,007,199,254,740,991)
 *    - Beyond this, precision lost
 *    - Use BigInt for larger
 * 
 * 6. NUMBER.MIN_SAFE_INTEGER
 *    - -(2^53 - 1)
 *    - Same limit, negative
 * 
 * 7. NUMBER.MAX_VALUE
 *    - Largest representable number
 *    - ~1.79e+308
 *    - Beyond = Infinity
 * 
 * 8. NUMBER.MIN_VALUE
 *    - Smallest positive number
 *    - ~5e-324
 *    - Closest to zero
 * 
 * 9. NUMBER.EPSILON
 *    - Smallest difference between numbers
 *    - ~2.22e-16
 *    - Useful for floating point comparison
 * 
 * 10. NUMBER.ISNAN()
 *     - Checks if value is NaN
 *     - Number.isNaN(NaN) // true
 *     - Number.isNaN('abc') // false
 *     - Better than global isNaN()
 * 
 * 11. NUMBER.ISFINITE()
 *     - Checks if finite number
 *     - Number.isFinite(123) // true
 *     - Number.isFinite(Infinity) // false
 *     - Number.isFinite('123') // false
 * 
 * 12. NUMBER.ISINTEGER()
 *     - Checks if integer
 *     - Number.isInteger(5) // true
 *     - Number.isInteger(5.5) // false
 *     - Number.isInteger('5') // false
 * 
 * 13. NUMBER.ISSAFEINTEGER()
 *     - Checks if safe integer
 *     - Within safe range
 *     - Number.isSafeInteger(2**53) // false
 * 
 * 14. NUMBER.PARSEINT()
 *     - Number.parseInt(string, radix)
 *     - Same as global parseInt
 *     - ES6 addition
 * 
 * 15. NUMBER.PARSEFLOAT()
 *     - Number.parseFloat(string)
 *     - Same as global parseFloat
 *     - ES6 addition
 * 
 * 16. FLOATING POINT PRECISION
 *     - 0.1 + 0.2 !== 0.3
 *     - Binary representation issue
 *     - Use epsilon for comparison
 *     - Math.abs(a - b) < Number.EPSILON
 */

// Number type: integers and floating-point numbers
// Special values: Infinity, -Infinity, NaN
// Number methods: Number.isNaN(), Number.isFinite(), Number.parseInt(), Number.parseFloat()
