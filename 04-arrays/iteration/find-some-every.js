/**
 * find(), findIndex(), some(), every()
 * 
 * WHAT TO LEARN:
 * 
 * 1. FIND() METHOD
 *    - Returns first element that passes test
 *    - arr.find(element => condition)
 *    - Returns undefined if none found
 *    - Stops at first match (short-circuits)
 * 
 * 2. FIND() BEHAVIOR
 *    - Tests elements in order
 *    - Returns element itself (not array)
 *    - Can return any type
 *    - Undefined if nothing matches
 * 
 * 3. FIND() EXAMPLE
 *    - const user = users.find(u => u.id === 5);
 *    - Find first user with id 5
 *    - Returns user object or undefined
 * 
 * 4. FINDINDEX() METHOD
 *    - Returns index of first match
 *    - arr.findIndex(element => condition)
 *    - Returns -1 if none found
 *    - Same as find() but returns index
 * 
 * 5. FINDINDEX() EXAMPLE
 *    - const index = arr.findIndex(x => x > 10);
 *    - Returns position of first element > 10
 *    - -1 if no element matches
 * 
 * 6. SOME() METHOD
 *    - Tests if ANY element passes test
 *    - arr.some(element => condition)
 *    - Returns boolean (true/false)
 *    - Short-circuits on first true
 * 
 * 7. SOME() BEHAVIOR
 *    - Returns true if at least one matches
 *    - Returns false if none match
 *    - Stops testing after first match
 *    - Like logical OR for arrays
 * 
 * 8. SOME() EXAMPLE
 *    - const hasAdult = users.some(u => u.age >= 18);
 *    - Check if any user is adult
 *    - Returns true/false
 * 
 * 9. EVERY() METHOD
 *    - Tests if ALL elements pass test
 *    - arr.every(element => condition)
 *    - Returns boolean (true/false)
 *    - Short-circuits on first false
 * 
 * 10. EVERY() BEHAVIOR
 *     - Returns true only if all match
 *     - Returns false if any doesn't match
 *     - Stops testing after first false
 *     - Like logical AND for arrays
 * 
 * 11. EVERY() EXAMPLE
 *     - const allAdults = users.every(u => u.age >= 18);
 *     - Check if all users are adults
 *     - Returns true/false
 * 
 * 12. SHORT-CIRCUITING
 *     - All four methods stop early when possible
 *     - find/findIndex: stop at first match
 *     - some: stop at first true
 *     - every: stop at first false
 *     - Performance benefit
 * 
 * 13. FIND VS FILTER
 *     - find: returns single element
 *     - filter: returns array of all matches
 *     - find: stops at first
 *     - filter: checks all elements
 * 
 * 14. SOME VS INCLUDES
 *     - some: custom condition
 *     - includes: exact value match
 *     - arr.some(x => x > 5) vs arr.includes(5)
 *     - some is more flexible
 * 
 * 15. COMMON PATTERNS
 *     - Validation: arr.every(isValid)
 *     - Existence check: arr.some(matches)
 *     - Find by ID: arr.find(item => item.id === id)
 *     - Find index: arr.findIndex(item => item.id === id)
 */

// find: first element that passes test (or undefined)
// findIndex: index of first element that passes test
// some: true if any element passes test
// every: true if all elements pass test
