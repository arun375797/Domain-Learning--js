/**
 * Arithmetic and Logical Operators
 * 
 * WHAT TO LEARN:
 * 
 * 1. ARITHMETIC OPERATORS
 *    - + (addition / concatenation)
 *    - - (subtraction)
 *    - * (multiplication)
 *    - / (division)
 *    - % (remainder/modulo)
 *    - ** (exponentiation, ES2016)
 * 
 * 2. ADDITION OPERATOR BEHAVIOR
 *    - Number + Number = Number
 *    - String + anything = String (concatenation)
 *    - Triggers type coercion
 *    - Left-to-right evaluation matters
 *    - 1 + 2 + '3' = '33' (not '123')
 * 
 * 3. DIVISION QUIRKS
 *    - Division by zero returns Infinity
 *    - 0 / 0 returns NaN
 *    - Always returns floating point
 *    - No integer division operator
 *    - Use Math.floor() for integer division
 * 
 * 4. MODULO OPERATOR
 *    - Returns remainder of division
 *    - Sign follows dividend
 *    - 5 % 2 = 1
 *    - -5 % 2 = -1
 *    - Useful for cycling values, even/odd checks
 * 
 * 5. LOGICAL OPERATORS
 *    - && (AND) - returns first falsy or last truthy
 *    - || (OR) - returns first truthy or last falsy
 *    - ! (NOT) - converts to boolean and inverts
 *    - All use short-circuit evaluation
 * 
 * 6. SHORT-CIRCUIT EVALUATION
 *    - && stops at first falsy value
 *    - || stops at first truthy value
 *    - Right side may not execute
 *    - Can be used for conditional execution
 *    - Example: condition && doSomething()
 * 
 * 7. LOGICAL ASSIGNMENT OPERATORS (ES2021)
 *    - &&= (AND assignment)
 *    - ||= (OR assignment)
 *    - ??= (nullish coalescing assignment)
 *    - Combines operation and assignment
 *    - Uses short-circuit evaluation
 * 
 * 8. OPERATOR PRECEDENCE
 *    - ! (highest)
 *    - **, *, /, %
 *    - +, -
 *    - <, >, <=, >=
 *    - ==, ===, !=, !==
 *    - &&
 *    - ||
 *    - = (lowest)
 *    - Use parentheses for clarity
 * 
 * 9. TYPE COERCION WITH OPERATORS
 *    - String + Number → String
 *    - Boolean converted to Number in math
 *    - null converted to 0
 *    - undefined converted to NaN
 *    - Objects converted via valueOf/toString
 */

// Combine operators in expressions and trace evaluation order with parentheses
