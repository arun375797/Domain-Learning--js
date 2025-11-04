/**
 * Memoization
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS MEMOIZATION
 *    - Caching function results
 *    - Stores computed values
 *    - Returns cached result for same input
 *    - Performance optimization technique
 * 
 * 2. HOW IT WORKS
 *    - First call: compute and cache result
 *    - Subsequent calls: return cached result
 *    - Uses closure to store cache
 *    - Key is function arguments
 * 
 * 3. BASIC IMPLEMENTATION
 *    - function memoize(fn) {
 *        const cache = {};
 *        return (...args) => {
 *          const key = JSON.stringify(args);
 *          if (cache[key]) return cache[key];
 *          const result = fn(...args);
 *          cache[key] = result;
 *          return result;
 *        };
 *      }
 * 
 * 4. WHEN TO USE
 *    - Expensive computations
 *    - Pure functions (same input = same output)
 *    - Recursive functions (fibonacci)
 *    - Repeated calls with same arguments
 * 
 * 5. WHEN NOT TO USE
 *    - Functions with side effects
 *    - Non-deterministic functions
 *    - Functions with changing results
 *    - Memory-constrained environments
 * 
 * 6. FIBONACCI EXAMPLE
 *    - const fib = memoize((n) => {
 *        if (n <= 1) return n;
 *        return fib(n - 1) + fib(n - 2);
 *      });
 *    - Dramatic performance improvement
 *    - O(2^n) → O(n)
 * 
 * 7. CACHE KEY STRATEGIES
 *    - JSON.stringify(args) - simple but slow
 *    - args.join(',') - fast for primitives
 *    - Map with composite keys
 *    - Custom serialization
 * 
 * 8. CACHE SIZE LIMITS
 *    - Unbounded cache can cause memory issues
 *    - LRU (Least Recently Used) cache
 *    - Set maximum cache size
 *    - Evict old entries
 * 
 * 9. MULTIPLE ARGUMENTS
 *    - Must handle multiple parameters
 *    - Combine into single key
 *    - const key = `${arg1}-${arg2}-${arg3}`;
 *    - Or use Map with array keys
 * 
 * 10. OBJECT/ARRAY ARGUMENTS
 *     - Harder to cache
 *     - JSON.stringify for deep equality
 *     - Performance overhead
 *     - WeakMap for object references
 * 
 * 11. CACHE INVALIDATION
 *     - Hardest problem in CS
 *     - Clear cache when data changes
 *     - Time-based expiration
 *     - Manual clearing
 * 
 * 12. LIBRARIES
 *     - Lodash: _.memoize()
 *     - Memoizee
 *     - Fast-memoize
 *     - React: useMemo, React.memo
 * 
 * 13. BENEFITS
 *     - Improved performance
 *     - Reduced computation
 *     - Trade memory for speed
 *     - Easy to implement
 * 
 * 14. DRAWBACKS
 *     - Memory usage
 *     - Only for pure functions
 *     - Cache key complexity
 *     - Stale data risk
 * 
 * 15. REACT EXAMPLE
 *     - const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);
 *     - Recomputes only when dependencies change
 *     - Built-in memoization
 */

// Memoization: caching function results to avoid repeated calculations.
// Useful for expensive computations and recursive functions.
