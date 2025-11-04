# Asynchronous Practice

Strengthen understanding of timers, promises, and async/await. Run the snippets
with Node or a browser that supports ES modules and `fetch`.

### Core Utilities
1. `wait(ms)` — return a promise that resolves after `ms`.
2. `timeout(promise, ms)` — reject if the promise does not settle in time.
3. `fetchJson(url)` — fetch JSON and return the parsed body.
4. `getUserNames(url)` — fetch a list and return an array of user names.
5. `retry(fn, attempts)` — retry an async function a fixed number of times.

### Additional Exercises
- `printNumbersWithDelay(start, end, delay)` — log numbers sequentially using timers.
- `sequentialTasks(tasks)` — execute async functions one after another.
- `parallelLimit(tasks, max)` — run promises with limited concurrency (challenge).
- `memoizedFetch(url)` — cache fetch responses to avoid duplicate requests.
- `raceWithFallback(primary, fallback)` — race two promises and return whichever settles first.
