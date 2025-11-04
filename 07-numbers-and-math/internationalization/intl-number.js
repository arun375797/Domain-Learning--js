/**
 * Intl.NumberFormat
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS INTL.NUMBERFORMAT
 *    - Locale-aware number formatting
 *    - new Intl.NumberFormat(locale, options)
 *    - ES2018 feature
 *    - Internationalization API
 * 
 * 2. BASIC USAGE
 *    - const formatter = new Intl.NumberFormat('en-US')
 *    - formatter.format(1234.5) // "1,234.5"
 *    - Returns formatted string
 * 
 * 3. LOCALES
 *    - 'en-US' - US English
 *    - 'en-IN' - Indian English
 *    - 'fr-FR' - French
 *    - 'de-DE' - German
 *    - 'ja-JP' - Japanese
 *    - 'ar-SA' - Arabic
 *    - Many more
 * 
 * 4. CURRENCY FORMATTING
 *    - style: 'currency'
 *    - currency: 'USD', 'EUR', 'INR', etc.
 *    - new Intl.NumberFormat('en-US', {
 *        style: 'currency',
 *        currency: 'USD'
 *      }).format(1234.5)
 *    - "$1,234.50"
 * 
 * 5. PERCENT FORMATTING
 *    - style: 'percent'
 *    - Converts decimal to percent
 *    - (0.123).format() // "12%"
 * 
 * 6. UNIT FORMATTING
 *    - style: 'unit'
 *    - unit: 'meter', 'kilogram', 'liter', etc.
 *    - Shows unit with number
 * 
 * 7. DECIMAL FORMATTING
 *    - minimumFractionDigits: 2
 *    - maximumFractionDigits: 2
 *    - Controls decimal places
 *    - Always shows specified digits
 * 
 * 8. INTEGER FORMATTING
 *    - minimumFractionDigits: 0
 *    - maximumFractionDigits: 0
 *    - No decimals
 * 
 * 9. GROUPING
 *    - useGrouping: true/false
 *    - Controls thousand separators
 *    - true: "1,234.5"
 *    - false: "1234.5"
 * 
 * 10. SIGN DISPLAY
 *     - signDisplay: 'auto' | 'always' | 'never' | 'exceptZero'
 *     - Controls sign display
 *     - Always show + for positive
 * 
 * 11. NOTATION
 *     - notation: 'standard' | 'scientific' | 'engineering' | 'compact'
 *     - Compact: "1.2K" for 1200
 *     - Scientific: "1.2E3"
 * 
 * 12. COMPACT DISPLAY
 *     - compactDisplay: 'short' | 'long'
 *     - "1.2K" vs "1.2 thousand"
 * 
 * 13. ROUNDING
 *     - roundingMode: 'halfExpand' | 'halfCeil' | etc.
 *     - Controls rounding behavior
 * 
 * 14. MINIMUM/MAXIMUM DIGITS
 *     - minimumIntegerDigits
 *     - minimumSignificantDigits
 *     - maximumSignificantDigits
 * 
 * 15. BEST PRACTICES
 *     - Use for user-facing numbers
 *     - Specify locale explicitly
 *     - Use currency for money
 *     - Consider user's locale
 */

// Intl.NumberFormat for locale-aware number formatting
// Example: new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(1234.5)
// Supports currency, percent, unit, and decimal formatting
