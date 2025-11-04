/**
 * Common Regex Patterns
 * 
 * WHAT TO LEARN:
 * 
 * 1. DIGITS
 *    - \d - single digit
 *    - \d+ - one or more digits
 *    - \d{3} - exactly 3 digits
 *    - [0-9] - alternate syntax
 * 
 * 2. WORD CHARACTERS
 *    - \w - alphanumeric + underscore
 *    - \w+ - one or more word chars
 *    - [a-zA-Z0-9_] - equivalent
 * 
 * 3. WHITESPACE
 *    - \s - any whitespace
 *    - \s+ - one or more whitespace
 *    - [ \t\n\r] - specific whitespace
 * 
 * 4. START/END ANCHORS
 *    - ^abc - starts with abc
 *    - abc$ - ends with abc
 *    - ^abc$ - exactly abc
 * 
 * 5. WORD BOUNDARIES
 *    - \bword\b - whole word
 *    - \bcat\b matches 'cat' not 'category'
 * 
 * 6. CHARACTER RANGES
 *    - [a-z] - lowercase letters
 *    - [A-Z] - uppercase letters
 *    - [a-zA-Z] - all letters
 *    - [0-9] - digits
 * 
 * 7. NEGATION
 *    - [^abc] - NOT a, b, or c
 *    - [^0-9] - NOT digit
 *    - \D, \W, \S - negated shorthands
 * 
 * 8. QUANTIFIERS
 *    - * - 0 or more (greedy)
 *    - + - 1 or more (greedy)
 *    - ? - 0 or 1 (optional)
 *    - {3} - exactly 3
 *    - {3,5} - 3 to 5
 *    - {3,} - 3 or more
 * 
 * 9. NON-GREEDY
 *    - *? - 0 or more (lazy)
 *    - +? - 1 or more (lazy)
 *    - ?? - 0 or 1 (lazy)
 *    - Matches minimum
 * 
 * 10. GROUPS
 *     - (abc) - capturing group
 *     - (?:abc) - non-capturing
 *     - (?<name>abc) - named group
 * 
 * 11. ALTERNATION
 *     - cat|dog - OR
 *     - (jpg|png|gif) - multiple options
 * 
 * 12. COMMON PATTERNS
 *     - Email: /^\S+@\S+\.\S+$/
 *     - URL: /^https?:\/\/.+/
 *     - Phone: /^\d{3}-\d{3}-\d{4}$/
 *     - Zip: /^\d{5}(-\d{4})?$/
 *     - Date: /^\d{4}-\d{2}-\d{2}$/
 *     - Time: /^\d{2}:\d{2}(:\d{2})?$/
 *     - Hex color: /#[0-9A-Fa-f]{6}/
 *     - IPv4: /^(\d{1,3}\.){3}\d{1,3}$/
 * 
 * 13. VALIDATION PATTERNS
 *     - Username: /^[a-zA-Z0-9_]{3,16}$/
 *     - Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
 *     - Credit card: /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/
 */

// Common patterns: \d (digits), \w (word), \s (whitespace), ^ (start), $ (end)
// Character classes: [a-z], [0-9], [^abc] (negation)
// Quantifiers: *, +, ?, {n}, {n,m}
