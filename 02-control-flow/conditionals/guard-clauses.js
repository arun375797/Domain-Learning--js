/**
 * Guard Clauses
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE GUARD CLAUSES
 *    - Early returns for invalid conditions
 *    - Check preconditions first
 *    - Exit early if something wrong
 *    - Reduces nesting
 * 
 * 2. BASIC PATTERN
 *    - if (!valid) return/throw early;
 *    - Main logic at end, lower indentation
 *    - Clear separation of validation and logic
 *    - More readable
 * 
 * 3. BENEFITS
 *    - Reduces nesting (arrow anti-pattern)
 *    - Makes code more linear
 *    - Easier to read
 *    - Validates inputs upfront
 *    - Main logic not buried in nesting
 * 
 * 4. COMMON GUARD CHECKS
 *    - Null/undefined: if (!data) return;
 *    - Empty arrays: if (arr.length === 0) return;
 *    - Invalid input: if (!isValid(input)) throw Error;
 *    - Permissions: if (!hasPermission) return;
 *    - State checks: if (!isReady) return;
 * 
 * 5. WITHOUT GUARD CLAUSES (BAD)
 *    - if (user) {
 *        if (user.isActive) {
 *          if (user.hasPermission) {
 *            // main logic buried here
 *          }
 *        }
 *      }
 *    - Deep nesting, hard to read
 * 
 * 6. WITH GUARD CLAUSES (GOOD)
 *    - if (!user) return;
 *    - if (!user.isActive) return;
 *    - if (!user.hasPermission) return;
 *    - // main logic here at base level
 *    - Flat, linear, readable
 * 
 * 7. RETURN VALUES
 *    - Can return error message
 *    - Can return null/undefined
 *    - Can throw error
 *    - Can return default value
 * 
 * 8. IN FUNCTIONS
 *    - Validate parameters first
 *    - if (!isValid(param)) return error;
 *    - Main function logic after guards
 *    - Clear function structure
 * 
 * 9. IN LOOPS
 *    - Can use continue to skip iteration
 *    - for (const item of items) {
 *        if (!item.isValid) continue;
 *        // process item
 *      }
 * 
 * 10. FAIL FAST PRINCIPLE
 *     - Detect problems early
 *     - Don't waste cycles on invalid data
 *     - Clear error messages
 *     - Easier debugging
 * 
 * 11. WHEN TO USE
 *     - Function validation
 *     - API request validation
 *     - User input checks
 *     - Resource availability
 *     - State validation
 * 
 * 12. BEST PRACTICES
 *     - Keep guards at top of function
 *     - Be specific in checks
 *     - Provide clear error messages
 *     - Don't over-use (one condition = if-else OK)
 */

// Guard clauses exit early when invalid data is provided.
// Example pattern:
// if (!user) return "No user provided";
// if (!user.isActive) return "Activate account first";
// return `Welcome ${user.name}`;
