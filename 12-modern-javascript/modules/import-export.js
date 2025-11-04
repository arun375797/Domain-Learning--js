/**
 * ES Modules: Import and Export
 * 
 * WHAT TO LEARN:
 * 
 * 1. NAMED EXPORTS
 *    - export const name = value;
 *    - export function name() { }
 *    - Multiple exports per file
 *    - Import by name
 * 
 * 2. DEFAULT EXPORT
 *    - export default value;
 *    - One per file
 *    - Import with any name
 *    - More flexible naming
 * 
 * 3. NAMED IMPORTS
 *    - import { name1, name2 } from './file';
 *    - Import specific exports
 *    - Must match export names
 *    - Can rename: import { name as alias }
 * 
 * 4. DEFAULT IMPORT
 *    - import name from './file';
 *    - Import default export
 *    - Any name works
 * 
 * 5. MIXED IMPORTS
 *    - import default, { named } from './file';
 *    - Both default and named
 *    - Common pattern
 * 
 * 6. NAMESPACE IMPORT
 *    - import * as module from './file';
 *    - Import all exports
 *    - Access via module.name
 * 
 * 7. TREE SHAKING
 *    - Named exports enable tree-shaking
 *    - Unused exports removed
 *    - Smaller bundle size
 *    - Default exports less tree-shakeable
 * 
 * 8. STATIC ANALYSIS
 *    - ES modules are statically analyzable
 *    - Known at build time
 *    - Better optimization
 */

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

const mathTools = { add, multiply };
export default mathTools;

// Named exports allow tree-shaking; default exports offer flexibility.
// import mathTools, { add } from "./export.js";
// Dynamic import example:
// const { subtract } = await import("./extra.js");

