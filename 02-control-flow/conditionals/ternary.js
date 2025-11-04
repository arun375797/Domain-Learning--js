/**
 * Ternary Operator
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - condition ? exprIfTrue : exprIfFalse
 *    - Evaluates to a value
 *    - Short form of if-else
 *    - Only expression, not statement
 * 
 * 2. RETURNS A VALUE
 *    - Can assign: let x = condition ? a : b
 *    - Can return: return isValid ? data : null
 *    - Can pass to function: func(x > 0 ? 'pos' : 'neg')
 *    - Expression, not statement
 * 
 * 3. WHEN TO USE
 *    - Simple conditionals
 *    - Assigning based on condition
 *    - JSX in React
 *    - Short, readable expressions
 * 
 * 4. WHEN NOT TO USE
 *    - Complex logic
 *    - Multiple statements
 *    - When if-else is clearer
 *    - Deep nesting
 * 
 * 5. COMMON USE CASES
 *    - Default values: const name = user ? user.name : 'Guest'
 *    - Status display: const status = isOnline ? 'Online' : 'Offline'
 *    - CSS classes: className = isActive ? 'active' : 'inactive'
 *    - Conditional rendering in JSX
 * 
 * 6. NESTING TERNARIES
 *    - Can nest but gets hard to read
 *    - a ? b : c ? d : e
 *    - Limit to one level of nesting
 *    - Use if-else for complex logic
 * 
 * 7. TERNARY VS IF-ELSE
 *    - Ternary is expression (produces value)
 *    - If-else is statement (performs action)
 *    - Ternary for simple cases
 *    - If-else for complex logic
 * 
 * 8. TERNARY VS LOGICAL OPERATORS
 *    - Ternary: x ? a : b
 *    - OR: x || b (returns x if truthy, else b)
 *    - AND: x && a (returns x if falsy, else a)
 *    - Nullish: x ?? b (returns b only if x is nullish)
 * 
 * 9. READABILITY TIPS
 *    - Keep expressions short
 *    - Use parentheses for clarity
 *    - Break into multiple lines if needed
 *    - Consider extracting to variable
 * 
 * 10. FORMATTING
 *     - Single line for short: x > 0 ? 'pos' : 'neg'
 *     - Multiple lines for longer:
 *       const result = condition
 *         ? longExpressionA
 *         : longExpressionB;
 * 
 * 11. COMMON PITFALLS
 *     - Over-nesting (hard to read)
 *     - Using for complex logic
 *     - Forgetting else case (required!)
 *     - Not considering readability
 */

// Ternary expression: condition ? exprIfTrue : exprIfFalse
// Example: const statusText = isOnline ? "Online" : "Offline";
// Keep expressions short; otherwise prefer if/else for clarity
