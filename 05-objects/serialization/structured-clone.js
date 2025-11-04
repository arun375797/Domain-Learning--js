/**
 * Structured Clone
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS STRUCTURED CLONE
 *    - Deep cloning algorithm
 *    - structuredClone(obj)
 *    - Creates true deep copy
 *    - Modern API (2022+)
 * 
 * 2. WHAT IT CLONES
 *    - Objects and arrays (deeply)
 *    - Dates
 *    - Maps and Sets
 *    - RegExp
 *    - Typed arrays
 *    - ArrayBuffer
 *    - Blob, File
 * 
 * 3. WHAT IT DOESN'T CLONE
 *    - Functions (throws)
 *    - DOM nodes (throws)
 *    - Prototypes (not preserved)
 *    - Property descriptors (not preserved)
 *    - Getters/setters
 * 
 * 4. CIRCULAR REFERENCES
 *    - Handles circular references
 *    - Unlike JSON.stringify
 *    - const obj = {}; obj.self = obj;
 *    - structuredClone(obj) works!
 * 
 * 5. VS JSON METHOD
 *    - structuredClone preserves more types
 *    - Handles circular refs
 *    - Faster
 *    - JSON.parse/stringify loses Dates, Maps, etc.
 * 
 * 6. VS SPREAD/ASSIGN
 *    - {...obj} is shallow
 *    - structuredClone is deep
 *    - Nested objects copied, not referenced
 * 
 * 7. TRANSFERABLE OBJECTS
 *    - structuredClone(obj, { transfer: [arrayBuffer] })
 *    - Transfer ownership instead of copy
 *    - For ArrayBuffer, MessagePort, etc.
 *    - Original becomes unusable
 * 
 * 8. USE WITH WEB WORKERS
 *    - postMessage uses structured clone algorithm
 *    - Deep copies data between workers
 *    - Same limitations
 * 
 * 9. PERFORMANCE
 *    - Faster than JSON for complex objects
 *    - Slower than shallow copy
 *    - Depends on object size/depth
 *    - Synchronous operation
 * 
 * 10. BROWSER SUPPORT
 *     - Modern browsers (2022+)
 *     - Node.js 17+
 *     - No polyfill possible (requires native support)
 *     - Check before using
 * 
 * 11. WHEN TO USE
 *     - Need true deep copy
 *     - Working with Dates, Maps, Sets
 *     - Circular references
 *     - Modern environment
 * 
 * 12. WHEN NOT TO USE
 *     - Need to clone functions
 *     - Need to preserve prototypes
 *     - Old browser support needed
 *     - Shallow copy sufficient
 * 
 * 13. ALTERNATIVES
 *     - Lodash _.cloneDeep()
 *     - Manual recursive clone
 *     - JSON.parse/stringify (limited)
 * 
 * 14. ERROR HANDLING
 *     - Throws DataCloneError
 *     - When cloning unsupported types
 *     - Wrap in try-catch
 */

// structuredClone(obj) - true deep copy
// Preserves Dates, Maps, Sets, typed arrays
// Handles circular references
// Modern browsers (2022+)
