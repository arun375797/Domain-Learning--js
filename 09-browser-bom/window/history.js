/**
 * History API
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS HISTORY
 *    - window.history
 *    - Browser navigation history
 *    - Can manipulate
 *    - No direct access to URLs
 * 
 * 2. NAVIGATION METHODS
 *    - history.back() - go back
 *    - history.forward() - go forward
 *    - history.go(n) - go n steps
 *    - history.go(-1) - same as back()
 * 
 * 3. HISTORY LENGTH
 *    - history.length
 *    - Number of entries
 *    - Read-only
 * 
 * 4. PUSHSTATE
 *    - history.pushState(state, title, url)
 *    - Adds entry to history
 *    - Doesn't reload page
 *    - URL changes (if same origin)
 * 
 * 5. PUSHSTATE PARAMETERS
 *    - state - data object (any serializable)
 *    - title - ignored by browsers
 *    - url - new URL (relative or absolute)
 * 
 * 6. REPLACESTATE
 *    - history.replaceState(state, title, url)
 *    - Replaces current entry
 *    - Doesn't add to history
 *    - Same parameters as pushState
 * 
 * 7. STATE
 *    - history.state
 *    - Current state object
 *    - Set by pushState/replaceState
 * 
 * 8. POPSTATE EVENT
 *    - window.addEventListener('popstate', handler)
 *    - Fires on back/forward
 *    - event.state contains state
 *    - Doesn't fire on pushState/replaceState
 * 
 * 9. SINGLE-PAGE APPLICATIONS
 *    - Use pushState for routing
 *    - Update content without reload
 *    - Handle popstate for back/forward
 *    - Modern routing pattern
 * 
 * 10. URL RESTRICTIONS
 *     - Must be same origin
 *     - Can be relative or absolute
 *     - Browser may ignore invalid URLs
 * 
 * 11. STATE LIMITATIONS
 *     - State must be serializable
 *     - Cloned when stored
 *     - Max size ~640KB
 * 
 * 12. BEST PRACTICES
 *     - Use for SPA routing
 *     - Store minimal state
 *     - Handle popstate
 *     - Update URL and content together
 * 
 * 13. COMMON PATTERNS
 *     - history.pushState({ page: 1 }, '', '/page1')
 *     - router.handleRoute(location.pathname)
 *     - window.addEventListener('popstate', router.handlePopState)
 */

// Update without reload: history.pushState({ page: 1 }, "", "/dashboard");
// Listen for navigation: window.addEventListener("popstate", (event) => console.log(event.state));
// Methods: pushState, replaceState, back(), forward(), go()
