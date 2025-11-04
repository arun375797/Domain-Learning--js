/**
 * Array Mutation
 * 
 * WHAT TO LEARN:
 * 
 * 1. MUTATING VS NON-MUTATING
 *    - Mutating: modifies original array
 *    - Non-mutating: returns new array, leaves original unchanged
 *    - Important distinction for predictable code
 * 
 * 2. MUTATING METHODS
 *    - push() - adds to end
 *    - pop() - removes from end
 *    - shift() - removes from start
 *    - unshift() - adds to start
 *    - splice() - adds/removes at any position
 *    - sort() - sorts in place
 *    - reverse() - reverses in place
 *    - fill() - fills with value
 *    - copyWithin() - copies within array
 * 
 * 3. NON-MUTATING METHODS
 *    - concat() - combines arrays
 *    - slice() - extracts portion
 *    - map() - transforms elements
 *    - filter() - selects elements
 *    - reduce() - accumulates value
 *    - flat() - flattens nested
 *    - flatMap() - maps then flattens
 * 
 * 4. PUSH() - ADD TO END
 *    - arr.push(item) - adds item, returns new length
 *    - Mutates original array
 *    - Can push multiple: arr.push(1, 2, 3)
 *    - Most common add operation
 * 
 * 5. POP() - REMOVE FROM END
 *    - arr.pop() - removes and returns last item
 *    - Mutates original array
 *    - Returns undefined if empty
 *    - Opposite of push
 * 
 * 6. SHIFT() - REMOVE FROM START
 *    - arr.shift() - removes and returns first item
 *    - Mutates original array
 *    - Slower than pop (reindexes all elements)
 *    - Returns undefined if empty
 * 
 * 7. UNSHIFT() - ADD TO START
 *    - arr.unshift(item) - adds to beginning, returns new length
 *    - Mutates original array
 *    - Slower than push (reindexes all elements)
 *    - Can add multiple items
 * 
 * 8. SPLICE() - ADD/REMOVE ANYWHERE
 *    - arr.splice(start, deleteCount, ...items)
 *    - Mutates original array
 *    - Returns deleted elements
 *    - Most flexible but complex
 * 
 * 9. SORT() - SORT IN PLACE
 *    - arr.sort() - sorts alphabetically by default
 *    - arr.sort((a, b) => a - b) - numeric sort
 *    - Mutates original array
 *    - Use comparator for custom sort
 * 
 * 10. REVERSE() - REVERSE IN PLACE
 *     - arr.reverse() - reverses order
 *     - Mutates original array
 *     - Returns reversed array (same reference)
 * 
 * 11. NON-MUTATING ALTERNATIVES
 *     - Instead of push: [...arr, item]
 *     - Instead of unshift: [item, ...arr]
 *     - Instead of splice: arr.slice().splice()
 *     - Instead of sort: [...arr].sort()
 *     - Instead of reverse: [...arr].reverse()
 * 
 * 12. WHEN TO MUTATE
 *     - Performance critical (large arrays)
 *     - Single owner of array
 *     - Building array incrementally
 *     - Not sharing array
 * 
 * 13. WHEN NOT TO MUTATE
 *     - React/Redux (immutability required)
 *     - Shared data
 *     - Functional programming
 *     - Need to preserve original
 *     - Easier debugging
 * 
 * 14. IMMUTABILITY BENEFITS
 *     - Predictable code
 *     - Easier debugging
 *     - Time-travel debugging
 *     - Undo/redo functionality
 *     - No side effects
 * 
 * 15. PERFORMANCE
 *     - Mutation faster (no copying)
 *     - Usually negligible difference
 *     - Prefer immutability unless proven bottleneck
 *     - Spread/slice are fast for small arrays
 */

// Mutating methods: push, pop, shift, unshift, splice, sort, reverse.
// Non-mutating alternatives: concat, slice, [...spread], map, filter.
// Prefer non-mutating methods for predictable code.
