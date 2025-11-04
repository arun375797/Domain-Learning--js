/**
 * If-Else Statements
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC IF SYNTAX
 *    - if (condition) { code }
 *    - Executes block if condition is truthy
 *    - Braces optional for single statement
 *    - Always use braces for clarity
 * 
 * 2. IF-ELSE SYNTAX
 *    - if (condition) { ... } else { ... }
 *    - Executes first block if truthy
 *    - Executes else block if falsy
 *    - Only one block executes
 * 
 * 3. IF-ELSE IF-ELSE CHAIN
 *    - if (cond1) { ... } else if (cond2) { ... } else { ... }
 *    - Checks conditions in order
 *    - First truthy condition wins
 *    - Else is optional fallback
 *    - Only one block executes
 * 
 * 4. TRUTHY AND FALSY
 *    - Falsy: false, 0, -0, 0n, '', null, undefined, NaN
 *    - Everything else is truthy
 *    - if (value) checks truthiness
 *    - if (!value) checks falsiness
 * 
 * 5. COMPARISON IN CONDITIONS
 *    - Use ===, !==, <, >, <=, >=
 *    - if (x === 5)
 *    - if (age >= 18)
 *    - Avoid == (loose equality)
 * 
 * 6. LOGICAL OPERATORS IN CONDITIONS
 *    - && (AND): if (x > 0 && x < 10)
 *    - || (OR): if (x === 0 || x === 1)
 *    - ! (NOT): if (!isActive)
 *    - Combine with parentheses for clarity
 * 
 * 7. BRACES BEST PRACTICES
 *    - Always use braces, even for one line
 *    - Prevents bugs when adding code
 *    - More readable
 *    - Consistent style
 * 
 * 8. EARLY RETURN PATTERN
 *    - Return early for error cases
 *    - Reduces nesting
 *    - if (!valid) return;
 *    - Main logic at lower indent level
 *    - More readable
 * 
 * 9. GUARD CLAUSES
 *    - Check edge cases first
 *    - Return/exit early
 *    - if (!user) return;
 *    - if (!user.isActive) return;
 *    - Reduces nested if statements
 * 
 * 10. NESTED IF STATEMENTS
 *     - if inside if
 *     - Can get hard to read
 *     - Try to keep nesting shallow (< 3 levels)
 *     - Consider extracting to functions
 *     - Use early returns to reduce nesting
 * 
 * 11. WHEN TO USE ELSE
 *     - When you have two clear alternatives
 *     - Don't use else after return
 *     - if (x) return a; else return b; // Bad
 *     - if (x) return a; return b; // Good
 * 
 * 12. COMMON PATTERNS
 *     - Validation: if (!valid) return error;
 *     - State checks: if (isLoading) show spinner;
 *     - Authorization: if (!hasPermission) deny access;
 *     - Null checks: if (!data) return;
 */

// Basic structure:
// if (condition) {
//   ...
// } else if (otherCondition) {
//   ...
// } else {
//   ...
// }
// Practice: implement grading logic and refactor to guard clauses
