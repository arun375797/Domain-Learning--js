/**
 * Proxy and Reflect
 * 
 * WHAT TO LEARN:
 * 
 * 1. PROXY OBJECT
 *    - new Proxy(target, handler)
 *    - Intercepts object operations
 *    - Meta-programming
 *    - ES6 feature
 * 
 * 2. PROXY HANDLERS
 *    - get(target, prop, receiver) - property access
 *    - set(target, prop, value, receiver) - property assignment
 *    - has(target, prop) - 'in' operator
 *    - deleteProperty(target, prop) - delete
 *    - Many more traps
 * 
 * 3. REFLECT API
 *    - Reflect.get(target, prop)
 *    - Reflect.set(target, prop, value)
 *    - Reflect methods mirror Proxy traps
 *    - Default behavior
 * 
 * 4. USE REFLECT IN PROXIES
 *    - Use Reflect for default behavior
 *    - Reflect.get() instead of target[prop]
 *    - Proper receiver binding
 * 
 * 5. USE CASES
 *    - Validation
 *    - Logging
 *    - Virtual properties
 *    - Reactive systems
 * 
 * 6. PERFORMANCE
 *    - Proxy has overhead
 *    - Use judiciously
 *    - Not for hot paths
 */

const user = { name: "Ada", role: "Engineer" };

const userProxy = new Proxy(user, {
  get(target, property, receiver) {
    if (!(property in target)) {
      console.warn(`Property ${String(property)} is missing`);
    }
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${String(property)} to`, value);
    return Reflect.set(target, property, value, receiver);
  },
});

userProxy.role = "Admin";
console.log(userProxy.name);
console.log(userProxy.email);

