/**
 * Error-First Callbacks
 * 
 * WHAT TO LEARN:
 * 
 * 1. ERROR-FIRST PATTERN
 *    - callback(error, data)
 *    - First parameter is error
 *    - Second parameter is data
 *    - Node.js convention
 * 
 * 2. SUCCESS CASE
 *    - callback(null, data)
 *    - callback(undefined, data)
 *    - Error is null/undefined
 *    - Data is second parameter
 * 
 * 3. ERROR CASE
 *    - callback(new Error('message'))
 *    - callback(error, undefined)
 *    - First parameter is Error object
 *    - Second parameter ignored
 * 
 * 4. USAGE PATTERN
 *    - function asyncOperation(callback) {
 *        if (error) {
 *          callback(error);
 *        } else {
 *          callback(null, data);
 *        }
 *      }
 * 
 * 5. CALLING PATTERN
 *    - asyncOperation((error, data) => {
 *        if (error) {
 *          handleError(error);
 *          return;
 *        }
 *        useData(data);
 *      });
 * 
 * 6. CHECKING ERROR
 *    - Always check error first
 *    - if (error) { }
 *    - Early return pattern
 *    - Guard clause
 * 
 * 7. NODE.JS STANDARD
 *    - Used throughout Node.js
 *    - fs.readFile, http.get, etc.
 *    - Consistent pattern
 * 
 * 8. VS PROMISES
 *    - Promises: .catch() for errors
 *    - Callbacks: error-first parameter
 *    - Promises cleaner
 */

// Error-first callback pattern: (error, data) => { }
// Common in Node.js: fs.readFile(path, (err, data) => { })
// First parameter is error if operation failed, null/undefined if successful
