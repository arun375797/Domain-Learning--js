/**
 * Callback Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE CALLBACKS
 *    - Functions passed as arguments
 *    - Called later (asynchronously or synchronously)
 *    - Fundamental async pattern
 *    - Before promises/async-await
 * 
 * 2. SYNCHRONOUS CALLBACKS
 *    - array.map(callback)
 *    - array.filter(callback)
 *    - Executed immediately
 *    - In order
 * 
 * 3. ASYNCHRONOUS CALLBACKS
 *    - setTimeout(callback, delay)
 *    - fs.readFile(path, callback)
 *    - Executed later
 *    - Event-driven
 * 
 * 4. EVENT HANDLERS
 *    - element.addEventListener('click', callback)
 *    - Callback on event
 *    - Most common use case
 * 
 * 5. CALLBACK PARAMETERS
 *    - Usually receives data or error
 *    - (data) => { }
 *    - (error, data) => { }
 * 
 * 6. THIS IN CALLBACKS
 *    - Regular function: this can change
 *    - Arrow function: preserves outer this
 *    - Use bind() if needed
 * 
 * 7. WHEN TO USE
 *    - Event handlers
 *    - Array methods
 *    - Simple async operations
 *    - Legacy code
 * 
 * 8. WHEN NOT TO USE
 *    - Complex async chains
 *    - Multiple async operations
 *    - Error handling complexity
 *    - Use promises/async-await instead
 */

// Callbacks: functions passed as arguments to be called later
// Common in async operations: setTimeout(callback, delay)
// Event handlers: element.addEventListener("click", callback)
