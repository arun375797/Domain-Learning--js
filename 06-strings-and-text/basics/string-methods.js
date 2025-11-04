/**
 * String Methods
 * 
 * WHAT TO LEARN:
 * 
 * 1. INCLUDES()
 *    - str.includes(searchString)
 *    - Returns boolean
 *    - Case-sensitive
 *    - Can specify start position
 * 
 * 2. STARTSWITH() / ENDSWITH()
 *    - str.startsWith(searchString)
 *    - str.endsWith(searchString)
 *    - Returns boolean
 *    - Case-sensitive
 * 
 * 3. INDEXOF() / LASTINDEXOF()
 *    - str.indexOf(searchString)
 *    - Returns index or -1
 *    - lastIndexOf() searches from end
 * 
 * 4. SLICE()
 *    - str.slice(start, end)
 *    - Extracts substring
 *    - Negative indices count from end
 *    - End is exclusive
 * 
 * 5. SUBSTRING()
 *    - str.substring(start, end)
 *    - Similar to slice
 *    - Cannot use negative indices
 *    - Swaps args if start > end
 * 
 * 6. SUBSTR() (DEPRECATED)
 *    - str.substr(start, length)
 *    - Use slice() instead
 *    - Length parameter confusing
 * 
 * 7. TOUPPERCASE() / TOLOWERCASE()
 *    - str.toUpperCase()
 *    - str.toLowerCase()
 *    - Returns new string
 *    - Locale-insensitive
 * 
 * 8. TOLOCALEUPPERCASE() / TOLOCALEOWERCASE()
 *    - Locale-aware conversion
 *    - Handles special cases (Turkish İ)
 * 
 * 9. TRIM() / TRIMSTART() / TRIMEND()
 *    - Removes whitespace
 *    - trim() - both ends
 *    - trimStart() / trimLeft() - start
 *    - trimEnd() / trimRight() - end
 * 
 * 10. PADSTART() / PADEND()
 *     - str.padStart(length, fillString)
 *     - Pads to target length
 *     - Useful for formatting
 * 
 * 11. REPEAT()
 *     - str.repeat(count)
 *     - Repeats string n times
 *     - '='.repeat(10)
 * 
 * 12. REPLACE()
 *     - str.replace(search, replacement)
 *     - Replaces first match
 *     - Can use regex
 *     - Callback function supported
 * 
 * 13. REPLACEALL()
 *     - str.replaceAll(search, replacement)
 *     - Replaces all matches
 *     - ES2021
 *     - Or use regex with g flag
 * 
 * 14. SPLIT()
 *     - str.split(separator)
 *     - Returns array
 *     - Can limit: split(sep, limit)
 * 
 * 15. CHARAT() / CHARCODEAT()
 *     - charAt(index) - character at index
 *     - charCodeAt(index) - Unicode code
 * 
 * 16. MATCH() / MATCHALL()
 *     - str.match(regex)
 *     - Returns matches
 *     - matchAll() returns iterator
 * 
 * 17. SEARCH()
 *     - str.search(regex)
 *     - Returns index of first match
 *     - -1 if not found
 * 
 * 18. LOCALECOMPARE()
 *     - str1.localeCompare(str2)
 *     - Proper string comparison
 *     - Handles accents, case
 */

// Useful methods: includes, startsWith, endsWith, indexOf, slice, substring, replace, replaceAll.
// Build utilities: capitalize words, convert kebab-case to camelCase.
// Compare regex vs simple string method approaches.
