/**
 * JSON Serialization
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS JSON
 *    - JavaScript Object Notation
 *    - Text format for data exchange
 *    - Language-independent
 *    - Human-readable
 * 
 * 2. JSON.STRINGIFY()
 *    - Converts JS value to JSON string
 *    - JSON.stringify(obj)
 *    - Returns string
 *    - For storage/transmission
 * 
 * 3. JSON.PARSE()
 *    - Converts JSON string to JS value
 *    - JSON.parse(jsonString)
 *    - Returns JS object/array/primitive
 *    - For reading stored/received data
 * 
 * 4. SUPPORTED TYPES
 *    - Objects: { }
 *    - Arrays: [ ]
 *    - Strings: "text"
 *    - Numbers: 123, 3.14
 *    - Booleans: true, false
 *    - null
 * 
 * 5. NOT SUPPORTED
 *    - undefined (omitted)
 *    - Functions (omitted)
 *    - Symbols (omitted)
 *    - NaN/Infinity (become null)
 *    - Dates (become strings)
 *    - RegExp (become {})
 * 
 * 6. PRETTY PRINTING
 *    - JSON.stringify(obj, null, 2)
 *    - Third param: indentation
 *    - More readable output
 *    - Larger file size
 * 
 * 7. REPLACER FUNCTION
 *    - JSON.stringify(obj, replacer)
 *    - function replacer(key, value) {}
 *    - Transform values during serialization
 *    - Filter properties
 * 
 * 8. REPLACER ARRAY
 *    - JSON.stringify(obj, ['prop1', 'prop2'])
 *    - Include only specified properties
 *    - Whitelist approach
 * 
 * 9. REVIVER FUNCTION
 *    - JSON.parse(str, reviver)
 *    - function reviver(key, value) {}
 *    - Transform values during parsing
 *    - Restore Dates, etc.
 * 
 * 10. TOJSON() METHOD
 *     - Custom serialization
 *     - obj.toJSON = function() { return customFormat; }
 *     - Called by JSON.stringify()
 *     - Control output
 * 
 * 11. CIRCULAR REFERENCES
 *     - JSON.stringify throws on circular refs
 *     - Cannot serialize circular structures
 *     - Need custom logic or library
 * 
 * 12. DEEP COPY HACK
 *     - JSON.parse(JSON.stringify(obj))
 *     - Quick deep copy
 *     - Loses functions, dates, etc.
 *     - Use structuredClone() instead
 * 
 * 13. ERROR HANDLING
 *     - JSON.parse() throws SyntaxError
 *     - Wrap in try-catch
 *     - Validate JSON before parsing
 * 
 * 14. COMMON USE CASES
 *     - localStorage: JSON.stringify for storage
 *     - API communication
 *     - Configuration files
 *     - Data export/import
 * 
 * 15. PERFORMANCE
 *     - Fast for small-medium objects
 *     - Slows with large/deep objects
 *     - Synchronous operation
 */

// JSON.stringify(obj) - object to JSON string
// JSON.parse(jsonString) - JSON string to object
// Use for storage, API communication, data exchange
