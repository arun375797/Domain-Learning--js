/**
 * Async Generators
 * 
 * WHAT TO LEARN:
 * 
 * 1. ASYNC GENERATOR FUNCTIONS
 *    - async function* asyncGen() { }
 *    - Combines async and generator
 *    - Can yield promises
 *    - ES2018 feature
 * 
 * 2. YIELDING PROMISES
 *    - yield await promise
 *    - Pauses until promise resolves
 *    - Returns resolved value
 * 
 * 3. FOR...AWAIT...OF
 *    - for await (const value of asyncGen())
 *    - Iterates async generator
 *    - Waits for each value
 * 
 * 4. USE CASES
 *    - Streaming data
 *    - Processing async sequences
 *    - Real-time data
 *    - Paginated APIs
 * 
 * 5. ERROR HANDLING
 *    - try/catch in generator
 *    - Or catch on for...await
 */

// Async generators: function* async, yield with Promises
// async function* asyncGenerator() { yield await promise; }
// Use for...await to iterate async generators
