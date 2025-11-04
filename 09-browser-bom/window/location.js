/**
 * Location Object
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS LOCATION
 *    - window.location
 *    - Represents current URL
 *    - Can read and modify
 *    - Navigation control
 * 
 * 2. URL COMPONENTS
 *    - href - full URL
 *    - protocol - http: or https:
 *    - host - hostname:port
 *    - hostname - domain name
 *    - port - port number
 *    - pathname - path after domain
 *    - search - query string (with ?)
 *    - hash - fragment (with #)
 *    - origin - protocol + host
 * 
 * 3. READING URL
 *    - location.href - "https://example.com/path?query=1#hash"
 *    - location.pathname - "/path"
 *    - location.search - "?query=1"
 *    - location.hash - "#hash"
 * 
 * 4. NAVIGATION METHODS
 *    - location.assign(url) - navigate to URL
 *    - location.replace(url) - replace (no history entry)
 *    - location.reload() - reload page
 *    - location.href = url - navigate (same as assign)
 * 
 * 5. ASSIGN VS REPLACE
 *    - assign() adds to history
 *    - replace() replaces history entry
 *    - replace() prevents back button
 * 
 * 6. RELOAD
 *    - location.reload() - reload from cache
 *    - location.reload(true) - reload from server
 *    - Force refresh
 * 
 * 7. URLSEARCHPARAMS
 *    - new URLSearchParams(location.search)
 *    - Parse query string
 *    - params.get('key')
 *    - params.set('key', 'value')
 *    - params.toString()
 * 
 * 8. QUERY STRING MANIPULATION
 *    - const params = new URLSearchParams(location.search)
 *    - params.set('page', '2')
 *    - location.search = '?' + params.toString()
 * 
 * 9. HASH NAVIGATION
 *    - location.hash = '#section'
 *    - Single-page app routing
 *    - Doesn't reload page
 *    - Listen: hashchange event
 * 
 * 10. ORIGIN
 *     - location.origin
 *     - Protocol + host
 *     - "https://example.com"
 *     - Security-relevant
 * 
 * 11. SECURITY
 *     - Cannot read cross-origin location
 *     - Can navigate to any URL
 *     - Browser restrictions apply
 * 
 * 12. RELATIVE URLS
 *     - location.href = '/path'
 *     - Relative to current origin
 *     - Absolute URLs also work
 * 
 * 13. BEST PRACTICES
 *     - Use URLSearchParams for query
 *     - Use replace() for redirects
 *     - Check origin before navigation
 *     - Don't rely on hash for security
 */

// window.location provides URL parts: href, pathname, search, hash.
// Navigate: location.href = "new-url", location.assign(), location.replace()
// Parse query string: URLSearchParams
