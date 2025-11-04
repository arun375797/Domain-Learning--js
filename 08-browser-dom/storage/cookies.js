/**
 * Cookies
 * 
 * WHAT TO LEARN:
 * 
 * 1. COOKIES
 *    - document.cookie
 *    - String API (not object)
 *    - Sent with HTTP requests
 *    - Server and client accessible
 * 
 * 2. SETTING
 *    - document.cookie = "name=value; expires=date; path=/"
 *    - Multiple attributes
 *    - Semicolon-separated
 * 
 * 3. EXPIRES
 *    - expires=date
 *    - When cookie expires
 *    - GMT date string
 * 
 * 4. PATH
 *    - path=/
 *    - Where cookie is valid
 *    - / = entire site
 * 
 * 5. DOMAIN
 *    - domain=example.com
 *    - Which domain
 *    - Subdomains included
 * 
 * 6. SECURE
 *    - Secure flag
 *    - HTTPS only
 *    - Security feature
 * 
 * 7. HTTPONLY
 *    - HttpOnly flag
 *    - Not accessible via JavaScript
 *    - Server-side only
 *    - XSS protection
 * 
 * 8. SAMESITE
 *    - SameSite=Strict|Lax|None
 *    - CSRF protection
 *    - When to send
 * 
 * 9. READING
 *    - Parse document.cookie string
 *    - Split by semicolons
 *    - Extract values
 */

// Cookies: document.cookie (string API)
// Set: document.cookie = "name=value; expires=date; path=/"
// Read: parse document.cookie string
// HttpOnly, Secure, SameSite flags for security
