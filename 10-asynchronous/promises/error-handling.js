/**
 * Promise Error Handling
 * 
 * WHAT TO LEARN:
 * 
 * 1. CATCH() METHOD
 *    - promise.catch(error => { })
 *    - Handles rejections
 *    - Returns new promise
 *    - Essential for error handling
 * 
 * 2. CATCH IN CHAIN
 *    - .then().catch()
 *    - Catches errors from any step
 *    - Stops error propagation
 * 
 * 3. FINALLY() METHOD
 *    - promise.finally(() => { })
 *    - Always executes
 *    - After then/catch
 *    - For cleanup
 * 
 * 4. ERROR PROPAGATION
 *    - Errors bubble up chain
 *    - Until caught
 *    - Or unhandled rejection
 * 
 * 5. RETURNING FROM CATCH
 *    - .catch(() => return value)
 *    - Converts rejection to resolution
 *    - Chain continues
 * 
 * 6. RETHROWING
 *    - .catch(error => throw error)
 *    - Re-throws error
 *    - Next catch handles
 * 
 * 7. UNHANDLED REJECTIONS
 *    - Promise without catch
 *    - Warning in console
 *    - Can crash application
 *    - Always use catch
 * 
 * 8. ERROR TRANSFORMATION
 *    - .catch(error => throw new Error(...))
 *    - Wrap errors
 *    - Add context
 */

const fetchData = (shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network issue"));
        return;
      }
      resolve({ data: [1, 2, 3] });
    }, 200);
  });

fetchData(true)
  .then((result) => console.log(result))
  .catch((error) => console.error("Caught:", error.message))
  .finally(() => console.log("Cleanup here"));

