/**
 * Switch Statement
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - switch (expression) { case value: ... break; }
 *    - Compares expression with case values
 *    - Executes matching case
 *    - Uses strict equality (===)
 * 
 * 2. BREAK STATEMENT
 *    - Exits switch block
 *    - Without break, falls through to next case
 *    - Fall-through is usually a bug
 *    - Always use break unless intentional
 * 
 * 3. DEFAULT CASE
 *    - default: executed if no match
 *    - Like else in if-else
 *    - Optional but recommended
 *    - Can be anywhere, usually at end
 * 
 * 4. WHEN TO USE SWITCH
 *    - Comparing one value against many options
 *    - Enum-like values
 *    - Status codes
 *    - Better than many if-else if
 * 
 * 5. WHEN NOT TO USE SWITCH
 *    - Complex conditions (use if-else)
 *    - Range checks (if x > 0 && x < 10)
 *    - Multiple variables
 *    - Object/array comparison
 * 
 * 6. FALL-THROUGH
 *    - Omitting break makes code continue
 *    - case 'a': case 'b': return 'vowel';
 *    - Can be useful for multiple values
 *    - Document intentional fall-through
 * 
 * 7. STRICT EQUALITY
 *    - Uses === for comparison
 *    - case 5: matches number 5 only
 *    - case '5': matches string '5' only
 *    - No type coercion
 * 
 * 8. BLOCK SCOPE IN CASES
 *    - Cases don't create scope
 *    - let/const declarations need braces
 *    - case 1: { let x = 5; ... } break;
 *    - Without braces, can cause errors
 * 
 * 9. RETURN IN SWITCH
 *    - Can use return instead of break
 *    - In functions, exits immediately
 *    - No need for break after return
 *    - Cleaner in many cases
 * 
 * 10. SWITCH VS IF-ELSE
 *     - Switch for single variable, many values
 *     - If-else for complex conditions
 *     - Switch more readable for enums
 *     - If-else more flexible
 * 
 * 11. SWITCH VS OBJECT LOOKUP
 *     - Object lookup can replace switch
 *     - const actions = { add: doAdd, remove: doRemove }
 *     - actions[type]()
 *     - More flexible, dynamic
 * 
 * 12. COMMON PATTERNS
 *     - Status handling
 *     - Command dispatch
 *     - State machines
 *     - Action types (Redux)
 * 
 * 13. COMMON PITFALLS
 *     - Forgetting break (fall-through bug)
 *     - Comparing objects/arrays (always false)
 *     - Not handling default case
 *     - Variable declarations without braces
 */

// Use switch for comparing one value against multiple cases
// switch (status) {
//   case "pending":
//     break;
//   case "approved":
//     break;
//   default:
//     break;
// }
// Remember to add `break` or use fall-through intentionally
