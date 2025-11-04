/**
 * Parsing Strings to Numbers
 * 
 * WHAT TO LEARN:
 * 
 * 1. PARSEINT() BASICS
 *    - Converts string to integer
 *    - parseInt(string, radix)
 *    - Radix: base of number system (2-36)
 *    - Returns integer or NaN
 * 
 * 2. PARSEINT() BEHAVIOR
 *    - Parses from left to right
 *    - Stops at first non-digit character
 *    - parseInt('123') returns 123
 *    - parseInt('123.45') returns 123
 *    - parseInt('12px') returns 12
 *    - parseInt('px12') returns NaN
 *    - Ignores leading whitespace
 * 
 * 3. RADIX PARAMETER
 *    - Second parameter specifies number base
 *    - parseInt('10', 10) = 10 (decimal)
 *    - parseInt('10', 2) = 2 (binary)
 *    - parseInt('10', 16) = 16 (hexadecimal)
 *    - parseInt('FF', 16) = 255
 *    - ALWAYS specify radix to avoid bugs
 * 
 * 4. PARSEINT() WITHOUT RADIX
 *    - If string starts with '0x', assumes hex
 *    - Otherwise assumes decimal in modern JS
 *    - Old browsers: '08' might be octal (returns 0)
 *    - Always specify radix for safety
 *    - parseInt('10') vs parseInt('10', 10)
 * 
 * 5. PARSEFLOAT() BASICS
 *    - Converts string to floating point number
 *    - Only takes one parameter
 *    - Works with decimal numbers
 *    - parseFloat('123.45') returns 123.45
 *    - parseFloat('12.5px') returns 12.5
 * 
 * 6. PARSEFLOAT() BEHAVIOR
 *    - Parses from left to right
 *    - Stops at first invalid character
 *    - Only recognizes decimal (base 10)
 *    - No radix parameter
 *    - parseFloat('3.14') returns 3.14
 *    - parseFloat('.5') returns 0.5
 *    - parseFloat('12.34.56') returns 12.34
 * 
 * 7. DIFFERENCE: PARSEINT VS NUMBER
 *    - parseInt('123px') returns 123
 *    - Number('123px') returns NaN
 *    - parseInt is more lenient
 *    - Number requires valid number string
 *    - parseInt stops at invalid char
 *    - Number checks entire string
 * 
 * 8. HANDLING NaN RESULTS
 *    - Both return NaN for invalid input
 *    - Check with Number.isNaN(result)
 *    - Don't use result === NaN (always false!)
 *    - isNaN() coerces, Number.isNaN() doesn't
 *    - Number.isNaN(NaN) returns true
 *    - Number.isNaN('abc') returns false
 * 
 * 9. COMMON USE CASES
 *    - Extracting numbers from mixed strings
 *    - User input validation
 *    - URL parameters
 *    - CSS value parsing ('12px' → 12)
 *    - Binary/hex string conversion
 * 
 * 10. COMMON PITFALLS
 *     - Forgetting radix in parseInt
 *     - Not checking for NaN result
 *     - Using isNaN instead of Number.isNaN
 *     - Expecting parseInt to validate input
 *     - parseFloat('12.34.56') returns 12.34 (might be unexpected)
 * 
 * 11. BEST PRACTICES
 *     - Always specify radix for parseInt
 *     - Check for NaN after parsing
 *     - Use Number() for strict validation
 *     - Use parseInt/parseFloat for lenient parsing
 *     - Validate input before parsing
 */

// Practice: parse strings to numbers with different bases and handle NaN cases
