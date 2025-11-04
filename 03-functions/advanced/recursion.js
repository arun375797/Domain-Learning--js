/**
 * Recursion
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS RECURSION
 *    - Function calls itself
 *    - Breaks problem into smaller subproblems
 *    - Solves subproblems recursively
 *    - Combines results
 * 
 * 2. BASE CASE
 *    - Condition to stop recursion
 *    - Prevents infinite recursion
 *    - Must be reachable
 *    - Returns without recursing
 *    - CRITICAL: always have base case
 * 
 * 3. RECURSIVE CASE
 *    - Calls function with modified input
 *    - Moves toward base case
 *    - Smaller/simpler problem
 *    - Eventually reaches base case
 * 
 * 4. BASIC EXAMPLE: FACTORIAL
 *    - const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
 *    - Base: n <= 1 returns 1
 *    - Recursive: n * factorial(n - 1)
 *    - factorial(5) = 5 * 4 * 3 * 2 * 1
 * 
 * 5. CALL STACK
 *    - Each call added to stack
 *    - Stack grows with depth
 *    - Base case starts unwinding
 *    - Can overflow with deep recursion
 * 
 * 6. STACK OVERFLOW
 *    - Too many recursive calls
 *    - Maximum call stack size exceeded
 *    - Happens without proper base case
 *    - Or very deep recursion
 * 
 * 7. WHEN TO USE RECURSION
 *    - Tree/graph traversal
 *    - Divide and conquer algorithms
 *    - Mathematical sequences
 *    - Nested data structures
 *    - When problem naturally recursive
 * 
 * 8. WHEN NOT TO USE
 *    - Simple iteration is clearer
 *    - Very deep recursion (stack overflow risk)
 *    - Performance critical code
 *    - Can use loop instead
 * 
 * 9. RECURSION VS ITERATION
 *    - Recursion: more elegant for some problems
 *    - Iteration: usually faster, no stack limit
 *    - Recursion uses more memory
 *    - Choose based on problem
 * 
 * 10. TAIL RECURSION
 *     - Recursive call is last operation
 *     - Some languages optimize (not JavaScript)
 *     - Can be converted to loop
 *     - Avoids growing stack
 * 
 * 11. TREE TRAVERSAL
 *     - function traverse(node) {
 *         if (!node) return;
 *         process(node);
 *         traverse(node.left);
 *         traverse(node.right);
 *       }
 *     - Natural fit for recursion
 * 
 * 12. ARRAY RECURSION
 *     - function sum(arr, i = 0) {
 *         if (i >= arr.length) return 0;
 *         return arr[i] + sum(arr, i + 1);
 *       }
 *     - Process one element, recurse rest
 * 
 * 13. COMMON PATTERNS
 *     - Factorial
 *     - Fibonacci
 *     - Tree traversal
 *     - JSON deep copy
 *     - Flatten nested arrays
 * 
 * 14. DEBUGGING RECURSION
 *     - Add console.log for each call
 *     - Track depth/input
 *     - Verify base case reached
 *     - Check input modification
 */

// Recursive functions call themselves with new input until a base case is met.
// Example: const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// Ensure you have a base case and that each call moves toward it.
