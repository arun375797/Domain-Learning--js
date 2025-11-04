/**
 * Callbacks
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS A CALLBACK
 *    - Function passed as argument to another function
 *    - Invoked later (called back)
 *    - Fundamental pattern in JavaScript
 *    - Enables async programming
 * 
 * 2. BASIC EXAMPLE
 *    - function doSomething(callback) {
 *        // ... do work
 *        callback(result);
 *      }
 *    - doSomething((result) => console.log(result));
 * 
 * 3. SYNCHRONOUS CALLBACKS
 *    - Executed immediately
 *    - array.map(callback)
 *    - array.filter(callback)
 *    - Blocking execution
 * 
 * 4. ASYNCHRONOUS CALLBACKS
 *    - Executed later
 *    - setTimeout(callback, delay)
 *    - fs.readFile(path, callback)
 *    - Non-blocking
 * 
 * 5. ERROR-FIRST CALLBACKS (NODE STYLE)
 *    - callback(error, result)
 *    - First parameter is error (or null)
 *    - Second parameter is result
 *    - fs.readFile(path, (err, data) => {
 *        if (err) handle error;
 *        use data;
 *      });
 * 
 * 6. CALLBACK HELL
 *    - Nested callbacks
 *    - Hard to read and maintain
 *    - doAsync1((result1) => {
 *        doAsync2((result2) => {
 *          doAsync3((result3) => {
 *            // deeply nested
 *          });
 *        });
 *      });
 * 
 * 7. AVOIDING CALLBACK HELL
 *    - Named functions instead of anonymous
 *    - Keep functions small
 *    - Use promises or async/await
 *    - Modularize code
 * 
 * 8. THIS IN CALLBACKS
 *    - Regular functions: this can change
 *    - Arrow functions: preserve outer this
 *    - obj.method(function() { this !== obj });
 *    - obj.method(() => { this === outer });
 * 
 * 9. COMMON CALLBACK USES
 *    - Event handlers: button.addEventListener('click', callback)
 *    - Array methods: arr.map(callback)
 *    - Timers: setTimeout(callback, delay)
 *    - File I/O: fs.readFile(path, callback)
 *    - HTTP requests: http.get(url, callback)
 * 
 * 10. PASSING ARGUMENTS
 *     - Can pass data to callback
 *     - function process(data, callback) {
 *         const result = transform(data);
 *         callback(result);
 *       }
 * 
 * 11. MULTIPLE CALLBACKS
 *     - success and error callbacks
 *     - function fetch(url, onSuccess, onError) { }
 *     - Separate paths for different outcomes
 * 
 * 12. CALLBACK PATTERN PROBLEMS
 *     - Inversion of control
 *     - Trust third-party code
 *     - Error handling complexity
 *     - Callback hell / pyramid of doom
 * 
 * 13. MODERN ALTERNATIVES
 *     - Promises: better chaining
 *     - Async/await: synchronous-looking code
 *     - Observables (RxJS)
 *     - Event emitters
 * 
 * 14. WHEN TO USE CALLBACKS
 *     - Simple async operations
 *     - Event handlers
 *     - Array methods
 *     - When API expects them
 *     - Legacy code
 * 
 * 15. BEST PRACTICES
 *     - Handle errors properly
 *     - Don't nest deeply
 *     - Use named functions
 *     - Consider promises for complex async
 *     - Document callback signatures
 */

// Callbacks: functions passed as arguments to be invoked later.
// Common in async operations, event handlers, and array methods.
