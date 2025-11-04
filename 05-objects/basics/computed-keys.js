/**
 * Computed Property Names
 * 
 * WHAT TO LEARN:
 * 
 * 1. BASIC SYNTAX
 *    - { [expression]: value }
 *    - Square brackets in literal
 *    - Expression evaluated at runtime
 *    - ES6 feature
 * 
 * 2. VARIABLE AS KEY
 *    - const key = 'name';
 *    - const obj = { [key]: 'Ada' };
 *    - obj.name === 'Ada'
 *    - Dynamic property names
 * 
 * 3. EXPRESSION AS KEY
 *    - { ['user' + 'Name']: 'Ada' }
 *    - Any expression
 *    - Evaluated first
 *    - Result becomes key
 * 
 * 4. FUNCTION CALL AS KEY
 *    - { [getKey()]: value }
 *    - Function returns key name
 *    - Evaluated at creation
 * 
 * 5. TEMPLATE LITERALS
 *    - { [`user_${id}`]: data }
 *    - Dynamic keys with interpolation
 *    - Very useful pattern
 * 
 * 6. SYMBOL AS KEY
 *    - const sym = Symbol('key');
 *    - { [sym]: value }
 *    - Unique property keys
 * 
 * 7. WITH METHODS
 *    - { [methodName]() { } }
 *    - Dynamic method names
 *    - Less common
 * 
 * 8. MULTIPLE COMPUTED KEYS
 *    - { [key1]: val1, [key2]: val2 }
 *    - Mix with regular keys
 *    - { name: 'Ada', [key]: value }
 * 
 * 9. WHEN TO USE
 *    - Property names from variables
 *    - Building objects dynamically
 *    - Mapping/transforming data
 *    - When key not known at write-time
 * 
 * 10. COMMON PATTERNS
 *     - Event handlers: { [eventType]: handler }
 *     - API responses: { [userId]: userData }
 *     - Enum-like: { [STATUS.ACTIVE]: 'active' }
 * 
 * 11. WITH SPREAD
 *     - { ...obj, [key]: value }
 *     - Update computed property
 *     - Immutable updates
 * 
 * 12. ARRAY TO OBJECT
 *     - arr.reduce((obj, item) => ({
 *         ...obj,
 *         [item.id]: item
 *       }), {})
 *     - Convert array to object
 *     - Computed keys for each item
 */

// Computed property names in object literals: { [expression]: value }
// Useful for dynamic property names and property mapping
