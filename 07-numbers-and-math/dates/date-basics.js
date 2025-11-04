/**
 * Date Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. DATE CONSTRUCTOR
 *    - new Date() - current date/time
 *    - new Date(timestamp) - from milliseconds
 *    - new Date(year, month, day, ...) - from components
 *    - new Date(dateString) - from string
 * 
 * 2. DATE.NOW()
 *    - Returns current timestamp
 *    - Milliseconds since epoch
 *    - Faster than new Date().getTime()
 *    - Static method
 * 
 * 3. TIMESTAMP
 *    - Milliseconds since Jan 1, 1970 UTC
 *    - Unix epoch
 *    - date.getTime() or date.valueOf()
 * 
 * 4. GETTING COMPONENTS
 *    - getFullYear() - 4-digit year
 *    - getMonth() - 0-11 (0 = January!)
 *    - getDate() - day of month (1-31)
 *    - getDay() - day of week (0-6, 0 = Sunday)
 * 
 * 5. TIME COMPONENTS
 *    - getHours() - 0-23
 *    - getMinutes() - 0-59
 *    - getSeconds() - 0-59
 *    - getMilliseconds() - 0-999
 * 
 * 6. UTC METHODS
 *    - getUTCFullYear(), getUTCMonth(), etc.
 *    - UTC versions of all getters
 *    - No timezone conversion
 * 
 * 7. SETTING COMPONENTS
 *    - setFullYear(year)
 *    - setMonth(month) - 0-11
 *    - setDate(day)
 *    - setHours(hours, minutes, seconds, ms)
 * 
 * 8. MONTH INDEX GOTCHA
 *    - Months start at 0!
 *    - January = 0, December = 11
 *    - Common source of bugs
 *    - Always remember +1 or -1
 * 
 * 9. DATE ARITHMETIC
 *    - Dates are numbers internally
 *    - date1 - date2 = milliseconds difference
 *    - date1 + date2 = string concatenation (wrong!)
 *    - Use getTime() for arithmetic
 * 
 * 10. ISO STRINGS
 *     - date.toISOString()
 *     - "2023-12-25T10:30:00.000Z"
 *     - ISO 8601 format
 *     - Always UTC
 * 
 * 11. PARSING ISO
 *     - new Date("2023-12-25T10:30:00Z")
 *     - Parses ISO string
 *     - Can be unreliable with other formats
 *     - Use library for complex parsing
 * 
 * 12. LOCAL STRINGS
 *     - date.toString() - full string
 *     - date.toDateString() - date only
 *     - date.toTimeString() - time only
 *     - Locale-specific
 * 
 * 13. INVALID DATES
 *     - new Date("invalid") creates Invalid Date
 *     - date.getTime() returns NaN
 *     - isNaN(date.getTime()) to check
 *     - Or date.toString() === "Invalid Date"
 * 
 * 14. COMPARISON
 *     - date1 > date2 works
 *     - date1 < date2 works
 *     - date1 === date2 compares references
 *     - Use getTime() for equality
 * 
 * 15. TIMEZONES
 *     - Dates stored in UTC
 *     - Displayed in local timezone
 *     - getTimezoneOffset() - offset in minutes
 *     - Use UTC methods or libraries
 */

// new Date(), Date.now(), and parsing ISO strings.
// Create dates: new Date(), new Date(timestamp), new Date(year, month, day)
// Use getFullYear, getMonth, getDate, etc. Remember months start at 0.
