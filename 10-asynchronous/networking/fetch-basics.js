/**
 * Fetch API Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. FETCH API
 *    - fetch(url, options)
 *    - Modern network API
 *    - Returns Promise<Response>
 *    - ES6 feature
 * 
 * 2. BASIC USAGE
 *    - fetch('/api/data')
 *      .then(res => res.json())
 *      .then(data => console.log(data))
 * 
 * 3. RESPONSE OBJECT
 *    - res.ok - success status
 *    - res.status - status code
 *    - res.statusText - status text
 *    - res.headers - headers object
 * 
 * 4. RESPONSE METHODS
 *    - res.json() - parse JSON
 *    - res.text() - get text
 *    - res.blob() - get blob
 *    - res.arrayBuffer() - get array buffer
 * 
 * 5. ERROR HANDLING
 *    - fetch doesn't reject on 404
 *    - Only rejects on network error
 *    - Check res.ok or res.status
 * 
 * 6. OPTIONS
 *    - method: 'GET', 'POST', etc.
 *    - headers: { 'Content-Type': 'application/json' }
 *    - body: JSON.stringify(data)
 *    - credentials: 'include'
 * 
 * 7. POST REQUEST
 *    - fetch(url, {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(data)
 *      })
 * 
 * 8. CORS
 *    - Cross-origin requests
 *    - Server must allow
 *    - CORS headers required
 */

// Fetch API: fetch(url, options)
// Returns Promise<Response>
// Example: fetch('/api/data').then(res => res.json())
