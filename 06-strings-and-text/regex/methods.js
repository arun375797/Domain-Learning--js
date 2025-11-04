/**
 * Regex Methods
 * 
 * WHAT TO LEARN:
 * 
 * 1. TEST()
 *    - regex.test(str)
 *    - Returns boolean
 *    - Quick check if pattern matches
 *    - /\d+/.test('abc123') // true
 * 
 * 2. EXEC()
 *    - regex.exec(str)
 *    - Returns match array or null
 *    - With g flag, can call repeatedly
 *    - Gets capture groups
 * 
 * 3. MATCH()
 *    - str.match(regex)
 *    - Without g: returns first match + groups
 *    - With g: returns all matches
 *    - Returns null if no match
 * 
 * 4. MATCHALL()
 *    - str.matchAll(regex)
 *    - Returns iterator of all matches
 *    - Requires g flag
 *    - Gets all capture groups
 *    - ES2020
 * 
 * 5. SEARCH()
 *    - str.search(regex)
 *    - Returns index of first match
 *    - Returns -1 if no match
 *    - Like indexOf but with regex
 * 
 * 6. REPLACE()
 *    - str.replace(regex, replacement)
 *    - Without g: replaces first match
 *    - With g: replaces all matches
 *    - Can use callback
 * 
 * 7. REPLACEALL()
 *    - str.replaceAll(regex, replacement)
 *    - Replaces all matches
 *    - Regex must have g flag
 *    - ES2021
 * 
 * 8. SPLIT()
 *    - str.split(regex)
 *    - Splits string by pattern
 *    - Returns array
 *    - Can limit splits
 * 
 * 9. FLAGS
 *    - g - global (find all)
 *    - i - case-insensitive
 *    - m - multiline (^ $ match line boundaries)
 *    - s - dotAll (. matches newline)
 *    - u - Unicode
 *    - y - sticky
 * 
 * 10. REPLACEMENT PATTERNS
 *     - $& - whole match
 *     - $1, $2 - capture groups
 *     - $` - before match
 *     - $' - after match
 *     - $$ - literal $
 * 
 * 11. CALLBACK IN REPLACE
 *     - str.replace(regex, (match, ...groups, offset, string) => {})
 *     - Full control over replacement
 *     - Can transform matches
 * 
 * 12. NAMED CAPTURE GROUPS
 *     - /(?<year>\d{4})-(?<month>\d{2})/
 *     - match.groups.year
 *     - More readable
 * 
 * 13. LASTINDEX PROPERTY
 *     - regex.lastIndex
 *     - Position for next search
 *     - Used with g flag
 *     - Reset to 0 after no match
 * 
 * 14. COMMON PATTERNS
 *     - Test: /pattern/.test(str)
 *     - Extract: str.match(/pattern/)
 *     - Replace: str.replace(/pattern/g, replacement)
 *     - Split: str.split(/\s+/)
 */

// Flags: g (global), i (case-insensitive), m (multi-line), s (dotAll), u (unicode), y (sticky).
// Methods: test(), exec(), match(), matchAll(), search(), replace(), replaceAll(), split()
// Use RegExp.test() for boolean checks, match() for extracting matches
