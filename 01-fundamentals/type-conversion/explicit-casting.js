/**
 * Explicit Type Conversion (Type Casting)
 * 
 * WHAT TO LEARN:
 * 
 * 1. NUMBER() CONVERSION
 *    - Converts any value to number
 *    - Returns NaN for non-convertible values
 *    - Number('123') returns 123
 *    - Number('abc') returns NaN
 *    - More strict than parseInt/parseFloat
 * 
 * 2. NUMBER() WITH SPECIAL VALUES
 *    - Number(true) returns 1
 *    - Number(false) returns 0
 *    - Number(null) returns 0
 *    - Number(undefined) returns NaN
 *    - Number('') returns 0
 *    - Number(' ') returns 0
 * 
 * 3. STRING() CONVERSION
 *    - Converts any value to string
 *    - String(123) returns '123'
 *    - String(true) returns 'true'
 *    - String(null) returns 'null'
 *    - String(undefined) returns 'undefined'
 *    - String([1,2,3]) returns '1,2,3'
 *    - String({}) returns '[object Object]'
 * 
 * 4. BOOLEAN() CONVERSION
 *    - Converts any value to boolean
 *    - Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
 *    - Everything else is truthy
 *    - Boolean(0) returns false
 *    - Boolean('0') returns true (non-empty string)
 *    - Boolean([]) returns true (empty array is truthy!)
 *    - Boolean({}) returns true (empty object is truthy!)
 * 
 * 5. PARSEINT()
 *    - Parses string to integer
 *    - parseInt(string, radix)
 *    - Stops at first non-digit character
 *    - parseInt('123.45') returns 123
 *    - parseInt('12px') returns 12
 *    - parseInt('px12') returns NaN
 *    - Always specify radix (base): parseInt('10', 10)
 * 
 * 6. PARSEFLOAT()
 *    - Parses string to floating point
 *    - parseFloat('123.45') returns 123.45
 *    - parseFloat('12.5px') returns 12.5
 *    - Only works with base 10
 *    - No radix parameter
 * 
 * 7. TOSTRING() METHOD
 *    - Most objects have toString()
 *    - (123).toString() returns '123'
 *    - (123).toString(2) returns '1111011' (binary)
 *    - true.toString() returns 'true'
 *    - Cannot call on null or undefined
 * 
 * 8. UNARY + OPERATOR
 *    - Quick way to convert to number
 *    - +'123' returns 123
 *    - +true returns 1
 *    - Same as Number() but shorter
 *    - Common in short code/golf
 * 
 * 9. DOUBLE NOT (!!) OPERATOR
 *    - Converts to boolean
 *    - !!value same as Boolean(value)
 *    - !!0 returns false
 *    - !!'text' returns true
 *    - Common shorthand
 * 
 * 10. COMMON PITFALLS
 *     - parseInt without radix: parseInt('08') might return 0 in old browsers
 *     - Number('') returns 0, not NaN
 *     - Boolean('false') returns true (non-empty string!)
 *     - Boolean([]) returns true (empty array is truthy)
 *     - parseFloat('12.34.56') returns 12.34 (stops at second dot)
 * 
 * 11. WHEN TO USE EACH
 *     - Number(): When you need exact numeric conversion
 *     - parseInt(): Extracting integers from strings
 *     - parseFloat(): Extracting decimals from strings
 *     - String(): Any value to string representation
 *     - Boolean(): Explicit truthiness check
 */

// Practice: convert between different types and handle edge cases
