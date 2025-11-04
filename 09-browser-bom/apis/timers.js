/**
 * Timers: setTimeout and setInterval
 * 
 * WHAT TO LEARN:
 * 
 * 1. SETTIMEOUT
 *    - setTimeout(callback, delay)
 *    - Executes once after delay
 *    - Returns timer ID
 *    - Delay in milliseconds
 * 
 * 2. CLEARTIMEOUT
 *    - clearTimeout(timerId)
 *    - Cancels timeout
 *    - Must store ID
 *    - No effect if already executed
 * 
 * 3. SETINTERVAL
 *    - setInterval(callback, delay)
 *    - Executes repeatedly
 *    - Returns timer ID
 *    - Interval in milliseconds
 * 
 * 4. CLEARINTERVAL
 *    - clearInterval(timerId)
 *    - Stops interval
 *    - Must store ID
 *    - Prevents memory leaks
 * 
 * 5. DELAY NOT GUARANTEED
 *    - Minimum delay, not exact
 *    - Depends on event loop
 *    - Can be delayed by other code
 *    - Not precise timing
 * 
 * 6. ZERO DELAY
 *    - setTimeout(fn, 0)
 *    - Executes after current code
 *    - Yields to other code
 *    - Useful for deferring execution
 * 
 * 7. PARAMETERS
 *    - setTimeout(fn, delay, arg1, arg2, ...)
 *    - Can pass arguments
 *    - After delay and callback
 * 
 * 8. THIS BINDING
 *    - Regular function: this is window
 *    - Arrow function: preserves outer this
 *    - Use bind() or arrow functions
 * 
 * 9. NESTED TIMERS
 *    - setTimeout(() => setTimeout(...))
 *    - Can nest timers
 *    - Consider recursion
 * 
 * 10. PERFORMANCE
 *     - setTimeout is asynchronous
 *     - Doesn't block execution
 *     - Multiple timers can queue
 * 
 * 11. MEMORY LEAKS
 *     - Forgot clearInterval
 *     - Timers keep running
 *     - Clean up in useEffect/cleanup
 * 
 * 12. REQUESTANIMATIONFRAME
 *     - Better for animations
 *     - Browser optimized
 *     - 60fps target
 *     - Use instead of setInterval for animations
 * 
 * 13. WHEN TO USE
 *     - setTimeout: delayed execution
 *     - setInterval: recurring tasks
 *     - Debouncing
 *     - Throttling
 * 
 * 14. BEST PRACTICES
 *     - Always clear intervals
 *     - Store timer IDs
 *     - Use requestAnimationFrame for animations
 *     - Consider Web Workers for heavy tasks
 */

// Timers: setTimeout(callback, delay), setInterval(callback, delay)
// Clear: clearTimeout(id), clearInterval(id)
// Use for delayed execution and recurring tasks
