/**
 * AbortController
 * 
 * WHAT TO LEARN:
 * 
 * 1. ABORTCONTROLLER
 *    - new AbortController()
 *    - Cancel fetch requests
 *    - Modern cancellation
 * 
 * 2. ABORT SIGNAL
 *    - controller.signal
 *    - Pass to fetch
 *    - fetch(url, { signal: controller.signal })
 * 
 * 3. ABORTING
 *    - controller.abort()
 *    - Cancels request
 *    - Throws AbortError
 * 
 * 4. ABORT ERROR
 *    - catch (error) {
 *        if (error.name === 'AbortError') {
 *          // cancelled
 *        }
 *      }
 * 
 * 5. USE CASES
 *    - User cancels action
 *    - Component unmounts
 *    - Timeout
 *    - Cleanup
 */

// AbortController: cancel fetch requests
// const controller = new AbortController();
// fetch(url, { signal: controller.signal });
// controller.abort(); // cancels request
