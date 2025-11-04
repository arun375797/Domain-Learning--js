/**
 * Intl.DateTimeFormat
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS INTL.DATETIMEFORMAT
 *    - Locale-aware date/time formatting
 *    - new Intl.DateTimeFormat(locale, options)
 *    - ES2018 feature
 *    - Internationalization API
 * 
 * 2. BASIC USAGE
 *    - const formatter = new Intl.DateTimeFormat('en-US')
 *    - formatter.format(new Date())
 *    - Returns formatted string
 * 
 * 3. LOCALES
 *    - 'en-US' - US English
 *    - 'en-GB' - UK English
 *    - 'fr-FR' - French
 *    - 'de-DE' - German
 *    - 'ja-JP' - Japanese
 *    - 'ar-SA' - Arabic
 *    - Many more
 * 
 * 4. DATE STYLES
 *    - dateStyle: 'full' | 'long' | 'medium' | 'short'
 *    - Predefined formats
 *    - 'full': "Monday, December 25, 2023"
 *    - 'short': "12/25/23"
 * 
 * 5. TIME STYLES
 *    - timeStyle: 'full' | 'long' | 'medium' | 'short'
 *    - Controls time portion
 *    - Can combine with dateStyle
 * 
 * 6. CUSTOM FORMATTING
 *    - year: 'numeric' | '2-digit'
 *    - month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
 *    - day: 'numeric' | '2-digit'
 *    - Full control over format
 * 
 * 7. WEEKDAY
 *    - weekday: 'long' | 'short' | 'narrow'
 *    - "Monday", "Mon", "M"
 * 
 * 8. ERA
 *    - era: 'long' | 'short' | 'narrow'
 *    - "Anno Domini", "AD"
 *    - For historical dates
 * 
 * 9. TIMEZONE
 *    - timeZone: 'America/New_York'
 *    - Converts to specified timezone
 *    - timeZoneName: 'long' | 'short'
 *    - Shows timezone name
 * 
 * 10. HOUR FORMAT
 *     - hour: 'numeric' | '2-digit'
 *     - hour12: true/false
 *     - 12-hour vs 24-hour format
 * 
 * 11. MINUTE/SECOND
 *     - minute: 'numeric' | '2-digit'
 *     - second: 'numeric' | '2-digit'
 * 
 * 12. FORMAT() METHOD
 *     - formatter.format(date)
 *     - Returns formatted string
 *     - Can format multiple dates
 * 
 * 13. FORMATTOPARTS()
 *     - formatter.formatToParts(date)
 *     - Returns array of parts
 *     - { type: 'month', value: '12' }
 *     - For custom formatting
 * 
 * 14. CALENDAR SYSTEMS
 *     - calendar: 'gregory' | 'islamic' | 'hebrew' | etc.
 *     - Different calendar systems
 * 
 * 15. NUMBERING SYSTEM
 *     - numberingSystem: 'latn' | 'arab' | etc.
 *     - Different number formats
 * 
 * 16. BEST PRACTICES
 *     - Use for user-facing dates
 *     - Specify locale explicitly
 *     - Consider timezone
 *     - Use ISO for storage/API
 */

// Intl.DateTimeFormat for locale-aware date/time formatting
// Example: new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date())
// Supports various date and time styles, timezone formatting
