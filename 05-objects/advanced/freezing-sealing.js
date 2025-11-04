/**
 * Freezing, Sealing, and Preventing Extensions
 * 
 * WHAT TO LEARN:
 * 
 * 1. OBJECT.FREEZE()
 *    - Makes object immutable
 *    - Cannot add, remove, or modify properties
 *    - Shallow freeze only
 *    - Returns same object
 * 
 * 2. FREEZE BEHAVIOR
 *    - Prevents property changes
 *    - Prevents adding new properties
 *    - Prevents deleting properties
 *    - Prevents changing property descriptors
 *    - Shallow: nested objects not frozen
 * 
 * 3. CHECKING IF FROZEN
 *    - Object.isFrozen(obj)
 *    - Returns boolean
 *    - Checks if frozen
 * 
 * 4. OBJECT.SEAL()
 *    - Cannot add or remove properties
 *    - CAN modify existing properties
 *    - Less restrictive than freeze
 *    - Returns same object
 * 
 * 5. SEAL BEHAVIOR
 *    - Can change values: obj.prop = newValue
 *    - Cannot add: obj.newProp = value (fails silently or throws)
 *    - Cannot delete: delete obj.prop (fails)
 *    - Cannot change descriptors
 * 
 * 6. CHECKING IF SEALED
 *    - Object.isSealed(obj)
 *    - Returns boolean
 *    - Frozen objects are also sealed
 * 
 * 7. OBJECT.PREVENTEXTENSIONS()
 *    - Cannot add new properties
 *    - CAN modify existing
 *    - CAN delete existing
 *    - Least restrictive
 * 
 * 8. PREVENT EXTENSIONS BEHAVIOR
 *    - Can modify: obj.prop = newValue
 *    - Can delete: delete obj.prop
 *    - Cannot add: obj.newProp = value (fails)
 * 
 * 9. CHECKING EXTENSIBILITY
 *    - Object.isExtensible(obj)
 *    - Returns boolean
 *    - true by default
 * 
 * 10. COMPARISON
 *     - preventExtensions: no add
 *     - seal: no add/remove
 *     - freeze: no add/remove/modify
 *     - Increasing restrictiveness
 * 
 * 11. STRICT MODE
 *     - Without strict: fails silently
 *     - With strict: throws TypeError
 *     - Always use strict mode
 * 
 * 12. SHALLOW ONLY
 *     - Only affects top level
 *     - Nested objects not affected
 *     - Need deep freeze for nested
 * 
 * 13. DEEP FREEZE
 *     - function deepFreeze(obj) {
 *         Object.freeze(obj);
 *         Object.values(obj).forEach(val => {
 *           if (typeof val === 'object') deepFreeze(val);
 *         });
 *       }
 *     - Recursively freeze all levels
 * 
 * 14. WHEN TO USE
 *     - freeze: constants, configuration
 *     - seal: fixed structure objects
 *     - preventExtensions: controlled growth
 * 
 * 15. PERFORMANCE
 *     - Slight overhead
 *     - Usually negligible
 *     - Can enable engine optimizations
 */

// Object.freeze(obj) - prevents all changes (shallow)
// Object.seal(obj) - prevents adding/removing properties, but allows modification
// Object.preventExtensions(obj) - prevents adding new properties
// Use Object.freeze / Object.seal to control mutability in large codebases.
