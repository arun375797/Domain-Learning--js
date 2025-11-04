/**
 * sort() and reverse()
 * 
 * WHAT TO LEARN:
 * 
 * 1. SORT() BASICS
 *    - Sorts array in place (mutates!)
 *    - Returns sorted array (same reference)
 *    - Default: converts to strings, sorts alphabetically
 *    - Often not what you want for numbers
 * 
 * 2. DEFAULT STRING SORT
 *    - [1, 2, 10].sort() // [1, 10, 2]
 *    - Converts to strings first
 *    - '10' comes before '2' alphabetically
 *    - Need comparator for numbers
 * 
 * 3. COMPARATOR FUNCTION
 *    - arr.sort((a, b) => comparison)
 *    - Return < 0: a before b
 *    - Return > 0: b before a
 *    - Return 0: keep original order
 * 
 * 4. NUMERIC SORT ASCENDING
 *    - arr.sort((a, b) => a - b)
 *    - Sorts numbers correctly
 *    - a - b negative when a < b
 *    - Most common numeric sort
 * 
 * 5. NUMERIC SORT DESCENDING
 *    - arr.sort((a, b) => b - a)
 *    - Reverse order
 *    - b - a negative when b < a
 * 
 * 6. STRING SORT
 *    - arr.sort() // default alphabetical
 *    - arr.sort((a, b) => a.localeCompare(b))
 *    - localeCompare for proper Unicode sort
 *    - Handles accents, special characters
 * 
 * 7. OBJECT SORTING
 *    - users.sort((a, b) => a.age - b.age)
 *    - Sort by property
 *    - users.sort((a, b) => a.name.localeCompare(b.name))
 *    - Sort by string property
 * 
 * 8. STABLE SORT
 *    - Maintains relative order of equal elements
 *    - Guaranteed in modern JavaScript
 *    - Not guaranteed in old browsers
 * 
 * 9. MUTATION WARNING
 *    - sort() modifies original array
 *    - To avoid: [...arr].sort()
 *    - Or: arr.slice().sort()
 *    - Creates copy first
 * 
 * 10. REVERSE() BASICS
 *     - Reverses array in place (mutates!)
 *     - Returns reversed array (same reference)
 *     - Simple reversal
 * 
 * 11. REVERSE() NON-MUTATING
 *     - [...arr].reverse()
 *     - Or: arr.slice().reverse()
 *     - Creates copy first
 *     - Original unchanged
 * 
 * 12. COMBINING SORT AND REVERSE
 *     - arr.sort((a, b) => a - b).reverse()
 *     - Or better: arr.sort((a, b) => b - a)
 *     - Both approaches work
 * 
 * 13. SORT PERFORMANCE
 *     - Usually O(n log n)
 *     - Depends on implementation
 *     - Fast for most use cases
 *     - Don't sort in loops
 * 
 * 14. CUSTOM COMPARATORS
 *     - Multi-property sort
 *     - arr.sort((a, b) => {
 *         if (a.age !== b.age) return a.age - b.age;
 *         return a.name.localeCompare(b.name);
 *       });
 *     - Primary then secondary sort
 * 
 * 15. COMMON PATTERNS
 *     - Sort numbers: arr.sort((a, b) => a - b)
 *     - Sort strings: arr.sort((a, b) => a.localeCompare(b))
 *     - Reverse: arr.reverse() or [...arr].reverse()
 *     - Descending: arr.sort((a, b) => b - a)
 */

// sort(): mutates array, use comparator function for custom sorting
// reverse(): mutates array
// For non-mutating: [...array].sort() or [...array].reverse()
