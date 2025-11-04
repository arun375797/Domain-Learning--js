/**
 * Implicit Type Coercion
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS IMPLICIT COERCION
 *    - Automatic type conversion by JavaScript
 *    - Happens without explicit conversion functions
 *    - Can lead to unexpected results
 *    - Understanding it prevents bugs
 * 
 * 2. STRING COERCION WITH +
 *    - String + anything = String
 *    - 'hello' + 5 returns 'hello5'
 *    - 5 + 'hello' returns '5hello'
 *    - '3' + 2 returns '32' (not 5!)
 *    - '' + value converts value to string
 * 
 * 3. NUMERIC COERCION WITH OTHER OPERATORS
 *    - -, *, /, % convert strings to numbers
 *    - '5' - 2 returns 3
 *    - '10' * '2' returns 20
 *    - '10' / '2' returns 5
 *    - '10' % '3' returns 1
 * 
 * 4. BOOLEAN COERCION IN CONDITIONS
 *    - if, while, for convert to boolean
 *    - Falsy: false, 0, -0, 0n, '', null, undefined, NaN
 *    - All other values are truthy
 *    - if ([]) executes (empty array is truthy!)
 *    - if ('0') executes (non-empty string is truthy!)
 * 
 * 5. LOOSE EQUALITY (==) COERCION
 *    - Performs type coercion before comparing
 *    - 0 == false returns true
 *    - '0' == false returns true
 *    - null == undefined returns true
 *    - '' == false returns true
 *    - [] == false returns true
 *    - Avoid == unless you know what you're doing
 * 
 * 6. OBJECT TO PRIMITIVE COERCION
 *    - Objects converted via valueOf() or toString()
 *    - {} + [] returns "[object Object]"
 *    - [] + {} returns "[object Object]"
 *    - [1,2] + [3,4] returns "1,23,4"
 *    - Very confusing, avoid relying on this
 * 
 * 7. NULL AND UNDEFINED COERCION
 *    - null converts to 0 in numeric context
 *    - undefined converts to NaN in numeric context
 *    - null == undefined (true)
 *    - null === undefined (false)
 *    - null + 5 returns 5
 *    - undefined + 5 returns NaN
 * 
 * 8. TRUTHY VS FALSY VALUES
 *    - Falsy (8 values): false, 0, -0, 0n, '', null, undefined, NaN
 *    - Truthy: everything else
 *    - '0' is truthy (non-empty string)
 *    - [] is truthy (empty array)
 *    - {} is truthy (empty object)
 *    - 'false' is truthy (string)
 * 
 * 9. COMMON GOTCHAS
 *    - [] == ![] returns true (wat!)
 *    - {} + [] returns 0 or "[object Object]" (context dependent)
 *    - '2' + '2' - '2' returns 20 (not 2!)
 *    - null >= 0 is true, but null == 0 is false
 *    - NaN is not equal to anything, including itself
 * 
 * 10. HOW TO AVOID PROBLEMS
 *     - Use === instead of ==
 *     - Be explicit with type conversions
 *     - Use Number(), String(), Boolean()
 *     - Avoid mixing types in operations
 *     - Use typeof to check types first
 *     - Enable strict mode ('use strict')
 */

// Practice: build a truthy/falsy table and log results for edge cases (`"", 0, [], {}`)
