/**
 * Promise Chaining
 * 
 * WHAT TO LEARN:
 * 
 * 1. CHAINING BASICS
 *    - promise.then().then().catch()
 *    - Each then returns new promise
 *    - Value flows through chain
 *    - Error caught by catch
 * 
 * 2. RETURNING VALUES
 *    - .then(value => newValue)
 *    - Next then receives newValue
 *    - Can return any value
 *    - Or return another promise
 * 
 * 3. RETURNING PROMISES
 *    - .then(() => anotherPromise)
 *    - Next then waits for promise
 *    - Unwraps promise value
 *    - Automatic unwrapping
 * 
 * 4. ERROR PROPAGATION
 *    - Errors bubble up chain
 *    - Until caught by catch
 *    - Or become unhandled
 * 
 * 5. CATCH IN CHAIN
 *    - .catch() catches any error
 *    - Stops error propagation
 *    - Returns resolved promise
 *    - Chain can continue
 * 
 * 6. RETURNING FROM CATCH
 *    - .catch(() => return value)
 *    - Converts rejection to resolution
 *    - Chain continues successfully
 * 
 * 7. MULTIPLE CHAINS
 *    - promise.then().then()
 *    - Each step processes value
 *    - Transform data
 * 
 * 8. FLAT STRUCTURE
 *    - No nesting needed
 *    - Readable flow
 *    - Better than callbacks
 * 
 * 9. BEST PRACTICES
 *    - Always return in then
 *    - Always have catch
 *    - Handle errors appropriately
 */

const fetchUser = () =>
  Promise.resolve({ id: 1, name: "Ada" });

fetchUser()
  .then((user) => {
    console.log("User", user);
    return { ...user, role: "admin" };
  })
  .then((userWithRole) => console.log("Role set", userWithRole))
  .catch((error) => console.error(error));

// Always return a value or promise in each then to chain cleanly.

