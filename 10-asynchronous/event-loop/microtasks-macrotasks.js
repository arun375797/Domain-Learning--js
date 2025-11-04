/**
 * Microtasks and Macrotasks
 * 
 * WHAT TO LEARN:
 * 
 * 1. EVENT LOOP
 *    - Processes tasks
 *    - Two queues: microtask and macrotask
 *    - Microtasks have priority
 *    - Runs continuously
 * 
 * 2. MICROTASKS
 *    - Promise.then callbacks
 *    - queueMicrotask()
 *    - MutationObserver
 *    - Higher priority
 * 
 * 3. MACROTASKS
 *    - setTimeout callbacks
 *    - setInterval callbacks
 *    - I/O operations
 *    - Lower priority
 * 
 * 4. EXECUTION ORDER
 *    - 1. Current code
 *    - 2. All microtasks
 *    - 3. One macrotask
 *    - 4. All microtasks again
 *    - Repeat
 * 
 * 5. MICROTASK PRIORITY
 *    - Run before macrotasks
 *    - All microtasks before next macrotask
 *    - Can starve macrotasks
 * 
 * 6. QUEUEMICROTASK
 *    - queueMicrotask(() => { })
 *    - Schedule microtask
 *    - Runs after current code
 * 
 * 7. BEST PRACTICES
 *    - Understand execution order
 *    - Don't create infinite microtasks
 *    - Use appropriately
 */

// Microtasks: Promise.then, queueMicrotask, MutationObserver
// Macrotasks: setTimeout, setInterval, I/O operations
// Microtasks run before macrotasks; event loop prioritizes microtask queue
