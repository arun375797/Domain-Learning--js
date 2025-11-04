/**
 * Weak References
 * 
 * WHAT TO LEARN:
 * 
 * 1. WEAKREF
 *    - new WeakRef(object)
 *    - Weak reference to object
 *    - Allows garbage collection
 *    - ES2021 feature
 * 
 * 2. DEREF()
 *    - weakRef.deref()
 *    - Returns object or undefined
 *    - undefined if GC'd
 *    - Check before use
 * 
 * 3. FINALIZATIONREGISTRY
 *    - new FinalizationRegistry(callback)
 *    - Cleanup callbacks
 *    - When object GC'd
 *    - ES2021 feature
 * 
 * 4. REGISTER CLEANUP
 *    - registry.register(object, value)
 *    - Registers cleanup
 *    - value passed to callback
 * 
 * 5. USE CASES
 *    - Cache cleanup
 *    - Resource management
 *    - Avoid memory leaks
 *    - Advanced patterns
 * 
 * 6. CAUTIONS
 *    - Not reliable timing
 *    - GC is non-deterministic
 *    - Don't rely on exact timing
 */

// WeakSet: stores objects only, allows garbage collection
// WeakMap: object keys only, allows garbage collection
// WeakRef: weak reference to an object
// FinalizationRegistry: cleanup callbacks when objects are garbage collected
