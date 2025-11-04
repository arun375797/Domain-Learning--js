/**
 * Regular Expression Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE REGEX
 *    - Pattern matching for strings
 *    - Powerful text processing
 *    - Can be complex
 *    - Universal across languages
 * 
 * 2. CREATING REGEX
 *    - Literal: /pattern/flags
 *    - Constructor: new RegExp('pattern', 'flags')
 *    - Literal for static patterns
 *    - Constructor for dynamic patterns
 * 
 * 3. LITERAL CHARACTERS
 *    - /abc/ - matches 'abc'
 *    - Case-sensitive by default
 *    - Matches substring
 * 
 * 4. SPECIAL CHARACTERS
 *    - . - any character (except newline)
 *    - ^ - start of string
 *    - $ - end of string
 *    - * - 0 or more
 *    - + - 1 or more
 *    - ? - 0 or 1
 *    - | - OR
 *    - () - grouping
 *    - [] - character class
 *    - {} - quantifier
 *    - \ - escape
 * 
 * 5. ESCAPING
 *    - \. - literal dot
 *    - \* - literal asterisk
 *    - \\ - literal backslash
 *    - Escape special chars
 * 
 * 6. CHARACTER CLASSES
 *    - [abc] - a, b, or c
 *    - [a-z] - lowercase letters
 *    - [0-9] - digits
 *    - [^abc] - NOT a, b, or c
 * 
 * 7. SHORTHAND CLASSES
 *    - \d - digit [0-9]
 *    - \D - not digit
 *    - \w - word char [a-zA-Z0-9_]
 *    - \W - not word char
 *    - \s - whitespace
 *    - \S - not whitespace
 * 
 * 8. QUANTIFIERS
 *    - * - 0 or more
 *    - + - 1 or more
 *    - ? - 0 or 1 (optional)
 *    - {n} - exactly n
 *    - {n,} - n or more
 *    - {n,m} - between n and m
 * 
 * 9. ANCHORS
 *    - ^ - start of string/line
 *    - $ - end of string/line
 *    - \b - word boundary
 *    - \B - not word boundary
 * 
 * 10. FLAGS
 *     - g - global (all matches)
 *     - i - case-insensitive
 *     - m - multiline
 *     - s - dotAll (. matches newline)
 *     - u - Unicode
 *     - y - sticky
 * 
 * 11. GROUPING
 *     - (abc) - capturing group
 *     - (?:abc) - non-capturing group
 *     - Backreferences: \1, \2
 * 
 * 12. ALTERNATION
 *     - cat|dog - cat OR dog
 *     - (cat|dog)s - cats OR dogs
 * 
 * 13. LOOKAHEAD/LOOKBEHIND
 *     - (?=...) - positive lookahead
 *     - (?!...) - negative lookahead
 *     - (?<=...) - positive lookbehind
 *     - (?<!...) - negative lookbehind
 * 
 * 14. COMMON PATTERNS
 *     - Email: /^[\w.-]+@[\w.-]+\.\w+$/
 *     - URL: /^https?:\/\/.+/
 *     - Phone: /^\d{3}-\d{3}-\d{4}$/
 *     - Hex color: /#[0-9A-Fa-f]{6}/
 */

// Regular expressions help match patterns: const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Create with literals: /pattern/ or constructor: new RegExp("pattern")
// Test patterns with String.prototype.match, replace, test, or exec methods.
