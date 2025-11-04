/**
 * Symbol and BigInt
 * 
 * WHAT TO LEARN:
 * 
 * 1. SYMBOL
 *    - Creates unique, immutable identifiers
 *    - Every Symbol() call creates unique value
 *    - Even with same description, symbols are unique
 *    - typeof symbol returns 'symbol'
 *    - Cannot be converted to number
 *    - Can be converted to string explicitly
 * 
 * 2. SYMBOL USE CASES
 *    - Unique property keys in objects
 *    - Avoid property name collisions
 *    - Create "private" properties (not truly private)
 *    - Well-known symbols (Symbol.iterator, Symbol.toStringTag)
 *    - Meta-programming with symbols
 * 
 * 3. SYMBOL REGISTRY
 *    - Symbol.for(key) - global symbol registry
 *    - Creates or retrieves existing symbol
 *    - Symbol.keyFor(symbol) - gets key from registry
 *    - Useful for sharing symbols across files
 * 
 * 4. WELL-KNOWN SYMBOLS
 *    - Symbol.iterator - makes object iterable
 *    - Symbol.toStringTag - custom toString behavior
 *    - Symbol.hasInstance - custom instanceof
 *    - Symbol.toPrimitive - custom type conversion
 *    - Many more built-in symbols
 * 
 * 5. BIGINT
 *    - Represents integers larger than Number.MAX_SAFE_INTEGER
 *    - Created with 'n' suffix: 123n
 *    - Or BigInt() constructor
 *    - typeof bigint returns 'bigint'
 *    - Can represent arbitrarily large integers
 * 
 * 6. BIGINT OPERATIONS
 *    - Standard math operators: +, -, *, /, %, **
 *    - Cannot mix BigInt and Number in operations
 *    - Must convert between types explicitly
 *    - No implicit type coercion
 *    - Comparison operators work across types
 * 
 * 7. BIGINT LIMITATIONS
 *    - Cannot use with Math object methods
 *    - Cannot mix with regular numbers
 *    - No decimal/fractional values
 *    - JSON.stringify doesn't support BigInt
 *    - Slower than regular numbers
 * 
 * 8. WHEN TO USE SYMBOL
 *    - Need guaranteed unique identifier
 *    - Prevent property name collisions
 *    - Implement well-known protocols
 *    - Meta-programming
 * 
 * 9. WHEN TO USE BIGINT
 *    - Working with integers > 2^53 - 1
 *    - Cryptography
 *    - Unique IDs/timestamps
 *    - Financial calculations requiring precision
 */

// Practice: create examples using Symbol() and BigInt
