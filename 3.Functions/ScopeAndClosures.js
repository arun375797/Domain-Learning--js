// Lexical scope: inner functions access variables from their outer scope.
// Closure example:
// function createCounter() {
//   let count = 0;
//   return () => ++count;
// }
// const counter = createCounter(); counter(); // 1
