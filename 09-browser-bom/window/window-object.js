/**
 * Window Object
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS WINDOW
 *    - Global object in browser
 *    - Represents browser window
 *    - Top-level object
 *    - Global scope
 * 
 * 2. GLOBAL SCOPE
 *    - var declarations become window properties
 *    - window.myVar === myVar
 *    - Avoid polluting window
 *    - Use const/let instead
 * 
 * 3. WINDOW PROPERTIES
 *    - window.innerWidth - viewport width
 *    - window.innerHeight - viewport height
 *    - window.outerWidth - window width
 *    - window.outerHeight - window height
 * 
 * 4. SCREEN PROPERTIES
 *    - window.screen.width - screen width
 *    - window.screen.height - screen height
 *    - window.screen.availWidth - available width
 *    - window.screen.availHeight - available height
 * 
 * 5. SCROLL PROPERTIES
 *    - window.scrollX / window.pageXOffset
 *    - window.scrollY / window.pageYOffset
 *    - Scroll position
 * 
 * 6. SCROLL METHODS
 *    - window.scrollTo(x, y)
 *    - window.scrollBy(x, y)
 *    - window.scroll() - same as scrollTo
 * 
 * 7. WINDOW METHODS
 *    - window.open() - new window
 *    - window.close() - close window
 *    - window.focus() - focus window
 *    - window.blur() - blur window
 * 
 * 8. RESIZE EVENT
 *    - window.addEventListener('resize', handler)
 *    - Fires on window resize
 *    - Can be frequent
 *    - Debounce for performance
 * 
 * 9. SCROLL EVENT
 *    - window.addEventListener('scroll', handler)
 *    - Fires on scroll
 *    - Very frequent
 *    - Throttle for performance
 * 
 * 10. PERFORMANCE
 *     - window.performance.now()
 *     - High-resolution time
 *     - Better than Date.now()
 *     - For measuring performance
 * 
 * 11. REQUESTANIMATIONFRAME
 *     - window.requestAnimationFrame(callback)
 *     - Smooth animations
 *     - Browser optimized
 *     - Better than setTimeout
 * 
 * 12. LOCALSTORAGE / SESSIONSTORAGE
 *     - window.localStorage
 *     - window.sessionStorage
 *     - Storage APIs
 * 
 * 13. LOCATION
 *     - window.location
 *     - URL information
 *     - Navigation
 * 
 * 14. HISTORY
 *     - window.history
 *     - Browser history
 *     - Navigation
 * 
 * 15. NAVIGATOR
 *     - window.navigator
 *     - Browser info
 *     - User agent
 * 
 * 16. DOCUMENT
 *     - window.document
 *     - DOM access
 *     - Can omit window
 * 
 * 17. CONSOLE
 *     - window.console
 *     - DevTools console
 *     - Logging
 */

// The window object hosts browser APIs: window.innerWidth, setTimeout, alert, etc.
// Avoid polluting the global scope; always declare variables with const/let.
// Measure performance with performance.now() and console.time.
