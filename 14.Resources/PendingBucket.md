# Pending Study Bucket

Use this checklist to track the theoretical topics you still want to cover.
Everything is grouped by theme so you can pick an area of focus quickly. Cross
items off or link to deeper notes as you complete them.

## Core Language Fundamentals
- JavaScript overview, dynamic vs static typing, ECMAScript history, JIT engines
- Execution context, call stack, lexical environment, hoisting, TDZ, scope chaining
- Variables (`var`/`let`/`const`), shadowing vs illegal shadowing, strict mode
- Primitive vs non-primitive values, truthy/falsy, boxing/unboxing, `typeof` quirks
- Type coercion (implicit/explicit), `==` vs `===`, nullish coalescing, optional chaining
- Template literals, escape sequences, symbols, BigInt, `typeof null`

## Control Flow & Functions
- Conditionals (`if`, `switch`, ternary), logical operators, guard clauses
- Looping strategies (for/of/in, while, do...while), labels, breaking & continuing
- Functions vs methods, declarations vs expressions, arrow vs regular (`this` context)
- Parameters, arguments, default/rest/spread usage, function composition
- Higher-order functions, callbacks, callback hell, memoization, currying, partial application
- Closures (applications & drawbacks), IIFE, module pattern, once/only-once utilities

## Data Structures & Manipulation
- Arrays: map/filter/reduce/some/every/find, `flat`/`flatMap`, splice vs slice, manual algorithms
- Strings: methods, reversing, palindrome checks, casing utilities, `String()` vs `toString()`
- Objects: property descriptors, shallow vs deep copy, merge strategies, iteration helpers
- Sets & Maps vs arrays/objects, WeakSet/WeakMap behaviors, `Object.freeze` vs `Object.seal`
- JSON methods, optional chaining on nested data, destructuring patterns

## Asynchronous & Event Loop
- Event loop phases, call stack vs task queues, microtasks vs macrotasks
- Timers: `setTimeout`, `setInterval`, `setImmediate`, `process.nextTick`
- Promises: states, chaining, combinators (`all`, `race`, `any`, `allSettled`), `Promise.finally`
- Async/await patterns, error handling, cancellation/AbortController, retries & backoff
- Fetch API, WebSockets, streaming, throttling vs debouncing, rate limiting techniques

## DOM, BOM & Browser APIs
- DOM tree traversal, selectors, manipulation, templating, event propagation & delegation
- BOM: window, history, location, dialogs, `localStorage` vs `sessionStorage`, cookies, IndexedDB
- Preventing default actions, stopping propagation, right-click handling, checkbox toggles
- Accessibility, event driven UIs, intersection observer, MutationObserver

## Advanced Language Features & Patterns
- Prototype chain, inheritance strategies, constructors vs factories, classes & mixins
- `this` binding, call/apply/bind, method borrowing, function borrowing
- Generators & iterators, async iterables, custom iterator implementations
- Proxy & Reflect APIs, traps, revocable proxies, limitations of closures
- Design patterns: Module, Factory, Observer, Singleton, Command, Adapter, Facade
- Reactive/event-driven architectures, streams, observer implementations

## Performance, Memory & Tooling
- Performance profiling, debouncing/throttling implementations, async script loading
- Big-O intuition, algorithms practice (two-sum variations, search/sort, graph basics)
- Memory management, garbage collection, avoiding leaks, weak references
- Bundlers (Webpack/Rollup/Vite), tree shaking, code splitting, lazy loading
- Module systems (CommonJS, ESM), package managers (npm/yarn/pnpm), env handling
- Testing strategies (Jest/Vitest), linting/formatting (ESLint/Prettier), CI pipelines
- Type safety: JSDoc patterns, gradual TypeScript adoption, type inference

## Security & Networking
- XSS/CSRF prevention, CSP basics, sanitizing user input, sandboxed eval alternatives
- HTTP methods/status codes, idempotency, content negotiation, headers
- REST vs GraphQL/Web APIs, CORS & preflight requests, authentication vs authorization
- Error handling strategies: centralized handlers, retries, exponential backoff

## Node.js & Backend Extras
- Node architecture, libuv, thread pool, clustering vs worker threads
- Streams (readable/writable/transform), piping, buffering, child processes
- Express middleware patterns (app.use, app.all, router chaining), error-first callbacks
- Environment config (`dotenv`), logging, rate limiting, service workers, web workers

## Database & Data Modeling (from backlog)
- MongoDB indexing (single, compound, TTL, geospatial), covered queries
- Aggregation pipeline practice (`$lookup`, `$facet`, `$addToSet`, `$expr`, `$exists`)
- Denormalization vs references, schema design, sharding, replication, GridFS
- SQL exercises: salary queries, grouping, aggregates (from noted backlog items)

## Practical Challenges Mapping
- See `15.Practical Exercises/` for coding drills grouped by topic (arrays, strings, objects, async, DOM, warmups, etc.). Many of the backlog challenges are now listed there with TODO comments ready for implementation.
- Additional algorithm prompts to revisit: two-sum closest to zero, second largest element, flatten nested structures, prime number generators, palindrome detection, countdown timers, throttled inputs, etc.

> Tip: Add dates or priority labels next to bullet points as you clear items. Consider
> linking specific resources, repos, or notes to each section when you complete them.
