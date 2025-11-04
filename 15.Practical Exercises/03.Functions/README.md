# Functions Practice

Focus on parameters, return values, and closures. Implement the prompts inside
`practice.js`.

### Core Drills
1. `greet(name = "Guest")` — return a friendly greeting with a default.
2. `sumAll(...numbers)` — return the sum of any number of arguments.
3. `createMultiplier(factor)` — return a function that multiplies by `factor`.
4. `once(fn)` — return a function that runs `fn` only on the first call.
5. `repeat(fn, times)` — invoke `fn` a specified number of times.

### Advanced Follow-ups
- `memoize(fn)` — cache expensive results keyed by arguments.
- `curryAdd()` — build a curried adder so `curryAdd()(1)(2)(3)` returns `6`.
- `defer(fn, ms)` — delay invocation using `setTimeout`.
- `compose(...fns)` — compose functions right-to-left.
- `withThis(context, fn, ...args)` — invoke a function with explicit `this` binding.
