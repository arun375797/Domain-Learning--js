/**
 * Expressions vs Statements
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS AN EXPRESSION
 *    - Produces a value
 *    - Can be assigned to variable
 *    - Can be used as function argument
 *    - Examples: 2 + 2, "hello", myFunc(), x > 5
 * 
 * 2. WHAT IS A STATEMENT
 *    - Performs an action
 *    - Does not produce a value
 *    - Cannot be used where value is expected
 *    - Examples: if, for, while, let x = 5
 * 
 * 3. EXPRESSION EXAMPLES
 *    - Arithmetic: 5 + 3
 *    - String concatenation: 'hello' + ' world'
 *    - Function call: Math.random()
 *    - Ternary operator: x > 5 ? 'big' : 'small'
 *    - Logical: true && false
 *    - Object/array literals: {}, []
 * 
 * 4. STATEMENT EXAMPLES
 *    - Variable declaration: let x = 5
 *    - If statement: if (x > 5) { ... }
 *    - Loop: for (let i = 0; i < 10; i++) { ... }
 *    - Switch: switch (x) { ... }
 *    - Try-catch: try { ... } catch { ... }
 * 
 * 5. EXPRESSION STATEMENT
 *    - Expression used as statement
 *    - Standalone expression with semicolon
 *    - myFunction();
 *    - x = 5;
 *    - console.log('hello');
 *    - Common in JavaScript
 * 
 * 6. FUNCTION EXPRESSIONS VS DECLARATIONS
 *    - Declaration is statement: function foo() {}
 *    - Expression produces value: const foo = function() {}
 *    - Expression can be anonymous
 *    - Declaration is hoisted
 *    - Expression is not hoisted
 * 
 * 7. IF AS STATEMENT
 *    - if blocks are statements
 *    - Cannot assign if statement: let x = if (...)
 *    - Cannot return if statement
 *    - Does not produce value
 * 
 * 8. TERNARY AS EXPRESSION
 *    - Ternary operator produces value
 *    - Can assign: let x = condition ? a : b
 *    - Can return: return x > 5 ? 'big' : 'small'
 *    - Expression alternative to if
 * 
 * 9. WHERE EXPRESSIONS ARE NEEDED
 *    - Function arguments: myFunc(2 + 2)
 *    - Variable assignment: let x = 5
 *    - Return values: return x * 2
 *    - Array elements: [1, 2, x + 3]
 *    - Object values: { key: value + 1 }
 * 
 * 10. WHERE STATEMENTS ARE USED
 *     - Top level of program
 *     - Inside code blocks { }
 *     - Loop bodies
 *     - Function bodies
 *     - Cannot nest in expressions
 * 
 * 11. ARROW FUNCTIONS
 *     - Single expression: x => x * 2 (returns value)
 *     - Statement block: x => { return x * 2; }
 *     - Expression version more concise
 *     - Block version allows multiple statements
 * 
 * 12. PRACTICAL DIFFERENCE
 *     - Expressions compose: f(g(h(x)))
 *     - Statements organize: if, loops, declarations
 *     - Expressions for values
 *     - Statements for control flow
 */

// Practice converting multi-line `if` statements into expression-friendly versions like ternaries
// Tip: run this file with `node` and log each variant to understand when a value is returned
