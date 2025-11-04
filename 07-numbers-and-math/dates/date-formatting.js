/**
 * Date Formatting
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC STRING METHODS
 *    - toString() - full date string
 *    - toDateString() - date portion
 *    - toTimeString() - time portion
 *    - toISOString() - ISO 8601 format
 *    - toUTCString() - UTC format
 * 
 * 2. LOCALE STRINGS
 *    - toLocaleString() - date and time
 *    - toLocaleDateString() - date only
 *    - toLocaleTimeString() - time only
 *    - Uses browser locale
 * 
 * 3. INTL.DATETIMEFORMAT
 *    - new Intl.DateTimeFormat(locale, options)
 *    - Advanced formatting
 *    - Full control over format
 *    - ES2018
 * 
 * 4. DATE STYLES
 *    - dateStyle: 'full', 'long', 'medium', 'short'
 *    - new Intl.DateTimeFormat('en-US', {
 *        dateStyle: 'full'
 *      }).format(date)
 *    - Predefined formats
 * 
 * 5. TIME STYLES
 *    - timeStyle: 'full', 'long', 'medium', 'short'
 *    - Controls time format
 *    - Can combine with dateStyle
 * 
 * 6. CUSTOM FORMATTING
 *    - year: 'numeric' | '2-digit'
 *    - month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
 *    - day: 'numeric' | '2-digit'
 *    - hour, minute, second, etc.
 * 
 * 7. TIMEZONE FORMATTING
 *    - timeZone: 'America/New_York'
 *    - Converts to specified timezone
 *    - timeZoneName: 'long' | 'short'
 * 
 * 8. WEEKDAY FORMATTING
 *    - weekday: 'long' | 'short' | 'narrow'
 *    - Shows day of week
 *    - "Monday", "Mon", "M"
 * 
 * 9. ERA FORMATTING
 *    - era: 'long' | 'short' | 'narrow'
 *    - "Anno Domini", "AD"
 *    - For historical dates
 * 
 * 10. FORMATTING OPTIONS
 *     - hour12: true/false
 *     - calendar: 'gregory', 'islamic', etc.
 *     - numberingSystem: 'latn', 'arab', etc.
 * 
 * 11. LOCALES
 *     - 'en-US', 'en-GB', 'fr-FR', 'de-DE', etc.
 *     - 'ar-SA', 'ja-JP', 'zh-CN', etc.
 *     - Different formats per locale
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
 * 14. COMPARISON
 *     - toLocaleString: quick, basic
 *     - Intl.DateTimeFormat: advanced, flexible
 *     - Manual formatting: most control
 * 
 * 15. BEST PRACTICES
 *     - Use Intl for user-facing dates
 *     - Specify locale explicitly
 *     - Consider timezone
 *     - Use ISO for storage/API
 */

// Practice formatting with Intl.DateTimeFormat and comparing time zones.
// Format dates: toLocaleDateString(), toLocaleTimeString(), toISOString()
// Use Intl.DateTimeFormat for locale-aware formatting
