/**
 * Optional Chaining
 * 
 * WHAT TO LEARN:
 * 
 * 1. OPTIONAL CHAINING OPERATOR
 *    - obj?.prop
 *    - Safe property access
 *    - Returns undefined if nullish
 *    - ES2020 feature
 * 
 * 2. PROPERTY ACCESS
 *    - obj?.prop?.nested
 *    - Short-circuits on nullish
 *    - No error thrown
 * 
 * 3. METHOD CALLS
 *    - obj?.method?.()
 *    - Safe method calls
 *    - Only calls if exists
 * 
 * 4. ARRAY ACCESS
 *    - arr?.[index]
 *    - Safe array access
 *    - Returns undefined if arr is nullish
 * 
 * 5. COMBINING WITH NULLISH COALESCING
 *    - obj?.prop ?? defaultValue
 *    - Provides fallback
 *    - Common pattern
 * 
 * 6. SHORT-CIRCUITING
 *    - Stops at first nullish
 *    - Rest of chain not evaluated
 *    - Performance benefit
 */

const response = {
  user: {
    name: "Ada",
    contact: { email: "ada@example.com" },
  },
};

const phone = response?.user?.contact?.phone ?? "No phone on file";
console.log(phone);

// Optional chaining prevents runtime errors on missing nested properties.
// Use ?. for safe property access, ?.() for method calls, ?.[] for array access

