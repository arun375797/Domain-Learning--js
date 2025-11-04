/**
 * Iterators
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE ITERATORS
 *    - Objects with Symbol.iterator method
 *    - Return iterator object
 *    - Used by for...of loops
 *    - ES6 feature
 * 
 * 2. ITERABLE PROTOCOL
 *    - Object with [Symbol.iterator]()
 *    - Returns iterator
 *    - Can be iterated
 * 
 * 3. ITERATOR PROTOCOL
 *    - Object with next() method
 *    - Returns { value, done }
 *    - done: true when finished
 * 
 * 4. BUILT-IN ITERABLES
 *    - Arrays, Strings, Maps, Sets
 *    - All have Symbol.iterator
 *    - Can use for...of
 * 
 * 5. CUSTOM ITERATORS
 *    - Implement [Symbol.iterator]()
 *    - Return iterator object
 *    - Make any object iterable
 * 
 * 6. FOR...OF LOOP
 *    - for (const value of iterable)
 *    - Uses iterator protocol
 *    - Automatic iteration
 * 
 * 7. SPREAD OPERATOR
 *    - [...iterable]
 *    - Uses iterator
 *    - Converts to array
 */

// Iterators: objects with Symbol.iterator method
// Iterable: can be used in for...of loops
// Custom iterators: implement [Symbol.iterator]() method
