/**
 * String Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. STRING LITERALS
 *    - Single quotes: 'text'
 *    - Double quotes: "text"
 *    - Template literals: `text`
 *    - All create strings
 * 
 * 2. IMMUTABILITY
 *    - Strings cannot be changed
 *    - str[0] = 'x' doesn't work
 *    - Methods return new strings
 *    - Original unchanged
 * 
 * 3. INDEXING
 *    - str[0] - first character
 *    - str[str.length - 1] - last character
 *    - str.charAt(0) - alternative
 *    - Out of bounds returns undefined
 * 
 * 4. LENGTH PROPERTY
 *    - str.length
 *    - Number of characters
 *    - Not a method!
 *    - Includes all characters
 * 
 * 5. ITERABILITY
 *    - Strings are iterable
 *    - for (const char of str) {}
 *    - [...str] creates array of chars
 *    - Spread operator works
 * 
 * 6. TEMPLATE LITERALS
 *    - `Hello ${name}`
 *    - Interpolation with ${}
 *    - Multi-line strings
 *    - Expression evaluation
 * 
 * 7. ESCAPE SEQUENCES
 *    - \n - newline
 *    - \t - tab
 *    - \\ - backslash
 *    - \' - single quote
 *    - \" - double quote
 * 
 * 8. UNICODE
 *    - Strings are UTF-16
 *    - Can contain any Unicode
 *    - \u0041 - Unicode escape
 *    - \u{1F600} - emoji
 * 
 * 9. STRING COMPARISON
 *    - === for equality
 *    - > < for order
 *    - Lexicographic (dictionary) order
 *    - Case-sensitive
 *    - Use localeCompare() for proper sorting
 * 
 * 10. CONCATENATION
 *     - + operator: str1 + str2
 *     - Template literals
 *     - concat() method
 *     - += for building strings
 * 
 * 11. TYPE COERCION
 *     - String(123) → '123'
 *     - '' + 123 → '123'
 *     - (123).toString() → '123'
 * 
 * 12. EMPTY STRING
 *     - '' or "" or ``
 *     - Falsy value
 *     - length === 0
 * 
 * 13. WHITESPACE
 *     - ' ', \t, \n, \r, etc.
 *     - Use trim() to remove
 *     - trimStart(), trimEnd()
 */

// Strings are iterable and immutable; indexing returns characters but cannot be reassigned.
// Use template literals for interpolation; compare locale-aware methods vs basic ones.
// Practice trimming, padding, and splitting strings for data cleaning tasks.
