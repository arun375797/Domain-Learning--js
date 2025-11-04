/**
 * Number Formatting
 * 
 * WHAT TO LEARN:
 * 
 * 1. TOFIXED()
 *    - num.toFixed(digits)
 *    - Formats to fixed decimal places
 *    - Returns string
 *    - (123.456).toFixed(2) // "123.46"
 * 
 * 2. TOPRECISION()
 *    - num.toPrecision(precision)
 *    - Formats to specified precision
 *    - Returns string
 *    - (123.456).toPrecision(4) // "123.5"
 * 
 * 3. TOEXPONENTIAL()
 *    - num.toExponential(digits)
 *    - Scientific notation
 *    - Returns string
 *    - (1234).toExponential(2) // "1.23e+3"
 * 
 * 4. TOSTRING()
 *    - num.toString(radix)
 *    - Converts to string
 *    - Can specify base (2-36)
 *    - (255).toString(16) // "ff"
 * 
 * 5. TOLOCALESTRING()
 *    - num.toLocaleString(locale, options)
 *    - Locale-aware formatting
 *    - (1234.5).toLocaleString('en-US') // "1,234.5"
 *    - Basic version
 * 
 * 6. INTL.NUMBERFORMAT
 *    - new Intl.NumberFormat(locale, options)
 *    - Advanced formatting
 *    - More control than toLocaleString
 *    - ES2018
 * 
 * 7. CURRENCY FORMATTING
 *    - new Intl.NumberFormat('en-US', {
 *        style: 'currency',
 *        currency: 'USD'
 *      }).format(1234.5)
 *    - "$1,234.50"
 * 
 * 8. PERCENT FORMATTING
 *    - new Intl.NumberFormat('en-US', {
 *        style: 'percent'
 *      }).format(0.123)
 *    - "12%"
 * 
 * 9. UNIT FORMATTING
 *    - new Intl.NumberFormat('en-US', {
 *        style: 'unit',
 *        unit: 'meter'
 *      }).format(1234)
 *    - "1,234 m"
 * 
 * 10. DECIMAL FORMATTING
 *     - new Intl.NumberFormat('en-US', {
 *         minimumFractionDigits: 2,
 *         maximumFractionDigits: 2
 *       }).format(1234.5)
 *     - "1,234.50"
 * 
 * 11. GROUPING
 *     - useGrouping: true/false
 *     - Controls thousand separators
 *     - (1234).toLocaleString() uses grouping
 * 
 * 12. COMPARISON
 *     - toFixed: simple, fixed decimals
 *     - toPrecision: total digits
 *     - toLocaleString: basic locale
 *     - Intl.NumberFormat: advanced locale
 * 
 * 13. FLOATING POINT ISSUES
 *     - 0.1 + 0.2 !== 0.3
 *     - Binary representation problem
 *     - Use epsilon for comparison
 *     - Math.abs(a - b) < Number.EPSILON
 * 
 * 14. ROUNDING BEHAVIOR
 *     - toFixed rounds: (0.995).toFixed(2) // "1.00"
 *     - Banker's rounding (round half to even)
 *     - May not always round up
 * 
 * 15. BEST PRACTICES
 *     - Use Intl.NumberFormat for user-facing
 *     - Use toFixed for simple cases
 *     - Be aware of precision issues
 *     - Consider locale for users
 */

// Format numbers with Intl.NumberFormat:
// new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(1234.5);
// Compare to toFixed, toPrecision, Math.round for rounding behaviour.
// Beware of floating point issues: 0.1 + 0.2 !== 0.3.
