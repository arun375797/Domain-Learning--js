/**
 * Comparison Operators
 * 
 * WHAT TO LEARN:
 * 
 * 1. EQUALITY OPERATORS
 *    - === (strict equality) - same type and value
 *    - == (loose equality) - converts types then compares
 *    - !== (strict inequality)
 *    - != (loose inequality)
 * 
 * 2. STRICT EQUALITY (===)
 *    - No type coercion
 *    - Compares type first, then value
 *    - Recommended default choice
 *    - null === null (true)
 *    - undefined === undefined (true)
 *    - NaN === NaN (false - special case!)
 *    - Objects compared by reference
 * 
 * 3. LOOSE EQUALITY (==)
 *    - Performs type coercion
 *    - Complex conversion rules
 *    - Can produce unexpected results
 *    - 0 == false (true)
 *    - '' == false (true)
 *    - null == undefined (true)
 *    - Avoid unless you know what you're doing
 * 
 * 4. RELATIONAL OPERATORS
 *    - > (greater than)
 *    - < (less than)
 *    - >= (greater than or equal)
 *    - <= (less than or equal)
 *    - Perform type coercion
 * 
 * 5. STRING COMPARISON
 *    - Compared lexicographically (dictionary order)
 *    - Based on Unicode values
 *    - 'a' < 'b' (true)
 *    - 'A' < 'a' (true - uppercase first)
 *    - Case-sensitive by default
 *    - Use localeCompare() for proper string comparison
 * 
 * 6. NUMBER COMPARISON
 *    - Normal mathematical comparison
 *    - NaN compared to anything is false (even NaN)
 *    - Infinity > any finite number
 *    - -Infinity < any finite number
 * 
 * 7. OBJECT COMPARISON
 *    - Objects compared by reference, not value
 *    - {} === {} (false - different references)
 *    - Same reference === returns true
 *    - Cannot use == or === to compare object contents
 *    - Use deep equality libraries for value comparison
 * 
 * 8. SPECIAL CASES
 *    - null == undefined (true)
 *    - null === undefined (false)
 *    - NaN === NaN (false)
 *    - +0 === -0 (true)
 *    - Object.is() for more precise comparison
 * 
 * 9. OBJECT.IS() (ES2015)
 *    - Similar to === but fixes edge cases
 *    - Object.is(NaN, NaN) returns true
 *    - Object.is(+0, -0) returns false
 *    - Most precise equality check
 * 
 * 10. BEST PRACTICES
 *     - Prefer === over ==
 *     - Use === for all comparisons by default
 *     - Only use == if you need type coercion
 *     - Use Object.is() for NaN and ±0 checks
 *     - Use Array.isArray() and typeof for type checks
 */

// Practice: demonstrate differences between == and === with various type comparisons
