/**
 * Template Literals
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - Use backticks: `text here`
 *    - Not single or double quotes
 *    - Introduced in ES6
 *    - Also called template strings
 * 
 * 2. STRING INTERPOLATION
 *    - Embed expressions with ${}
 *    - `Hello, ${name}!`
 *    - Any expression inside ${}
 *    - `2 + 2 = ${2 + 2}`
 *    - `User: ${user.name}, Age: ${user.age}`
 * 
 * 3. MULTI-LINE STRINGS
 *    - Can span multiple lines
 *    - No need for \n
 *    - Preserves whitespace and indentation
 *    - Example:
 *      `Line 1
 *       Line 2
 *       Line 3`
 * 
 * 4. EXPRESSION EVALUATION
 *    - Expressions evaluated at runtime
 *    - Can call functions: `Result: ${calculate()}`
 *    - Can use operators: `${a + b}`
 *    - Can use ternary: `${x > 5 ? 'big' : 'small'}`
 *    - Can access properties: `${obj.prop}`
 * 
 * 5. ESCAPING BACKTICKS
 *    - Use backslash: `This is a backtick: \``
 *    - Rarely needed
 *    - Dollar sign doesn't need escaping unless followed by {
 * 
 * 6. ESCAPING ${}
 *    - Use backslash before $: `Price: \${price}`
 *    - Only needed when you want literal ${}
 * 
 * 7. NESTING TEMPLATES
 *    - Can nest template literals
 *    - `Outer ${`Inner ${value}`}`
 *    - Useful for complex expressions
 *    - Can get hard to read
 * 
 * 8. TAGGED TEMPLATES
 *    - Function before template literal
 *    - tag`template ${expression}`
 *    - Function receives strings and values
 *    - Advanced feature
 *    - Used for custom string processing
 * 
 * 9. TAGGED TEMPLATE USE CASES
 *    - Styled-components in React
 *    - i18n (internationalization)
 *    - HTML escaping
 *    - SQL query building (safely)
 *    - Custom formatters
 * 
 * 10. RAW STRINGS
 *     - String.raw`...` for raw strings
 *     - Backslashes not interpreted
 *     - String.raw`C:\new\file` = "C:\new\file"
 *     - Useful for regex, file paths
 * 
 * 11. PERFORMANCE
 *     - Slightly slower than concatenation
 *     - Difference negligible in practice
 *     - More readable
 *     - Prefer readability over micro-optimization
 * 
 * 12. WHEN TO USE
 *     - String interpolation
 *     - Multi-line strings
 *     - When readability matters
 *     - Avoiding complex concatenation
 *     - Modern JavaScript (ES6+)
 * 
 * 13. WHEN NOT TO USE
 *     - Simple static strings
 *     - When targeting very old browsers
 *     - No expressions to embed
 */

// Experiment with placeholders: const name = "Ada"; console.log(`Hello, ${name}!`);
// Remember tagged templates for advanced formatting scenarios
