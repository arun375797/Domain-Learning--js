/**
 * Browser Dialogs
 * 
 * WHAT TO LEARN:
 * 
 * 1. ALERT
 *    - alert(message)
 *    - Modal dialog
 *    - OK button only
 *    - Blocks execution
 * 
 * 2. CONFIRM
 *    - confirm(message)
 *    - Modal dialog
 *    - OK and Cancel buttons
 *    - Returns boolean (true/false)
 *    - Blocks execution
 * 
 * 3. PROMPT
 *    - prompt(message, defaultText)
 *    - Modal dialog
 *    - Text input
 *    - Returns string or null
 *    - Blocks execution
 * 
 * 4. BLOCKING BEHAVIOR
 *    - All dialogs block execution
 *    - Page freezes until dismissed
 *    - Bad user experience
 *    - Avoid in production
 * 
 * 5. WHEN TO USE
 *    - Debugging
 *    - Quick testing
 *    - Simple interactions
 *    - Development only
 * 
 * 6. WHEN NOT TO USE
 *    - Production code
 *    - User-facing features
 *    - Modern web apps
 *    - Better alternatives exist
 * 
 * 7. ALTERNATIVES
 *    - Custom modals
 *    - UI libraries (Material-UI, etc.)
 *    - Toast notifications
 *    - Better UX
 * 
 * 8. CUSTOM MODALS
 *    - HTML/CSS/JS
 *    - Non-blocking
 *    - Styled
 *    - Accessible
 * 
 * 9. STYLING
 *    - Cannot style native dialogs
 *    - Browser default appearance
 *    - Varies by browser
 * 
 * 10. ACCESSIBILITY
 *     - Native dialogs have some a11y
 *     - Custom modals need more work
 *     - ARIA attributes
 *     - Keyboard navigation
 * 
 * 11. SECURITY
 *     - Can be blocked by browsers
 *     - Users can disable
 *     - Not reliable
 * 
 * 12. BEST PRACTICES
 *     - Use only for debugging
 *     - Replace with custom modals
 *     - Consider user experience
 *     - Don't rely on dialogs
 */

// alert("Heads up!"), confirm("Are you sure?"), prompt("Enter name") — modal dialogs.
// Blocking dialogs; avoid in production, prefer custom modals.
// Use for debugging and simple interactions.
