/**
 * Call Stack
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS CALL STACK
 *    - Tracks function execution
 *    - Last-in-first-out (LIFO)
 *    - One call stack
 *    - JavaScript is single-threaded
 * 
 * 2. FUNCTION CALLS
 *    - Each call adds frame
 *    - When returns, frame removed
 *    - Stack grows and shrinks
 * 
 * 3. STACK OVERFLOW
 *    - Too many nested calls
 *    - Infinite recursion
 *    - Maximum call stack size exceeded
 * 
 * 4. SINGLE THREADED
 *    - Only one call stack
 *    - One thing at a time
 *    - Non-blocking I/O
 *    - Event loop handles async
 * 
 * 5. BLOCKING OPERATIONS
 *    - Synchronous code blocks
 *    - Long loops block
 *    - UI freezes
 *    - Use async for long operations
 * 
 * 6. STACK TRACE
 *    - Shows call stack
 *    - Error.stack
 *    - Useful for debugging
 *    - Function call chain
 */

// Call stack: tracks function execution
// JavaScript is single-threaded; one call stack
// When stack is empty, event loop processes callback queue
