export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

const mathTools = { add, multiply };
export default mathTools;

// Named exports allow tree-shaking; default exports offer flexibility.
