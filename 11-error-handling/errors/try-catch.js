/**
 * Try-Catch-Finally
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - try { code } catch (error) { }
 *    - try { code } catch (error) { } finally { }
 *    - Handles exceptions
 *    - Prevents program crash
 * 
 * 2. TRY BLOCK
 *    - Code that might throw
 *    - Executes normally
 *    - If error, jumps to catch
 *    - If no error, continues after try-catch
 * 
 * 3. CATCH BLOCK
 *    - Executes if error in try
 *    - Receives error object
 *    - Can handle/recover
 *    - Can rethrow
 * 
 * 4. FINALLY BLOCK
 *    - Always executes
 *    - After try or catch
 *    - For cleanup
 *    - Even if return/throw
 * 
 * 5. ERROR OBJECT
 *    - error.message - error message
 *    - error.name - error type
 *    - error.stack - stack trace
 *    - Standard properties
 * 
 * 6. ERROR TYPES
 *    - Error - base error
 *    - SyntaxError - syntax issues
 *    - TypeError - wrong type
 *    - ReferenceError - undefined variable
 *    - RangeError - out of range
 * 
 * 7. CHECKING ERROR TYPE
 *    - error instanceof TypeError
 *    - Different handling per type
 *    - Can rethrow if unknown
 * 
 * 8. RETHROWING
 *    - throw error;
 *    - Re-throw after handling
 *    - Let caller handle
 *    - Preserve stack trace
 * 
 * 9. NESTED TRY-CATCH
 *    - try { try { } catch { } } catch { }
 *    - Inner catch handles first
 *    - Outer catch handles if inner doesn't
 * 
 * 10. SCOPE
 *     - catch variable scoped to catch block
 *     - let/const in try scoped to try
 *     - var hoisted to function
 * 
 * 11. BEST PRACTICES
 *     - Wrap smallest block needed
 *     - Catch specific errors
 *     - Don't swallow errors silently
 *     - Log errors appropriately
 * 
 * 12. WHEN TO USE
 *     - External API calls
 *     - JSON parsing
 *     - File I/O
 *     - User input validation
 * 
 * 13. WHEN NOT TO USE
 *     - Control flow (use if-else)
 *     - Expected conditions
 *     - Performance critical code
 * 
 * 14. ASYNC ERRORS
 *     - try-catch doesn't catch async errors
 *     - Use .catch() for promises
 *     - Use try-catch with async/await
 */

try {
  JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Parsing failed:", error.message);
} finally {
  console.log("Cleanup resources if needed");
}

// Wrap only the smallest block necessary to catch specific issues.
