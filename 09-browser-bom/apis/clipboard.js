/**
 * Clipboard API
 * 
 * WHAT TO LEARN:
 * 
 * 1. NAVIGATOR.CLIPBOARD
 *    - navigator.clipboard
 *    - Modern clipboard API
 *    - Async methods
 *    - Requires HTTPS or localhost
 * 
 * 2. WRITETEXT
 *    - navigator.clipboard.writeText(text)
 *    - Copies text to clipboard
 *    - Returns promise
 *    - await clipboard.writeText('text')
 * 
 * 3. READTEXT
 *    - navigator.clipboard.readText()
 *    - Reads text from clipboard
 *    - Returns promise
 *    - const text = await clipboard.readText()
 * 
 * 4. SECURITY REQUIREMENTS
 *    - HTTPS required
 *    - Or localhost
 *    - Secure context
 *    - Prevents unauthorized access
 * 
 * 5. USER GESTURE
 *    - Must be triggered by user action
 *    - Click, keypress, etc.
 *    - Cannot be automatic
 *    - Security requirement
 * 
 * 6. PERMISSIONS
 *    - Browser may prompt
 *    - User must grant
 *    - Can be denied
 *    - Check permissions API
 * 
 * 7. ERRORS
 *    - Permission denied
 *    - Not in secure context
 *    - No user gesture
 *    - Handle with try-catch
 * 
 * 8. WRITE
 *    - navigator.clipboard.write(data)
 *    - For non-text data
 *    - ClipboardItem objects
 *    - Advanced usage
 * 
 * 9. READ
 *    - navigator.clipboard.read()
 *    - Reads all clipboard data
 *    - Returns ClipboardItems
 *    - Advanced usage
 * 
 * 10. BROWSER SUPPORT
 *     - Modern browsers
 *     - Chrome, Firefox, Safari, Edge
 *     - May need fallback
 * 
 * 11. FALLBACK
 *     - document.execCommand('copy')
 *     - Older method
 *     - Deprecated
 *     - Use if clipboard API unavailable
 * 
 * 12. BEST PRACTICES
 *     - Always check for support
 *     - Handle errors gracefully
 *     - Provide feedback to user
 *     - Use in response to user action
 * 
 * 13. COMMON USE CASES
 *     - Copy button
 *     - Share functionality
 *     - Copy to clipboard feature
 *     - Data export
 */

// Clipboard API: navigator.clipboard.writeText("Copied!"), navigator.clipboard.readText().
// Always request clipboard access in response to a user gesture for reliability.
// Requires HTTPS or localhost for security.
