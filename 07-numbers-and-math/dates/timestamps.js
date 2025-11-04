/**
 * Timestamps
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS TIMESTAMP
 *    - Milliseconds since Jan 1, 1970 UTC
 *    - Unix epoch (Unix time)
 *    - Universal time representation
 *    - Number type
 * 
 * 2. GETTING TIMESTAMP
 *    - Date.now() - current timestamp
 *    - date.getTime() - date's timestamp
 *    - date.valueOf() - same as getTime()
 *    - +date - unary plus converts
 * 
 * 3. CREATING FROM TIMESTAMP
 *    - new Date(timestamp)
 *    - Creates date from milliseconds
 *    - Unix timestamp in milliseconds
 * 
 * 4. UNIX TIMESTAMP (SECONDS)
 *    - Unix uses seconds
 *    - JavaScript uses milliseconds
 *    - Convert: unix * 1000
 *    - Or: Math.floor(js / 1000)
 * 
 * 5. DATE ARITHMETIC
 *    - date1 - date2 = milliseconds difference
 *    - date1.getTime() - date2.getTime()
 *    - Can add/subtract milliseconds
 *    - new Date(date.getTime() + 86400000) // +1 day
 * 
 * 6. TIME CONSTANTS
 *    - 1000 ms = 1 second
 *    - 60,000 ms = 1 minute
 *    - 3,600,000 ms = 1 hour
 *    - 86,400,000 ms = 1 day
 * 
 * 7. ADDING TIME
 *    - const tomorrow = new Date(date.getTime() + 86400000)
 *    - Or: date.setDate(date.getDate() + 1)
 *    - Month/year rollover handled
 * 
 * 8. SUBTRACTING TIME
 *    - const yesterday = new Date(date.getTime() - 86400000)
 *    - Or: date.setDate(date.getDate() - 1)
 * 
 * 9. COMPARING DATES
 *    - date1 > date2 works directly
 *    - date1 === date2 compares references (wrong!)
 *    - date1.getTime() === date2.getTime() (correct)
 * 
 * 10. MAXIMUM TIMESTAMP
 *     - Date can represent up to ~285,000 years
 *     - Maximum: 8640000000000000
 *     - Beyond that: Invalid Date
 * 
 * 11. MINIMUM TIMESTAMP
 *     - Minimum: -8640000000000000
 *     - Very old dates possible
 * 
 * 12. PERFORMANCE
 *     - Timestamps are fast
 *     - Number comparisons
 *     - No timezone conversion
 *     - Use for calculations
 * 
 * 13. STORAGE
 *     - Store as timestamps in databases
 *     - Convert to Date for display
 *     - Universal format
 *     - No timezone issues
 * 
 * 14. TIMEZONE AWARENESS
 *     - Timestamps are UTC
 *     - Display converts to local
 *     - Calculations use UTC
 *     - No DST issues
 * 
 * 15. COMMON PATTERNS
 *     - const now = Date.now()
 *     - const diff = now - startTime
 *     - const daysDiff = diff / 86400000
 *     - const hoursDiff = diff / 3600000
 */

// Timestamps: Date.now(), date.getTime(), date.valueOf()
// Unix timestamp: milliseconds since Jan 1, 1970
// Convert between dates and timestamps for calculations
