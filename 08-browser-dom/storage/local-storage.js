/**
 * LocalStorage
 * 
 * WHAT TO LEARN:
 * 
 * 1. LOCALSTORAGE
 *    - window.localStorage
 *    - Persistent storage
 *    - Same-origin policy
 *    - Survives browser restart
 * 
 * 2. SETITEM
 *    - localStorage.setItem('key', 'value')
 *    - Stores value
 *    - Strings only
 *    - JSON.stringify for objects
 * 
 * 3. GETITEM
 *    - localStorage.getItem('key')
 *    - Retrieves value
 *    - Returns string or null
 * 
 * 4. REMOVEITEM
 *    - localStorage.removeItem('key')
 *    - Removes item
 * 
 * 5. CLEAR
 *    - localStorage.clear()
 *    - Removes all
 * 
 * 6. STORAGE EVENT
 *    - window.addEventListener('storage', handler)
 *    - Fires on changes (other tabs)
 *    - Same origin only
 * 
 * 7. LIMITATIONS
 *    - ~5-10MB per origin
 *    - Synchronous API
 *    - Strings only
 *    - No expiration
 */

// localStorage: persistent storage, same-origin
// Methods: setItem(key, value), getItem(key), removeItem(key), clear()
// Store strings only; use JSON.stringify/parse for objects
