/**
 * Symbols
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE SYMBOLS
 *    - const sym = Symbol('description');
 *    - Unique identifiers
 *    - Cannot be recreated
 *    - Primitive type
 * 
 * 2. UNIQUENESS
 *    - Symbol() !== Symbol()
 *    - Always unique
 *    - Even with same description
 *    - Guaranteed uniqueness
 * 
 * 3. SYMBOL.FOR()
 *    - Symbol.for('key')
 *    - Global symbol registry
 *    - Reuses existing or creates
 *    - Same key = same symbol
 * 
 * 4. SYMBOL.KEYFOR()
 *    - Symbol.keyFor(symbol)
 *    - Gets key from registry
 *    - Only for Symbol.for() symbols
 * 
 * 5. WELL-KNOWN SYMBOLS
 *    - Symbol.iterator - makes iterable
 *    - Symbol.toStringTag - toString behavior
 *    - Symbol.hasInstance - instanceof
 *    - Symbol.toPrimitive - type conversion
 *    - Many more
 * 
 * 6. USE CASES
 *    - Private properties (convention)
 *    - Unique property keys
 *    - Well-known protocols
 *    - Meta-programming
 */

// Symbols: unique identifiers, useful for private properties
// const sym = Symbol('description');
// Symbol.for('key') - global symbol registry
// Symbol.iterator, Symbol.toStringTag - well-known symbols
