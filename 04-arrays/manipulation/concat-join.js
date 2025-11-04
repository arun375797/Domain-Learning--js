/**
 * concat() and join()
 * 
 * WHAT TO LEARN:
 * 
 * 1. CONCAT() BASICS
 *    - Combines arrays into new array
 *    - Does NOT mutate originals
 *    - const combined = arr1.concat(arr2);
 *    - Returns new array
 * 
 * 2. CONCAT() WITH MULTIPLE ARRAYS
 *    - arr1.concat(arr2, arr3, arr4)
 *    - Can pass multiple arrays
 *    - Or individual values
 *    - arr1.concat(2, 3, [4, 5])
 * 
 * 3. CONCAT() WITH VALUES
 *    - arr.concat(value)
 *    - Adds value to end
 *    - arr.concat(1, 2, 3)
 *    - Adds multiple values
 * 
 * 4. CONCAT() SHALLOW COPY
 *    - Creates shallow copy
 *    - Nested objects/arrays referenced
 *    - Not deep copy
 *    - Beware with nested structures
 * 
 * 5. SPREAD ALTERNATIVE
 *    - const combined = [...arr1, ...arr2, ...arr3];
 *    - More modern
 *    - More flexible
 *    - Can mix arrays and values
 *    - [...arr1, 'extra', ...arr2]
 * 
 * 6. JOIN() BASICS
 *    - Converts array to string
 *    - arr.join(separator)
 *    - Returns string, not array
 *    - Does NOT mutate array
 * 
 * 7. JOIN() WITH SEPARATOR
 *    - [1, 2, 3].join('-') // '1-2-3'
 *    - ['a', 'b'].join('') // 'ab'
 *    - ['a', 'b'].join(', ') // 'a, b'
 *    - Default separator is comma
 * 
 * 8. JOIN() DEFAULT
 *    - arr.join() // uses comma
 *    - [1, 2, 3].join() // '1,2,3'
 *    - Same as arr.toString()
 * 
 * 9. JOIN() WITH EMPTY STRING
 *    - arr.join('')
 *    - Concatenates without separator
 *    - ['h', 'i'].join('') // 'hi'
 *    - Useful for char arrays
 * 
 * 10. JOIN() TYPE COERCION
 *     - Elements converted to strings
 *     - [1, null, undefined].join('-') // '1--'
 *     - null and undefined become empty strings
 *     - Objects call toString()
 * 
 * 11. COMMON PATTERNS
 *     - CSV: arr.join(',')
 *     - Path: parts.join('/')
 *     - Sentence: words.join(' ')
 *     - Display: items.join(', ')
 * 
 * 12. SPLIT() OPPOSITE OF JOIN
 *     - 'a-b-c'.split('-') // ['a', 'b', 'c']
 *     - String to array
 *     - Opposite of join
 *     - Common pair
 * 
 * 13. CONCAT VS PUSH
 *     - concat: non-mutating, returns new
 *     - push: mutating, adds to original
 *     - concat: [...arr, item]
 *     - push: arr.push(item)
 * 
 * 14. PERFORMANCE
 *     - concat creates new array (slower)
 *     - join is fast
 *     - For building strings, join better than +=
 *     - Usually negligible difference
 * 
 * 15. WHEN TO USE
 *     - concat: combining arrays immutably
 *     - join: array to string conversion
 *     - Consider spread operator for concat
 *     - join for string building
 */

// concat(): combines arrays (non-mutating)
// join(separator): converts array to string
// Use spread operator for modern concatenation: [...arr1, ...arr2]
