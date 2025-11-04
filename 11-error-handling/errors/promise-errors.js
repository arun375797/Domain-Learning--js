/**
 * Promise Error Handling
 * 
 * WHAT TO LEARN:
 * 
 * 1. PROMISE REJECTIONS
 *    - Promises reject on errors
 *    - Must be caught
 *    - Uncaught = unhandled rejection
 *    - Can crash application
 * 
 * 2. CATCH() METHOD
 *    - promise.catch(error => { })
 *    - Catches rejections
 *    - Returns new promise
 *    - Chainable
 * 
 * 3. CATCH IN CHAIN
 *    - promise.then().catch()
 *    - Catches errors from any step
 *    - Stops error propagation
 *    - Returns resolved promise
 * 
 * 4. RETURNING FROM CATCH
 *    - catch(() => return value)
 *    - Converts rejection to resolution
 *    - Chain continues
 *    - Important for recovery
 * 
 * 5. RETHROWING IN CATCH
 *    - catch(error => { throw error })
 *    - Re-throws error
 *    - Next catch handles
 *    - For error transformation
 * 
 * 6. ASYNC/AWAIT WITH TRY-CATCH
 *    - try { await promise } catch { }
 *    - try-catch works with async
 *    - Synchronous-looking error handling
 *    - Preferred pattern
 * 
 * 7. UNHANDLED REJECTIONS
 *    - Promise rejection without catch
 *    - Warning in console
 *    - Can listen: unhandledrejection event
 *    - Should always catch
 * 
 * 8. FINALLY IN PROMISES
 *    - promise.finally(() => { })
 *    - Always executes
 *    - For cleanup
 *    - Doesn't receive value/error
 * 
 * 9. ERROR PROPAGATION
 *    - Errors bubble up chain
 *    - Until caught
 *    - Or unhandled
 * 
 * 10. PROMISE.ALL ERRORS
 *     - Promise.all() rejects on first error
 *     - All errors: use Promise.allSettled()
 *     - Individual catch per promise
 * 
 * 11. ERROR TRANSFORMATION
 *     - catch(error => throw new Error(...))
 *     - Wrap errors
 *     - Add context
 *     - Better error messages
 * 
 * 12. BEST PRACTICES
 *     - Always have catch
 *     - Return from catch for recovery
 *     - Log errors appropriately
 *     - Don't swallow silently
 * 
 * 13. COMMON PATTERNS
 *     - promise.catch(error => log(error))
 *     - try { await promise } catch { handle }
 *     - promise.catch(() => defaultValue)
 */

Promise.resolve()
  .then(() => {
    throw new Error("Something broke");
  })
  .catch((error) => {
    console.error("Caught promise error:", error.message);
    return "recovered";
  })
  .then((value) => console.log("Next value:", value));

// Always return from catch to avoid unhandled promise rejections.
